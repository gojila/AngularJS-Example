//var phonecatControllers = angular.module('phonecatControllers', ['textAngular']);
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.constant('config', {
    appName: 'My App',
    appVersion: 1.0,
    //apiUrl: 'http://localhost:49298'
    apiUrl: 'http://192.168.1.7:8080'
});

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', '$window', '$location', 'config',
  function($scope, $http, $window, $location, config){

    //$scope.fullLocation = $location.protocol() + "://" + $location.host() + ":" + $location.port();
    //$scope.fullLocation = $location.protocol() + "://" + $location.host() + ":8080";
    $scope.fullLocation = config.apiUrl;

    $http.get(config.apiUrl + "/api/mobile").success(function(response){
      $scope.phones = response;
    });
    $scope.query = '';

    $scope.delete = function(id){
      var deleteUser = $window.confirm('Are you absolutely sure you want to delete?');
      if (deleteUser) {
        alert(id);
        $http({
            url: config.apiUrl + "/api/mobile/" + id,
            method: 'DELETE',
            //data:JSON.stringify({id: phoneId}),
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Content-Type': 'application/json; charset=UTF-8',
                'CommandType': 'DeleteMOBILE'
            }
        }).
        success(function (data, status, headers, config){
          alert('Successfully');
          $window.location.href = '#/phones';
        }).
        error(function (data, status, headers, config){
          alert("Error");
        });
      }
    };
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$http', '$routeParams', '$window', 'config',
  function($scope, $http, $routeParams, $window, config){
    $scope.content = "";
    //$scope.orightml = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><img class="ta-insert-video" ta-insert-video="http://www.youtube.com/embed/2maA1-mvicY" src="" allowfullscreen="true" width="300" frameborder="0" height="250"/></p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE9+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p><h4>Supports non-latin Characters</h4><p>昮朐 魡 燚璒瘭 譾躒鑅, 皾籈譧 紵脭脧 逯郹酟 煃 瑐瑍, 踆跾踄 趡趛踠 顣飁 廞 熥獘 豥 蔰蝯蝺 廦廥彋 蕍蕧螛 溹溦 幨懅憴 妎岓岕 緁, 滍 蘹蠮 蟷蠉蟼 鱐鱍鱕, 阰刲 鞮鞢騉 烳牼翐 魡 骱 銇韎餀 媓幁惁 嵉愊惵 蛶觢, 犝獫 嶵嶯幯 縓罃蔾 魵 踄 罃蔾 獿譿躐 峷敊浭, 媓幁 黐曮禷 椵楘溍 輗 漀 摲摓 墐墆墏 捃挸栚 蛣袹跜, 岓岕 溿 斶檎檦 匢奾灱 逜郰傃</p>';
    //$scope.htmlcontent = $scope.orightml;
    $scope.disabled = false;
    $scope.phone = {
        id: '',
        name: '',
        age: '',
        snippet: '',
        imageUrl: '',
        detail: ''
    };

    $scope.status = $routeParams.phoneId;
    if($scope.status != 'create-new'){
      $scope.edit = true;
      $http.get(config.apiUrl + "/api/mobile/" + $routeParams.phoneId).success(function(response){
        $scope.phone = response;
        //CKEDITOR.instances.editor.setMode("source");
        //CKEDITOR.instances.editor.setData("<span></span>");
        //CKEDITOR.instances.editor.focus();
        //CKEDITOR.instances.editor.updateElement();
        // CKEDITOR.instances.editor.setData('<p></p>', function(){
        //   this.checkDirty();  // true
        // });
        CKEDITOR.instances.editor.setData('hello world', function(){
          this.checkDirty();  // true
        });
        // CKEDITOR.instances.editor.setData($scope.phone.detail, function(){
        //   this.checkDirty();  // true
        // });
        //CKEDITOR.instances.editor.updateElement();

        //CKEDITOR.instances.editor.editable().setHtml('');
        //CKEDITOR.instances.editor.editable().setHtml($scope.phone.detail);
        //alert($scope.phone.detail);
        //alert(CKEDITOR.instances.editor.getData());
      });
    }
    else {
      $scope.edit = false;
    }

    $scope.Save = function(){

      //$scope.$apply();

      //alert($scope.phone.detail);
      //alert(CKEDITOR.instances.editor.getData());
      //CKEDITOR.instances.editor1.getData();
      //$scope.$apply();

      $scope.phone.detail = CKEDITOR.instances.editor.getData();

      $scope.method = $scope.status == 'create-new' ? "POST" : "PUT";
      $scope.url = config.apiUrl + '/api/mobile' + ($scope.status == 'create-new' ? "" : ("/" + $scope.phone.id));
      $scope.commandtype = $scope.status = 'create-new' ? "PostMOBILE" : "PutMOBILE";

      $http({
          url: $scope.url,
          method: $scope.method,
          data:JSON.stringify({
              id: $scope.phone.id,
              name: $scope.phone.name,
              age: $scope.phone.age,
              snippet: $scope.phone.snippet,
              imageUrl: $scope.phone.imageUrl,
              detail: $scope.phone.detail
          }),
          headers: {
              //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Content-Type': 'application/json; charset=UTF-8',
              'CommandType': $scope.commandtype
          }
      }).
      success(function (data, status, headers, config){
        alert('Successfully');
        $window.location.href = '#/phones';
        if($scope.edit = false){
          // $scope.id = '';
          // $scope.name = '';
          // $scope.age = '';
          // $scope.snippet = '';
          // $scope.imageUrl = '';
        }
      }).
      error(function (data, status, headers, config){
        alert("Error");
      });
    };

    $scope.fileUrl = "";

    $scope.BrowseImage = function(){
      //alert('Browse');
      var finder = new CKFinder();
      finder.basePath = '../';	// The path for the installation of CKFinder (default = "/ckfinder/").
      finder.selectActionFunction = $scope.SetFileField;
      finder.popup();
    };

    $scope.SetFileField = function(fileUrl){
      $scope.phone.imageUrl = fileUrl;
      $scope.$apply();
    };

    $scope.Test = function(){
      alert($scope.phone.detail);
      alert(CKEDITOR.instances.editor.getData());
    };

    CKEDITOR.replace("editor");
  }]);
