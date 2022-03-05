import nextConnect from 'next-connect';
import { EXAMPLE_TEAMS } from '../../../data';

export const getHandler = async (req, res) => {
  console.log('in');
  // Get teamId from params
  console.log(req.query, req.params);
  const { id } = req.query;

  // Get requested team
  const team = EXAMPLE_TEAMS.find((t) => t.teamid === id);

  // Return team
  res.status(200).send(team);
};

const handler = nextConnect();
handler.get(getHandler);
export default handler;
