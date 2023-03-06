import React from "react"

export default function RecentDonations({donator}) {

  return (
    <div>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          {donator}
        </ul>
      </section>
    </div>
  )
}
