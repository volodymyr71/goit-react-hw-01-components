import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import profileUsers from "./db/user.json";
const { name, tag, location, avatar, stats } = profileUsers;

function App() {
  return (
    <div className="App">
      <h1>Hi !</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <FriendList />
      <Statistics />
      <TransactionHistory />
    </div>
  );
}

export default App;
