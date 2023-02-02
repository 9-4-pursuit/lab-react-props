export default function RecentDonations(props) {
  return (
    <>
    <h2> Recent Donations </h2>
    
     <ul>
      <li> <strong> {props.donationName} donated {props.donationAmount} </strong> <p> {props.donationCaption} </p></li>
     <li> <strong> {props.donationName} donated {props.donationAmount} </strong> <p> {props.donationCaption} </p></li> 
     </ul>
    
    </>
  );
}

// the child components use props!!! from data given by app.js in the app funtion 