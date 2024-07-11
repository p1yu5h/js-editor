import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import Header from "./Header";
import OutputScreen from "./OutputScreen";

const Main: React.FC = () => {
  const [code, setCode] = useState<string>('console.log("Hello, World!");');
  const [runCode, setRunCode] = useState<string>("");

  const handleRunCode = () => {
    setRunCode(code);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="editor-container">
          <CodeEditor code={code} onCodeChange={setCode} />
          <button onClick={handleRunCode}>Run</button>
        </div>
        <OutputScreen code={runCode} />
      </div>
    </>
  );
};

export default Main;
