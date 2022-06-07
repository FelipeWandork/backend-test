import express, { application, json } from 'express';
import { investmentsRoutes } from './routes/investments.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup());

app.use(express.json());

app.use("/investments", investmentsRoutes);

app.listen(3333, () => console.log("Server is running"));

