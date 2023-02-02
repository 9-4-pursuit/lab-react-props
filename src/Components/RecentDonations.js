  export default function RecentDonations(props) {
    
    // function newestDonation(){
    // let donations=props.donations;
    // let ul=document.querySelector("ul");
    // let li=document.createElement("li")

    // li.innerHTML = `<span>${donations.name} donated ${donations.amount}</span>\n${donations.caption}`
    // }
  return (
  <section>

  <h2>Recent Donations</h2>
  {/* {newestDonation()} */}
  <ul>
    <li><span>Jo donated $25</span>You really need this. Really.</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li>

      <li><span>{props.donations[0].name} donated {props.donations[0].amount}</span>{props.donations[0].caption}</li>
      <li><span>{props.donations[1].name} donated {props.donations[1].amount}</span>{props.donations[1].caption}</li>
      <li><span>{props.donations[2].name} donated {props.donations[2].amount}</span>{props.donations[2].caption}</li>
      <li><span>{props.donations[3].name} donated {props.donations[3].amount}</span>{props.donations[3].caption}</li>
      <li><span>{props.donations[4].name} donated {props.donations[4].amount}</span>{props.donations[4].caption}</li>
  </ul>
</section>
)
}

// NAME donated $AMOUNT Comment.
