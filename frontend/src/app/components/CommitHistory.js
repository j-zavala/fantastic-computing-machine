import React, { useEffect, useState } from 'react';
import DayGroup from './DayGroup';



function CommitHistory() {

  const [commits, setCommits] = useState([]);

  useEffect(() => {
    // Fetch commits from API
    fetchCommits().then(commits => setCommits(commits));
  }, []);

  return (
    <div className="px-4 py-8">
      {commits.map(group => (
        <DayGroup
          key={group.date}
          date={group.date}
          commits={group.commits}
        />
      ))}
    </div>
  );

}




export default CommitHistory;
