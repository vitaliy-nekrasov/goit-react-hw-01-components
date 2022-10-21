import PropTypes from 'prop-types';
import {
  ListItem,
  UserStatus,
  UserAvatar,
  UserName,
} from './friendListItem.styled';

export function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <ListItem>
      <UserStatus>{isOnline}</UserStatus>
      <UserAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
