import * as React from 'react';
import { WorkspaceNodeModel } from '../models/node/WorkspaceNodeModel';
import { WorkspaceEngine } from '../WorkspaceEngine';
import { StandardLayoutWidget } from './layouts/StandardLayoutWidget';
import { MicroLayoutWidget } from './layouts/MicroLayoutWidget';
import { DraggableWidget } from './DraggableWidget';
import { BaseWidget, BaseWidgetProps } from '@projectstorm/react-core';

export interface TrayWidgetProps extends BaseWidgetProps {
	node: WorkspaceNodeModel;
	engine: WorkspaceEngine;
}

export interface TrayWidgetState {}

export class TrayWidget extends BaseWidget<TrayWidgetProps, TrayWidgetState> {
	constructor(props: TrayWidgetProps) {
		super('srw-tray', props);
		this.state = {};
	}

	getHeader() {
		let header = this.props.engine.getTrayHeader(this.props.node);
		if (header) {
			return (
				<DraggableWidget model={this.props.node} engine={this.props.engine}>
					{header}
				</DraggableWidget>
			);
		}
		return null;
	}

	render() {
		const expand = this.props.node.shouldExpand() && this.props.node.mode === 'expand';
		return (
			<div
				{...this.getProps({
					'--expand': expand,
					'--collapse': !expand
				})}>
				{this.getHeader()}
				{this.props.node.mode === 'micro' ? (
					<MicroLayoutWidget  className={this.bem('__content')} node={this.props.node} engine={this.props.engine} />
				) : (
					<StandardLayoutWidget className={this.bem('__content')} node={this.props.node} engine={this.props.engine} />
				)}
			</div>
		);
	}
}
