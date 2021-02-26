import useGetQuestions from "./useGetQuestions";

function MainQuestion() {
  const questions = useGetQuestions();

  console.log("questions = ", questions);
  return <h1>Hello</h1>;
}

export default MainQuestion;
