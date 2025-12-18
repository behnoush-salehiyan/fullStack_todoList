const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${res.status}`);
  next();
};

module.exports = logger;
