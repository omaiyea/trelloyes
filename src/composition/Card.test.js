import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

/*smoke test */
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

/*snapshot test*/
it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card title="First card" content="lorem ipsum"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});