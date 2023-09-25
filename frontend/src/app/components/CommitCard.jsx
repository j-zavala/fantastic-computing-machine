import React from 'react';

function CommitCard({ message, author }) {
    return (
      <div className="p-4 rounded shadow bg-gray-50">
        <div>{message}</div>
  
        <div className="text-sm text-gray-500 mt-2">
          {author} committed 4 hours ago
        </div>
      </div>
    );
  }

export default CommitCard;
