export default function RecentDonations() {

  const donations = props.donations;
  const totalDonations = donations.map((donation) => {

    return (
      <li><span>{ donation.name } donated $ { donation.amount }</span>{ donation.caption }</li>
    );
  })

  
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>{ totalDonations }</ul>
    </section>
    
  );
}
