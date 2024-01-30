const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/country", controller.getCountry);
app.get("/api/color", controller.getColor);

app.listen(4001, () => console.log("Server running on 4001"));
