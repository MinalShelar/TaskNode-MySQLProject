
const {
    createPool
} = require('mysql');
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sampleDB",
    connectionLimit: 10
})

pool.query("select * from company", function(err, result, fields){
        if (err) {
            return console.log(err);
    }
        return console.log(result);
    })
pool.query("select * from user where companyId = 1", function(err, result, fields){
        if (err) {
            return console.log(err);
    }
        return console.log(result);
})


