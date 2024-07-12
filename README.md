# Introduction 

A Quill module for embedding audio files that you can play!!

# How to Use

Install the package: `npm install quill-audio-format`

```js

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


![Image](https://github.com/Batman4496/quill-audio-embed/raw/main/assets/a.png)


# Contribute

