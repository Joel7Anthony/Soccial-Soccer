const pool = require("../config/database");
const users = require("../models/qualificationOctovo.model", "");
const { isLoggedIn } = require('../lib/auth');
const Keys = {};



Keys.getListUsers =  async(req, res) => {
    //res.render("pages/users/list");
    const users = await pool.query('SELECT * FROM  users');  
    res.render('pages/users/list', {users})
};

Keys.postUsers = async (req, res) => {
    const { name, email, description } = req.body;
    const newUser = {
        name,
        email,
        description
    };
    await pool.query("INSERT INTO users set?", [newUser]);
    req.flash('success', 'creado');
    res.redirect("/users/list-users");
};

Keys.deleteUser = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE ID = ?", [id]);
    req.flash('success', 'Eliminado');
    res.redirect("/users/list-users");
};

Keys.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    req.flash('success', 'bien');
    res.render('pages/users/edit', { user: user[0] });
};
Keys.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, description } = req.body;
    const newUser = {
        name, email, description
    };
    await pool.query("UPDATE users set ? WHERE id = ?", [newUser, id]);
    req.flash('success', 'Actualizado');
    res.redirect('/users/list-users');
};





module.exports = Keys;

