import React from "react";
import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
import "./App.css";

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

const sumOfAmounts = (donations) => {
  let sum = 0
  for (let i=0; i < donations.length; i++){
    sum += donations[i].amount
  }
  return sum
}
// let name, amount, caption
// for (let i=0; i < donations.length; i++){
//   name = donations[i].name
//   amount = donations[i].amount
//   caption = donations[i].caption
// }



function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <h2>Recent Donations</h2>
          <RecentDonations name={donations[0].name} amount={donations[0].amount} caption={donations[0].caption}/>
          <RecentDonations name={donations[1].name} amount={donations[1].amount} caption={donations[1].caption}/>
          <RecentDonations name={donations[2].name} amount={donations[2].amount} caption={donations[2].caption}/>
          <RecentDonations name={donations[3].name} amount={donations[3].amount} caption={donations[3].caption}/>
          <RecentDonations name={donations[4].name} amount={donations[4].amount} caption={donations[4].caption}/>
        </section>
        <section className="">
          {/* Progress */}
          <Progress targetAmount={targetAmount} raised={sumOfAmounts(donations)}/>
          {/* Donation Form */}
          <DonationForm id={donations.length + 1} />
        </section>
      </main>
    </>
  );
}

export default App;
