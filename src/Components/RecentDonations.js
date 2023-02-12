export default function RecentDonations(props) {
  return (
    <section>
  <ul>
    <li><span>{props.name} donated ${props.amount}</span>{props.caption}</li>
  </ul>
</section>
  );
}
