import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PullRequest from '../components/PullRequest';
import fetcher from '../fetcher';

const PullRequests = ({ pullrequests }) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #282c34;
        }
      `}</style>
      <style jsx>{`
        .app-container {
          min-height: 128vh;
          text-align: center;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          font-size: calc(10px + 2vmin);
          color: white;
        }
      `}</style>
      <div>
        <div className="app-container">
          {pullrequests.map(item => (
            <PullRequest
              key={item.title}
              title={item.title}
              daysSinceOpened={item.daysSinceOpened}
              daysSinceModified={item.daysSinceModified}
              user={item.user}
              url={item.url}
            ></PullRequest>
          ))}
        </div>
      </div>
    </>
  );
};

PullRequests.getInitialProps = async function({ query }) {
  const { repo } = query;
  const repository = repo || 'tre-se';
  const prFetcher = fetcher(repository);
  const result = await prFetcher.next();

  return {
    pullrequests: result.value ? result.value.reverse() : []
  };
};
export default PullRequests;
