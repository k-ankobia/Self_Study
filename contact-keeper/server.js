const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

// define routes 
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req,res) => res.json({msg: 'Hello World'}));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));