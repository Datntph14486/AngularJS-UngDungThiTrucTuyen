function onBtnHocVien($scope, $http) {

    $scope.vitricapnhat = -1;
    $scope.list = [];
    $scope.data_hoc_vien = {
        hoten: "",
        sdt: "",
        khoahoc: "",
        ngaydangki: "",
        matkhau: "",
        vaitro: "false",
        gioitinh: 1,
        email: ""
    };
    $http.get("https://62a1ffedcd2e8da9b000b301.mockapi.io/hocvien").then(function (response) {

        $scope.list = response.data;
        console.log(response.data);
    })

    $scope.btnCreateHocvien = function (event) {
        if( $scope.data_hoc_vien.hoten === "" || $scope.data_hoc_vien.sdt === "" || $scope.data_hoc_vien.khoahoc=== "" || $scope.data_hoc_vien.ngaydangki==="" || $scope.data_hoc_vien.matkhau==="" )
        {
            alert("dữ liệu không được để trống")
        }else{
            const api = "https://62a1ffedcd2e8da9b000b301.mockapi.io/hocvien";
            $http.post(api, $scope.data_hoc_vien).then(function (response) {
                $scope.list.push(response.data);
                console.log($scope.data_hoc_vien.gioitinh);
                alert("thêm thành công")
            })
        }
 
    }
    $scope.btnDeleteHocvien = function (event, index) {
        console.log(index);
        const sv = $scope.list[index];
        console.log(sv.id);
        const api = "https://62a1ffedcd2e8da9b000b301.mockapi.io/hocvien/" + sv.id;
        $http.delete(api).then(function (response) {
            $scope.list.splice(index, 1);
            alert("xóa thành công");
        })

    }
    $scope.loadform = function (event, index) {
        const sv = $scope.list[index];
        $scope.data_hoc_vien.hoten = sv.hoten;
        $scope.data_hoc_vien.sdt = sv.sdt;
        $scope.data_hoc_vien.email = sv.email;
        $scope.data_hoc_vien.khoahoc = sv.khoahoc;
        $scope.data_hoc_vien.matkhau = sv.matkhau;
        $scope.data_hoc_vien.gioitinh = sv.gioitinh;
        $scope.data_hoc_vien.ngaydangki = sv.ngaydangki;
        $scope.vitricapnhat = index;

    }
    $scope.update = function (event) {
        if ($scope.vitricapnhat == -1) {
            alert("bạn chưa chọn sinh viên nào");
        } else {
            if( $scope.data_hoc_vien.hoten === "" || $scope.data_hoc_vien.sdt === "" || $scope.data_hoc_vien.khoahoc=== "" || $scope.data_hoc_vien.ngaydangki==="" || $scope.data_hoc_vien.matkhau==="" )
            {
                alert("dữ liệu không được để trống")
            }else{
                const sv = $scope.list[$scope.vitricapnhat];
            const api = "https://62a1ffedcd2e8da9b000b301.mockapi.io/hocvien/" + sv.id;
            $http.put(api, $scope.data_hoc_vien).then(function (response) {
                $scope.list[$scope.vitricapnhat] = response.data;
                alert("cập nhật thành công");

            })
            }
         

        }




    }
    $scope.clearForm = function (event) {
        $scope.data_hoc_vien.hoten = "";
        $scope.data_hoc_vien.sdt = "";
        $scope.data_hoc_vien.email = "";
        $scope.data_hoc_vien.khoahoc = "";
        $scope.data_hoc_vien.matkhau = "";
        $scope.data_hoc_vien.gioitinh = "";
        $scope.data_hoc_vien.ngaydangki = "";
        $scope.vitricapnhat = -1;

    }
    $scope.data_dang_nhap = {
        matkhau: "",
        email: "",
        vaitro: ""
    };
    $scope.vaitroo ="";
        
    
    $scope.dangnhap = function (event) {
        console.log($scope.list.length);
        for (var index = 0; index < $scope.list.length; index++) {
            const sv = $scope.list[index];
            console.log($scope.data_dang_nhap);
            console.log(sv.email);
            if (sv.email == $scope.data_dang_nhap.email && sv.matkhau == $scope.data_dang_nhap.matkhau) {
                alert("đăng nhập thành công");
                window.location.href = "#trangchu";
                $scope.data_dang_nhap.email = "";
                $scope.data_dang_nhap.matkhau = "";
                $scope.vaitroo = sv.vaitro;
                console.log($scope.vaitroo);
                return;

            }


        }
        alert("tài khoản hoặc mật khẩu không chính xác");
    }


};