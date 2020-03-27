// Check off Specific todo by clicking
$('ul').on("click", "span.item-name", function(){
    $(this).toggleClass('completed');
});

// Click on trash to delete todo
$('ul').on("click", "span.trash", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add a new todo
$('input[type="text"]').keypress(function(event){
    if(event.which == 13) {
        // get text form input
        var text = $(this).val();
        // create a new li and add to ul
        var newLi = '<li><span class="trash"><i class="fa fa-trash"></i></span>'
         + '<span class="item-name">' + text + '</span></li>';
        $('ul').append(newLi);
        $(this).val("");
    }
});

// Toggle the input form
$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle(500);
});