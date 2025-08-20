# Studentsfrontend

## 📘 Student Data Frontend (Angular 18)

Angular 18 app with Spring Boot backend for managing student data, handling large Excel/CSV files, and generating reports.

## 🚀  Features

Upload & process Excel/CSV

Generate Excel with large datasets

Automatic score updates (+10 in Excel, +5 in DB)

View students with pagination, search, class filter

Export reports as Excel, CSV, PDF

## 🛠 Tech Stack

Frontend: Angular 18, Angular Material, HttpClient
Backend: Spring Boot 3.5.4, PostgreSQL 17.6, Apache POI, OpenCSV, iText

## 📂 Installation

## Clone & install:

git clone <[frontend-repo-link](https://github.com/emmanuelnyaayo/student-data-frontend)>
cd <student-data-frontend>
npm install

Run:
ng serve

Open in browser:
👉 http://localhost:4200

## 📖 Usage

Generate Excel → Enter record count → Download file

Process Excel → Upload file → CSV generated (+10 scores)

Upload CSV → Save data to PostgreSQL (+5 scores)

View & Export Reports → Pagination, search, filter → Export Excel/CSV/PDF

## ⚡ Notes

Ensure Spring Boot backend is running at the configured API endpoint.

Angular Material provides UI components (tables, paginator, dropdowns, file input).
