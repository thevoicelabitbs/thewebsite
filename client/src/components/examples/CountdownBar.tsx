import CountdownBar from '../CountdownBar';

export default function CountdownBarExample() {
  return <CountdownBar targetHour={20} onScrollToUrgency={() => console.log('Scroll to urgency section')} />;
}
