const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Express Tests', () => {

    describe('Get /', () => {
        it('should GET / hello world', (done) => {
            request(app)
                .get('/')
                .expect(200) // status code
                .expect('Hello World!')
                .end(done);
        });
    });

    describe('Get /error', () => {
        it('should return capture an EXPRESS error', (done) => {
            request(app)
                .get('/error')
                .expect(404) // status code
                .expect({  // must be a complete object match (see below for toInclude)
                    error: "Page not found.",
                    name: 'Todo App v1.0'
                })
                .end(done);
        });

        it('should return capture an EXPRESS error with details', (done) => {
            request(app)
                .get('/error')
                .expect(404) // status code
                .expect( (res) => { 
                    expect(res.body).toInclude({error: "Page not found."});
                })
                .end(done);
        });
    });

    describe('Get /users', () => {
        it('should return an array with a user Scott in it', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect( (res) => {
                    expect(res.body).toInclude({ firstName: 'Scott', age: 22});
                })
                .end(done);
        });
    });

});


