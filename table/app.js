var app = angular.module('xapp', []);

app.controller('xctrl', function ($scope){
	$scope.categories = ['Nama', 'Kelas', 'Nilai'];
	$scope.students = [{
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
	}]
});