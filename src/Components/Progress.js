import React from "react"
export default function Progress(props){
  let wallet = 0

  props.donations.forEach(el => {
    wallet += el.amount 
  })

  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${wallet}</span> of
    <span className="secondary"> ${props.targetAmount}</span>
  </h2>
</section>
  )
}
