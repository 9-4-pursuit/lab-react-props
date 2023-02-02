export default function RecentDonations(props) {  

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
      <li><span>{props.array[0].name} donated ${props.array[0].amount}</span>{props.array[0].caption}</li>
      <li><span>{props.array[1].name} donated ${props.array[1].amount}</span>{props.array[1].caption}</li>
      <li><span>{props.array[2].name} donated ${props.array[2].amount}</span>{props.array[2].caption}</li>
      <li><span>{props.array[3].name} donated ${props.array[3].amount}</span>{props.array[3].caption}</li>
      <li><span>{props.array[4].name} donated ${props.array[4].amount}</span>{props.array[4].caption}</li>
      </ul>
    </section>
  );
}