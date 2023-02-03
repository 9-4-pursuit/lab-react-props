export default function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {props.donations.map((el, i) => (
          <li key={`list-${i}`}>
            <span>
              {el.name} donated ${el.amount}
            </span>
            {el.caption}
          </li>
        ))}
      </ul>
    </section>
  )
}
