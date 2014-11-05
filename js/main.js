
var book1 = new Book({
	title: "You don't know JS",
	image: 'images/ydkjs_scope-and-closures.jpg',
	likes: 20,
	hasLiked: true
});//take data and render it inside a Backbone.View

var book2 = new Book({
	title: 'Javascript Patterns',
	likes: 10
});

var book1View = new BookItemView({
	model: book1
});
book1View.render();

var book2View = new BookItemView({
	model: book2
});
book2View.render();

$('#container')
	.append(book1View.el)
	.append(book2View.el); //correspond to DOM element that is being constructed
