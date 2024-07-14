import { AudioBlotValue } from "../types/types";
import { setStyles } from "../helpers";
import QuillAudioEmbed from "../quill-audio-embed";

// Inserts blot at the selection position or at the top of quill
export function insertAudioBlot(audioEmbed: QuillAudioEmbed, data: AudioBlotValue) {
  const selection = audioEmbed.quill.getSelection();
  audioEmbed.quill.insertEmbed(selection?.index ?? 0, 'ql-audio-blot', data);
}

// Fires when you click add button 
export function popupSubmit(e: Event, audioEmbed: QuillAudioEmbed) {
  const { inputs } = audioEmbed;
  const label = inputs.label.value;
  const url = inputs.url.value;
  const alignment = inputs.alignment.value;
  if (!url.length) {
    return setStyles(inputs.url, {
      borderColor: 'red',
    });
  } else {
    setStyles(inputs.url, {
      borderColor: 'black',
    });
  }

  insertAudioBlot(audioEmbed, { label, url, alignment });
  audioEmbed.popupToggle(audioEmbed.popup);
}

export async function fileChange(e: Event, audioEmbed: QuillAudioEmbed) {
  const fileInput = e.target as HTMLInputElement;

  if (audioEmbed.options.validate) {
    const res = await audioEmbed.options.validate(audioEmbed.inputs, audioEmbed);
    if (!res) {
      return setStyles(fileInput as HTMLElement, {
        border: '1px solid red'
      });
    } else {
      setStyles(fileInput as HTMLElement, {
        border: '1px solid green'
      });
    }    
  }

  fileInput.disabled = true;
  
  let value: AudioBlotValue | false = false;
  if (audioEmbed.options.onUpload) {
    value = await audioEmbed.options.onUpload(audioEmbed.inputs, audioEmbed);
  }

  if (!value) {
    return setStyles(fileInput as HTMLElement, {
      border: '1px solid red'
    });
  } else {
    setStyles(fileInput as HTMLElement, {
      border: '1px solid green'
    });
  }

  insertAudioBlot(audioEmbed, value);
  fileInput.disabled = false;
}