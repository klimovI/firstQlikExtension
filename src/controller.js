export default ['$scope', $scope => {
  const {
    qHyperCube
  } = $scope.layout;
  // Data
  $scope.hCube = qHyperCube;
  const loadDataButton = document.querySelector('#loadDataButton');
  loadDataButton.addEventListener('click', () => console.log($scope.layout));
}];
