export const EXAMPLE_USER = {
  userid: 'user123',
  username: 'Test User 1',
};

export const EXAMPLE_TEAMS = [
  {
    teamid: 'team123',
    teamname: 'Test Team 1',
    data: 'Data relevant to Test Team 1',
    members: [
      {
        userid: 'user123',
        role: 'owner',
      },
      {
        userid: 'user456',
        role: 'member',
      },
    ],
  },
  {
    teamid: 'team456',
    teamname: 'Test Team 2',
    data: 'Data relevant to Test Team 2',
    members: [
      {
        userid: 'user123',
        role: 'member',
      },
      {
        userid: 'user456',
        role: 'owner',
      },
    ],
  },
  {
    teamid: 'team789',
    teamname: 'Test Team 4',
    data: 'Data relevant to Test Team 3',
    members: [],
  },
];
