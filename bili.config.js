const config = {
  input: 'src/Typed.ts',
  output: {
    format: ['esm', 'esm-min', 'cjs', 'cjs-min', 'umd', 'umd-min'],
    moduleName: 'Typed',
  },
  banner: true,
  plugins: {
    typescript2: {
      clean: true,
      useTsconfigDeclarationDir: true,
    },
  },
}

export default config
