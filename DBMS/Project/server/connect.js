import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "carbonfp",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Mysql connected...");
});

export default db;