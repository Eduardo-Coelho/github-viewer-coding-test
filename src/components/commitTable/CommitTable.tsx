import { ICommit } from '../../types/commits';
import './CommitTable.css';

interface CommitListProps {
  commits: ICommit[];
  onSelectCommit: (commit: ICommit) => void;
}

export const CommitTable = ({ commits, onSelectCommit }: CommitListProps) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      {commits.map(({ commit, sha }: ICommit) => (
        <tr key={sha} onClick={() => onSelectCommit({ commit, sha })}>
          <td>{sha || 'N/A'}</td>
          <td>{commit?.message || 'N/A'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
