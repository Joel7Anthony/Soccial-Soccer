const pool = require("../config/database");
const teams = require("../models/team.model");
const Teams = {};

Teams.getListTeams = async(req, res) => {
   const teams = await pool.query('SELECT * FROM teams');
   res.render('pages/teams/list-teams',{teams}) 
};

Teams.postTeams = async (req, res) => {
    const {
        name, photo, category, series, initials, description, mail, creation_date, main_color, secondary_color,phone
    }
    = req.body;
    const newTeam = {name, photo, category, series, initials, description, mail, creation_date, main_color, secondary_color, phone}
    await pool.query("INSERT INTO teams set?", [newTeam]);
    req.flash('success', 'creado');
    res.redirect("/teams/list-teams");
};

Teams.deleteTeams = async (req, res) => {
    const { id} = req.params;
    await pool.query("DELETE FROM teams WHERE ID = ?", [id]);
};

Teams.getTeams = async ( req, res) => {
    const {id} = req.params;
    const team = await pool.query('SELECT * FROM teams WHERE id = ?', [id]);
    req.flash('success', 'bien');
    res.render('pages/teams/edit-teams', {team: team[0]});
};
Teams.updateTeam = async ( req, res) => {
    const {id} = req.params;
}


module.exports = Teams;