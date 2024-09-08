const express = require('express');
const app = express();
const bodyParser = require('body-parser');//For parsing incoming request to backend bodies
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');



app.use(cors()); //
app.options('*', cors());

//middleware

app.use(bodyParser.json());


//Routes

const categoriesRoutes = require('./Routes/categories');
const productsRoutes = require('./Routes/products');

app.use(`/api/category`, categoriesRoutes);
app.use(`/api/products`, productsRoutes);

//DATABASE

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connection is ready...');
        //server

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    });



