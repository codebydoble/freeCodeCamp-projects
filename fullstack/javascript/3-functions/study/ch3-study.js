// =============================================
// main.js - Ejemplo Completo Vanilla JS
// =============================================

const usuario = {
  nombre: "Yoandy",
  edad: 30,
  skills: ["React", "TypeScript", "Node.js", "Tailwind"],
  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
    this.mostrarEdad() // Llamando a otro método del mismo objeto
    this.mostrarSkills()
  },
  mostrarEdad() {
    console.log(`Tengo ${this.edad} años`)
  },
  mostrarSkills() {
    console.log("Mis skills:")
    this.skills.forEach((skill) => console.log(`  - ${skill}`))
  },

  // Ejemplo con closure + acumulador dentro del objeto
  crearContador() {
    let contador = 0 // Variable privada gracias al closure

    return {
      incrementar: function () {
        contador++
        console.log(`Contador: ${contador}`)
        return contador
      },
      decrementar: function () {
        contador--
        console.log(`Contador: ${contador}`)
        return contador
      },
      obtenerValor: function () {
        return contador
      },
      reset: function () {
        contador = 0
        console.log("Contador reiniciado")
      },
    }
  },
}

// ========================
// Uso del objeto
// ========================
console.log("%c=== Ejecución del objeto ===", "color: cyan; font-weight: bold")
usuario.saludar()

// Crear un contador usando closure
const miContador = usuario.crearContador()

console.log("%c=== Probando Closure + Acumulador ===", "color: lime; font-weight: bold")
miContador.incrementar()
miContador.incrementar()
miContador.incrementar()
miContador.decrementar()
console.log("Valor actual:", miContador.obtenerValor())
miContador.reset()

// =============================================
// Ejemplos Avanzados de Closures y Acumuladores
// =============================================

/**
 * 1. Closure simple con acumulador (contador privado)
 */
function crearContadorInicial(valorInicial = 0) {
  let contador = valorInicial

  return {
    sumar: (cantidad = 1) => {
      contador += cantidad
      return contador
    },
    restar: (cantidad = 1) => {
      contador -= cantidad
      return contador
    },
    valor: () => contador,
    reset: () => {
      contador = valorInicial
      return contador
    },
  }
}

const contador1 = crearContadorInicial(10)
console.log("Contador1:", contador1.valor()) // 10
contador1.sumar(5) // 15
contador1.sumar() // 16

/**
 * 2. Acumulador de total (como un reduce pero persistente)
 */
function crearAcumulador() {
  let total = 0
  let historial = []

  return {
    agregar: (monto) => {
      total += monto
      historial.push(monto)
      console.log(`Agregado: \[ {monto} | Total: \]{total}`)
      return total
    },
    obtenerTotal: () => total,
    obtenerHistorial: () => [...historial], // copia para no romper encapsulación
    promedio: () => (historial.length ? total / historial.length : 0),
    reset: () => {
      total = 0
      historial = []
    },
  }
}

const caja = crearAcumulador()
caja.agregar(100)
caja.agregar(250)
caja.agregar(75)
console.log("Total final:", caja.obtenerTotal())
console.log("Promedio:", caja.promedio())

// =============================================
// Diferencia entre reduce() y Closure
// =============================================

const numeros = [10, 20, 30, 40]

// Con reduce (una sola operación)
const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log("Suma con reduce:", sumaTotal)

// Con closure (estado persistente a lo largo del tiempo)
function crearAcumuladorPersistente() {
  let suma = 0

  return (nuevoNumero) => {
    suma += nuevoNumero
    console.log(`Acumulando... +${nuevoNumero} = ${suma}`)
    return suma
  }
}

const acumular = crearAcumuladorPersistente()
acumular(10)
acumular(20)
acumular(30) // mantiene el estado entre llamadas

// ========================================================
// patrones-funciones-avanzadas.js
// Archivo educativo completo - Vanilla JS
// Autor: Senior Front-end Fullstack
// ========================================================

console.log("%c=== PATRONES DE DISEÑO, CLOSURES, IIFE Y MÓDULOS ===", "color: #00ffcc; font-size: 16px; font-weight: bold")

