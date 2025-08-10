<!doctype html>
<html qva-bootstrap="false">
<head>


  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Consumer Sales Dashboard</title>
    <meta name="description" content="Acturial Dashboard">

    <link rel="apple-touch-icon" href="apple-icon.png">
    <link rel="shortcut icon" href="favicon.ico">
	
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acturial Dashboard</title>
		
		
  <script src="https://echarts.apache.org/en/js/vendors/echarts/dist/echarts.min.js"></script>
  <script src="https://echarts.apache.org/en/js/vendors/echarts-gl/dist/echarts-gl.min.js"></script>
		<script src="../../resources/assets/external/requirejs/require.js"></script>
    <link rel="stylesheet" href="POC_Humesh.css">
    
    <!-- External Libraries -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
	<script src="main.js"></script>
	
	 <link rel="stylesheet" href="chatbot.css">
</head>
<body style=" font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;">

<div class="loader-container" style="">

<div class="loader" style="">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div> <!-- Loader element -->
</div>
    <!-- Sidebar -->
    <div id="sidebar" class="sidebar">
        <div class="sidebar-header">
            <div class="logo">
                <i class="fas fa-chart-line"></i>
                <span class="logo-text">Actuarial Dashboard</span>
            </div>
            <button id="hamburger" class="hamburger-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        
        <nav class="sidebar-nav">
            <ul>
			
                   <a href="#!Summary" > 
				   <li class="nav-item active" title="Summary" data-tab="Summary">
                     <i class="fas fa-tachometer-alt"></i>
					<span class="nav-text">Summary</span>
					</li></a>
               <a href="#!Base1" >  <li class="nav-item"  title="Base Sheet" data-tab="Base Sheet">
                      <i class="fas fa-users"></i>
					 <span class="nav-text">Base Sheet</span>
					 </li></a>
					 <!--
				<a href="#!Base2" > <li class="nav-item"  title="Base2" data-tab="Base2">
                     <i class="fas fa-chart-bar"></i>
					 <span class="nav-text">Base Sheet2</span>
					 </li></a>
             -->
            </ul>
        </nav>
    </div>

    <!-- Main Content -->
    <div id="main-content" class="main-content">
        <!-- Header -->
        <header class="header">
		<div class="header-main">
		
            <div class="header-left">
                <h1 id="page-title">Summary</h1>
                <p id="page-subtitle">Real-time analytics and insights</p>
            </div>
            <div class="header-right">
                <!-- Filter Toggle Button -->
                <button class="filter-toggle-btn" id="header-filter-toggle" title="Toggle Filters" >
                    <i class="fas fa-filter"></i>
                    <span>Filters</span>
                </button>
                
                <!-- Qlik Sense Selection Tools -->
                <div class="selection-tools">
                    <button class="tool-btn" id="backward-btn" title="Backward" data-qcmd = "back">
                        <i class="fas fa-arrow-left"></i>
                    </button>
                    <button class="tool-btn" id="forward-btn" title="Forward" data-qcmd = "forword">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <button class="tool-btn" id="lock-btn" title="Lock Selections" data-qcmd = "lockAll">
                        <i class="fas fa-lock"></i>
                    </button>
                    <button class="tool-btn" id="unlock-btn" title="Unlock Selections" data-qcmd = "unlockAll">
                        <i class="fas fa-unlock"></i>
                    </button>
                    <button class="tool-btn" id="clear-btn" title="Clear All Selections" data-qcmd = "clearAll">
                        <i class="fas fa-times"></i>
                    </button>
					<button class="tool-btn" id="curr_Selections" title="selection box" >
                        <i class="fas fa-bell"></i><span id="selectionsnotification"></span>
                    </button>
				
					
                </div>
				 <div class="logo-container">
					<a href="#">
                        ABC
                    </a>
					</div>
            </div>
			
			</div>
				
			 <div class="container-selection"> 
						  <div class="items">
							<div id="selections">
							 
							</div>
						  </div>
						</div>
        </header>

        <!-- Filter Panel -->
		
						
        <div class="filter-panel">
            <div class="filter-header">
                <i class="fas fa-filter"></i>
                <span>Filters</span>
                <button class="filter-toggle" id="filter-toggle"style="display:none;">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="filter-content" id="filter-content">
                <div class="filter-group" id="qfilter">
                   
                </div>
               
            </div>
        </div>

        <!-- Tab Content -->
        <div class="tab-content" ng-view>
     
        </div>
    </div>
	<!--
	<div class="qvobject" id="chat-bot" style="width:1px;height:1px;">
	
	</div>
