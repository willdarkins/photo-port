import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);
//test Nav component
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})
//test visibility of camera emoji in Nav
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);
    // Assert
    //getByLabelText method and query by the aria-label value
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
  })  