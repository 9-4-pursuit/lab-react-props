export default function RecentDonations(props) {
    return (
        <div>
            <h2>Recent Donations</h2>
            <ul>
                <li><span>{props.donation[0].name} donated ${props.donation[0].amount}</span>{props.donation[0].caption}</li>
                <li><span>{props.donation[1].name} donated ${props.donation[1].amount}</span>{props.donation[1].caption}</li>
                <li><span>{props.donation[2].name} donated ${props.donation[2].amount}</span>{props.donation[2].caption}</li>
                <li><span>{props.donation[3].name} donated ${props.donation[3].amount}</span>{props.donation[3].caption}</li>
                <li><span>{props.donation[4].name} donated ${props.donation[4].amount}</span>{props.donation[4].caption}</li>
            </ul>
        </div>
    );
}
