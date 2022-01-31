import express from "express";
 import { addRecord, getAllRecords} from './controller/records.controller.js';

const PORT = 4000;
const app = express();

app.use(express.json());


app.post('/api/records', addRecord )


app.get('/api/records', getAllRecords )


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});