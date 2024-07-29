import React from 'react';
import { render } from '@testing-library/react-native';
import LabelInput from '../index';

describe('LabelInput', () => {
  test('Componente label Input', () => {
    const { debug, getAllByText } = render(
      <LabelInput label="Olá" value="12" handleChangeText={() => {}} />,
    );

    const elements = getAllByText('Olá');
    expect(elements.length).toBeGreaterThan(0); // Verifique se há pelo menos um elemento com o texto "Olá"
  });
});
