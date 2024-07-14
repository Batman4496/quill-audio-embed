import { IQuillAudioEmbed, Options, AudioInputs } from "./types/types";
import * as popupActions from "./actions/popup-actions";
import { audioBlot } from "./audio-blot";
import { setStyles } from "./helpers";

export default class QuillAudioEmbed implements IQuillAudioEmbed {
  static Quill: any;
  quill: any;
  options: Options;
  audioButton: HTMLDivElement;
  container: HTMLDivElement;
  popup: HTMLDivElement;
  inputs: AudioInputs;
  open: boolean = false;

  static setQuillConstructor(quillConstructor: any) {
    QuillAudioEmbed.Quill = quillConstructor;
  }

  constructor(quill: any, options: Options) {
    this.quill = quill;
    this.options = options;

    // Create all controls
    this.container = this.createContainer();
    this.audioButton = this.createAudioButton();
    this.inputs = this.createInputs();
    this.popup = this.createPopup();

    // Add controls to container
    this.container.append(this.audioButton, this.popup);
  
    // Render the container
    this.setContainer();

    // Register the blot
    QuillAudioEmbed.Quill.register(audioBlot(options));

    // Fire load event
    if (options.onLoad) options.onLoad(this);
  }

  // Toggling popup
  popupToggle(popup: HTMLDivElement) {
    if (!this.open) {
      setStyles(popup, { display: 'flex' });
      this.open = true;
    } else {
      setStyles(popup, { display: 'none' });
      this.open = false;
    }
  }

  createAudioButton() {
    const div = document?.createElement('div');
    div.innerHTML = '🔉';
    setStyles(div, {
      cursor: 'pointer'
    });

    div.addEventListener('click', () => this.popupToggle(this.popup));

    return div;
  }

  createPopup() {
    const div = document?.createElement('div');
    div.classList.add('ql-audio__popup');
    setStyles(div, {
      display: 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '20px',
      // left: '50%',
      // right: '50%',
      zIndex: '50',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2px',
      paddingInline: '10px',
      paddingBlock: '5px',
      border: '1px solid black',
      background: 'white',
      borderRadius: '10px'
    });

    this.container.appendChild(div);

    const sub = document?.createElement('div');
    setStyles(sub, {
      display: 'flex',
      flexDirection: 'row',
      gap: '5px',
      width: '100%'
    });

    const addButton = document?.createElement('button');
    addButton.innerHTML = 'Add';
    addButton.type = "button";
    setStyles(addButton, {
      width: '100%',
      paddingInline: '15px',
      border: '.1px solid black',
      borderRadius: '5px',
      backgroundColor: '#a7f3d0'
    });
    addButton.onclick = (e) => popupActions.popupSubmit(e, this);
    
    const closeButton = document?.createElement('button');
    closeButton.type = "button";
    closeButton.innerHTML = 'x';
    setStyles(closeButton, {
      width: '100%',
      paddingInline: '15px',
      border: '.1px solid black',
      borderRadius: '5px',
      backgroundColor: '#fecaca'
    });
    closeButton.addEventListener('click', (e) => this.popupToggle(this.popup)); 

    sub.append(this.inputs.alignment, addButton, closeButton);
    
    div.append(
      this.inputs.label, 
      this.inputs.url, 
      this.inputs.file, 
      sub
    );
    
    return div;
  }

  createFileInput() {
    const fileInput = document?.createElement('input');
    fileInput.type = 'file';
    fileInput.classList.add('ql-audio__input-file');
    setStyles(fileInput, {
      width: '100%',
      border: '1px solid black',
    });

    fileInput.addEventListener('change', (e: Event) => popupActions.fileChange(e, this));

    return fileInput;
  }

  createInputs(): AudioInputs {
    const labelInput = document?.createElement('input');
    labelInput.type = 'text';
    labelInput.placeholder = "Enter text";
    labelInput.id = 'ql-audio__input-name';
    labelInput.classList.add('ql-audio__input'); 
    setStyles(labelInput, {
      border: '1px solid black',
      paddingInline: '5px',
      borderRadius: '5px' 
    });
    
    const valueInput = document?.createElement('input');
    valueInput.type = 'text';
    valueInput.id = 'ql-audio__input-value';
    valueInput.placeholder = "Enter audio url";
    valueInput.classList.add('ql-audio__input'); 
    setStyles(valueInput, {
      border: '1px solid black',
      paddingInline: '5px',
      borderRadius: '5px' 
    });
    
    
    const select = document?.createElement('select');
    select.id = 'ql-audio__input-alignment';

    ['left', 'right', 'center'].forEach(al => {
      const option = document?.createElement('option');
      option.value = al;
      option.innerText = al;

      select.append(option);
    })

    setStyles(valueInput, {
      border: '1px solid black',
      paddingInline: '5px',
      borderRadius: '5px' 
    });

    return {
      label: labelInput,
      url: valueInput,
      alignment: select,
      file: this.createFileInput()
    };
  }

  setContainer() {
    const toolbar = document?.querySelector(".ql-toolbar");
    const span = document?.createElement('span');
    span.classList.add('ql-formats');
    toolbar?.appendChild(span);

    span.appendChild(this.container);
  }

  createContainer () {
    const div = document?.createElement('div');
    div.classList.add('ql-audio__container');
    div.style.position = 'relative';

    return div;
  }
}