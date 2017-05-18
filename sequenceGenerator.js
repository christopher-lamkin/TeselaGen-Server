var dnaObject = {
  sequence: "",
  sequenceLength: 0,
  features: []
};

var generateSequenceLength = function(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
};

var generateSequence = function(sequenceLength){
  dnaObject.sequenceLength = sequenceLength;

  var basePairs = ["a", "t", "g", "c"];

  for (var i = 0; i < sequenceLength; i++){
    dnaObject.sequence += basePairs[Math.floor(Math.random() * basePairs.length)];
  };
};

var generateFeatures = function(featureNames, sequenceLength){
  var numberOfFeatures = Math.floor(Math.random() * 6);

  for (var i = 0; i < numberOfFeatures; i++){
    dnaObject.features.push({name: featureNames[i], index: Math.floor(Math.random() * sequenceLength)});
  };
};

var featureNames = ["CDS", "Promoter1", "Restriction Site 1", "Ribosome Binding Site", "Promoter 2", "CDS2"];

generateSequence(generateSequenceLength(10, 50));
generateFeatures(featureNames, dnaObject.sequenceLength);

module.exports = function(){
  return dnaObject;
};
