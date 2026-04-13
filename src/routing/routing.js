import Root from '../Root.jsx'
import FrontPage from '../pages/FrontPage.jsx'
import MenuPage from '../pages/MenuPage.jsx'
import CartPage from '../pages/CartPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'

export const routing = [
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: FrontPage },
      { path: '/menu', Component: MenuPage },
      { path: '/cart', Component: CartPage },
      { path: '/login', Component: LoginPage }
      //config page? adminConfigPage?
    ]
  }
]