export default function Progress({total, actualAmount}) {
  return (
    <section>
    <h2> 
      Raised <span className='secondary'>${total}</span> of <span className='secondary'>${actualAmount}</span>
    </h2>
    </section>
  )
}
