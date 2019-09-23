import BaseEntity from './base.entity';
import TransformComponent from '../components/transform.component';
import LabelTextComponent from '../components/label-text.component';
import PressedKeysComponent from '../components/pressed-keys.component';

export default class PressedKeysLabelEntity extends BaseEntity {
	constructor(
		public transform: TransformComponent,
		public labelText: LabelTextComponent,
		public pressedKeys: PressedKeysComponent
	) {
		super([
			{ name: 'transform', property: 'transform' },
			{ name: 'label-text', property: 'labelText' },
			{ name: 'pressed-keys', property: 'pressedKeys' }
		]);
	}
}
