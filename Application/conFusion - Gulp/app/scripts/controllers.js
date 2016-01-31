"use strict";

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = "";
            $scope.showDetails = false;
            $scope.showMenu = false;
            $scope.message = "Loading ...";
            
            menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    
                    console.log("estamos aki 1");
                    var _feedback = new feedbackFactory();
                            
                    _feedback.firstName = $scope.feedback.firstName;
                    _feedback.lastName = $scope.feedback.lastName;
                    _feedback.tel = $scope.feedback.tel;
                    _feedback.email = $scope.feedback.email;
                    _feedback.agree = $scope.feedback.agree;
                    _feedback.mychannel = $scope.feedback.mychannel;
                    _feedback.comments = $scope.feedback.comments;
                            
                    _feedback.$save(function(){
                                
                        console.log(_feedback);
                                
                        $scope.invalidChannelSelection = false;
                        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                        $scope.feedbackForm.$setPristine();
                        console.log($scope.feedback);
                    });
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            $scope.predicate = "";
            $scope.showDish = false;
            $scope.message="Loading ...";
            
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
                .$promise.then(
                function(response){
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
            
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            //Step 1: Create a JavaScript object to hold the comment from the form
            $scope.dishComment = { rating:5, comment:"", author:"", date:"" };
            
            $scope.submitComment = function () {
                
                console.log($scope.dishComment);
                
                //Step 2: This is how you record the date
                //"The date property of your JavaScript object holding the comment" = new Date().toISOString();
                $scope.dishComment.date = new Date().toISOString();
                
                // Step 3: Push your comment into the dish's comment array
                $scope.dish.comments.push(  {
                                                rating: parseInt($scope.dishComment.rating,10),
                                                comment: $scope.dishComment.comment,
                                                author: $scope.dishComment.author,
                                                date: $scope.dishComment.date
                                            });
                
                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                
                //Step 4: reset your form to pristine
                $scope.commentForm.$setPristine();
                console.log($scope.feedback);
                
                //Step 5: reset your JavaScript object that holds your comment
                $scope.dishComment = { rating:5, comment:"", author:"", date:"" };
            };
        }])
        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {

            $scope.showDish = false;
            $scope.showPromotion = false;
            $scope.showExecutiveChef = false;
            $scope.messageDish="Loading ...";
            $scope.messagePromotion="Loading ...";
            $scope.messageExecutive="Loading ...";
            
            $scope.dish = menuFactory.getDishes().get({id:0})
                .$promise.then(
                function(response){
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.messageDish = "Error: "+response.status + " " + response.statusText;
                }
            );
            
            $scope.promotion = menuFactory.getPromotion().get({id:0})
                .$promise.then(
                function(response){
                    $scope.promotion = response;
                    $scope.showPromotion = true;
                },
                function(response){
                    $scope.messagePromotion = "Error: "+response.status + " " + response.statusText;
                }
            );

            $scope.executiveChef = corporateFactory.getLeaderShipes().get({id:3})
                .$promise.then(
                function(response){
                    $scope.executiveChef = response;
                    $scope.showExecutiveChef = true;
                },
                function(response){
                    $scope.messageExecutive = "Error: "+response.status + " " + response.statusText;
                }
            );
        }])
        
        .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory){
            
            $scope.message2="Loading ...";
            $scope.showLeaderShipes = true;
            
            $scope.leaderShipes = corporateFactory.getLeaderShipes().query(
                function(response){
                    $scope.leaderShipes = response;
                    $scope.showLeaderShipes = true;
                },
                function(response){
                    $scope.message2 = "Error: "+response.status + " " + response.statusText;
                }
            );
        }]);