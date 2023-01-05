import express, { Request, Response } from "express";
import router from "./router/todo.router";
import "dotenv/config"

//instance de express
const app = express();
// parse le JSON
app.use(express.json())

//instance du PORT
const port = process.env.PORT

//instance du router express
app.use("/todo", router)

app.use("/", (req: Request, res: Response) => {
    res.send("ok")
    
})

// definition du port pour le server ** 3000 ** depuis la constante 'port'
app.listen(port, () => {
   console.log( `Ton serveur est lancé sur le port ${port}`);
})
