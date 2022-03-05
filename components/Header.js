import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { useAtom } from 'jotai';
import { currentTeamAtom } from '../store';

function Header() {
  const { data: user } = useSWR('/api/user', fetcher);
  const { data: teams } = useSWR(() => '/api/teams');
  const [, setCurrentTeam] = useAtom(currentTeamAtom);

  const handleTeamChange = (e) => {
    setCurrentTeam(e.target.value);
  };
  return (
    <header>
      <select onChange={handleTeamChange}>
        {teams && teams.map((team) => (
          <option value={team.teamid}>
            {team.teamname}
          </option>
        ))}
      </select>

      <nav>
        <ul>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </li>
          <li>
            {user ? <a>Logout</a> : <a>Login</a>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
