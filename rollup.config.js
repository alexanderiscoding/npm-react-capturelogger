export default {
  input: 'index.js',
  output: {
    file: 'bundle.cjs',
    format: 'cjs'
  },
  external: ['react-native-device-info']
};