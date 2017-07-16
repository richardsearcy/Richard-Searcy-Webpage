angular.module('rswebdesignApp')

        .controller('MenuCollapse', function ($scope) {
            $scope.isNavCollapsed = true;
        })

        .controller('IndexController', ['$scope', function ($scope) {

        }])

        .controller('PortfolioController', ['$scope', '$uibModal', function ($scope, $uibModal) {

            $scope.animationsEnabled = true;

            $scope.open = function (item) {

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'views/partials/'+item+'.html',
                    controller: 'ModalInstanceCtrl'
                });
            };

            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
        }])

        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

                $scope.ok = function () {
                    $uibModalInstance.close();
                };

                $scope.close = function () {
                    $uibModalInstance.dismiss('close');
                };
        }])

        .controller('ContactController', ['$scope', function ($scope) {
                $scope.contact = {
                    name: "",
                    email: "",
                    tel: "",
                    website: false,
                    webaddress: "",
                    message: ""
                };

                $scope.webaddressRequired = false;
            }])

        .controller('MessageController', ['$scope', function ($scope) {
                // Called when the contact form is submitted
                $scope.sendMessage = function () {
                    console.log($scope.contact);

                    // If 'Do you have a website' is checked but webaddress is empty...
                    if ($scope.contact.website && ($scope.contact.webaddress === "")) {
                        $scope.webaddressRequired = true;
                        console.log('incorrect');
                    } else {
                        $scope.webaddressRequired = false;

                        $scope.contactForm.$setPristine();

                        $scope.contact = {
                            name: "",
                            email: "",
                            tel: "",
                            website: false,
                            webaddress: "",
                            message: ""
                        };
                    }

                    console.log($scope.contact);
                };
            }])

        ;


