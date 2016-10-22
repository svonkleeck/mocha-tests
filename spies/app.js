
var db = require('./db');  // NOTE THIS MUST BE A VAR SINCE REWIRE BEING USED ON IT

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
