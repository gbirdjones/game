'use strict';
 $(document).ready(function(){
 	$('#menu').hide();
var Router = Backbone.Router.extend({
	routes: {
		"":"menu",
		"menu":"menuFunc",
		"play":"playFunc",
		"leader":"leaderFunc",
		"options":"optionsFunc"
	},
	menuFunc: function(){
		console.log("running");
		$('#play').hide();
		$('#leader').hide();
		$('#options').hide();
		$('#menu').show();
		
	},
	playFunc: function(){
		console.log("play");
		$('#leader').hide();
		$('#options').hide();
		$('#play').show();
	},
	leaderFunc: function(){
		console.log("leader");
		$('#play').hide();
		$('#options').hide();
		$('#leader').show();
	},
	optionsFunc: function(){
		console.log("options");
		$('#play').hide();
		$('#leader').hide();
		$('#options').show();
	},

});

var app = new Router();
Backbone.history.start();

	$('#loading').show();
	setTimeout(function() {
		$('#loading').hide();
		$('#menu').show();
	}, 3000);

	$("#playB").on("click", function(){
		app.navigate("play",{trigger: true});
	});
	$("#leaderB").on("click", function(){
		app.navigate("leader",{trigger: true});
	});
	$("#optionsB").on("click", function(){
		app.navigate("options",{trigger: true});
	});

});