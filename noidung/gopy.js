function gopyController($scope) {
    $scope.list = [];
    $scope.gopy = {
        ho_ten: "",
        email: "",
        noi_dung: ""
    };
    $scope.clickGopy = function (event) {
        console.log("dat");
    };
};