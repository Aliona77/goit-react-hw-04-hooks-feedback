import { useState } from 'react';
import { Container } from "./App.styles";

import Statisctics from "./components/Statisctics/Statisctics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions"
import Section from "./components/Section/Section"
import Notification from "./components/Notification/Notification";

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


  const countTotalFeedback = () => good + neutral + bad;
    
   const countPositiveFeedbackPercentage = () =>
        Math.round(good * 100 / countTotalFeedback ()|| 0);
      
   const onLeaveFeedbackButton = (event) => {
       const {name} = event.target
        switch (name) {
            case "good":
                setGood((good) => good + 1);
                break;
            case "neutral":
                setNeutral((neutral) => neutral + 1);
                break;
            case "bad":
                setBad((bad) => bad + 1);
                break;
            default: return;
        };
    };
    
    return (
        <Container>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={{good, neutral, bad}}
                    onLeaveFeedback={onLeaveFeedbackButton} />
            </Section>
            <Section title="Statisctics">
                {countTotalFeedback() > 0 ? (
                    <Statisctics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    /> ):(
                    <Notification message="No feedback given" />
               )}
            </Section>
        </Container>
    );
};

export default App;
    
    
    

