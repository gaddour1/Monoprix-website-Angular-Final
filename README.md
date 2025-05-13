Monoprix Financial Dashboard
Overview
This project is a web-based financial dashboard application developed for Monoprix using Angular. It provides tools for financial management, invoice prediction, supplier evaluation, and supplier clustering. The application supports multiple user roles with role-based access control, ensuring that each role has access to specific features via a dynamic sidebar. All roles (DAF, Supplier Manager, and Risk Manager) have access to prediction and forecasting models, but they utilize distinct Power BI dashboards tailored to their responsibilities.
Features

User Authentication: Login and registration system with email and password validation.
Role-Based Access:
DAF: Full access to all financial tools, including invoice prediction, financial information, supplier evaluation, and clustering, with a dedicated Power BI dashboard.
Supplier Manager: Access to supplier evaluation and clustering features, with a specific Power BI dashboard focused on supplier-related data.
Risk Manager: Access to invoice prediction and financial information, with a dedicated Power BI dashboard for risk assessment.


Dynamic Sidebar: Displays navigation links based on the user's role.
Responsive Design: Optimized for both desktop and mobile devices using Material Dashboard styles.
Local Storage: Stores user credentials and roles for persistent sessions.
Prediction Models: All roles have access to shared prediction and forecasting models, integrated into the application.

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v16.x or higher)
npm (v8.x or higher)
Angular CLI (v16.x or higher)

Installation

Clone the Repository:
git clone https://github.com/gaddour1/Monoprix-website-Angular-Final.git
cd monoprix-financial-dashboard


Install Dependencies:
npm install


Install Font Awesome (for icons in the UI):
npm install @fortawesome/fontawesome-free

Then, ensure Font Awesome is included in angular.json:
"styles": [
  "src/styles.scss",
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
]



Running the Application

Start the Development Server:
ng serve --o

This will launch the application and open it in your default browser at http://localhost:4200.

Access the Application:

Navigate to http://localhost:4200/login to log in.
Use the following predefined accounts to test the application:
DAF: Email: daf@daf.tn, Password: daf123
Supplier Manager: Email: supplier@supplier.tn, Password: supplier123
Risk Manager: Email: risk@risk.tn, Password: risk123


Alternatively, register a new account at http://localhost:4200/register.




Role-Based Access
The application supports three roles with specific access rights and distinct Power BI dashboards:

DAF:
Full access to all financial tools: Invoice Prediction, Financial Information, Supplier Evaluation, and Clustering.
Dedicated Power BI dashboard with comprehensive financial insights.


Supplier Manager:
Access to Supplier Evaluation and Clustering features.
Power BI dashboard focused on supplier-related data and performance metrics.


Risk Manager:
Access to Invoice Prediction and Financial Information.
Power BI dashboard tailored for risk assessment and financial forecasting.



All roles have access to shared prediction and forecasting models, integrated into the application, but the Power BI dashboards differ based on their specific needs.
Known Issues

Sidebar Display: Ensure localStorage is cleared (localStorage.clear()) if the sidebar appears empty due to outdated role data.
Security: Passwords are currently stored in localStorage in plain text. For production, use a backend with proper password hashing (e.g., bcrypt) and JWT authentication.

Contributing

Fork the repository.
Create a new branch for your feature:git checkout -b feature/your-feature-name


Commit your changes:git commit -m "Add your feature description"


Push to your branch:git push origin feature/your-feature-name


Open a Pull Request on GitHub.


For questions or feedback, please contact ayaarf0406@gmail.com

Built with love by Aya Arfaoui
