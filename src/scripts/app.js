import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LoginView from './views/loginPage'
import STORE from './store'
import ACTIONS from './actions'
import User from './models/userModel'

//Pages imports
import HomePage from './views/homepage.js'
import LoginPage from './views/loginPage.js'
import ProfilePage from './views/profilePage.js'
import CreateGamePage from './views/createGamePage.js'
import LeaderboardPage from './views/leaderboardPage.js'
import ReclaimPage from './views/reclaimPage.js'
import ReclaimUpdatePage from './views/reclaimUpdatePage.js'
import QueuePage from './views/queuePage.js'
import RulesPage from './views/faqPage.js'


const app = function() {
  	let PongRouter = Backbone.Router.extend({

	    routes: {
	    	'home': 'renderHomePage',
	    	'login': 'renderLoginPage',
	    	'profile/:id': 'renderProfilePage',
	    	'leaderboard': 'renderLeaderboardPage',
	    	'create_game': 'renderCreateGamePage',
	    	'reclaim': 'renderReclaimPage',
	    	'reclaim/:id': 'renderReclaimUpdatePage',
	    	'queue': 'renderQueuePage',
	    	'rules': 'renderRulesPage',
	    	'*default': 'handleRedirect',

	    },

	    handleRedirect: function(){

	    	location.hash = "home"

	    },

	    renderHomePage: function(){
	    	ACTIONS.loggedInStatus()
	    	ReactDOM.render(<HomePage />, document.querySelector('.container'))

	    },

	    renderLoginPage: function(){
	    	ACTIONS.loggedInStatus()
	    	ReactDOM.render(<LoginPage />, document.querySelector('.container'))

	    },

	    renderProfilePage: function(ID){

    		ReactDOM.render(<ProfilePage currentUserId={User.getCurrentUser().id} />, document.querySelector('.container'))

    	},

    	renderCreateGamePage: function(){

    		ReactDOM.render(<CreateGamePage />, document.querySelector('.container'))
    	},

    	renderLeaderboardPage: function(){

    		ReactDOM.render(<LeaderboardPage />, document.querySelector('.container'))

    	},

    	renderReclaimPage: function(){

    		ReactDOM.render(<ReclaimPage />, document.querySelector('.container'))

    	},

    	renderReclaimUpdatePage: function(id){

			ReactDOM.render(<ReclaimUpdatePage userID={id}/>, document.querySelector('.container'))

    	},

    	renderQueuePage: function(){

    		ReactDOM.render(<QueuePage />, document.querySelector('.container'))

    	},

    	renderRulesPage: function() {

    		ReactDOM.render(<RulesPage />, document.querySelector('.container'))
    	}

  	})

	new PongRouter
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..