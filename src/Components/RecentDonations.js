import DonationForm from "./DonationForm";

export default function RecentDonations(props) {
  return (

<div>
  <h2>Recent Donations</h2>
  <ul>
  <li><span>{props.donations[0].name} donated ${props.donations[0].amount}</span>{props.donations[0].caption}</li>
  <li><span>{props.donations[1].name} donated ${props.donations[1].amount}</span>{props.donations[1].caption}</li>
  <li><span>{props.donations[2].name} donated ${props.donations[2].amount}</span>{props.donations[2].caption}</li>
  <li><span>{props.donations[3].name} donated ${props.donations[3].amount}</span>{props.donations[3].caption}</li>
  <li><span>{props.donations[4].name} donated ${props.donations[4].amount}</span>{props.donations[4].caption}</li>
  </ul>
</div>
)
  }
