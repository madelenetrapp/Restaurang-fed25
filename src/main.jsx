import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { routing } from './routing/routing.js'
import './styles/index.css'
//TODO: init store här?
const projectRouter = createHashRouter(routing)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={projectRouter} />
  </StrictMode>
)
