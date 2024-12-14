import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, resetinitialState } from "../../Slice/questionSlice";
import { useNavigate } from "react-router-dom";

function QuestionItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions?.questions);

  console.log(questions);

  const currentQuestionIndex = useSelector(
    (state) => state.questions?.currentQuestionIndex
  );
  console.log(currentQuestionIndex);

  if (
    !questions ||
    questions.length === 0 ||
    currentQuestionIndex === undefined
  ) {
    return <div>No questions available</div>;
  }

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  function handlegotoresulttest() {
    navigate("/");
    dispatch(resetinitialState());
  }

  const options1 = questions[currentQuestionIndex]?.option?.slice(0, 2);
  const options2 = questions[currentQuestionIndex]?.option.slice(2, 4);

  return (
    <div className="p-2  h-full flex flex-col justify-between  ">
      <p className="text-white  font-opensans text-center md:text-left font-bold text-xs lg:text-3xl md:text-2xl hover:opacity-55 hover:cursor-pointer">
        {/* Which is the most popular JavaScript framework? */}
        {questions[currentQuestionIndex]?.question}
      </p>
      <div className=" md:mt-7 mt-3   flex flex-col md:p-6   gap-5 justify-between  items-center   ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4   w-full">
          {options1.map((option, index) => (
            <button
              key={index}
              className={`
                bg-accentBlue hover:bg-accentCyan p-3 md:px-5 lg:px-8 xl:px-10 rounded-md w-full text-white font-opensans  md:text-base text-xs font-bold mt-2`}
            >
              {" "}
              {option}{" "}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4   w-full">
          {options2.map((option, index) => (
            <button
              key={index}
              className="bg-accentBlue hover:bg-accentCyan p-3 md:px-5 lg:px-8 xl:px-10  rounded-md w-full text-white font-opensans md:text-base text-xs font-bold mt-2 "
            >
              {" "}
              {option}{" "}
            </button>
          ))}
        </div>
      </div>
      <div
        id="timer-next-wrapper"
        className="flex flex-row items-center justify-between mt-10"
      >
        <div>timer</div>
        {currentQuestionIndex === questions.length - 1 ? (
          <button
            onClick={handlegotoresulttest}
            className="bg-darkBlue2 hover:opacity-40 p-2 md:p-2 rounded-md     text-white font-opensans md:text-base text-xs font-semibold"
          >
            Finish Test
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="bg-darkBlue2 hover:opacity-40 p-2 md:p-2 rounded-md     text-white font-opensans md:text-base text-xs font-semibold"
          >
            NextQuestion
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionItem;
