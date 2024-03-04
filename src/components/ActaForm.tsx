import { useLocalStorage } from "usehooks-ts";
import styles from "./ActaForm.module.scss";
import TablaResultado from "./TablaResultado";
import Firma from "./Firma";

const ActaForm: React.FC = () => {
  const [acta, setActa] = useLocalStorage<Acta>("acta", {
    competicion: "",
    categoria: "",
    division: "",
    modalidad: "",
    localidad: "",
    fechaHora: "",
    terreno: "",
    delegado: "",
    equipoLocal: "",
    equipoVisitante: "",
    arbitroPrincipal: "",
    arbitroPrimeraBase: "",
    arbitroSegundaBase: "",
    arbitroTerceraBase: "",
    entrenadorLocal: "",
    entrenadorVisitante: "",
    firmaEntrenadorLocal: "",
    firmaEntrenadorVisitante: "",
    firmaArbitroPrincipal: "",
    anotador: "",
    comisarioTecnico: "",
    amonestaciones: "",
    expulsiones: "",
    observaciones: "",
    resultadoLocal: {
      hits: 0,
      errores: 0,
      carrerasPorEntrada: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null,
        20: null
      }
    },
    resultadoVisitante: {
      hits: 0,
      errores: 0,
      carrerasPorEntrada: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null,
        20: null
      }
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setActa((prevActa) => ({ ...prevActa, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActa(acta);
  };

  return (
    <form
      className={`flex flex-col gap-4 ${styles.formActa}`}
      onSubmit={handleSubmit}
    >
      <h1>Acta</h1>
      <label>
        Competición
        <input
          type="text"
          name="competicion"
          value={acta.competicion}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Categoría
        <input
          type="text"
          name="categoria"
          value={acta.categoria}
          onChange={handleInputChange}
        />
      </label>
      <label>
        División
        <input
          type="text"
          name="division"
          value={acta.division}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Modalidad
        <input
          type="text"
          name="modalidad"
          value={acta.modalidad}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Localidad
        <input
          type="text"
          name="localidad"
          value={acta.localidad}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Fecha y Hora
        <input
          type="datetime-local"
          name="fechaHora"
          value={acta.fechaHora}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Terreno
        <input
          type="text"
          name="terreno"
          value={acta.terreno}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Delegado
        <input
          type="text"
          name="delegado"
          value={acta.delegado}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Equipo Local
        <input
          type="text"
          name="equipoLocal"
          value={acta.equipoLocal}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Equipo Visitante
        <input
          type="text"
          name="equipoVisitante"
          value={acta.equipoVisitante}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Arbitro Principal
        <input
          type="text"
          name="arbitroPrincipal"
          value={acta.arbitroPrincipal}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Arbitro Primera Base
        <input
          type="text"
          name="arbitroPrimeraBase"
          value={acta.arbitroPrimeraBase}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Arbitro Segunda Base
        <input
          type="text"
          name="arbitroSegundaBase"
          value={acta.arbitroSegundaBase}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Arbitro Tercera Base
        <input
          type="text"
          name="arbitroTerceraBase"
          value={acta.arbitroTerceraBase}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Entrenador Local
        <input
          type="text"
          name="entrenadorLocal"
          value={acta.entrenadorLocal}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Entrenador Visitante
        <input
          type="text"
          name="entrenadorVisitante"
          value={acta.entrenadorVisitante}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Anotador
        <input
          type="text"
          name="anotador"
          value={acta.anotador}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Comisario Técnico
        <input
          type="text"
          name="comisarioTecnico"
          value={acta.comisarioTecnico}
          onChange={handleInputChange}
        />
      </label>
      <h1>Resultado</h1>
      <TablaResultado acta={acta} setActa={setActa} />

      <label>
        Amonestaciones
        <input
          type="text"
          name="amonestaciones"
          className={styles.textBox}
          value={acta.amonestaciones}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Expulsiones
        <input
          type="text"
          name="expulsiones"
          className={styles.textBox}
          value={acta.expulsiones}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Observaciones
        <input
          type="text"
          name="observaciones"
          className={styles.textBox}
          value={acta.observaciones}
          onChange={handleInputChange}
        />
      </label>

        <h1>Firmas</h1>
        <Firma/>

      <button
        className=" bg-slate-300 w-[50%] rounded-lg shadow-lg py-3 "
        type="submit"
      >
        Guardar Acta
      </button>
    </form>
  );
};

export default ActaForm;
