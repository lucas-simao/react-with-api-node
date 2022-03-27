const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/names', (req, res) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"])
})
 
app.listen(3001, () => {
  console.log("Server running on port 3001");
});