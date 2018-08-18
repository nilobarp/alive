import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';
import { ElementSize, TypeVariant } from '../../types';

import './button.scss';

@Component({
  template: require('./button.html')
})
export class Button extends Vue {
  @Prop()
  public text: string;
  @Prop()
  public variant: TypeVariant;
  @Prop()
  public ghost: boolean;
  @Prop()
  public flat: boolean;
  @Prop()
  public size: ElementSize;

  get classObject() {
    return {
      button: true,
      [`button__${this.variant || TypeVariant.default}`]: true,
      ghost: this.ghost !== undefined,
      flat: this.flat !== undefined,
      [`button__size--${this.size || ElementSize.default}`]: true
    };
  }

  public handleClick(evt) {
    this.$emit('click', evt);
  }
}
