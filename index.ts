import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello CodeSandbox I am going to change this into ecommerce website!"
  );
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
