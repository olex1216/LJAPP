"use strict";var app=angular.module("app",["ui.router"]);angular.module("LJapp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(r,e){r.state("main",{url:"/main",templateUrl:"views/main.html",controller:"mainCtrl"}),e.otherwise("main")}]),angular.module("app").directive("appFoot",[function(){return{restrict:"EA"}}]),angular.module("app").directive("appHead",["",function(){return{restrict:"EA",replace:!0,templateUrl:"views/template/head.html",link:function(r,e,t,a){}}}]),angular.module("app",[]).controller("mainCtrl",["",function(){}]);