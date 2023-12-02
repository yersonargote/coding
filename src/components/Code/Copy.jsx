import { h } from 'preact';
import { useState } from 'preact/hooks';

import "@/components/Code/Copy.css";

const Code = ({ code }) => {
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
        <div>
            <pre class="code-block">
                <code>{code}</code>
            </pre>
            <button class="copy-button" onClick={copyToClipboard}>Copy</button>
            
            {copySuccess && <span class="copy-success">{copySuccess}</span>}
        </div>
    );
};

export default Code;

