import { build } from "vite";

async function buildLib() {
  const result = await build({
    root: "./",
    build: {
      outDir: "lib",
      lib: {
        entry: "src/main.jsx",
        name: "MyLibrary",
        fileName: (format) => `my-library.${format}.jsx`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  });

  console.log(result);
}

buildLib();

