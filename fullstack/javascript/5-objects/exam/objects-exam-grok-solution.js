"use strict"
// ... (Vec and other parts unchanged - they were good)

class Group {
  constructor() {
    this.members = []
  }
  add(value) {
    if (!this.has(value)) this.members.push(value)
  }
  delete(value) {
    this.members = this.members.filter((v) => v !== value)
  }
  has(value) {
    return this.members.includes(value)
  }

  [Symbol.iterator]() {
    let index = 0
    const members = this.members
    return {
      next: () => ({
        value: members[index],
        done: index++ >= members.length,
      }),
    }
  }
}

// Tests Q4:
console.log("Q4 Tests:")
const group = new Group()
group.add(10)
group.add(20)
group.add(30)
console.log(">>>GROUP", group)

const result = []
for (let value of group) {
  result.push(value)
}
console.log(result) // expected: [10, 20, 30]
