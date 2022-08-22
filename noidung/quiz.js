function onbtnquiz($scope, $http) {
    $scope.vitri=-1;
    $scope.index=0;
    $scope.list_cauhoi = [];
    $scope.data_cauhoi = {
        cauhoi: "",
        dapaan1: "",
        dapaan2: "",
        dapaan3: "",
        dapaan4: "",
        dapandung: ""
    }
    $scope.start = function (event) {
        $scope.hienthi = true;
    }
    $scope.reset = function () {
        $scope.hienthi = false;
    }
    $scope.reset();


    $http.get("https://62a1ffedcd2e8da9b000b301.mockapi.io/quiz").then(function (response) {
        $scope.list_cauhoi = response.data;
        console.log(response.data);
    })

    $scope.themCauhoi=function(event){
        if($scope.data_cauhoi.cauhoi===""|| $scope.data_cauhoi.dapaan1===""|| $scope.data_cauhoi.dapaan2===""|| $scope.data_cauhoi.dapaan3===""|| $scope.data_cauhoi.dapaan4===""|| $scope.data_cauhoi.dapandung==="")
        {
            alert("dữ liệu không đượpc để trống")
        }else{
            const api="https://62a1ffedcd2e8da9b000b301.mockapi.io/quiz";
            $http.post(api,$scope.data_cauhoi).then(function(response){
                $scope.list_cauhoi.push(response.data);
                alert("thêm câu hỏi thành công")
            })
        }
    

    }
    $scope.xoaCauhoi=function(event, index){
       const ch=$scope.list_cauhoi[index];
       const api="https://62a1ffedcd2e8da9b000b301.mockapi.io/quiz/"+ch.id;
       $http.delete(api).then(function(response){
           $scope.list_cauhoi.splice(index,1);
           alert("xóa thành công");
       })

    }
    $scope.loadForm=function(event,index){
        const ch=$scope.list_cauhoi[index];
        $scope.data_cauhoi.cauhoi=ch.cauhoi;
        $scope.data_cauhoi.dapaan1=ch.dapaan1;
        $scope.data_cauhoi.dapaan2=ch.dapaan2;
        $scope.data_cauhoi.dapaan3=ch.dapaan3;
        $scope.data_cauhoi.dapaan4=ch.dapaan4;
        $scope.data_cauhoi.dapandung=ch.dapandung;
        $scope.vitri=index;

    }
    $scope.clearForm=function(event){
        $scope.data_cauhoi.cauhoi="";
        $scope.data_cauhoi.dapaan1="";
        $scope.data_cauhoi.dapaan2="";
        $scope.data_cauhoi.dapaan3="";
        $scope.data_cauhoi.dapaan4="";
        $scope.data_cauhoi.dapandung="";
        $scope.vitri=-1
;    }
    $scope.LuuThongtin=function(event){
        if($scope.vitri==-1){
            alert("bạn chưa chọn câu hỏi");

        }else{
            if($scope.data_cauhoi.cauhoi===""|| $scope.data_cauhoi.dapaan1===""|| $scope.data_cauhoi.dapaan2===""|| $scope.data_cauhoi.dapaan3===""|| $scope.data_cauhoi.dapaan4===""|| $scope.data_cauhoi.dapandung==="")
            {
                alert("dữ liệu không đượpc để trống")
            }else{
                console.log($scope.data_cauhoi);
                const ch=$scope.list_cauhoi[$scope.vitri];
             
                const api="https://62a1ffedcd2e8da9b000b301.mockapi.io/quiz/"+ch.id;
                $http.put(api,$scope.data_cauhoi).then(function(response){
                    $scope.list_cauhoi[$scope.vitri]=response.data;
                    alert("cập nhật thành công");
                    $scope.clearForm();
                })
            }
           
    
        }
       
    }
    $scope.nextCauhoi=function(event){
        $scope.index=$scope.index+1;
        if($scope.index==$scope.list_cauhoi.length){
            $scope.index=0;
        }
    }
    $scope.quaylaicauhoi=function(event){
       
        if($scope.index==0){
            $scope.index=$scope.list_cauhoi.length-1;
        }else{
            $scope.index=$scope.index-1;
        }
    }
    $scope.checkinput=function(event){
      //  $scope.list_cauhoi[index].dapandung==0
     console.log($scope.list_cauhoi);
     console.log($scope.index);
     alert("Đáp án đúng : "+$scope.list_cauhoi[$scope.index].dapandung);

    }

  


};