import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { table99 } from "./table99.js";


const app = new Application();
const router = new Router();
router
  .get("/", (context) => {
    context.response.body =`
    <html>
      <head>
        <link rel="stylesheet" href="table99.css">
      </head>
      <body>
    <div class="center"; style="background-color: ivory; width: 500px; ">
    <br>
    <h1 style="text-align: center; border-bottom: dashed #84C1FF; color:#84C1FF; font-family:DFKai-sb;">
      九九乘法表
    </h1>
        ${table99()}
    </body>
    </html>`;
  })
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (ctx) => {
  // 1. 原始路徑(/)為空  2.send上去後會讀取到 --> /table99.css 
  console.log('path=', ctx.request.url.pathname) 
  await send(ctx, ctx.request.url.pathname, { // 把資料放入到伺服器 大概
    root: Deno.cwd(),
    index: "table99.css",
  });

});
console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });