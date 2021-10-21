import { render, asFragment,fireEvent } from '@testing-library/react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import memeReducer from './memeReducer';
import MemeForm from './MemeForm';

const store = createStore(memeReducer);

test('renders without crashing', () => {
  render(<Provider store={store}><MemeForm /></Provider>);
  }
);

test('matches snapshot', () => {
  const {asFragment} = render(<Provider store={store}><MemeForm /></Provider>);
  expect(asFragment()).toMatchSnapshot();
  }
);

test('renders form', () => {
  const {queryByText} = render(<Provider store={store}><MemeForm /></Provider>);

  expect(queryByText('Url:')).toBeInTheDocument();
  expect(queryByText('Top:')).toBeInTheDocument();
  expect(queryByText('Bottom:')).toBeInTheDocument();

}
);

