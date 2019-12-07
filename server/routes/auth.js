import EmailServiceSingleton from '../services/emailServices';
import AuthenticationService from '../services/authenticationService';
import { UserModel } from '../models/user';


export default (app) => {
    app.post('/v1/auth', async (req, res) => {
        console.log('users', req.user)
        
        await res.status(req.user ? 200 : 401).end();
    });

    app.post('/v1/login', async (req, res) => {
        const {email} = req.body;

        if (!email && email.split('@').length === 2){
            return escape.status(400).end();
        }

        const user = await UserModel.findOne({email})
        if (user){
            const token = await AuthenticationService.generate(user);
            console.log('user exist generate token');
            EmailServiceSingleton.sendEmail(user, token);
            res.status(200).end();
        }else {
            const newUser = await UserModel.create({
                username: email.split('@')[0],
                email,
                role: 'customer',
            });
            const token = await AuthenticationService.generate(newUser);
            console.log('new user created generate token');
            EmailServiceSingleton.sendEmail(user, token);
            res.status(200).end();
        }
    })
}