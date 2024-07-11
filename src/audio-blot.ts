/// <reference path="index.d.ts" />

import { setStyles } from "./helpers.js";

export function audioBlot(options: Options) {
  const BlotType = Quill.import('blots/block');

  class AudioBlot extends BlotType {
    static blotName = 'ql-audio-blot';
    static blotTag = 'div';
    static className = 'ql-audio__audio-blot';

    static playAudio(e: any) {
      const audio = new Audio(e.target.dataset.url);
      audio.play();
    }

    static create(value: any) {
      console.log(value);
      const node = document.createElement(AudioBlot.blotTag);
      node.classList.add(AudioBlot.className);
      node.innerHTML = '🔊';
      node.dataset.url = value;
      setStyles(node, {
        display: 'flex',
        cursor: 'pointer',
        width: '50px',
        justifyContent: options.alignment ?? 'left',
        fontSize: '15px'
      });
      
      node.addEventListener('click', (e: any) => AudioBlot.playAudio(e));

      return node;
    }


    format(format: any, value: any) {
      console.log(this.domNode.style);
      console.log(format, value);
      if (format === 'header' && value !== false) {
        this.domNode.style.fontSize = '30px';
      } else if (format === 'header' && value === false) {
        console.log('waaa');
        this.domNode.style.fontSize = '15px';
      }
    }

  }

  return AudioBlot;
}