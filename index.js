
'use strict';

$(document).ready(function(){
 $('.container').click(function(event){
     $(event.target).children('.nested-list').toggle();
 })
})