POS_System-NodeJS

A Point-of-Sale (POS) system built with Node.js, designed to streamline retail operations such as sales tracking, inventory management, and user role-based access control.

🚀 Features
🔐 User Authentication — Secure login system using JWT or Passport.js.
📦 Product Management — Add, update, or delete products.


🌐 RESTful API — Easily integrate with front-end apps or third-party services.

🛠 Technologies Used

Node.js — Server-side runtime
Express.js — Web application framework
MongoDB / MySQL — (Specify which one you're using)
JWT / Passport.js — Authentication and authorization
dotenv — For managing environment variables
Mongoose / Sequelize — (Optional, based on DB)

(Add any other libraries like cors, bcryptjs, body-parser, etc.)

📦 Getting Started
✅ Prerequisites
Node.js (v14 or higher)

npm

MongoDB or MySQL installed and running

⚙️ Installation
git clone https://github.com/ruwasanka21/POS_System-NodeJS.git
cd POS_System-NodeJS
npm install

🔧 Configuration
Create a .env file in the project root with the following variables:

PORT=3000
DB_URI=your_database_connection_string
JWT_SECRET=your_jwt_secret


▶️ Running the Application
npm start

📡 API Endpoints

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| POST   | `/api/login`        | Authenticate user      |
| GET    | `/api/products`     | Retrieve product list  |
| POST   | `/api/products`     | Add new product        |
| PUT    | `/api/products/:id` | Update product details |
| DELETE | `/api/products/:id` | Delete a product       |
| POST   | `/api/sales`        | Record a new sale      |
| GET    | `/api/reports`      | Get sales reports      |

👤 Author
Developed by ruwasanka21
