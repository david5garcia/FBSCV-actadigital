type Acta = {
  competicion: string;
  categoria: string;
  division: string;
  modalidad: string;
  localidad: string;
  fechaHora: string;
  terreno: string;
  delegado: string;
  equipos: {
    equipoLocal: Equipo;
    equipoVisitante: Equipo;
  };
  arbitros: {
    arbitroPrincipal: Arbitro;
    arbitroPrimeraBase: Arbitro;
    arbitroSegundaBase: Arbitro;
    arbitroTerceraBase: Arbitro;
  };
  anotador: string;
  comisarioTecnico: string;
  amonestaciones: string;
  expulsiones: string;
  observaciones: string;
};

type Equipo = {
  nombre: string;
  entrenador: Entrenador;
  resultado: Resultado;
};

type Entrenador = {
  nombre: string;
  firma: string;
};

type Arbitro = {
  nombre: string;
  firma?: string;
};

type Resultado = {
  hits: number;
  errores: number;
  carrerasPorEntrada: number[];
};
