import express from 'express';
import serverRenderer from './middleware/renderer';

const PORT = 3001;
const path = require('path');
const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' }
));

app.use(router);

app.listen(PORT, (error) => {
    if (error) {
        return console.log('Something\'s wrong:', error);
    }

    console.log(`Server started, listening on port ${PORT}`);
});
