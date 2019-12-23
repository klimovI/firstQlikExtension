export default ['$scope', $scope => {
  const {
    qHyperCube
  } = $scope.layout;
  $scope.hCube = qHyperCube;
  // Data
  $scope.qMatrix = qHyperCube.qDataPages[0].qMatrix;
}];
