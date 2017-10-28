$(document).ready(function() {
console.log('this shit is running');


$('#search-button').on('submit', (e)=>{
    e.preventDefault();
    const show = $('#search-input').val();
    console.log('this is the console.log',show);
  });



});
