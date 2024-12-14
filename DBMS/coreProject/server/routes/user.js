import express from "express";
import db  from '../connect.js';

const app = express();
app.use(express.json());

async function middleware(req, res, next) {
    try {
        const q = `SELECT * FROM user WHERE gmail = '${req.body.email}'`;
            db.query(q, function (err, result) {
                if (err) throw err;
                if (result[0]) {
                    return res.json({ message: "User already exists" });
                } else {
                    next();
                } 
        });
    } catch (err) {
        console.error("Error in middleware:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const router = express.Router();

router.post("/user", middleware, async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const sql = `INSERT INTO user (name, gmail, password) VALUES (?, ?, ?)`;
        db.query(sql, [name, email, password]);
        return res.status(200).json({ message: "User created successfully" });
    } catch (err) {
        console.error("Error in user creation:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const sql = `SELECT * FROM user WHERE gmail = ? AND password = ?`;
        db.query(sql, [email, password], (err, result) => {
            if (err) {
                console.error("Error in login:", err);
                return res.status(500).json({ message: "Internal Server Error" });
            }

            if (result.length === 0) {
                return res.json({ message: "Invalid email or password" });
            }

            return res.status(200).json({ message: "Login successful", user: result[0] });
        });
    } catch (err) {
        console.error("Error in login:", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;
