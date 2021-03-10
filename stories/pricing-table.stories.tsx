import React from 'react'
import { withKnobs, color, text, boolean } from '@storybook/addon-knobs'
import { PricingTable as PricingTableComponent } from '@aiherrera/react-pricing-table'
import { IoCheckmark } from 'react-icons/io5'

export default {
  title: 'Playground/React Components',
  decorators: [withKnobs],
  component: PricingTableComponent,
  parameters: {
    actions: {
      handles: ['onclick', 'click button']
    }
  }
}

export const PricingTable = () => {
  const group1 = 'Basic'
  const group2 = 'Standard'
  const group3 = 'Premium'
  const group4 = 'Colors'

  const plans = [
    {
      id: 'basic',
      circle: text('Circle', 'B', group1),
      title: text('Title', 'Basic', group1),
      subtitle: text('Subtitle', 'Best for personal websites', group1),
      price: text('Price', '$0,000', group1),
      discount: text('Discount', '$0,000', group1),
      buttonText: text('Button', 'Select plan', group1),
      popular: boolean('Popular', false, group1),
      features: (
        <ul>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
        </ul>
      )
    },
    {
      id: 'standard',
      circle: text('Circle', 'S', group2),
      title: text('Title', 'Standard', group2),
      subtitle: text('Subtitle', 'Optimized for startups', group2),
      price: text('Price', '$0,000', group2),
      buttonText: text('Button', 'Select plan', group2),
      popular: boolean('Popular', true, group2),
      features: (
        <ul>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
        </ul>
      )
    },
    {
      id: 'premium',
      circle: text('Circle', 'E', group3),
      title: text('Title', 'Premium', group3),
      subtitle: text('Subtitle', 'Enterprise class website', group3),
      price: text('Price', '$0,000', group3),
      buttonText: text('Button', 'Select plan', group3),
      popular: boolean('Pupular', false, group3),
      features: (
        <ul>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
          <li>
            <IoCheckmark />
            <span>Lorem ipsum dolor sit.</span>
          </li>
        </ul>
      )
    }
  ]

  const main = color('Main color', '#EEEEFC', group4)
  const features = color('Features color', '#A5A5F0', group4)
  const font = color('Font', '#fff', group4)
  const fontInverted = color('Font inverted', '#000', group4)
  const background = color('Background color', '#fff', group4)
  const popular = color('Popular color', '#7474E7', group4)
  const checkMark = color('Check mark color', '#89ce94', group4)

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <>
      <PricingTableComponent
        plans={plans}
        color={{
          main,
          features,
          font,
          fontInverted,
          background,
          popular,
          checkMark
        }}
        handleClick={handleClick}
      />
    </>
  )
}
