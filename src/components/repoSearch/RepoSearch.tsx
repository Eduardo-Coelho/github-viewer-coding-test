import React, { useState } from 'react';
import './RepoSearch.css';

interface RepoSearchProps {
  onSubmit: (owner: string, repo: string) => void;
}

export const RepoSearch = ({ onSubmit }: RepoSearchProps) => {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    if (!owner || !repo) return;
    e.preventDefault();
    onSubmit(owner.trim(), repo.trim());
  };

  return (
    <form className="repo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="GitHub Repo"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />
      <button disabled={!owner || !repo} type="submit">
        Search
      </button>
    </form>
  );
};
