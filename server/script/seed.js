import mongoose, {Schema} from 'mongoose';

mongoose.connect('mongodb://localhost:27017');

const UserSchema = new Schema({
    name: String,
    email: String,
    role: String
});

const UserModel = mongoose.model('User', UserSchema);


const db = mongoose.connection;


db.on('error', (error) => {console.log(error)});

db.once('open', () => {
    console.log('app is connected to the db');
    const user = new UserModel({
        name: "John",
        email: "engr.ugbe@gmail.com",
        role: "Admin"
    });

    user.save((err) => {
        if (err){
            console.log(err)
        }else{
            console.log('data saved')
        }
    })

})


