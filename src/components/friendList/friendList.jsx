import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendListItem/friendListItem';
import { FriendsList } from './friendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
