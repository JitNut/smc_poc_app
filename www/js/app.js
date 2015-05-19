// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('smartHome', ['ionic','n3-line-chart','nvd3ChartDirectives'])
.controller('roomsDataCtrl',function($scope,$http,$window){
    
    window.addEventListener("orientationchange", function() {
   alert(window.orientation);
});
    var graphData = {
        'Line' : [],
        'Pie' :  []
    };
    var graphOptions = {
        'Line' : [],
        'Pie' :  []
    };
    
    function initGraphData(){
     $http.get('graphData.line.json').success(function(data) {
         graphData.Line  = data;
         });
         $http.get('graphData.pie.json').success(function(data) {
         graphData.Pie  = data;
         });
    }
    
     $scope.xFunction = function() {
      return function(d) {
        return d.key;
      };
    }
	
    $scope.yFunction = function() {
      return function(d) {
        return d.y;
      };
    }   
	
	$scope.toolTipContentFunction = function(){
	return function(key, x, y, e, graph) {
    	return  'Super New Tooltip' +
        	'<h1>' + key + '</h1>' +
            '<p>' +  y + ' at ' + x + '</p>'
	}
    }
    
    $scope.graphData =[];
   $scope.graphOptions = {  
  series: [
    {
      y: "vrms",
      label: "vrms",
      type: "area",
      color: "#4EC213",
      axis: "y",
      thickness: "1px",
      dotSize: 2,
      striped :true,
       drawLegend: true,
      id: "series_0"
    },
    {
      y: "vrmsAvg",
      label: "vrmsAvg",
      type: "line",
      color: "#0B9E7C",
      axis: "y1",
      striped :true,
      dotSize: 3,
        drawLegend: true,
      id: "series_1"
    },
    {
      y: "irms",
      label: "irms",
      color: "#9467bd",
      axis: "y1",
      type: "line",
      thickness: "1px",
      dotSize: 3,
        drawLegend: true,
      id: "series_2"
    }
  ],
  stacks: [],
  axes: {
    x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 10, ticks: 10},
    y: {type: 'linear', min: 114, max: 125, ticks: 10},
    y2: {type: 'linear', min: 114, max: 125, ticks: 10},
    y3: {type: 'linear', min: 0, max: 125, ticks: 10}
  },
  tension: 0.2,
  tooltip: {mode: "scrubber"},
  drawLegend: true,
  drawDots: true,
  columnsHGap: 2,
  lineMode: "dashed"
};
    
    $scope.Views = {'HomeView' : 'HomeView',
                    'RoomView': 'RoomView',
                   'ChartView' : 'ChartView'};
    
    $scope.roomsRepo  = [
            {'id': 'sm001', 
             Equips : [
                 {'Name' : 'Lights', 'id' : 'dev001', 'icon' : 'ion-help-buoy'},
                 {'Name' : 'Tv', 'id' : 'dev002', 'icon' : 'ion-minus-circled'},
                 {'Name' : 'Heater' , 'id' : 'dev004', 'icon' : 'ion-help-buoy'},
                 {'Name' : 'Fan' ,'id' : 'dev006',  'icon' : 'ion-briefcase'},
                 {'Name' : 'Tv','id' : 'dev008',  'icon' : 'ion-help-buoy'}
             ]
            },
            {'id':'sm002', 
             Equips : [
                 {'Name' : 'Lights' ,'id' : 'dev003', 'icon' : 'ion-help-buoy'},
                 {'Name' : 'Heater' , 'id' : 'dev004', 'icon' : 'ion-minus-circled'}
             ]
            },       
            {'id':'sm003',
             Equips : [
                 {'Name' : 'Lights' ,'id' : 'dev005',  'icon' : 'ion-help-buoy'},
                 {'Name' : 'Fan' ,'id' : 'dev006',  'icon' : 'ion-help-buoy'},
                 {'Name' : 'Tv','id' : 'dev008', 'icon' : 'ion-briefcase'},
                 {'Name' : 'Fan' ,'id' : 'dev006',  'icon' : 'ion-help-buoy'}
                 ]
            },
        {'id' : 'sm004',
             Equips : [
                 {'Name' : 'Lights' , 'id' : 'dev007',  'icon' : 'ion-help-buoy'},
                 {'Name' : 'Tv','id' : 'dev008',  'icon' : 'iion-briefcase'},
                 {'Name': 'Fan' ,'id': 'dev009',  'icon' : 'ion-help-buoy'}
                 ]
        }
    ];
    
    $scope.rooms = [{'Heading' : "Living Room", 'img':'img/living_room.png', 'id':'sm001'},
                   {'Heading' : "Bath Room", 'img':'img/bath_room.png', 'id':'sm002'},
                   {'Heading' : "Dinning Room", 'img':'img/dining_room.png', 'id':'sm003'},
                   {'Heading' : "Bed Room", 'img':'img/sleeping_room.png', 'id':'sm004'},
                    {'Heading' : "Living Room", 'img':'img/living_room.png', 'id':'sm001'},
                   {'Heading' : "Bath Room", 'img':'img/bath_room.png', 'id':'sm002'},
                   {'Heading' : "Dinning Room", 'img':'img/dining_room.png', 'id':'sm003'},
                   {'Heading' : "Bed Room", 'img':'img/sleeping_room.png', 'id':'sm004'},
                    {'Heading' : "Living Room", 'img':'img/living_room.png', 'id':'sm001'},
                   {'Heading' : "Bath Room", 'img':'img/bath_room.png', 'id':'sm002'},
                   {'Heading' : "Dinning Room", 'img':'img/dining_room.png', 'id':'sm003'},
                   {'Heading' : "Bed Room", 'img':'img/sleeping_room.png', 'id':'sm004'}
                   ];
    
    
    
    $scope.deviceRepo = [{'id' : 'dev001', 'status' : true},
                        {'id' : 'dev002', 'status' : false},
                        {'id' : 'dev003', 'status' : false},
                        {'id' : 'dev004', 'status' : true},
                        {'id' : 'dev005', 'status' : true},
                        {'id' : 'dev006', 'status' : false},
                        {'id' : 'dev007', 'status' : true},
                        {'id' : 'dev008', 'status' : true},
                        {'id' : 'dev009', 'status' : false}];
    $scope.chartItems = [
        {'Heading' : "Line Chart", 'img':'img/chart_line.png', 'id':'chart001', 'type' :'Line'},
         {'Heading' : "Another Chart", 'img':'img/chart_pie.png', 'id':'chart002', 'type' :'Pie'}
    ];
    var chartTypes = {'Line' : 'Line',
                     'Pie' : 'Pie'}
    $scope.selectedRoom = getRoomFromId('sm001');
    $scope.selectedChartTitle = 'Chart';
    $scope.activeEquips = [];
    $scope.ActiveView = 'HomeView';
    $scope.selectedRoomTitle = '';
    $scope.isLineChart = true;
    $scope.setRoom = function(id){
        $scope.selectedRoom = getRoomFromId(id);
        $scope.activeEquips = $scope.selectedRoom.Equips;
         $scope.selectedRoomTitle = getDescriptionFromId(id); 
        setView($scope.Views.RoomView);
    }; 
   
    $scope.setChart = function(type){
        switch(type)
        {
                case chartTypes.Line:
                $scope.graphData = graphData.Line;
                $scope.isLineChart = true;
                //$scope.graphOptions = graphOptions.Line;
                break;
                case chartTypes.Pie:
                $scope.graphData = graphData.Pie;
                $scope.isLineChart = false;
                //$scope.graphOptions =
                break;
        }
        setView($scope.Views.ChartView);
    }
   function getDescriptionFromId(id){
       for(i=0;i<$scope.rooms.length;i++){
            if($scope.rooms[i].id == id)
                return $scope.rooms[i].Description;
        }
   }
    
    function getRoomFromId(id){
        for(i=0;i<$scope.roomsRepo.length;i++){
            if($scope.roomsRepo[i].id == id)
                return $scope.roomsRepo[i];
        }
    }
    
    function setView(view)
    {
        switch(view){
                case $scope.Views.RoomView:
                $scope.ActiveView = $scope.Views.RoomView;
                break;
                case $scope.Views.HomeView:
                 $scope.ActiveView = $scope.Views.HomeView;
                break;
                case $scope.Views.ChartView:
                $scope.ActiveView = $scope.Views.ChartView;
                break;
                
        }
    }
    
    $scope.expliciteWidth = $window.innerWidth;
    $scope.expliciteHeight = $window.innerHeight;
    
    initGraphData();
    
    $scope.setView = setView;
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})