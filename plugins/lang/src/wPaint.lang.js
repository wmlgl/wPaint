(function ($) {
  // extend functions
  $.fn.wPaint.extend({
    generate: function() {
    	var language = $.fn.wPaint.languages && $.fn.wPaint.languages[this.options.language.toLowerCase()];
    	if(language) {
    		for ( var key in language) {
				var path = key.split('.');
				var obj = $.fn.wPaint;
				for (var j = 0; j < path.length - 1 && obj; j++) {
					obj = obj[path[j]];
				}
				if(obj) {
					var prop = path[path.length - 1];
					if(typeof(obj[prop]) == 'string') {
						obj[prop] = language[key];
					} else {
						throw new Error('Language property type mismatch: ' + key + ', ' + typeof(obj[prop]));
					}
				} else {
					console.log && console.log('[WARNING] Unknown language property: ' + key)
				}
			}
    	}
    
    }
  });
})(jQuery);