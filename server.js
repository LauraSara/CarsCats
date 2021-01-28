const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/static"));

app.get("/test", req, res => {
  res.json({message: "HOLA"});
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

