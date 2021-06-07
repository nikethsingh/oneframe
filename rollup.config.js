import babel from "rollup-plugin-babel";
import copyTo from "rollup-plugin-copy-assets-to";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import {terser} from 'rollup-plugin-terser';


export default [
  {
    input: "app/index.js",
    output: [
      { 
        file: "lib/index.js", 
        format: "es", 
        indent: false,
        plugins: [terser()]
      },
      {
        file: 'lib/index.min.js',
        format: 'iife',
        name: 'version',
        plugins: [terser()]
      }],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      babel({
        exclude: /node_modules/, // only transpile our source code
      }),
      resolve({
        only: [/^lib.*$/, /.*app.*$/],
      }),
    ],
  },
];
