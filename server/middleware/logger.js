export default (req, res, next) => {
    console.log(
        '===>',
        req.method,
        req.originalUrl,

        'Auntication ===>',
        req.isAdmin,
        req.authenticated
    );

    next();
}