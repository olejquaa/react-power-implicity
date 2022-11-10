import React from 'react'
import { Slider } from './components/Slider/Slider'
import { Navigation } from './components/Navigation/Navigation'
import "./main.scss"


export const App = () => {
  return (
    <div className='content-block'>
      <Navigation />
      <Slider />
    </div>
  )
}
