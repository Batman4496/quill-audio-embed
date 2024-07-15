import { Options, AudioBlotValue, IQuillAudioEmbed } from "./types/types";
import QuillAudioEmbed from "./quill-audio-embed";
import { setStyles } from "./helpers";
import { deleteAudioBlot } from "./actions/blot-actions";

export function audioBlot(audioEmbed: IQuillAudioEmbed, options: Options) {
  const BlotType = QuillAudioEmbed.Quill.import('blots/embed');

  class AudioBlot extends BlotType {
    static blotName = 'ql-audio-blot';
    static tagName = 'div';
    static className = 'ql-audio__audio-blot';
    static audio: HTMLAudioElement; 
    static count: number = 0;

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

      const id = data.id || AudioBlot.count;
      node.innerHTML = data.label || '🔊';
      node.dataset.url = data.url;
      node.dataset.label = data.label || '🔊';
      node.dataset.id = id; 
      
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
      if (!data.id) {
        AudioBlot.count += 1;
      }

      return node;
    }

    getData(): AudioBlotValue {
      return {
        id: this.domNode.dataset.id,
        url: this.domNode.dataset.url,
        label: this.domNode.dataset.label,
        alignment: this.domNode.dataset.alignment,
      };
    }

    deleteAt(index: number, length: number) {
      const action = deleteAudioBlot(audioEmbed, this.getData());      
      action.then(res => {
        if (res) {
          super.deleteAt(index, length)
        }
      });
    }


    static value(domNode: any): AudioBlotValue {
      return {
        id: domNode.dataset.id,
        url: domNode.dataset.url,
        label: domNode.dataset.label,
        alignment: domNode.dataset.alignment
      };
    }
  }


  return AudioBlot;
}