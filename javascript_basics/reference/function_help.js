NOTES FROM BACKEND TEAM 
API 
-----------
Get All Listings : 

GET request to: 
postman - 127.0.0.1:8000/api/listings/
Javascript -  /api/listings
sample response = 
[{
  'id': 13,
  'name': 'testname',
  'description': 'this is a test house',
  'price': 2,
  'createdAt': '2019-02-13T14:18:47.467Z',
  'updatedAt': '2019-02-13T14:18:47.467Z'
}, {
  'id': 14,
  'name': 'testname1221',
  'description': 'this is a test house',
  'price': 23,
  'createdAt': '2019-02-13T14:19:55.298Z',
  'updatedAt': '2019-02-13T14:19:55.298Z'
}, {
  'id': 15,
  'name': 'testname1221',
  'description': 'this is a test house',
  'price': 23,
  'createdAt': '2019-02-13T14:20:35.244Z',
  'updatedAt': '2019-02-13T14:20:35.244Z'
}, {
  'id': 17,
  'name': 'house 5',
  'description': 'this is a test house',
  'price': 23,
  'createdAt': '2019-02-13T14:20:48.568Z',
  'updatedAt': '2019-02-13T14:20:48.568Z'
}]

Add to listing 
---------------

POST request to api/listings

TYPE JSON 

sample post {
	name: 'name'
	description : 'description'
	prince : number
}







console.log(results[0].name)

const getName = function () {
  return results[0].name
}

console.log(getName())

[1]-----------------------------------

        type: 'GET',
        url: 'api/listings',
        success: function (listing) {
         $.each(newListing, function(i, listing) {
         	$listin.append('<li> name: 'listing.name', </li>')
         }
        }


[2]-------------------------------------

// add new id button for adding listing 
// add new id for input forms AND BUTTON
// id = "name"
// id = "description"
// id = "price"

<button id= "add-listing" Add! </button>
 
--------
// amend jquery code
--------

var $name = $('#name');
var $description = $('#description');
var $price = $('#price');


$('#add-listing').on('click', function () {

var postListing = {
	name: $name.val();
	description: $description.val();
	price: $price.val();
};

  $.ajax({
    type: 'GET',
    url: 'api/listings',
    data: postListing,
    success: function (newListing) {
     $.each(newListing, function(i, newListing) {
     	$newListing.append('<li> name: 'newListing.name', </li>')
     }
    }
});




sucess: function(data) {
	console.log('sucess', data)
}












