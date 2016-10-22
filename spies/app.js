
var db = require('./db');

function handleSignup(email, password) {
    // Check if the email exists

    // Save the user to the database
    db.saveUser({email, password});  // simple user object

    // Send the welcome email
};

module.exports = {
    handleSignup
};

// module.exports.handleSignup = (email, password) => {
//     // Check if the email exists

//     // Save the user to the database
//     db.saveUser({email, password});  // simple user object

//     // Send the welcome email
// };
