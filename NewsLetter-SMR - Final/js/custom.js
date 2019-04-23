jQuery(document).ready(function() {
    // jQuery("ul#mainNav li").click(function(){
    jQuery(document).on('click', "ul#mainNav li", function(){
        jQuery("ul#mainNav li").removeClass('active');  
    jQuery(this).addClass('active');
    });
  });