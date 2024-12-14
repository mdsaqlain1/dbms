import express from "express";
import db  from '../connect.js';

const app = express();
app.use(express.json());
const router = express.Router();

router.post("/fueldata", async (req, res) => {
    try {
        const { id, value } = req.body;
        const sql = `INSERT INTO fueldata (id, value) VALUES (?, ?)`;
        db.query(sql, [id, value]);
        return res.status(200).json({ message: "Inserted" });
    } catch (err) {
        console.error("Error in user creation:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/fueldata/", async (req, res) => {
    try {
        const id = req.query.id; // Accessing id from req.params
        const q = `SELECT * FROM fueldata WHERE id = '${id}'`;
        db.query(q, function (err, result) {
            if (err) {
                console.error("Error:", err);
                return res.status(500).json({ message: "Internal Server Error" });
            }
            if (result[0]) {
                return res.json({ result });
            } else {
                return res.json({ message: "no data" });
            }
        });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


router.post("/fuel", async (req, res) => {
    try {
        const { id, oil, gas, mileage } = req.body;
        const sql = `INSERT INTO fuel (id, oil, gas, mileage) VALUES (?, ?, ?, ?)`;
        db.query(sql, [id, oil, gas, mileage]);
        return res.status(200).json({ message: "Inserted" });
    } catch (err) {
        console.error("Error in user creation:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get("/fuel", async (req, res) => {
    try {
        const q = `SELECT * FROM fuel WHERE id = '${req.body.id}'`;
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