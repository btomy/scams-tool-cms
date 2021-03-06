import React from 'react';
import QuestionBlock from '../QuestionBlock/QuestionBlock';
import Answers from '../Answers/Answers';
import ShowSummary from './ShowSummary';

import ProgressBar from 'react-bootstrap/ProgressBar'

const Steps = ({
  currentStep,
  isResult,
  question,
  summary,
  results,
  currentSelection,
  handleChange,
  ProgressBarValue
}) => {
  return (
    <React.Fragment>
      {isResult ? (
        <ShowSummary summary={summary}/>
      ) : (
        <div>
          <ProgressBar now={ProgressBarValue} /> 
          <QuestionBlock question={question} />
          <fieldset className="answer-block">
            <Answers
              results={results}
              currentSelection={currentSelection}
              handleChange={handleChange}
            />
          </fieldset>
        </div>
      )}
    </React.Fragment>
  );
};

export default Steps;
