export const ENDPOINTS_GITHUB = {
  getCommits: (owner: string, repo: string) =>
    `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`,
};
