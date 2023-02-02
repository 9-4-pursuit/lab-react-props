export default function RecentDonations(props) {
  return (
    <>
    <h2> Recent Donations </h2>
     <ul>
      <li> <strong> {props.donation[0].name} donated {props.donation[0].amount} </strong> <p> {props.donation[0].caption} </p></li>
      <li> <strong> {props.donation[1].name} donated {props.donation[1].amount} </strong> <p> {props.donation[1].caption} </p></li>
      <li> <strong> {props.donation[2].name} donated {props.donation[2].amount} </strong> <p> {props.donation[2].caption} </p></li>
      <li> <strong> {props.donation[3].name} donated {props.donation[3].amount} </strong> <p> {props.donation[3].caption} </p></li>
      <li> <strong> {props.donation[4].name} donated {props.donation[4].amount} </strong> <p> {props.donation[4].caption} </p></li>
     </ul>
    </>
  );
}
