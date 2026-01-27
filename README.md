# Express TypeScript Backend Starter Template

A minimal backend starter built with **Express** and **TypeScript**.

This repository provides a clean and scalable foundation for building APIs or server applications without any business logic or authentication baked in. It is designed to be extended based on project needs.

---

## ✨ Features

- Express + TypeScript setup
- Clean and scalable folder structure
- Healthcheck route and controller
- Database connection setup using environment variables
- Centralized error handling
- Utility helpers:
  - `ApiResponse` for consistent API responses
  - `ApiError` for standardized error throwing
  - `asyncHandler` to avoid repetitive try/catch blocks
- Environment-based configuration
- Ready to extend.

---

## 📁 Project Structure
```
src/
├─ config/
│ ├─ env.ts # Environment variables & config
│ └─ db.ts # Database connection logic
│
├─ controllers/
│ └─ health.controller.ts
│
├─ routes/
│ └─ health.routes.ts
│
├─ middlewares/
│ ├─ asyncHandler.ts
│ └─ error.middleware.ts
│
├─ utils/
│ ├─ ApiError.ts
│ └─ ApiResponse.ts
│
├─ app.ts # Express app setup
└─ server.ts # Server bootstrap
```

---

## 🚀 Getting Started

### 1. Clone the repository
```
git clone https://github.com/your-username/express-ts-api-starter.git
cd express-backend-starter
```
### 2. Install the dependencies
```
npm install
```
### 3. setup enviroment variable
```
create .env file based on .env.example
```
### 4. Run the development server
```
for development server tsx library is being used
npm run dev

the server will run on http://localhost:5000
```

## Health Check Endpoint
http://localhost:5000/v1/health
response will be like this 
```js
{
  "success": true,
  "message": "Server is healthy"
}
```
## scripts


npm run dev      # Start development server


npm run build    # Build for production


npm start        # Start production server

## Api Response structure
```js
{
  statuscode: 200,
  success: true,
  message: "your message",
  data: // data could be in any shape it could be array, object, string etc... you have to pass data interface as genrics when calling new ApiResponse class
}
// example for sending response
// const data = {username: 'john'}
//  res.status(200).json(new ApiResponse<{username: string}>(200, data, message))
```
## Api Error Response structure
```
statuscode: 401,
success: false,
message: "login failed"
data: null
errors: // errors is an array its optional to send if you have send it otherwise it would be empty

// example
// const errors = [{message: "username must be unique"}, {message: "password must be greater than 6 digits"}] , this array can be any type
// throw new ApiError(401, "signup failed" )
```
## develompent vs production environment
if in .env file environment is === development then
- stack trace would be also send as error response.
- and in cookie config
  - secure would be false
  - and samesite would be lax

 if in .env file env is === production then
 - stack trace wont be go in api error
 - and cookie config will be send as
   - secure true and
   - samesite none // you can make it lax or true depend upon how you setup your frontend

  ## Important Notes
  - server will stop if
    - database connection failed
    - or .env file is not provided




