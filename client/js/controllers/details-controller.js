app.controller('detailsController', ['$scope', '$resource', function ($scope, $resource) {
  

  var Details = $resource('/api/details');
  var Home = $resource('/api'+location.pathname);
  var Front = $resource('/api/home');
  //var Desc = $resource('/api/car'+location.pathname);
 
  //var Details = $resource('/');

  console.log(Details);

  Details.query(function (results) {
    $scope.details = results;
    //console.log($scope.details);
  });

  Home.query(function (results) {
    $scope.home = results;
    //console.log($scope.details);
  });

  Front.query(function (results) {
    $scope.front = results;
    console.log($scope.front);
  });

   $scope.chk=function(){
          //console.log("test");
          var d = new Date();
          var start_dt=document.getElementById("hstartvalue").value;
          console.log(start_dt);
          //var start=start_dt.toISOString();
          //var st=start_dt.getDate();
          //var newd=Date.parse(start_dt);
          var currd=d.toISOString();
          var end_dt=document.getElementById("hendvalue").value;
          var err="Not in stock";
          //var end=end_dt.toISOString();
          //console.log(start_dt+" "+end+" "+currd);
          //var end=new Date(end_dt);
          //debugger;
          if(currd<end_dt)
          {
            //document.getElementById("myBtn").innerHTML = "sadasdasd";
          //document.getElementById("status").innerHTML = end_dt ;
          //var s;          //document.getElementById("curr").innerHTML=end_dt;
          //document.getElementById("st").innerHTML=start;
          return true;
            }
            else
            {
          //document.getElementById("myBtn").disabled = false;
          //document.getElementById("curr").innerHTML=currd;
          //document.getElementById("st").innerHTML=start_dt;
          return false;
          //document.getElementById("st2").innerHTML=(currd<=end);
            }
          }
        


  $scope.details = []

  
}]);