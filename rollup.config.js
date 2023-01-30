import typescript from '@rollup/plugin-typescript';
export default {
    input: 'src/main.ts',
    output: {
        dir: './js',
        format: 'es'
    },
    plugins: [typescript()]
};