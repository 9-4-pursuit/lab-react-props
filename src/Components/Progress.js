export default function Progress(props) {
  let c = 0
  props.donations.forEach(el => {
    c += el.amount
  })
  return (
    <section className='progress'>
      <h2>
        Raised <span className='secondary'>${c}</span> of{' '}
        <span className='secondary'> ${props.targetAmount}</span>
      </h2>
    </section>
  )
}
