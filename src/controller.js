export default ['$scope', $scope => {
  const {
    qHyperCube
  } = $scope.layout;
  // Data
  $scope.hCube = qHyperCube;
  $scope.qData = qHyperCube.qDataPages[0].qMatrix;
  const loadDataButton = document.querySelector('#loadDataButton');
  // load additional rows to the table
  loadDataButton.addEventListener('click', () => {
    const requestPage = [{
      qTop: $scope.qData.length,
      qLeft: 0,
      qWidth: 20,
      qHeight: 2
    }];
    $scope.backendApi.getData(requestPage).then(data => {
      $scope.qData.push(...data[0].qMatrix);
    });
  });
}];
