export default function RecentDonations(props) {
  return (
    <section>
      {/* <h2>Recent Donations</h2> */}
      <ul>
        <li><span>{props.name} donated ${props.amount}</span>{props.caption}</li>
        {/* <li><span>Rami donated $10</span>Here, take a break from work!</li> */}
        {/* <!-- etc... --> */}
      </ul>
    </section>
  );
}
