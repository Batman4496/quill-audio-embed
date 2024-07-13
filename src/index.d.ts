type Options = {
  // autoPlay?: boolean,
  alignment?: 'center' | 'left' | 'right'
};


type AudioInputs = {
  label: HTMLInputElement, 
  url: HTMLInputElement,
  alignment: HTMLSelectElement
}

type AudioBlotValue = { url: string, label?: string, alignment?: string };

declare const Quill: any;
