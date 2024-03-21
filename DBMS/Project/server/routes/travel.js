import express from "express";
import db  from '../connect.js';

const app = express();
app.use(express.json());
const router = express.Router();

router.post("/traveldata", async (req, res) => {
    try {
        const { id, value } = req.body;
        const sql = `INSERT INTO traveldata (id, value) VALUES (?, ?)`;
        db.query(sql, [id, value]);
        return res.status(200).json({ message: "Inserted" });
    } catch (err) {
        console.error("Error in user creation:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/traveldata", async (req, res) => {
    try {
        const q = `SELECT * FROM traveldata WHERE id = '${req.query.id}'`;
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


router.post("/travel", async (req, res) => {
    try {
        const { id, flights, bike, car } = req.body;
        const sql = `INSERT INTO transport (id, flights, bike, car) VALUES (?, ?, ?, ?)`;
        db.query(sql, [id, flights, bike, car]);
        return res.status(200).json({ message: "Inserted" });
    } catch (err) {
        console.error("Error in user creation:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/travel", async (req, res) => {
    try {
        const q = `SELECT * FROM transport WHERE id = '${req.body.id}'`;
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