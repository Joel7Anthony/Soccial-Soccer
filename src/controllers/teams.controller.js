const pool = require("../config/database");
const teams = require("../models/team.model");

Teams.getListTeams = async(req, res) => {
   const teams = await pool.query('SELECT * FROM teams');
   res.render('pages/teams/list-teams',{teams}) 
};

Teams.postTeams = async (req, res) => {
    const {
        name, photo, category, series, initials, description, mail, creation_date, main_color, secondary_color,phone
    }
    = req.body;
    await pool.query("INSERT INTO teams set?", [newTeam]);
    req.flash('success', 'creado');
    res.redirect("/teams")
}