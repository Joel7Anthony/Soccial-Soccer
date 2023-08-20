const pool = require("../config/database");
const players = require("../models/player.model");
const Players = {};

Players.getListPlayers = async (req, res) => {
  const players = await pool.query('SELECT * FROM  players');
    res.render('Pages/player/list-players', {players});
};

Players.getAddPlayers = async (req, res) => {
  res.render('pages/player/players')
};

Players.postPlayer= async (req, res) => {
    const {
        name,lastname,photo,age,cedula,typePlayer,goalsMarked        
    } = req.body;
    const newLink = {
        name,lastname,photo,age,cedula,typePlayer,goalsMarked 
    };
    await pool.query('INSERT INTO players set ?', [newLink]);
     //Flash
    req.flash('success','Agregado Correctamenta');
    res.redirect("/players/list-players");
  };
  Players.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM players WHERE ID = ?", [id]);
    req.flash('success','Eliminado correctamente');
    res.redirect("/players/list-players");
    };

Players.getPlayer = async (req, res) => {
  const { id } = req.params;
  const player = await pool.query('SELECT * FROM players WHERE id = ?', [id]);
  res.render('page/player/edit-players', {player: player[0]});
  
};
Players.updatePlayer = async (req, res) => {
  const { id } = req.params;
  const {name,lastname,photo,age,cedula,typePlayer,goalsMarked 
  } = req.body;
  const newLink = {name,lastname,photo,age,cedula,typePlayer,goalsMarked 
      
  };
  console.log ({ id, newLink})  
  await pool.query('UPDATE players set ? WHERE id = ?', [newLink, id]);
  req.flash('success','Editado Correctamenta');  
  res.redirect('/players/list-players');
};

module.exports = Players;
