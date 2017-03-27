const fs = require('fs')
const path = require('path')
const colors = require('colors')

let problemId = process.argv[2]
if (!problemId) {
  console.log(colors.cyan('# 请指定 LeetCode 题号'))
  process.exit(0)
}

const name = getName(problemId)
console.log(colors.cyan(`> 运行 ${name}`))
require(`./src/${name}`)

function getName (problemId) {
  problemId = parseInt(problemId)
  const problems = fs.readdirSync(path.join(__dirname, './src'))
  for (let i = 0; i < problems.length; i++) {
    const strs = problems[i].split('-')
    const id = parseInt(strs[0])
    if (id === problemId) {
      return problems[i]
    }
  }
}
