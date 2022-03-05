import Header from '@components/Header';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { useAtom } from 'jotai';
import { currentTeamAtom } from '../store';

function Dashboard() {
  // Get user
  const { data: user } = useSWR('/api/user', fetcher);

  // Get current team ID from dropdown selection
  const [currentTeam] = useAtom(currentTeamAtom);

  // Get current team data
  const { data: team } = useSWR(() => `/api/teams/${currentTeam}`);
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      {user && (
        <>
          <p>User data:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
      {team && (
      <>
        <p>Current team:</p>
        <pre>{JSON.stringify(team, null, 2)}</pre>
      </>
      )}
    </div>
  );
}

export default Dashboard;
