export default (req, res, next) => {
    console.log(
        '===>',
        req.method,
        req.originalUrl,

        'Auntication ===>',
        typeof req.user === 'object',
        'isAdmin: ',
        req.user && req.user.role === 'admin'
    );

    next();
}