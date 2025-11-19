const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/auth/auth-routes')
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
.then(() => {console.log("DB connected Successfully")})
.catch((err) => {console.log("DB connection Error", err)});

app.use(cookieParser());
app.use(express.json());

app.use(
    cors ({
        origin: `http://localhost/5173`,
        method: ['GET','POST','DELETE','PUT'],
        allowedHeaders: [
            "Content-Type",
            'Authorization',
            'Cache-control',
            'Expires',
            'Pragma'
        ],
        credentials: true,
    })
);

app.use('/api/auth', authRouter)

app.listen(PORT, () => {console.log(`Server running at PORT : ${PORT}`)});
