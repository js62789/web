import { useContext } from 'react';
import { ServerContext } from '../server/context';

export default function useStatus(status = 200) {
  const context = useContext(ServerContext);

  context.status = status;

  return undefined;
}
