export default (req, res, next)=> {
    // todo update code for actual authentication
    req.admin = true,
    req.authenticated = true

    next()
};