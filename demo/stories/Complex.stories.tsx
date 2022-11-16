import * as React from 'react';
import { useState } from 'react';
import 'typeface-open-sans';
import { DefaultWorkspacePanelModel } from '@projectstorm/react-workspaces-defaults';
import { WorkspaceTabModel } from '@projectstorm/react-workspaces-model-tabs';
import { CompInternal, genVerticalNode, useEngine } from './helpers/tools';
import { WorkspaceTrayMode, WorkspaceTrayModel } from '@projectstorm/react-workspaces-model-tray';
import { RootWorkspaceModel } from '@projectstorm/react-workspaces-model-floating-window';

export const ComplexLayout = function (args) {
	const engine = useEngine(args);
	const [model] = useState(() => {
		let model = new RootWorkspaceModel(engine);
		model.setHorizontal(true);

		const largeTray = new WorkspaceTrayModel({
			iconWidth: 50
		})
			.setMode(WorkspaceTrayMode.COLLAPSED)
			.setExpand(false, true);
		for (let i = 0; i < 20; i++) {
			largeTray.addModel(new DefaultWorkspacePanelModel('Tray panel ' + i));
		}

		model

			//left panel
			.addModel(genVerticalNode())
			.addModel(genVerticalNode())

			//tab panel
			.addModel(
				new WorkspaceTabModel()
					.addModel(new DefaultWorkspacePanelModel('Tab 1'))
					.addModel(new DefaultWorkspacePanelModel('Tab 2'))
					.addModel(new DefaultWorkspacePanelModel('Tab 3'))
			)

			.addModel(largeTray)
			.addModel(
				new WorkspaceTrayModel({
					iconWidth: 50
				})
					.setMode(WorkspaceTrayMode.NORMAL)
					.setExpand(false, true)
					.addModel(new DefaultWorkspacePanelModel('Tray panel 1'))
					.addModel(new DefaultWorkspacePanelModel('Tray panel 2'))
					.addModel(new DefaultWorkspacePanelModel('Tray panel 3'))
			)
			.addModel(genVerticalNode());
		return model;
	});
	return <CompInternal model={model} engine={engine} />;
}.bind({});

ComplexLayout.args = {
	DebugDividers: false,
	DebugPanels: false,
	DebugResizers: false
};

export default {
	title: 'Workspace',
	parameters: {
		layout: 'fullscreen'
	}
};
