   $('a[href*=#]:not([href=#])').click(function() {
       if( $(this).attr("href")=="#myCarousel1") return;
       if( $(this).attr("href")=="#myCarousel2") return;
       if( $(this).attr("href")=="#myCarousel3") return;
       if( $(this).attr("href")=="#myCarousel4") return;
       if( $(this).attr("href")=="#myCarousel5") return;
       if( $(this).attr("href")=="#myCarousel6") return;
       if( $(this).attr("href")=="#myCarousel7") return;
       if( $(this).attr("href")=="#myCarousel8") return;
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                       || location.hostname == this.hostname) {

                       var target = $(this.hash);
                               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                                          if (target.length) {
                                                           $('html,body').animate({
                                                                                scrollTop: target.offset().top
                                                                           }, 1000);
                                                                       return false;
                                                                               }
                                              }
   });
