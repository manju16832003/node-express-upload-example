var expect = require('chai').expect;
var request = require('request');

describe('Video upload service home page', function () {
  it('I should see main page content', function () {
    request('http://localhost:3001', function (error, response, body) {
      expect(body).to.equal('Woo Tag Video Upload API');
    });
  });
})
