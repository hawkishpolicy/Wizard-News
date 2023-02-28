const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const postsList = require("./postsList");
const postDetails = require("./postDetails");

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const posts = postBank.list();

  res.send(postsList(posts));
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);

  if (post.id) {
    res.send(postDetails(post));
  } else {
    console.error(err.stack);
  }
});

app.use((err, req, res, next) => {
  res.status(404);
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Wizard News</header>
      <div class="not-found">
        <p>404: Page Not Found</p>
      </div>
    </body>
    </html>`;
  res.send(html);
});

const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
