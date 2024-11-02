import React from 'react'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'

describe('<DescriptionBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DescriptionBox />)
  })
})