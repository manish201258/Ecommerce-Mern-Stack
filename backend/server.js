const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

dbConnect()
.then(()=>{
    try {
        app.listen(3000,()=>{
            console.log("Server is running on port 3000")
        })
    } catch (error) {
        console.log("Server failed to start",error.message)
    }
})