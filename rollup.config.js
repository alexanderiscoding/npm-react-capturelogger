export default {
  input: 'bundle.js',
  output: {
    file: 'bundle.cjs',
    format: 'cjs'
  },
  external: ['react-native-device-info']
};