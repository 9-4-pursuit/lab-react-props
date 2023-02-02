export default function DonationForm(props) {
  return (
    <>
    <div className="donation">
    <h3> You could be donation <span class="secondary">#{props.donationId}!</span> </h3>
    <form>
      <label htmlFor="name"> Name 
      <input id="name" name="name" type="text" placeholder="Your name" />
      </label>
      <label htmlFor="caption"> Caption 
        <input id="caption" name="caption" type="text" placeholder="Add a message to go along with your donation" />
      </label>
      <label htmlFor="amount"> Amount 
        <input id="amount" name="amount" type="amount" placeholder="7" />
      </label>
      <button> Donate. </button>
    </form>
    </div>
    </>
  );
}

