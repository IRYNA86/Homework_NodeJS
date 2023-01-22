const responseMiddleware = (req, res, next) => {
  if (req.query) {
    return req.query
}
else {
    const error = {
        error: true,
        message: 'Can not get paramets!'
    };
    return error;
}
 next();
}
export { responseMiddleware };

