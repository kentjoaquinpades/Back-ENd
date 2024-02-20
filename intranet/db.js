const mysql = require('mysql2/promise')


const mysqlPool = mysql.createPool({
    host: '192.168.100.62',
    user: 'reader',
    password: 'reader',
    database: 'intranet'
})



module.exports = mysqlPool