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
			{title:'/zpdemo',name:'作品案例'}
//			{title:'/printers',name:'打印机'},
//			{title:'/form',name:'表单提交'},
//			{title:'/blabla',name:'其他'}
			
	]
   			
 })
.controller('indexPageCtr',function($scope){
	$scope.data = [
				{
					"title":"Git命令、Github Pages搭建博客 基本操作",
					"description":"相信每个人都想拥有一个自己的个人博客或者网站,那么Github Pages绝对是一个不错的选择,使用Git来管理自己的代码版本,如果你是一个程序猿,竟然还不知道到Git、Github,那么你肯不是一个标准的程序猿,这个用的东西一定要先收藏起来。撸起你的袖子,Go!Go!Go! ",
					"link":"https://clearself.github.io/fly/markdown/git.html",
					"dateline":"2017-03-08"
				},
				{
					"title":"windows server 2008R2 x64服务器 搭建PHP环境",
					"description":"windows server 2008R2 x64位服务器上搭建PHP环境,1、安装IIS;2、安装V11;3、安装CGI;4、安装php;5、配置php.ini文件.",
					"link":"https://clearself.github.io/fly/markdown/setPHP.html",
					"dateline":"2017-03-07"
				},
				{
					"title":"windows server 2008R2 搭建ftp环境",
					"description":"初次搭建ftp服务环境时也多少遇到一些坑，下面就根据我的经验简单的介绍一下搭建的过程，以免再次搭建遇到相同的问题。",
					"link":"https://clearself.github.io/fly/markdown/setFtp.html",
					"dateline":"2017-03-07"
				}
				
				
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
   			$scope.data = [
				{"title":"微信场景案例","description":"微信场景案例使用到fullPage.js框架整屏滑动,css3动画","link":" https://clearself.github.io/h5since/","dateline":"2017-03-07"}
				
				
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
});
