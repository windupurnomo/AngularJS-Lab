function xctrl($scope){
	$scope.cities = cities;
	$scope.selectAction = function (){
		alert("id: " + $scope.selectedCity.id + "\nkota: " + $scope.selectedCity.kota);
	}
}

var cities = [
	{
		id: 1,
		provinsi: 'Jawa Barat',
		kota: 'Bandung'
	},{
		id: 2,
		provinsi: 'Jawa Barat',
		kota: 'Bogor'
	},{
		id: 3,
		provinsi: 'Jawa Barat',
		kota: 'Cianjur'
	},{
		id: 4,
		provinsi: 'Jawa Barat',
		kota: 'Banjar'
	},{
		id: 5,
		provinsi: 'Jawa Tengah',
		kota: 'Cilacap'
	},{
		id: 6,
		provinsi: 'Jawa Tengah',
		kota: 'Semarang'
	},{
		id: 7,
		provinsi: 'Jawa Tengah',
		kota: 'Magelang'
	},{
		id: 8,
		provinsi: 'Jawa Tengah',
		kota: 'Banyumas'
	}
];