/* =============================================================
   1. IIFE - Immediately Invoked Function Expression
   ============================================================= */
const IIFE = (function () {
  // Variables privadas
  let contadorPrivado = 0
  const nombreApp = "MiAppVanilla"

  function incrementar() {
    contadorPrivado++
    console.log(`[IIFE] Contador privado: ${contadorPrivado}`)
  }

  // API pública
  return {
    saludar: () => console.log(`Hola desde ${nombreApp}`),
    incrementarContador: incrementar,
    obtenerContador: () => contadorPrivado,
  }
})()

// Uso del IIFE
IIFE.saludar()
IIFE.incrementarContador()
IIFE.incrementarContador()

/* =============================================================
   2. CLOSURES + Acumuladores + Estado Persistente
   ============================================================= */

/**
 * Contador con delay (setTimeout)
 */
function crearContadorConDelay() {
  let count = 0
  let timer = null

  function incrementarConDelay(ms = 1000) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      count++
      console.log(`%c[Delay] Contador aumentó a: ${count}`, "color: orange")
    }, ms)
  }

  return {
    incrementar: incrementarConDelay,
    valor: () => count,
    reset: () => {
      count = 0
    },
  }
}

const contadorDelay = crearContadorConDelay()
contadorDelay.incrementar(800)
contadorDelay.incrementar(1500) // Sobrescribe el timer anterior

/* =============================================================
   3. MINI ESTADO GLOBAL SEGURO (Pattern muy usado en Vanilla JS)
   ============================================================= */

const EstadoGlobal = (function () {
  // Estado privado (closure)
  let state = {
    usuario: null,
    tema: "light",
    notificaciones: 0,
    carrito: [],
  }

  const listeners = new Set() // Para patrón Observer básico

  function notify() {
    listeners.forEach((callback) => callback(state))
  }

  return {
    getState: () => ({ ...state }), // Retorna copia

    setUsuario: (usuario) => {
      state.usuario = usuario
      notify()
      console.log("%c[Estado] Usuario actualizado", "color: lime", usuario)
    },

    cambiarTema: (nuevoTema) => {
      state.tema = nuevoTema
      document.documentElement.setAttribute("data-theme", nuevoTema)
      notify()
    },

    agregarAlCarrito: (producto) => {
      state.carrito.push(producto)
      state.notificaciones++
      notify()
      console.log(`Producto agregado: ${producto.nombre}`)
    },

    subscribe: (callback) => {
      listeners.add(callback)
      // Retorna función para desuscribirse
      return () => listeners.delete(callback)
    },

    reset: () => {
      state = { usuario: null, tema: "light", notificaciones: 0, carrito: [] }
      notify()
    },
  }
})()

// Ejemplo de uso del estado global seguro
EstadoGlobal.subscribe((nuevoEstado) => {
  console.log("%c[Observer] Estado cambió:", "color: violet", nuevoEstado)
})

EstadoGlobal.setUsuario({ id: 1, nombre: "Yoandy" })
EstadoGlobal.cambiarTema("dark")
EstadoGlobal.agregarAlCarrito({ id: 101, nombre: "Curso JS Avanzado", precio: 89 })

/* =============================================================
   4. PATRONES DE DISEÑO MÁS USADOS EN VANILLA JS
   ============================================================= */

// 4.1 Module Pattern (Moderno con IIFE)
const ModuloUsuario = (function () {
  let usuarios = []

  function agregar(usuario) {
    usuarios.push(usuario)
    console.log(`Usuario agregado: ${usuario.nombre}`)
  }

  function listar() {
    console.table(usuarios)
    return usuarios
  }

  function buscarPorId(id) {
    return usuarios.find((u) => u.id === id)
  }

  // API pública
  return { agregar, listar, buscarPorId }
})()

ModuloUsuario.agregar({ id: 1, nombre: "Yoandy", rol: "Senior" })

// 4.2 Factory Pattern
function crearPersona(nombre, edad) {
  let _edad = edad // privada

  return {
    nombre,
    saludar() {
      console.log(`Hola, me llamo ${this.nombre} y tengo ${_edad} años`)
    },
    cumplirAnios() {
      _edad++
      console.log(`${this.nombre} cumplió años! Ahora tiene ${_edad}`)
    },
  }
}

