import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json'
import Profile from './Profile/Profile';
import SectionTitle from './SectionTitle/SectionTitle';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';



const App = () => {
  return (
    <>
      <SectionTitle text="1 - Профіль соціальної мережі" />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <SectionTitle text="2 - Список друзів" />
      <FriendList friends={friends} />

      <SectionTitle text="3 - Історія транзакцій" />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

