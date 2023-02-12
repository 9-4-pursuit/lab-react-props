export default function Progress({targetAmount, currentAmount, donations}) {
  // let amount = 0

  donations.forEach(donation => {
    donation += donation.amount
  })
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${currentAmount}</span> of <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  )
}