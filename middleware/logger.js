export default (req, res, next) => {
    console.log(
        '===>',
        req.method,
        req.originalUrl,

        'Auntication ===>',
        req.admin,
        req.authenticated
    );

    next();
}