import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import 'typeface-open-sans';
import {
  DebugLayer,
  ExpandNodeModel,
  WorkspaceEngine,
  WorkspaceNodeFactory,
  WorkspaceNodeModel,
  WorkspaceWidget
} from '@projectstorm/react-workspaces-core';
import {
  DefaultSubComponentRenderer,
  DefaultTrayFactory,
  DefaultWindowModelFactory,
  DefaultWorkspacePanelFactory,
  DefaultWorkspacePanelModel
} from '@projectstorm/react-workspaces-defaults';
import {
  draggingItemBehavior,
  getDirectiveForWorkspaceNode
} from '@projectstorm/react-workspaces-behavior-panel-dropzone';
import { draggingItemDividerBehavior } from '@projectstorm/react-workspaces-behavior-divider-dropzone';
import { WorkspaceTabFactory } from '@projectstorm/react-workspaces-model-tabs';
import { resizingBehavior } from '@projectstorm/react-workspaces-behavior-resize';
import { RootWorkspaceModel } from '@projectstorm/react-workspaces-model-floating-window';
import { ConvertToTabZone, getDirectiveForTabModel } from '@projectstorm/react-workspaces-dropzone-plugin-tabs';
import { ConvertToTrayZone, getDirectiveForTrayModel } from '@projectstorm/react-workspaces-dropzone-plugin-tray';

export const genVerticalNode = () => {
  const node = new ExpandNodeModel()
    .setExpand(false, true)
    .setVertical(true)
    .addModel(new DefaultWorkspacePanelModel('Panel 1'))
    .addModel(new DefaultWorkspacePanelModel('Panel 2'));
  return node;
};

export enum DebugOptions {
  DebugDividers = 'DebugDividers',
  DebugPanels = 'DebugPanels',
  DebugResizers = 'DebugResizers',
  DebugWindows = 'DebugWindows'
}

export const SharedArgs = {
  [DebugOptions.DebugPanels]: false,
  [DebugOptions.DebugDividers]: false,
  [DebugOptions.DebugResizers]: false,
  [DebugOptions.DebugWindows]: false
};

export const useRootModel = (model: RootWorkspaceModel, args) => {
  useEffect(() => {
    model.setDebug(args[DebugOptions.DebugWindows]);
  }, [args[DebugOptions.DebugWindows]]);
  return model;
};

export const useEngine = (args: { DebugDividers?: boolean; DebugResizers?: boolean; DebugPanels?: boolean } = {}) => {
  const [debugLayer] = useState(() => {
    return new DebugLayer({
      dividers: args[DebugOptions.DebugDividers],
      resizeDividers: args[DebugOptions.DebugResizers],
      panels: args[DebugOptions.DebugPanels]
    });
  });
  const [engine] = useState(() => {
    const e = new WorkspaceEngine();

    const commonRenderer = new DefaultSubComponentRenderer();

    const windowFactory = new DefaultWindowModelFactory();
    const tabFactory = new WorkspaceTabFactory();
    const trayFactory = new DefaultTrayFactory({
      windowFactory: windowFactory
    });
    const workspaceNodeFactory = new WorkspaceNodeFactory();

    e.registerFactory(new DefaultWorkspacePanelFactory());

    tabFactory.addRenderer(commonRenderer);
    trayFactory.addRenderer(commonRenderer);
    workspaceNodeFactory.addRenderer(commonRenderer);

    e.registerFactory(tabFactory);
    e.registerFactory(trayFactory);
    e.registerFactory(workspaceNodeFactory);
    e.registerFactory(windowFactory);

    draggingItemBehavior({
      engine: e,
      getDropZoneForModel: (model) => {
        return (
          getDirectiveForTrayModel(model) ||
          getDirectiveForWorkspaceNode({
            node: model,
            transformZones: [ConvertToTabZone(tabFactory), ConvertToTrayZone(trayFactory)],
            generateParentNode: () => new ExpandNodeModel()
          }) ||
          getDirectiveForTabModel(model)
        );
      },
      debug: false
    });
    draggingItemDividerBehavior({
      engine: e
    });
    resizingBehavior(e);

    e.layerManager.addLayer(debugLayer);
    return e;
  });
  useEffect(() => {
    debugLayer.updateOptions({
      dividers: args.DebugDividers,
      resizeDividers: args.DebugResizers,
      panels: args.DebugPanels
    });
  }, [args.DebugDividers, args.DebugResizers, args.DebugPanels]);
  return engine;
};

export const CompInternal: React.FC<{ model: WorkspaceNodeModel; engine: WorkspaceEngine }> = (props) => {
  return (
    <S.Container>
      <WorkspaceWidget engine={props.engine} model={props.model} />
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    padding: 40px;
    background: rgb(70, 70, 70);
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Open Sans';
  `;
}
