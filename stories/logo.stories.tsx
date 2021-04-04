import React from 'react'
import { withKnobs, files, number } from '@storybook/addon-knobs'
import { Logo as LogoComponent } from '@aiherrera/react-logo'

export default {
  title: 'Playground/React Components',
  decorators: [withKnobs],
  component: LogoComponent
}

export const Logo = () => {
  const Image = files('Image', '.png, .jpe, .jpeg, .svg', [])[0]
  const width = number('Width', 64)
  const height = number('Height', 64)

  return <LogoComponent logoSVG={Image} width={width} height={height} />
}
