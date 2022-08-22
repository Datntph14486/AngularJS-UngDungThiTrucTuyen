function dangkiContrller($scope) {
    $scope.list = [];
    $scope.taikhoan = {
        ten_tai_khoan:"",
        ho_ten: "",
        sdt: "",
        gioi_tinh: 1,
        email: "",
        mat_khau: ""
    };
    $scope.onbtnClickmatKhau = function (event) {
        console.log($scope.taikhoan);

    };


}