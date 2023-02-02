export default function Progress(props) {
  let amount = 0;
  for (const donation of props.donations) {
    amount += donation.amount;
  }
  return (
    <div>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${amount}</span> of
          <span className="secondary"> ${props.targetAmount}</span>
        </h2>
      </section>
    </div>
  )
}
