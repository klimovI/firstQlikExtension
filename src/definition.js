export default {
  type: 'items',
  component: 'accordion',
  items: {
    dimensions: {
      uses: 'dimensions',
      min: 1
    },
    measures: {
      uses: 'measures',
      min: 0
    }
  }
};
