// vite.config.js
import { defineConfig } from "file:///E:/Batman4496/coding/js/quill-audio-embed/node_modules/vite/dist/node/index.js";
import dtsPlugin from "file:///E:/Batman4496/coding/js/quill-audio-embed/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    outDir: "dist",
    lib: {
      fileName: "quill-audio-embed",
      entry: "src/index.ts"
    },
    rollupOptions: {
      input: ["src/index.ts"],
      output: [
        {
          format: "cjs",
          entryFileNames: "[name].cjs",
          preserveModules: true,
          exports: "named",
          dir: "dist/lib"
        },
        {
          format: "umd",
          entryFileNames: "[name].umd.cjs",
          exports: "named",
          dir: "dist/umd",
          name: "QuillAudioEmbed"
        },
        {
          format: "esm",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "dist"
        }
      ]
    }
  },
  resolve: {
    alias: {
      "@": "./src"
    }
  },
  plugins: [
    dtsPlugin({
      entryRoot: "./src",
      outDir: ["./dist", "./dist/lib"],
      tsconfigPath: "./tsconfig.json"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxCYXRtYW40NDk2XFxcXGNvZGluZ1xcXFxqc1xcXFxxdWlsbC1hdWRpby1lbWJlZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQmF0bWFuNDQ5NlxcXFxjb2RpbmdcXFxcanNcXFxccXVpbGwtYXVkaW8tZW1iZWRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0JhdG1hbjQ0OTYvY29kaW5nL2pzL3F1aWxsLWF1ZGlvLWVtYmVkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBkdHNQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7IFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdkaXN0JyxcclxuICAgIGxpYjoge1xyXG4gICAgICBmaWxlTmFtZTogJ3F1aWxsLWF1ZGlvLWVtYmVkJyxcclxuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IFsnc3JjL2luZGV4LnRzJ10sXHJcbiAgICAgIG91dHB1dDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvcm1hdDogXCJjanNcIixcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5janNcIixcclxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcclxuICAgICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcclxuICAgICAgICAgIGRpcjogXCJkaXN0L2xpYlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmb3JtYXQ6ICd1bWQnLFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0udW1kLmNqcycsXHJcbiAgICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXHJcbiAgICAgICAgICBkaXI6IFwiZGlzdC91bWRcIixcclxuICAgICAgICAgIG5hbWU6IFwiUXVpbGxBdWRpb0VtYmVkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvcm1hdDogJ2VzbScsXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXHJcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXHJcbiAgICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXHJcbiAgICAgICAgICBkaXI6IFwiZGlzdFwiLFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiAnLi9zcmMnXHJcbiAgICB9XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBkdHNQbHVnaW4oe1xyXG4gICAgICBlbnRyeVJvb3Q6IFwiLi9zcmNcIixcclxuICAgICAgb3V0RGlyOiBbJy4vZGlzdCcsICcuL2Rpc3QvbGliJ10sXHJcbiAgICAgIHRzY29uZmlnUGF0aDogJy4vdHNjb25maWcuanNvbidcclxuICAgIH0pXHJcbiAgXVxyXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXVULFNBQVMsb0JBQW9CO0FBQ3BWLE9BQU8sZUFBZTtBQUV0QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsT0FBTyxDQUFDLGNBQWM7QUFBQSxNQUN0QixRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsZ0JBQWdCO0FBQUEsVUFDaEIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBLFVBQ1QsS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsVUFDUixnQkFBZ0I7QUFBQSxVQUNoQixTQUFTO0FBQUEsVUFDVCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxVQUNSLGdCQUFnQjtBQUFBLFVBQ2hCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQSxVQUNULEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBRUY7QUFBQSxFQUVGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLFFBQVEsQ0FBQyxVQUFVLFlBQVk7QUFBQSxNQUMvQixjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
