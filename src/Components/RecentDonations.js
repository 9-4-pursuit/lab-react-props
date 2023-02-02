export default function RecentDonations(props) {
  
  const listItem = props.donations.map(donation =>{
    return(
      <li><span>{donation.name} ${donation.amount}</span>{donation.caption}.</li>
    )
  })
  return (
  <section>
    <h2>Recent Donations</h2>
    <ul>
     {listItem}
    </ul>
  </section>)
}
