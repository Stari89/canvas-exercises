import Vector2 from '../util/vector-2';
import { Injectable } from '../di/injectable.decorator';

@Injectable()
export default class CanvasManager {
	// Fields
	private root: HTMLElement;
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;

	private renderSize: Vector2;
	private viewSize: Vector2;
	private devicePixelRatio: number;

	// Properties
	public get Canvas(): HTMLCanvasElement {
		return this.canvas;
	}
	public get Context(): CanvasRenderingContext2D {
		return this.context;
	}
	public get RenderSize(): Vector2 {
		return this.renderSize;
	}
	public get ViewSize(): Vector2 {
		return this.viewSize;
	}
	public get Scale(): number {
		return window.devicePixelRatio || 1;
	}

	// Constructor
	constructor() {
		this.root = document.body;
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.style.backgroundColor = '#AAAAAA';
		this.setDimensions();
		this.root.appendChild(this.canvas);
	}

	public update(): void {
		if (
			this.devicePixelRatio !== this.Scale ||
			this.viewSize.x !== window.innerWidth ||
			this.viewSize.y !== window.innerHeight
		) {
			this.setDimensions();
		}
	}

	// Private
	private setDimensions(): void {
		this.renderSize = new Vector2(window.innerWidth * this.Scale, window.innerHeight * this.Scale);
		this.viewSize = new Vector2(window.innerWidth, window.innerHeight);

		this.canvas.width = this.renderSize.x;
		this.canvas.height = this.renderSize.y;
		this.canvas.style.width = this.viewSize.x + 'px';
		this.canvas.style.height = this.viewSize.y + 'px';

		this.context.scale(this.Scale, this.Scale);
	}
}
