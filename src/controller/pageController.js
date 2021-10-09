const connectionbd = require('../servers/server_my_sql');
const Users = require('../models/Users');

const home = async (req, res) =>{
    const nomes = await Users.findAll();
    try {
        await connectionbd.authenticate();
        console.log("Connection successfull");
    }catch(err){
        console.log("Connection failed...", err);
    }

    res.render("./pages/index.mustache", {
        nomes
    });
    //res.send('opa');
}

module.exports = {home};