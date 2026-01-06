🏠 Guest Information System
A full-stack guest management application built with React + Express.js that lets you register, view, and delete guest information — all stored locally in a guest.json file. No database required!

✨ Features
✅ Add guests with name, age, address, contact number, and visit date
📋 View all guests in a clean, responsive list
🗑️ Delete guests with confirmation dialog
💬 Real-time feedback: success/error messages
⏳ Loading states to prevent duplicate submissions
📱 Fully responsive — works on mobile & desktop
💾 Persistent storage via guest.json (no database needed)
🔌 RESTful API: GET /guests, POST /guests, DELETE /guests/:id

🛠️ Tech Stack


Layer                                  Technology
       
Frontend                              React, JSX, CSS

Backend                               Node.js, Express

Storage                             Local JSON file (guest.json)

Extras                                       cors, chalk



guest-info-system/
├── public/               # React public assets
├── src/
│   ├── App.jsx          # Main React component
│   └── App.css          # Styling
├── guest.json           # Auto-created guest data file
├── server.js            # Express REST API
├── guestdb.js           # File-based guest operations
├── package.json
└── README.md


Install both frontend & backend packages (if using a single package.json)
npm install




Start the backend server
node server.js




npm run dev     if using Vite
or
npm start       if using Create React App
(App runs on: http://localhost:5173 (Vite) or http://localhost:3000




📝 Notes
On the first run, guest.json will be created automatically.
All data persists between sessions (saved in guest.json).
Age is stored as a number; visit date uses YYYY-MM-DD format.
The delete action includes a browser confirmation dialog for safety.





🤝 # Contributing
Feel free to:
Fork this repository
Open an issue for bugs or suggestions
Submit a pull request with improvements (UI, validation, features like editing!)




📜 # License
This project is open-source and available under the MIT License



👨‍💻 # Author
R. P. T. Sandeepa Dilhara (electronic, communication, and IT undergraduate student )



