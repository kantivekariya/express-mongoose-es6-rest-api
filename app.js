import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mainRouter from "./routes";
import connectMongo from "./config/mongoconnect";

const app = express();

// Production enviroment
const isProduction = process.env.NODE_ENV === "production";
app.use(bodyParser.json());

//https debug
app.use(morgan("dev"));

//Connect Mongo
connectMongo();

app.use("/", mainRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on isProductionss => ${isProduction}`);
  console.log(`Server is running on PORT ${PORT}`);
});
