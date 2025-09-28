import { unwrap } from '@lwc/engine-dom';

const originalConsole = global.console;

global.console = {
  ...global.console,

  info: (...args) => {
    originalConsole.info.apply(originalConsole, [
      ...Array.from(args).map((obj) => unwrap(obj)),
    ]);
  },
};
