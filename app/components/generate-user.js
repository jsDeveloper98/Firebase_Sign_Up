import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import { inject as service } from '@ember/service';


export default class GenerateUserComponent extends Component {
  @service store;
  @tracked name;
  @tracked pass;
  @tracked passRepeat;

@action createUser() {
    if (this.pass === this.passRepeat) {
      let newUser = this.store.createRecord("user", {
        name: this.name,
        password: this.pass,
      });
      newUser.save();

      this.name = '';
      this.pass = '';
      this.passRepeat = '';
    }
  }
}
