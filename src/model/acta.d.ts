type Acta = {
  competicion: string;
  categoria: string;
  division: string;
  modalidad: string;
  localidad: string;
  fechaHora: string;
  terreno: string;
  delegado: string;
  equipoLocal: string;
  equipoVisitante: string;
  arbitroPrincipal: string;
  arbitroPrimeraBase: string;
  arbitroSegundaBase: string;
  arbitroTerceraBase: string;
  entrenadorLocal: string;
  entrenadorVisitante: string;
  firmaEntrenadorLocal: string;
  firmaEntrenadorVisitante: string;
  firmaArbitroPrincipal: string;
  anotador: string;
  comisarioTecnico: string;
  amonestaciones: string;
  expulsiones: string;
  observaciones: string;
  resultadoLocal: Resultado;
  resultadoVisitante: Resultado;
};

type Resultado = {
  hits: number;
  errores: number;
  carrerasPorEntrada: {[key: number]: number | null};
};
