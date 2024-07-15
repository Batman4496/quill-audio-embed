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
        },
        {
          format: 'esm',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: "named",
          dir: "dist",
        }
      ]
      
    }
    
  },
  server: {
    warmup: {
      clientFiles: ['./src/**.*'],
    }
  },
  plugins: [
    dtsPlugin({
      entryRoot: "./src",
      outDir: ['./dist', './dist/lib'],
      tsconfigPath: './tsconfig.json'
    })
  ]
});