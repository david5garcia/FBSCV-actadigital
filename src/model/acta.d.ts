type Acta = {
  competicion: ContentString;
  categoria: ContentString;
  division: ContentString;
  modalidad: ContentString;
  localidad: ContentString;
  fechaHora: ContentString;
  terreno: ContentString;
  delegado: ContentString;
  equipoLocal: ContentString;
  equipoVisitante: ContentString;
  arbitroPrincipal: ContentString;
  arbitroPrimeraBase: ContentString;
  arbitroSegundaBase: ContentString;
  arbitroTerceraBase: ContentString;
  entrenadorLocal: ContentString;
  entrenadorVisitante: ContentString;
  firmaEntrenadorLocal: ContentString;
  firmaEntrenadorVisitante: ContentString;
  firmaArbitroPrincipal: ContentString;
  anotador: ContentString;
  comisarioTecnico: ContentString;
  amonestaciones: ContentString;
  expulsiones: ContentString;
  observaciones: ContentString;
  resultadoLocal: Resultado;
  resultadoVisitante: Resultado;
};

type Resultado = {
  hits: ContentNumber;
  errores: ContentNumber;
  carrerasPorEntrada: {
    [key: number]: {
      value: number | null;
      errors: string[];
    };
  };
};

type ContentString = {
  value: string;
  errors: string[];
};

type ContentNumber = {
  value: number;
  errors: string[];
};
