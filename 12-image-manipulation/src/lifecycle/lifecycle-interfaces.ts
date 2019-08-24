export interface OnInit {
	onInit(param: string): void;
}
export interface OnRun {
	onRun(): void;
}
export interface OnBeforeUpdate {
	onBeforeUpdate(): void;
}
export interface OnUpdate {
	onUpdate(): void;
}
export interface OnAfterUpdate {
	onAfterUpdate(): void;
}
export interface OnRender {
	onRender(): void;
}