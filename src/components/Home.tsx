import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-[100%] items-center gap-3">

      <Link to="/acta">
        <button className="bg-[#104777] text-white px-8 py-3 rounded-lg shadow-lg">
          Nueva Acta
        </button>
      </Link>
      <Link to="/acta">
        <button className="text-[#104777] shadow-lg px-8 py-3 rounded-lg bg-slate-50">
          Nueva Acta
        </button>
      </Link>
    </div>
  );
};

export default Home;
