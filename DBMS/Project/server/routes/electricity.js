import express from "express";
import db  from '../connect.js';

const app = express();
app.use(express.json());
const router = express.Router();

router.post("/electricitydata", async (req, res) => {
    try {
        const { id, value } = req.body;
        const sql = `INSERT INTO electricitydata (id, value) VALUES (?, ?)`;
        db.query(sql, [id, value]);
        return res.status(200).json({ message: "Inserted" });
    } catch (err) {
        console.error("Error in user creation:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/electricitydata", async (req, res) => {
    try {
        const q = `SELECT * FROM electricitydata WHERE id = '${req.query.id}'`;
            db.query(q, function (err, result) {
                if (err) throw err;
                if (result[0]) {
                    return res.json({ result });
                }else{
                    return res.json({ message:"no data" });
                }
        });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


router.post("/electric", async (req, res) => {
    try {
        const { id, month, units } = req.body;
        const sql = `INSERT INTO electricity (id, month, units) VALUES (?, ?, ?)`;
        db.query(sql, [id, month, units]);
        return res.status(200).json({ message: "Inserted" });
    } catch (err) {
        console.error("Error in user creation:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/electric", async (req, res) => {
    try {
        const q = `SELECT * FROM electricity WHERE id = '${req.body.id}'`;
            db.query(q, function (err, result) {
                if (err) throw err;
                if (result[0]) {
                    return res.json({ result });
                }else{
                    return res.json({ message:"no data" });
                }
        });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;