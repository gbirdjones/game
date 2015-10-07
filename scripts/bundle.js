(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	$('#menu').hide();
	var Router = Backbone.Router.extend({
		routes: {
			"": "menu",
			"menu": "menuFunc",
			"play": "playFunc",
			"leader": "leaderFunc",
			"options": "optionsFunc"
		},
		menuFunc: function menuFunc() {
			console.log("running");
			$('#play').hide();
			$('#leader').hide();
			$('#options').hide();
			$('#menu').show();
		},
		playFunc: function playFunc() {
			console.log("play");
			$('#leader').hide();
			$('#options').hide();
			$('#play').show();
		},
		leaderFunc: function leaderFunc() {
			console.log("leader");
			$('#play').hide();
			$('#options').hide();
			$('#leader').show();
		},
		optionsFunc: function optionsFunc() {
			console.log("options");
			$('#play').hide();
			$('#leader').hide();
			$('#options').show();
		}

	});

	var app = new Router();
	Backbone.history.start();

	$('#loading').show();
	setTimeout(function () {
		$('#loading').hide();
		$('#menu').show();
	}, 3000);

	$("#playB").on("click", function () {
		app.navigate("play", { trigger: true });
	});
	$("#leaderB").on("click", function () {
		app.navigate("leader", { trigger: true });
	});
	$("#optionsB").on("click", function () {
		app.navigate("options", { trigger: true });
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map