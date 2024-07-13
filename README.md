# Introduction 

A Quill module for embedding audio files that you can play!!

![Image](https://github.com/Batman4496/quill-audio-embed/raw/main/assets/a.png)


# How to Use

Install the package: `npm install quill-audio-format`


## Script

You can import the script tag from the `node_modules/quill-audio-embed/dist/quill-audio-embed.umd.cjs`

```html
<head>
  ...
    <script type="text/javascript" src="/dist/umd/index.umd.cjs"></script>
  ...
</head>


<script>
  // Pass in the Quill constructor
  QuillAudioEmbed.default.setQuillConstructor(Quill);

  // Register the module
  Quill.register('modules/audioEmbed', QuillAudioEmbed.default);

  const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
      ],
      audioEmbed: {
        alignment: 'left' // Alignment of the play button
      }
    },
    placeholder: 'Compose an epic...',
    theme: 'snow',
  });

quill.on('text-change', () => {
  console.log(quill.getSemanticHTML());
});
</script>

```

## Module

You can also import it as a module

```js
import Quill from "quill";
import QuilAudioEmbed, { setQuillConstructor } from "quill-audio-embed";

setQuillConstructor(Quill);
Quill.register('modules/audioEmbed', QuillAudioEmbed);
  const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
      ],
      audioEmbed: {
        alignment: 'left' // Alignment of the play button
      }
    },
    placeholder: 'Compose an epic...',
    theme: 'snow',
});
```

## ReactQuill

```js
import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillAudioEmbed from "quill-audio-embed";

QuillAudioEmbed.setQuillConstructor(Quill);
Quill.register('modules/audioEmbed', QuillAudioEmbed);

function QuillEditor() {

  return (
    <ReactQuill theme="snow" modules={{
      audioEmbed: {
        alignment: 'left' // Setting default alignment
      }
    }}/>
  );
}

export default QuillEditor;
```

## CommonJs

The common js library is located inside `quill-audio-embed/dist/lib`.


# File Uploading

You can also upload files right from the module and embed them into quill editor. You can read all the types [here](#types).

`onLoad`: Executed once the quill-audio-embed is successfully rendered into the browser.

`validate`: Executed after a file upload and before `onUpload`. Here you can write you validation logic. You must return a boolean for success (`true`) and failure (`false`) case. You can access all the input fields of the quill-audio-embed using the `AudioInputs` or through the `IQuillAudioEmbed` object.

```js

const quill = new Quill('#editor', {
    modules: {
      toolbar: [ ... ],
      audioEmbed: {
        validate: (inputs, audioEmbed) => {
          // Check if file is larger than 5 mb
          const file = inputs.file.files[0];

          if ((file / (1024 * 1024)) > 5) {
            // Write your own error message displaying logiv
            document.querySelector('#upload-error').innerHTML = "An error occured!";
            return false;
          }

          if (!file.type.split('/').includes('image')) {
            // Write your own error message displaying logiv
            document.querySelector('#upload-error').innerHTML = "An error occured!";
            return false;
          }


          return true;
        },
        },
        alignment: 'left' // Default alignment of the play button
      }
    },
    placeholder: 'Compose an epic...',
    theme: 'snow',
  });
```

`onUpload`: Executed after successful validation, here you can write your logic for uploading files. The function must return an `AudioBlotValue` in case of a successful run or a `false` in case of failure. In the return value is `AudioBlotValue` then, it will automatically be injected at the selection area or at the top of the quill content.

```js
const quill = new Quill('#editor', {
  modules: {
    toolbar: [ ... ],
    audioEmbed: {
      validate: (inputs, audioEmbed) => {
        ...
        return true;
      },
      onUpload: async (inputs, audioEmbed) => {
        const file = inputs.file.files[0];  // Getting file from the inputs

        // Uploading file to an api
        const res = await fetch('/api/file', {
          method: 'POST',
          body: file
        });
        const json = await res.json();

        if (!json.sucesss) return false'
        
        return {
          label: json.data.name,
          url: json.data.url,
          alignment: 'right'
        }
      },
      alignment: 'left' // Default alignment of the play button
    }
  },
  placeholder: 'Compose an epic...',
  theme: 'snow',
});
```


## Types

```ts

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

```



# Contribute

Contribution can help a long way ✌️