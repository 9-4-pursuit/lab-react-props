export default function DonationForm(props) {
  return (
  <section className="donation">
  <h3>You could be donation <span class="secondary">#{props.amtOfDonos}!</span></h3>
  <form>
    <label htmlFor="name">{props.name}
    <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name..." /></label>
        <label htmlFor="caption">{props.caption}<input
        id="caption"
        name="caption"
        type="text"
        placeholder="Add a brief message..."/></label>
        <label htmlFor="amount">{props.amount}<input
        id="amount"
        name="amount"
        type="number"
        placeholder="0" /></label>
        <button>Donate!</button>
  </form>
</section>
)
}
