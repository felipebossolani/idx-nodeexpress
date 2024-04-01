import * as express from "express";
import * as path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world!"});
});

app.get('/api/:name', (req, res) => {
  const name = req.params.name;
  res.json({"msg": `Hello, ${name}`});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
