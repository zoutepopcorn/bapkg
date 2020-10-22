import Koa from 'koa';
import serve from 'koa-static';
const app = new Koa();

export const startServer = (ROOT = './html', PORT = 3000) => {
    console.log("start server ");
    app.use(serve( ROOT, {}));
    app.listen(PORT);
    return true
}