-->


    <!-- Fullscreen Modal -->
    <div id="fullscreen-modal" class="fullscreen-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modal-title">Chart</h3>
                <button class="modal-close" onclick="closeFullscreen()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <canvas id="modal-chart"></canvas>
            </div>
        </div>
    </div>
	
	
	
	
	
	<!--chatbot html-->



	
	
	
	<div class="qlik-chatbot-extension">
    <!-- Chatbot Toggle Button -->
    <div class="chatbot-toggle" title="Open AI Assistant">
        <div class="chatbot-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <path d="M8 11H11V14H8V11ZM13 11H16V14H13V11Z" fill="currentColor"/>
                <path d="M8 16H16V18H8V16Z" fill="currentColor"/>
            </svg>
        </div>
        <div class="pulse-ring"></div>
    </div>
	
    <!-- Chatbot Container -->
    <div class="chatbot-container">
		
        <div class="chatbot-header">
            <div class="header-content">
                <div class="app-info">
                    <span class="app-icon">📊</span>
                     <span class="app-name" id="appName"></span>
                </div>
                <div class="header-controls">
                    <select class="role-select">
                        <option value="Analyst">Analyst</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Executive">Executive</option>
                    </select>
                    <button class="download-history" title="Download Chat History">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 9H15L12 12L9 9H5V19H19V9Z" fill="currentColor"/>
                            <path d="M5 5V7H19V5H5Z" fill="currentColor"/>
                        </svg>
                    </button>
                    <button class="chatbot-close" title="Close">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="chatbot-body">
            <div class="chat-messages"></div>
            
            <div class="quick-actions">
                <button class="quick-action" onclick="this.closest('.qlik-chatbot-extension').querySelector('.chat-input').value='Show me a summary of the data';  ">
                    📈 Data Summary
                </button>
                <button class="quick-action" onclick="this.closest('.qlik-chatbot-extension').querySelector('.chat-input').value='What are the key insights in short?';  ">
                    💡 Key Insights
                </button>
                <button class="quick-action" onclick="this.closest('.qlik-chatbot-extension').querySelector('.chat-input').value='Create a chart showing line chart for top 10 data';   ">
                    📊 Create Chart
                </button>
                <button class="quick-action" onclick="this.closest('.qlik-chatbot-extension').querySelector('.chat-input').value='Show me a pie chart of the data for top 10 Data';    ">
                    🥧 Pie Chart
                </button>
                <button class="quick-action" onclick="this.closest('.qlik-chatbot-extension').querySelector('.chat-input').value='Display a bar chart for top10 data';   ">
                    📊 Bar Chart
                </button>
                <button class="quick-action" onclick="this.closest('.qlik-chatbot-extension').querySelector('.chat-input').value='compare the data with';  ">
                    🗂️ compare
                </button>
            </div>
        </div>

        <div class="chatbot-footer">
            <div class="input-container">
				<div id="suggestionBox"></div>
                <input type="text" class="chat-input"  id="commandInput" placeholder="Enter your prompt here and click the 'Send'.
Shortcuts: @ for tools" autocomplete="off"  maxlength="500">
			
                <button class="voice-button" title="Voice Input">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" fill="currentColor"/>
                        <path d="M19 10V12C19 16.42 15.42 20 11 20H13C17.42 20 21 16.42 21 12V10H19Z" fill="currentColor"/>
                        <path d="M5 10V12C5 16.42 8.58 20 13 20H11C6.58 20 3 16.42 3 12V10H5Z" fill="currentColor"/>
                        <path d="M11 22H13V24H11V22Z" fill="currentColor"/>
                    </svg>
                </button>
                <button class="send-button" title="Send Message">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            <div class="footer-info">
                <span class="powered-by">Powered by OpenAI & Highcharts</span>
            </div>
        </div>
    </div>
</div>

    <!-- Scripts -->
	
    <script src="data_generator.js"></script>
    <script src="POC_Humesh.js"></script>
	
	
	
	
   <script>
   
   
   let dataObj;
   
       // Fetch the JSON file
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON
      })
      .then(data => {
        // Do something with the data
       
		dataObj = data;
		
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
        document.getElementById('jsonData').textContent = 'Error loading data.';
      });
   
$(document).ready(function() {
    // Show the loader on page load
    // Function to check for the presence of the .qv-inner-object class
    function waitForElement(selector) {
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                if ($(selector).length > 0) {
                    clearInterval(interval); // Stop checking
                    resolve(); // Resolve the promise
                }
            }, 500); // Check every 500 milliseconds

            // Optional: Set a timeout to reject the promise if the element doesn't load
            setTimeout(() => {
                clearInterval(interval);
                reject(new Error("Element not found within the timeout period."));
            }, 10000); // 10 seconds timeout
        });
    }

    // Use the promise to hide the loader when the element is found
    waitForElement('.qv-inner-object')
         .then(() => {
            console.log("Element with class 'qv-inner-object' has loaded.");
            // Wait for 2 seconds before hiding the loader
            setTimeout(() => {
                $('.loader-container').hide(); // Hide the loader
            }, 2000); // 2 seconds delay
        })
        .catch((error) => {
            console.error(error.message);
            // Optionally handle the case where the element did not load
            $('.loader-container').hide(); // Hide the loader even if the element is not found
        });
});


 
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});


