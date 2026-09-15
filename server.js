const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const customers = [];

// Serve HTML/CSS/JS files
app.use(express.static(__dirname));


// ==========================================
// CREATE CUSTOMER
// ==========================================
app.post('/api/customers', (req, res) => {

    const customer = req.body;

    const newCustomer = {
        id: customers.length + 1,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        password: customer.password,
        phone: customer.phone,

        policyNumber: customer.policyNumber || `POL-${Date.now()}`,
        policyType: customer.policyType || 'Auto Insurance',
        policyStatus: customer.policyStatus || 'Active'
    };

    customers.push(newCustomer);

    console.log('Customer created:', newCustomer);

    res.status(201).json(newCustomer);
});


// ==========================================
// GET CUSTOMER BY ID
// ==========================================
app.get('/api/customers/:id', (req, res) => {
    console.log('GET CUSTOMER ROUTE HIT');
    console.log('Requested ID:', req.params.id);
    console.log('Customers:', customers);

    const id = Number(req.params.id);

    const customer = customers.find(c => c.id === id);

    if (!customer) {
        return res.status(404).json({
            message: 'Customer not found'
        });
    }

    res.status(200).json(customer);
});

// ==========================================
// LOGIN
// ==========================================
app.post('/api/login', (req, res) => {

    const { email, password } = req.body;

    console.log('Login attempt:', email);

    const customer = customers.find(
        c => c.email === email && c.password === password
    );

    if (!customer) {
        return res.status(401).json({
            message: 'Invalid email or password'
        });
    }

    res.status(200).json({
        message: 'Login successful',
        customer: customer
    });
});


// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, '127.0.0.1', () => {
    console.log('====================================');
    console.log('NEW SERVER.JS STARTED');
    console.log(`Server running at http://127.0.0.1:${PORT}`);
    console.log('====================================');
});