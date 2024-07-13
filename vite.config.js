import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({ 
  build: {
    outDir: 'dist',
    lib: {
      fileName: 'quill-audio-embed',
      entry: 'src/index.ts',
    },
    rollupOptions: {
      input: ['src/index.ts'],
      output: [
        {
          format: "cjs",
          entryFileNames: "[name].cjs",
          preserveModules: true,
          exports: "named",
          dir: "dist/lib"
        },
        {
          format: 'umd',
          entryFileNames: '[name].umd.cjs',
          exports: "named",
          dir: "dist/umd",
          name: "QuillAudioEmbed"
        }
      ]
      
    }
  },
  plugins: [
    dtsPlugin({
      insertTypesEntry: true,
      entryRoot: "./src",
      outDir: ['dist/types'],
      tsconfigPath: "./tsconfig.json"
    })
  ]
});