import QuestionItem from "../../Components/QuestionItem/QuestionItem";
import getQuestions from "../../services/getQuestions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetinitialState, setQuestions } from "../../Slice/questionSlice";
import { useQuery } from "@tanstack/react-query";
import { OrbitProgress } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";

function Question() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    data: questionsdata,
    isError,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: () => getQuestions(),
  });

  const questions = useSelector((state) => state.questions?.questions);
  const currentQuestionIndex = useSelector(
    (state) => state.questions?.currentQuestionIndex,
  );

  const points = useSelector((state) => state.questions?.points);

  useEffect(() => {
    if (questionsdata) {
      dispatch(setQuestions(questionsdata));
    }
  }, [questionsdata, dispatch]);

  if (isLoading) {
    return (
      <OrbitProgress
        variant="spokes"
        dense
        color="#31cacc"
        size="large"
        text="Loading"
        textColor="#5eacd0"
      />
    );
  }

  function handleGoToHomePage() {
    navigate("/");
    dispatch(resetinitialState());
  }

  if (isError || !questions || questions.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-between text-xs text-white md:text-2xl">
        Error loading questions
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

  return (
    <div className="flex min-h-full w-full flex-col p-2">
      <div className="flex flex-row items-center justify-between border-b-2">
        <div className="text-xs text-white md:text-2xl">
          <span>Question: </span>
          <span>{currentQuestionIndex + 1}/15</span>
        </div>
        <div className="text-xs text-white md:text-2xl">
          <span>points: </span>
          <span>{points}/280</span>
        </div>
      </div>
      {questions?.length > 0 && <QuestionItem />}
    </div>
  );
}

export default Question;
