/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/* The below code is used for page transitions.
 * Based on https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions
 */

/* globals window CustomEvent */
import createHistory from 'history/createBrowserHistory';

const timeout = 200;
const historyExitingEventType = 'history::exiting';

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } });
  window.dispatchEvent(event);
  setTimeout(() => {
    callback(true);
  }, timeout);
};

let history;
if (typeof document !== 'undefined') {
  history = createHistory({ getUserConfirmation });
  // block must return a string to conform
  history.block((location, action) => location.pathname);
}

export const replaceHistory = () => history;

export { historyExitingEventType, timeout };
