import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Link to="/">Home</Link>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
