"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2865],{172:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>y,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>g,toc:()=>k});var i=e(74848),r=e(28453);const o={},s=void 0,g={id:"Tools/Xcode/Visual Studio Code Keybindings for Xcode",title:"Visual Studio Code Keybindings for Xcode",description:"xcode #swift",source:"@site/../digital-garden/Tools/Xcode/Visual Studio Code Keybindings for Xcode.md",sourceDirName:"Tools/Xcode",slug:"/Tools/Xcode/Visual Studio Code Keybindings for Xcode",permalink:"/notes/Tools/Xcode/Visual Studio Code Keybindings for Xcode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"digitalGardenSidebar",previous:{title:"Swift Build with dSYM",permalink:"/notes/Tools/Xcode/Swift Build with dSYM"},next:{title:"Xcode Freeze",permalink:"/notes/Tools/Xcode/Xcode Freeze"}},y={},k=[];function d(t){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"#tool #xcode #swift"}),"\n",(0,i.jsx)(n.p,{children:"Create the following file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vim ~/Library/Developer/Xcode/UserData/KeyBindings/VSCode.idekeybindings\n"})}),"\n",(0,i.jsx)(n.p,{children:"With this content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n\t<key>Menu Key Bindings</key>\n\t<dict>\n\t\t<key>Key Bindings</key>\n\t\t<array>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>analyzeActiveRunContext:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Analyze</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Analyze</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Product Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^@b</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Analyze</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>buildActiveRunContext:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Build</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Build</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Product Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^b</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Build</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>cleanActiveRunContext:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Clean</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Clean</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Product Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^@k</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Clean Build Folder\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>compileFile:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.CompileFile</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.CompileFile</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Product Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Perform Action</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Compile File</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>toggleDebuggerVisibility:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.DebuggerToggleVisibility</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.DebuggerToggleVisibility</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>View Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>@j</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Debug Area</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Show Debug Area</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>duplicate:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Duplicate</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Duplicate</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Edit Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~$\uf701</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Duplicate</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>editAndAnalyzeActiveRunContext:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>YES</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.EditAndAnalyze</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.EditAndAnalyze</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Product Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^~@b</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Analyze\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>toggleInspectorArea:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Inspectors.ToggleVisibility</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Inspectors.ToggleVisibility</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>View Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>$@B</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Inspectors</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Show Inspector</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>jumpToLine:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Navigate Menu for Asset Catalog Comparison</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^g</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Jump to\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>jumpToLine:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Navigate Menu for Commit Sheet</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^g</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Jump to\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>jumpToLine:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Navigate Menu for Documentation</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.DocViewingNavigateMenu</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^g</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Jump to\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>jumpToLine:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Navigate Menu for Playground</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Navigate</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^g</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Jump to\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>jumpToLine:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.JumpTo</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Navigate Menu for Source Code</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Navigate</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>^g</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Jump to\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>moveFocusToEditor:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.MoveFocusToEditor</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.MoveFocusToEditor</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Navigate Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>@1</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Move Focus to Editor\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>changeToStructureNavigator:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.NavigatorsStructure</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.NavigatorsStructure</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>View Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>$@E</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Navigators</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Project</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>toggleNavigator:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.NavigatorsToggleVisibility</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.NavigatorsToggleVisibility</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>View Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>@b</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Navigators</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Show Navigator</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>newFolder:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>IDENewGrouping</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.NewFolder</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>File Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~@n</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>New</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Folder</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>openQuickly:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.OpenQuickly</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.OpenQuickly</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>File Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>@p</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Open Quickly\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>printDocument:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Print</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.Print</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>File Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Print\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>selectNextOccurrence:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.SelectNextOccurrence</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.SelectNextOccurrence</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Find Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>@d</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Select Next Occurrence</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>useSelectionForReplace:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.UseSelectionForReplace</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEKit.CmdDefinition.UseSelectionForReplace</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Find Menu</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEKit.MenuDefinition.Main</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Use Selection for Replace</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>moveCurrentLineDown:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Asset Catalog Comparison</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~\uf701</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Structure</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Move Line Down</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>moveCurrentLineDown:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Playground</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~\uf701</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Structure</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Move Line Down</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>moveCurrentLineDown:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineDown</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Source Code</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~\uf701</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Structure</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Move Line Down</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>moveCurrentLineUp:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Asset Catalog Comparison</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~\uf700</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Structure</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Move Line Up</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>moveCurrentLineUp:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Playground</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~\uf700</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Structure</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Move Line Up</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>moveCurrentLineUp:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.MoveLineUp</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Source Code</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>~\uf700</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Structure</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Move Line Up</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>renameRefactor:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Asset Catalog Comparison</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.DeltaComparisonEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>\uf705</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Refactor</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Rename\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>renameRefactor:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Playground</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPlaygroundEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>\uf705</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Refactor</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Rename\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>renameRefactor:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.CmdDefinition.Refactor.Rename</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for Source Code</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.IDEPegasusSourceEditor.MenuDefinition.Editor</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Keyboard Shortcut</key>\n\t\t\t\t<string>\uf705</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Parent Title</key>\n\t\t\t\t<string>Refactor</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Rename\u2026</string>\n\t\t\t</dict>\n\t\t\t<dict>\n\t\t\t\t<key>Action</key>\n\t\t\t\t<string>editorMenuTogglePlayPause:</string>\n\t\t\t\t<key>Alternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>CommandGroupID</key>\n\t\t\t\t<string>Xcode.SpriteKit.CmdDefinition.TogglePauseSimulate</string>\n\t\t\t\t<key>CommandID</key>\n\t\t\t\t<string>Xcode.SpriteKit.CmdDefinition.TogglePauseSimulate</string>\n\t\t\t\t<key>Group</key>\n\t\t\t\t<string>Editor Menu for SpriteKit Scene Editor</string>\n\t\t\t\t<key>GroupID</key>\n\t\t\t\t<string>Xcode.SpriteKit.Scene.Editor.MenuDefinition</string>\n\t\t\t\t<key>GroupedAlternate</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Navigation</key>\n\t\t\t\t<string>NO</string>\n\t\t\t\t<key>Title</key>\n\t\t\t\t<string>Edit / Simulate</string>\n\t\t\t</dict>\n\t\t</array>\n\t\t<key>Version</key>\n\t\t<integer>3</integer>\n\t</dict>\n\t<key>Text Key Bindings</key>\n\t<dict>\n\t\t<key>Key Bindings</key>\n\t\t<dict>\n\t\t\t<key></key>\n\t\t\t<array>\n\t\t\t\t<array>\n\t\t\t\t\t<string>moveBackward:</string>\n\t\t\t\t\t<string>moveToBeginningOfParagraph:</string>\n\t\t\t\t</array>\n\t\t\t\t<string>moveBackward:</string>\n\t\t\t\t<array>\n\t\t\t\t\t<string>moveForward:</string>\n\t\t\t\t\t<string>moveToEndOfParagraph:</string>\n\t\t\t\t</array>\n\t\t\t\t<string>moveParagraphForwardAndModifySelection:</string>\n\t\t\t</array>\n\t\t\t<key>$@K</key>\n\t\t\t<string>deleteLine:</string>\n\t\t\t<key>$\uf729</key>\n\t\t\t<string>moveToBeginningOfDocumentAndModifySelection:</string>\n\t\t\t<key>@l</key>\n\t\t\t<string>selectLine:</string>\n\t\t</dict>\n\t\t<key>Version</key>\n\t\t<integer>3</integer>\n\t</dict>\n</dict>\n</plist>\n'})}),"\n",(0,i.jsx)(n.p,{children:'Restart Xcode and select the "VSCode" keybindings.'})]})}function a(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>g});var i=e(96540);const r={},o=i.createContext(r);function s(t){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function g(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(o.Provider,{value:n},t.children)}}}]);