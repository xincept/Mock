import { eslint } from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const buildMode = process.env.BUILD_MODE || 'normal'

const outputConfig = {
  normal: [
    {
      format: 'umd',
      name: 'Mock.js',
      file: 'dist/mock.js',
      indent: '\t',
    },
    {
      format: 'es',
      name: 'Mock.js',
      file: 'dist/mock.module.js',
      indent: '\t',
    },
  ],
  closure: [
    {
      format: 'umd',
      name: 'Mock.js',
      file: 'dist/mock.min.js',
      minify: true,
    },
  ],
}

export default {
  input: 'src/mock.js',
  output: outputConfig[buildMode],
  plugins: [
    resolve(),
    eslint({
      include: ['src/**/*.js'],
    }),
    buildMode == 'closure' &&
      babel({
        exclude: 'node_modules/**', // 排除node_modules 下的文件
        runtimeHelpers: true,
      }),
    buildMode == 'closure' &&
      uglify({
        warnings: false, // remove warning
        compress: {
          dead_code: true, //remove dead code
          pure_funcs: [], // funcs will not pack when build
          drop_debugger: true,
          drop_console: true,
        },
        sourcemap: false,
      }),
  ],
}
