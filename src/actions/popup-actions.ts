import QuillAudioEmbed from "../quill-audio-embed";

export function popupSubmit(e: Event, audioEmbed: QuillAudioEmbed, url: string) {
  url = url.trim();
  if (!url.length) return;

  const { quill } = audioEmbed;
  const index = quill.getSelection();
  quill.insertEmbed(index, 'ql-audio-blot', url);
  audioEmbed.popupToggle(audioEmbed.popup);
}