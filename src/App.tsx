import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  RepoSearch,
  CommitTable,
  CommitDetails,
  Loader,
  Modal,
} from './components/index';
import { ENDPOINTS_GITHUB, useAxios } from './api';
import { ICommit } from './types/commits';
import './App.css';

const i18n = {
  title: 'Commits',
  errorOnFetchingCommits: (message: any) =>
    `${message} - Please check the owner name or repo name.`,
  successFetchingCommits: (count: number) =>
    `Successfully, Fetched all ${count} commits`,
};

const duration: number = 3000;

const App = () => {
  const [commits, setCommits] = useState<ICommit[]>([]);
  const [selectedCommit, setSelectedCommit] = useState<ICommit | null>(null);
  const { loading, get } = useAxios();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (commit: ICommit) => {
    setSelectedCommit(commit);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchCommits = async (owner: string, repo: string) => {
    try {
      const response = await get(ENDPOINTS_GITHUB.getCommits(owner, repo));
      setCommits(response.data);
      toast.success(i18n.successFetchingCommits(response?.data?.length || 0), {
        duration,
      });
    } catch (error: any) {
      const message = error?.message ?? '';
      setCommits([]);
      toast.error(i18n.errorOnFetchingCommits(message), {
        duration,
      });
    }
  };

  return (
    <>
      <nav className="nav-header">
        <div className="header-container">
          <img
            className="exeter-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/270px-GitHub_Invertocat_Logo.svg.png"
            alt="The Exeter Logo"
          />
        </div>
      </nav>

      <div className="repo-search">
        <div className="search-container">
          <RepoSearch onSubmit={fetchCommits} />
        </div>
      </div>

      <div className="content-container">
        <h1>{i18n.title}</h1>
        {!!commits?.length && !loading && (
          <>
            <CommitTable commits={commits} onSelectCommit={openModal} />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <CommitDetails commit={selectedCommit} />
            </Modal>
          </>
        )}
        {loading && (
          <>
            <Loader />
          </>
        )}
      </div>
    </>
  );
};

export default App;
