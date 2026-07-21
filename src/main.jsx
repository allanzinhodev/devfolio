import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BacklandsGDD } from './components/BacklandsGDD.jsx'

// Roteamento mínimo por pathname. /backlands é uma página privada (GDD) enviada
// por link direto; não é referenciada em nenhuma outra página do portfólio.
const path = window.location.pathname.replace(/\/+$/, '')
const Root = path === '/backlands' ? BacklandsGDD : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
