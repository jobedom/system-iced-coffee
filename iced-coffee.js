var IcedCoffee = require('iced-coffee-script');

exports.translate = function(load) {
  var output = IcedCoffee.compile(load.source, {
    sourceFiles: [load.address],
    sourceMap: true,
    bare: true
  });
  load.source = output.js;
  load.metadata.sourceMap = output.v3SourceMap;
};
