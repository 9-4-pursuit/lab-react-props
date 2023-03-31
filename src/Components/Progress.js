export default function Progress(props) {
  const donations = props.donations;
  let totalDonated = 0;
  donations.forEach(donation => {
    totalDonated += donation.amount;
  });
  
  return (
    <>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${totalDonated}</span> of 
          <span className="secondary"> ${props.targetAmount}</span>
        </h2>
      </section>
    </>
  );
}