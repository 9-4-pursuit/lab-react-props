export default function DonationForm({number}) {
  return (
    <>
    <section className="donation">
      <h3>
        You could be donation<span className="secondary"> #{number}!
        </span>
      </h3>
      <form>
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" placeholder="Your name..." />
        </label>
        <label htmlFor="caption">
          Caption
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="add a brief message..."
          />
        </label>
        <label htmlFor="amount">
          Amont
          <input id="amount" name="amount" type="number" placeholder="0" />
        </label>
        <button>Donate!</button>
      </form>
    </section>
    </>
  );
}