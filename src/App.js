import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
import DonationForm from "./Components/DonationForm";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function App() {

  // for (let donation of donations) {
  //   document.createAttribute('li');
  // then name=donation.name example of each classname ting idk you know lol}
  // for (let donation of donations) {

  for (let donation of donations) {

    const total =+ donation.amount;

  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar"> <RecentDonations donationsArray={donations} donationName={donation.name} donationAmount={donation.amount} donationCaption={donation.caption} /> </section>
        <section className="">
          <Progress donationTotal={total} TheTargetAmount={targetAmount} />
          <DonationForm donationsArray={donations} donationId={donation.id} />
          {
          /* Donation Form; here you put what is to be seen using props* you can also just pass the entire array and play with it in the child sect*/} 
        </section>
      </main>
    </>
  );
}
}

export default App;
