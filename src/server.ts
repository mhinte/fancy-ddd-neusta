import express from "express";
import {loadControllers} from "awilix-express";
import {loadContainer} from "./container";

const app: express.Application = express();
app.use(express.json());
loadContainer(app);
app.use(loadControllers(
    'infrastructure/controller/*.ts',
    {cwd: __dirname}
));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
