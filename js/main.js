// add scripts

$(document).on('ready', function() {
  $('p').hide();

});

$('form').on('submit', function (event) {
  event.preventDefault();
  var userName = $('#username').val();
  getResults(userName);
  $('p').show();
});

//create a function to put our ajax function in:
function getResults(userName) {
  // set it equal to a variable so you can say what you want to do when it's done see DONE below
  var request = $.ajax({
    //requires a url - you have to specify the endpoint
    // chk documentation such as: https://developer.spotify.com/web-api/endpoint-reference/
    url: "https://developer.github.com/v3/users/",
    // requires a method Post or GET mainly, GET
    method: "GET",
    // how it comes back
    data: {
      // q is always required, see the documentation for what is required
      q: userName,
    },
    // needs to tell it how to return
    dataType: "json",
  });
    request.done(function(response) {
      var repositories = response.repos;
      // need a bucket to put everything in
      var display = "";

      $('here').append(repositories);
      //      array   then callback function
                      //i is albums[i]
      // $.each(repositories, function(i, album) {
      //    var albumName = album.name;
      //     // pass thru the albums images that you have to get
      //    var albumImage = album.images[0].url;
      //    var spotifyLink = album.external_urls.spotify;
      //    display += "<li><img src=" + albumImage + "></li>";
      //    $('.results').html(display);
      //   });
    });
    // need something to be displayed if everything goes awry
    // results.fail(function(error) {
    //   alert('something went wrong');
    // });
}


