
# HK Holdings

HK Holdings Website and Admin Panel
This repository contains the source code for the HK Holdings official website and its admin panel. The project is built using modern web development technologies to deliver a responsive, user-friendly interface and a robust backend.


Professional and visually appealing layout to showcase HK Holdings’ services and expertise.
Fully responsive design, optimized for both desktop and mobile devices.
Easy-to-navigate sections highlighting company details, services, and contact information.

![Logo](https://raw.githubusercontent.com/lazyScriptor/hkholdings-website/refs/heads/master/frontend/src/assets/logo.jpg)
<img src="https://raw.githubusercontent.com/lazyScriptor/hkholdings-website/refs/heads/master/frontend/src/assets/logo.jpg"/>


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`HOST`=localhost

`USER`=root

`PASSWORD`=

`DATABASE`=hkholdings

`JWT_SECRET`=theeka


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| brandDarkMaroon| ![#40342F](https://via.placeholder.com/10/0a192f?text=+)  |
| brandLightMaroon| ![#AD8E61](https://via.placeholder.com/10/f8f8f8?text=+)  |
| brandWhite | ![#FEFEFE](https://via.placeholder.com/10/00b48a?text=+)  |
| brandBlack | ![#241C1A](https://via.placeholder.com/10/00b48a?text=+)  |
| brandGrey | ![#8B8V8A](https://via.placeholder.com/10/00b48a?text=+)  |


## Demo


User view v 1.4 - https://drive.google.com/file/d/1YcbBkjH9fOfX9fJTz7vDIJQCinkbDTbL/view?usp=sharing

Admin panel v 1.1 - https://drive.google.com/file/d/1IFrz7lKrWloZs7ueMy2HeuEi70npr4Jp/view?usp=sharing
## Installation

For the frontend and backend

```bash
  npm install 
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/lazyScriptor/hkholdings-website.git
```

Go to the frontend directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Go back to the previous directory

```bash
  cd .
```
Go again to the backend directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```



## Tech Stack

**Server:** Node, Express, MySQL2, JSON Web Tokens (JWT), Bcrypt.js, Multer, Sharp, Day.js, ESLint, Nodemon

**Client:** React-Vite , Tailwind


