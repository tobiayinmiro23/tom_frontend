# tom_frontend

A art gallery website for viewing images built with react, vite, tailwind, typescript, shadcn and experss js.

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

├── dist/               # The npm build
├── public/               
│   └── image/          # Stores images accessible as static assets
├── src/                # Main source code
│   ├── components/     # Reusable UI components
│   ├── context/      # For global state management
│   ├── fetch/        # contains all the fetch requests made to different endpoints
│   ├── pages/          # Application screens
│   ├── types/      # Contains all the types used
│   ├── assets/        # static files
│   ├── lib/        # shadcn helper for safely handling Tailwind CSS classes and preventing conflicts.
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
- **shadcn**: *provides prebuilt UI components and patterns built on Radix UI and Tailwind CSS*
- **class-variance-authority**: *for creating reusable, variant-based component styles (cva) in Tailwind CSS*
- **clsx**: *for conditionally combining CSS class names into a single string*
- **tailwind-merge**: *for merging Tailwind CSS class names and resolving conflicts*
- **lucide-react**: *for using a library of React-ready icons in components*
- **@radix-ui/react-alert-dialog**: *for creating accessible alert dialog modals in React applications*
- **@radix-ui/react-dialog**: *for building fully accessible, customizable modal dialogs in React*
- **@radix-ui/react-slot**: *for composing components by passing child elements into a “slot” while preserving props and styling*
- **tw-animate-css**: *for adding prebuilt CSS animations with Tailwind utility classes*


