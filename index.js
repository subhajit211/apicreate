const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome Mrinal");
});
app.get("/info", (req, res) => {
  console.log("data",req.query);
  res.send("welcome subhajit");
})
app.post("/bfhl", (req, res) => {
  const userdata = req.body;
  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  userdata.forEach((element) => {
    if (parseInt(element) % 2 == 0) {
      even_numbers.push(element);
    } else if (parseInt(element) % 2 == 1) {
      odd_numbers.push(element);
    } else if (element >= "a" && element <= "z") {
      alphabets.push(element.toUppercase());
    }
  });
  return res.status(200).send({
    is_success: true,
    user_id: "1",
    email: "subhajit1336.be21@chitkarauniversity.edu.in",
    roll_no: 2111981336,
    even: even,
    odd: odd,
    alpha: alpha,
  });
});

app.listen(3000, () => {
  console.log("server started at port no 3000");
});
