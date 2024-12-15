import { useDispatch, useSelector } from "react-redux";
import { incrementPoints, nextQuestion } from "../../Slice/questionSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function QuestionItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions?.questions);

  const [clickedIndex, setClickedIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  const currentQuestionIndex = useSelector(
    (state) => state.questions?.currentQuestionIndex,
  );

  const correctOption = useSelector(
    (state) => state.questions?.questions[currentQuestionIndex]?.correctoption,
  );

  const points = useSelector(
    (state) => state.questions?.questions[currentQuestionIndex]?.points,
  );

  if (
    !questions ||
    questions.length === 0 ||
    currentQuestionIndex === undefined
  ) {
    return <div>No questions available</div>;
  }

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
    setIsClicked(false);
    setClickedIndex(null);
  };

  const handleOptionClick = (index) => {
    setIsClicked(true);
    setClickedIndex(index);
    if (index === correctOption) {
      dispatch(incrementPoints(points));
    }
  };

  function handleGoToResultTest() {
    navigate("/result");
  }

  const options = questions[currentQuestionIndex]?.option;

  return (
    <div className="flex h-full flex-col justify-between p-2">
      <p className="text-center font-opensans text-xs font-bold text-white hover:cursor-pointer hover:opacity-55 md:text-left md:text-xl lg:text-2xl">
        {questions[currentQuestionIndex]?.question}
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {options.map((option, index) => (
          <button
            key={index}
            className={`${isClicked && index === correctOption ? "bg-green-500" : ""} ${isClicked && index === clickedIndex && index !== correctOption ? "bg-red-500" : ""} ${!isClicked ? "bg-accentBlue hover:bg-accentCyan" : "bg-gray-500"} ${!isClicked ? "bg-accentBlue hover:bg-accentCyan" : ""} ${isClicked ? "cursor-not-allowed" : "cursor-pointer"} button mt-2 h-12 w-full rounded-md bg-accentBlue p-4 font-sans text-xs font-thin text-white md:h-20 md:text-base md:font-light lg:font-semibold xl:font-bold`}
            onClick={() => handleOptionClick(index)}
            disabled={isClicked}
          >
            {" "}
            {option}{" "}
          </button>
        ))}
      </div>

      <div
        id="timer-next-wrapper"
        className="mt-10 flex flex-row items-center justify-between"
      >
        <div>timer</div>
        {isClicked && currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNextQuestion}
            className="rounded-md bg-darkBlue2 p-2 font-opensans text-xs text-white hover:scale-95 hover:opacity-40 md:p-2 md:text-base md:font-semibold"
          >
            {" "}
            Next Question{" "}
          </button>
        ) : (
          isClicked &&
          currentQuestionIndex === questions.length - 1 && (
            <button
              onClick={handleGoToResultTest}
              className="rounded-md bg-darkBlue2 p-2 font-opensans text-xs text-white hover:scale-95 hover:opacity-40 md:p-2 md:text-base md:font-semibold"
            >
              {" "}
              Finish Test{" "}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default QuestionItem;
