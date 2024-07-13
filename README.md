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
    <script type="text/javascript" src="/dist/quill-audio-embed.umd.cjs"></script>
  ...
</head>


<script>
  // Pass in the Quill constructor
  QuillAudioEmbed.setQuillConstructor(Quill);

  // Register the module
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

  return (<ReactQuill theme="snow" modules={{
    audioEmbed: {
      alignment: 'left' // Setting default alignment
    }
  }}/>);
}

export default QuillEditor;
```

# Contribute

Contribution can help a long way ✌️