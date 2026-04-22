import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { routing } from './routing/routing.js'
import './styles/index.css'
// import { saveMenu } from "./api/api.js";

//TODO remove..? borde göras när en anställd gör en ändring //Ta bort help @Madde från Andreas
// saveMenu().then(console.log);

const projectRouter = createHashRouter(routing)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={projectRouter} />
  </StrictMode>
)