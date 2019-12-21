import initialProperties from './initialProperties.json';
import definition from './definition';
import template from './template/template.html';
import paint from './paint';

export default {
  initialProperties,
  definition,
  support: {
    snapshot: true,
    export: true,
    exportData: false
  },
  template,
  paint
};
