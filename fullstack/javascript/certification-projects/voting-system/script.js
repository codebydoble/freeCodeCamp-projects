const optionCanada = [
  "Canada",
  new Set([
    "e85f9988-9661-4527-ba27-e97dcebb5781",
    "f3bb993b-f7d0-4033-881e-cb06aa340945",
    "f747f60a-40a6-4080-9aa8-f1b86bff3cfa",
    "0fa03575-2e0d-412b-aa68-0eb184f62b61",
    "2598f97b-fddf-47a8-9974-099e2f60f396",
    "6f2fdde7-095b-4029-88be-db6c81dee319",
  ]),
]
const optionUSA = [
  "USA",
  new Set([
    "24e31bb3-649c-4ed9-874c-a1dbf7aa1515",
    "99b20eb9-31dd-4c8e-ad4f-92afae61516f",
    "2bcaad5c-1df5-4fb3-961c-1e8003d3baec",
    "bb22ec0c-2226-46f1-af3c-bd4d2474812d",
    "1ae259c9-8c60-4ae3-b481-a9871c68af57",
    "e9a29858-b08c-440f-aaed-70be35fed961",
    "a26e10d3-5a34-4c02-b237-ea6743d72460",
    "4df8d465-7e90-430b-81fb-a56dfd686a80",
    "82296793-061d-461d-9acc-a0bab716c39b",
    "93f0f131-870c-4c89-8447-c5bf4d677095",
    "c0fa30a3-45b7-46cd-93f7-4a378f7761d2",
    "b8574b2e-0b1d-422e-b41d-86bc4d71a6f9",
    "d7ba55eb-4ad7-43d1-bda9-75c4c6693743",
    "2ef8fae6-53a2-432b-97a6-76ccb65e0a3c",
  ]),
]

const optionCuba = ["Cuba", new Set(["ae8cd3e8-6477-4b30-b755-586104b5df55", "0744cce0-7d6f-4385-9ea8-85e14e413ae7"])]
const optionMexico = [
  "Mexico",
  new Set([
    "302daff4-a557-456b-ab59-9fc2bd8ea0f0",
    "342a7e54-4b73-402f-ba1a-76f6a982db6d",
    "39ff60fd-3168-41aa-a49a-58b430a8fc14",
  ]),
]

//* You should initialize a poll variable to a new Map object.
const poll = new Map([optionCanada, optionUSA, optionCuba, optionMexico])

/**
 * Function `addOption` that accepts a parameter `option` to vote.
   - If the `option` does not already exist in the poll, it should be added to the poll with an empty `Set` as its value to track voters.
 * @param {String} option the option to vote for.
 * @returns {String} If does not exist in the poll return the message `Option "<option>" added to the poll`. If the `option` already exists return the message `Option "<option>" already exists`. If you try to add an empty `option`, the function return the message `Option cannot be empty`.
 */
const addOption = (option) => {
  if (!option || option.trim() === "") return "Option cannot be empty"
  if (poll.has(option)) {
    return `Option "${option}" already exists.`
  }
  poll.set(option, new Set())
  return `Option "${option}" added to the poll.`
}

console.log(">>> Test empty option ", addOption(""))
console.log(">>> Test already exist Cuba ", addOption("Cuba"))
console.log(">>> Test add new option Spain ", addOption("Spain"))
console.log(poll)

/**
 * Function `vote` that accepts two parameters, `option` and `voterId`.
 * If the `option` exists, the function should check if the `voterId` has already voted for this `option`.
   - If the voter has already voted, the function should return the message `Voter <voterId> has already voted for "<option>"`.
   - If the voter has not voted, `voterId` should be added to the `Set` of voters for this option. The function should return the message `Voter <voterId> voted for "<option>"`.
 * @param {String} option the option to vote for.
 * @param {String} voterId a unique ID for the voter.
 * @returns {String} If the `option` does not exist in the poll, the function should return the message `Option "<option>" does not exist`. If the voter has already voted, the function should return the message `Voter <voterId> has already voted for "<option>"`. If the voter has not voted, `voterId` should be added to the `Set` of voters for this option. The function should return the message `Voter <voterId> voted for "<option>"`.
 */
const vote = (option, voterId) => {
  if (!option || option.trim() === "") return "Option cannot be empty"
  if (!voterId || voterId.trim() === "") return "Voter cannot be empty"
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`
  }
  const voters = poll.get(option)
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`
  }
  voters.add(voterId)
  return `Voter ${voterId} voted for "${option}".`
}

console.log(">>> Test option does not exist ", vote("Malasia", "9a4aaef3-55c7-437b-93d6-1a28498a5770"))
console.log(">>> Test option exist Cuba and voter does not vote (add) ", vote("Cuba", "49cdfcf7-6c57-47ae-8f01-cb24db501411"))
console.log(">>> Test option exist Cuba and voter does vote (not add) ", vote("Cuba", "49cdfcf7-6c57-47ae-8f01-cb24db501411"))

const displayResults = () => {
  const result = ["Poll Results:"]
  poll.forEach((voter, option) => {
    result.push(`${option}: ${voter.size} votes`)
  })
  return result.join("\n")
}

console.log(displayResults())
