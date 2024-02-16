const { createServer } = require('http');
const next = require('next');
const {initDataSource} = require('./src/data/DataSource');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    console.log(process.env.NODE_ENV);

    createServer(async (req, res) => {
        // 서버 시작 시 TypeORM 데이터 소스 초기화
        if (process.env.NODE_ENV !== 'development') {
            try {
                await initDataSource();
                console.log('Data Source has been initialized!');
            } catch (error) {
                console.error('Error during Data Source initialization:', error);
            }
        } else {

        }

        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});