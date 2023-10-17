const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function countSmileys(array) {
  const validSmileyFaces = [":)", ":D", ";-D", ":~)"]
  let count = 0
  for (let face of array) {
    if (validSmileyFaces.includes(face)) count += 1
  }
  return count
}

function checkValidInput(input) {
  try {
    const parseArray = JSON.parse(input.replace(/'/g, '"'))

    if (!Array.isArray(parseArray)) {
      throw new Error()
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
        console.log(countSmileys(arrayInput))
      }
      runFunction()
    }
  })
}

runFunction()
