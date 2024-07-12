# Introduction 

A Quill module for embedding audio files that you can play!!

![Image](https://github.com/Batman4496/quill-audio-embed/raw/main/assets/a.png)


# How to Use

Install the package: `npm install quill-audio-format`


## Script

You can import the script tag from the `node_modules/quill-audio-embed/dist/quill-audio-embed.umd.cjs`

```js
<head>
  ...
    <script type="text/javascript" src="/dist/quill-audio-embed.umd.cjs"></script>
  ...
</head>

...
<script>
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
import QuilAudioEmbed from "quill-audio-embed";

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


# Contribute

Contribution can help a long way ✌️