const persona1 = crearPersona("Ana", 28)
persona1.saludar()
persona1.cumplirAnios()

// 4.3 Singleton Pattern (usando closure)
const SingletonDB = (function () {
  let instancia = null

  function crearInstancia() {
    return {
      conexion: "Activa",
      query: (sql) => console.log(`Ejecutando: ${sql}`),
    }
  }

  return {
    getInstance: () => {
      if (!instancia) {
        instancia = crearInstancia()
        console.log("Nueva conexión a BD creada")
      }
      return instancia
    },
  }
})()

const db1 = SingletonDB.getInstance()
const db2 = SingletonDB.getInstance()
console.log("¿Son la misma instancia?", db1 === db2)

// 4.4 Revealing Module Pattern
const Calculadora = (function () {
  function sumar(a, b) {
    return a + b
  }
  function restar(a, b) {
    return a - b
  }
  function multiplicar(a, b) {
    return a * b
  }

  // Solo revelamos lo que queremos
  return {
    suma: sumar,
    resta: restar,
    multiplicacion: multiplicar,
    version: "2.0",
  }
})()

/* =============================================================
   5. RESUMEN DE CONCEPTOS IMPORTANTES SOBRE FUNCIONES
   ============================================================= */

console.log("%c=== CONCEPTOS CLAVE SOBRE FUNCIONES ===", "color: #ffcc00; font-weight: bold")

/*
1. Function Declaration (hoisted)
2. Function Expression
3. Arrow Functions (sin this propio)
4. IIFE
5. Higher-Order Functions (reciben o devuelven funciones)
6. Closures (captura de variables)
7. Currying
8. Partial Application
9. Factory Functions
10. Module Pattern
*/

// Ejemplo de Currying
const curriedSuma = (a) => (b) => (c) => a + b + c
console.log("Currying:", curriedSuma(5)(10)(15))

// Ejemplo de Higher-Order Function
function conLogger(fn) {
  return function (...args) {
    console.log(`%c[Llamando función]: ${fn.name}`, "color: cyan")
    return fn(...args)
  }
}

const sumaConLog = conLogger((x, y) => x + y)
sumaConLog(7, 8)

// ========================================================
// patrones-avanzados-vanilla.js
// Patrones Avanzados, Arquitectura y Buenas Prácticas
// Vanilla JS - Senior Front-end Fullstack
// ========================================================

console.log("%c=== PATRONES AVANZADOS EN VANILLA JS ===", "color: #00ff88; font-size: 18px; font-weight: bold")

/* =============================================================
   1. EVENT EMITTER PERSONALIZADO (muy útil)
   ============================================================= */
class EventEmitter {
  constructor() {
    this.events = new Map()
  }

  on(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, [])
    }
    this.events.get(eventName).push(callback)
    return () => this.off(eventName, callback) // Retorna unsubscribe
  }

  off(eventName, callback) {
    if (!this.events.has(eventName)) return
    const callbacks = this.events.get(eventName)
    this.events.set(
      eventName,
      callbacks.filter((cb) => cb !== callback),
    )
  }

  emit(eventName, ...args) {
    if (!this.events.has(eventName)) return
    this.events.get(eventName).forEach((callback) => {
      try {
        callback(...args)
      } catch (error) {
        console.error(`Error en evento ${eventName}:`, error)
      }
    })
  }

  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}

// Uso del EventEmitter
const emitter = new EventEmitter()

const unsubscribe = emitter.on("user:login", (usuario) => {
  console.log(`%c[Evento] Usuario inició sesión: ${usuario.nombre}`, "color: gold")
})

emitter.emit("user:login", { nombre: "Yoandy", rol: "Senior" })
unsubscribe() // Desuscribirse

/* =============================================================
   2. PUB/SUB PATTERN (Publicador / Suscriptor)
   ============================================================= */
