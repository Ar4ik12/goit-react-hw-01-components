import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import user from "./components/user.json";
import statisticalData from "./components/statistical-data.json";
import Statistical from "./components/statistical/Statistical";
import Friends from "./components/friends/Friends";
import friendsData from "./components/friends.json";
import transactions from './components/transactions.json';
import TransactionHistory from "./components/transactions/TransactionHistory"

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical title="Upload stats" stats={statisticalData} />
      <Friends friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
