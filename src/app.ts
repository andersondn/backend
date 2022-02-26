import "reflect-metadata";
import express from 'express'
import cors from 'cors'
import routes from './routes/routes'

import './shared/container'
import { errors } from "celebrate";

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

export default app;