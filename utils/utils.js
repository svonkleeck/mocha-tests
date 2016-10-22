"use strict";

module.exports = {
    add: (a, b) => a + b,

    square: (x) => x * x,

    setName: function (userObj, fullname) {
        var names = fullname.split(' ');  // assume one space in first/last names
        userObj.firstName = names[0];
        userObj.lastName = names[1];
        return userObj;
    },

    asyncAdd: (a, b, callback) => {
        setTimeout(() => {
            callback (a + b);
        }, 1000);
    },

    asyncSquare: (x, callback) => {
        setTimeout(() => {
            callback (x * x);
        }, 1000);
    }

};

// module.exports.setName = function (userObj, fullname) {
//     var names = fullname.spit(' ');
//     user.firstName = names[0];
//     user.lastName = names[1];
// };