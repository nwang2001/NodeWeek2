// importing the express library and creates an express application
const express = require('express');
const app = express();

// specifies which port to listen on
const port = 5040;

// importing the employee data from the JSON file in the folder
const employees = require('./employees.json');

// get requests to the '/employees' endpoint; gets the list of employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// get requests to the '/employees/:employeeID' endpoint; gets the individual employee info by id
app.get('/employees/:employeeID', (req, res) => {
    const employeeID = parseInt(req.params.employeeID);
    const employee = employees.find(e => e.employeeID === employeeID);

    // if employee id is valid, display employee info, and else, display 404 (not found) error
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: 'Employee not found.' });  
    }
});

// console log port to show activeness
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});