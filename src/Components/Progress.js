import "../App";
export default function Progress(props) {
  return (
  <section className="progress">
  <h2>
    Raised <span className="secondary">${props.donations}</span> of
    <span className="secondary"> ${props.targetAmount}</span>
  </h2>
  </section>
);
}
// export default function Progress({targetAmount, donations}) {
//   const sumOfAmounts= donations.reduce((accumulator, donation) => (accumulator += donation.amount), 0);
//   return (
//   <section className="progress">
//   <h2>
//     Raised <span className="secondary">${donations}</span> of
//     <span className="secondary"> ${targetAmount}</span>
//   </h2>
//   </section>
// );
// }