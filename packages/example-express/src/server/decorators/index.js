import HelmetDecorator from './helmet';
import ChunkDecorator from './chunks';
import ServerDecorator from './server';

const Decorators = [
  HelmetDecorator,
  ChunkDecorator,
  ServerDecorator,
];

function wrap(Child, Component) {
  return function Wrapped() {
    return (
      <Component>
        <Child />
      </Component>
    );
  };
}

export default class DecoratorSet {
  constructor() {
    this.decorators = Decorators.map(fn => fn());
  }
  getAttributes() {
    return this.decorators
      .map(({ attributes }) => attributes())
      .reduce((all, one) => {
        return {
          htmlAttributes: `${all.htmlAttributes || ''}${one.htmlAttributes || ''}`,
          title: all.title || one.title || '',
          meta: `${all.meta || ''}${one.meta || ''}`,
          link: `${all.link || ''}${one.link || ''}`,
          script: `${all.script || ''}${one.script || ''}`,
          status: all.status || one.status,
          style: `${all.style || ''}${one.style || ''}`,
          bodyAttributes: `${all.bodyAttributes || ''}${one.bodyAttributes || ''}`,
        };
      }, {});
  }
  wrapApplication(Application) {
    return this.decorators
      .map(({ Component }) => Component)
      .filter(Boolean)
      .reduce(wrap, Application);
  }
}
