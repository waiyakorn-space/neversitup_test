const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function generatePermutations(input) {
  if (input.length === 0) {
    return []
  }

  const result = []

  function permute(str, prefix = "") {
    if (str.length === 0) {
      if (!result.includes(prefix)) {
        result.push(prefix)
      }
    } else {
      for (let i = 0; i < str.length; i++) {
        const remain = str.slice(0, i) + str.slice(i + 1)
        permute(remain, prefix + str[i])
      }
    }
  }

  permute(input)
  return result
}

function runFunction() {
  rl.question("Enter a string (or type 'exit' to quit): ", (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close()
      return
    }

    const permutations = generatePermutations(input)
    permutations.length > 0
      ? console.log("Permutations:", permutations)
      : console.log("Input cannot be empty.")
    runFunction()
  })
}

runFunction()
