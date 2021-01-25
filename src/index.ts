const express = require("express");
const cors = require('cors')
import routes from "./routes";
import "reflect-metadata";
import "./database/connect";

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3001, () =>
  console.log("✌ servidor executando porta http://localhost:3001")
);
