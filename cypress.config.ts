import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    baseUrl: 'http://localhost:5173/',
  },
});
