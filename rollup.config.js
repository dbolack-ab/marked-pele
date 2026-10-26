import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'marked-mermaid',
      file: 'lib/index.umd.js',
      format: 'umd',
      globals: {
        marked: 'marked'
      }
    },
    external: ['marked'],
    plugins: [nodeResolve()]

  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.cjs',
      format: 'cjs'
    },
    external: ['marked'],
    plugins: [nodeResolve({ resolveOnly: ['mermaid'] }), commonjs()]
  }
];
