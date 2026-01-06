# Guest Information System

A full-stack guest management application built with React and Express.js. This application allows you to register, view, and delete guest information, all stored locally in a guest.json file—no database required!
Perfect for events, offices, or as a project for learning full-stack JavaScript development.

---

# ✨ Features

✅ Add guests with name, age, address, contact number, and visit date

📋 View all guests in a clean, responsive list

🗑️ Delete guests with a confirmation dialog

💬 Real-time feedback: success/error messages

⏳ Loading states to prevent duplicate submissions

📱 Fully responsive — works on both mobile & desktop

💾 Persistent storage via guest.json (no database needed)

---

# 🔌 RESTful API:
```
GET /guests

POST /guests

DELETE /guests/:id

```
---

# 🛠️ Tech Stack
```
Layer    	Technology
Frontend	React, JSX, CSS
Backend	Node.js, Express
Storage	Local JSON file (guest.json)
Extras	       CORS, Chalk

```
---

# 📁 Project Structure
```
guest-info-system/
├── public/               # React public assets
├── src/
│   ├── App.jsx           # Main React component
│   └── App.css           # Styling
├── guest.json            # Auto-created guest data file
├── server.js             # Express REST API
├── guestdb.js            # File-based guest operations
├── package.json
└── README.md
```
---

# ▶️ How to Run

*** Clone the repository:
```
git clone https://github.com/rptsd3132/my-full-stack-app
cd guest-info-system

```
---

*** Install dependencies:
```
npm install
````
---


Note: This project assumes a single package.json for both the frontend and backend. If you are using separate setups, you can just adjust accordingly.

*** Start the backend server:
```
node server.js


The server will run on: http://localhost:3000

Start the React app (in another terminal):

If using Vite:

npm run dev


If using Create React App:

npm start


The app will run on:

Vite: http://localhost:5173

CRA: http://localhost:3000
```

Open your browser and start managing guests!

---

# 🧪 API Endpoints

Method	Endpoint	Description
GET	/guests	Get all guests
POST	/guests	Add a new guest
DELETE	/guests/:id	Delete guest by ID

The frontend automatically calls these endpoints to interact with the backend.

---

# 📝 Notes

On the first run, the guest.json file will be created automatically.
All data persists between sessions (saved in guest.json).
Age is stored as a number, and the visit date uses the YYYY-MM-DD format.
The delete action includes a browser confirmation dialog for safety.

---


# 📜 License

This project is open-source and available under the MIT License
.

*** Made with ❤️ using React, Express, and vanilla JavaScript — no external database needed!
Ideal for learning full-stack development or quick guest logging.

Let me know if you'd like to add or change anything in the README!

---
👨‍💻 Author

R. P. T. Sandeepa Dilhara (electronic, communication, and IT undergraduate student )


