const html = require("html-template-tag");

const postsList = (posts) => {
  const mappedPosts = posts.map(
    (post) => `
      <div class='news-item'>
          <p>
          <span class="news-position">${post.id}. ▲</span>
          <a href="/posts/${post.id}">${post.title}</a>
          <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
          ${post.upvotes} upvotes | ${post.date}
          </small>
      </div>`
  );

  return html`<DOCTYPE html>
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png" />Wizard News</header>
          ${mappedPosts}
        </div>
      </body>
    </html></DOCTYPE
  >`;
};
module.exports = postsList;
