(function($) {
    $(function() {
      
      $('ul.hwd__nav-list').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.hwd__container').find('div.hwd__box').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);