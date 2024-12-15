import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetinitialState } from "../../Slice/questionSlice";

function Result() {
  const points = useSelector((state) => state.questions?.points);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGoToHomePage() {
    navigate("/");
    dispatch(resetinitialState());
  }
  return (
    <div className="flex h-full flex-col items-center justify-between space-y-10 p-4">
      <div className="flex items-center justify-between md:space-x-12">
        <img
          src="/images/logo512.png"
          className="hidden h-20 w-20 md:block"
          alt=""
        />
        <h1 className="text-center font-sans text-base font-bold text-white hover:opacity-65 md:text-3xl lg:text-4xl">
          Result of The React Quiz!
        </h1>
        <img
          src="/images/logo512.png"
          className="hidden h-20 w-20 md:block"
          alt=""
        />
      </div>
      <p className="text-center font-sans text-base font-bold text-white hover:opacity-65 md:text-3xl lg:text-4xl">
        You scored {points} out of 280.
        <span>({Math.floor((points / 280) * 100)}%)</span>
      </p>

      <button
        onClick={handleGoToHomePage}
        className="rounded-md bg-darkBlue2 p-2 font-opensans text-xs text-white hover:scale-95 hover:opacity-40 md:p-6 md:text-base md:font-semibold"
      >
        {" "}
        Reset Test{" "}
      </button>
    </div>
  );
}

export default Result;
