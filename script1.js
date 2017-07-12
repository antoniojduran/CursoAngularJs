function AlumnosController ($scope) {
        $scope.alumnos = [
                      {nombre:"Marlenis Rivas", telefono : "04245160499" , curso : "TSU"},
                      {nombre:"Antonio Duran", telefono : "04245286139" , curso : "Ing Informatica"},                      
                      {nombre:"Raul Fernandez", telefono : "04245555555" , curso : "Posgrado"}
                      {nombre:"Antonio Duran", telefono : "04245555555" , curso : "Especializacion"}
        ];

       $scope.Save=function(){

       	$scope.alumnos.push ({nombre:$scope.nuevoAlumno.nombre,telefono:$scope.nuevoAlumno.telefono,curso:$scope.nuevoAlumno.curso});
       	$scope.formVisibility = false;
       };

       $scope.formVisibility = false;

       $scope.ShowForm=function(){
       	$scope.formVisibility = true;
       };
}