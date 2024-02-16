const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req, res) => {
        // 서버 시작 시 TypeORM 데이터 소스 초기화
        // try {
        //     if (!myDataSource.isInitialized) {
        //         await myDataSource.initialize();
        //         console.log('Data Source has been initialized!');
        //     }
        // } catch (error) {
        //     console.error('Error during Data Source initialization:', error);
        // }

        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});