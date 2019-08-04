import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from '../store.js';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';


/*smoke test */
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={STORE.lists} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

/* snapshot test */
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List cards={STORE.lists} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});