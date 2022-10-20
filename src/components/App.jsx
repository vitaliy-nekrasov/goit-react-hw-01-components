import { Profile } from './profile/profile';
import userData from './profile/user.json';
import { Box } from './box/Box';

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
    </Box>
  );
};
