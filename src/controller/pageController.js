const connectionbd = require('../servers/server_my_sql');

const home = async (req, res) =>{
    try {
        await connectionbd.authenticate();
        console.log("Connection successfull");
    }catch(err){
        console.log("Connection failed...", err);
    }
    res.render("./pages/index.mustache");
    //res.send('opa');
}

module.exports = {home};