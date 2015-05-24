// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('smartHome', ['ionic','n3-line-chart'])
.controller('roomsDataCtrl',function($scope,$http,$window){
    
    screen.orientation.onchange = function() {
        alert('rotated');
    };
    var graphData = {
        'Line' : [],
        'Pie' :  []
    };
    var graphOptions = {
        'Line' : [],
        'Pie' :  []
    };
    
    function initGraphData(){
     
         $http.get('graphData.pie.json').success(function(data) {
         graphData.Pie  = data;
         });
        $http.get('roomsData.json').success(function(data) {
        $scope.rooms = data;
        });
        $http.get('graphOptions.line.json').success(function(data) {
         $scope.graphOptions = data;
            $scope.graphOptions.axes.x.labelFunction = function(value) {return value;}
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
                drawPieChart();
                break;
        }
        setView($scope.Views.ChartView);
    }
    
    function drawPieChart()
    {
       
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
    
    $scope.drawPieChart = function (div){
        new iChart.Pie2D({
					render : div,
					data: $scope.graphData,

					legend : {
						enable : false,
						align : 'center',
						sign : 'round',
						row:'max',
						
					},
					label : {
						sign: 'round'		
					},
            align : 'center',
					showpercent:true,
					decimalsnum:2,
					layout_distance : 1,
					border : true,
					tip  : 'enable'
				}).draw();
    };
    
    $scope.drawLineChart = function(div){
        document.body.style.overflow = "hidden";

				var vrms = [125.0,124.829629132,124.330127019,123.535533906,122.5,121.294095226,120.0,118.705904775,117.5,116.464466095,115.669872982,115.170370869,115.0,115.170370869,115.669872982,116.464466095,117.5,118.705904775,120.0,121.294095226,122.5,123.535533906,124.330127019,124.829629132,125.0];
				var vrmsAvg = [120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0,120.0];


				var timestamp  ={0:4.16667E-4,1:0.042083334,2:0.08375,3:0.125416667,4:0.167083334,5:0.20875,6:0.250416667,7:0.292083334,8:0.33375,9:0.375416667,10:0.417083334,11:0.458750001,12:0.500416667,13:0.542083334,14:0.58375,15:0.625416667,16:0.667083334,17:0.70875,18:0.750416667,19:0.792083334,20:0.83375,21:0.875416667,22:0.917083334,23:0.95875,24:1.000416667};
				var data = [
				         	{
				         		name : 'VRMS',
				         		value:vrms,
				         		color:'#aad0db',
				         		line_width:2
				         	},
				         	{
				         		name : 'VRMS Avg',
				         		value:vrmsAvg,
				         		color:'#f68f70',
				         		line_width:2
				         	}
				         ];

				var chart = new iChart.LineBasic2D({
					render : div,
					data:data,
                    width: $scope.expliciteWidth - 20,
					align:'left',
                    padding : 30,
					background_color:'#FEFEFE',
					border: false,
					tip:{
						enable:true,
						shadow:true,
						move_duration:400,
						border:{
							 enable:true,
							 radius : 5,
							 width:2,
							 color:'#3f8695'
						},
						listeners:{
							 //tip:
							parseText:function(tip,name,value,text,i){
								return name+":"+value;
							}
						}
					},
					tipMocker:function(tips,i){
						return "<div style='font-weight:600'> Time : "+timestamp[i]+
								"</div>"+tips.join("<br/>");
					},
					legend : {
						enable : true,
						row:1,
						column : 'max',
						valign:'top',
						sign:'bar',
						background_color:null,
						offsetx:-80,
						border : true
					},
					crosshair:{
						enable:true,
						line_color:'#62bce9'
					},
					sub_option : {
						label:false,
						point_size:10
					},
					coordinate:{
						width:$scope.expliciteWidth ,
						height:$scope.expliciteHeight ,
						axis:{
							color:'#dcdcdc',
							width:1
						},
						scale:[{
							 position:'left',	
							 start_scale:114,
							 end_scale:125,
							 scale_space:10,
							 scale_size:2,
							 scale_color:'#9f9f9f'
						},{
							 position:'bottom',	
							 labels:"0"
						}]
					}
				});
			chart.draw();
    }
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