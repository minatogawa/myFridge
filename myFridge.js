Products = new Mongo.Collection('products');

if (Meteor.isClient) {
	Template.fridge.helpers({
		products:function(){
			return Products.find({
				place:'fridge',
			});
		}
	});
	Template.productList.helpers({
		products:function(){
			return Products.find({
				place:'supermarket',
			});
		}
	});
}
if (Meteor.isServer) {
 //...
}