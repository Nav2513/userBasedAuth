const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes');

dbConnect();
const app = express();
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/users', userRoute);






const PORT = process.env.PORT || 7002;
// Start server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})