const PubSub = (function () {
  const topics = new Map()
  let id = 0

  return {
    subscribe: (topic, listener) => {
      if (!topics.has(topic)) topics.set(topic, [])

      const subscriberId = ++id
      topics.get(topic).push({ id: subscriberId, listener })

      return () => {
        const listeners = topics.get(topic)
        topics.set(
          topic,
          listeners.filter((sub) => sub.id !== subscriberId),
        )
      }
    },

    publish: (topic, data) => {
      if (!topics.has(topic)) return
      topics.get(topic).forEach((subscriber) => {
        try {
          subscriber.listener(data)
        } catch (e) {
          console.error(`Error en topic ${topic}:`, e)
        }
      })
    },
  }
})()

// Ejemplo Pub/Sub
PubSub.subscribe("cart:updated", (carrito) => {
  console.log(`%c[PubSub] Carrito actualizado → ${carrito.length} productos`, "color: hotpink")
})

PubSub.publish("cart:updated", [
  { id: 1, name: "Curso JS" },
  { id: 2, name: "Tailwind" },
])

/* =============================================================
   3. DECORADORES (Decorator Pattern)
   ============================================================= */
function logExecution(targetFunction, functionName = targetFunction.name) {
  return function (...args) {
    console.time(functionName)
    const result = targetFunction(...args)
    console.timeEnd(functionName)
    console.log(`%c[Decorador] ${functionName} ejecutado con args:`, "color: cyan", args)
    return result
  }
}

function debounce(fn, delay = 300) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

// Uso
const buscar = logExecution((query) => {
  console.log(`Buscando: ${query}`)
  return `Resultados para ${query}`
}, "buscar")

buscar("JavaScript Avanzado")

/* =============================================================
   4. MEMOIZATION (Optimización de funciones puras)
   ============================================================= */
function memoize(fn) {
  const cache = new Map()

  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      console.log(`[Memoization] ✅ Cache hit para: ${key}`)
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)
    console.log(`[Memoization] 📦 Cache miss - Guardado: ${key}`)
    return result
  }
}

const fibonacci = memoize(function (n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
})

console.log("Fib(10) =", fibonacci(10))
console.log("Fib(12) =", fibonacci(12)) // Usará caché para valores anteriores

/* =============================================================
   5. EVENT DELEGATION (Gestión avanzada de eventos)
   ============================================================= */
function initEventDelegation() {
  const container = document.createElement("div")
  container.id = "dynamic-container"
  document.body.appendChild(container)

  // Event Delegation - Un solo listener para muchos elementos
  container.addEventListener("click", function (e) {
    if (e.target.matches(".btn-delete")) {
      console.log("Eliminar elemento:", e.target.dataset.id)
      e.target.closest(".item").remove()
    }

    if (e.target.matches(".btn-edit")) {
      console.log("Editar elemento:", e.target.dataset.id)
    }
  })

  // Agregar elementos dinámicamente
  container.innerHTML = `
        <div class="item" data-id="1">
            <h3>Producto 1</h3>
            <button class="btn-edit" data-id="1">Editar</button>
            <button class="btn-delete" data-id="1">Eliminar</button>
        </div>
    `
}

initEventDelegation()

/* =============================================================
   6. ESTRUCTURA DE PROYECTO GRANDE EN VANILLA JS
   ============================================================= */

/*
Estructura recomendada (Scalable Vanilla JS Architecture):

/proyecto-vanilla/
├── index.html
├── /assets/
│   ├── css/
│   └── images/
├── /js/
│   ├── /core/                  ← Base del framework
│   │   ├── eventEmitter.js
│   │   ├── pubsub.js
│   │   ├── store.js
│   │   └── utils.js
│   ├── /modules/               ← Módulos por dominio
│   │   ├── auth/
│   │   │   ├── auth.module.js
│   │   │   └── auth.ui.js
│   │   ├── cart/
│   │   ├── products/
│   │   └── ui/
│   ├── /components/            ← Web Components o Custom Elements
│   ├── /services/              ← API calls
│   └── main.js                 ← Entry point
├── /utils/
└── package.json (opcional con Vite/Parcel)
*/

// Ejemplo de main.js (Entry Point)
const App = (function () {
  let initialized = false

  function init() {
    if (initialized) return

    console.log("%c🚀 Aplicación Vanilla JS inicializada", "color: lime; font-size: 14px")

    // Inicializar módulos
    // AuthModule.init();
    // CartModule.init();
    // EventEmitter.global = new EventEmitter();

    initialized = true
  }

  return { init }
})()

