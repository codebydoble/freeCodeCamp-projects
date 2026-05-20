/**
 * ========================================
 * PART 3 & 4 FIXES: CLOSURE PATTERNS
 * ========================================
 */

// ── F1: Memoize ───────────────────────────
// Bug in original: You just returned the function call without saving the result.
const memoize = (fn) => {
  const cache = new Map(); // <-- The Closure "Backpack"
  
  return (...args) => {
    // Convert arguments to a string so we can use it as a key
    const key = JSON.stringify(args); 
    
    if (cache.has(key)) {
      return cache.get(key); // Return cached result
    }
    
    const result = fn(...args);
    cache.set(key, result); // Save to backpack
    return result;
  }
}

// ── F3: Curry ─────────────────────────────
// Bug in original: You returned a function, but didn't check if you had enough arguments.
const curry = (fn) => {
  return function curried(...args) { // <-- The Closure "Backpack" for args
    if (args.length >= fn.length) {
      // We have enough arguments! Run the original function.
      return fn(...args);
    } else {
      // Not enough arguments yet. Return a function to collect more.
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  }
}

// ── F4: Once ──────────────────────────────
// Bug in original: You stopped it from running twice, but didn't return the original result on subsequent calls.
const once = (fn) => {
  let called = false; // <-- The Closure "Backpack"
  let result;
  
  return (...args) => {
    if (!called) {
      result = fn(...args); // Save the result
      called = true;        // Flip the flag
    }
    return result; // Always return the saved result
  }
}

// ── F6: Debounce ──────────────────────────
// Bug in original: You executed fn(msg) immediately instead of passing a callback to setTimeout.
const debounce = (fn, delay) => {
  let timeoutId; // <-- The Closure "Backpack"
  
  return (...args) => {
    clearTimeout(timeoutId); // Reset the clock
    
    // We pass an anonymous function to setTimeout so it waits!
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

// ── X3: Event Emitter ─────────────────────
// Bug in original: Overcomplicated state tracking. Just use arrays of functions!
const createEmitter = () => {
  return {
    events: {}, // <-- The Closure "Backpack" holding all subscribers
    
    on(event, listener) {
      if (!this.events[event]) this.events[event] = [];
      this.events[event].push(listener);
    },
    
    off(event, listener) {
      if (!this.events[event]) return;
      // Filter out the specific listener we want to remove
      this.events[event] = this.events[event].filter(l => l !== listener);
    },
    
    emit(event, ...args) {
      if (!this.events[event]) return;
      // Run every function subscribed to this event
      this.events[event].forEach(listener => listener(...args));
    },
    
    once(event, listener) {
      // Create a wrapper that runs the listener, then immediately unsubscribes ITSELF
      const onceWrapper = (...args) => {
        listener(...args);
        this.off(event, onceWrapper);
      };
      this.on(event, onceWrapper);
    }
  }
}