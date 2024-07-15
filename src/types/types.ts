
export interface IQuillAudioEmbed  {
  quill: any;
  options: Options;
  audioButton: HTMLDivElement;
  container: HTMLDivElement;
  popup: HTMLDivElement;
  inputs: AudioInputs;
  open: boolean;
}

export type Options = {
  onLoad?: (audioEmbed: IQuillAudioEmbed) => any,
  validate?: (inputs: AudioInputs, audioEmbed: IQuillAudioEmbed) => Promise<boolean>,
  onUpload?: (inputs: AudioInputs, audioEmbed: IQuillAudioEmbed) => Promise<AudioBlotValue|false>,
  onDelete?: (data: AudioBlotValue, audioEmbed: IQuillAudioEmbed) => Promise<boolean>,
  alignment?: 'center' | 'left' | 'right'
};

export type AudioInputs = {
  label: HTMLInputElement, 
  url: HTMLInputElement,
  alignment: HTMLSelectElement,
  file: HTMLInputElement
}

export type AudioBlotValue = { id?: string, url: string, label?: string, alignment?: string };
