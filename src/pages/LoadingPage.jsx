import burgerFilled from '../assets/burger-filled.svg'
import burgerCutout from '../assets/hamburger-cutout.svg'
export default function LoadingPage() {

  return (
    <div className='loading-box'>
      <div className='burger-glow' style={{ WebkitMaskImage: `url(${burgerFilled})` }} />
      {/* Layer 1 — colors, clipped to burger shape */}
      <div
        className='burger-fill'
        style={{ WebkitMaskImage: `url(${burgerFilled})` }}
      />

      {/* Layer 2 — cutout overlay, hides everything except the holes */}
      <div className='burger-overlay' style={{ WebkitMaskImage: `url(${burgerCutout})` }} />

    </div>
  )
}