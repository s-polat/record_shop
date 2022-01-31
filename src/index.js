import express from "express";
 import { addRecord, getAllRecords} from './controller/records.controller.js';

 /* baslangicta npm init , npm install express lowdb, terminale yazilarak gerekli paketler yüklenir */

const PORT = 4000;
const app = express();

app.use(express.json()); //bu komut olmadan posttan gelen veriyi dataya alamayiz


app.post('/api/records', addRecord )


app.get('/api/records', getAllRecords )


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});