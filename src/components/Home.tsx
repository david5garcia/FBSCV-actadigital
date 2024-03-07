import { Link } from "react-router-dom";

const Home = () => {
  const handleNewActaClick = () => {
    localStorage.removeItem("acta");
  };

  const actaPresent = localStorage.getItem("acta") !== null;

  return (
    <div className="flex flex-col w-[100%] items-center gap-4">
      <div className="flex flex-col w-[100%] items-center gap-3 my-8 py-6 px-10">
        <h1 className="text-[#104777] text-[2.7rem] font-bold text-center">
          Acta Digital FBSCV
        </h1>
        <p className="text-[#104777] text-center text-lg">
          Bienvenido al sistema de Acta Digital FBSCV, aquí podrás crear y firmar actas de encuentros de Beisbol y Sofbol.
        </p>
      </div>

      <Link to="/acta" onClick={handleNewActaClick}>
        <button className="bg-[#104777] text-white w-[260px] font-semibold py-4 rounded-lg shadow-xl text-lg">
          Nueva Acta
        </button>
      </Link>
      {actaPresent && (
        <Link to="/acta">
          <button className="text-[#104777] bg-gray-50 w-[260px] font-semibold py-4 rounded-lg shadow-xl text-lg">
            Continuar Acta
          </button>
        </Link>
      )}
    </div>
  );
};

export default Home;
