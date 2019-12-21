import template from './template/template.html';

export default {
  support: {
    snapshot: true,
    export: true,
    exportData: false
  },
  template,
  paint($element) {
    console.log($element[0]);
    // $element.html('hui');
  }
};