// Auto-inicialización cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", App.init)
} else {
  App.init()
}

// ========================================================
// app-avanzada-vanilla.js
// Mini Aplicación Completa: ToDo + Carrito
// Web Components + Proxy State + Vanilla Router
// Senior Front-end Fullstack
// ========================================================

console.log("%c🚀 App Avanzada Vanilla JS - Iniciada", "color:#00ffcc; font-size:18px; font-weight:bold")

/* =============================================================
   1. STATE MANAGEMENT AVANZADO CON PROXY
   ============================================================= */
const createStore = (initialState) => {
  let state = { ...initialState }
  const listeners = new Set()

  const proxy = new Proxy(state, {
    set(target, property, value) {
      target[property] = value
      notify()
      return true
    },
  })

  function notify() {
    listeners.forEach((listener) => listener(proxy))
  }

  return {
    state: proxy,
    subscribe: (listener) => {
      listeners.add(listener)
      listener(proxy) // Llamada inicial
      return () => listeners.delete(listener)
    },
    setState: (newState) => {
      Object.assign(state, newState)
      notify()
    },
  }
}

// Store global de la aplicación
const appStore = createStore({
  todos: [],
  cart: [],
  route: "home",
  theme: "light",
})

/* =============================================================
   2. WEB COMPONENTS + CUSTOM ELEMENTS
   ============================================================= */

