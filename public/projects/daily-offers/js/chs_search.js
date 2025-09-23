$(document).ready(function() {
  $('.search-bar').click(function (e) {
    e.stopPropagation();
  })

var keywordToClass = {};
var keywordToTab = {};
var tab_id = "#chs_tab_2";
  $(tab_id).find('.chs_main_offer_title').each(function () {
    var _classIndex =  $(this).closest('.chs_main_offer_box').index();
    var keyword = $(this).text();

    keyword = keyword.trim().replace(/\n/gi, ' ').replace(/ +/gi, ' ').toLowerCase();

    if (_classIndex === undefined || _classIndex === null) return;
    keywordToClass[keyword] = '#chs_tab_2 .chs_main_offer_box:nth-child(' + (_classIndex + 1) + ')' ;
  })


// console.log(keywordToClass);

(function () {
  var search_timeoutId;
  // console.log('script run');

  $('.search-bar input').on('input', function (e) {
    console.log($(this).text());
    search($(this));
  })

  function search($el) {
    var q = $el.val();
    if (!q) return;

    if (search_timeoutId) {
      clearTimeout(search_timeoutId);
      search_timeoutId = undefined;
    }

    search_timeoutId = setTimeout(function () {
      q = q.trim().replace(/ +/gi, ' ').toLowerCase();
      var resultId;

      Object.keys(keywordToClass).forEach(function (key) {
        if (key.match(new RegExp('.*' + q + '.*', 'gi'))) {
          resultId = keywordToClass[key];
          if ($(resultId).closest('.chs_main_offer_box').css('display') == 'none') {
            return;
          }
        }
      })
      $('html, body').animate({
        scrollTop: $(resultId).last().offset().top,
      }, 500);
    }, 300);
  }
}());
});
