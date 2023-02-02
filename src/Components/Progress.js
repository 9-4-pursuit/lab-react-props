export default function Progress(props) {
  let totalDonate = 0
  for (let donation of props.arr){
totalDonate += donation.amount
}
  return (
  <section className="progress">
  <h2>
    Raised <span className="secondary">${totalDonate}</span> of
    <span className="secondary"> $1000</span>
  </h2>
</section>
)
}
