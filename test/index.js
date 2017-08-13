var expect = require('chai').expect
var request = require('request')

describe('Video upload service home page', function () {
  it('I should see main page content', function () {
    request('http://localhost:3001', function (error, response, body) {
      expect(body).to.equal('Woo Tag Video Upload API')
    })
  })

  it('I should see main page status code is 200', function() {
    request('http://localhost:8080' , function(error, response, body) {
      expect(response.statusCode).to.equal(200)
    })
  })
})
