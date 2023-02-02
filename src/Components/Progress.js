export default function Progress(props) {
  return (
    <>
    <section className="progress">
    <h2> Raised <span className="secondary"> ${props.donationTotal}</span> of <span className="secondary"> ${props.TheTargetAmount} </span></h2>
    </section>
    </>
  );
}
