import { Profile } from './profile/profile';
import userData from './profile/user.json';
import { Box } from './box/Box';
import data from './statistics/data.json';
import { Statistics } from './statistics/statistics';
import friends from './friendList/friends.json';
import { FriendList } from './friendList/friendList';
import transactions from './transactionHistory/transactions.json';
import { TransactionHistory } from './transactionHistory/transactionHistory';

const { avatar, tag, location, username, stats } = userData;

export const App = () => {
  return (
    <Box pl="20px" pt="20px">
      <Profile
        avatar={avatar}
        tag={tag}
        location={location}
        username={username}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
