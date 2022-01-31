import { Low, JSONFile } from 'lowdb'

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

   

    res.send(db.data.records)

    // Alle records zurück geben.
}



