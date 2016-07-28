$(document).ready(function(){
    $('#pupDescrip article:not(:first)').hide();
    
    $('#pupTabLinks li').click(function(e){
        $('#pupDescrip article').hide();
        $('#pupTabLinks .current').removeClass("current");
        $(this).addClass('current');
        
        var clicked=$(this).find('a:first').attr('href');
        $('#pupDescrip '+ clicked).fadeIn('fast');
        e.preventDefault();
    });
    
});