import React from 'react';
import CommitCard from './CommitCard';

function DayGroup({ date, commits }) {
    return (
      <div className="mb-4">
        <div className="text-lg font-bold mb-2">{date}</div>
        
        <div className="space-y-4">
          {commits.map(commit => (
            <CommitCard 
              key={commit.sha}
              message={commit.message}
              author={commit.author}
            />
          ))}
        </div>
      </div>
    );
  }

export default DayGroup;
