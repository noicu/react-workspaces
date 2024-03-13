"use strict";(self.webpackChunk_projectstorm_react_workspaces_demos=self.webpackChunk_projectstorm_react_workspaces_demos||[]).push([[707],{"./dist/stories/helpers/complexModel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>createComplexModel});var _tools__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/stories/helpers/tools.js"),_projectstorm_react_workspaces_model_floating_window__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../packages/model-floating-window/dist/index.jsx"),_projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../packages/defaults/dist/index.jsx"),_projectstorm_react_workspaces_model_tray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../packages/model-tray/dist/index.jsx"),_projectstorm_react_workspaces_model_tabs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../packages/model-tabs/dist/index.jsx");const createComplexModel=engine=>{let model=new _projectstorm_react_workspaces_model_floating_window__WEBPACK_IMPORTED_MODULE_1__.wN(engine);model.registerListener({overConstrainedChanged:()=>{console.log("overconstrained: "+(model.r_overConstrained?"true":"false")),model.r_overConstrained&&model.recomputeInitialSizes()}}),model.setHorizontal(!0);const trayFactory=engine.getFactory(_projectstorm_react_workspaces_model_tray__WEBPACK_IMPORTED_MODULE_3__.AJ.NAME),largeTray=trayFactory.generateModel().setMode(_projectstorm_react_workspaces_model_tray__WEBPACK_IMPORTED_MODULE_3__.Nv.COLLAPSED).setExpand(!1,!0);for(let i=0;i<20;i++)largeTray.addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tray panel "+i));const expandNode=(0,_tools__WEBPACK_IMPORTED_MODULE_0__.Ee)();return expandNode.setExpand(!0,!0),model.addModel(trayFactory.generateModel().setMode(_projectstorm_react_workspaces_model_tray__WEBPACK_IMPORTED_MODULE_3__.Nv.COLLAPSED).setExpand(!1,!0).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tray panel 1")).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tray panel 2")).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tray panel 3"))).addModel((0,_tools__WEBPACK_IMPORTED_MODULE_0__.Ee)()).addModel((0,_tools__WEBPACK_IMPORTED_MODULE_0__.Ee)()).addModel((new _projectstorm_react_workspaces_model_tabs__WEBPACK_IMPORTED_MODULE_4__.hH).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tab 1")).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tab 2")).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tab 3"))).addModel(expandNode).addModel(largeTray).addModel(trayFactory.generateModel().setMode(_projectstorm_react_workspaces_model_tray__WEBPACK_IMPORTED_MODULE_3__.Nv.NORMAL).setExpand(!1,!0).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tray panel 1")).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tray panel 2")).addModel(new _projectstorm_react_workspaces_defaults__WEBPACK_IMPORTED_MODULE_2__.lO("Tray panel 3"))).addModel((0,_tools__WEBPACK_IMPORTED_MODULE_0__.Ee)()),model}},"./dist/stories/helpers/simpleModel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>createSimpleModel});var _projectstorm_react_workspaces_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../packages/core/dist/index.jsx"),_tools__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/stories/helpers/tools.js");const createSimpleModel=()=>{let model=new _projectstorm_react_workspaces_core__WEBPACK_IMPORTED_MODULE_0__.Yb;return model.setHorizontal(!0),model.addModel((0,_tools__WEBPACK_IMPORTED_MODULE_1__.Ee)()).addModel((0,_tools__WEBPACK_IMPORTED_MODULE_1__.Ee)()).addModel((0,_tools__WEBPACK_IMPORTED_MODULE_1__.Ee)()).addModel((0,_tools__WEBPACK_IMPORTED_MODULE_1__.Ee)()).addModel((0,_tools__WEBPACK_IMPORTED_MODULE_1__.Ee)()),model}},"./dist/stories/SwitchModels.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SwitchModels:()=>SwitchModels,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_helpers_tools__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../node_modules/.pnpm/typeface-open-sans@1.1.13/node_modules/typeface-open-sans/index.css"),__webpack_require__("./dist/stories/helpers/tools.js")),_helpers_simpleModel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/stories/helpers/simpleModel.js"),_helpers_complexModel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/stories/helpers/complexModel.js");const SwitchModels=function(args){const engine=(0,_helpers_tools__WEBPACK_IMPORTED_MODULE_2__.EP)(args),[model1]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,_helpers_simpleModel__WEBPACK_IMPORTED_MODULE_3__.i)())),[model2]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,_helpers_complexModel__WEBPACK_IMPORTED_MODULE_4__.x)(engine))),[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(model1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__.EK,{btns:{"Toggle Between models":()=>{setSelected(selected===model1?model2:model1)}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_helpers_tools__WEBPACK_IMPORTED_MODULE_2__.d4,{model:selected,engine}))}.bind({});SwitchModels.args=_helpers_tools__WEBPACK_IMPORTED_MODULE_2__.CN;const __WEBPACK_DEFAULT_EXPORT__={title:"Workspace",parameters:{layout:"fullscreen"}};SwitchModels.parameters={...SwitchModels.parameters,docs:{...SwitchModels.parameters?.docs,source:{originalSource:"function (args) {\n  const engine = useEngine(args);\n  const [model1] = useState(() => {\n    return createSimpleModel();\n  });\n  const [model2] = useState(() => {\n    return createComplexModel(engine);\n  });\n  const [selected, setSelected] = useState(model1);\n  return React.createElement(Buttons, {\n    btns: {\n      'Toggle Between models': () => {\n        if (selected === model1) {\n          setSelected(model2);\n        } else {\n          setSelected(model1);\n        }\n      }\n    }\n  }, React.createElement(CompInternal, {\n    model: selected,\n    engine: engine\n  }));\n}.bind({})",...SwitchModels.parameters?.docs?.source}}};const __namedExportsOrder=["SwitchModels"]}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoTW9kZWxzLXN0b3JpZXMuZDAzZTVhNjMuaWZyYW1lLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiZzhCQU9PLE1BQU1BLG1CQUFzQkMsU0FDakMsSUFBSUMsTUFBUSxJQUFJQyxrRkFBQUEsR0FBbUJGLFFBQ25DQyxNQUFNRSxpQkFBaUIsQ0FDckJDLHVCQUF3QkEsS0FDdEJDLFFBQVFDLElBQUkscUJBQW9CTCxNQUFNTSxrQkFBb0IsT0FBUyxVQUkvRE4sTUFBTU0sbUJBQ1JOLE1BQU1PLHVCLElBSVpQLE1BQU1RLGVBQWMsR0FFcEIsTUFBTUMsWUFBY1YsT0FBT1csV0FBaUNDLHVFQUFBQSxHQUFtQkMsTUFFekVDLFVBQVlKLFlBQVlLLGdCQUFnQkMsUUFBUUMsdUVBQUFBLEdBQWtCQyxXQUFXQyxXQUFVLEdBQU8sR0FDcEcsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUksR0FBSUEsSUFDdEJOLFVBQVVPLFNBQVMsSUFBSUMscUVBQUFBLEdBQTJCLGNBQWdCRixJQUdwRSxNQUFNRyxZQUFhQyxFQUFBQSxvQ0FBQUEsTUFzQ25CLE9BckNBRCxXQUFXSixXQUFVLEdBQU0sR0FFM0JsQixNQUdHb0IsU0FDQ1gsWUFDR0ssZ0JBQ0FDLFFBQVFDLHVFQUFBQSxHQUFrQkMsV0FDMUJDLFdBQVUsR0FBTyxHQUNqQkUsU0FBUyxJQUFJQyxxRUFBQUEsR0FBMkIsaUJBQ3hDRCxTQUFTLElBQUlDLHFFQUFBQSxHQUEyQixpQkFDeENELFNBQVMsSUFBSUMscUVBQUFBLEdBQTJCLGtCQUU1Q0QsVUFBU0csRUFBQUEsb0NBQUFBLE9BQ1RILFVBQVNHLEVBQUFBLG9DQUFBQSxPQUdUSCxVQUNDLElBQUlJLHVFQUFBQSxJQUNESixTQUFTLElBQUlDLHFFQUFBQSxHQUEyQixVQUN4Q0QsU0FBUyxJQUFJQyxxRUFBQUEsR0FBMkIsVUFDeENELFNBQVMsSUFBSUMscUVBQUFBLEdBQTJCLFdBRTVDRCxTQUFTRSxZQUVURixTQUFTUCxXQUNUTyxTQUNDWCxZQUNHSyxnQkFDQUMsUUFBUUMsdUVBQUFBLEdBQWtCUyxRQUMxQlAsV0FBVSxHQUFPLEdBQ2pCRSxTQUFTLElBQUlDLHFFQUFBQSxHQUEyQixpQkFDeENELFNBQVMsSUFBSUMscUVBQUFBLEdBQTJCLGlCQUN4Q0QsU0FBUyxJQUFJQyxxRUFBQUEsR0FBMkIsa0JBRTVDRCxVQUFTRyxFQUFBQSxvQ0FBQUEsT0FDTHZCLEtBQUssQywwWUNoRVAsTUFBTTBCLGtCQUFvQkEsS0FDL0IsSUFBSTFCLE1BQVEsSUFBSTJCLGlFQUFBQSxHQVVoQixPQVRBM0IsTUFBTVEsZUFBYyxHQUNwQlIsTUFHR29CLFVBQVNHLEVBQUFBLG9DQUFBQSxPQUNUSCxVQUFTRyxFQUFBQSxvQ0FBQUEsT0FDVEgsVUFBU0csRUFBQUEsb0NBQUFBLE9BQ1RILFVBQVNHLEVBQUFBLG9DQUFBQSxPQUNUSCxVQUFTRyxFQUFBQSxvQ0FBQUEsT0FDTHZCLEtBQUssQyIsInNvdXJjZXMiOlsid2VicGFjazovL0Bwcm9qZWN0c3Rvcm0vcmVhY3Qtd29ya3NwYWNlcy1kZW1vcy8uL3N0b3JpZXMvaGVscGVycy9jb21wbGV4TW9kZWwudHMiLCJ3ZWJwYWNrOi8vQHByb2plY3RzdG9ybS9yZWFjdC13b3Jrc3BhY2VzLWRlbW9zLy4vc3Rvcmllcy9oZWxwZXJzL3NpbXBsZU1vZGVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlblZlcnRpY2FsTm9kZSB9IGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IHsgUm9vdFdvcmtzcGFjZU1vZGVsIH0gZnJvbSAnQHByb2plY3RzdG9ybS9yZWFjdC13b3Jrc3BhY2VzLW1vZGVsLWZsb2F0aW5nLXdpbmRvdyc7XG5pbXBvcnQgeyBEZWZhdWx0V29ya3NwYWNlUGFuZWxNb2RlbCB9IGZyb20gJ0Bwcm9qZWN0c3Rvcm0vcmVhY3Qtd29ya3NwYWNlcy1kZWZhdWx0cyc7XG5pbXBvcnQgeyBXb3Jrc3BhY2VUcmF5RmFjdG9yeSwgV29ya3NwYWNlVHJheU1vZGUsIFdvcmtzcGFjZVRyYXlNb2RlbCB9IGZyb20gJ0Bwcm9qZWN0c3Rvcm0vcmVhY3Qtd29ya3NwYWNlcy1tb2RlbC10cmF5JztcbmltcG9ydCB7IFdvcmtzcGFjZVRhYk1vZGVsIH0gZnJvbSAnQHByb2plY3RzdG9ybS9yZWFjdC13b3Jrc3BhY2VzLW1vZGVsLXRhYnMnO1xuaW1wb3J0IHsgV29ya3NwYWNlRW5naW5lIH0gZnJvbSAnQHByb2plY3RzdG9ybS9yZWFjdC13b3Jrc3BhY2VzLWNvcmUnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tcGxleE1vZGVsID0gKGVuZ2luZTogV29ya3NwYWNlRW5naW5lKSA9PiB7XG4gIGxldCBtb2RlbCA9IG5ldyBSb290V29ya3NwYWNlTW9kZWwoZW5naW5lKTtcbiAgbW9kZWwucmVnaXN0ZXJMaXN0ZW5lcih7XG4gICAgb3ZlckNvbnN0cmFpbmVkQ2hhbmdlZDogKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYG92ZXJjb25zdHJhaW5lZDogJHttb2RlbC5yX292ZXJDb25zdHJhaW5lZCA/ICd0cnVlJyA6ICdmYWxzZSd9YCk7XG5cbiAgICAgIC8vIHdoZW4gd2Ugb3ZlcmNvbnN0cmFpbmVkLCB3ZSBjYW4gdXNlIHRoZSBkaXJlY3RpdmUgYmVsb3cgdG8gY2F1c2UgdGhlIGNoaWxkcmVuIGxheW91dHMgb24gdGhlIHJvb3QgbW9kZWxcbiAgICAgIC8vIHRvIGJlIHJlY29tcHV0ZWQgKHRoaXMgbWV0aG9kIGV4aXN0cyBvbiBhbGwgRXhwYW5kTm9kZU1vZGVscyApXG4gICAgICBpZiAobW9kZWwucl9vdmVyQ29uc3RyYWluZWQpIHtcbiAgICAgICAgbW9kZWwucmVjb21wdXRlSW5pdGlhbFNpemVzKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgbW9kZWwuc2V0SG9yaXpvbnRhbCh0cnVlKTtcblxuICBjb25zdCB0cmF5RmFjdG9yeSA9IGVuZ2luZS5nZXRGYWN0b3J5PFdvcmtzcGFjZVRyYXlGYWN0b3J5PihXb3Jrc3BhY2VUcmF5TW9kZWwuTkFNRSk7XG5cbiAgY29uc3QgbGFyZ2VUcmF5ID0gdHJheUZhY3RvcnkuZ2VuZXJhdGVNb2RlbCgpLnNldE1vZGUoV29ya3NwYWNlVHJheU1vZGUuQ09MTEFQU0VEKS5zZXRFeHBhbmQoZmFsc2UsIHRydWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICBsYXJnZVRyYXkuYWRkTW9kZWwobmV3IERlZmF1bHRXb3Jrc3BhY2VQYW5lbE1vZGVsKCdUcmF5IHBhbmVsICcgKyBpKSk7XG4gIH1cblxuICBjb25zdCBleHBhbmROb2RlID0gZ2VuVmVydGljYWxOb2RlKCk7XG4gIGV4cGFuZE5vZGUuc2V0RXhwYW5kKHRydWUsIHRydWUpO1xuXG4gIG1vZGVsXG5cbiAgICAvL2xlZnQgcGFuZWxcbiAgICAuYWRkTW9kZWwoXG4gICAgICB0cmF5RmFjdG9yeVxuICAgICAgICAuZ2VuZXJhdGVNb2RlbCgpXG4gICAgICAgIC5zZXRNb2RlKFdvcmtzcGFjZVRyYXlNb2RlLkNPTExBUFNFRClcbiAgICAgICAgLnNldEV4cGFuZChmYWxzZSwgdHJ1ZSlcbiAgICAgICAgLmFkZE1vZGVsKG5ldyBEZWZhdWx0V29ya3NwYWNlUGFuZWxNb2RlbCgnVHJheSBwYW5lbCAxJykpXG4gICAgICAgIC5hZGRNb2RlbChuZXcgRGVmYXVsdFdvcmtzcGFjZVBhbmVsTW9kZWwoJ1RyYXkgcGFuZWwgMicpKVxuICAgICAgICAuYWRkTW9kZWwobmV3IERlZmF1bHRXb3Jrc3BhY2VQYW5lbE1vZGVsKCdUcmF5IHBhbmVsIDMnKSlcbiAgICApXG4gICAgLmFkZE1vZGVsKGdlblZlcnRpY2FsTm9kZSgpKVxuICAgIC5hZGRNb2RlbChnZW5WZXJ0aWNhbE5vZGUoKSlcblxuICAgIC8vdGFiIHBhbmVsXG4gICAgLmFkZE1vZGVsKFxuICAgICAgbmV3IFdvcmtzcGFjZVRhYk1vZGVsKClcbiAgICAgICAgLmFkZE1vZGVsKG5ldyBEZWZhdWx0V29ya3NwYWNlUGFuZWxNb2RlbCgnVGFiIDEnKSlcbiAgICAgICAgLmFkZE1vZGVsKG5ldyBEZWZhdWx0V29ya3NwYWNlUGFuZWxNb2RlbCgnVGFiIDInKSlcbiAgICAgICAgLmFkZE1vZGVsKG5ldyBEZWZhdWx0V29ya3NwYWNlUGFuZWxNb2RlbCgnVGFiIDMnKSlcbiAgICApXG4gICAgLmFkZE1vZGVsKGV4cGFuZE5vZGUpXG5cbiAgICAuYWRkTW9kZWwobGFyZ2VUcmF5KVxuICAgIC5hZGRNb2RlbChcbiAgICAgIHRyYXlGYWN0b3J5XG4gICAgICAgIC5nZW5lcmF0ZU1vZGVsKClcbiAgICAgICAgLnNldE1vZGUoV29ya3NwYWNlVHJheU1vZGUuTk9STUFMKVxuICAgICAgICAuc2V0RXhwYW5kKGZhbHNlLCB0cnVlKVxuICAgICAgICAuYWRkTW9kZWwobmV3IERlZmF1bHRXb3Jrc3BhY2VQYW5lbE1vZGVsKCdUcmF5IHBhbmVsIDEnKSlcbiAgICAgICAgLmFkZE1vZGVsKG5ldyBEZWZhdWx0V29ya3NwYWNlUGFuZWxNb2RlbCgnVHJheSBwYW5lbCAyJykpXG4gICAgICAgIC5hZGRNb2RlbChuZXcgRGVmYXVsdFdvcmtzcGFjZVBhbmVsTW9kZWwoJ1RyYXkgcGFuZWwgMycpKVxuICAgIClcbiAgICAuYWRkTW9kZWwoZ2VuVmVydGljYWxOb2RlKCkpO1xuICByZXR1cm4gbW9kZWw7XG59O1xuIiwiaW1wb3J0IHsgRXhwYW5kTm9kZU1vZGVsIH0gZnJvbSAnQHByb2plY3RzdG9ybS9yZWFjdC13b3Jrc3BhY2VzLWNvcmUnO1xuaW1wb3J0IHsgZ2VuVmVydGljYWxOb2RlIH0gZnJvbSAnLi90b29scyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaW1wbGVNb2RlbCA9ICgpID0+IHtcbiAgbGV0IG1vZGVsID0gbmV3IEV4cGFuZE5vZGVNb2RlbCgpO1xuICBtb2RlbC5zZXRIb3Jpem9udGFsKHRydWUpO1xuICBtb2RlbFxuXG4gICAgLy9sZWZ0IHBhbmVsXG4gICAgLmFkZE1vZGVsKGdlblZlcnRpY2FsTm9kZSgpKVxuICAgIC5hZGRNb2RlbChnZW5WZXJ0aWNhbE5vZGUoKSlcbiAgICAuYWRkTW9kZWwoZ2VuVmVydGljYWxOb2RlKCkpXG4gICAgLmFkZE1vZGVsKGdlblZlcnRpY2FsTm9kZSgpKVxuICAgIC5hZGRNb2RlbChnZW5WZXJ0aWNhbE5vZGUoKSk7XG4gIHJldHVybiBtb2RlbDtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29tcGxleE1vZGVsIiwiZW5naW5lIiwibW9kZWwiLCJSb290V29ya3NwYWNlTW9kZWwiLCJyZWdpc3Rlckxpc3RlbmVyIiwib3ZlckNvbnN0cmFpbmVkQ2hhbmdlZCIsImNvbnNvbGUiLCJsb2ciLCJyX292ZXJDb25zdHJhaW5lZCIsInJlY29tcHV0ZUluaXRpYWxTaXplcyIsInNldEhvcml6b250YWwiLCJ0cmF5RmFjdG9yeSIsImdldEZhY3RvcnkiLCJXb3Jrc3BhY2VUcmF5TW9kZWwiLCJOQU1FIiwibGFyZ2VUcmF5IiwiZ2VuZXJhdGVNb2RlbCIsInNldE1vZGUiLCJXb3Jrc3BhY2VUcmF5TW9kZSIsIkNPTExBUFNFRCIsInNldEV4cGFuZCIsImkiLCJhZGRNb2RlbCIsIkRlZmF1bHRXb3Jrc3BhY2VQYW5lbE1vZGVsIiwiZXhwYW5kTm9kZSIsImdlblZlcnRpY2FsTm9kZSIsIldvcmtzcGFjZVRhYk1vZGVsIiwiTk9STUFMIiwiY3JlYXRlU2ltcGxlTW9kZWwiLCJFeHBhbmROb2RlTW9kZWwiXSwic291cmNlUm9vdCI6IiJ9