import PollCreator from './components/PollCreator';
import PollList from './components/PollList';
import { useState } from 'react';


function App() {
  const [polls, setPolls] = useState([]);

  const handleCreate = (newPoll) => {
    setPolls([...polls, {
      ...newPoll,
      id: Date.now(),
      votes: Array(newPoll.options.length).fill(0)
    }]);
  };

  return (
  <div>
    <h1>QuickPoll</h1>
    <PollCreator onCreate={handleCreate} />
    <PollList polls={polls} />
  </div>
  );
}



export default App;
