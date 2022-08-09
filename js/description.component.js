AFRAME.registerComponent('desc', {
  schema: {
    product: {type:'string', default: 'model'},
    description: {type: 'string', default: 'slim, and fit'},
    price: {type:'int',default: 0},
    currency:{type:'string',default: 'USD'}
  }
});