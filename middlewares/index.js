const setHeaders = (_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
}; // you can use this method too in place of app.use(cors({...}));

module.exports = { setHeaders }
