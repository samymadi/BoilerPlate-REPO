const login = (req, res) => {
    res.status(200).send(req.user);
}
const register = (req, res) => {

}
const logout = (req, res) => {

};
const test = (req, res) => {
    res.status(200).send(req.user)
};
module.exports = {
    login, register, logout, test

}