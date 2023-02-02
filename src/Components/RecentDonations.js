export default function RecentDonations(props) {

const donations = props.donations;
const listItems = donations.map(donation => {
  return (
    <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
  )
})

  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>{listItems}</ul>
</section>
  );
}
