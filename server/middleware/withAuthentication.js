export default (req, res, next)=> {
    // todo update code for actual authentication
    req.isAdmin = false,
    req.authenticated = true

    next()
};