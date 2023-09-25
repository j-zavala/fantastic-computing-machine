import React, { useEffect, useState } from 'react';
import DayGroup from './DayGroup';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN
});

const OWNER = "j-zavala";
const REPO = "fantastic-computing-machine";

function CommitHistory() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCommits = async () => {
    try {
      const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: OWNER,
        repo: REPO,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

      console.log("response.data ===>", response.data);

      setCommits(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommits();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-4 py-8">
      {/* {commits.map(item => (
        <DayGroup
          key={item.sha}
          date={item.commit.author.date}
          name={item.commit.author.name}
          message={item.commit.message}
        />
      ))} */}
    </div>
  );
}

export default CommitHistory;
