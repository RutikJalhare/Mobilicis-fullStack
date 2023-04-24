
require('dotenv').config();
const  mysql = require('mysql');
const fs = require("fs")
var conn = mysql.createConnection({
      host: process.env.HOST,
      user:process.env.DB_USER, 
      password: process.env.DB_PASS,
      database: process.env.DB,
      port:process.env.DB_PORT
    })
    conn.connect((err) => {
      if (err) { 
        console.log(err)

      }
//console.log('Database connected') 
    })


//     var data = JSON.parse(fs.readFileSync('sample_data (1).json'));

//     let di=0
//  while( di< data.length){


//   conn.query(`INSERT INTO mobilicis set ?   `,data[di], function (error, result) {
//     if (error) {
//           console.log(error)
//     }
//     else {
// console.log("inserted")
//     }
// });


//   di++
//  }


   module.exports={conn}


