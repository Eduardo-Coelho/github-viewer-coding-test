export interface ICommit {
  sha: string;
  commit: {
    author: {
      id: number;
      name: string;
      email: string;
    };
    committer: {
      date: string;
    };
    message: string;
    url: string;
    tree: {
      sha: string;
    };
  };
}
