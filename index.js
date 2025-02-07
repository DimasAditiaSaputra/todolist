import express from "express";
import db from "./database/db.js";
import routerTodo from "./routes/routeTodo.js";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"], // Kalau ada script inline di frontend
        objectSrc: ["'none'"], // Blokir plugin seperti Flash
        imgSrc: ["'self'", "data:"], // Izinkan gambar dari domain sendiri & base64
        upgradeInsecureRequests: [],
      },
    },
    crossOriginOpenerPolicy: { policy: "same-origin" },
    crossOriginResourcePolicy: { policy: "same-origin" },
    referrerPolicy: { policy: "no-referrer" },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    xDnsPrefetchControl: { allow: false },
    permittedCrossDomainPolicies: { policy: "none" },
  })
);

app.use(
  cors({
    origin: "http://127.0.0.1:5501",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.use("/", routerTodo);

app.get("/tes", (req, res) => {
  return res.send("yaya");
});

app.listen(port, () => {
  console.log(`Running http://localhost:${port}`);
});
