export default {
  type: 'items',
  component: 'accordion',
  items: {
    dimensions: {
      uses: 'dimensions',
      min: 1,
      max: 10
    },
    measures: {
      uses: 'measures',
      min: 0,
      max: 10
    }
  }
};
