const { conn } = require("./db_connection")


let USD5 = (req, res) => {
    conn.query(`SELECT * FROM mobilicis where  income < 5   AND car in ("BMW" , "MERCEDES") `, function (error, result) {
        if (error) {
            console.log(error)
        }
        else {
            //console.log("result",result)
            res.end(JSON.stringify(result));
        }
    });

}


let MaleUser = (req, res) => {
    conn.query(`SELECT * FROM mobilicis where  gender ='male' AND phone_price > 10000 `, function (error, result) {
        if (error) {
            console.log(error)
        }
        else {
            //console.log("result",result)
            res.end(JSON.stringify(result));
        }
    });

}


let lName = (req, res) => {
   
    conn.query(`SELECT * FROM mobilicis where  last_name  LIKE 'M%'   and   length(quote) > 15     `, function (error, result) {
        if (error) {
            console.log(error)
        }
        else {
//console.log("result",result)
// const myArray = text.split(" ");

const result1 = result.filter((data)=>{
const email_br = data['email'].split("@")[0];

return  email_br.search( data['last_name']);
});

            res.end(JSON.stringify(result1));
        }
    });

}


let Nodigit = (req, res) => {
   
    conn.query(`SELECT *   FROM mobilicis where   email not regexp '[0-9]+'  and  car in ('BMW','MERCEDES','AUDI')`, function (error, result) {
        if (error) {
            console.log(error)
        }
        else {

          return  res.end(JSON.stringify(result));
        }
    });

}



let Topcity = (req, res) => {
   
    conn.query(`SELECT  count(id) as totaluser, city , avg(income) FROM mobilicis group by city order by  totaluser  desc limit 10`, function (error, result) {
        if (error) {
            console.log(error)
        }
        else {

          return  res.end(JSON.stringify(result));
        }
    });

}





module.exports = { USD5 , MaleUser , lName   , Nodigit , Topcity     }
