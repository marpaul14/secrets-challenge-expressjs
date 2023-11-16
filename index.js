import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var isAuthenticated = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/check", (req, res) => {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    isAuthenticated = true;
  }
  if (isAuthenticated) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`App running on port ${3000}`);
});
