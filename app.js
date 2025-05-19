const Koa = require('koa');
const app = new Koa();

// 处理所有请求，返回 "Hello World"
app.use(async ctx => {
  ctx.body = 'Hello World';
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});