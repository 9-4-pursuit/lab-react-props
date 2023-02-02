import React from "react"


export default function Progress(props) {
  let num = 0
  let donations = props.donations

  donations.forEach(el => {
    num += el.amount
  })




  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${num} </span> of
        <span className="secondary"> ${props.targetAmount}</span>
      </h2>
    </section>
  )
}
