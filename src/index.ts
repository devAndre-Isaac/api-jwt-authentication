import express from "express";
import routes from "./routes";
import 'reflect-metadata'
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () =>
  console.log("⚡ Server started at http://localhost:3000")
);
