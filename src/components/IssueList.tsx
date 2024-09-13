import React from 'react';

interface Issue {
  _id: string;
  title: string;
  status: string;
}

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <div>
      <h3>Issues</h3>
      {issues.length === 0 ? (
        <p>No issues available</p>
      ) : (
        <ul>
          {issues.map((issue) => (
            <li key={issue._id}>
              <span>{issue.title} - {issue.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssueList;
