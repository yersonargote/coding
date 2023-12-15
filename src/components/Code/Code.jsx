import { h } from "preact";
import { useState } from "preact/hooks";
import "@/components/Code/Code.css";

export function CodeBlock ({ language, code }) {
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy"), 2000);
    } catch {
      setButtonText("Failed to copy!");
      setTimeout(() => setButtonText("Copy"), 2000);
    }
  };

  return (
    <section class="code-container">
      <header class="code-header">
        <span class="code-language">{language}</span>
        <div>
          <button
            id="copy-button"
            class="copy-button"
            onClick={copyToClipboard}
          >
            {buttonText}
          </button>
        </div>
      </header>
      <hr class="code-hr" />
      <pre id="code-block" class="code-block">
        <code>{code}</code>
      </pre>
    </section>
  );
};