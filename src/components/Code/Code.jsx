import { h } from 'preact';
import { useState } from 'preact/hooks';

import "@/components/Code/Code.css";

const Code = ({ code, language }) => {
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
                {copySuccess && <span class="copy-success">{copySuccess}</span>}
                <button class="copy-button" onClick={copyToClipboard}>Copy</button>
            </header>
            <hr class="hr-code" />
            <pre>
                <code class="code">{code}</code>
            </pre>
        </section>
    );
};

export default Code;

