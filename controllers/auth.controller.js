const login = (req, res) => {

    res.status(212).send(res.locals.data);
}


module.exports = {
    login,

}