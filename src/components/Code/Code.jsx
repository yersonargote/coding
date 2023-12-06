import { h } from 'preact';
import { useState } from 'preact/hooks';

import "@/components/Code/Code.css";

const CodeBlock = ({ code, language }) => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <section class="code-block">
            <header class="header-code">
                <span class="language">{language}</span>
                <div>
                {copySuccess && <span class="copy-success">{copySuccess}</span>}
                <button class="copy-button" onClick={copyToClipboard}>Copy</button>
                </div>
            </header>
            <hr class="hr-code" />
            <pre>
                <code>{code}</code>
            </pre>
        </section>
    );
};

export default CodeBlock;

