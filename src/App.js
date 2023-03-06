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


function App() {

    let total = 0; 
    donations.forEach((donation) => {
    return total = total + donation.amount;
    // console.log(total)
   })
   
  
  let rate = 1 + donations.length

  const donator = donations.map((donation) => {
    return (
    <li>
      <span>{donation.name} donated ${donation.amount}</span>{donation.caption}
    </li>
    )
  })


  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar"><RecentDonations donator={donator} donations={donations}/></section>
        <section className="">
          <Progress targetAmount={targetAmount} total={total}/>
          <DonationForm rate={rate}/>
        </section>
      </main>
    </>
  );
}

export default App;
