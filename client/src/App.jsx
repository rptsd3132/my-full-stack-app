import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [guests, setGuests] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    contactNo: '',
    visitDate: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); // For feedback


  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const res = await fetch('http://localhost:3000/guests');
      if (!res.ok) throw new Error('Failed to fetch guests');
      const data = await res.json();
      setGuests(data);
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error loading guests.', type: 'error' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const res = await fetch('http://localhost:3000/guests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to add guest');

      setMessage({ text: 'Guest added successfully!', type: 'success' });
      fetchGuests(); // Refresh list
      setFormData({ name: '', age: '', address: '', contactNo: '', visitDate: '' });
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error adding guest.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this guest?')) return;

    try {
      const res = await fetch(`http://localhost:3000/guests/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete guest');
      fetchGuests();
      setMessage({ text: 'Guest deleted.', type: 'success' });
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error deleting guest.', type: 'error' });
    }
  };

  return (
    <div className="app-container">
      <h1>Guest Information System</h1>

      {/* Feedback Message */}
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      {/* Guest Form */}
      <form onSubmit={handleSubmit} className="guest-form">
        <input
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          placeholder="Age"
          type="number"
          min="1"
          max="120"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          required
        />
        <input
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        />
        <input
          placeholder="Contact Number"
          value={formData.contactNo}
          onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
          required
        />
        <input
          type="date"
          value={formData.visitDate}
          onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
          required
        />
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Adding...' : 'Add Guest'}
        </button>
      </form>

      {/* Guest List */}
      <div className="guest-list-section">
        <h2>Guest List ({guests.length})</h2>
        {guests.length === 0 ? (
          <p className="no-guests">No guests registered yet.</p>
        ) : (
          <ul className="guest-list">
            {guests.map((guest) => (
              <li key={guest.id} className="guest-item">
                <div>
                  <strong>{guest.name}</strong> (Age: {guest.age})
                  <br />
                  <span className="details">
                     {guest.address} |  {guest.contactNo} | {guest.visitDate}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(guest.id)}
                  className="delete-btn"
                  aria-label={`Delete guest ${guest.name}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;