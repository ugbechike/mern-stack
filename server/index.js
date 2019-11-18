import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import MockedUsers from './mocks/mockUsers';
import { UserModel } from './models/user'
import { db } from './db/db';
import { ProductModel } from './models/product';

const app = express();
// middleware for logging the request methods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication)
app.use(logger);
const port = process.env.PORT;

// todo abstract to a route folder
app.get('/v1/users', async (req, res) => {
    const users = await UserModel.find() || [];
    res.send(users);
})

// GET USERS
app.get('/v1/users/:id', async (req, res) => {
try {

    const {id} = req.params
    const userById = await UserModel.findById(id)
    if (userById){
        res.send(userById);

    }else {
        res.status(404).end()
    }
} catch (err) {

    console.log(err);
    res.status(404).end();
}

});

// GET PRODUCTS
app.get('/v1/products', async (req, res) => {
    const {category} = req.query;
    const categoryList = category ? category.split(',') : [];

    const products = await ProductModel.find( categoryList.length > 0 ? {category: {$in: categoryList}  } : undefined ) || [];
    res.send(products)
});

// GET PRODUCTS BY ID
app.get('/v1/products/:id', async (req, res) => {
    const {id} = req.params
    try {
        const product = await ProductModel.findById(id);
        if (product) {
            res.send(product);
        }

    } catch (err) {
        res.status(404).end
    }
})

// POST PRODUCT
app.post('/v1/create', async (req, res) => {
    const {name, price} = req.body;

    const product = await ProductModel.create({name, price});
    if (product){
        res.status(200).end()
    }else{

        res.status(404).end(ß);
    }
});

//UPDATE PRODUCT
app.put('/v1/update/:id', (req, res) => {
    const {id} = req.params;
    const {name, price} = req.body;

    ProductModel.findByIdAndUpdate(id, {name, price}, (err) => {
        if(err){
            res.status(500).end()
        }else {
            res.status(200).end()
        }
    });

});

// DELETE PRODUCT
app.delete('/v1/delete/:id', (req, res) => {
    const {id} = req.params;

    ProductModel.findByIdAndDelete(id, (err) => {
        if(err){
            res.status(500).end()
        }else {
            res.status(200).end()
        }
    });
})


app.post('/v1/users', (req, res) => {
    const {userName, email, role, password} = req.body
    res.status(200).end;
})

app.put('/v1/users/:id', (req, res) => {
    const {id} = req.params
    const {userName, email, role, password} = req.body
    // todo: update code to update a single user data
    res.send(MockedUsers[0]);
})

app.delete('/v1/users/:id', (req, res) => {
    const {id} = req.params
    // todo: update code to delete a single
    res.status(200).end;

})
app.listen(port, () => {
    console.log(`app is running on PORT: ${port}`)
});