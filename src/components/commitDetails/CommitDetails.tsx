import { ICommit } from '../../types/commits';

interface CommitDetailsProps {
  commit: ICommit | null;
}

export const CommitDetails = ({ commit }: CommitDetailsProps) => {
  const { author, message, committer, url } = commit?.commit ?? {};
  return (
    <div test-id="commit-details">
      <h3>Commit Details:</h3>
      <p>
        <strong>Author:</strong> {author?.name || 'N/A'} (
        {author?.name || 'N/A'})
      </p>
      <p>
        <strong>Date:</strong>{' '}
        {committer?.date ? new Date(committer?.date).toLocaleString() : 'N/A'}
      </p>
      <p>
        <strong>Message:</strong> {message || 'N/A'}
      </p>
      <p>
        <a target="_blank" href={url} rel="noreferrer">
          View Commit
        </a>
      </p>
    </div>
  );
};
