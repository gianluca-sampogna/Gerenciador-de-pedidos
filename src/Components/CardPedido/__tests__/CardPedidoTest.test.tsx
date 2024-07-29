// import React from 'react';
// import { render, fireEvent } from '@testing-library/react-native';
// import { CardPedido } from '../index';
// import { IAddPedido } from '@src/context/database/types';
// import { DatabaseContext } from '@database/index';

// describe('CardPedido', () => {
//   const pedido: IAddPedido = {
//     name: 'Gianluca',
//     dt_finalizado: '12/01/2004',
//     bordado: 'Willian',
//     etapa: 'finalizado',
//     dt_registro: '25/07/2024',
//   };

//   it('Testa texto finalizado', () => {
//     const { getAllByText, debug } = render(<CardPedido pedido={pedido} />);

//     debug(); // Use debug para inspecionar o que está sendo renderizado

//     const elements = getAllByText('finalizado'); // Verifique se o texto correto está sendo buscado
//     expect(elements.length).toBeGreaterThan(0); // Verifique se há pelo menos um elemento com o texto "finalizado"
//   });

//   it('Confirma que o modal aparece e a função de deletar é chamada', () => {
//     const deletePedidoMock = jest.fn();

//     jest.mock('@database/index', () => ({
//       DatabaseContext: {
//         Provider: ({ children }: any) => (
//           <mockDatabaseContext.Provider
//             value={{ deletePedido: deletePedidoMock }}
//           >
//             {children}
//           </mockDatabaseContext.Provider>
//         ),
//       },
//     }));

//     const { getByText, getByRole } = render(<CardPedido pedido={pedido} />);

//     // Simula um long press para abrir o modal
//     fireEvent(getByRole('button'), 'longPress');

//     // Verifica se o modal aparece
//     expect(getByText('Deletar item')).toBeTruthy();

//     // Simula o pressionamento do botão "Confirmar"
//     fireEvent.press(getByText('Confirmar'));

//     // Verifica se a função deletePedido foi chamada
//     expect(deletePedidoMock).toHaveBeenCalledWith(pedido);
//   });
// });
