const mysql = require('mysql');

// DB access
const uberConfig = require('./uberConfig.js');
let connection = mysql.createConnection(uberConfig);

async function con() {
    connection.connect();
    
    let acc;
    connection.query('SELECT * FROM users', (err, result, fields) => {
        if (err) throw err
        acc = result;
        // console.log(`Data from server ${result.length}`);
        // for(let i = 0; i < result.length; i++) {
        //     acc = acc + JSON.stringify(result[i]);
        //     console.log(JSON.stringify(result[i]));
        //     acc.push(JSON.stringify(result[i]))
        // }
    })
    console.log(acc);
    
    // connection.end();
    return acc;
}
module.exports = con;