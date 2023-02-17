import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

dotenv.config();

const port = 3010;
const apiUrl = process.env.API_URL;
app.use(express.static("public"));

const html = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script type="text/javascript">
        localStorage.setItem('apiUrl', '${apiUrl}')
        window.location.href = "/"
    </script>
  </body>
</html>
`;

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "user1", email: "user1@gmail.com", age: 30 });
});

app.post("/api/users", jsonParser, (req: Request, res: Response) => {
  res.end();
});

app.listen(port, () => {
  console.log("Server started listening: ", port);
});
