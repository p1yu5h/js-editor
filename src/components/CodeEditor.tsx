import Editor from "@monaco-editor/react";
import React from "react";

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onCodeChange }) => {
  return (
    <div className="editor">
      <p>main.js</p>
      <Editor
        height="78vh"
        language="javascript"
        value={code}
        theme="vs-dark"
        onChange={(value) => onCodeChange(value || "")}
      />
    </div>
  );
};

export default CodeEditor;
