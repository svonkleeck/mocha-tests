const express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/error', (req, res) => {
    res.status(404).send({ // send an error with JSON object body
        error: "Page not found.",
        name: 'Todo App v1.0'
    });
});

// return back an array of users with firstName and age.
app.get('/users', (req, res) => {
    res.send([
            { firstName: 'John', age: 40},
            { firstName: 'Jane', age: 5},
            { firstName: 'Scott', age: 22},
            { firstName: 'Eric', age: 45}
        ]
    )

});

app.listen(port, () => {
    console.log(`Express server up on port ${port}`);
});

module.exports.app = app;