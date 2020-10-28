import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProgressComponent extends Component {
  @tracked value;
  
  @action
  updateValue(event) {
    this.value = event.target.value;
  }

  @action
  handleSubmit(event){
    event.preventDefault();
    localStorage.setItem("goal", this.value);
    window.location.reload();
  }

}