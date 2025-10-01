export default function PollList({ polls }) {
return (
    <div>
      {polls.length === 0 ? (
        <p>No polls yet. Create one above!</p>
      ) : (
        polls.map((poll) => (
          <div key={poll.id}>
            <h3>{poll.question}</h3>
            <ul>
              {poll.options.map((opt, i) => (
                <li key={i}>{opt} — {poll.votes[i]} votes</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
