import { NavLink } from 'react-router'

export default function FrontPage() {

  return (
    <div className='hero-box'>

      <div className='front-page-panel'>
        <h3>
          Welcome to Lyan, where burgers are reimagined with fire and precision. Take your time, have a look around, and order something worth remembering.
        </h3>
      </div>

      <NavLink to='/menu' role="button" className="button button-big">Menu</NavLink>
    </div >
  )
}