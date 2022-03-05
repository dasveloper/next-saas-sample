import nextConnect from 'next-connect';
import { EXAMPLE_USER } from '../../data';

export const getHandler = async (req, res) => {
  // Get user
  const user = EXAMPLE_USER;

  // Return user
  res.status(200).send(user);
};

const handler = nextConnect();
handler.get(getHandler);
export default handler;
