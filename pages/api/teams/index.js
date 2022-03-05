import nextConnect from 'next-connect';
import { EXAMPLE_TEAMS } from '../../../data';

export const getHandler = async (req, res) => {
  // Get current "logged in user"
  const userid = 'user123';

  // Get teams
  const teams = EXAMPLE_TEAMS.reduce((acc, team) => {
    // Only include teams user is a member of
    if (team.members.find((member) => member.userid === userid)) {
      acc = [...acc, { teamid: team.teamid, teamname: team.teamname }];
    }
    return acc;
  }, []);

  // Return teams
  res.status(200).send(teams);
};

const handler = nextConnect();
handler.get(getHandler);
export default handler;
