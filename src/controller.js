export default ['$scope', $scope => {
  // Data
  $scope.qMatrix = $scope.layout.qHyperCube.qDataPages[0].qMatrix;
  // Title of dimension field
  $scope.dimensionTitle = $scope.layout.qHyperCube.qDimensionInfo[0].qFallbackTitle;
  // Title of dmeasure field
  $scope.measureTitle = $scope.layout.qHyperCube.qMeasureInfo[0].qFallbackTitle;
}];
