
'use strict';
//click to make children appear
$(document).ready(function(){
 $('.container').click(function(event){
   $(event.target).children('.nested-list').toggle();
 })
})
//make children clickable