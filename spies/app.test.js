const expect = require('expect');
const rewire = require('rewire');

// to rewire an application first "rewire" it and then call __set__ and __get__
var app = rewire('./app');
//app.__set__
//app.__get__

describe('App', () => {

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('should call the spy correctly with data', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });


});

describe('App Rewire DB and spy', () => {    // rewire
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call saveUser with the user object', () => {
        var email = 'svk@test.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith( {email, password} );
    });
});

// const expect = require('expect');
// const rewire = require('rewire');

// var app = rewire('./app');

// describe('App', () => {
//   var db = {
//     saveUser: expect.createSpy()
//   };
//   app.__set__('db', db);

//   it('should call the spy correctly', () => {
//     var spy = expect.createSpy();
//     spy('Andrew', 25);
//     expect(spy).toHaveBeenCalledWith('Andrew', 25);
//   });

//   it('should call saveUser with user object', () => {
//     var email = 'andrew@example.com';
//     var password = '123abc';

//     app.handleSignup(email, password);
//     expect(db.saveUser).toHaveBeenCalledWith({email, password});
//   });

// });
