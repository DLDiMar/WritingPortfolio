// App.test.js
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './components/App';

describe('App Component', () => {
  test('renders without errors', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const appElement = screen.getByTestId('app-component');
    expect(appElement).toBeInTheDocument();
  });

  test('renders Login component when the route is /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    const loginElement = screen.getByTestId('login-component');
    expect(loginElement).toBeInTheDocument();
  });

  test('renders Home component when the route is /home', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );

    const homeElement = screen.getByTestId('home-component');
    expect(homeElement).toBeInTheDocument();
  });
});
