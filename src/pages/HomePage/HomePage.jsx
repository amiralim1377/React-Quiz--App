import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between   space-y-5  min-h-full ">
      <div className="flex items-center justify-between md:space-x-12">
        <img
          src="/images/logo512.png"
          className="w-20 h-20 hidden md:block"
          alt=""
        />
        <h1 className="text-white font-bold md:text-3xl lg:text-4xl  text-base text-center font-sans hover:opacity-65 ">
          Welcome to The React Quiz!
        </h1>
        <img
          src="/images/logo512.png"
          className="w-20 h-20 hidden md:block"
          alt=""
        />
      </div>
      <p className="text-white font-bold max-w-2xl text-base  md:text-4xl font-opensans  text-center  ">
        Do You Want To Test Your React Mastery? Just Click Down
      </p>
      <Link to="/question">
        <button className="px-2 py-1 md:px-4 md:py-2  bg-accentBlue rounded-lg uppercase hover:bg-accentCyan text-white font-bold text-2xl font-opensans ">
          start test
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