//require( ["js/qlik", "./qBlob.js"], function ( qlik, qBlob )  {
require( ["js/qlik"], function ( qlik )  {
	window.qlik = qlik;
	

		qlik.getThemeList().then((qtheme) => {
			  console.log('Theme background color: ' + JSON.stringify(qtheme));
		});
	
	qlik.theme.apply('colors').then(function(result){


});



 $(document).ready(function() {
 
  


$(document).on("click", ".fullscreen-btn", function(){

                const chartContainer = $(this).parent().closest('.chart-container');
                const icon = $(this).find('i');

                // Toggle the active class on the chart container
                chartContainer.toggleClass('active');
					qlik.resize();

                // Change the icon based on the active state
                if (chartContainer.hasClass('active')) {
                    icon.removeClass('fa-expand').addClass('fa-compress'); // Change to compress icon
                } else {
                    icon.removeClass('fa-compress').addClass('fa-expand'); // Change back to expand icon
                }
            
});
});
 


	qlik.setOnError( function (error) {
		console.log(error);
	});
	
	/*$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		qlik.resize();
	});*/
	

   var app= qlik.openApp( "appid", config );


			//replace( /T/, ' ' ).replace( /Z/, ' ' )    "+strTime
	
	
	
	
	
	
	
			//app2.getObject('chat-bot','fBSC');
	
	

	var global = qlik.getGlobal();

    global.getAuthenticatedUser(function (reply) {

        console.log("reply",reply);

        console.log('User:', reply.qReturn);

    });
			app.getObject('qfilter','PewkLk');
			//app.getObject('refresh','XsPpM');
		 app.getList("SelectionObject", function(reply) {

        $("#selectionsnotification").hide();
        $selections = $("#selections"); //DOM node to append selections to
        $selections.html(""); //Clear node of any previous selections
        var fields = []; //Empty Array
        var fieldssel = 0; //initialize variable

       /* if (reply.qSelectionObject.qSelections.length === 0) {
            $("#selections").css("visibility", "hidden");
        } else {
            $("#selections").css("visibility", "visible");
        }*/



        //Loop through array of fields that have selections
        $.each(reply.qSelectionObject.qSelections, function(key, value) {

            var field = value.qField; //The field name
            var numSelected = value.qSelectedCount; //Number of selections in field
            var total = value.qTotal; //Total number of values in field
            var threshold = value.qSelectionThreshold - 4; //Threshold in which to display a number count instead of each value
            var selectedStr = value.qSelected; //When numSelected is less than or equal to threshold, a string of the names of each value selected

            fields.push(field);
            var fieldssel = fields.length;
            $("#selectionsnotification").html(fieldssel);
            $("#selectionsnotification").show();


            var array = selectedStr.split(",");





							  
							  

            //If numSelected is below or equal to threshold, show string of names of each value selected
            if (numSelected <= threshold) {

                var html = "";

                html += "<div class='items-body-content' id='" + field + "'>";
               
			   var div = "";
			   div += "<div class='selList' >";
                
				
                

                $.each(array, function(i) {
                    console.log(array[i]);
                    div += ' <span class="label label-sm label-icon label-warning selectedelements"> ' + array[i] + ' </span> ';
                });
				
				div += '<span class="details "> ' + field + ' </span> </div>';
				
				html += div;
				
		
				
				 html += "<a href='javascript:;' class='clear-field'>";
                html += ' <span class="time"><i class="fa fa-close"></i></span>';


                $selections.append(html);
            }

            // If numSelected is greater than threshold, show the numSelected of total values
            else {

                var html = "";
              	 html += "<div class='items-body-content' id='" + field + "'>";
     			
				var div = "";
				div += "<div class='selList' >";
                
				
               
                div += ' <span class="label label-sm label-icon label-warning selectedelements">&nbsp;' + numSelected + ' of ' + total + ' &nbsp; </span>';
				 div += '<span class="details "> ' + field + ' </span>  </div>';
				html += div;
				
				html += "<a href='javascript:;' class='clear-field'>";
                html += ' <span class="time"><i class="fa fa-close"></i></span>';

                $selections.append(html);
            }

        });
		
		$(".clear-field").click(function() {
            //console.log($(this).parent().attr("id"));
            var field = $(this).parent().attr("id");
            app.field(field).clear();
        });

    });
	
	
	$(".clear").click(function(){
		app.clearAll();
	});
	
	
	
	
	
	
	
	
	$( "[data-qcmd]" ).on( 'click', function () {
			var $element = $( this );
			switch ( $element.data( 'qcmd' ) ) {
				//app level commands
				case 'clearAll':
					app.clearAll();
					break;
				case 'back':
					app.back();
					break;
				case 'forward':
					app.forward();
					break;
				case 'lockAll':
					app.lockAll();
					break;
				case 'unlockAll':
					app.unlockAll();
					break;
				case 'createBm':
					var title = $( "#bmtitle" ).val(), desc = $( "#bmdesc" ).val();
					app.bookmark.create( title, desc );
					$( '#createBmModal' ).modal( 'hide' );
					break;
			}
		} );
		
		
		function AppUi ( app ) {
		var me = this;
		this.app = app;
		app.global.isPersonalMode( function ( reply ) {
			me.isPersonalMode = reply.qReturn;
		} );
		app.getAppLayout( function ( layout ) {
			$( "#title" ).html("Last reload:" + layout.qLastReloadTime.replace( /T/, ' ' ).replace( /Z/, ' ' ) );
			//$( "#title" ).attr( );
			//TODO: bootstrap tooltip ??
		} );
		
		}
		
		if ( app ) {
		new AppUi( app );
	}
	
	console.log(app);
	var AppTitle;
	
	
	
	
		
					
	//chatbot script
	   let MainData = [];
            let hypercubeData = {};
            let chatHistory = [];
            let currentUser = 'User';
            let selectedRole = 'Analyst';
            let isListening = false;
            let recognition;
            let chartInstances = {}; // Track chart instances for cleanup
            let currentChartType = null; // Track the current chart type
            let currentChartContainerId = null; // Track the current chart container ID
            let lastChartConfig = null; // Store the last chart configuration
            let previousChartConfig = null; // Store the previous chart configuration for "Go Back"
            let chartcontainerheader = null;

            let sursa = [];
            let allObjData = [];
			
			        // Chart-related keywords for detection
            const chartKeywords = ['chart', 'show chart', 'create chart', 'visualization', 'graph', 'plot', 'diagram', 'visual', 'trend', 'bar chart', 'line chart', 'pie chart', 'scatter plot', 'bar', 'line', 'pie', 'scatter', 'stacked bar', 'area', 'boxplot', 'radar', 'geo', 'tree', 'treemap', 'sankey', 'funnel', 'gauge'];

      
	
var SelectedClientName = document.getElementById("appName");
	app.getAppLayout().then(function(layout){
	AppTitle = layout.layout.qTitle;
	console.log("layout",layout , AppTitle);
	SelectedClientName.innerText = AppTitle;
	
	      if (AppTitle) {
                    initializeChatbot();
                }
  
  	}).catch(function(e){
	console.log(e);
	});
  
	
	
	
            // Initialize Speech Recognition
            if ('webkitSpeechRecognition' in window) {
                recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'en-US';
            }
		
			
			
            function initializeChatbot() {
                const $chatbot = $('.chatbot-container');
                const $toggle = $('.chatbot-toggle');
                const $close = $('.chatbot-close');
                const $sendBtn = $('.send-button');
                const $input = $('.chat-input');
                const $voiceBtn = $('.voice-button');
                const $roleSelect = $('.role-select');
                const $downloadBtn = $('.download-history');

                // Toggle chatbot
            // Toggle chatbot
                $toggle.on('click', function() {
                    $chatbot.addClass('active');
					 document.querySelector('.qlik-chatbot-extension').classList.toggle('active');
                    $input.focus();
					$(this).hide();
                });

                // Close chatbot
                $close.on('click', function() {
                    $chatbot.removeClass('active');
					$(".chatbot-toggle").show();
					 document.querySelector('.qlik-chatbot-extension').classList.toggle('active');
                });

                // Send message
                $sendBtn.on('click', sendMessage);
                $input.on('keypress', function(e) {
                    if (e.which === 13) {
                        sendMessage();
                    }
                });

                // Voice input
                $voiceBtn.on('click', toggleVoiceInput);

                // Role selection
                $roleSelect.on('change', function() {
                    selectedRole = $(this).val();
                    addMessage('system', `Role changed to: ${selectedRole}`);
                });

                // Download history
                $downloadBtn.on('click', downloadChatHistory);

                // Initialize with welcome message
                addMessage('bot', `Hello! I'm your AI assistant for ${AppTitle || 'this QlikSense app'}. I can help you analyze your data and create interactive visualizations. Try asking me to "create a chart" or "show me a graph"!`);
            }
			
	
	
	
const fetchDataAndProcess = async (objectID) => {
    const jsonDataArray = [];
  console.log(objectID);
    try {
      const model = await app.getObject(objectID);
      const layout = model.layout;
	  //console.log("model",model);
  
      if (!layout.qHyperCube) {
        return []; // No hypercube, no data
      }
  
      const totalDimensions = layout.qHyperCube.qDimensionInfo.length;
      const totalMeasures = layout.qHyperCube.qMeasureInfo.length;
      const totalColumns = totalDimensions + totalMeasures;
  
      if(totalColumns === 0) return [];
  
      const totalRows = layout.qHyperCube.qSize.qcy;
  
      const pageSize = 500; // reduced page size for safety
      const totalPages = Math.min(Math.ceil(totalRows / pageSize), 5); // limit max pages to 5 for max 2500 rows per object
  
      const headers = layout.qHyperCube.qDimensionInfo
                      .map(d => d.qFallbackTitle)
                      .concat(layout.qHyperCube.qMeasureInfo.map(m => m.qFallbackTitle))
                      .filter(h => h !== undefined);
  
      for (let currentPage = 0; currentPage < totalPages; currentPage++) {
        const qTop = currentPage * pageSize;
        const qHeight = Math.min(pageSize, totalRows - qTop);
  
        if (qHeight <= 0) break;
  
        const dataPages = await model.getHyperCubeData('/qHyperCubeDef', [{
          qTop,
          qLeft: 0,
          qWidth: totalColumns,
          qHeight
        }]);
  
        dataPages[0].qMatrix.forEach(data => {
          const jsonData = {};
          headers.forEach((header, index) => {
            jsonData[header] = data[index]?.qText || null;
          });
          jsonDataArray.push(jsonData);
        });
      }
    } catch (error) {
      console.warn(`Error fetching data for object ${objectID}:`, error);
      return [];
    }
    return jsonDataArray;
    
  };
  

  
		var sheetID = [];
	  app.getList("sheet", function(reply){
     sheetID = [];
	  $.each(reply.qAppObjectList.qItems, function(key, value) {
	 // console.log("sheet id",value);

	  sheetID.push(value.qInfo.qId);

//	 console.log("origanl sheet id",sheetID);

	  });

	  });
	  
	  
	  
			var Object_ids = [];
			
                            var currentSheetId = qlik.navigation.getCurrentSheetId();
        
        
                            app.getAppObjectList( 'sheet', function(reply){  
                                    $.each(reply.qAppObjectList.qItems, function(key, value) {
                                       // if(currentSheetId.sheetId==value.qInfo.qId){  
                                	
                                        $.each(value.qData.cells, function(k,v){
                                    	
                                        //console.log(v);
                                    	
                                            Object_ids.push(v.name);
                                    	
                                        });
                                    //  }
        
        
                                 });
									   
									   
									   
									  Object_ids = Object_ids.slice(0, 5);
									
                                   Object_ids.push("pTbrRg");
									   console.log(Object_ids);
									Object_ids.forEach(function (objectID) {
										fetchDataAndProcess(objectID).then(jsonDataArray => {
									
											allObjData.push(jsonDataArray);

											//console.log("all Obejcets Data", allObjData);
											let filteredArray = allObjData.filter(arr => arr.length > 0);
												//console.log("filtered data", filteredArray);
												sursa = JSON.stringify(filteredArray);
											console.log("all Obejcets Data", sursa);
											  
									  var uniqueData = filteredArray.filter(function(item, index, self) {
											// Convert object to string for comparison
											var itemString = JSON.stringify(item);
											// Check if this is the first occurrence
											return index === self.findIndex(function(t) {
												return JSON.stringify(t) === itemString;
											});
										});
											 console.log(JSON.stringify(uniqueData));
						

										}).catch(error => {
										   // console.error("Error fetching and processing data:", error);
										});

									});
								
						
                            });
                 
              
	

	
	
	
			
			
    function sendMessage() {
                const $input = $('.chat-input');
                const message = $input.val().trim();

                if (!message) return;

                // Add user message
                addMessage('user', message);
                $input.val('');

                // Show typing indicator
                showTypingIndicator();

                // Send to AI API
                processWithAI(message);
            }
			
            function detectChartRequest(query) {
                const lowerQuery = query.toLowerCase();
                return chartKeywords.some(keyword => lowerQuery.includes(keyword));
            }

            async function processWithAI(query) {
                MainData.push(hypercubeData);

                console.log(query);
				
				
				var comparisonWords = [
									  "Compare",
									  "Contrast",
									  "Benchmark",
									  "Difference",
									  "Variance",
									  "Deviation",
									  "Gap Analysis",
									  "Correlation",
									  "Similarity",
									  "Disparity",
									  "Benchmarking",
									  "Differential Analysis",
									  "Cross-Sectional Analysis",
									  "Benchmark Data",
									  "Distribution Comparison",
									
									];

									// Example user query
									var userQuery = query;

									// Convert user query to lowercase for case-insensitive matching
									var queryLower = userQuery.toLowerCase();

									// Check if any comparison word exists in the user query
									var hasComparisonWord = comparisonWords.some(function(word) {
									  return queryLower.indexOf(word.toLowerCase()) !== -1;
									});

						
				

          
            const decryptedKey = "key";

                const baseUrl = "openAIUrl";


                let model;
                let context = '4o';
                if (context === '8k') {
                    model = "mmc-tech";
                } else if (context === '16k') {
                    model = 'mmc-tech';
                } else if (context === '4o') {
                    model = "mmc-tech-gpt";
                }

                const endpoint = `deployments/${model}/chat/completions`;
                const url = `${baseUrl}${endpoint}`;
                const temp = 0.2; // Ranges 0-2

                let Data = JSON.stringify(hypercubeData);
                let prompt = `You are ${selectedRole}, You are a highly skilled health insurance business analyst. Utilize the JSON data provided below after 'data:', which includes information claims data. Your primary objective is to analyze this data and answer the query asked after the data segment in query:<> format in this message. Always emphasize clarity and correctness in your answers to provide the best possible insights.  response should be pointwise in use html elements`;

                switch (selectedRole) {
                    case 'Analyst':
                        prompt += ` As a skilled analyst, focus on data trends, patterns, and statistical insights.response should be pointwise in use html elements`;
                        break;
                    case 'HR':
                        prompt += ` As an HR professional, emphasize employee-related insights, performance metrics, and organizational trends.response should be pointwise in use html elements`;
                        break;
                    case 'Manager':
                        prompt += ` As a manager, provide strategic insights, performance summaries, and actionable recommendations. response should be pointwise in use html elements`;
                        break;
                    case 'Executive':
                        prompt += ` As an executive, focus on high-level strategic insights, KPIs, and business impact. response should be pointwise in use html elements`;
                        break;
                }
                const isChartRequest = detectChartRequest(query);
				
						
						if(query.toLowerCase().startsWith("@create excel")){
						    prompt = `You are ${selectedRole}, a data visualization expert. Based on the QlikSense data provided, create a chart configuration for the user's request.
						 IMPORTANT: Respond with a JSON object containing:
						 1) "data": A complete configuration object (in JSON format)
						for @create excel use below format: 
 
						 {    "data": [{ "Name": "Alice", "Age": 30, "City": "New York" },
								 			            { "Name": "Bob", "Age": 25, "City": "Los Angeles" }
														]
								 
								
								
								}`;
								}

                if (isChartRequest) {
                    prompt = `You are ${selectedRole}, a data visualization expert. Based on the QlikSense data provided, create a chart configuration for the user's request.

					

                    IMPORTANT: Respond with a JSON object containing:
                    1. "message": A brief explanation of the chart
                    2. "chartConfig": A complete ECharts configuration object (in JSON format)
                    3. "chartType": The type of chart (bar, line, pie, scatter, stacked bar, area, boxplot, radar, geo, tree, treemap, sankey, funnel, gauge))


                    The chartConfig should include:
                    - xAxis: with type and data
                    - yAxis: with type
                    - series: with type, data, and name
					- legend : should be at horizontal oriented and place at bottom of chart

                    Use the actual data from the provided dataset. Make the chart interactive with hover effects and click handlers.

                    Example format:
                    {
                        "message": "Here's a bar || line || pie || scatter || stacked bar || area || boxplot || radar || tree || treemap || sankey || funnel || gauge chart showing...",
                        "chartConfig": {
                            "xAxis": {
                                "type": "category",
                                "data": ["Label1", "Label2"]
                            },
                            "yAxis": {
                                "type": "value"
                            },
							 "legend": {
									"top": '2%',
									"left": 'center',
									    "orient": 'horizontal',
 
    								"bottom":'5%'
								  },
								    "label": {
										"show": true,
										"position": 'center'
									  },
							"series": [{
                                "data": [{value: 14109.47, name: 'TN'}],
                                "type": "bar || line || pie || scatter || stacked bar || area || boxplot || radar || geo || tree || treemap || sankey || funnel || gauge",
                                "name": "Dataset Label"
                            }],
							
                        },
                        "chartType": "bar || line || pie || scatter || stacked bar || area || boxplot || radar || geo || tree || treemap || sankey || funnel || gauge",
						 "legend": {
									
									"left": 'center',
									    "orient": 'horizontal',
 
    								"bottom":'2%'
								  }
                    }

                    for Geo map use following format :


                      option = {
                            title: {


                              left: 'right'
                            },
                            tooltip: {
                              trigger: 'item',
                              showDelay: 0,
                              transitionDuration: 0.2
                            },
                            visualMap: {
                              left: 'right',
                              min: 500000,
                              max: 38000000,
                              inRange: {
                                color: [
                                  '#313695',
                                  '#4575b4',
                                  '#74add1',
                                  '#abd9e9',
                                  '#e0f3f8',
                                  '#ffffbf',
                                  '#fee090',
                                  '#fdae61',
                                  '#f46d43',
                                  '#d73027',
                                  '#a50026'
                                ]
                              },
                              text: ['High', 'Low'],
                              calculable: true
                            },
                            toolbox: {
                              show: true,
                              //orient: 'vertical',
                              left: 'left',
                              top: 'top',
                              feature: {
                                dataView: { readOnly: false },
                                restore: {},
                                saveAsImage: {}
                              }
                            },
                            series: [
                              {
                                name: 'Country Data ',
                                type: 'map',
                                roam: true,
								    center: [longitude, latitude], // set the center position
   								 zoom: 3, // set the zoom level
                                map: 'USA',
                                emphasis: {
                                  label: {
                                    show: true
                                  }
                                },
                                data: [
                                  { name: 'Alabama', value: 4822023 },


                                ]
                              }
                            ]
                          }
						  
				
						  
						
                    `;
                }
				
							// Conditional statement
									if (hasComparisonWord) {
									  // Your code here
									  prompt = `please compare the data with outer world available data,response should be pointwise in use html elements`
									  console.log("User query contains comparison-related words.");
									} else {
									  console.log("No comparison-related words found in user query.");
									}

                try {

                    console.log("all Objects Data ", sursa);
		


               /*     const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${decryptedKey}`
                        },
                        body: JSON.stringify({
                            model: model,
                            messages: [{
                                role: "user",
                                content: `${prompt} data:${sursa} query:${query}`
                            }],
                            temperature: temp,
                            max_tokens: 2000,
                            response_format: isChartRequest ? {
                                type: "json_object"
                            } : undefined
                        })
                    });
					
					
					
					
					

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();*/
					
					async function makeApiCall(content) {
									  const response = await fetch(url, {
										method: 'POST',
										headers: {
										  'Content-Type': 'application/json',
										  'Authorization': `Bearer ${decryptedKey}`
										},
										body: JSON.stringify({
										  model: model,
										  messages: [{
											role: "user",
											content: content
										  }],
										  temperature: temp,
										  max_tokens: 2000,
										  response_format: isChartRequest ? { type: "json_object" } : undefined
										})
									  });
									  const data = await response.json();
									  return data;
									}

									// Main logic
									let data; // Declare data variable

									if (hasComparisonWord) {
									  // Make first API call
									  await makeApiCall(`${prompt} data:${sursa} query:${query}`);
									  // Make second API call with different content and store in data
									  data = await makeApiCall(`Comparison analysis requested and response should be pointwise in use html elements: ${query}`);
									} else {
									  // Make only one API call and store in data
									  data = await makeApiCall(`${prompt} data:${sursa} query:${query}`);
									}

									// Now, data contains the result of the last API call
									//console.log("data",data);
					
					
					
					
					
					
					
                    let aiResponse = data.choices[0].message.content;
					
					/* if (aiResponse.includes('```json') && aiResponse.includes('```')) {
						// Remove the ```json marker
						aiResponse = aiResponse.replace('```json', '').replace('```', '');
						
						// Trim whitespace
						aiResponse = aiResponse.trim();
					}*/
					
					  //  aiResponse = aiResponse.trim();

						if (aiResponse.includes('```json') && aiResponse.includes('```')) {
							// Remove both markers globally
							   aiResponse = aiResponse.replace(/```json|```/g, '').trim(); // remove first 5 chars
        // Remove the ending ```
							//aiResponse = aiResponse.substring(0, str.length - 3);
							// Trim again
							aiResponse = aiResponse.trim();
						}

						try {
							var excelDataParse = JSON.parse(aiResponse);
							console.log(excelDataParse);
						} catch (e) {
							console.error('Error parsing JSON:', e);
						}
 					
                    hideTypingIndicator();

                    if (isChartRequest) {
                        try {
                            const chartResponse = JSON.parse(aiResponse);
                            lastChartConfig = chartResponse.chartConfig; // Store the chart config
                            const messageText = chartResponse.message || 'Here\'s your chart:';
                            addMessage('bot', messageText, chartResponse.chartConfig, chartResponse.chartType);

                        } catch (parseError) {
                            console.error('Error parsing chart response:', parseError);
                            addMessage('bot', 'I encountered an error generating the chart. Here\'s the analysis instead: ' + aiResponse);
                        }
                    }else if (query.toLowerCase().startsWith("@create excel")) {
                        const excelQuery = query.substring("@create excel".length).trim(); // Extract the query after the command
                      getExcelData(excelQuery, excelDataParse); // Function to fetch data for Excel
                     
                        hideTypingIndicator();
                        addMessage('bot', 'Generating Excel file...');
                        return; // Stop further processing
                    } else {
                        addMessage('bot', aiResponse);
                    }

                } catch (error) {
                    console.error('Error calling AI API:', error);
                    hideTypingIndicator();
                    addMessage('bot', 'I apologize, but I encountered an error processing your request. Please try again.');
                }
            }
			
			
		  async function getExcelData(query, excelDataParse) {
						 import('https://cdn.sheetjs.com/xlsx-latest/package/xlsx.mjs')
                .then(XLSX => {
                    // XLSX is now available here
                    console.log("XLSX (ES Module):", XLSX);

                    // Example usage (replace with your actual data and logic)
                    const data = excelDataParse.data;
                    const worksheet = XLSX.utils.json_to_sheet(data);
                    const workbook = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                    const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                    const blob = new Blob([new Uint8Array(excelData)], { type: 'application/octet-stream' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'data.xlsx';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);

                })
                .catch(error => {
                    console.error("Error loading XLSX (ES Module):", error);
                });
            }


            function addMessage(sender, message, chartConfig = null, chartType = null) {
                const $messages = $('.chat-messages');
                const timestamp = new Date().toLocaleTimeString();
                const messageId = 'msg_' + Date.now();

                let messageClass = sender === 'user' ? 'user-message' : 'bot-message';
                let icon = sender === 'user' ? '\ud83d\udc64' : '\ud83e\udd16';
                let name = sender === 'user' ? currentUser : 'AI Assistant';

                if (sender === 'system') {
                    messageClass = 'system-message';
                    icon = '\u2699\ufe0f';
                    name = 'System';
                }


                message = message.replace(/```html/g, '').replace(/```/g, '').trim();

                let messageHtml = `
                    <div class="message ${messageClass}" id="${messageId}">
                        <div class="message-content">
                            <div class="message-header">
                                <span class="${sender}-icon">${icon}</span>
                                <span class="${sender}-name">${name}</span>
                                <span class="timestamp">${timestamp}</span>
                            </div>
                            <div class="message-text">${message}</div>
                            ${chartConfig ? '<div class="chart-container" id="chart_' + messageId + '"></div>' : ''}
                            <div class="hear-responce ${sender}" id="chartheading_${messageId}">
                                <button class="speak-button" >
                                    <i class="fas fa-volume-up"></i>
                                </button>
                                <button class="copy-response" >
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;


                $messages.append(messageHtml);
                $messages.scrollTop($messages[0].scrollHeight);

                // Generate chart if chartConfig is provided
                if (chartConfig) {
                    currentChartContainerId = `chart_${messageId}`; // Store the container ID

                    chartcontainerheader = `chartheading_${messageId}`;
                    setTimeout(() => {
                        generateChart(currentChartContainerId, chartcontainerheader, chartConfig, chartType);
                    }, 100);
                }

                // Add to chat history
                chatHistory.push({
                    sender: sender,
                    message: message,
                    timestamp: timestamp,
                    chartConfig: chartConfig
                });
            }

            function generateChart(containerId, chartcontainerheader, chartConfig, chartType) {

                const container = document.getElementById(containerId);
                const containerheader = document.getElementById(chartcontainerheader);
                if (!container) {
                    console.error('Chart container not found:', containerId);
                    return;
                }

                // Clear previous content
                $(container).empty();

                const $buttonsHtml = $(`

                        <button class="go-back-button"><i class="fas fa-arrow-left"></i></button>

                `);

                // Add "Go Back" and "Export to Excel" buttons using jQuery


                // Initialize chart
                if (chartConfig.series[0].type == 'map') {
				console.log(dataObj);
                    echarts.registerMap('USA', dataObj);
                }
                const myChart = echarts.init(container);


                // Add tooltip for hover effect
                chartConfig.tooltip = {
                    trigger: 'item'
                    //  formatter: '{a} <br/>{b} : {c} ({d}%)' // Customize as needed
                };

                // Set chart options
                myChart.setOption(chartConfig);

                // Add click event listener for drilldown
                myChart.on('click', function(params) {

                    $(containerheader).append($buttonsHtml);

                    // Store the current chart config as the previous config
                    previousChartConfig = JSON.parse(JSON.stringify(chartConfig));

                    // Handle drilldown logic here - Modify chart directly
                    if (lastChartConfig && lastChartConfig.series) {
                        // Example: Filter data based on the clicked data point


                        const newData = lastChartConfig.series.map((series, i) => {
                            if (series.type == 'line') {
                                return {
                                    ...series,
                                    data: series.data.filter(item => item == params.value) // Example filter
                                };
                            } else if (series.type == 'scatter') {
                                return {
                                    ...series,
                                    data: series.data.filter(item => item.value[1] == params.value[1]) // Example filter
                                };
                            } else {
                                return {
                                    ...series,
                                    data: series.data.filter(item => item.value == params.value) // Example filter
                                };
                            }
                        });

                        //const newData = lastChartConfig.series.data.filter(item => item === params.value);

                        // Update the chart options with the filtered data
                        const newChartConfig = {
                            ...lastChartConfig,
                            series: newData
                        };

                        chartConfig = newChartConfig; // Update the chartConfig
                        myChart.setOption(newChartConfig);
                    }
                });

                // "Go Back" button functionality using jQuery
                let headerID = "#" + chartcontainerheader;

                $(document).on("click", `${headerID} .go-back-button`, function() {
                    console.log("back button clicked");
                    // $(container).find('.go-back-button').on('click', function() {
                    if (previousChartConfig) {

                        myChart.setOption(previousChartConfig);

                        if (previousChartConfig.series[0].type == 'bar') {
                            const resizeObserver = new ResizeObserver(() => {
                                myChart.resize();
                            });
                        }
                        chartConfig = previousChartConfig; // Restore the chartConfig
                        previousChartConfig = null; // Clear the previous config
                    }
                    $(this).remove();
                });

                // "Export to Excel" button functionality using jQuery

                // Save chart instance
                chartInstances[containerId] = myChart;

                // Add resize observer for responsiveness
                const resizeObserver = new ResizeObserver(() => {
                    myChart.resize();
                });
                resizeObserver.observe(container);

                // **Add Download Chart Button**
                const $downloadButton = $('<button>')
                    .addClass('download-chart-button')
                    .html('<i class="fas fa-download"></i> Download Chart')
                    .on('click', function() {
                        downloadChartImage(containerId);
                    });
                $(container).append($downloadButton);
            }

            // **Function to Download Chart as Image**
            function downloadChartImage(containerId) {
                const container = document.getElementById(containerId);
                const chart = chartInstances[containerId];

                if (!chart) {
                    console.error('Chart instance not found:', containerId);
                    return;
                }

                const imgData = chart.getDataURL({
                    type: 'png',
                    pixelRatio: 2, // Adjust for higher resolution
                    backgroundColor: '#fff' // Set background color
                });

                const link = document.createElement('a');
                link.href = imgData;
                link.download = 'chart.png'; // Filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

          

            function showTypingIndicator() {
                const $messages = $('.chat-messages');
                $messages.append(`
                    <div class="message bot-message typing-indicator">
                        <div class="message-content">
                            <div class="typing-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                `);
                $messages.scrollTop($messages[0].scrollHeight);
            }

            function hideTypingIndicator() {
                $('.typing-indicator').remove();
            }

            function toggleVoiceInput() {
                if (!recognition) {
                    addMessage('system', 'Voice recognition is not supported in your browser.');
                    return;
                }

                if (isListening) {
                    recognition.stop();
                    isListening = false;
                    $('.voice-button').removeClass('listening');
                } else {
                    recognition.start();
                    isListening = true;
                    $('.voice-button').addClass('listening');
                }
            }

            if (recognition) {
                recognition.onresult = function(event) {
                    const transcript = event.results[0][0].transcript;
                    $('.chat-input').val(transcript);
                    isListening = false;
                    $('.voice-button').removeClass('listening');
                };

                recognition.onerror = function() {
                    isListening = false;
                    $('.voice-button').removeClass('listening');
                    addMessage('system', 'Voice recognition error. Please try again.');
                };
            }

            function downloadChatHistory() {
                // Create PDF content
                const pdfContent = chatHistory.map(msg => 
                    `[${msg.timestamp}] ${msg.user}: ${msg.message}`
                ).join('\n\n');

                // Create and download file
                const blob = new Blob([pdfContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `chatbot_history_${new Date().toISOString().split('T')[0]}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }

            // QlikSense Capability API functions
            clearAllSelections = function() {
                app.clearAll();
                addMessage('system', 'All selections cleared.');
            };

            getSelectionState = function() {
                app.getList('SelectionObject').then(function(reply) {
                    const selections = reply.qSelectionObject.qSelections;
                    if (selections.length > 0) {
                        const selectionText = selections.map(s => 
                            `${s.qField}: ${s.qSelected}`
                        ).join(', ');
                        addMessage('system', `Current selections: ${selectionText}`);
                    } else {
                        addMessage('system', 'No active selections.');
                    }
                });
            };
			
			
			
			
			            //response voice start code
            $(document).ready(function () {
                let isSpeaking = false;
                let speechSynthesis = window.speechSynthesis;
                let utterance;
                speechSynthesis.cancel();
                $(document).on('click','.speak-button', function () {
				var text =  $(this).parents(".message-content").find(".message-text").text().trim();
                    if (isSpeaking) {
                        stopSpeech(this);
                    } else {
                        startSpeech(text,this);
                    }
                });

                function startSpeech(text,$this) {
                    // Get the text from the textarea
                    


                    // Check if the browser supports speech synthesis
                    if ('speechSynthesis' in window) {
                        // Create a new speech synthesis utterance
                        var utterance = new SpeechSynthesisUtterance(text);
                        isSpeaking = true;

                        // Optionally set properties like voice, pitch, and rate
                        utterance.pitch = 1; // Range: 0 to 2
                        utterance.rate = 1;  // Range: 0.1 to 10
                        utterance.volume = 1; // Range: 0 to 1

                        // Speak the text
                        window.speechSynthesis.speak(utterance);

                        $($this).html('<i class="fa fa-ban" aria-hidden="true"></i>');
                        $($this).addClass("active-speech");


                        utterance.onend = function () {
                            isSpeaking = false;
                            $($this).html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
                            $($this).removeClass("active-speech");
                        }

                    } else {
                        alert('Please enter some text to speak.');
                    }
                }

                function stopSpeech($this) {
                    if (isSpeaking) {
                        speechSynthesis.cancel();
                        isSpeaking = false;
						    $($this).html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
                            $($this).removeClass("active-speech");
                      
                    }
                }
                $(window).on('beforeunload', function () {
                    stopSpeech();
                });
            });
			
            $(document).on("click", ".copy-response", function () {
                // Get the parent div
                const parentDiv =  $(this).parents(".message-content").find(".message-text");

                // Get all text inside the child elements of the parent div
                const textToCopy = parentDiv.text().trim();

                // Create a temporary textarea to hold the text to copy
                const tempInput = $('<textarea>').val(textToCopy).appendTo('body').select();

                // Copy the text
                document.execCommand('copy');

                // Remove the temporary textarea
                tempInput.remove();

                // Optional: Alert the user that the text has been copied
                //console.log('Text copied to clipboard!');
            });
			

	
	
	
	

            $(document).ready(function() {
                const keywords = [
                    "@generate the chart",
                    "@create excel",
					"@compare"
				
                ];

                const $input = $('#commandInput');
                const $suggestionBox = $('#suggestionBox');

                $input.on('input', function() {
                    const val = $(this).val();
                    const lastChar = val.slice(-1);
                    // Show suggestions when last char is '@'
                    if (lastChar === '@') {
                        showSuggestions('');
                    } else if (val.includes('@')) {
                        // Get the part after '@' for filtering
                        const atIndex = val.lastIndexOf('@');
                        const query = val.slice(atIndex).toLowerCase();
                        showSuggestions(query);
                    } else {
                        $suggestionBox.hide();
                    }
                });

                function showSuggestions(query) {
                    const filtered = keywords.filter(k => k.toLowerCase().startsWith(query));
                    if (filtered.length === 0) {
                        $suggestionBox.hide();
                        return;
                    }
                    $suggestionBox.empty();
                    filtered.forEach(item => {
                        const $item = $('<div class="suggestion-item"></div>').text(item);
                        $item.on('click', function() {
                            selectSuggestion(item);
                        });
                        $suggestionBox.append($item);
                    });
                    // Position the suggestion box below input
                    const offset = $input.offset();
                    $suggestionBox.show();
                }

                function selectSuggestion(suggestion) {
                    const val = $input.val();
                    const atIndex = val.lastIndexOf('@');
                    const newVal = val.slice(0, atIndex) + suggestion + ' ';
                    $input.val(newVal);
                    $suggestionBox.hide();
                    $input.focus();
                }
            });


            $('#commandInput').on('change', function() {
                const command = $(this).val().trim();
                if (command.startsWith("@generate the chart")) {
                    // Generate chart
                } else if (command.startsWith("@create excel")) {
                    // Create Excel
                }
                // Add more commands as needed
            });

	
	
	
	
	
});
		</script>
		
		
		
		
		
		
		<!-- Script-->

		<script>
		
		
		</script>
		
</body>
</html>
