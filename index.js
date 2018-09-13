
'use strict';
//click to make children appear
$(document).ready(function(){
 $('.container').click(function(event){
   $(event.target).children('.nested-list').toggle();
 })
})
//make list items clickable


//random link
let currentPatriarchLink = '';

function patriarchSmash() {
  const patriarchLinks = [
    "http://feministryangosling.tumblr.com/",
    "http://wearewhatfeministslooklike.tumblr.com/",
    "http://ladiesagainsthumanity.tumblr.com/",
  ];
  let randomPatriarchLink = patriarchLinks[Math.floor(Math.random() * patriarchLinks.length)];
  currentPatriarchLink = randomPatriarchLink;
  window.open(randomPatriarchLink, '_blank');
  return randomPatriarchLink;
}

