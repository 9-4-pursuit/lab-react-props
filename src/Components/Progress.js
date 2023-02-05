export default function Progress({ amount }) {

  return (
    <>
    <section className="progress">
      <h2>
        Raised <span className="secondary">${amount}</span> of 
         <span className="secondary"> $1000</span>
      </h2>
    </section>
    </>
  )

}