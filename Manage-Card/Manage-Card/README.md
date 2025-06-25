# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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
