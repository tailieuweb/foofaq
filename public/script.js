$(document).ready(function(){
    $(".button-show").click(function(){
        $(".nenxanh").toggle();
        $(".showhide").toggleClass("activehide");
    });


    $(".alert").hover(function(){
        $(".nut").toggleClass("show-button");
    })
});

