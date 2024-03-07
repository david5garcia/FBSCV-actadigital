import { Link } from "react-router-dom";

const Home = () => {
  const handleNewActaClick = () => {
    localStorage.removeItem("acta");
  };

  const actaPresent = localStorage.getItem("acta") !== null;

  return (
    <div className="flex flex-col w-[100%] items-center gap-4">
      <div className="flex flex-col w-[100%] items-center gap-3 my-8">
        <h1 className="text-[#104777] text-3xl font-bold">
          Acta Digital FBSCV
        </h1>
        <p className="text-[#104777] text-center">
          Bienvenido al sistema de Acta Digital FBSCV, seleccione una opción
          para continuar.
        </p>
      </div>

      <Link to="/acta" onClick={handleNewActaClick}>
        <button className="bg-[#104777] text-white w-[180px] font-semibold py-3 rounded-lg shadow-xl">
          Nueva Acta
        </button>
      </Link>
      {actaPresent && (
        <Link to="/acta">
          <button className="text-[#104777] bg-gray-50 w-[180px] font-semibold py-3 rounded-lg shadow-xl">
            Continuar Acta
          </button>
        </Link>
      )}
    </div>
  );
};

export default Home;
