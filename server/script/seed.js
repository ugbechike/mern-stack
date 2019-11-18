import { UserModel } from '../models/user';
import {users, products} from './data';
import {db} from '../db/db';
import { ProductModel } from '../models/product';

db.on('error', (error) => {console.log(error)});

db.once('open', () => {
    console.log('app is connected to the db');
    const user = new UserModel({
        name: "John",
        email: "engr.ugbe@gmail.com",
        role: "Admin"
    });

    UserModel.insertMany(users, (err) => {
        if (err){
            console.log(err)
        }else{
            console.log('data saved')
        }
    });

    ProductModel.insertMany(products, (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('product saved')
        }
    })

})


