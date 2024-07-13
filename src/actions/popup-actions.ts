import QuillAudioEmbed from "../quill-audio-embed";


// 
export function popupSubmit(e: Event, audioEmbed: QuillAudioEmbed) {
  const { inputs } = audioEmbed;
  const label = inputs.label.value;
  const url = inputs.url.value;
  const alignment = inputs.alignment.value;
  if (!url.length) return;

  const { quill } = audioEmbed;
  const selection = quill.getSelection();
  quill.insertEmbed(selection?.index ?? 0, 'ql-audio-blot', { 
    label,
    url,
    alignment
  });

  audioEmbed.popupToggle(audioEmbed.popup);
}