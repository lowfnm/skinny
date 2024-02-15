import { mount as mountCommand } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mountCommand;
    }
  }
}
