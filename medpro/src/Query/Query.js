import Footer from "../Footer/Footer";
import "./Query.scss";
import { useState } from "react";

const Query = () => {
  const [questions, setQuestions] = useState([
    {
      text: "What is the capital of France?",
      answer:
        "Lorem Ipsum is a placeholder text used in the design and publishing industries to demonstrate the layout and visual representation of a document, website, or advertisement without being distracted by actual content. This text has been the industry’s standard dummy text since the 1500s, originating from an unknown printer’s scrambled galley of type.",
    },
    {
      text: "What is the largest ocean on Earth?",
      answer:
        "Lorem Ipsum is a placeholder text used in the design and publishing industries to demonstrate the layout and visual representation of a document, website, or advertisement without being distracted by actual content. This text has been the industry’s standard dummy text since the 1500s, originating from an unknown printer’s scrambled galley of type.",
    },
    {
      text: "How many continents are there?",
      answer:
        "Lorem Ipsum is a placeholder text used in the design and publishing industries to demonstrate the layout and visual representation of a document, website, or advertisement without being distracted by actual content. This text has been the industry’s standard dummy text since the 1500s, originating from an unknown printer’s scrambled galley of type.",
    },
    {
      text: "What is the tallest mountain in the world?",
      answer:
        "Lorem Ipsum is a placeholder text used in the design and publishing industries to demonstrate the layout and visual representation of a document, website, or advertisement without being distracted by actual content. This text has been the industry’s standard dummy text since the 1500s, originating from an unknown printer’s scrambled galley of type.",
    },
    {
      text: "What is the currency of Japan?",
      answer:
        "Lorem Ipsum is a placeholder text used in the design and publishing industries to demonstrate the layout and visual representation of a document, website, or advertisement without being distracted by actual content. This text has been the industry’s standard dummy text since the 1500s, originating from an unknown printer’s scrambled galley of type.",
    },
    {
      text: "What is the chemical symbol for gold?",
      answer:
        "Lorem Ipsum is a placeholder text used in the design and publishing industries to demonstrate the layout and visual representation of a document, website, or advertisement without being distracted by actual content. This text has been the industry’s standard dummy text since the 1500s, originating from an unknown printer’s scrambled galley of type.",
    },
  ]);
  const [questionText, setQuestionText] = useState("");

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (questionText) {
      setQuestions([
        ...questions,
        { text: questionText, answer: "To be provided" },
      ]);
      setQuestionText("");
    }
  };

  return (
    <div className="queryBody">
      <div className="queryContainer">
        <h2 className="title">Questions & Answers</h2>

        <form className="questionForm" onSubmit={handleQuestionSubmit}>
          <input
            type="text"
            placeholder="Ask your question here..."
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>

        <div className="qaList">
          {questions.map((question, index) => (
            <div key={index} className="qaCard">
              <div className="question">
                <h4>{question.text}</h4>
              </div>
              <div className="answer">
                <p>{question.answer}</p>
              </div>
              <button className="readMore">Read More</button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Query;
