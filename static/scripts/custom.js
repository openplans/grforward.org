$(function(){
  'use strict';

  // image gallery interactivity
  $(document).on('click', '.grfwd-thumb-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parents('.grfwd-image-gallery'),
        imageUrl = $this.attr('data-url');

    $context.find('.grfwd-thumb-link').removeClass('active');
    $this.addClass('active');

    $context.find('.grfwd-image').attr('src', imageUrl);
  });

  // get involved form toggles
  $(document).on('click', '.grfwd-toggle-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parent('.panel');

    $context.find('.grfwd-toggle-target').removeClass('hide');
    $this.addClass('hide');

  });

  // news toggles
  $(document).on('click', '.toggle-section-link', function(evt) {
    evt.preventDefault();
    $(this).parent().siblings('.toggle-section-target').removeClass('hide');
    $(this).hide();

  });

});