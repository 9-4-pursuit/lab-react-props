export default function Progress(props) {
  let amount = 0
  // let donations= props.donations
    
  // for (let i=0; i< props.donations.length; i++) {
  //   amount += props.donations[i].amount
  // }
  props.donations.forEach(donation => {
    amount += donation.amount
  })
  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${amount}</span> of <span className="secondary">${props.targetAmount}</span>
  </h2>
</section>
   
  )
}
