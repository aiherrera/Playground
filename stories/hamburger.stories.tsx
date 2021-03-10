import React, { useState } from 'react'
import { withKnobs, color, text, select } from '@storybook/addon-knobs'
import { Hamburger as HamburgerComponent } from '@aiherrera/react-hamburger'

export default {
  title: 'Playground/React Components',
  decorators: [withKnobs],
  component: HamburgerComponent
}

export const Hamburger = () => {
  const [state, setState] = useState(false)

  const hcolor = color('Color', '#28282A')
  const size = select('Size', ['small', 'medium', 'large'], 'medium')
  const direction = select('Direction', ['right', 'left'], 'right')
  const top = text('Top', '10')
  const right = text('Right', '10')
  const left = text('Left', 'auto')
  const device = select('Device', ['all', 'mobile', 'tablet'], 'all')

  const handleClick = () => {
    setState(!state)
  }

  return (
    <HamburgerComponent
      color={hcolor}
      size={size}
      direction={direction}
      top={top}
      left={left}
      right={right}
      device={device}
      handleClick={handleClick}
      isOpened={state}
    />
  )
}
