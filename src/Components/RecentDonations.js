

export default function RecentDonations(props) {

  const recentDonations = props.donations.map(donation => {
    return (
      <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
    )
  })

  return (
    <div>
      <section>
        <h2>Recent Donations</h2>
        <ul>{recentDonations}</ul>
      </section>
    </div>
  )
}
