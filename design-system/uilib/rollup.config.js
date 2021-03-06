import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-css-only'
import pkg from './package.json'
import copy from 'rollup-plugin-copy-assets'
import url from '@rollup/plugin-url'

const production = !process.env.ROLLUP_WATCH

function serve() {
    let server

    function toExit() {
        if (server) server.kill(0)
    }

    return {
        writeBundle() {
            if (server) return
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            })

            process.on('SIGTERM', toExit)
            process.on('exit', toExit)
        }
    }
}

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
    .replace(/^\w/, m => m.toUpperCase())
    .replace(/-\w/g, m => m[1].toUpperCase())

const plugins = [
    svelte({
        preprocess: sveltePreprocess({
            sourceMap: !production,
            postcss: production && {
                plugins: [
                    require('postcss-font-base64'),
                ]
            }
        }),
        compilerOptions: {
            // enable run-time checks when not in production
            customElement: true,
            dev: !production,
        },
        
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: 'bundle.css' }),

    url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.svg'],
        // setting infinite limit will ensure that the files 
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
        browser: true,
        dedupe: ['svelte']
    }),
    commonjs(),
    typescript({
        sourceMap: !production,
        inlineSources: !production
    }),

    // copying assets like fonts to the build
    !production && copy({
        assets: [
            // You can include directories
            'assets',
        ],
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    // !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    // !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
]

export default [
    {
        input: ['src/index.ts'],
        output: [
            { file: pkg.module, 'format': 'es' },
            { file: pkg.main, 'format': 'umd', name }
        ],
        // external: ['react'],
        plugins,
    },
    {
        input: ['src/react.ts'],
        output: [
            // { file: 'dist/react/index.mjs', 'format': 'es' },
            { file: 'react/index.js', 'format': 'umd', name }
        ],
        external: ['react'],
        plugins,
    }
]
