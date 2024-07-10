interface IAddPedido {
  name: string;
  dt_registro?: string;
  corte?: string;
  silk?: string;
  bordado?: string;
  sublimacao?: string;
  costura?: string;
  faccao?: string | null;
  etapa?: string;
}

export { IAddPedido };
