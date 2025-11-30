// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/Moon/Desktop/eclipse-softworks/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Moon/Desktop/eclipse-softworks/node_modules/@vitejs/plugin-react/dist/index.js";
import { visualizer } from "file:///C:/Users/Moon/Desktop/eclipse-softworks/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Moon/Desktop/eclipse-softworks/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3e3,
      host: "0.0.0.0"
    },
    plugins: [
      react(),
      mode === "analyze" && visualizer({
        filename: "dist/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    ].filter(Boolean),
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        "@": new URL("./", __vite_injected_original_import_meta_url).pathname
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            three: ["three", "@react-three/fiber"],
            ui: ["lucide-react"]
          }
        }
      },
      sourcemap: mode === "production",
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: mode === "production",
          drop_debugger: mode === "production"
        }
      }
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      css: true,
      coverage: {
        reporter: ["text", "json", "html"],
        exclude: [
          "node_modules/",
          "src/test/",
          "**/*.d.ts",
          "dist/",
          "coverage/",
          "**/*.config.*"
        ]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNb29uXFxcXERlc2t0b3BcXFxcZWNsaXBzZS1zb2Z0d29ya3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE1vb25cXFxcRGVza3RvcFxcXFxlY2xpcHNlLXNvZnR3b3Jrc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTW9vbi9EZXNrdG9wL2VjbGlwc2Utc29mdHdvcmtzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsICcuJywgJycpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgcG9ydDogMzAwMCxcclxuICAgICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICByZWFjdCgpLFxyXG4gICAgICAgIG1vZGUgPT09ICdhbmFseXplJyAmJiB2aXN1YWxpemVyKHtcclxuICAgICAgICAgIGZpbGVuYW1lOiAnZGlzdC9zdGF0cy5odG1sJyxcclxuICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICBnemlwU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgIGJyb3RsaVNpemU6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgICAgIGRlZmluZToge1xyXG4gICAgICAgICdwcm9jZXNzLmVudi5BUElfS0VZJzogSlNPTi5zdHJpbmdpZnkoZW52LkdFTUlOSV9BUElfS0VZKSxcclxuICAgICAgICAncHJvY2Vzcy5lbnYuR0VNSU5JX0FQSV9LRVknOiBKU09OLnN0cmluZ2lmeShlbnYuR0VNSU5JX0FQSV9LRVkpXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgJ0AnOiBuZXcgVVJMKCcuLycsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZDoge1xyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXHJcbiAgICAgICAgICAgICAgdGhyZWU6IFsndGhyZWUnLCAnQHJlYWN0LXRocmVlL2ZpYmVyJ10sXHJcbiAgICAgICAgICAgICAgdWk6IFsnbHVjaWRlLXJlYWN0J11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc291cmNlbWFwOiBtb2RlID09PSAncHJvZHVjdGlvbicsXHJcbiAgICAgICAgbWluaWZ5OiAndGVyc2VyJyxcclxuICAgICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgICBkcm9wX2NvbnNvbGU6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0ZXN0OiB7XHJcbiAgICAgICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgICAgICBzZXR1cEZpbGVzOiBbJy4vc3JjL3Rlc3Qvc2V0dXAudHMnXSxcclxuICAgICAgICBjc3M6IHRydWUsXHJcbiAgICAgICAgY292ZXJhZ2U6IHtcclxuICAgICAgICAgIHJlcG9ydGVyOiBbJ3RleHQnLCAnanNvbicsICdodG1sJ10sXHJcbiAgICAgICAgICBleGNsdWRlOiBbXHJcbiAgICAgICAgICAgICdub2RlX21vZHVsZXMvJyxcclxuICAgICAgICAgICAgJ3NyYy90ZXN0LycsXHJcbiAgICAgICAgICAgICcqKi8qLmQudHMnLFxyXG4gICAgICAgICAgICAnZGlzdC8nLFxyXG4gICAgICAgICAgICAnY292ZXJhZ2UvJyxcclxuICAgICAgICAgICAgJyoqLyouY29uZmlnLionXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sV0FBVztBQUNsQixTQUFTLGtCQUFrQjtBQUhvSyxJQUFNLDJDQUEyQztBQUtoUCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN0QyxRQUFNLE1BQU0sUUFBUSxNQUFNLEtBQUssRUFBRTtBQUNqQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUyxhQUFhLFdBQVc7QUFBQSxRQUMvQixVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsTUFDZCxDQUFDO0FBQUEsSUFDSCxFQUFFLE9BQU8sT0FBTztBQUFBLElBQ2hCLFFBQVE7QUFBQSxNQUNOLHVCQUF1QixLQUFLLFVBQVUsSUFBSSxjQUFjO0FBQUEsTUFDeEQsOEJBQThCLEtBQUssVUFBVSxJQUFJLGNBQWM7QUFBQSxJQUNqRTtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxJQUFJLElBQUksTUFBTSx3Q0FBZSxFQUFFO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixjQUFjO0FBQUEsWUFDWixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsWUFDN0IsT0FBTyxDQUFDLFNBQVMsb0JBQW9CO0FBQUEsWUFDckMsSUFBSSxDQUFDLGNBQWM7QUFBQSxVQUNyQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXLFNBQVM7QUFBQSxNQUNwQixRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYixVQUFVO0FBQUEsVUFDUixjQUFjLFNBQVM7QUFBQSxVQUN2QixlQUFlLFNBQVM7QUFBQSxRQUMxQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixZQUFZLENBQUMscUJBQXFCO0FBQUEsTUFDbEMsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLFFBQ1IsVUFBVSxDQUFDLFFBQVEsUUFBUSxNQUFNO0FBQUEsUUFDakMsU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
