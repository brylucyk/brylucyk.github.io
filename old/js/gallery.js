$(".gallery ul li a").click(function () {
    var itemID = $(this).attr("href");
    $(".gallery ul").addClass("item_open");
    $(itemID).addClass("item_open");
    $(".overlay").show();
  
    // lock scroll
    var scrollPosition = [
      self.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft,
      self.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop,
    ];
    var html = jQuery("html");
    html.data("scroll-position", scrollPosition);
    html.data("previous-overflow", html.css("overflow"));
    html.css("overflow", "hidden");
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    return false;
  });
  
  $(".close").click(function () {
    closeModal();
    return false;
  });
  
  $(".overlay").click(function () {
    closeModal();
    return false;
  });
  
  function openModal() {
    $(".modal, .gallery ul").removeClass("item_open");
    $(".overlay").show();
  
    // unlock scroll
    var html = jQuery("html");
    var scrollPosition = html.data("scroll-position");
    html.css("overflow", html.data("previous-overflow"));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    return false;
  }
  
  
  function closeModal() {
    $(".modal, .gallery ul").removeClass("item_open");
    $(".overlay").hide();
  
    // unlock scroll
    var html = jQuery("html");
    var scrollPosition = html.data("scroll-position");
    html.css("overflow", html.data("previous-overflow"));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    return false;
  }
  