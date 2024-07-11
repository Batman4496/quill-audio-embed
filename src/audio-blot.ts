/// <reference path="index.d.ts" />

import { setStyles } from "./helpers.js";

export function audioBlot(options: Options) {
  const BlotType = Quill.import('blots/inline');

  class AudioBlot extends BlotType {
    static blotName = 'ql-audio-blot';
    static blotTag = 'div';
    static className = 'ql-audio__audio-blot';
    
    static create(value: any) {
      const node = document.createElement(AudioBlot.blotTag);
      node.classList.add(AudioBlot.className);
      setStyles(node, {
        display: 'flex',
        cursor: 'pointer',
        justifyContent: options.alignment ?? 'left'
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

  return AudioBlot;
}