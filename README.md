# AAKUNA Frontend Assessment – Dhinesh

A responsive frontend application built using React.js, Vite, and Tailwind CSS as part of the AAKUNA Infosystems Front-End Developer assessment.

---

## 🚀 Technologies Used

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to Project Directory

```bash
cd aakuna-frontend-assessment-dhinesh
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

---

## ⚙️ Tailwind CSS Setup

Tailwind CSS was configured using the official Vite plugin.

### Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

### vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```
