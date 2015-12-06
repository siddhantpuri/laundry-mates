Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('posts'), Meteor.subscribe('lounges'), Meteor.subscribe('requests')]; }
});


Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});



Router.route('/my-upcoming-lounges', {name: 'upcoming'});
Router.onBeforeAction('dataNotFound', {only: 'upcoming'});
Router.route('loungebox', {name: 'loungebox'});

Router.route('/account-info', {name:'accountInfo'});

Router.map(function(){
	// Login-Home
	this.route('login', {
	    layoutTemplate: 'form_layout',
		path: '/',
		template: 'login'
	});

	// Register
	this.route('register', {
	    layoutTemplate: 'form_layout',
		path: '/register',
		template: 'register'
	});

	this.route('dashboard', {
		path: '/dashboard',
		template: 'upcoming',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go('/');
			}
			this.next();
		}
	});
	
	this.route('permissions', {
		path: '/permissions',
		template: 'permissions',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go('/');
			}
			this.next();
		}
	});
	
	
});






