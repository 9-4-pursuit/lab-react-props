import React from "react"

export default function RecentDonations(props) {
  // console.log(props.donations)
  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    {props.donations.map((person) => {
        // console.log(person)
        return (
          <li>
          <span>{person.name} donated ${person.amount}</span>
          {person.caption}
        </li>
        )
        

      })
    }
  </ul>
</section>

  )
}

// {
//   amount: 250,
//   caption: "You really need this. Really.",
//   id: 1,
//   name: "Jo",
// }


// // donations.map((donation) => {
// //   return 
// //   <div>
// //     <li>{donation.name} donated {}</li>
// //   </div>

// })
