// JavaScript
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};

require.config( {
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
} );


//require( ["js/qlik", "./qBlob.js"], function ( qlik, qBlob )  {
require( ["js/qlik"], function ( qlik ) {
window.qlik = qlik;

	
	qlik.setOnError( function (error) {
		console.log(error);
	});
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		qlik.resize();
		
	});
	//qlik app
	var app ;
	//data for case listing
	
	

	function getQlikApp () {
	
		return qlik.openApp( "appid", config );
				

		
	}
	
		

	//callbacks -- inserted here 
	

	//
	// Defining Module
	//
	var helpdeskApp = angular.module( "helpdeskApp", ['ngRoute'] );
	
	//
	// Defining Routes
	//
	
	helpdeskApp.config( function ( $routeProvider ) {
		$routeProvider.when( '/Summary', {
			templateUrl: 'Summary.html',
			controller: 'SummaryCtrl'
		} )
		
		
		.when( '/Base1', {
			templateUrl: 'Base1.html',
			controller: 'Base1Ctrl'
		} )
		
		.when( '/Base2', {
			templateUrl: 'Base2.html',
			controller: 'Base2Ctrl'
		} )
		.when('/',{
        	templateUrl: 'Summary.html',
			controller: 'SummaryCtrl'
        })
		
		 .otherwise({
               redirectTo: '/Summary'
        });
	} );
	
		$(document).on("click",".export-btn", function(){
				     let str = $(this).parent().closest(".chart-header").next().find(".qv-inner-object").find("header").attr("id");
				
					 
					let ObjectId = str.replace("_title", "");
					exportData(ObjectId);
				});
				
				
	function exportData(objId){
	  
	app.getObject(objId).then(function(model){
	var table = qlik.table(model);
	table.exportData().then(function(reply){
	window.open(prefix.substring(0,prefix.length - 1)+reply.result.qUrl,"_blank");
	});
	table.exportData({download:true,filename:'data'});
	
	
	});
	
	}
	
	
	//controllers
	helpdeskApp.controller( "SummaryCtrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}
		//get objects -- inserted here --
		
	 
		
		
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		qlik.resize();
	});
	
	
			app.getObject('qfilter','kspFNZy');
		
	app.getObject( 'QV00', 'CurrentSelections' );
	
	//app.getObject('KPI05','kbJeuz');
	//app.getObject('KPI04','acpQTu');
	app.getObject('KPI03','tcNPYM');
	app.getObject('KPI02','CqpfVQu');
	app.getObject('KPI01','YquPuP');
	
	app.getObject('QV-02','fxyuxvp');
	app.getObject('QV-01','cXahBQ');

	

	
	
		$( "[data-qcmd]" ).on( 'click', function () {
			var $element = $( this );
			switch ( $element.data( 'qcmd' ) ) {
				//app level commands
				case 'page1':
					page1();
					break;
				case 'page2':
					page2();
					break;					
				case 'clearAll':
					app.clearAll();
					break;
				
			}
		} );
	
	
	
	
		var visList = [];
	
	page1();
	function page1() {
		cleanup();
		// using app.visualization.get instead of app.getObject
		app.visualization.get('vCNaSe').then(function(vis){vis.show('QV1-03');visList.push(vis);});
		app.visualization.get('MEAjCJ').then(function(vis){vis.show('QV1-02');visList.push(vis);});
		app.visualization.get('qamd').then(function(vis){vis.show('QV1-01');visList.push(vis);});
	}
	
	function page2() {	
		cleanup();
		// using app.visualization.get instead of app.getObject
		app.visualization.get('KnASd').then(function(vis){vis.show('QV1-03');visList.push(vis);});
		app.visualization.get('dcksUYY').then(function(vis){vis.show('QV1-02');visList.push(vis);});
		app.visualization.get('akDGX').then(function(vis){vis.show('QV1-01');visList.push(vis);});
	}	

	function cleanup(){
		visList.forEach(function(vis){
			vis.close().then(function(ret){console.log('closed ' + vis.id);});
		});
		visList = [];
	}
	
	
	qlik.resize();
	
	}] );
	
	
	
	
	
	
	
	
		//Product_Analysis
	helpdeskApp.controller( "Base1Ctrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}	//get objects -- inserted here --
		
		
		
	
			app.getObject('qfilter','kspFNZy');
		app.getObject( 'QV00', 'CurrentSelections' );
		
	app.getObject('KPI09','efd17852-3edc-48df-bbad-19b4ea123bc7');
	
	
	app.getObject('KPI08','2950d60f-4a28-491a-8f21-a4081bdef94c');
	
	
	app.getObject('KPI07','7006d92c-8770-4616-b4d5-eeb2c9175e01');
	app.getObject('KPI06','0634ea0d-50b0-49a1-af6f-688e4405da8c');
	app.getObject('QV-05','QaqJ');
	app.getObject('QV-04','LcaECq');
	app.getObject('QV-03','YzxGRem');

	
	
	
	
	qlik.resize();
	
	
	}] );
	
	
		//Order_Commissioning
	helpdeskApp.controller( "Base2Ctrl", ['$scope', function ( $scope ) {
		if ( !app ) {
			app = getQlikApp();
		}	//get objects -- inserted here --
		
	
			app.getObject('qfilter','BfSqyC');
		app.getObject( 'QV00', 'CurrentSelections' );
		
		app.getObject('QV1-08','qEqbcMm');
	app.getObject('QV1-09','LXAaTP');
		app.getObject('QV1-10','TqwwFf');
		
	
	
	
	$('#a8').click(function(e){
	exportData("gnGZnKK");
	
	});
	
	$('#a9').click(function(e){
	exportData("pwJj");
	
	});
	
	

	/*
		$("#save08").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-08', 'chart.jpg');
	});
	
		$("#save09").click(function(e) {
	  e.preventDefault();
	  qBlob.saveToFile('QV1-09', 'chart.jpg');
	});*/
	
	qlik.resize();
	
	}] );
	
	
	angular.bootstrap( document, ["helpdeskApp", "qlik-angular"] );
	qlik.setOnError( function ( error ) {
		//TODO:bootstrap removes html elements on dismiss..should hide instead
		$( "#errmsg" ).html( error.message ).parent().show();
	} );

	//

} );
