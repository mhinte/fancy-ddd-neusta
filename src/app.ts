import express from 'express';
const app = express();

const apiUrl: string = "/api"
const port: number = 3000;

app.get(apiUrl + '/hello', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
