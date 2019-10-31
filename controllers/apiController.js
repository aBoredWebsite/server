const axios = require('axios')

const openTrivia = axios.create({
  baseURL: 'https://opentdb.com/api.php'
})

const bored = axios.create({
  baseURL: 'https://www.boredapi.com/'
})

const quote = axios.create({
  baseURL: 'https://favqs.com/api'
})

class ApiController {
  static getTrivia(req, res, next) {
    let amount = '10'
    let difficulty = 'medium'
    let type = 'multiple'
    openTrivia({
      method: 'get',
      url: `?amount=${amount}&difficult=${difficulty}&type=${type}`
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static getAdvice(req, res, next) {
    bored({
      method: 'get',
      url: `/api/activity`
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
  static getQuote(req, res, next) {
    quote({
      method: 'get',
      url: '/quotes',
      headers: {
        Authorization: `Token token=${process.env.QUOTEAPI_KEY}`
      }
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

}


module.exports = ApiController