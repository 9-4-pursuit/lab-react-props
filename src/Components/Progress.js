export default function Progress(props) {
  let totalDonate = 0;
  for (let donation of props.items) {
    totalDonate += donation.amount;
    console.log(totalDonate);
  };
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonate}</span> of
        <span className="secondary"> ${props.target}</span>
      </h2>
    </section>
  );
}