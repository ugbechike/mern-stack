import jwt from 'jsonwebtoken';

class AuthenticationService {
    generate(user) {
        return jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // token expires in one week
            data: user
        }, process.env.JWT_SECRET);
    }
}

const AuthenticationServiceSignleton = new AuthenticationService();

export default AuthenticationServiceSignleton;