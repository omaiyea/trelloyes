import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from '../store.js';

/*smoke test */
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={STORE.lists} />, div);
    ReactDOM.unmountComponentAtNode(div);
});