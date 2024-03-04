import style from "./TablaResultado.module.scss";

const TablaResultado = ({
  acta,
  setActa
}: {
  acta: Acta;
  setActa: React.Dispatch<React.SetStateAction<Acta>>;
}) => {
  const handleRunChangeLocal = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActa((prevActa) => ({
      ...prevActa,
      resultadoLocal: {
        ...prevActa.resultadoLocal,
        carrerasPorEntrada: {
          ...prevActa.resultadoLocal.carrerasPorEntrada,
          [name]: parseInt(value)
        }
      }
    }));
  };

  const handleRunChangeVisitante = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActa((prevActa) => ({
      ...prevActa,
      resultadoVisitante: {
        ...prevActa.resultadoVisitante,
        carrerasPorEntrada: {
          ...prevActa.resultadoVisitante.carrerasPorEntrada,
          [name]: parseInt(value)
        }
      }
    }));
  };

  const handleHitsChangeLocal = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActa((prevActa) => ({
      ...prevActa,
      resultadoLocal: {
        ...prevActa.resultadoLocal,
        hits: parseInt(value)
      }
    }));
  };

    const handleHitsChangeVisitante = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setActa((prevActa) => ({
        ...prevActa,
        resultadoVisitante: {
            ...prevActa.resultadoVisitante,
            hits: parseInt(value)
        }
        }));
    };

  const handleErrorsChangeLocal = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setActa((prevActa) => ({
      ...prevActa,
      resultadoLocal: {
        ...prevActa.resultadoLocal,
        errores: parseInt(value)
      }
    }));
  };

    const handleErrorsChangeVisitante = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        console.log(name, value);
        setActa((prevActa) => ({
        ...prevActa,
        resultadoVisitante: {
            ...prevActa.resultadoVisitante,
            errores: parseInt(value)
        }
        }));
    };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Local</th>
          <th>Visitante</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 20 }, (_, i) => (
          <tr key={i + 1}>
            <td>{i + 1}</td>
            <td key={i + 1}>
              <input
                type="number"
                name={`${i + 1}`}
                value={
                  acta.resultadoLocal.carrerasPorEntrada[i + 1] !== null &&
                  acta.resultadoLocal.carrerasPorEntrada[i + 1]! >= 0
                    ? acta.resultadoLocal.carrerasPorEntrada[i + 1]
                    : ""
                }
                onChange={handleRunChangeLocal}
              />
            </td>
            <td>
              <input
                type="number"
                name={`${i + 1}`}
                value={
                  acta.resultadoVisitante.carrerasPorEntrada[i + 1] !== null &&
                  acta.resultadoVisitante.carrerasPorEntrada[i + 1]! >= 0
                    ? acta.resultadoVisitante.carrerasPorEntrada[i + 1]
                    : ""
                }
                onChange={handleRunChangeVisitante}
              />
            </td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td>
            {Object.values(acta.resultadoLocal.carrerasPorEntrada).reduce(
              (acc, curr) => acc! + (curr || 0),
              0
            )}
          </td>
          <td>
            {Object.values(acta.resultadoVisitante.carrerasPorEntrada).reduce(
              (acc, curr) => acc! + (curr || 0),
              0
            )}
          </td>
        </tr>
        <tr>
          <td>Hits</td>
          <td>
            <input
              type="number"
              name="hits"
              value={acta.resultadoLocal.hits}
              onChange={handleHitsChangeLocal}
            />
          </td>
          <td>
            <input
              type="number"
              name="hits"
              value={acta.resultadoVisitante.hits}
              onChange={handleHitsChangeVisitante}
            />
          </td>
        </tr>
        <tr>
          <td>Errores</td>
          <td>
            <input
              type="number"
              name="errores"
              value={acta.resultadoLocal.errores}
              onChange={handleErrorsChangeLocal}
            />
          </td>
          <td>
            <input
              type="number"
              name="errores"
              value={acta.resultadoVisitante.errores}
              onChange={handleErrorsChangeVisitante}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaResultado;
