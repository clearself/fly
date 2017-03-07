angular.module('controllers',[])
.controller('formCtr',['$scope',function ($scope) {
		console.log($scope);
        $scope.text = 'me@example.com';
        $scope.userName = 'word';
        $scope.word = /^\s*\w*\s*$/;
      
}])
.controller('indexCtr',function($scope){
	$scope.caidans = [
			{title:'/',name:'markdown笔记'},
			{title:'/computers',name:'网页笔记'}
//			{title:'/printers',name:'打印机'},
//			{title:'/form',name:'表单提交'},
//			{title:'/blabla',name:'其他'}
			
	]
   			
 })
.controller('indexPageCtr',function($scope,indexServices){
	$scope.data = [
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"},
				{"title":"windows server 2008R2 搭建ftp环境","description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。","dateline":"2017-03-02"}
				
	]
	$scope.pageIndex = 1;
	$scope.pageSize = 10;
	$scope.totalPage = 1;
	$scope.pageShow = false;
	
	$scope.items = [];
	$scope.pageTip =$scope.pageIndex+'/'+$scope.totalPage;
	$scope.render=function(){
		$scope.items = [];
		for(var i=($scope.pageIndex-1)*$scope.pageSize;i<$scope.pageIndex*$scope.pageSize;i++){
			if(i>=$scope.data.length){
				return;
			}
			$scope.items.push($scope.data[i]);
		}
		$scope.pageTip = $scope.pageIndex+'/'+$scope.totalPage;
	}
	$scope.totalPage = Math.ceil($scope.data.length/$scope.pageSize);
		if($scope.totalPage>1){
			$scope.pageShow = true;
	}
	$scope.render();
   $scope.prev=function(){
		$scope.pageIndex --;
		if($scope.pageIndex<=0){
			$scope.pageIndex=1;
			alert('已经是第一页了');
			return;
		}
		$scope.render();
		$scope.pageTip =$scope.pageIndex+'/'+$scope.totalPage;
	}
	$scope.next=function(){
		$scope.pageIndex ++;
		if($scope.pageIndex>$scope.totalPage){
			$scope.pageIndex=$scope.totalPage;
			alert('已经是最后一页了');
			return;
		}
		$scope.render();
		$scope.pageTip =$scope.pageIndex+'/'+$scope.totalPage;
	}
   	
 })
.controller('fenLeiCtr',function($scope){
   			console.log($scope);
})
.controller('printerCtr',function($scope){
   		console.log($scope);
});
