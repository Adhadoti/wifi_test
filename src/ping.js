const express = require("express");
  
const app = express();
const { exec } = require("child_process");
  
// Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
  
// Speed Test
app.post("/test", (req, res) => {
  exec("speed-test --json", (err, stdout, stderr) => {
    if (err || stderr) return res.send(
      "Error while testing internet speed.");
    const result = JSON.parse(stdout);
    const response = `<center>
                    <h2>Ping : ${result.ping}</h2>
                    <h2>Download Speed : ${result.download}</h2>
                    <h2>Upload Speed : ${result.upload}</h2>
                    </center>`;
    res.send(response);
  });
});
  
// Server
app.listen(3000, () => {
  console.log("Server running on port - 4000");
});