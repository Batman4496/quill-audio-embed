/// <reference path="index.d.ts" />

import * as popupActions from "./actions/popup-actions.js";
import { audioBlot } from "./audio-blot.js";
import { setStyles } from "./helpers.js";

export default class QuillAudioEmbed {
  quill: any;
  options: Options;
  audioButton: HTMLDivElement;
  container: HTMLDivElement;
  popup: HTMLDivElement;
  input: HTMLInputElement;
  open: boolean = false;


  constructor(quill: any, options: Options) {
    this.quill = quill;
    this.options = options;
    this.container = this.createContainer();

    this.audioButton = this.createAudioButton();
    
    this.input = this.createInput();
    this.popup = this.createPopup();
    
    this.container.append(this.audioButton, this.popup);
    this.setContainer();

    Quill.register(audioBlot(options));
  }

  // Toggling popup
  popupToggle(popup: HTMLDivElement) {
    if (!this.open) {
      setStyles(popup, { display: 'flex' });
      this.open = true;
    } else {
      setStyles(popup, { display: 'flex' });
      this.open = false;
    }
  }

  // Toolbar button for audio embed
  createAudioButton() {
    const div = document.createElement('div');
    div.innerHTML = '🔉';
    setStyles(div, {
      padding: '1px',
      cursor: 'pointer'
    });

    div.addEventListener('click', () => this.popupToggle(this.popup));

    return div;
  }

  createPopup() {
    const div = document.createElement('div');
    div.classList.add('ql-audio__popup');
    setStyles(div, {
      display: 'none',
      position: 'absolute',
      top: '0px',
      left: '0px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2px',
      paddingInline: '10px',
      border: '1px solid black',
      background: 'white',
      borderRadius: '10px'
    });

    this.container.appendChild(div);

    const button = document.createElement('button');
    button.innerHTML = 'Add';
    button.type = "button";
    button.onclick = (e) => popupActions.popupSubmit(e, this, this.input.value.trim())
    
    const closeButton = document.createElement('button');
    closeButton.type = "button";
    closeButton.innerHTML = '❌';
    closeButton.onclick = (e) => this.popupToggle(this.popup);

    div.append(
      this.input,
      button,
      closeButton,
    );

    return div;
  }

  createInput() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = "Enter audio url";
    input.classList.add('ql-audio__input'); 
    setStyles(input, {
      borderRadius: '5px' 
    });

    input.addEventListener('keypress', (e) => {
      if (e.code === "Enter") {
        popupActions.popupSubmit(e, this, this.input.value.trim());
      }
    });

    return input;
  }

  setContainer() {
    const toolbar = document.querySelector(".ql-toolbar");
    const span = document.createElement('span');
    span.classList.add('ql-formats');
    toolbar?.appendChild(span);

    span.appendChild(this.container);
  }

  createContainer () {
    const div = document.createElement('div');
    div.classList.add('ql-audio__container');
    div.style.position = 'relative';

    return div;
  }
}
