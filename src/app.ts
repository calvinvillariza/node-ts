import express from 'express';

import * as bodyParser from 'body-parser';

import cors from 'cors';

import routes from './routes';

class App {
    public app: express.Application;

    constructor () {
        this.app = express();
        this.config();
    }

    private config() : void {
        this.app.use(cors());

        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use('/api', routes);
    }
}

export default new App().app;