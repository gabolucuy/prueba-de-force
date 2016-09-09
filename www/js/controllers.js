angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LaggingSkillsCtrl', function($scope, LaggingSkills) {
  $scope.laggingSkills = LaggingSkills.all();
})


.controller('LaggingSkillCtrl', function($scope, $stateParams) {
  $scope.params = $stateParams;
})

.controller('HelpCategoryCtrl', function($scope, $stateParams) {
  $scope.params = $stateParams;
})

.controller('HelpCategoryCtrl', function($scope) {
  $scope.helpCategories = [
    {name : "help_category_01" , description : "The kid isn’t talking", id:1},
    {name : "help_category_02", description : "My kid is too young to do CPS", id:2},
    {name : "help_category_03", description : "The kid talked but I don’t know what to do with what s/he said", id:3}
  ];
})

.controller('UnsolvedProblemCtrl', function($scope, UnsolvedProblems, $cordovaSQLite) {
$scope.unsolvedProblems = get_unsolved_problems($cordovaSQLite);;
  $scope.create_unsolved_problem = function() {
    if (!input_field_is_empty($scope.description)) {
      save_unsolved_problem($cordovaSQLite,$scope)
      $scope.description="";
      $scope.unsolvedProblems = get_unsolved_problems($cordovaSQLite);
    }
  };
});

// OTHER FUNCTIONS

function get_unsolved_problems(cordovaSQLite) {
  var unsolved_problems = [];
  var query ="SELECT * FROM unsolved_problems";
  cordovaSQLite.execute(db,query).then(function(result) {
    var rows = result.rows;
      if(rows.length) {
        for(var i=0; i < rows.length; i++){
          unsolved_problems.push(rows.item(i));
        }
      }else {
        console.log("No data found");
      }
    },function(error){
      console.log("error"+error);
    });
  return unsolved_problems;
}

function input_field_is_empty(description) {
    return description.length === 0;
}

function save_unsolved_problem(cordovaSQLite,scope){
  var query ="INSERT INTO unsolved_problems(description,solved) VALUES (?,?)";
  cordovaSQLite.execute(db,query,[scope.description,0]);
}
