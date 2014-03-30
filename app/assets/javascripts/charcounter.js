(function($) {
  $.fn.extend({
    limit_characters: function(max, counter){
        $(this).bind("keydown focus", function(){
            var self = this;
            window.setTimeout(function(){
                var chars = self.value.length;
                if(chars > max) {
                    self.value = self.value.substr(0, max);
                    chars = max;
                }
                if(typeof(counter) != 'undefined') counter.html(max-chars);
            }, 5);
        });
    }
  });
})(jQuery);

