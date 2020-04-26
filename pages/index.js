import { Button, Input } from '../components/Base';

import Styles from './index.scss';
import Typography from '../components/Typography';

const Homepage = () => {
  const status = {
    name: 'a',
  };
  return (
    <div>
      <Typography h1>Heading 1</Typography>
      <Typography h2>Heading 2</Typography>
      <Typography h3>Heading 3</Typography>
      <Typography h4>Heading 4</Typography>
      <Typography>Normal</Typography>
      <Typography small>small</Typography>
    </div>
  );
};

export default Homepage;
