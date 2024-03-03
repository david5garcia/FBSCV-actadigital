import { useLocalStorage } from "usehooks-ts";

const ActaForm: React.FC = () => {
  const [acta, setActa] = useLocalStorage<Acta>("actaData", {
    competicion: "",
    categoria: "",
    division: "",
    modalidad: "",
    localidad: "",
    fechaHora: "",
    terreno: "",
    delegado: "",
    equipos: {
      equipoLocal: {
        nombre: "",
        entrenador: {
          nombre: "",
          firma: ""
        },
        resultado: {
          hits: 0,
          errores: 0,
          carrerasPorEntrada: []
        }
      },
      equipoVisitante: {
        nombre: "",
        entrenador: {
          nombre: "",
          firma: ""
        },
        resultado: {
          hits: 0,
          errores: 0,
          carrerasPorEntrada: []
        }
      }
    },
    arbitros: {
      arbitroPrincipal: {
        nombre: "",
        firma: ""
      },
      arbitroPrimeraBase: {
        nombre: ""
      },
      arbitroSegundaBase: {
        nombre: ""
      },
      arbitroTerceraBase: {
        nombre: ""
      }
    },
    anotador: "",
    comisarioTecnico: "",
    amonestaciones: "",
    expulsiones: "",
    observaciones: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActa((prevActa) => ({ ...prevActa, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActa(acta);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Competición:
        <input
          type="text"
          name="competicion"
          value={acta.competicion}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Categoría:
        <input
          type="text"
          name="categoria"
          value={acta.categoria}
          onChange={handleInputChange}
        />
      </label>
      <label>
        División:
        <input
          type="text"
          name="division"
          value={acta.division}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Modalidad:
        <input
          type="text"
          name="modalidad"
          value={acta.modalidad}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Localidad:
        <input
          type="text"
          name="localidad"
          value={acta.localidad}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Fecha y Hora:
        <input
          type="text"
          name="fechaHora"
          value={acta.fechaHora}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Terreno:
        <input
          type="text"
          name="terreno"
          value={acta.terreno}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Guardar Acta</button>
    </form>
  );
};

export default ActaForm;
