# 🗂️ Card Manager App

This is a simple and elegant card management app built with **React** and **JSON Server**. You can **add** and **delete** cards with smooth animations. It simulates an API using a local `db.json` file.

---

## 🚀 Features

* 🧾 View cards with professional card UI  
* ➕ Add new cards  
* 🗑️ Delete existing cards  
* ✨ Smooth animations for card transitions  
* 🎨 Responsive and colorful design  
* 🧪 Mock API powered by `json-server`

---

## 📦 Tech Stack

* React (Vite)
* CSS (no external animation libraries)
* JSON Server (mock backend)

---

## 🛠️ Getting Started

### 1. 📁 Clone the repository
```
git clone https://github.com/AakashAj-04/Manage-Card.git
cd Manage-Card
```

### 2. 📦 Install dependencies
```bash
npm install
```

### 3. Run the mock API server
```bash
npx json-server --watch db.json --port 3001
```

### 4. 🧑‍💻 Run the app
```bash
npm run dev
```

🗂️ Folder Structure
src/
├── components/
│   └── Card.jsx
├── App.jsx
├── index.css
├── main.jsx
db.json
README.md

📋 Example db.json Format

{
  "cards": [
    {
      "id": "1",
      "title": "Welcome Card",
      "description": "This is your starter card",
      "author": "System",
      "date": "2025-06-24"
    }
  ]
}

🤝 Contributing
Feel free to fork the repo and submit pull requests. Contributions are welcome!

📜 License
This project is open-source and free to use.

📧 Contact
Built with 💻 by Aakash
📬 aakash04.amirthalingam@gmail.com
