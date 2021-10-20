import { render, asFragment } from '@testing-library/react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import memeReducer from './memeReducer';
import App from './App';

const store = createStore(memeReducer);

test('renders without crashing', () => {
  render(<Provider store={store}><App /></Provider>);
  }
);

test('matches snapshot', () => {
  const {asFragment} = render(<Provider store={store}><App /></Provider>);
  expect(asFragment()).toMatchSnapshot();
  }
);

test('shows title and form', () => {
  const {queryByText} = render(<Provider store={store}><App /></Provider>);
  expect(queryByText('Meme Generator')).toBeInTheDocument();
  expect(queryByText('Url:')).toBeInTheDocument();
  expect(queryByText('Top:')).toBeInTheDocument();
  expect(queryByText('Bottom:')).toBeInTheDocument();
  expect(queryByText('Make meme')).toBeInTheDocument();
  }
);

