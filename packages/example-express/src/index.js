import config from './config';
import server from './server';

const port = config.get('port');

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
