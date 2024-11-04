import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hallo Project Express");
});

app.listen(port, () => {
  console.log(`Server Berjalan Di http://localhost:${port}`);
});
