import { render, asFragment } from '@testing-library/react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import memeReducer from './memeReducer';
import Meme from './Meme';

const store = createStore(memeReducer);

test('renders without crashing', () => {
  render(<Provider store={store}><Meme id={1} url="www.google.com" top="hi" bottom="bye"/></Provider>);
  // render(<Meme id={1} url="www.google.com" top="hi" bottom="bye"/>);
  }
);

test('matches snapshot', () => {
  const {asFragment} = render(<Provider store={store}><Meme id={1} url="www.google.com" top="hi" bottom="bye"/></Provider>);
  expect(asFragment()).toMatchSnapshot();
  }
);

test('renders meme', () => {
  const {queryByText, queryByAltText} = render(<Provider store={store}><Meme id={1} url="www.google.com" top="hi" bottom="bye"/></Provider>);
  expect(queryByText('hi')).toBeInTheDocument();
  expect(queryByText('bye')).toBeInTheDocument();
  const image = queryByAltText('a meme');

  expect(image).toBeInTheDocument();

  expect(image).toHaveAttribute('src',
    'www.google.com'
  );
}
);

