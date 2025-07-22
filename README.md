# Fullstack React + .NET Application

A modern fullstack web application built using:

- **Frontend:** React (Vite, MUI)
- **Backend:** ASP.NET Core Web API
- **Database:** Entity Framework Core (EF Core)

## 🧱 Tech Stack

| Layer    | Tech                    |
| -------- | ----------------------- |
| Frontend | React, Vite, MUI        |
| Backend  | ASP.NET Core (REST API) |
| Database | EF Core + SQL Server    |

---

## 📖 Blog Walkthrough

> 💡 Want a guided explanation of this project?  
> Check out the full tutorial:  
> 👉 [React + .NET Fullstack Application — Guided Project](https://medium.com/@codebob75/react-net-fullstack-application-guided-project-fb2b7af30113)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js & npm](https://nodejs.org/)
- [SQL Server / SQL LocalDB](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

---

### 🔧 Backend Setup (.NET + EF Core)

1. Navigate to the backend project folder:
   ```bash
   cd server
   ```
   Restore dependencies:

bash
Copy
Edit
dotnet restore
Update the database (EF Core Migrations):

bash
Copy
Edit
dotnet ef database update
Run the API:

bash
Copy
Edit
dotnet run
🖼️ Frontend Setup (React + Vite + MUI)
Navigate to the frontend folder:

bash
Copy
Edit
cd client
Install dependencies:

bash
Copy
Edit
npm install
Start the dev server:

bash
Copy
Edit
npm run dev
The app will be available at http://localhost:5173 (or whichever port Vite selects).

🔄 API Overview
The backend exposes standard RESTful endpoints. Example:

bash
Copy
Edit
GET /api/items
POST /api/items
PUT /api/items/{id}
DELETE /api/items/{id}
🎨 UI with Material UI
This project uses Material UI for a clean, responsive, and accessible user interface.

📂 Project Structure
bash
Copy
Edit
/client -> React frontend (Vite)
/server -> .NET backend API
/server/Models -> EF Core Models
/server/Data -> DB Context & Seeders
