import { useLocalStorage } from "usehooks-ts";
import styles from "./css/ActaForm.module.scss";
import TablaResultado from "./TablaResultado";
import Firma from "./Firma";
import { PdfGenerator } from "../utils/PdfGenerator";

const ActaForm: React.FC = () => {
  const [acta, setActa] = useLocalStorage<Acta>("acta", {
    competicion: { value: "", errors: [] },
    categoria: { value: "", errors: [] },
    division: { value: "", errors: [] },
    modalidad: { value: "", errors: [] },
    localidad: { value: "", errors: [] },
    fechaHora: { value: "", errors: [] },
    terreno: { value: "", errors: [] },
    delegado: { value: "", errors: [] },
    equipoLocal: { value: "", errors: [] },
    equipoVisitante: { value: "", errors: [] },
    arbitroPrincipal: { value: "", errors: [] },
    arbitroPrimeraBase: { value: "", errors: [] },
    arbitroSegundaBase: { value: "", errors: [] },
    arbitroTerceraBase: { value: "", errors: [] },
    entrenadorLocal: { value: "", errors: [] },
    entrenadorVisitante: { value: "", errors: [] },
    firmaEntrenadorLocal: { value: "", errors: [] },
    firmaEntrenadorVisitante: { value: "", errors: [] },
    firmaArbitroPrincipal: { value: "", errors: [] },
    anotador: { value: "", errors: [] },
    comisarioTecnico: { value: "", errors: [] },
    amonestaciones: { value: "", errors: [] },
    expulsiones: { value: "", errors: [] },
    observaciones: { value: "", errors: [] },
    resultadoLocal: {
      hits: { value: 0, errors: [] },
      errores: { value: 0, errors: [] },
      carrerasPorEntrada: {
        1: { value: null, errors: [] },
        2: { value: null, errors: [] },
        3: { value: null, errors: [] },
        4: { value: null, errors: [] },
        5: { value: null, errors: [] },
        6: { value: null, errors: [] },
        7: { value: null, errors: [] },
        8: { value: null, errors: [] },
        9: { value: null, errors: [] },
        10: { value: null, errors: [] },
        11: { value: null, errors: [] },
        12: { value: null, errors: [] },
        13: { value: null, errors: [] },
        14: { value: null, errors: [] },
        15: { value: null, errors: [] }
      }
    },
    resultadoVisitante: {
      hits: { value: 0, errors: [] },
      errores: { value: 0, errors: [] },
      carrerasPorEntrada: {
        1: { value: null, errors: [] },
        2: { value: null, errors: [] },
        3: { value: null, errors: [] },
        4: { value: null, errors: [] },
        5: { value: null, errors: [] },
        6: { value: null, errors: [] },
        7: { value: null, errors: [] },
        8: { value: null, errors: [] },
        9: { value: null, errors: [] },
        10: { value: null, errors: [] },
        11: { value: null, errors: [] },
        12: { value: null, errors: [] },
        13: { value: null, errors: [] },
        14: { value: null, errors: [] },
        15: { value: null, errors: [] }
      }
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActa((prevActa) => ({
      ...prevActa,
      [name]: { value: value, errors: [] }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedActa = {
      ...acta,
      firmaArbitroPrincipal: {
        value: getFirmaFromCanvas("firmaArbitroPrincipal") ?? "",
        errors: []
      },
      firmaEntrenadorLocal: {
        value: getFirmaFromCanvas("firmaEntrenadorLocal") ?? "",
        errors: []
      },
      firmaEntrenadorVisitante: {
        value: getFirmaFromCanvas("firmaEtrenadorVisitante") ?? "",
        errors: []
      }
    };
    setActa(updatedActa);
    console.log(updatedActa);
    if (!validateActa(updatedActa)) {
      return;
    }
    PdfGenerator.generatePdf(updatedActa);
  };

  const validateActa = (acta: Acta) => {
    let validActa = true;

    validActa = checkEmptyFields(acta, validActa);

    return validActa;
  };

  const checkEmptyFields = (acta: Acta, validActa: boolean) => {
    const nonEmptyFields: (keyof Acta)[] = [
      "competicion",
      "equipoLocal",
      "equipoVisitante"
    ];
    nonEmptyFields.forEach((field) => {
      const fieldKey = acta[field];
      if ("value" in fieldKey) {
        if (fieldKey.value === "") {
          setActa((prevActa) => ({
            ...prevActa,
            [field]: {
              ...prevActa[field],
              errors: ["Este campo no puede estar vacío"]
            }
          }));
          validActa = false;
        }
      }
    });
    return validActa;
  };

  const getFirmaFromCanvas = (containerId: string) => {
    const canvas = document
      .getElementById(containerId)
      ?.getElementsByClassName("canvasContainer")[0]
      .querySelector("canvas");
    return canvas?.toDataURL();
  };

  return (
    <div className="mx-auto px-4 container">
      <form
        className={`flex flex-col gap-4 ${styles.formActa}`}
        onSubmit={handleSubmit}
      >
        <h1 className="text-[32px]">Acta</h1>
        <label>
          Competición
          <input
            type="text"
            name="competicion"
            value={acta.competicion.value}
            onChange={handleInputChange}
          />
          {acta.competicion.errors.map((error, index) => (
            <p key={index} className={styles.error}>
              {error}
            </p>
          ))}
        </label>
        <label>
          Categoría
          <input
            type="text"
            name="categoria"
            value={acta.categoria.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          División
          <input
            type="text"
            name="division"
            value={acta.division.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Modalidad
          <input
            type="text"
            name="modalidad"
            value={acta.modalidad.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Localidad
          <input
            type="text"
            name="localidad"
            value={acta.localidad.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Fecha y Hora
          <input
            type="datetime-local"
            name="fechaHora"
            value={acta.fechaHora.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Terreno
          <input
            type="text"
            name="terreno"
            value={acta.terreno.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Delegado
          <input
            type="text"
            name="delegado"
            value={acta.delegado.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Equipo Local
          <input
            type="text"
            name="equipoLocal"
            value={acta.equipoLocal.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Equipo Visitante
          <input
            type="text"
            name="equipoVisitante"
            value={acta.equipoVisitante.value}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Entrenador Local
          <input
            type="text"
            name="entrenadorLocal"
            value={acta.entrenadorLocal.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Entrenador Visitante
          <input
            type="text"
            name="entrenadorVisitante"
            value={acta.entrenadorVisitante.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Anotador
          <input
            type="text"
            name="anotador"
            value={acta.anotador.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Comisario Técnico
          <input
            type="text"
            name="comisarioTecnico"
            value={acta.comisarioTecnico.value}
            onChange={handleInputChange}
          />
        </label>

        <h2 className="text-2xl mt-8">Arbitros</h2>
        <label>
          Arbitro Principal
          <input
            type="text"
            name="arbitroPrincipal"
            value={acta.arbitroPrincipal.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Arbitro Primera Base
          <input
            type="text"
            name="arbitroPrimeraBase"
            value={acta.arbitroPrimeraBase.value}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Arbitro Segunda Base
          <input
            type="text"
            name="arbitroSegundaBase"
            value={acta.arbitroSegundaBase.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Arbitro Tercera Base
          <input
            type="text"
            name="arbitroTerceraBase"
            value={acta.arbitroTerceraBase.value}
            onChange={handleInputChange}
          />
        </label>

        <h2 className="text-2xl mt-8">Resultado</h2>
        <TablaResultado acta={acta} setActa={setActa} />

        <h2 className="mt-8 text-2xl">Otros</h2>
        <label>
          Amonestaciones
          <input
            type="text"
            name="amonestaciones"
            className={styles.textBox}
            value={acta.amonestaciones.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Expulsiones
          <input
            type="text"
            name="expulsiones"
            className={styles.textBox}
            value={acta.expulsiones.value}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Observaciones
          <input
            type="text"
            name="observaciones"
            className={styles.textBox}
            value={acta.observaciones.value}
            onChange={handleInputChange}
          />
        </label>

        <h2 className="text-2xl mt-8">Firmas</h2>
        <div id="firmaEntrenadorLocal">
          <h2>Entrenador Local</h2>
          <Firma />
        </div>
        <div id="firmaEtrenadorVisitante">
          <h2>Entrenador Visitante</h2>
          <Firma />
        </div>
        <div id="firmaArbitroPrincipal">
          <h2>Arbitro Principal</h2>
          <Firma />
        </div>

        <button
          className=" bg-[#104777] w-[50%] rounded-lg shadow-lg py-3 my-6 text-white center text-lg"
          type="submit"
        >
          Guardar Acta
        </button>
      </form>
    </div>
  );
};

export default ActaForm;
