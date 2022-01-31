import { Low, JSONFile } from 'lowdb'


//lowdb de database olusturmak icin gerekli file.json seklinde bir database olusturduk burda
const db = new Low(new JSONFile('file.json'))
await db.read()

db.data = db.data || { records: [] } 


 

// Controller Methods
export async function addRecord(req, res){
    const record = req.body
    console.log(record);
    db.data.records.push(record)
    await db.write()

    res.send('OK')

}

export function getAllRecords(req,res) {

   

    res.json(db.data.records)

    // Alle records zurück geben.
}



