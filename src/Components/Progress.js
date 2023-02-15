export default function Progress( { donationAmount, targetAmount }) {
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${donationAmount}</span> of {" "}
    <span className="secondary">${targetAmount}</span>
  </h2>
</section>
  )
}
