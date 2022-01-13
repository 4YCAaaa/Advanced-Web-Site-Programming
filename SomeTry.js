import { Application } from "https://deno.land/x/oak/mod.ts";

function table9_9() {
  let table = ["<table><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>"]
  for (let i=1; i<=9; i++) {
    let row = `<tr><th>${i}</th>`
    for (let j=1; j<=9; j++) {
      row+= `<td>${i*j}</td>`
    }
    row += "</tr>"
    table.push(row)
  }
  return table.join('\n')+"</table>"
}

const app = new Application();

app.use((ctx) => {
    ctx.response.body = `
    <html>
    <style>
    table{
        width:500px;
        border-collapse: collapse;
        border: 1px solid #FFFFFF;
        padding: 10px;
        color: #BE77FF;
        text-align: center;margin-left:auto;
        margin-right:auto;
    } 
    th{
        text-align:center;
        background-color: #DDDDFF;
        border: 1px solid #FFFFFF;
        color: #9393FF;
        padding:10px;
    }
    td{
        text-align: center;
        border:1px solid #FFFFFF;
        background-color: #DDDDFF;
        color: #9393FF;
        padding:10px;
    }
    </style>
    <body>
    <div class="center"; style="background-color: ivory; width: 500px; ">
    <br>
    <h1 style="text-align: center; border-bottom: dashed #84C1FF; color:#84C1FF; font-family:DFKai-sb;">
      九九乘法表
    </h1>
        ${table9_9()}
    </body>
    </html>
    `
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });