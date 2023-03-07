import React from "react"

export default function Progress(props) {
  let total = 0


  // for each el in the donations add the value of the amount key to total
  // will accumulate
  props.donations.forEach(el => {
    total += el.amount
  })


  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${total}</span> of
    <span className="secondary"> ${props.targetAmount}</span>
  </h2>
</section>
  )
}
