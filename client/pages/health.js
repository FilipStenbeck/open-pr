const { name, version } = require('../package.json');

const Health = () => {
  return (
    <h1>
      {name} : {version}
    </h1>
  );
};

export default Health;
