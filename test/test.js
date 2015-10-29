'use strict';

var request = require("supertest"),
    app = require("../app").getApp;

describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/')
	 .expect(200, done); 
  });
});

describe('GET /about', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/about')
	 .expect(200, done); 
  });
});