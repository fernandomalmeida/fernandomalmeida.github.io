var app = angular.module("bibliografiaApp", []);

app.controller("documentoController", function($scope, $http){
	var site = "http://bibliografia-fernandomalmeida.rhcloud.com/";
	var api = "/api/documento";

	$scope.documento = {
		titulo: "Teste",
		ano: "",
		autores: "Fulano de Tal, Cicrano Bagunca",
		resumo: "Bla bla bla Bla bla bla Bla bla bla Bla bla bla",
		palavrasChave: "Teste, AngularJS, Sem Bootstrap",
	}

	$scope.salvar = function(documento){
		console.log(documento);
		var documentoJSON = JSON.stringify(documento);
		console.log(documentoJSON);

		$http({
			url: site+api,
			method: "POST",
			data: documentoJSON,
			headers: {'Content-Type': 'application/json'}
		}).success(function(response){
			console.log(response);
			alert("Documento \""+response.titulo+"\" adicionado com id "+response.id+" com sucesso!");
			$scope.reset();
		});
	};

	$scope.reset = function(){
		$scope.documento = {
			titulo: "",
			ano: "",
			autores: "",
			resumo: "",
			palavrasChave: "",
		}
	}
});