const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// файл с юзерами
const users = require("./users.json");
// для работы с json
app.use(bodyParser.json());
// для кросс-доменных запросов
app.use(cors());

app.post("/users", (req, res) => {
  let filteredUsers = users;
  // наши выбранные значения селектов
  const countriesFilter = req.body.filters.country;
  const scoreFilter = req.body.filters.score;
  // выбираем страны
  if (countriesFilter) {
    filteredUsers = filteredUsers.filter(
      (user) => user.country === countriesFilter
    );
  }
  // тут по очкам
  if (scoreFilter) {
    if (scoreFilter.condition === "less") {
      filteredUsers = filteredUsers.filter(
        (user) => user.score < scoreFilter.value
      );
    }

    if (scoreFilter.condition === "larger") {
      filteredUsers = filteredUsers.filter(
        (user) => user.score > scoreFilter.value
      );
    }
  }
  // для проверки работы прелоадера можно запустить так таймаут
  // setTimeout(() => {
  res.send(filteredUsers);
  // }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
