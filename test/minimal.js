var buffer = require('three-buffer-vertex-data')
var index = require('../')
var glslify = require('glslify')
var loadFont = require('load-bmfont')
var SDFShader = require('../shaders/sdf')

module.exports = {
  createTextGeo: function (opt) {
      return index.createTextGeometry(opt)
  },
  loadFontAsync: function(opt, cb) {
    loadFont(opt.font, function (err, font) {
      if (err) throw err
      THREE.ImageUtils.loadTexture(opt.image, undefined, function (tex) {
        cb(font, tex)
      })
    });
  },
  createSDFShader: function(opt) {
    return SDFShader(opt);
  },
  TextGeometry: index.TextGeometry
}
