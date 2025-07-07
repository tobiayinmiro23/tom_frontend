import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "./Components/ui/sonner"
import { Context } from './AllFiles'


import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
      <App />
      <Toaster position='top-center' richColors />
    </Context>
  </StrictMode>,
)
