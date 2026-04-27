import Root from '../Root.jsx'
import FrontPage from '../pages/FrontPage.jsx'
import MenuPage from '../pages/MenuPage.jsx'
import CartPage from '../pages/CartPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import AdminPage from '../pages/AdminPage.jsx'
import LoadingPage from '../pages/LoadingPage.jsx'
import { delayMenuLoader } from '../api/menuLoader.js'

export const routing = [
  {
    path: '/',
    Component: Root,
    HydrateFallback: () => null,
    children: [
      { index: true, Component: FrontPage },

      {
        path: '/menu',
        loader: delayMenuLoader,
        Component: MenuPage
      },

      { path: '/cart', Component: CartPage },

      { path: '/login', Component: LoginPage },

      { path: '/loading', Component: LoadingPage },

      {
        path: '/admin',
        loader: delayMenuLoader,
        Component: AdminPage
      }
    ]
  }
]