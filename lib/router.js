Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('posts'), Meteor.subscribe('lounges'),
                             Meteor.subscribe('requests'), Meteor.subscribe('chapters'),
                             Meteor.subscribe('allUsers')/*,Meteor.subscribe('emails')*/
                             ,Meteor.subscribe('images'), Meteor.subscribe('files')]; }
});


Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});


Router.onBeforeAction('dataNotFound', {only: 'upcoming'});

Router.route('/doatl', {name:'doatl'});
Router.route('/logout', {name:'logout'});

Router.route('/my-profile', {
waitOn: function() {
return [Meteor.subscribe('images')];
},
name: 'accountInfo',
onBeforeAction: function(){
			if(Meteor.user() == null){
			    Session.set('Route', '/my-profile');
				Router.go('/');
			}
			this.next();
		}
});

Router.route('subscribers', {
  path: '/subscribers',
  template: 'subscribers',
  onBeforeAction: function(){
    if(Meteor.user() == null){
        Session.set('Route', '/subscribers');
		Router.go('/');
	}
    Session.set( 'currentRoute', 'subscribers' );
    this.next();
  }
});


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
			    Session.set('Route', '/dashboard');
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
			    Session.set('Route', '/my-permissions');
				Router.go('/');
			}
			this.next();
		}
	});
	
	this.route('upcoming', {
		path: '/my-upcoming-lounges',
		template: 'upcoming',
		onBeforeAction: function(){
			if(Meteor.user() == null){
			    Session.set('Route', '/my-upcoming-lounges');
				Router.go('/');
			}
			this.next();
		}
	});
	
	this.route('settings', {
		path: '/my-settings',
		template: 'settings',
		onBeforeAction: function(){
			if(Meteor.user() == null){
			    Session.set('Route', '/my-settings');
				Router.go('/');
			}
			this.next();
		}
	});
	
	this.route('pastLounges', {
		path: '/my-past-lounges',
		template: 'pastLounges',
		onBeforeAction: function(){
			if(Meteor.user() == null){
			    Session.set('Route', '/my-past-lounges');
				Router.go('/');
			}
			this.next();
		}
	});
	
	this.route('createLounge', {
		path: '/create-a-lounge',
		template: 'createLounge',
		onBeforeAction: function(){
			if(Meteor.user() == null){
			    Session.set('Route', '/create-a-lounge');
				Router.go('/');
			}
			this.next();
		}
	});
	
	
});






