import React from "react";
import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import "./App.css";

// Create each component in the `Components/` directory and pass props from the `App` component to each of the components to create the mockup as seen above. HTML snippets for each component is included below.

// 1. `targetAmount`: A number, in dollars, that represents the total amount of money attempting to be raised.
const targetAmount = 1000;


// 1. `donations`: An array of objects, where each object represents a donation.
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
  function totalAmount() {
    let total = 0;
    for (let i = 0; i < donations.length; i++) {
      total += Number(donations[i].amount)
    }
    return total
  }

  // using map method to get a new array 
  const map1 = donations.map(x => {
   return (
    <div> 
      {/* // 'amount' is the amount of money they are donating in the new mapped array */}
      <li><span>{x.name} {x.caption} {x.amount}$</span></li>
    </div>
   )
  });
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar"><DonationForm amount = {`${donations.length + 1}`} /></section>
        <section className="">
        <Progress total = {totalAmount()} actualAmount = {targetAmount} />
        <RecentDonations allDonations = {map1} />
        </section>
      </main>
    </>
  );
}

export default App;
