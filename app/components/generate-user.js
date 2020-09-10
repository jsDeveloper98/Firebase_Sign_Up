import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class GenerateUserComponent extends Component {

  @service firebaseApp;
  @service store;

  @tracked email = '';
  @tracked password = '';

  @action createUser() {
    this.firebaseApp.auth().then((auth) => {
      auth.createUserWithEmailAndPassword(this.email, this.password).then(({user}) => {
        const user1 = this.store.createRecord('user', {
          email: user.email
        });
        set(user1, 'id', user.uid)
        user1.save();
      });
    })
  }
}
