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
const usersRoutes = require('./Routes/user');
const cartRoutes = require('./Routes/cart');
const myListRoutes = require('./Routes/myList');
const ordersRoutes = require('./Routes/orders');

app.use(`/api/category`, categoriesRoutes);
app.use(`/api/products`, productsRoutes);
app.use(`/api/user`, usersRoutes);
app.use(`/api/cart`, cartRoutes);
app.use(`/api/my-list`, myListRoutes);
app.use(`/api/orders`, ordersRoutes);

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


