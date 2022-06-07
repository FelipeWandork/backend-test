import express, { application, json } from 'express';

import { investmentsRoutes } from './routes/investments.routes';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/investments", investmentsRoutes);

app.listen(3333, () => console.log("Server is running"));

