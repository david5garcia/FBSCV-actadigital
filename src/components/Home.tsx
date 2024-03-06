import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../assets/Animation.json";

const Home = () => {
  return (
    <div className="flex flex-col w-[100%] items-center gap-3">
      <Lottie
        loop={false}
        autoplay
        className="w-[200px] h-[200px]"
        animationData={animation}
      />
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
