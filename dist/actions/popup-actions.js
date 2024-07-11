export function popupSubmit(e, audioEmbed, url) {
    const { quill } = audioEmbed;
    const index = quill.getSelection();
    quill.insertEmbed(index, 'ql-audio-blot', url);
    audioEmbed.popupToggle(audioEmbed.popup);
}
