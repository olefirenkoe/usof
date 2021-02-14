import { useParams } from "react-router-dom"
import QuestionInfo from "./QuestionInfo";

function QuestionId() {
    let {questionId} = useParams();

    return (
        <QuestionInfo id={questionId}/>
    )
}

export default QuestionId;