(function () {
  if (!String.prototype.capitalize) {
    String.prototype.capitalize = function () {
      return this.slice(0, 1).toUpperCase() + this.slice(1);
    };
  }
  if (!String.prototype.rgbValue) {
    String.prototype.rgbValue = function () {
      var hex = this;
      if(/^#[a-zA-z0-9]{3,5}$/.test(this)) {
        hex = this[0]+this[1]+this[1]+this[2]+this[2]+this[3]+this[3];
      }
      return {
      	red: parseInt(hex.slice(1,3), 16),
    	green: parseInt(hex.slice(3,5), 16),
    	blue: parseInt(hex.slice(5,7), 16)
      }
    };
  }
})();

(function ($) {
  $.fn.realWidth = function (type, margin, $el) {
    var width = null, $div = null, method = null;

    type = type === 'inner' || type === 'outer' ? type : '';
    method = type === '' ? 'width' : type + 'Width';
    margin = margin === true ? true : false;
    $div = $(this).clone().css({position: 'absolute', left: -10000}).appendTo($el || 'body');
    width = margin ? $div[method](margin) : $div[method]();

    $div.remove();

    return width;
  };

  $.fn.realHeight = function (type, margin, $el) {
    var height = null, $div = null, method = null;

    type = type === 'inner' || type === 'outer' ? type : '';
    method = type === '' ? 'height' : type + 'Height';
    margin = margin === true ? true : false;
    $div = $(this).clone().css({position: 'absolute', left: -10000}).appendTo($el || 'body');
    height = margin ? $div[method](margin) : $div[method]();

    $div.remove();

    return height;
  };

  $.fn.bindMobileEvents = function () {
    $(this).on('touchstart touchmove touchend touchcancel', function () {
      var touches = (event.changedTouches || event.originalEvent.targetTouches),
          first = touches[0],
          type = '';

      switch (event.type) {
      case 'touchstart':
        type = 'mousedown';
        break;
      case 'touchmove':
        type = 'mousemove';
        event.preventDefault();
        break;
      case 'touchend':
        type = 'mouseup';
        break;
      default:
        return;
      }

      var simulatedEvent = document.createEvent('MouseEvent'); 

      simulatedEvent.initMouseEvent(
        type, true, true, window, 1, 
        first.screenX, first.screenY, first.clientX, first.clientY, 
        false, false, false, false, 0/*left*/, null
      );

      first.target.dispatchEvent(simulatedEvent);
    });
  };
})(jQuery);