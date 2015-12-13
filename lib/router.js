Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('posts'), Meteor.subscribe('lounges'),
                             Meteor.subscribe('requests'), Meteor.subscribe('chapters'),
                             Meteor.subscribe('allUsers'),Meteor.subscribe('emails')]; }
});


Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});


Router.onBeforeAction('dataNotFound', {only: 'upcoming'});
Router.route('/loungebox', {name: 'loungebox'});
Router.route('/my-upcoming-lounges', {name: 'upcoming'});
Router.route('/my-profile', {name:'accountInfo'});
Router.route('/my-settings', {name:'settings'});
Router.route('/my-past-lounges', {name:'pastLounges'});
Router.route('/create-a-lounge', {name:'createLounge'});
Router.route('/doatl', {name:'doatl'});

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
		path: '/my-permissions',
		template: 'permissions',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go('/');
			}
			this.next();
		}
	});
	
	
});






