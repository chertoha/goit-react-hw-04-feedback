import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

const App = () => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics></Statistics>
      </Section>
    </>
  );
};

export default App;
