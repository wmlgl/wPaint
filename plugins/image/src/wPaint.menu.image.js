(function ($) {
  var img = 'plugins/image/img/icons-menu-image.png';

  // extend menu
  $.extend(true, $.fn.wPaint.menus.main.items, {
    image: {
      icon: 'generic',
      title: 'Select Image',
      img: img,
      index: 0,
      callback: function () {
    	  this._showImageSelectDialog();
      }
    }
  });

  // extend defaults
  $.extend($.fn.wPaint.defaults, {
    loadImage: null,   // callback triggerd on loaded image
  });

  // extend functions
  $.fn.wPaint.extend({
    generate: function () {
        this._imageInput = $('<input id="wPaint_imageInput" type="file" accept="image/gif, image/jpg, image/png, image/jpeg" />');
        this._imageInputBlob = null;
        this._imageInput.change(this._imageInputChange.bind(this));
    },
    _showImageSelectDialog: function (type, image) {
      this._imageInput[0].click();
    },
    _imageInputChange: function(e) {
        var _this = this,
      	URL = window.URL || window.webkitURL;

  	  function imageLoaded() {
  		  var painter = function(x,y,w,h){
  			  _this.ctxTemp.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, x, y, w, h);
  		  };

  		  var ox = 0, oy = 0, ow = image.naturalWidth, oh = image.naturalHeight;

  		  //等比缩放
  		  if(ow > _this.width || oh > _this.height) {
  	  		  if(_this.width / _this.height > ow / oh) {
  	  			  ow = ow / oh * _this.height;
  	  			  oh = _this.height;
  	  		  } else {
  	  			  oh = oh / ow * _this.width;
  	  			  ow = _this.width;
  	  		  }
  		  }
  		  
  		  ox = (_this.width - ow) / 2;
  		  oy = (_this.height - oh) / 2;

  		  _this.$canvasTempPanel
  		  .css({left: ox, top: oy, width:'auto', height:'auto'})
  		  .show();
  		  _this.$canvasTemp
  		  .attr({width: ow, height: oh});

  	      _this.canvasTempLeftNew = ox;
  	      _this.canvasTempTopNew = oy;
  		  _this._canvasTempReisze = painter;
  		  _this._canvasTempFactor = 2;
  		  painter(0, 0, ow, oh);
  	  }
  	  
      if(this._imageInputBlob) {
    	  URL.revokeObjectURL(this._imageInputBlob);
    	  this._imageInputBlob = null;
      }
  	  
  	  var image = new Image();
  	  this._imageInputBlob =  URL.createObjectURL(this._imageInput[0].files[0]);
  	  image.onload = imageLoaded;
  	  image.src = this._imageInputBlob;
  	  //reset file input
  	  this._imageInput = this._imageInput.clone(true);
    }
  });
  
})(jQuery);