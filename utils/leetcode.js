const axios = require('axios')
const cheerio = require('cheerio')

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
const API_QUESTION_LIST = 'https://leetcode.com/api/problems/algorithms/'

class LeetCode {
  getList () {
    return axios.get(API_QUESTION_LIST, {
      headers: {
        'User-Agent': USER_AGENT
      }
    }).then(data => {
      return data.data.stat_status_pairs.sort((a, b) => {
        return parseInt(a.stat.question_id) - parseInt(b.stat.question_id)
      })
    })
  }

  getDetail (questionName) {
    return axios.get(`https://leetcode.com/problems/${questionName}/#/description`, {
      headers: {
        'User-Agent': USER_AGENT
      }
    }).then(data => {
      const $ = cheerio.load(data.data)
      let content = $('.question-content > p')
      return $(content).text()
    }, err => {
      console.log(err)
      throw err
    })
  }
}

module.exports = LeetCode
