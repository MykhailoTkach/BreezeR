import React from 'react'
import { Breadcrum } from '../Components/Breadcrum/Breadcrum'

describe('<Breadcrum />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Breadcrum />)
  })
})