import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import { FirstStepsApp } from './components/FirstSetpsApp'
/* import { MyAwesomeApp } from './components/MyAwesomeApp' */


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp/>
{/*     <MyAwesomeApp/> */}
  </StrictMode>
)
