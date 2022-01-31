import express from "express";
import recordsRoutes from './routes/records.routes.js';
import usersRouter from './routes/users.routes.js';

 /* baslangicta npm init , npm install express lowdb, terminale yazilarak gerekli paketler yüklenir
 
 sonra import kullanabilmek icin package.json a "type": "module", yapistirmamiz lazim*/

const PORT = 4000;
const app = express();

app.use(express.json()); //bu komut olmadan posttan gelen veriyi dataya alamayiz
app.use(recordsRoutes);
app.use(usersRouter);



// Start server
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});