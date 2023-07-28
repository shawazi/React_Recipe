import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecipeProvider } from './context/RecipeContext.tsx'
import AuthProvider from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
