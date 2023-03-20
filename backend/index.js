import express from "express";
import cors from "cors";
import FactureRoute from "./routes/FactureRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(FactureRoute);

app.listen(5000, () => console.log('Server prêt à utiliser'));