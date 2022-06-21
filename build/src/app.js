import express from 'express';
import dotenv from 'dotenv';
import homeRouter from './routes/home.router.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
// app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/build", express.static('build'));
app.use(express.urlencoded({ extended: true }));
app.use('/', homeRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map