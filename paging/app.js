var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope){
	$scope.students = students;
	$scope.pagesizes = [5, 10, 15, 20];
	$scope.pagesize = $scope.pagesizes[0];//jumlah baris dalam 1 halaman
	$scope.currentpage = 0;//lokasi halaman saat ini
	$scope.pagenumber = Math.ceil($scope.students.length / $scope.pagesize);//jumlah total halaman

	$scope.paging = function (type){
		if (type == 0 && $scope.currentpage > 0){
			--$scope.currentpage;
		}else if (type == 1 && $scope.currentpage < $scope.pagenumber-1){
			++$scope.currentpage;
		}
	}

	$scope.$watchCollection('results', function (){
		if ($scope.results == undefined) return;
		$scope.currentpage = 0;
		$scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);		
	});

	$scope.changeAction = function (){
		$scope.currentpage = 0;
		$scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
	}

	$scope.ordering = function (ordvar, by){
		ordvar = !ordvar;
		$scope.ordstatus = ordvar;
		$scope.ord = by;
		return ordvar;
	}

});


var students = [{
		name: 'Jajang',
		class: '1A',
		score: 40
	},{
		name: 'Saepudin',
		class: '1A',
		score: 43
	},{
		name: 'Suhendar',
		class: '1A',
		score: 57
	},{
		name: 'Karsono',
		class: '1B',
		score: 32
	},{
		name: 'Darsum',
		class: '1B',
		score: 60
	},{
		name: 'Nono',
		class: '1B',
		score: 51
	},{
		name: 'Dianto',
		class: '1C',
		score: 51
	},{
		name: 'Yadi',
		class: '1C',
		score: 40
	},{
		name: 'Wasna',
		class: '1C',
		score: 43
	},{
		name: 'Caswi',
		class: '1A',
		score: 40
	},{
		name: 'Caswa',
		class: '1A',
		score: 44
	},{
		name: 'Carsem',
		class: '1A',
		score: 54
	},{
		name: 'Engkus',
		class: '1B',
		score: 43
	},{
		name: 'Koswara',
		class: '1B',
		score: 55
	},{
		name: 'Jumasih',
		class: '1B',
		score: 53
	},{
		name: 'Wasdi',
		class: '1C',
		score: 54
	},{
		name: 'Carkim',
		class: '1C',
		score: 44
	},{
		name: 'Turisah',
		class: '1C',
		score: 41
	},{
		name: 'Darwa',
		class: '1A',
		score: 42
	},{
		name: 'Ujang',
		class: '1A',
		score: 42
	},{
		name: 'Tarmedi',
		class: '1A',
		score: 52
	},{
		name: 'Dawiti',
		class: '1B',
		score: 33
	},{
		name: 'Jumsa',
		class: '1B',
		score: 33
	},{
		name: 'Waryo',
		class: '1B',
		score: 50
	},{
		name: 'Budi',
		class: '1C',
		score: 50
	},{
		name: 'Tarsa',
		class: '1C',
		score: 42
	},{
		name: 'Asep',
		class: '1C',
		score: 42
	}


	];