import express from 'express';
import cors from 'cors';
import db from './guestdb.js';

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Guest API running');
});

app.get('/guests', (req, res) => {
    const allGuests = db.loadGuest ? db.loadGuest() : [];
    res.json(allGuests);
});

app.get('/guest/:id', (req, res) => {
    const id = Number(req.params.id);
    const guest = db.readGuest ? db.readGuest(id) : null;
    if (!guest) {
        return res.json({ message: 'Guest not found' });
    }
    res.json(guest);
});

app.post('/guests', (req, res) => {
    const { name, age, address, contactNo, visitDate } = req.body;
    db.addGuest(name, Number(age), address, contactNo, visitDate);
    res.json({ message: "Guest added successfully" });
});

app.delete('/guests/:id', (req, res) => {
    const id = Number(req.params.id);
    db.deleteGuest(id);
    res.json({ message: "Guest deleted" });
});


app.put('/guest/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, age, address, contactNo, visitDate } = req.body;
    db.updateGuest(id, name, age, address, contactNo, visitDate);
    res.json({ message: "Guest updated" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
