# 🧑‍💼 Employee Management System (Frontend)

A modern Employee & Company Management System built with **Vue 3**, **Tailwind CSS**, and **Pinia**, designed to simulate a real-world admin dashboard experience. This is a fully frontend implementation with simulated data and features.

---

## 🚀 Features

### 🔐 Authentication & User Management
- ✅ Login / Logout / Signup
- ✅ Role-based access (Admin, Manager, Employee)
- ✅ Session auto-refresh (simulated)
- ✅ Edit own profile (name, photo, password)
- ✅ Route guards for protected pages

### 🏢 Company Management
- ✅ Add, Edit, Delete companies
- ✅ Search by name/code
- ✅ Role-based access (Admin only)
- 🔲 Company hierarchy view (not implemented)
- 🔲 Bulk CSV import/export (not implemented)

### 🧑‍💼 Employee Management
- ✅ 3-Step onboarding wizard:
  - Personal Info (drag-drop photo)
  - Role & Department
  - Drag-and-drop Permissions
- ✅ Virtualized employee list (for 1000+ records)
- ✅ Advanced filters (role, department, search)
- ✅ Inline editing of employee details
- ✅ Delete employees
- ✅ LocalStorage persistence
- 🔲 Timeline history (not implemented)
- 🔲 Import/export from Excel (not implemented)

### 🌐 Other Highlights
- ✅ Role-based dashboards (employee, manager, admin)
- ✅ Responsive, accessible UI (Tailwind)
- 🔲 Notification center
- 🔲 Dark/light mode toggle
- 🔲 Multi-language support
- 🔲 Offline support

---



2. Install dependencies
bash
Copy
Edit
npm install
3. Run the dev server
bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

🧪 Login Credentials
These are simulated users — no backend or validation

Role	Email	Password
Admin	admin@site.com	admin123
Manager	manager@site.com	manager123
Employee	employee@site.com	employee123

Or register your own user and assign any role manually

✅ Feature Checklist
Feature	Status
Auth (login/signup/logout)	✅
Role-based menus	✅
Edit profile	✅
Add/Edit/Delete companies	✅
Virtual employee list	✅
Onboarding wizard (3-step)	✅
Filtering & inline editing	✅
Delete employees	✅
Persist employee list	✅
Company hierarchy view	🔲
Employee timeline	🔲
Import/export	🔲
Notifications / themes / i18n	🔲

📝 Notes
This is a frontend-only implementation

All data is stored in localStorage (simulating a backend)

Components and routes are modular and scalable

Tailwind 4 used with Vite for fast development

📌 Author
Mohamed Adel
Full-Stack Engineer

📃 License
This project is licensed under MIT.


