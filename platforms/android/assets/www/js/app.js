// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('smartHome', ['ionic'])
.controller('roomsDataCtrl',function($scope){
    
        $scope.Views = {'HomeView' : 'HomeView',
                        'RoomView': 'RoomView'};
    
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
    $scope.selectedRoom = getRoomFromId('sm001');
    $scope.activeEquips = [];
    $scope.ActiveView = 'HomeView';
    $scope.selectedRoomTitle = '';
    
    $scope.setRoom = function(id){
        $scope.selectedRoom = getRoomFromId(id);
        $scope.activeEquips = $scope.selectedRoom.Equips;
         $scope.selectedRoomTitle = getDescriptionFromId(id); 
        setView($scope.Views.RoomView);
    }; 
   
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
        }
    }
    
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