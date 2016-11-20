var app = angular.module("app",['ngRoute']);			
app.controller("all",function($scope,$http,$filter){
 		$http.get("data/getAllSubjects.json").success(function(data){
				$scope.getAllSubjects = data;
				//alert("yes");
			}).error(function(){
				alert("no");
			});	
		
		//获取题型
		$http.get("data/getAllSubjectType.json").success(function(data){
			$scope.getAllSubjectType = data;
			// alert("ues");	
		}).error(function(){
			alert("no")
		});
		//获取方向
		$http.get("data/getAllDepartmentes.json").success(function(data){
			$scope.getAllDepartmentes = data;
			// alert("2es");
		}).error(function(){
			alert("no")
		});
		// 获取难易程度
		$http.get("data/getAllSubjectLevel.json").success(function(data){
			$scope.getAllSubjectLevel = data;
			// alert("3es");	
		}).error(function(){
			alert("no")
		});
		// 获取知识点
		$http.get("data/getAllTopics1.json").success(function(data){
			$scope.getAllTopics = data;
			//alert("4es");
		}).error(function(){
			alert("no4")
		});


	//筛选
	// typeA:'',depA:'',levelA:'',topicsA:''
	$scope.obj = {};
	// 创建一个对象保存，你想所需的需求       
	$scope.update = function(a,id){
		//a来接住参数传来的值
		// $scope.obj去option。json找信息，所以type，department，level，topics从这里面找
		//而id
		console.log(a);
		console.log(id);
		if(a=='type'){
			$scope.obj.subjectType= {id:id}
		}else if(a=='dep'){
			$scope.obj.department = {id:id}
		}else if(a=='level'){
			$scope.obj.subjectLevel = {id:id}
		}else if(a=='topics'){
			$scope.obj.topic = {id:id}
		} 
	}
});    	


app.controller("message1-2",function($scope,$http){
})
//添加
app.controller("addmessage",function($scope,$http){
	//获取题型
		$http.get("data/getAllSubjectType.json").success(function(data){
			$scope.getAllSubjectType = data;
			// alert("ues");	
		}).error(function(){
			alert("no")
		});
		//获取方向
		$http.get("data/getAllDepartmentes.json").success(function(data){
			$scope.getAllDepartmentes = data;
			// alert("2es");
		}).error(function(){
			alert("no")
		});
		// 获取难易程度
		$http.get("data/getAllSubjectLevel.json").success(function(data){
			$scope.getAllSubjectLevel = data;
			// alert("3es");	
		}).error(function(){
			alert("no")
		});
		// 获取知识点
		$http.get("data/getAllTopics1.json").success(function(data){
			$scope.getAllTopics = data;
			//alert("4es");
		}).error(function(){
			alert("no4")
		});

	//创建一个空对象，在addmessage.html中再给你想要的type.dep,,level,topis信息，ng-model='user.type'
	//就在对象user中创建了属性type
	$scope.user = {};
	//保存题目信息
	$scope.saveDate = function(){
		//打印出题目信息，即user对象的内容
		// console.log($scope.user);
		// alert("保存成功")

    	$http({
			url : "data/getAllSubjects.json",
			method : "POST",
			user:{}
		}).success(function(){
			alert('提交成功！');
		}).error(function(){
			alert('提交失败');
		})


	}
	$scope.saveExit = function(){	
	}
})
app.config(function($routeProvider){
	$routeProvider.when("/all",{
		// 全部题目的路由
		templateUrl : "tpl/message1-1.html",
		controller : 'all'
	}).when("/message1-2",{
		// 全部题目的路由
		templateUrl : "tpl/message1-2.html",
		controller : 'message1-2'
	}).when("/addmessage",{
		// 全部题目的路由
		templateUrl : "tpl/addmessage.html",
		controller : 'addmessage'
	}).otherwise({
				redirectTo : "/"
			});
	});
 
