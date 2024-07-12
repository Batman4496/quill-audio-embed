import { defineConfig } from 'vite';

export default defineConfig({ 
  build: {
    outDir: './dist',
    lib: {
      fileName: 'quill-audio-embed',
      entry: './src/index.ts',
      name: 'QuillAudioEmbed',
      formats: ['umd']
    },
  }
});