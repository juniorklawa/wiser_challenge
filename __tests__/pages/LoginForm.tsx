import {
  cleanup,
  render,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
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
  });

  it('shows an error if e-mail is invalid', async () => {
    const {getByTestId, queryByTestId} = render(
      <LoginForm handleLogin={() => {}} isLoading={false} />,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(emailInput, 'jailson');
    fireEvent.changeText(passwordInput, '123123');
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(queryByTestId('error-container')).toBeTruthy();
      expect(getByTestId('error-text').props.children).toBe(
        'Digite um e-mail válido.',
      );
    });
  });

  it('shows an error if password field is empty', async () => {
    const {getByTestId, queryByTestId} = render(
      <LoginForm handleLogin={() => {}} isLoading={false} />,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(emailInput, 'foobar@gmail.com');
    fireEvent.changeText(passwordInput, '');
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(queryByTestId('error-container')).toBeTruthy();
      expect(getByTestId('error-text').props.children).toBe(
        'Senha é obrigatória.',
      );
    });
  });

  it('submit button should be disabled if validation fails', async () => {
    const {getByTestId} = render(
      <LoginForm handleLogin={() => {}} isLoading={false} />,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(emailInput, 'foobargmail.com');
    fireEvent.changeText(passwordInput, '12312412412');

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toBeCalledTimes(0);
    });
  });
});
