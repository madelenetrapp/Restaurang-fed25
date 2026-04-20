import { NavLink } from 'react-router'

export default function FrontPage() {

  return (
    <div className='hero-box'>

      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt neque sequi vero labore iste minus hic voluptatem. Exercitationem iste facere atque repellat quia et omnis, quasi perferendis. Fugit, aut fugiat!
      </h3>
      <NavLink to='/menu' className="button button-big">Menu</NavLink>
    </div >
  )
}