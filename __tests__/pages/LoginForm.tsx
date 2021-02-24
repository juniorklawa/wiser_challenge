import {cleanup, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import LoginForm from '../../src/components/LoginForm';

const handleSubmit = jest.fn();

afterEach(cleanup);

describe('<LoginForm/>', () => {
  it('renders correctly', async () => {
    const {toJSON} = render(
      <LoginForm handleLogin={handleSubmit} isLoading={false} />,
    );

    await waitFor(() => {
      expect(toJSON()).toMatchSnapshot();
    });

    // const emailInput = getByTestId('email-input');
    // const button = getByText('Add');
    // fireEvent.changeText(emailInput, 'jailson');
    // fireEvent.press(button);
    // fireEvent.changeText(input, 'item1');
    // fireEvent.press(button);
    // const item0 = getByText('item0');
    // const item1 = getByText('item1');
    // expect(item0).toBeDefined();
    // expect(item1).toBeDefined();
    // fireEvent.press(getAllByTestId('cell-delete')[0]);
    // expect(queryByText('item0')).toBeNull();
    // const list = getByTestId('list');
    // expect(list).toContainElement(item1);
  });
});
