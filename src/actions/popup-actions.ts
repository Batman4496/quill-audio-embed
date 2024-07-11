import QuillAudioEmbed from "../quill-audio-embed";

export function popupSubmit(e: Event, audioEmbed: QuillAudioEmbed, url: string) {
  url = url.trim();
  if (!url.length) return;

  const { quill } = audioEmbed;
  const selection = quill.getSelection();
  quill.insertEmbed(selection?.index ?? 0, 'ql-audio-blot', url);
  audioEmbed.popupToggle(audioEmbed.popup);
}