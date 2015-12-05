Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('posts'), Meteor.subscribe('lounges')]; }
});


Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.route('/my-upcoming-lounges', {name: 'upcoming'});

Router.map(function(){
	// Login-Home
	this.route('login', {
	    layoutTemplate: 'form_layout',
		path: '/',
		template: 'login'
	});

	// Register
	this.route('register');

	this.route('dashboard', {
		path: '/dashboard',
		template: 'posts_list',
		onBeforeAction: function(){
			if(Meteor.user() == null){
				Router.go('/');
			}
			this.next();
		}
	});
});