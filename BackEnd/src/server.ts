import "express-async-errors";
import express from "express";
import { routes } from "./routes";
import { errorMiddleware } from "./middleware/error";
import { notFoundMiddleware } from "./middleware/not-found";

const cookieParser = require('cookie-parser');

const cors = require('cors');

const app = express();
var corsOptions = {
  origin: "http://localhost:4200",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.use(express.json());

app.use(routes)

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export { app };
