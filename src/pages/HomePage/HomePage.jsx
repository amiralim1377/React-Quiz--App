import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex min-h-full flex-col items-center justify-between space-y-5">
      <div className="flex items-center justify-between md:space-x-12">
        <img
          src="/images/logo512.png"
          className="hidden h-20 w-20 md:block"
          alt=""
        />
        <h1 className="text-center font-sans text-base font-bold text-black hover:opacity-65 md:text-3xl lg:text-4xl dark:text-white">
          Welcome to The React Quiz!
        </h1>
        <img
          src="/images/logo512.png"
          className="hidden h-20 w-20 md:block"
          alt=""
        />
      </div>
      <p className="max-w-2xl text-center font-opensans text-base font-bold text-black md:text-4xl dark:text-white">
        Do You Want To Test Your React Mastery? Just Click Down
      </p>
      <Link to="/question">
        <button className="rounded-lg bg-accentBlue px-2 py-1 font-opensans text-2xl font-bold uppercase text-white hover:scale-95 hover:bg-accentCyan hover:opacity-40 md:px-4 md:py-2 dark:border dark:border-white dark:bg-darkBlue3">
          start test
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
