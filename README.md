
# Dirghayu Medicare

Dirghayu Medicare is a full-stack MERN (MongoDB, Express, React, Node.js) healthcare platform that enables users to book appointments with doctors and contribute through donations. It offers separate portals for **Users**, **Doctors**, and **Admins**.

---

## 🌐 Live Links

- 🧑‍⚕️ **User Portal**: [https://dirghayu-medicare.vercel.app](https://dirghayu-medicare.vercel.app)
- 🛠 **Admin Portal**: [https://dirghayu-medicare-aocc.vercel.app](https://dirghayu-medicare-aocc.vercel.app)
- ⚙️ **Backend API**: [https://dirghayu-medicare.onrender.com](https://dirghayu-medicare.onrender.com)

---

## ✨ Features

### 👥 Users
- ✅ JWT-based Registration/Login
- 📅 Book appointments with doctors
- 🔍 Filter by speciality
- 🧾 View & edit profile
- ❤️ Donate & Save:
  - 💉 Blood
  - 🫁 Organs
  - 💰 Money

### 👨‍⚕️ Doctors
- 🔐 Secure login
- 📋 View all appointments
- ✔️ Complete / ❌ Cancel appointments
- 📊 Dashboard & Profile management

### 🛠 Admin
- 🔐 Secure login
- 👤 Manage doctors & users
- 📦 Track and view all donation data
- 📈 View analytics and reports

---

## 🧠 Tech Stack

| Category   | Tools / Libraries                                      |
|------------|--------------------------------------------------------|
| Frontend   | React, Vite, Tailwind CSS, React Router DOM, Axios     |
| State Management | React Context API                                      |
| Backend    | Express, Node.js, JWT, Cloudinary                      |
| Database   | MongoDB                                     |
| Deployment | Vercel (Frontend), Render (Backend), Cloudinary (Media)|

---

## 🔮 Upcoming Features

- 💳 Payment Gateway Integration
- 🩸 Section for urgent:
  - Blood requests
  - Organ donation requirements
- 🧬 Live blood bank stock display
- 🔔 Email alerts
- 💬 Real-time doctor-patient chat
- 📅 Appointment calendar sync

---

## 📁 Folder Structure

```
dirghayu-medicare/
├── backend/        # Express server, routes, controllers, models
├── frontend/       # User interface (React)
├── admin/          # Admin dashboard (React)
```

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dirghayu-medicare.git
cd dirghayu-medicare
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
# ⚙️ Server Configuration
PORT=4000
JWT_SECRET=your_jwt_secret_key_here
# 🌐 MongoDB
MONGODB_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/dirghayu
# ☁️ Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key
# 🔐 Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=yourStrongPassword123

```

Start server:

```bash
npm start
```

---

### 3. User Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env`:

```env
VITE_BACKEND_URL=https://dirghayu-medicare.onrender.com
```

Start dev server:

```bash
npm run dev
```

---

### 4. Admin Frontend Setup

```bash
cd ../admin
npm install
```

Create `.env`:

```env
VITE_BACKEND_URL=https://dirghayu-medicare.onrender.com
```

Start admin:

```bash
npm run dev
```



## 🖼 Screenshots

_Add images of user interface, doctor panel, and admin dashboard here._

---

## 👩‍💻 Authors

**Paridhi Jain**  
[GitHub](https://github.com/paridhijain07) 

**Pranjali Goyal**  
[GitHub](https://github.com/pranjaligoyal31) 

---
