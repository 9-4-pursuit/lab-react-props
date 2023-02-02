export default function Progress(props) {
  //accumulator loop for amount
  let amount = 0
  for (let i=0; i < props.donations.length; i++){
amount += props.donations[i].amount;
  }
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${amount}</span> of
    <span className="secondary"> $1000</span>
  </h2>
</section>
  )
}
