//- Name: Tommy Cao
//- Date: 5/29/17
//- Company: GEVH
//- Description: Great Entertainment Vacation Rental Website

$(document).ready(function(){
  $('.delete-article').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/articles/'+id,
      success: function(response){
        alert('Deleting Review');
        window.location.href='/';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});

// Pagination
var items = $(".list-wrapper .list-item");
var numItems = items.length;
var perPage = 3;

items.slice(perPage).hide();

$('#pagination-container').pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "&laquo;",
  nextText: "&raquo;",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  }
});
