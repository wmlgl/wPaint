(function ($) {
  var img = 'plugins/shapes/img/icons-menu-main-shapes.png';

  // extend menu
  $.extend(true, $.fn.wPaint.menus.main.items, {
    rectangle: {
      group: 'shapes'
    },
    roundedRect: {
      icon: 'activate',
      group: 'shapes',
      title: 'Rounded Rectangle',
      img: img,
      index: 0,
      callback: function () { this.setMode('roundedRect'); }
    },
    square: {
      icon: 'activate',
      group: 'shapes',
      title: 'Square',
      img: img,
      index: 1,
      callback: function () { this.setMode('square'); }
    },
    roundedSquare: {
      icon: 'activate',
      group: 'shapes',
      title: 'Rounded Square',
      img: img,
      index: 2,
      callback: function () { this.setMode('roundedSquare'); }
    },
    diamond: {
      icon: 'activate',
      group: 'shapes',
      title: 'Diamond',
      img: img,
      index: 4,
      callback: function () { this.setMode('diamond'); }
    },

    ellipse: {
      group: 'shapes2'
    },
    circle: {
      icon: 'activate',
      group: 'shapes2',
      title: 'Circle',
      img: img,
      index: 3,
      callback: function () { this.setMode('circle'); }
    },
    pentagon: {
      icon: 'activate',
      group: 'shapes2',
      title: 'Pentagon',
      img: img,
      index: 5,
      callback: function () { this.setMode('pentagon'); }
    },
    hexagon: {
      icon: 'activate',
      group: 'shapes2',
      title: 'Hexagon',
      img: img,
      index: 6,
      callback: function () { this.setMode('hexagon'); }
    }
  });

  // extend functions
  $.fn.wPaint.extend({
    /****************************************
     * roundedRect
     ****************************************/
    _drawRoundedRectDown: function (e) { this._drawShapeDown(e); },

    _drawRoundedRectMove: function (e) {
      var painter = function (x, y, w, h) {
	      var radius = w > h ? h / w : w / h;
	
	      this.ctxTemp.roundedRect(x, y, w, h, Math.ceil(radius * (w * h * 0.001)));
	      this.ctxTemp.stroke();
	      this.ctxTemp.fill();
      }.bind(this);
      
      this._drawShapeMove(e, null, painter);
      painter(e.x, e.y, e.w, e.h);
    },

    _drawRoundedRectUp: function (e) {
      this._drawShapeUp(e);
    },

    /****************************************
     * square
     ****************************************/
    _drawSquareDown: function (e) { this._drawShapeDown(e); },

    _drawSquareMove: function (e) {
      var painter = function(x, y, w, h) {
          var l = w > h ? h : w;

          this.ctxTemp.rect(x, y, l, l);
          this.ctxTemp.stroke();
          this.ctxTemp.fill();
      }.bind(this);
      
      this._drawShapeMove(e, null, painter);
      painter(e.x, e.y, e.w, e.h);
    },

    _drawSquareUp: function (e) {
      this._drawShapeUp(e);
    },

    /****************************************
     * roundedSquare
     ****************************************/
    _drawRoundedSquareDown: function (e) { this._drawShapeDown(e); },

    _drawRoundedSquareMove: function (e) {
      var painter = function painter(x, y, w, h) {
            var l = w > h ? h : w;

            this.ctxTemp.roundedRect(x, y, l, l, Math.ceil(l * l * 0.001));
            this.ctxTemp.stroke();
            this.ctxTemp.fill();
      }.bind(this);
      
      this._drawShapeMove(e, null, painter);
      painter(e.x, e.y, e.w, e.h);
    },

    _drawRoundedSquareUp: function (e) {
      this._drawShapeUp(e);
    },

    /****************************************
     * diamond
     ****************************************/
    _drawDiamondDown: function (e) { this._drawShapeDown(e); },

    _drawDiamondMove: function (e) {
        var painter = function painter(x, y, w, h) {
            this.ctxTemp.diamond(x, y, w, h);
            this.ctxTemp.stroke();
            this.ctxTemp.fill();
        }.bind(this)
      
      this._drawShapeMove(e, null, painter);
      painter(e.x, e.y, e.w, e.h);
    },

    _drawDiamondUp: function (e) {
      this._drawShapeUp(e);
    },

    /****************************************
     * circle
     ****************************************/
    _drawCircleDown: function (e) { this._drawShapeDown(e); },

    _drawCircleMove: function (e) {
        var painter = function painter(x, y, w, h) {
            var l = w > h ? h : w;

            this.ctxTemp.ellipse(x, y, l, l);
            this.ctxTemp.stroke();
            this.ctxTemp.fill();
        }.bind(this)
        
      this._drawShapeMove(e);

      this._drawShapeMove(e, null, painter);
      painter(e.x, e.y, e.w, e.h);
    },

    _drawCircleUp: function (e) {
      this._drawShapeUp(e);
    },

    /****************************************
     * pentagon
     ****************************************/
    _drawPentagonDown: function (e) { this._drawShapeDown(e); },

    _drawPentagonMove: function (e) {
      var painter = function painter(x, y, w, h) {
          this.ctxTemp.pentagon(x, y, w, h);
          this.ctxTemp.stroke();
          this.ctxTemp.fill();
      }.bind(this)
      
      this._drawShapeMove(e, null, painter);
      painter(e.x, e.y, e.w, e.h);
    },

    _drawPentagonUp: function (e) {
      this._drawShapeUp(e);
    },

    /****************************************
     * hexagon
     ****************************************/
    _drawHexagonDown: function (e) { this._drawShapeDown(e); },

    _drawHexagonMove: function (e) {
      var painter = function painter(x, y, w, h) {
          this.ctxTemp.hexagon(x, y, w, h);
          this.ctxTemp.stroke();
          this.ctxTemp.fill();
      }.bind(this)
      
      this._drawShapeMove(e, null, painter);
      painter(e.x, e.y, e.w, e.h);
    },

    _drawHexagonUp: function (e) {
      this._drawShapeUp(e);
    }
  });
})(jQuery);
