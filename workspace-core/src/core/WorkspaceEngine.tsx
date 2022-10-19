import * as React from 'react';
import { DragEvent } from 'react';
import { WorkspaceFactory } from './WorkspaceFactory';
import { WorkspaceModel } from '../core-models/WorkspaceModel';
import { WorkspaceEngineInterface } from './WorkspaceEngineInterface';
import { BaseListener, BaseObserver } from './BaseObserver';
import { DimensionContainer } from './DimensionContainer';
import { LayerManager } from '../widgets/layers/LayerManager';

export interface WorkspaceEngineListener extends BaseListener {
	repaint?: () => any;
	draggingElement?: (model: WorkspaceModel, dragging: boolean) => any;
	modelUpdated?: () => any;
}

export class WorkspaceEngineError extends Error {
	public _is__storm_workspaces_error_: true;

	constructor(m: string) {
		super(m);
		Object.setPrototypeOf(this, WorkspaceEngineError.prototype);
	}
}

export class WorkspaceEngine extends BaseObserver<WorkspaceEngineListener> implements WorkspaceEngineInterface {
	// factories
	factories: { [type: string]: WorkspaceFactory };
	draggingID: string;
	fullscreenModel: WorkspaceModel;
	fireModelUpdateEvent: boolean;
	repainting: boolean;
	dragAndDropEnabled: boolean;
	layerManager: LayerManager;

	// dimensions
	workspaceContainer: DimensionContainer;
	floatingContainer: DimensionContainer;

	//refs
	floatingContainerRef: React.RefObject<HTMLDivElement>;

	constructor() {
		super();
		this.factories = {};
		this.listeners = {};
		this.draggingID = null;
		this.fullscreenModel = null;
		this.dragAndDropEnabled = true;
		this.floatingContainerRef = null;
		this.layerManager = new LayerManager();
	}

	setWorkspaceContainer(workspaceContainer: DimensionContainer) {
		this.workspaceContainer = workspaceContainer;
	}

	setFloatingContainer(floatingContainer: DimensionContainer) {
		this.floatingContainer = floatingContainer;
	}

	setDragAndDropEnabled(drag: boolean = true) {
		this.dragAndDropEnabled = drag;
		this.fireRepaintListeners();
	}

	setFullscreenModel(model: WorkspaceModel | null) {
		this.fullscreenModel = model;
		this.fireRepaintListeners();
	}

	static namespaceMime(data: string) {
		return `srw/${data}`;
	}

	fireModelUpdated() {
		this.fireModelUpdateEvent = true;
	}

	_fireModelUpdated() {
		this.fireModelUpdateEvent = false;
		this.iterateListeners((listener) => {
			listener.modelUpdated && listener.modelUpdated();
		});
	}

	getDropEventModelID(event: DragEvent): string {
		for (var i = 0; i < event.dataTransfer.types.length; ++i) {
			const mime = event.dataTransfer.types[i];
			if (mime.startsWith('srw/id/')) {
				return mime.substr('srw/id/'.length);
			}
		}
	}

	fireRepaintListeners() {
		this.repainting = true;
		this.iterateListeners((list) => {
			list.repaint?.();
		});
	}

	registerFactory(factory: WorkspaceFactory) {
		this.factories[factory.type] = factory;
	}

	getFactory<T extends WorkspaceFactory>(model: WorkspaceModel | string): T {
		if (typeof model !== 'string') {
			model = model.type;
		}
		if (!this.factories[model]) {
			throw new WorkspaceEngineError('Cannot find Workspace factory for model with type: [' + model + ']');
		}
		return this.factories[model] as T;
	}

	setDraggingNode(id: string) {
		if (this.draggingID !== id) {
			this.draggingID = id;
			this.fireRepaintListeners();
		} else if (id === null) {
			this.fireRepaintListeners();
		}
	}
}
