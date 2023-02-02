export default function RecentDonations(props) {
  const displayDonations = props.donations;
console.log(props.donations)
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {displayDonations.map((donation) => {
         return  <li>
            <span>
              {donation.name} donated {donation.amount}
            </span>
            {donation.caption}
          </li>;
        })}
      </ul>
    </section>
  );
}
