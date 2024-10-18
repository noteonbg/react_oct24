import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const renderWithRouter = (component) => {
  return render(<Router>{component}</Router>);
};

describe('App Navigation', () => {
  test('navigates to the home page', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  test('navigates to the about page', () => {
    renderWithRouter(<App />);
    
    // Click on the About link
    fireEvent.click(screen.getByText(/about/i));

    // Check if the About page is displayed
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  test('navigates back to home page', () => {
    renderWithRouter(<App />);
    
    // Click on the About link
    fireEvent.click(screen.getByText(/about/i));
    
    // Click on the Home link
    fireEvent.click(screen.getByText(/home/i));

    // Check if the Home page is displayed again
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});

/*

Render with Router:

We create a helper function renderWithRouter that renders the App component wrapped in BrowserRouter. This is necessary to use the routing features.
Home Page Navigation Test:

In the first test, we verify that the Home page is displayed when the app first renders.
Navigation to About Page:

In the second test, we simulate a click on the "About" link using fireEvent.click and then check if the About page is displayed.
Navigating Back to Home:

In the last test, we navigate to the About page and then back to the Home page, confirming that the Home page displays correctly again.


*/