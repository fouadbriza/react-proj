import { useState } from 'react';

export default function PollCreator({ onCreate }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const addOption = () => setOptions([...options, '']);

    const handleSubmit = (e) => {
    e.preventDefault();
    const validOptions = options.filter(opt => opt.trim() !== '');
    if (!question.trim() || validOptions.length < 2) return alert('Need a question and at least 2 options');
    onCreate({ question, options: validOptions });
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Poll question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((opt, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Option ${i + 1}`}
          value={opt}
          onChange={(e) => {
            const newOpts = [...options];
            newOpts[i] = e.target.value;
            setOptions(newOpts);
          }}
        />
      ))}
      <button type="button" onClick={addOption}>Add Option</button>
      <button type="submit">Create Poll</button>
    </form>
  );

}