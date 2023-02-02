import React from "react"

export default function RecentDonations(props) {

  // return will be jsx
  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    {props.donations.map(person => (
          <li><span>{person.name} donated ${person.amount}</span>{person.caption}</li>
    )
      )}
  </ul>

</section>
  )
}
