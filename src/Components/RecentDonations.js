import React from "react"

export default function RecentDonations(props) {
  let donations = props.donations


  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(el => (
          <li><span>{el.name} donated ${el.amount}</span> ${el.caption}</li>
        ))}
        <li><span>Jo donated $25</span>You really need this. Really.</li>
        <li><span>Rami donated $10</span>Here, take a break from work!</li>
      </ul>
    </section>
  )
}


