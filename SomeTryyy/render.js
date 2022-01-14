export function layout(title, content) {
  return `
  <html>
  <head>
  <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css">

    <title>${title}</title>
    <style>
    * {
        box-sizing: border-box;
      }
      body 
      {
        margin: 0;
      }
  
      #posts 
      {
        margin: 0;
        padding: 0;
      }
  
      #posts li 
      {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child 
      {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }

      textarea {
        border: 1px solid #aaa;
        border-top-color: #bbb;
        border-left-color: #ccc;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        width: 500px;
      }

      input[type=text],

    </style>
  </head>
  <body>
          <section id="content">
              ${content}
          </section>
  </body>
  </html>
  `
}

export function list(posts) {
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${post.title}</h2>
      <p>Date ${post.date}</p>
      <p><a href="/post/${post.id}">Read</a></p>
    </li>
    `)
  }

  let content = `
  <h1>Post</h1>
  <form action="/post/new" method="post"> 
      <input type="submit" value="New">
  </form>     
  <div>
      <ul id="posts">
      ${list.join('\n')}
      </ul>
  </div>
  `
  return layout('Posts', content)
}

export function newPost() {
  return layout('New Post', `
  <h1>New</h1>
  <form action="/post" method="post">  
    <p><input type="text" placeholder="title" name="title"></p>
    <p><input type="date" placeholder="XXXX/XX/XX" name="date"></p>
    <p><textarea placeholder="Contents" name="body"></textarea></p>
    <p><input type="submit" value="Create"></p>
  </form>
  `)
}

export function show(post) {
  return layout(post.title, `
    <h1>${post.title}</h1>
    <p> ${post.date}</p>
    <p>${post.body}</p>
  `)
}
