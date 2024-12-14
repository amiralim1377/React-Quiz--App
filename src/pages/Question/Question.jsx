import QuestionItem from "../../Components/QuestionItem/QuestionItem";
import getQuestions from "../../services/getQuestions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../../Slice/questionSlice";
import { useQuery } from "@tanstack/react-query";

function Question() {
  const dispatch = useDispatch();
  const {
    isLoading,
    data: questionsdata,
    isError,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: () => getQuestions(),
  });

  const questions = useSelector((state) => state.questions?.questions);

  useEffect(() => {
    if (questionsdata) {
      dispatch(setQuestions(questionsdata));
    }
  }, [questionsdata, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !questions || questions.length === 0) {
    return <div>Error loading questions</div>;
  }

  return (
    <div className=" w-full min-h-full  flex flex-col p-2   ">
      <div className="flex flex-row items-center justify-between  border-b-2  ">
        <div className="text-white text-xs md:text-2xl ">
          <span>Question: </span>
          <span>1/15</span>
        </div>
        <div className="text-white text-xs md:text-2xl">
          <span>points: </span>
          <span>0/280</span>
        </div>
      </div>
      {questions?.length > 0 && <QuestionItem />}
    </div>
  );
}

export default Question;
