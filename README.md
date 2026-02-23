# tom_frontend

A art gallery website for viewing images built with react, vite, typescript, shadcn and experss js.

## 🚀 Features

- sign up
- login in
- responsive UI
- loader
- toasts for message notification
- view all photos functionality
- view individual photo functionality
- view individual photo tags
- add comments functionality
- view comments functionality 
- edit comments functionality 
- delete comments functionality
- integration with supabase 



## 📋 Prerequisites

- Node.js >= 18
- npm or yarn


## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tobiayinmiro23/tom_frontend.git
   ```

2. **Enter the directory**
   ```bash
   cd tom_frontend
   ```
   
3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```

├── dist/               # THe npm build
├── public/               
│   └── image/          # Stores images accessible as static assets
├── src/                # Main source code
│   ├── components/     # Reusable UI components
│   ├── context/      # For global state management
│   ├── fetch/        # contains all the fetch requests made to different endpoints
│   ├── pages/          # Application screens
│   ├── types/      # Contains all the types used
│   ├── assets/        # static files
│   ├── lib/        # For safely handling Tailwind CSS classes and preventing conflicts.
│   ├── AllFiles.jsx    # Centralized imports and exports for easy access to all components and pages from a single file
└── README.md           # Project documentation

```


## 📦 Dependencies

- **tailwind css**:  *for styling html elements*  
- **react-router-dom**:  *for navigating*  
- **react-spinners**:  *for loading animation*
- **react-lines-ellipsis**:  *for truncating/shortening lengthy texts and replacing them with three dots*
- **sonner**:  *for creating toasts/message notification*
- **axios**:  *for handling http requests*
- 

