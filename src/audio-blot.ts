/// <reference path="./types/index.d.ts" />

import QuillAudioEmbed from "./quill-audio-embed.js";
import { setStyles } from "./helpers.js";

export function audioBlot(options: Options) {
  const BlotType = QuillAudioEmbed.Quill.import('blots/embed');

  class AudioBlot extends BlotType {
    static blotName = 'ql-audio-blot';
    static tagName = 'div';
    static className = 'ql-audio__audio-blot';
    static audio: HTMLAudioElement; 

    static playAudio(e: any) {
      if (AudioBlot.audio) {
        AudioBlot.audio.pause();
      }
      const audio = new Audio(e.target.dataset.url);
      AudioBlot.audio = audio;
      
      AudioBlot.audio.play();
    }

    static create(data: AudioBlotValue) {
      const node = super.create();
      node.classList.add(AudioBlot.className);

      node.innerHTML = data.label || '🔊';
      node.dataset.url = data.url;
      node.dataset.label = data.label || '🔊';
      node.dataset.alignment = data.alignment;
      setStyles(node, {
        display: 'flex',
        cursor: 'pointer',
        justifyContent: data.alignment ?? options.alignment ?? 'left',
        fontSize: '15px',
        minWidth: '20px',
        background: 'rgba(204, 204, 204, .2)',
        paddingInline: '10px'
      });
      
      node.addEventListener('click', (e: any) => AudioBlot.playAudio(e));

      return node;
    }

    static value(domNode: any): AudioBlotValue {
      return {
        url: domNode.dataset.url,
        label: domNode.dataset.label,
        alignment: domNode.dataset.alignment
      };
    }
  }


  return AudioBlot;
}