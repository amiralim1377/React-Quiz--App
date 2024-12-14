import supabase from "./supabase";

const getQuestions = async () => {
  const { data: questions, error } = await supabase
    .from("questions")
    .select("*");
  if (error) {
    console.error("Error fetching questions:", error);
    return [];
  } else {
    // console.log("Questions fetched from Supabase:", questions);
    return questions;
  }
};

getQuestions();
export default getQuestions;
