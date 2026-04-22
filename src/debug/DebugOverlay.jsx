
//TODO delete file

import { debugSettings } from './debugSettings.js'

export default function DebugOverlay({ opacityOverride }) {


  return (
    debugSettings.debug & debugSettings.menuPage.small === true ?
      <div className='debug-overlay'>
        <img className='debug-img' data-debug={opacityOverride ?? ''} src='./src/assets/mobileMenuDebug.png' />
      </div> : ''

    //medium

    //bug
    // : null
  )
}