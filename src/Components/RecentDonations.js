export default function RecentDonations(props) {
  
  return (
  <section>
    <h2>Recent Donations</h2>
    <ul>
      <li><span>{props.arr[0].name} donated {props.arr[0].amount}</span>{props.arr[0].caption}</li>
      <li><span>{props.arr[1].name} donated {props.arr[1].amount}</span>{props.arr[1].caption}</li>
      <li><span>{props.arr[2].name} donated {props.arr[2].amount}</span>{props.arr[2].caption}</li>
      <li><span>{props.arr[3].name} donated {props.arr[3].amount}</span>{props.arr[3].caption}</li>
      <li><span>{props.arr[4].name} donated {props.arr[4].amount}</span>{props.arr[4].caption}</li>
    </ul>
  </section>
  )
}
