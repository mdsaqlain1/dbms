import express from "express";
import userRoute from "./routes/user.js"
import cors from "cors";
import mailRoute from './mailing/index.js'
import fuelRoute from './routes/fuel.js'
import travelRoute from './routes/travel.js'
import electricRoute from './routes/electricity.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', userRoute);
app.use('/api', mailRoute);
app.use('/api', fuelRoute);
app.use('/api', travelRoute);
app.use('/api', electricRoute);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});