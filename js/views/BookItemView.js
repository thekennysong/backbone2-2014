//correspond to book1
var BookItemView = Backbone.View.extend({
  template: Handlebars.compile($('#book-template').html()),

  initialize:function(){
    this.listenTo(this.model,'change',function(){
      this.render(); //will rerender the template and reflect current state of model
      //event oriented, can listen just like above
    }); //triggered when call set, as seen below

  },
  //can create class for each div
  className: 'book',
  //how to add DOM user events .e.g. onclick, onmouseover
  events: {
    'click a.like': 'like'
  },

  like: function(e){
    e.preventDefault(); //prevent default behavior of an anchor
    this.model.set({
      hasLiked:true,
      likes: this.model.get('likes') + 1

    }); //setting hasLiked to true

  },

  render: function(){
    //what you do for the template enterpulation
    var html = this.template(this.model.toJSON()) //create raw JSON equivalent
    this.$el.html(html);//inner HTML
  }
});
