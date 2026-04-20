import Root from '../Root.jsx'
import FrontPage from '../pages/FrontPage.jsx'
import MenuPage from '../pages/MenuPage.jsx'
import CartPage from '../pages/CartPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import AdminPage from '../pages/AdminPage.jsx'
import { menuLoader } from '../api/menuLoader.js'

export const routing = [
  {
    path: '/',
    Component: Root,

    children: [
      { index: true, Component: FrontPage },

      {
        path: '/menu',
        loader: menuLoader,
        Component: MenuPage
      },

      { path: '/cart', Component: CartPage },

      { path: '/login', Component: LoginPage },

      {
        path: '/admin',
        loader: menuLoader,
        Component: AdminPage
      }
    ]
  }
]