import EmberRouter from '@ember/routing/router';
import config from 'project-1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('sign_in');
  this.route('sign_up');
});
