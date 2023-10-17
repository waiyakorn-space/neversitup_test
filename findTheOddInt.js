const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function findTheOddInt(array) {
  let count = {}
  for (let number of array) {
    if (count[number]) {
      count[number] += 1
    } else {
      count[number] = 1
    }
  }
  result = []
  for (let key of Object.keys(count)) {
    if (count[key] % 2 !== 0) {
      result.push(parseInt(key))
    }
  }
  return result
}

function checkValidInput(input) {
  try {
    const parseArray = JSON.parse(input)

    if (!Array.isArray(parseArray)) {
      throw new Error()
    }

    for (const value of parseArray) {
      if (typeof value !== "number" || !Number.isInteger(value)) {
        throw new Error()
      }
    }

    return parseArray
  } catch (error) {
    console.error("Invalid input.")
    return null
  }
}

function runFunction() {
  rl.question("Enter a array (or type 'exit' to quit): ", (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close()
      return
    } else {
      const arrayInput = checkValidInput(input)

      if (arrayInput) {
        const result = findTheOddInt(arrayInput)
        result.length === 1
          ? console.log(result[0])
          : console.log("Invalid input: There will always be only one integer that appears an odd number of times.")
      }
      runFunction()
    }
  })
}

runFunction()
