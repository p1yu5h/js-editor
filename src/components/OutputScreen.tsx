import React, { useEffect, useRef } from "react";

interface OutputScreenProps {
  code: string;
}

const OutputScreen: React.FC<OutputScreenProps> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const document = iframe.contentDocument;
      if (document) {
        document.open();
        document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head><title>Output</title></head>
          <body style="background-color:#242424;">
            <pre id="output" style="color:#fff;"></pre>
            <script type="text/javascript">
              window.console.log = (function (oldFunction, document) {
                return function (...args) {
                  oldFunction(...args);
                  var output = document.getElementById('output');
                  if (output) {
                    output.innerHTML = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ') + '\\n';
                  }
                };
              }(window.console.log, document));
              try {
                ${code}
              } catch (error) {
                document.getElementById('output').innerText = error;
              }
            </script>
          </body>
          </html>
        `);
        document.close();
      }
    }
  }, [code]);

  return (
    <div className="output">
      <p>Output:</p>
      <iframe className="iframe" ref={iframeRef} />
    </div>
  );
};

export default OutputScreen;
