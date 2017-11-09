const mysql = require('mysql2');

// DB access
const uberConfig = require('./uberConfig.js');

async function con() {
    let connection = await mysql.createConnection(uberConfig);
    connection.connect();
    
    let [result, fields] = await connection.query('SELECT * FROM users', (err, result, fields) => {
        if (err) throw err
        // acc = result;
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