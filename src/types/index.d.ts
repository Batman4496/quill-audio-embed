
interface IQuillAudioEmbed  {
  quill: any;
  options: Options;
  audioButton: HTMLDivElement;
  container: HTMLDivElement;
  popup: HTMLDivElement;
  inputs: AudioInputs;
  open: boolean = false;
}

type Options = {
  onLoad?: (audioEmbed: IQuillAudioEmbed) => any,
  validate?: (inputs: AudioInputs, audioEmbed: IQuillAudioEmbed) => Promise<boolean>,
  onUpload?: (inputs: AudioInputs, audioEmbed: IQuillAudioEmbed) => Promise<AudioBlotValue|false>,
  alignment?: 'center' | 'left' | 'right'
};

type AudioInputs = {
  label: HTMLInputElement, 
  url: HTMLInputElement,
  alignment: HTMLSelectElement,
  file: HTMLInputElement
}

type AudioBlotValue = { url: string, label?: string, alignment?: string };

declare const Quill: any;
