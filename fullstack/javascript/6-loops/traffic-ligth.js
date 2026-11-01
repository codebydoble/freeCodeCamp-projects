const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
}

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
}

const config4 = {
  fault: false,
  phases: [],
}
/**
 *
 * @param {Object} config
 * @param {Number} cycles
 */
const runSequence = (config, cycles = 1) => {
  if (cycles <= 0) {
    console.log(`Invalid phase detected`)
    return
  }
  for (let count = 0; count < cycles; count++) {
    if (config.phases.length === 0) {
      console.log(`No phases found`)
      return
    }
    if (config.fault) {
      console.log(`Faulted phase!`)
      return
    }
    config.phases.forEach((action) => {
      console.log(`Switching to ${action.color} for ${action.duration} s`)
    })
  }
}

runSequence(config1, 1)

const generateTimeline = (config, cycles = 1) => {
  const cumulativeTime = []
  if (config.phases.length === 0) {
    return []
  }
  if (config.fault || cycles <= 0) {
    config.phases.forEach((action) => {
      if (cumulativeTime.length === 0) {
        cumulativeTime.push(action.duration)
      } else {
        cumulativeTime.push(cumulativeTime[cumulativeTime.length - 1] + action.duration)
      }
    })
  }
  for (let index = 0; index < cycles; index++) {
    config.phases.forEach((action) => {
      if (cumulativeTime.length === 0) {
        cumulativeTime.push(action.duration)
      } else {
        cumulativeTime.push(cumulativeTime[cumulativeTime.length - 1] + action.duration)
      }
    })
  }
  return cumulativeTime
}

const timeLine = generateTimeline(config4, 1)
//console.log("Time line: ", timeLine)
