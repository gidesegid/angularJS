function todoController($scope) {
	$scope.myInput = "";
    $scope.toDoList = [];

    $scope.addItem = function() {
    	if($scope.myInput) {
    		$scope.toDoList.push($scope.myInput);
    		$scope.myInput = "";
    		
    	}
    }
     $scope.deleteItem = function() {
    		// $scope.toDoList.shift($scope.myInput);
    		// $scope.myInput = "";
    	$scope.toDoList.shift($scope.myInput);
    }
}
function result($scope){
    $scope.firstName="";
    $scope.lastName="";
    $scope.emailAddress="";
    $scope.phoneNumber="";
    $scope.uploadedProfilePicture="";
   
    

}
function finish(){

}