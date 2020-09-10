import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import { inject as service } from '@ember/service';

export default class LogInComponent extends Component {
  @tracked email;
  @tracked password;
  @service firebaseApp;

  @action async accessToProfile() {
    this.firebaseApp
    .auth()
    .then((auth) => {
      auth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user);
        this.email = '';
        this.password = '';
        // this.setProperties({
          // email: '',
          // password: ''
        // });
      })
    })
  }
}
