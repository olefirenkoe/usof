import { useState, useEffect } from "react";

import api from "../packages/api";

export default () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const questions = await api.questions.getQuestions();

        if (questions.length > 0) {
          setQuestions(questions);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuestions();
  }, []);

  return questions;
};