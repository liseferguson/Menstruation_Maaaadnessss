
'use strict';

$(document).ready(function(){
  $('.container').mouseover(function(event){
    $(event.target).children('.nested-list').show()
  })
  $('.container').mouseout(function(event){
   $(event.target).children('.nested-list').hide()
  })
})