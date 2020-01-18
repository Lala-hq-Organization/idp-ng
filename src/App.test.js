import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import App from './App';

function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
}

test('renders learn react link', () => {
  const { container } = renderWithRouter(<App />);
  expect(container.innerHTML).toMatch(
    '<div class="App"><div class="StyledGrommet-sc-19lkkz7-0 dwOFwB"><div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div class="css-pzdxlx"><div class="css-h7t4y2"></div><div class="css-1hwqqnv"></div></div></div></div></div>'
  );
});
