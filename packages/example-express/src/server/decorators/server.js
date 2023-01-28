import { ServerContext } from '../context';

export default () => {
  const serverContext = { status: 200 };

  return {
    Component: (args) => (
      <ServerContext.Provider value={serverContext} {...args} />
    ),
    attributes: () => ({
      status: serverContext.status,
    }),
  };
};
