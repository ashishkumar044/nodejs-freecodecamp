const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    // res.send('Testing');     // Either we end the middleware by sending a response, or send to the next middleware
    next();
};

module.exports = logger;