import { ProductModel } from '../models/product';


export default (app) => {

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

}