// Componente: Todo Item
class TodoItem extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
    this.addEventListeners()
  }

  set todo(data) {
    this._todo = data
    if (this.shadowRoot) this.render()
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 12px;
                    border-bottom: 1px solid #333;
                }
                .completed { text-decoration: line-through; opacity: 0.6; }
            </style>
            <div class="${this._todo.completed ? "completed" : ""}">
                <input type="checkbox" ${this._todo.completed ? "checked" : ""}>
                <span>${this._todo.text}</span>
                <button class="delete">🗑</button>
            </div>
        `
  }

  addEventListeners() {
    const checkbox = this.shadowRoot.querySelector("input")
    const deleteBtn = this.shadowRoot.querySelector(".delete")

    checkbox.addEventListener("change", () => {
      window.dispatchEvent(new CustomEvent("todo:toggle", { detail: this._todo.id }))
    })

    deleteBtn.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("todo:delete", { detail: this._todo.id }))
    })
  }
}

customElements.define("todo-item", TodoItem)

// Componente: Cart Item
class CartItem extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  set item(data) {
    this._item = data
    this.render()
  }

  render() {
    this.innerHTML = `
            <div style="display:flex; justify-content:space-between; padding:10px; border:1px solid #444; margin:5px 0;">
                <span>${this._item.name} × ${this._item.quantity}</span>
                <span>\[ {(this._item.price * this._item.quantity).toFixed(2)}</span>
            </div>
        `
  }
}

customElements.define("cart-item", CartItem)

/* =============================================================
   3. VANILLA ROUTER
   ============================================================= */
class VanillaRouter {
  constructor() {
    this.routes = new Map()
    window.addEventListener("popstate", () => this.handleRoute())
  }

  addRoute(path, callback) {
    this.routes.set(path, callback)
  }

  navigate(path) {
    history.pushState({}, "", path)
    this.handleRoute()
  }

  handleRoute() {
    const path = window.location.pathname || "/"
    const handler = this.routes.get(path) || this.routes.get("*")
    if (handler) handler()
  }
}

const router = new VanillaRouter()

router.addRoute("/", () => appStore.setState({ route: "home" }))
router.addRoute("/cart", () => appStore.setState({ route: "cart" }))
router.addRoute("*", () => appStore.setState({ route: "home" }))

/* =============================================================
   4. MINI APLICACIÓN - LÓGICA PRINCIPAL
   ============================================================= */

const AppFour = {
  init() {
    this.bindEvents()
    this.render()
    router.handleRoute()
  },

  bindEvents() {
    // Eventos globales
    window.addEventListener("todo:add", (e) => {
      const todos = [
        ...appStore.state.todos,
        {
          id: Date.now(),
          text: e.detail,
          completed: false,
        },
      ]
      appStore.setState({ todos })
    })

    window.addEventListener("todo:toggle", (e) => {
      const todos = appStore.state.todos.map((todo) => (todo.id === e.detail ? { ...todo, completed: !todo.completed } : todo))
      appStore.setState({ todos })
    })

    window.addEventListener("todo:delete", (e) => {
      const todos = appStore.state.todos.filter((todo) => todo.id !== e.detail)
      appStore.setState({ todos })
    })

    // Suscripción al store
    appStore.subscribe(() => this.render())
  },

  addTodo(text) {
    window.dispatchEvent(new CustomEvent("todo:add", { detail: text }))
  },

  addToCart(product) {
    const cart = [...appStore.state.cart]
    const existing = cart.find((item) => item.id === product.id)

    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    appStore.setState({ cart })
  },

  render() {
    const { todos, cart, route } = appStore.state

    // Renderizar según ruta (SPA simple)
    if (route === "cart") {
      this.renderCart(cart)
    } else {
      this.renderHome(todos)
    }
  },

  renderHome(todos) {
    const container = document.getElementById("app-container")
    if (!container) return

    container.innerHTML = `
            <h1>ToDo + Carrito (Vanilla JS Avanzado)</h1>
            
            <input type="text" id="todo-input" placeholder="Nueva tarea...">
            <button id="add-todo">Agregar</button>

            <h2>Tareas (${todos.length})</h2>
            <div id="todo-list"></div>

            <h2>Productos</h2>
            <button onclick="App.addToCart({id:1, name:'Curso JS Avanzado', price:89})">Agregar Curso JS</button>
            <button onclick="App.addToCart({id:2, name:'Tailwind Pro', price:49})">Agregar Tailwind</button>

            <p><a href="/cart">Ir al Carrito (${cart.length} productos)</a></p>
        `

    // Renderizar todos con Web Component
    const todoList = document.getElementById("todo-list")
    todos.forEach((todo) => {
      const todoEl = document.createElement("todo-item")
      todoEl.todo = todo
      todoList.appendChild(todoEl)
    })

    // Evento agregar todo
    document.getElementById("add-todo").addEventListener("click", () => {
      const input = document.getElementById("todo-input")
      if (input.value.trim()) {
        this.addTodo(input.value.trim())
        input.value = ""
      }
    })
  },

  renderCart(cart) {
    const container = document.getElementById("app-container")
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    container.innerHTML = `
            <h1>🛒 Carrito de Compras</h1>
            <div id="cart-items"></div>
            <h3>Total: \]{total.toFixed(2)}</h3>
            <button onclick="router.navigate('/')">Volver a Inicio</button>
        `

    const cartContainer = document.getElementById("cart-items")
    cart.forEach((item) => {
      const cartEl = document.createElement("cart-item")
      cartEl.item = item
      cartContainer.appendChild(cartEl)
    })
  },
}

/* =============================================================
   5. PERFORMANCE & BUENAS PRÁCTICAS
   ============================================================= */

// Lazy Loading de imágenes (ejemplo)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => observer.observe(img))
}

// Debounce para búsqueda
const debouncePerformance = (fn, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

/* =============================================================
   6. TESTING BÁSICO (Jest-like)
   ============================================================= */

const assert = (condition, message) => {
  if (!condition) throw new Error(message || "Test failed")
}

const test = (name, fn) => {
  try {
    fn()
    console.log(`✅ ${name}`)
  } catch (e) {
    console.error(`❌ ${name}: ${e.message}`)
  }
}

// Tests
test("Store debería actualizar estado", () => {
  const testStore = createStore({ count: 0 })
  testStore.setState({ count: 5 })
  assert(testStore.state.count === 5)
})

test("Router debería navegar", () => {
  router.navigate("/cart")
  assert(appStore.state.route === "cart")
})

/* =============================================================
   7. INICIALIZACIÓN
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  AppFour.init()
  lazyLoadImages()

  console.log("%c✅ Aplicación completa cargada correctamente", "color:lime; font-weight:bold")
})

// Exponer App globalmente para botones inline
window.App = AppFour
window.router = router
