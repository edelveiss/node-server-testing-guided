require("dotenv").config();

const server = require("./api/server.js");
//console.log("process.env.DB_ENV", process.env.DB_ENV); //will be develpment
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
