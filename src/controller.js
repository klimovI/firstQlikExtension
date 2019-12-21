export default ['$scope', $scope => {
  const { qHyperCube } = $scope.layout;
  // Data
  $scope.qMatrix = qHyperCube.qDataPages[0].qMatrix;
  // Title of dimension field
  $scope.dimensionTitle = qHyperCube.qDimensionInfo[0].qFallbackTitle;
  // Title of dmeasure field
  $scope.measureTitle = qHyperCube.qMeasureInfo[0].qFallbackTitle;
}];
