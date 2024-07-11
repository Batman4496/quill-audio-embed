/// <reference path="index.d.ts" />
import { setStyles } from "./helpers.js";
export function audioBlot(options) {
    const BlotType = Quill.import('blots/inline');
    class AudioBlot extends BlotType {
        static create(value) {
            var _a;
            const node = document.createElement(AudioBlot.blotTag);
            node.classList.add(AudioBlot.className);
            setStyles(node, {
                display: 'flex',
                cursor: 'pointer',
                justifyContent: (_a = options.alignment) !== null && _a !== void 0 ? _a : 'left'
            });
            const span = document.createElement('span');
            span.innerHTML = '🔊';
            node.appendChild(span);
            const audio = new Audio(value);
            node.addEventListener('click', () => {
                console.log("Playing:", value);
                audio.play();
            });
            return node;
        }
    }
    AudioBlot.blotName = 'ql-audio-blot';
    AudioBlot.blotTag = 'div';
    AudioBlot.className = 'ql-audio__audio-blot';
    return AudioBlot;
}
