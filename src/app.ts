import "reflect-metadata";
import 'express-async-errors';
import express from 'express'
import cors from 'cors'
import routes from './routes/routes'

import './shared/container'
import { errors } from "celebrate";
import { appErrorMiddleware } from "./shared/infra/http/express/middleware/AppErrorMiddleware";

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())
app.use(
    appErrorMiddleware({
        defaultMessage: 'internal error',
        defaultStatusError: 500
    })
);
export default app;