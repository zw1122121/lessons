myApp.controller("deviceListController", function ($scope, $log) {
    var ctrl = this;
    $scope.devices = [];
    $scope.count = 1;
    $log.info("调用deviceListController工厂函数");
    for(var i = 0; i < 3 ; i++) {
        $scope.devices.push({
            deviceId : i,
            deviceName : "设备名称 " +  $scope.count,
            voltageLevel : "电压等级 " + $scope.count,
            deviceCategory : "设备分类"  + $scope.count,
            deviceSubcategory : "设备子类"  + $scope.count,
            predictExpireTime : "预试到期时间"  + $scope.count,
            checkExpireTime : "定检到期时间"  + $scope.count
        });
        $scope.count++;
    }

    $scope.options = {
        toolbar : "#deviceList-table-toolbar",
        data : $scope.devices,
        cache : false,
        pagination : true,
        pageSize : 5,
        pageList : [10,15],
        striped : true,
        clickToSelect : true,
        singleSelect : true,
        onCheck : function (row, $element) {
            ctrl.onSelect({device : row});
        },
        columns : [{
            field : "checkbox",
            checkbox: true,
            align: 'center',
            valign: 'middle'
        },{
            field : "deviceName",
            title : "设备名称"
        },{
            field : "voltageLevel",
            title : "电压等级"
        },{
            field : "deviceCategory",
            title : "设备分类"
        },{
            field : "deviceSubcategory",
            title : "设备子类"
        },{
            field : "predictExpireTime",
            title : "预试到期时间"
        },{
            field : "checkExpireTime",
            title : "定检到期时间"
        }]
    };
    $scope.bsTableControl = {
        options :   $scope.options
    };
});

myApp.component("deviceList", {
    templateUrl: 'myComponents/deviceList/deviceList.html',
    controller: "deviceListController",
    bindings: {
        onSelect : "&"
    }
});