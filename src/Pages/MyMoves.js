import { Move } from "../components/Move";

function MyMoves({ apiData }) {
  const { Customer_Estimate_Flow } = apiData;
  return (
    <>
      <div className="myMovesContainer page">
        <h2 className="page-title">My Moves</h2>
        {Customer_Estimate_Flow.map((move) => (
          <Move move={move} key={move.estimate_id} />
        ))}
      </div>
    </>
  );
}

export { MyMoves };
