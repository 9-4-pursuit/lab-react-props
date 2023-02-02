export default function RecentDonations(props) {
  const donations = props.donations;

  return (
    <>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          {
            donations.map(person => (
                <li>
                  <span>{person.name} donated ${person.amount}</span>
                  {person.caption}
                </li>
            ))
          }
        </ul>
      </section>
    </>
  );
}
