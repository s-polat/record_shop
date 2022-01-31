import {Low, JSONFile} from 'lowdb';

//lowdb de database olusturmak icin gerekli file.json seklinde bir database olusturduk burda
const db = new Low(new JSONFile('file.json'))
await db.read()

db.data = db.data || { records: [
      // the title, the artist, the year, the cover image and the price
      {
        title: 'Egal',
        artist: 'DJ Egal',
        year: '2015',
        cover: '',
        price: 5.5
    },
] };

await db.write();

export default db;