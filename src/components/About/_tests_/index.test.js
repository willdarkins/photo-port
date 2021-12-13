import React from "react";
//retrieve some functions from the React Testing Library
import { render, cleanup } from '@testing-library/react'
//jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect'
import About from '..';
//this ensures that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);
// the describe function to declare the component we're testing
describe('About component', () => {
    //the first test will be the baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
      });
      it('matches snapshot DOM node structure', () => {
        //in this test case, we'll use the asFragment function, which returns a snapshot of the About component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      })
      
})