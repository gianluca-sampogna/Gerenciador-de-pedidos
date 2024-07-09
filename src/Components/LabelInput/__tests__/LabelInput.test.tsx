import React from 'react';
import { render } from '@testing-library/react-native';
import LabelInput from '../index';

describe('LabelInput', () => {
  test('Componente label Input', () => {
    const { debug, getAllByText } = render(
      <LabelInput value={'12'} handleChangeText={'Olá mundo'} />,
    );

    const element = getAllByText('Olá');
    expect(element).toBeTruthy();
  });
});
