import React from 'react';

const getBackground = (opened, modifed) => {
  if (opened < 2) return 'pr-container-background-ok';
  if (opened >= 2 && modifed <= 2) return 'pr-container-background-warning';
  return 'pr-container-background-error';
};

const PullRequest = ({
  title,
  daysSinceOpened,
  daysSinceModified,
  user,
  url
}) => {
  return (
    <>
      <style jsx>
        {`
          .pr-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
            border-radius: 4px;
            width: calc(1 / 3 * 100% - (1 - 1 / 3) * 20px);
          }

          .pr-container-background-ok {
            background: green;
          }

          .pr-container-background-warning {
            background: yellow;
            color: black;
          }

          .pr-container-background-error {
            background: red;
          }

          .pr-container img {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            padding: 10px;
          }

          .pr-container a {
            text-decoration: none;
            color: white;
          }

          .pr-container-background-warning a {
            text-decoration: none;
            color: black;
          }

          .pr-container a:hover,
          a:focus {
            outline: none;
            box-shadow: inset 0 -2px 0;
          }

          .Pr-content {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <article
        className={`pr-container ${getBackground(
          daysSinceOpened,
          daysSinceModified
        )}`}
      >
        <div className={'pr-content'}>
          <img src={user.avatar} alt={user.name} />
          <div>
            <a href={url} target="top">
              {title}
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default PullRequest;
