const fs = require("fs")
const path = require("path")
const LeetCode = require("./leetcode")
const ora = require("ora")
const colors = require("colors")
const moment = require("moment")

let problemId = process.argv[2]
if (!problemId) {
  console.log(colors.cyan("# 请指定 LeetCode 题号"))
  process.exit(0)
}
problemId = parseInt(problemId)

const span = ora(colors.yellow("# 加载中..."))
span.start()
const leetcode = new LeetCode()

leetcode.getList().then(data => {
  span.stop()
  console.log("# 加载完成".yellow, data.length)
  for (let item of data) {
    if (item.stat.question_id === problemId) {
      writeTemplate(item)
      return
    }
  }
  console.log("# did not find this question")
})

function writeTemplate (data) {
  const id = data.stat.question_id
  const name = data.stat.question__title_slug
  const title = data.stat.question__title

  const thePath = path.join(__dirname, `../src/${id}-${name}`)
  fs.access(thePath, err => {
    if (!err) {
      console.error("已存在".red)
      process.exit(-1)
    }
    fs.mkdirSync(thePath)

    const scriptTemp = `

module.exports = 
`
    fs.writeFile(path.join(thePath, "solution.js"), scriptTemp, err => {
      if (err) {
        console.log("写文件失败".red)
        process.exit(-1)
      }
      console.log("写文件成功".green)
    })

    const indexTemp = `/**
 * @id: ${id}
 * @title: ${title}
 * @url: https://leetcode.com/problems/${name}/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: ${moment().format("YYYY-MM-DD")}
*/

const solution = require('./solution')
`
    fs.writeFile(path.join(thePath, "index.js"), indexTemp, err => {
      if (err) {
        console.log("写文件失败".red)
        process.exit(-1)
      }
      console.log("写文件成功".green)
    })
  })
}
