window.TILE_VERSION = {
  ditu: {
    normal: {version: '088', updateDate: '20181205'},
    satellite: {version: '009', updateDate: '20181205'},
    normalTraffic: {version: '081', updateDate: '20181205'},
    satelliteTraffic: {version: '083', updateDate: '20181205'},
    mapJS: {version: '104', updateDate: '20181205'},
    satelliteStreet: {version: '083', updateDate: '20181205'},
    panoClick: {version: '1033', updateDate: '20181128'},
    panoUdt: {version: '20181128', updateDate: '20181128'},
    panoSwfAPI: {version: '20150123', updateDate: '20150123'},
    panoSwfPlace: {version: '20141112', updateDate: '20141112'},
    earthVector: {version: '001', updateDate: '20181205'},
  },
  webapp: {
    high_normal: {version: '001', updateDate: '20181205'},
    lower_normal: {version: '002', updateDate: '20181205'},
  },
  api_for_mobile: {
    vector: {version: '002', updateDate: '20181205'},
    vectorIcon: {version: '002', updateDate: '20181205'},
  },
};
window.MSV = {};
window.BMAP_AUTHENTIC_KEY = 'k0H5qLj0AR2ZAA46lMGC9uY56cQGRUn3';
window.BMapGL = window.BMapGL || {};
(function (bj, es) {
  var C = C || {version: '20150702', emptyFn: function () {}};
  (function () {
    C._log = [];
    var i = 0;
    var T = {};
    C.BaseClass = function (hI) {
      T[(this.hashCode = hI || C.BaseClass.guid())] = this;
    };
    C.BaseClass.guid = function () {
      return 'mz_' + (i++).toString(36);
    };
    C.BaseClass.create = function () {
      var hI = new C.BaseClass();
      hI.decontrol();
      return hI;
    };
    var e = (C.instance = C.I = function (hI) {
      return T[hI];
    });
    C.BaseClass.prototype.dispose = function () {
      if (this.hashCode) {
        delete T[this.hashCode];
      }
      for (var hI in this) {
        if (typeof this[hI] != 'function') {
          delete this[hI];
        }
      }
    };
    C.BaseClass.prototype.getHashCode = function () {
      if (!this.hashCode) {
        T[(this.hashCode = C.BaseClass.guid())] = this;
      }
      return this.hashCode;
    };
    C.BaseClass.prototype.decontrol = function () {
      delete T[this.hashCode];
    };
    C.BaseClass.prototype.toString = function () {
      return '[object ' + (this._className || 'Object') + ']';
    };
    C.BaseClass.prototype._wlog = function (hJ, hK) {
      var hI = C._log;
      if (hI.length > 100) {
        hI.reverse().length = 50;
        hI.reverse();
      }
      hI[hI.length] =
        '[' + hJ + '][' + (this._className || 'Object') + ' ' + this.hashCode + '] ' + hK;
    };
  })();
  Function.prototype.inherits = function (hI, T) {
    var e,
      hJ,
      hL = this.prototype,
      hK = function () {};
    hK.prototype = hI.prototype;
    hJ = this.prototype = new hK();
    if (typeof T == 'string') {
      hJ._className = T;
    }
    for (e in hL) {
      hJ[e] = hL[e];
    }
    this.prototype.constructor = hL.constructor;
    hL = hK = null;
    return hJ;
  };
  C.BaseEvent = function (e, i) {
    this.type = e;
    this.returnValue = true;
    this.target = i || null;
    this.currentTarget = this.srcElement = null;
    this.cancelBubble = false;
    this.domEvent = null;
  };
  C.BaseClass.prototype.on = C.BaseClass.prototype.addEventListener = function (T, i) {
    if (typeof i !== 'function') {
      return this._wlog('error', 'addEventListener:' + i + ' is not a function');
    }
    if (!this._listeners) {
      this._listeners = {};
    }
    var e = this._listeners;
    if (T.indexOf('on') !== 0) {
      T = 'on' + T;
    }
    if (typeof e[T] !== 'object') {
      e[T] = {};
    }
    var hI = i.hashCode || C.BaseClass.guid();
    i.hashCode = hI;
    if (e[T][hI]) {
      this._wlog('warning', 'repeat key:' + hI);
    }
    e[T][hI] = i;
  };
  C.BaseClass.prototype.off = C.BaseClass.prototype.removeEventListener = function (T, i) {
    if (typeof i == 'function') {
      i = i.hashCode;
    } else {
      if (typeof i !== 'string' && typeof i !== 'undefined') {
        return;
      }
    }
    if (!this._listeners) {
      this._listeners = {};
    }
    if (T.indexOf('on') != 0) {
      T = 'on' + T;
    }
    var e = this._listeners;
    if (!e[T]) {
      return;
    }
    if (i === undefined) {
      e[T] = {};
      return;
    }
    if (e[T][i]) {
      delete e[T][i];
    }
  };
  C.BaseClass.prototype.fire = C.BaseClass.prototype.dispatchEvent = function (hI) {
    if (!this._listeners) {
      this._listeners = {};
    }
    var T,
      e = this._listeners,
      hJ = hI.type;
    hI.target = hI.srcElement = hI.target || hI.srcElement || this;
    hI.currentTarget = this;
    if (typeof this[hJ] == 'function') {
      this[hJ](hI);
    }
    if (typeof e[hJ] == 'object') {
      for (T in e[hJ]) {
        if (typeof e[hJ][T] == 'function') {
          e[hJ][T].call(this, hI);
        }
      }
    }
    return hI.returnValue;
  };
  C.BaseEvent.prototype.inherit = function (T) {
    var i = this;
    this.domEvent = T = window.event || T;
    i.clientX = T.clientX || T.pageX;
    i.clientY = T.clientY || T.pageY;
    i.offsetX = T.offsetX || T.layerX;
    i.offsetY = T.offsetY || T.layerY;
    i.screenX = T.screenX;
    i.screenY = T.screenY;
    i.ctrlKey = T.ctrlKey || T.metaKey;
    i.shiftKey = T.shiftKey;
    i.altKey = T.altKey;
    return i;
  };
  C.Browser = (function () {
    var T = navigator.userAgent;
    var hJ = 0;
    var e = 0;
    var hK = 0;
    var i = 0;
    var hO = 0;
    var hM = 0;
    var hN = 0;
    var hL = 0;
    var hI = 0;
    var hP = 0;
    if (typeof window.opera === 'object' && /Opera(\s|\/)(\d+(\.\d+)?)/.test(T)) {
      hK = parseFloat(RegExp.$2);
    } else {
      if (/OPR(\/(\d+)(\..?)?)/.test(T)) {
        hK = parseInt(RegExp.$2, 10);
      } else {
        if (/Edge\/((\d+)\.\d+)/.test(T)) {
          hJ = parseInt(RegExp.$2, 10);
        } else {
          if (/MSIE (\d+(\.\d+)?)/.test(T)) {
            e = parseFloat(RegExp.$1);
          } else {
            if (T.indexOf('Trident') > -1 && /rv:(\d+(\.\d+)?)/.test(T)) {
              e = parseInt(RegExp.$1, 10);
            } else {
              if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(T)) {
                hO = parseFloat(RegExp.$2);
              } else {
                if (navigator.vendor === 'Netscape' && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(T)) {
                  hN = parseFloat(RegExp.$2);
                } else {
                  if (T.indexOf('Safari') > -1 && /Version\/(\d+(\.\d+)?)/.test(T)) {
                    i = parseFloat(RegExp.$1);
                  }
                }
              }
            }
          }
        }
      }
    }
    if (T.indexOf('Trident') > -1 && /Trident\/(\d+(\.\d+)?)/.test(T)) {
      hL = parseInt(RegExp.$1, 10);
    } else {
      if (
        !e &&
        !hJ &&
        T.indexOf('Gecko') > -1 &&
        T.indexOf('KHTML') === -1 &&
        /rv\:(\d+(\.\d+)?)/.test(T)
      ) {
        hI = parseFloat(RegExp.$1);
      } else {
        if (!hJ && /chrome\/(\d+(\.\d+)?)/i.test(T)) {
          hM = parseFloat(RegExp.$1);
        } else {
          if (!hJ && /AppleWebKit\/(\d+(\.\d+)?)/.test(T)) {
            hP = parseInt(RegExp.$1, 10);
          }
        }
      }
    }
    var hQ = {
      edge: hJ,
      ie: e,
      firefox: hO,
      netscape: hN,
      opera: hK,
      safari: i,
      chrome: hM,
      gecko: hI,
      trident: hL,
      webkit: hP,
    };
    return hQ;
  })();
  window.FeBrowser = C.Browser;
  C.Dom = {};
  C.Dom.createDom = function (i, e) {
    if (C.isIE && e && e.name) {
      i = '<' + i + ' name="' + C.String.escapeHTML(e.name) + '">';
    }
    var T = document.createElement(i);
    if (e) {
      C.Dom.setProperties(T, e);
    }
    return T;
  };
  C.Dom.getOffset = function (hI) {
    var hL = C.Dom.getOwnerDocument(hI);
    var hK =
      C.isGecko > 0 &&
      hL.getBoxObjectFor &&
      C.Dom.getStyle(hI, 'position') == 'absolute' &&
      (hI.style.top === '' || hI.style.left === '');
    var hM = {left: 0, top: 0};
    var i = C.isIE && !C.isStrict ? hL.body : hL.documentElement;
    if (hI == i) {
      return hM;
    }
    var T = null;
    var hJ;
    if (hI.getBoundingClientRect) {
      hJ = hI.getBoundingClientRect();
      hM.left = hJ.left + Math.max(hL.documentElement.scrollLeft, hL.body.scrollLeft);
      hM.top = hJ.top + Math.max(hL.documentElement.scrollTop, hL.body.scrollTop);
      hM.left -= hL.documentElement.clientLeft;
      hM.top -= hL.documentElement.clientTop;
      if (C.isIE && !C.isStrict) {
        hM.left -= 2;
        hM.top -= 2;
      }
    } else {
      if (hL.getBoxObjectFor && !hK) {
        hJ = hL.getBoxObjectFor(hI);
        var e = hL.getBoxObjectFor(i);
        hM.left = hJ.screenX - e.screenX;
        hM.top = hJ.screenY - e.screenY;
      } else {
        T = hI;
        do {
          hM.left += T.offsetLeft;
          hM.top += T.offsetTop;
          if (C.isWebkit > 0 && C.Dom.getStyle(T, 'position') == 'fixed') {
            hM.left += hL.body.scrollLeft;
            hM.top += hL.body.scrollTop;
            break;
          }
          T = T.offsetParent;
        } while (T && T != hI);
        if (C.isOpera > 0 || (C.isWebkit > 0 && C.Dom.getStyle(hI, 'position') == 'absolute')) {
          hM.top -= hL.body.offsetTop;
        }
        T = hI.offsetParent;
        while (T && T != hL.body) {
          hM.left -= T.scrollLeft;
          if (!C.isOpera || T.tagName != 'TR') {
            hM.top -= T.scrollTop;
          }
          T = T.offsetParent;
        }
      }
    }
    return hM;
  };
  C.Dom.getOwnerDocument = function (e) {
    return e.nodeType == 9 ? e : e.ownerDocument || e.document;
  };
  C.Dom.setProperties = function (i, e) {
    C.each(e, function (hI, T) {
      C.Dom._setProperty(i, T, hI);
    });
  };
  C.Dom._setProperty = function (i, e, T) {
    if (e == 'style') {
      i.style.cssText = T;
    } else {
      if (e == 'class') {
        i.className = T;
      } else {
        if (e == 'for') {
          i.htmlFor = T;
        } else {
          if (e in C.Dom._DIRECT_ATTRIBUTE_MAP) {
            i.setAttribute(C.Dom._DIRECT_ATTRIBUTE_MAP[e], T);
          } else {
            i[e] = T;
          }
        }
      }
    }
  };
  C.Dom._DIRECT_ATTRIBUTE_MAP = {
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    valign: 'vAlign',
    height: 'height',
    width: 'width',
    usemap: 'useMap',
    frameborder: 'frameBorder',
  };
  C.G = function () {
    for (var T = [], hI = arguments.length - 1; hI > -1; hI--) {
      var hJ = arguments[hI];
      T[hI] = null;
      if (typeof hJ == 'object' && hJ && hJ.dom) {
        T[hI] = hJ.dom;
      } else {
        if ((typeof hJ == 'object' && hJ && hJ.tagName) || hJ == window || hJ == document) {
          T[hI] = hJ;
        } else {
          if (typeof hJ == 'string' && (hJ = document.getElementById(hJ))) {
            T[hI] = hJ;
          }
        }
      }
    }
    return T.length < 2 ? T[0] : T;
  };
  C.ac = function (e, i) {
    if (!(e = this.G(e))) {
      return;
    }
    i = this.trim(i);
    if (!new RegExp('(^| )' + i.replace(/(\W)/g, '\\$1') + '( |$)').test(e.className)) {
      e.className = e.className.split(/\s+/).concat(i).join(' ');
    }
  };
  C.addClassName = C.ac;
  C.each = function (hK, e) {
    if (typeof e != 'function') {
      return hK;
    }
    if (hK) {
      if (hK.length === undefined) {
        for (var T in hK) {
          e.call(hK[T], hK[T], T);
        }
      } else {
        for (var hI = 0, hJ = hK.length; hI < hJ; hI++) {
          e.call(hK[hI], hK[hI], hI);
        }
      }
    }
    return hK;
  };
  C.extend = function (hK, hI) {
    if (hK && hI && typeof hI == 'object') {
      for (var hJ in hI) {
        hK[hJ] = hI[hJ];
      }
      var T = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
      for (var e = 0, i; e < T.length; e++) {
        i = T[e];
        if (Object.prototype.hasOwnProperty.call(hI, i)) {
          hK[i] = hI[i];
        }
      }
    }
    return hK;
  };
  C.hide = function () {
    C.each(arguments, function (e) {
      if ((e = C.G(e))) {
        e.style.display = 'none';
      }
    });
  };
  C.inherit = function (hM, hI, T) {
    var hL = hM.prototype;
    var hK = function () {};
    hK.prototype = hI.prototype;
    var hJ = (hM.prototype = new hK());
    if (typeof T == 'string') {
      hJ._className = T;
    }
    for (var e in hL) {
      hJ[e] = hL[e];
    }
    hM.prototype.constructor = hL.constructor;
    hL = null;
    return hJ;
  };
  C.isIE = 0;
  (function () {
    if (navigator.userAgent.indexOf('MSIE') > 0 && !window.opera) {
      /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
      C.isIE = parseFloat(RegExp.$1);
    }
  })();
  C.rc = function (e, i) {
    if (!(e = this.G(e))) {
      return;
    }
    i = this.trim(i);
    var T = e.className.replace(
      new RegExp('(^| +)' + i.replace(/(\W)/g, '\\$1') + '( +|$)', 'g'),
      '$2',
    );
    if (e.className != T) {
      e.className = T;
    }
  };
  C.removeClassName = C.rc;
  C.show = function () {
    this.each(arguments, function (e) {
      if ((e = C.G(e))) {
        e.style.display = '';
      }
    });
  };
  C.trim = function (e) {
    return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, '');
  };
  C.getElementsByClassName = function (e, i) {
    if (e.getElementsByClassName) {
      return e.getElementsByClassName(i);
    } else {
      return (function T(hP, hN) {
        if (hN == null) {
          hN = document;
        }
        var hM = [],
          hL = hN.getElementsByTagName('*'),
          hI = hL.length,
          hO = new RegExp('(^|\\s)' + hP + '(\\s|$)'),
          hK,
          hJ;
        for (hK = 0, hJ = 0; hK < hI; hK++) {
          if (hO.test(hL[hK].className)) {
            hM[hJ] = hL[hK];
            hJ++;
          }
        }
        return hM;
      })(i, e);
    }
  };
  C.toggleClass = function (e, i) {
    if (C.hasClass(e, i)) {
      C.removeClassName(e, i);
    } else {
      C.addClassName(e, i);
    }
  };
  C.hasClass = function (hI, T) {
    if (!hI || !hI.className || typeof hI.className != 'string') {
      return false;
    }
    var i = -1;
    try {
      i = hI.className == T || hI.className.search(new RegExp('(\\s|^)' + T + '(\\s|$)'));
    } catch (hJ) {
      return false;
    }
    return i > -1;
  };
  C.insertHTML = function (hI, e, T) {
    hI = C.G(hI);
    if (hI === null) {
      return hI;
    }
    var i, hJ;
    if (hI.insertAdjacentHTML) {
      hI.insertAdjacentHTML(e, T);
    } else {
      i = hI.ownerDocument.createRange();
      e = e.toUpperCase();
      if (e == 'AFTERBEGIN' || e == 'BEFOREEND') {
        i.selectNodeContents(hI);
        i.collapse(e == 'AFTERBEGIN');
      } else {
        hJ = e == 'BEFOREBEGIN';
        i[hJ ? 'setStartBefore' : 'setEndAfter'](hI);
        i.collapse(hJ);
      }
      i.insertNode(i.createContextualFragment(T));
    }
    return hI;
  };
  if (
    typeof HTMLElement != 'undefined' &&
    HTMLElement.prototype.__lookupGetter__ &&
    !HTMLElement.prototype.__lookupGetter__('children') &&
    !window.opera
  ) {
    try {
      HTMLElement.prototype.__defineGetter__('children', function () {
        for (var T = [], hI = 0, hK, hJ = 0, e = this.childNodes.length; hJ < e; hJ++) {
          hK = this.childNodes[hJ];
          if (hK.nodeType == 1) {
            T[hI++] = hK;
            if (hK.name) {
              if (!T[hK.name]) {
                T[hK.name] = [];
              }
              T[hK.name][T[hK.name].length] = hK;
            }
            if (hK.id) {
              T[hK.id] = hK;
            }
          }
        }
        return T;
      });
    } catch (gn) {}
  }
  if (
    typeof HTMLElement != 'undefined' &&
    !window.opera &&
    HTMLElement.prototype &&
    !HTMLElement.prototype.insertAdjacentHTML
  ) {
    HTMLElement.prototype.insertAdjacentHTML = function (i, T) {
      var hI = this.ownerDocument.createRange();
      hI.setStartBefore(this);
      hI = hI.createContextualFragment(T);
      switch (i) {
        case 'beforeBegin':
          this.parentNode.insertBefore(hI, this);
          break;
        case 'afterBegin':
          this.insertBefore(hI, this.firstChild);
          break;
        case 'beforeEnd':
          this.appendChild(hI);
          break;
        case 'afterEnd':
          if (!this.nextSibling) {
            this.parentNode.appendChild(hI);
          } else {
            this.parentNode.insertBefore(hI, this.nextSibling);
          }
          break;
      }
    };
  }
  if (typeof HTMLElement != 'undefined' && !window.opera) {
    HTMLElement.prototype.contains = function (e) {
      if (e == this) {
        return true;
      }
      while ((e = e.parentNode)) {
        if (e == this) {
          return true;
        }
      }
      return false;
    };
  }
  if (!C.Browser.ie && typeof Event != 'undefined' && !window.opera) {
    Event.prototype.__defineSetter__('returnValue', function (e) {
      if (!e) {
        this.preventDefault();
      }
      return e;
    });
    Event.prototype.__defineSetter__('cancelBubble', function (e) {
      if (e) {
        this.stopPropagation();
      }
      return e;
    });
  }
  C.each = function (hJ, hI) {
    if (bQ(hI)) {
      for (var T = 0, e = hJ.length; T < e; T++) {
        if (hI.call(hJ, hJ[T], T) === false) {
          break;
        }
      }
    }
    return hJ;
  };
  C.Platform = {x11: 0, macintosh: 0, windows: 0, android: 0, iphone: 0, ipad: 0};
  for (var gj in C.Platform) {
    if (C.Platform.hasOwnProperty(gj)) {
      C.Platform[gj] = new RegExp(gj, 'i').test(window.navigator.userAgent) ? 1 : 0;
    }
  }
  if (typeof C.Dom === 'undefined') {
    C.Dom = {};
  }
  C.Dom.getComputedStyle = function (i, e) {
    var hI = i.nodeType == 9 ? i : i.ownerDocument || i.document,
      T;
    if (hI.defaultView && hI.defaultView.getComputedStyle) {
      T = hI.defaultView.getComputedStyle(i, null);
      if (T) {
        return T[e] || T.getPropertyValue(e);
      }
    } else {
      if (i.currentStyle) {
        return i.currentStyle[e] || '';
      }
    }
    return '';
  };
  var a6 = C.BaseEvent;
  var d5 = C.BaseClass;
  d5.prototype.toString = function () {
    return this._className || '';
  };
  C.on = function (T, i, e) {
    if (!(T = C.G(T))) {
      return T;
    }
    i = i.replace(/^on/, '');
    if (T.addEventListener) {
      T.addEventListener(i, e, false);
    } else {
      if (T.attachEvent) {
        T.attachEvent('on' + i, e);
      }
    }
    return T;
  };
  C.un = function (T, i, e) {
    if (!(T = C.G(T))) {
      return T;
    }
    i = i.replace(/^on/, '');
    if (T.removeEventListener) {
      T.removeEventListener(i, e, false);
    } else {
      if (T.detachEvent) {
        T.detachEvent('on' + i, e);
      }
    }
    return T;
  };
  C.hc = function (hI, T) {
    if (!hI || !hI.className || typeof hI.className != 'string') {
      return false;
    }
    var i = -1;
    try {
      i = hI.className == T || hI.className.search(new RegExp('(\\s|^)' + T + '(\\s|$)'));
    } catch (hJ) {
      return false;
    }
    return i > -1;
  };
  C.isEmptyObject = function (T) {
    if (Object.prototype.toString.call(T) === '[object Object]') {
      for (var e in T) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };
  var eN = {
    fontFamily: 'Arial,Helvetica,"PingFang SC","Hiragino Sans GB",STHeiti,sans-serif',
    mapStyleNameIdPair: {default: 0, 'grayed-out': 1},
    mapHost: 'https://map.baidu.com',
    apiHost: 'https://api.map.baidu.com',
    apiIMG: 'https://api.map.baidu.com/images',
    staticHost: 'http://webmap0.bdimg.com',
    imgPath: 'http://webmap0.bdimg.com/image/api/',
    tileDomain: [
      'https://maponline0.bdimg.com',
      'https://maponline1.bdimg.com',
      'https://maponline2.bdimg.com',
      'https://maponline3.bdimg.com',
    ],
    optDomain: 'http://10.120.25.45:8017',
    rasterTilePath: '/tile/',
    vectorTilePath: '/pvd/',
    originTilePath: ['https://pcor.baidu.com'],
    getIconSetPath: function (e) {
      var i = 'map_icons2x/';
      if (typeof e === 'string' && this.mapStyleNameIdPair[e] > 0) {
        i = 'map_icons2x_' + (this.mapStyleNameIdPair[e] - 1) + '/';
      }
      return 'https://maponline0.bdimg.com/sty/' + i;
    },
    getMapStyleFiles: function (T) {
      var hJ = true;
      if (typeof T === 'string' && T !== 'default') {
        hJ = false;
      }
      var hK = hJ ? '' : '_' + (this.mapStyleNameIdPair[T] - 1);
      var i = fr();
      var hI = 'udt=' + i.udt + '&v=' + i.ver;
      var e = 'https://maponline0.bdimg.com/sty/';
      return [
        e + 'icons_2x' + hK + '.js?' + hI,
        e + 'fs' + hK + '.js?' + hI,
        e + 'indoor_fs.js?' + hI,
      ];
    },
    tvc: {
      ditu: {
        normal: {version: '088', updateDate: '20190618'},
        satellite: {version: '009', updateDate: '20190618'},
        normalTraffic: {version: '081', updateDate: '20190618'},
        satelliteTraffic: {version: '083', updateDate: '20190618'},
        mapJS: {version: '104', updateDate: '20190618'},
        satelliteStreet: {version: '083', updateDate: '20190618'},
        panoClick: {version: '1033', updateDate: '20180108'},
        panoUdt: {version: '20180108', updateDate: '20180108'},
        panoSwfAPI: {version: '20150123', updateDate: '20150123'},
        panoSwfPlace: {version: '20141112', updateDate: '20141112'},
        earthVector: {version: '001', updateDate: '20190618'},
      },
    },
    msv: {mapstyle: {updateDate: '20190108', version: '001'}},
  };
  eN.imgResources = {
    blankGIF: eN.staticHost + '/res/litemapapi/v1d1/images/blank.gif?20170501',
    markerPng: eN.staticHost + '/res/litemapapi/v1d1/images/marker.png?20170501',
    locPng: eN.staticHost + '/res/litemapapi/v1d1/images/loc.png?20180918',
    locNewPng: eN.staticHost + '/res/litemapapi/v1d1/images/loc_new.png?20190314',
    zoomPng: eN.staticHost + '/res/litemapapi/v1d1/images/zoombtn.png?20180918',
    mapLogoPng: eN.staticHost + '/res/litemapapi/v1d1/images/logo-2x.png?20190226',
  };
  var eV = eN;
  var aY = 'ruler.cur';
  if (C.Browser.ie || C.Browser.edge) {
    C.extend(eV, {
      distCursor: 'url(' + eV.imgPath + aY + '),crosshair',
      defaultCursor: 'url(' + eV.imgPath + 'openhand.cur),default',
      draggingCursor: 'url(' + eV.imgPath + 'closedhand.cur),move',
    });
  } else {
    if (C.Browser.firefox) {
      C.extend(eV, {
        distCursor: 'url(' + eV.imgPath + aY + '),crosshair',
        defaultCursor: '-moz-grab',
        draggingCursor: '-moz-grabbing',
      });
    } else {
      if (C.Browser.chrome || C.Browser.safari) {
        C.extend(eV, {
          distCursor: 'url(' + eV.imgPath + aY + ') 2 6,crosshair',
          defaultCursor: 'url(' + eV.imgPath + 'openhand.cur) 8 8,default',
          draggingCursor: 'url(' + eV.imgPath + 'closedhand.cur) 8 8,move',
        });
        if (C.Platform.macintosh) {
          eV.defaultCursor = '-webkit-grab';
          eV.draggingCursor = '-webkit-grabbing';
        }
      } else {
        C.extend(eV, {
          distCursor: 'url(' + eV.imgPath + aY + '),crosshair',
          defaultCursor: 'url(' + eV.imgPath + 'openhand.cur),default',
          draggingCursor: 'url(' + eV.imgPath + 'closedhand.cur),move',
        });
      }
    }
  }
  bj = bj || {};
  bj.version = '3.0';
  bj._register = [];
  bj.register = function (e) {
    this._register[this._register.length] = e;
  };
  bj.guid = 1;
  bj.getGUID = function (e) {
    return (e || '') + bj.guid++;
  };
  var f5 = window.BMAP_AUTHENTIC_KEY || '';
  bj.bmapVerifyCbk = function (e) {
    if (e && e.error !== 0) {
      if (typeof map !== 'undefined') {
        map.getContainer().innerHTML = '';
        map.__listeners = {};
      }
      bj = null;
      var i =
        '百度未授权使用地图API，可能是因为您提供的密钥不是有效的百度LBS开放平台密钥，或此密钥未对本应用的百度地图JavaScriptAPI授权。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。';
      switch (e.error) {
        case 101:
          i =
            '开发者禁用了该ak的jsapi服务权限。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。';
          break;
        case 102:
          i =
            '开发者Referer不正确。您可以访问如下网址了解如何获取有效的密钥：http://lbsyun.baidu.com/apiconsole/key#。';
          break;
      }
      alert(i);
    }
  };
  bj.verify = function () {
    var e = eV.apiHost + '/?qt=verify&ak=' + f5 + '&callback=' + es + '.bmapVerifyCbk';
    hd.load(e);
  };
  bj.apiLoad = bj.apiLoad || function () {};
  function fC(i, e) {
    this._size = i;
    this._cache = [];
    this._totalGetTimes = 0;
    this._totalHitTimes = 0;
    this._options = {clearCallback: null, removeOldCallback: null};
    e = e || {};
    for (var T in e) {
      if (e.hasOwnProperty(T)) {
        this._options[T] = e[T];
      }
    }
  }
  fC.prototype.setData = function (T, hI) {
    var e = this._cache;
    var i = this._size;
    if (i === 0) {
      return;
    }
    if (e.length > i) {
      this._removeOld();
    }
    if (!e[T]) {
      e.push(hI);
    }
    e[T] = hI;
    hI._key_ = T;
  };
  fC.prototype.getHitRate = function () {
    return Math.round((this._totalHitTimes / this._totalGetTimes) * 1000) / 1000;
  };
  fC.prototype.getData = function (i) {
    var e = this._cache[i];
    if (e) {
      this._totalHitTimes++;
    }
    this._totalGetTimes++;
    return e;
  };
  fC.prototype.removeData = function (hJ) {
    if (this._options.clearCallback) {
      this._options.clearCallback(this._cache[hJ]);
    }
    var T = this._cache;
    var hK = T[hJ];
    for (var hI = 0, e = T.length; hI < e; hI++) {
      if (T[hI] === hK) {
        T.splice(hI, 1);
        break;
      }
    }
    delete T[hJ];
  };
  fC.prototype._removeOld = function () {
    var e = this._cache;
    var hJ = Math.round(this._size * 0.6);
    for (var hI = 0; hI < hJ; hI++) {
      var T = e[hI]._key_;
      if (this._options.clearCallback) {
        this._options.clearCallback(e[T]);
      }
      delete e[T];
    }
    e.splice(0, hJ);
    if (this._options.removeOldCallback) {
      this._options.removeOldCallback();
    }
  };
  fC.prototype.clear = function () {
    var T = this._cache;
    for (var hJ = 0, e = T.length; hJ < e; hJ++) {
      var hI = T[hJ]._key_;
      if (this._options.clearCallback) {
        this._options.clearCallback(T[hI]);
      }
      delete T[hI];
    }
    this._cache = T = [];
  };
  fC.prototype.forEach = function (hI) {
    var T = this._cache;
    for (var hK = 0, e = T.length; hK < e; hK++) {
      var hJ = T[hK]._key_;
      hI(T[hJ]);
    }
  };
  fC.prototype.getBatch = function (hJ) {
    var e = [];
    for (var hI = 0, T = hJ.length; hI < T; hI++) {
      if (this.getData(hJ[hI])) {
        e[e.length] = this.getData(hJ[hI]);
      }
    }
    return e;
  };
  fC.prototype.clearExcept = function (hK) {
    var T = this._cache;
    for (var e = T.length, hJ = e - 1; hJ >= 0; hJ--) {
      var hI = this._cache[hJ]._key_;
      if (!hK[hI]) {
        T.splice(hJ, 1);
        if (this._options.clearCallback) {
          this._options.clearCallback(T[hI]);
        }
        delete T[hI];
      }
    }
  };
  fC.prototype.getDataCount = function () {
    return this._cache.length;
  };
  function al() {}
  C.extend(al.prototype, {
    centerAndZoomIn: function (hN, T, hO) {
      var hL = this;
      if (!hN && !T) {
        return;
      }
      hN = hN || this.centerPoint;
      T = T || this.zoomLevel;
      T = this._getProperZoom(T).zoom;
      if (this.mapType === BMAP_EARTH_MAP) {
        if (!this._earth) {
          this.mapType = BMAPGL_NORMAL_MAP;
          this.temp.originMapType = BMAP_EARTH_MAP;
          function hM() {
            hL._earth = new bj.Earth(hL, {
              showRealSunlight: hL.config.showRealSunlight,
              showMilkyway: hL.config.showMilkyway,
              earthBackground: hL.config.earthBackground,
            });
            hL._proxyEarthEvents();
            hL._changeEarthMapType(BMAP_EARTH_MAP);
            C.extend(hL, bj.EarthView.prototype);
            if (!hL._navigationCtrl && hL.config.showControls) {
              hL._navigationCtrl = new bj.NavigationControl3D(hL);
            }
            delete hL.temp.originMapType;
          }
          d2.load('earth', function () {
            if (bj['FeatureStyle' + hL.config.style]) {
              hM();
            } else {
              hL.loadMapStyleFiles(function () {
                hM();
              });
            }
          });
        }
      }
      this.lastLevel = this.zoomLevel || T;
      this.zoomLevel = T;
      var hJ = new a6('onload');
      hJ.point = hN;
      hJ.zoom = T;
      this.centerPoint = this.restrictCenter(new hj(hN.lng, hN.lat));
      if (this.centerPoint.zoom) {
        this.zoomLevel = this.centerPoint.zoom;
      }
      this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
      this.defaultCenter = this.defaultCenter || this.centerPoint;
      if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
        var i = this.config.defaultMaxBounds;
        var hK = new cY(i, 'baidu', this.mapType);
        var hI = new cL({
          mapType: this.mapType,
          copyright: hK,
          customLayer: false,
          baseLayer: true,
          tileTypeName: 'web',
        });
        hI._isInnerLayer = true;
        this.addTileLayer(hI);
        if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
          this._addHybirdMap();
        }
      }
      this.dispatchEvent(hJ);
      this.loaded = true;
      hO = hO || {};
      hO.callback && hO.callback();
    },
    _setPlatformPosition: function (hO, hN, hR) {
      hR = hR || {};
      if (hO === 0 && hN === 0 && !hR.point) {
        return;
      }
      if (isNaN(hR.initMapOffsetX)) {
        hR.initMapOffsetX = this.offsetX;
      }
      if (isNaN(hR.initMapOffsetY)) {
        hR.initMapOffsetY = this.offsetY;
      }
      var hP = hO + hR.initMapOffsetX;
      var hM = hN + hR.initMapOffsetY;
      if (hR.point) {
        var i = this.restrictCenter(hR.point);
        if (!i.equals(this.centerPoint)) {
          this.centerPoint = i.clone();
          this.fire(new a6('oncenter_changed'));
        }
      } else {
        var hI = this.offsetX - hP;
        var e = this.offsetY - hM;
        var T = this.getZoomUnits();
        var hL = this.centerPoint.lng;
        var hK = this.centerPoint.lat;
        var hJ = new hj(hL, hK);
        this.centerPoint = this.restrictCenter(new hj(hJ.lng + hI * T, hJ.lat - e * T), T);
        this.fire(new a6('oncenter_changed'));
        if (this.zoomLevel < 10) {
          hP = this.offsetX - (this.centerPoint.lng - hJ.lng) / T;
          hM = this.offsetY + (this.centerPoint.lat - hJ.lat) / T;
        }
      }
      this.offsetX = hP;
      this.offsetY = hM;
      var hQ = this.platform.style;
      hQ.left = hP + 'px';
      hQ.top = hM + 'px';
      this.maskLayer.style.left = -hP + 'px';
      this.maskLayer.style.top = -hM + 'px';
      if (hR.dispatchEvent !== false) {
        this.dispatchEvent(new a6('onmoving'));
      }
    },
    zoomTo: function (e, hL, hP) {
      hP = hP || {};
      hP.zoomCenter = hL;
      if (hP.noAnimation !== true) {
        this.deepZoomTo(e, hP);
        return;
      }
      if (typeof e !== 'number') {
        return;
      }
      var hJ = b1[this.mapType];
      if (!hJ) {
        return;
      }
      var T = e;
      e = this._getProperZoom(e).zoom;
      if (e === this.zoomLevel) {
        var hM = new a6('onzoomexceeded');
        hM.targetZoom = T;
        this.dispatchEvent(hM);
        hP.callback && hP.callback();
        return;
      }
      this.lastLevel = this.zoomLevel;
      if (hL) {
        this.temp._cPoint = hL;
        this.temp._cPixel = this.pointToPixelIn(hL);
      } else {
        if (this.getInfoWindow()) {
          var hO = this.getInfoWindow().getPoint();
          this.temp._cPixel = this.pointToPixelIn(hO);
          this.temp._cPoint = hO;
        }
      }
      if (this.config.zoomCenter) {
        hL = this.config.zoomCenter;
        this.temp._cPoint = hL;
        this.temp._cPixel = this.pointToPixelIn(hL);
      }
      if (hL || (this.temp.infoWin && this.temp.infoWin.isOpen())) {
        var i = this.temp._cPoint;
        var hN = this.temp._cPixel;
        var hI = this.getZoomUnits(e);
        var hK = new hj(
          i.lng + hI * (this.width / 2 - hN.x),
          i.lat - hI * (this.height / 2 - hN.y),
        );
        this.centerPoint = this.restrictCenter(hK, hI, e);
        if (this.centerPoint.zoom) {
          e = this.centerPoint.zoom;
        }
      }
      if (hP.fireEvent !== false) {
        this.dispatchEvent(new a6('onzoomstart'));
      }
      if (e !== this.zoomLevel) {
        this.zoomLevel = e;
        this.dispatchEvent(new a6('onzooming'));
        this.dispatchEvent(new a6('onzoomstartcode'));
      }
      if (hP.fireEvent !== false) {
        this.dispatchEvent(new a6('onzoomend'));
      }
      if (hP.callback) {
        hP.callback();
      }
    },
    deepZoomMedia: function (e) {
      var i = this;
      if (!i.temp.isStdCtrlBusy) {
        i.temp.isStdCtrlBusy = true;
        i.deepZoomTo(i.zoomLevel + e);
        setTimeout(function () {
          i.temp.isStdCtrlBusy = false;
        }, 400);
      }
    },
    deepZoomTo: function (hM, hI) {
      hI = hI || {};
      var hK = hM - this.zoomLevel;
      var hJ = this._getProperZoom(hM);
      if (hJ.exceeded) {
        var e = new a6('onzoomexceeded');
        e.targetZoom = hM;
        this.dispatchEvent(e);
        return;
      }
      var i;
      if (hI.zoomCenter) {
        i = this.pointToPixelIn(hI.zoomCenter);
      } else {
        if (this.getInfoWindow()) {
          i = this.pointToPixelIn(this.getInfoWindow().getPoint(), {zoom: this.lastLevel});
        } else {
          var i = new eb(this.width / 2, this.height / 2);
        }
      }
      this.lastLevel = this.zoomLevel;
      var hL = this.deepZoom || new bz(this);
      var T = hK > 0 ? 1 : -1;
      hL.zoomMap(i, hK, T, null, hI);
    },
    flyToIn: function (hN, e) {
      if (e === this.zoomLevel) {
        this.panToIn(hN);
        return;
      }
      var hK = this._getProperZoom(e);
      if (hK.exceeded) {
        var hO = new a6('onzoomexceeded');
        hO.targetZoom = e;
        this.dispatchEvent(hO);
        return;
      }
      var hM = e - this.zoomLevel;
      var T = new eb(this.width / 2, this.height / 2);
      var i = this.pointToPixelIn(hN);
      var hL = new d1(i.x - T.x, i.y - T.y);
      this.lastLevel = this.zoomLevel;
      if (
        Math.abs(hM) >= 4 ||
        Math.abs(hL.width) > this.width ||
        Math.abs(hL.height) > this.height
      ) {
        this.centerAndZoomIn(hN, e);
        return;
      }
      var hJ = this.deepZoom || new bz(this);
      var hI = hM > 0 ? 1 : -1;
      hJ.zoomMap(i, hM, hI, hL);
    },
    panToIn: function (i, T) {
      T = T || {};
      if (!i || i.equals(this.centerPoint)) {
        T.callback && T.callback();
        return;
      }
      var hI = this.pointToPixelIn(i);
      var e = Math.round(this.width / 2);
      var hJ = Math.round(this.height / 2);
      if (
        Math.abs(e - hI.x) > this.width ||
        Math.abs(hJ - hI.y) > this.height ||
        T.noAnimation === true
      ) {
        this._panToIn(e - hI.x, hJ - hI.y, i);
        T.callback && T.callback();
      } else {
        this._panBy(e - hI.x, hJ - hI.y, T);
      }
    },
    _panToIn: function (i, e, hI) {
      var T = this.temp;
      if (T.operating === true) {
        return;
      }
      if (T.dragAni) {
        T.dragAni.stop();
        T.dragAni = null;
        this.dispatchEvent(new a6('onmoveend'));
      }
      this.dispatchEvent(new a6('onmovestart'));
      this._setPlatformPosition(i, e, {point: hI});
      this.dispatchEvent(new a6('onmoveend'));
    },
    panBy: function (i, e, T) {
      T = T || {};
      i = Math.round(i) || 0;
      e = Math.round(e) || 0;
      if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && T.noAnimation !== true) {
        this._panBy(i, e, T);
      } else {
        this._panToIn(i, e);
        T.callback && T.callback();
      }
    },
    _panBy: function (i, e, hJ) {
      if (this.temp.operating === true) {
        return;
      }
      hJ = hJ || {};
      this.dispatchEvent(new a6('onmovestart'));
      var hI = this;
      var T = hI.temp;
      T.pl = hI.offsetX;
      T.pt = hI.offsetY;
      if (T.tlPan) {
        T.tlPan.cancel();
      }
      if (T.dragAni) {
        T.dragAni.stop();
        T.dragAni = null;
        this.dispatchEvent(new a6('onmoveend'));
      }
      T.tlPan = new o({
        fps: hJ.fps || hI.config.fps,
        duration: hJ.duration || hI.config.actionDuration,
        transition: hJ.transition || ci.easeInOutQuad,
        render: function (hK) {
          this.terminative = hI.temp.operating;
          if (hI.temp.operating) {
            return;
          }
          hI._setPlatformPosition(Math.ceil(i * hK), Math.ceil(e * hK), {
            initMapOffsetX: T.pl,
            initMapOffsetY: T.pt,
          });
        },
        finish: function (hK) {
          hI.dispatchEvent(new a6('onmoveend'));
          hI.temp.tlPan = false;
          if (hI.temp.stopArrow === true) {
            hI.temp.stopArrow = false;
            if (hI.temp.arrow !== 0) {
              hI._arrow();
            }
          }
          hJ.callback && hJ.callback();
        },
      });
    },
    getCenterIn: function () {
      return this.centerPoint;
    },
    getZoom: function () {
      return this.zoomLevel;
    },
    setTilt: function () {},
    getTilt: function () {
      return this._tilt;
    },
    setHeading: function () {},
    getHeading: function () {
      return this._heading;
    },
    restrictCenter: function (hM, hJ, hN) {
      this.isRestrict = false;
      hJ = hJ || this.getZoomUnits();
      hN = hN || this.zoomLevel;
      var T = this.pixelToPointIn(new eb(0, 0), {center: hM, zoom: hN});
      var hK = this.pixelToPointIn(new eb(0, this.height), {center: hM, zoom: hN});
      if (this.zoomLevel < 5) {
        if (T.lat > c2.MAX_LAT && hK.lat < c2.MIN_LAT) {
          this.isRestrict = true;
          var i = c2.MAX_LAT - hM.lat;
          var e = hM.lat - c2.MIN_LAT;
          var hL;
          if (i < e) {
            hL = i / (this.height / 2);
          } else {
            hL = e / (this.height / 2);
          }
          var hI = 18 - eu(hL);
          this.zoomLevel = Math.ceil(hI);
          hM.zoom = Math.ceil(hI);
          return hM;
        }
      }
      if (T.lat > c2.MAX_LAT) {
        this.isRestrict = true;
        hM.lat = c2.MAX_LAT - (this.height / 2) * hJ;
      } else {
        if (hK.lat < c2.MIN_LAT) {
          this.isRestrict = true;
          hM.lat = c2.MIN_LAT + (this.height / 2) * hJ;
        }
      }
      return hM;
    },
  });
  function c2(e, T) {
    if (typeof e === 'string') {
      e = document.getElementById(e);
    }
    d5.call(this);
    this.container = e;
    this.width = e.clientWidth;
    this.height = e.clientHeight;
    this.offsetX = 0;
    this.offsetY = 0;
    this._setStyle(e);
    e.unselectable = 'on';
    e.innerHTML = '';
    C.ac(e, 'bmap-container');
    e.appendChild(this.render());
    this._initDate = new Date();
    this.platform = e.children[0];
    this.maskLayer = this.platform.children[0];
    this._panes = {};
    this.centerPoint = new hj(0, 0);
    this.zoomLevel = 0;
    this._heading = 0;
    this._tilt = 0;
    this._bounds = new dM();
    this.lastLevel = 0;
    this._lock = false;
    this._enableTiltZoom = 7;
    this._enableHeadingZoom = 7;
    this.defaultZoomLevel = null;
    this.defaultCenter = null;
    this.zoomEventStatus = 'idle';
    this.currentOperation = dO.idle;
    this._setConfig(T);
    this._initMapRenderType();
    this._animationInfo = {};
    this._animationInfoUnstopable = {};
    this.suspendLoad = false;
    this._customTileLabels = [];
    if (this._renderType === 'webgl') {
      this._workerMgr = new f0(this);
      this._featureMgr = new c6();
      C.extend(this, c1.prototype);
      this.jobScheduler = new fG(this);
      this.benchmark = new ac();
      this._setupWebGLMap();
      this.deviceInfo = {hardwareInfo: {renderer: '', vendor: ''}};
      if (a3.ifSupportWebGL._renderer) {
        this.deviceInfo.hardwareInfo.renderer = a3.ifSupportWebGL._renderer;
        this.deviceInfo.hardwareInfo.vendor = a3.ifSupportWebGL._vendor;
      }
    } else {
      C.extend(this, al.prototype);
    }
    if (!b1[this.config.mapType]) {
      this.config.mapType = BMAPGL_NORMAL_MAP;
    }
    if (this.config.mapType === BMAP_EARTH_MAP && !this.config.enableEarth) {
      if (this.forceEnableEarth() === false) {
        this.config.mapType = BMAPGL_NORMAL_MAP;
      }
    }
    this.mapType = this.config.mapType;
    this.preMapType = null;
    if (this.config.enableEarth) {
      var hK = this.maskLayer.style;
      hK.opacity = 0;
      hK.background = '#000';
      if (this.config.mapType === BMAP_EARTH_MAP) {
        hK.opacity = 1;
      }
      setTimeout(function () {
        hK.WebkitTransition = hK.transition = 'opacity .4s';
      }, 100);
    }
    this._isHybridShow = this.config.showStreetLayer;
    this.temp = {
      operating: false,
      arrow: 0,
      lastDomMoveTime: 0,
      lastLoadTileTime: 0,
      lastMovingTime: 0,
      canKeyboard: false,
      I: function (i) {
        return C.I(i);
      },
      curSpots: [],
      curSpotsArray: [],
      curAreaSpot: null,
      spotsGuid: 1,
      registerIndex: -1,
      hoverOnSpot: null,
      isStdCtrlBusy: false,
    };
    window.InstanceCore = this.temp.I;
    this.platform.style.cursor = this.config.defaultCursor;
    this._bind();
    for (var hI = 0; hI < bj._register.length; hI++) {
      bj._register[hI](this);
    }
    this.temp.registerIndex = hI;
    var hJ = this;
    if (this._renderType === 'webgl') {
      d2.load('oppcgl', function () {
        hJ._asyncRegister();
      });
    } else {
      d2.load('oppc', function () {
        hJ._asyncRegister();
      });
    }
    if (this.config.mapType === 'B_EARTH_MAP') {
      if (!bj.Earth) {
        d2.load('earth', function () {});
      } else {
        hJ._syncAndChangeMapType('B_EARTH_MAP');
      }
    }
  }
  c2.MAX_TILT = 87;
  c2.MAX_DRAG_TILT = 73;
  c2.MAX_DRAG_TILT_L2 = 50;
  c2.MIN_TILT = 0;
  c2.MAX_LAT = 19431424;
  c2.MIN_LAT = -16023552;
  c2.WORLD_SIZE_MC_HALF = 20037726.372307256;
  c2.WORLD_SIZE_MC = c2.WORLD_SIZE_MC_HALF * 2;
  c2.RIGHT_EDGE_POINT = new hj(c2.WORLD_SIZE_MC_HALF, 0);
  c2.LEFT_EDGE_POINT = new hj(-c2.WORLD_SIZE_MC_HALF, 0);
  c2.inherits(d5, 'Map');
  C.extend(c2.prototype, {
    render: function () {
      var e = S('div', {id: 'platform'});
      var hI = e.style;
      hI.overflow = 'visible';
      hI.position = 'absolute';
      hI.zIndex = 5;
      hI.top = hI.left = '0px';
      var i = S('div', {id: 'mask', class: 'BMap_mask'});
      var T = i.style;
      T.position = 'absolute';
      T.top = T.left = '0px';
      T.zIndex = '9';
      T.overflow = 'hidden';
      T.WebkitUserSelect = 'none';
      T.width = this.width + 'px';
      T.height = this.height + 'px';
      e.appendChild(i);
      return e;
    },
    _initMapRenderType: function () {
      var e = this.config.forceRenderType;
      if (e === 'dom') {
        this._renderType = 'dom';
        return;
      } else {
        if (e === 'canvas') {
          if (a3.isModernBrowser && !a3.ifCanvas2dInBlackList()) {
            this._renderType = 'canvas';
            return;
          } else {
            this._renderType = 'dom';
            return;
          }
        } else {
          if (e === 'webgl') {
            if (a3.ifSupportWebGL()) {
              this._renderType = 'webgl';
              return;
            }
          }
        }
      }
      if (a3.ifSupportWebGL() && a3.ifEnableWebGLMap()) {
        this._renderType = 'webgl';
        return;
      }
      if (a3.isModernBrowser && a3.ifEnableCanvas2dMap()) {
        this._renderType = 'canvas';
        return;
      }
      this._renderType = 'dom';
    },
    _setConfig: function (i) {
      i = i || {};
      this.config = {
        bottomOffset: 0,
        clickInterval: 200,
        enableDragging: true,
        enableKeyboard: false,
        enableDblclickZoom: true,
        enableContinuousZoom: true,
        enableWheelZoom: false,
        enablePinchZoom: true,
        enableRotateGestures: true,
        enableTiltGestures: true,
        fixCenterWhenPinch: false,
        enableAutoResize: true,
        zoomCenter: null,
        fps: C.Browser.ie ? 30 : 60,
        zoomerDuration: 240,
        actionDuration: 450,
        defaultCursor: eV.defaultCursor,
        draggingCursor: eV.draggingCursor,
        coordType: BMAP_COORD_MERCATOR,
        mapType: BMAPGL_NORMAL_MAP,
        drawer: BMAP_SYS_DRAWER,
        enableInertialDragging: true,
        drawMargin: 500,
        drawMarginGL: 500,
        enableFulltimeSpotClick: false,
        enableResizeOnCenter: false,
        isModernBrowser: a3.isModernBrowser,
        forceRenderType: '',
        textRenderType: null,
        ratio: a1() >= 1.5 ? 2 : 1,
        enableEarth: a3.ifEnableEarth(),
        defaultMaxBounds: new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712)),
        showControls: false,
        showRealSunlight: true,
        showMilkyway: true,
        earthBackground: null,
        showStreetLayer: true,
        minZoom: null,
        maxZoom: null,
        style: 'default',
        enableIconClick: false,
        autoSafeArea: false,
        ak: null,
        webgl2: false,
        restrictCenter: true,
        smaa: true,
        preserveDrawingBuffer: false,
      };
      for (var T in i) {
        if (i.hasOwnProperty(T)) {
          this.config[T] = i[T];
          if (T === 'fixCenterWhenResize') {
            this.config.enableResizeOnCenter = i[T];
          }
        }
      }
      if (i.style) {
        if (i.style['styleId'] && i.style['styleId'].length < 32) {
          this.config.style = i.style['styleId'];
        } else {
          this.config.style = i.style;
        }
      }
      this._setTextRenderType();
      this._displayOptions = {
        poi: true,
        poiText: true,
        poiIcon: true,
        overlay: true,
        layer: true,
        building: true,
        indoor: true,
        street: true,
        skyColors: ['rgba(226, 237, 248, 0)', 'rgba(186, 211, 252, 1)'],
        isFlat: false,
      };
      if (i.displayOptions) {
        for (var e in i.displayOptions) {
          if (i.displayOptions.hasOwnProperty(e)) {
            this._displayOptions[e] = i.displayOptions[e];
          }
        }
      }
      if (this.config.restrictCenter === false) {
        this._enableTiltZoom = 0;
        this._enableHeadingZoom = 0;
      }
    },
    getMinZoom: function () {
      var T;
      if (b1[this.mapType][this._renderType]) {
        T = b1[this.mapType][this._renderType].minZoom;
      } else {
        T = b1[this.mapType].minZoom;
      }
      if (this.config.minZoom !== null && this.config.minZoom >= T) {
        T = this.config.minZoom;
      }
      if (this.mapType === 'B_EARTH_MAP') {
        return T;
      }
      var i = this.getSize();
      var e = this.worldSize(T);
      while (e < i.width) {
        T++;
        e = this.worldSize(T);
      }
      return T;
    },
    getMaxZoom: function () {
      var e;
      if (b1[this.mapType][this._renderType]) {
        e = b1[this.mapType][this._renderType].maxZoom;
      } else {
        e = b1[this.mapType].maxZoom;
      }
      if (this.config.maxZoom !== null && this.config.maxZoom <= e) {
        e = this.config.maxZoom;
      } else {
        if (this._renderType === 'webgl') {
          e = 21;
        }
      }
      return e;
    },
    _drawFrame: function () {
      this._webglMapScene._painter.draw();
    },
    _setupWebGLMap: function () {
      var e = this;
      d2.load('mapgl', function () {
        e._asyncRegister();
      });
    },
    _setStyle: function (i) {
      var e = i.style;
      e.overflow = 'hidden';
      if (fQ(i).position !== 'absolute') {
        e.position = 'relative';
      }
      e.backgroundImage = 'url(' + eV.imgPath + 'bg.png)';
      e.textAlign = 'left';
      e.touchAction = e.MSTouchAction = 'none';
    },
    _bind: function () {
      var e = this;
      if (e._renderType !== 'webgl') {
        e._watchSize = function () {
          var T = e.getContainerSize();
          if (e.width !== T.width || e.height !== T.height) {
            var hL = (T.width - e.width) / 2;
            var hN = (T.height - e.height) / 2;
            var hI = e.getZoomUnits();
            var hK = e.centerPoint;
            if (hK && !e.config.enableResizeOnCenter) {
              e.centerPoint = new hj(hK.lng + hL * hI, hK.lat - hN * hI);
            }
            e.maskLayer.style.width = (e.width = T.width) + 'px';
            e.maskLayer.style.height = (e.height = T.height) + 'px';
            var hJ = new a6('onresize');
            hJ.size = T;
            e.dispatchEvent(hJ);
            e.fire(new a6('onsize_changed'));
            var i = parseInt(e.platform.style.left, 10) || 0;
            var hM = parseInt(e.platform.style.top, 10) || 0;
            if (
              e.currentOperation !== 'undefined' &&
              e.currentOperation !== dO.idle &&
              (e.offsetX !== i || e.offsetY !== hM)
            ) {
              e._setPlatformPosition(i, hM);
            }
          }
        };
      } else {
        e._watchSize = function () {
          var i = e.getContainerSize();
          if (e.width !== i.width || e.height !== i.height) {
            var hI = e.getSize();
            e.maskLayer.style.width = (e.width = i.width) + 'px';
            e.maskLayer.style.height = (e.height = i.height) + 'px';
            if (a1() !== e.config.ratio) {
              e.config.ratio = a1();
            }
            var hJ = new a6('onresize');
            hJ.size = i;
            e.dispatchEvent(hJ);
            var T = new a6('onsize_changed');
            T.size = i;
            T.oldSize = hI;
            e.fire(T);
          }
        };
      }
      if (e.config.enableAutoResize) {
        e.temp.autoResizeTimer = setInterval(e._watchSize, 16);
      }
      this.on('size_changed', function () {
        var i = e.getMinZoom();
        if (e.zoomLevel < i) {
          e.setZoomIn(i, {noAnimation: true});
        }
      });
      this.on('zoom_changed', function () {
        this.dispatchEvent(new a6('onzooming'));
      });
    },
    addControl: function (e) {
      if (e && bQ(e._i)) {
        e._i(this);
        this.dispatchEvent(new a6('onaddcontrol', e));
      }
    },
    removeControl: function (e) {
      if (e && bQ(e.remove)) {
        e.remove();
        this.dispatchEvent(new a6('onremovecontrol', e));
      }
    },
    addContextMenu: function (e) {
      if (e) {
        e.initialize(this);
        this.dispatchEvent(new a6('onaddcontextmenu', e));
      }
    },
    removeContextMenu: function (e) {
      if (e) {
        this.dispatchEvent(new a6('onremovecontextmenu', e));
        e.remove();
      }
    },
    addOverlay: function (i) {
      if (i && bQ(i._i)) {
        var T = new a6('onbeforeaddoverlay', i);
        T.overlay = i;
        this.dispatchEvent(T);
        i._i(this);
        T = new a6('onaddoverlay', i);
        T.overlay = i;
        this.dispatchEvent(T);
      }
    },
    removeOverlay: function (i) {
      if (i && bQ(i.remove)) {
        var T = new a6('onremoveoverlay', i);
        T.overlay = i;
        i.remove();
        this.dispatchEvent(T);
      }
    },
    clearOverlays: function () {
      this.dispatchEvent(new a6('onclearoverlays'));
    },
    addTileLayer: function (hJ) {
      if (!hJ) {
        return;
      }
      for (var hI = 0, e = this.tileMgr.tileLayers.length; hI < e; hI++) {
        var T = this.tileMgr.tileLayers[hI];
        if (T === hJ || T.getMapType() === hJ.getMapType()) {
          return;
        }
      }
      hJ.initialize(this);
      this.dispatchEvent(new a6('onaddtilelayer', hJ));
    },
    removeTileLayer: function (e) {
      if (e) {
        e.remove();
        this.dispatchEvent(new a6('onremovetilelayer', e));
      }
    },
    getTileLayer: function (e) {
      if (this.tileMgr) {
        return this.tileMgr.getTileLayer(e);
      }
      return null;
    },
    setMapType: function (e) {
      var i = this;
      if (this.mapType === e || this._mapTypeChanging) {
        return;
      }
      if (e === BMAP_EARTH_MAP && !this.config.enableEarth) {
        return;
      }
      if (this._earth && this._earth.getLock()) {
        return;
      }
      this._mapTypeChanging = true;
      this.preMapType = this.mapType;
      this._boundsInPreMapType = this.getBoundsIn();
      if (this.preMapType === BMAP_SATELLITE_MAP) {
        this._preStreetLayerShow = this._isHybridShow;
      }
      if (e === BMAP_EARTH_MAP) {
        if (!bj.Earth) {
          d2.load('earth', function () {
            i._syncAndChangeMapType(e);
          });
          return;
        }
        i._syncAndChangeMapType(e);
      } else {
        if (this.preMapType !== BMAP_EARTH_MAP) {
          this._changeFlatMapType(e);
          this._mapTypeChanging = false;
        } else {
          this._setMapTypeStatus(e, function (T, hI) {
            var hJ = i._earth.getEarthCanvas();
            i._changeFlatMapType(e, this.preMapType);
            if (i._mapTypeChangAni) {
              i._mapTypeChangAni.stop();
            }
            i._mapTypeChangAni = fc.start({
              el: hJ,
              style: 'opacity',
              startValue: 1,
              endValue: 0,
              duration: 200,
              callback: function () {
                i._mapTypeChangAni = null;
                i._mapTypeChanging = false;
              },
            });
            T = ef.convertLL2MC(T);
            if (i._renderType === 'webgl') {
              C.extend(i, c1.prototype);
              i.setCenterIn(T, {noAnimation: true});
              i.setZoomIn(hI, {noAnimation: true});
            } else {
              C.extend(i, al.prototype);
              i.centerAndZoomIn(T, hI);
            }
          });
        }
      }
    },
    _changeFlatMapType: function (hL) {
      if (!hL || !b1[hL]) {
        return;
      }
      var hT = this.preMapType;
      this.mapType = hL;
      var hI = this.getTileLayer(hT);
      if (hI) {
        this.removeTileLayer(hI);
      }
      if (hT !== BMAP_EARTH_MAP || this._renderType !== 'webgl' || this.baseLayerAdded !== true) {
        var T = new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712));
        var hQ = new cY(T, 'baidu', hL);
        var hS = this._renderType === 'webgl' ? 2 : 1;
        var hJ = new cL({
          mapType: hL,
          copyright: hQ,
          dataType: hS,
          customLayer: false,
          baseLayer: true,
          tileTypeName: 'na',
        });
        hJ._isInnerLayer = true;
        this.addTileLayer(hJ);
        if (this._renderType === 'webgl' && !this.baseLayerAdded) {
          this.baseLayerAdded = true;
        }
      }
      if (hT === BMAP_SATELLITE_MAP) {
        this._preStreetLayerShow = this._isHybridShow;
        this._removeHybirdMap();
      } else {
        if (hL === BMAP_SATELLITE_MAP) {
          if (
            this._preStreetLayerShow === true ||
            typeof this._preStreetLayerShow === 'undefined'
          ) {
            this._addHybirdMap();
          }
        }
      }
      var hN = this.tileMgr.tileLayers;
      for (var hM = 0, hK = hN.length; hM < hK; hM++) {
        var hO = hN[hM];
        var hR = hO.tilesDiv;
        if (!hR) {
          continue;
        }
        if (!hO._isInnerLayer && hR.style.visibility === 'hidden') {
          hR.style.visibility = '';
        }
      }
      var hP = new a6('onmaptypechange');
      hP.zoomLevel = this.zoomLevel;
      hP.mapType = hL;
      hP.exMapType = hT;
      this.dispatchEvent(hP);
    },
    showStreetLayer: function (e) {
      e ? this._addHybirdMap() : this._removeHybirdMap();
    },
    hideStreetLayer: function (e) {
      this._hideStreetLayerOptions = e;
      this._removeHybirdMap(e);
    },
    _addHybirdMap: function () {
      this._isHybridShow = true;
      if (this.mapType === 'B_EARTH_MAP') {
        if (this._earth) {
          this._earth.showStreetLayer();
        }
        return;
      }
      if (this._hybridTileLayer) {
        this.addTileLayer(this._hybridTileLayer);
        var hK = new a6('onstreetlayer_show');
        this.dispatchEvent(hK);
        return;
      }
      var hJ = new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712));
      var T = new cY(hJ, '', BMAP_HYBRID_MAP);
      var i = new cL({copyright: T, transparentPng: true, tileTypeName: 'web'});
      i._isInnerLayer = true;
      var hI = this.isCanvasMap();
      i.getTilesUrl = function (hL, hQ) {
        var hO = b1.B_STREET_MAP;
        var hP = az('ditu', 'satelliteStreet');
        var hM = hP.ver;
        var e = hP.udt;
        var hN =
          hO.tileUrls[Math.abs(hL.x + hL.y) % hO.tileUrls.length] +
          '?qt=vtile&x=' +
          (hL.x + '').replace(/-/gi, 'M') +
          '&y=' +
          (hL.y + '').replace(/-/gi, 'M') +
          '&z=' +
          hQ +
          '&styles=sl&v=' +
          hM +
          '&udt=' +
          e +
          '$scaler=' +
          a1() +
          '&showtext=' +
          (hI ? 0 : 1);
        return hN;
      };
      this._isHybridShow = true;
      this.addTileLayer(i);
      this._hybridTileLayer = i;
      var hK = new a6('onstreetlayer_show');
      this.dispatchEvent(hK);
    },
    _removeHybirdMap: function (i) {
      this._isHybridShow = false;
      if (this.mapType === 'B_EARTH_MAP') {
        if (this._earth) {
          this._earth.hideStreetLayer(i);
        }
        return;
      }
      if (this._hybridTileLayer) {
        this.removeTileLayer(this._hybridTileLayer);
        var T = new a6('onstreetlayer_hide');
        this.dispatchEvent(T);
      }
    },
    isStreetLayerShow: function () {
      return this._isHybridShow;
    },
    getTileId: function (e, hK) {
      var hI = b1[this.mapType];
      if (typeof hI !== 'object') {
        return null;
      }
      var T = hI.baseUnits * Math.pow(2, hI.zoomLevelBase - hK);
      var hJ = parseInt(e.lng / T, 10);
      var i = parseInt(e.lat / T, 10);
      return {row: hJ, column: i, level: hK};
    },
    reset: function () {
      this.centerAndZoomIn(this.defaultCenter, this.defaultZoomLevel, true);
    },
    setOptions: function (e) {
      e = e || {};
      for (var T in e) {
        if (e.hasOwnProperty(T)) {
          var i = true;
          if (typeof e[T] !== 'object') {
            i = e[T] !== this.config[T];
          }
          this.config[T] = e[T];
          if (T === 'fixCenterWhenResize') {
            this.config.enableResizeOnCenter = e[T];
          }
          if (!i) {
            continue;
          }
          switch (T) {
            case 'style':
              this.fire(new a6('onstyle_willchange'));
              var hI = this;
              this.loadMapStyleFiles(function () {
                hI.fire(new a6('onstyle_changed'));
              });
              break;
            case 'enableAutoResize':
              if (e[T] === true) {
                this.enableAutoResize();
              } else {
                this.disableAutoResize();
              }
              break;
            case 'displayOptions':
              this.setDisplayOptions(e[T]);
              break;
          }
        }
      }
    },
    enableDragging: function () {
      this.config.enableDragging = true;
    },
    disableDragging: function () {
      this.config.enableDragging = false;
    },
    enableInertialDragging: function () {
      this.config.enableInertialDragging = true;
    },
    disableInertialDragging: function () {
      this.config.enableInertialDragging = false;
    },
    enableScrollWheelZoom: function () {
      this.config.enableWheelZoom = true;
    },
    disableScrollWheelZoom: function () {
      this.config.enableWheelZoom = false;
    },
    enableContinuousZoom: function () {
      this.config.enableContinuousZoom = true;
    },
    disableContinuousZoom: function () {
      this.config.enableContinuousZoom = false;
    },
    enableResizeOnCenter: function () {
      this.config.enableResizeOnCenter = true;
    },
    disableResizeOnCenter: function () {
      this.config.enableResizeOnCenter = false;
    },
    enableDoubleClickZoom: function () {
      this.config.enableDblclickZoom = true;
    },
    disableDoubleClickZoom: function () {
      this.config.enableDblclickZoom = false;
    },
    enableKeyboard: function () {
      this.config.enableKeyboard = true;
    },
    disableKeyboard: function () {
      this.config.enableKeyboard = false;
    },
    getSize: function () {
      return new d1(this.width, this.height);
    },
    enablePinchToZoom: function () {
      this.config.enablePinchZoom = true;
    },
    disablePinchToZoom: function () {
      this.config.enablePinchZoom = false;
    },
    enableAutoResize: function () {
      this.config.enableAutoResize = true;
      this._watchSize();
      if (!this.temp.autoResizeTimer) {
        this.temp.autoResizeTimer = setInterval(this._watchSize, 16);
      }
    },
    disableAutoResize: function () {
      this.config.enableAutoResize = false;
      if (this.temp.autoResizeTimer) {
        clearInterval(this.temp.autoResizeTimer);
        this.temp.autoResizeTimer = null;
      }
    },
    checkResize: function () {
      this._watchSize();
    },
    resize: function () {
      this._watchSize();
    },
    getContainerSize: function () {
      return new d1(this.container.clientWidth, this.container.clientHeight);
    },
    _getProperZoom: function (T) {
      if (!T) {
        T = this.zoomLevel;
      }
      var i = this.getMinZoom();
      var e = this.getMaxZoom();
      var hI = false;
      if (T < i) {
        hI = true;
        T = i;
      }
      if (T > e) {
        hI = true;
        T = e;
      }
      if (this._renderType !== 'webgl') {
        T = Math.round(T);
      }
      return {zoom: T, exceeded: hI};
    },
    getContainer: function () {
      return this.container;
    },
    getZoomUnits: function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return Math.pow(2, 18 - this._earth.getImageZoom());
      }
      var e = b1[this.mapType];
      if (typeof e !== 'object') {
        return null;
      }
      var i = T || this.zoomLevel;
      return Math.pow(2, e.zoomLevelBase - i);
    },
    pointToPixelIn: function (hR, hT) {
      if (!hR) {
        return;
      }
      hT = hT || {};
      if (this.mapType === BMAP_EARTH_MAP) {
        var hI;
        if (!hR._llPt) {
          hI = ef.convertMC2LL(hR);
          hR._llPt = hI;
        }
        hI = hR._llPt;
        var hN = null;
        var T = null;
        if (typeof hT.zoom === 'number') {
          var hQ = this._earth;
          var hS = hQ._getEarthZoomByImgZoom(hT.zoom);
          if (hS <= 3) {
            hN = hQ._generateTmpPMatrix(hS);
          }
          T = hQ._generateTmpMVMatrix(hQ.getCenter(), hS);
        }
        var hJ = this._earth.fromLatLngToPixel(hI, {
          useRound: false,
          isCalcOnBack: true,
          matrixInfo: {modelViewMatrix: T, projectionMatrix: hN},
        });
        return hJ;
      }
      if ((this._heading % 360 === 0 && this._tilt === 0) || !this._webglMapCamera) {
        var hP = this.getZoomUnits(hT.zoom);
        var hL = hT.center || this.centerPoint;
        var i = this.width / 2;
        var hK = this.height / 2;
        var hO = (hR.lng - hL.lng) / hP + i;
        var hM = (hL.lat - hR.lat) / hP + hK;
        if (hT.useRound !== false) {
          hO = Math.round(hO);
          hM = Math.round(hM);
        }
        return new eb(hO, hM);
      }
      var e = this._webglMapCamera.fromMCToScreenPixel(hR.lng, hR.lat, hT);
      if (hT.useRound === false) {
        return e;
      }
      e.x = Math.round(e.x);
      e.y = Math.round(e.y);
      return e;
    },
    pixelToPointIn: function (e, hP) {
      if (!e) {
        return;
      }
      hP = hP || {};
      if (this.mapType === BMAP_EARTH_MAP) {
        if (typeof hP.zoom === 'number') {
          var hN = this._earth;
          var hK = null;
          var T = null;
          var hO = hN._getEarthZoomByImgZoom(hP.zoom);
          if (hO <= 3) {
            hK = hN._generateTmpPMatrix(hO);
          }
          T = hN._generateTmpMVMatrix(hN.getCenter(), hO);
        }
        var i = this._earth.fromPixelToLatLng(e, {
          matrixInfo: {modelViewMatrix: T, projectionMatrix: hK},
        });
        if (i === null) {
          return null;
        }
        return ef.convertLL2MC(i);
      }
      if ((this._heading % 360 !== 0 || this._tilt > 0) && this._webglMapCamera) {
        return this._webglMapCamera.fromScreenPixelToMC(e.x, e.y, hP);
      }
      var hL = hP.center || this.centerPoint;
      var hM = this.getZoomUnits(hP.zoom);
      var hJ = hL.lng + hM * (e.x - this.width / 2);
      var hI = hL.lat - hM * (e.y - this.height / 2);
      return new hj(hJ, hI);
    },
    pointToOverlayPixelIn: function (e, hI) {
      hI = hI || {};
      var T = this.pointToPixelIn(e, {
        zoom: hI.zoom,
        center: hI.center,
        forLabel: true,
        frustumTest: true,
        useRound: hI.useRound,
      });
      if (!T) {
        return;
      }
      if (hI.fixPosition && this.mapType !== 'B_EARTH_MAP') {
        var hJ = this.getSize();
        var i = this.worldSize(hI.zoom);
        if (T.x > hJ.width) {
          while (T.x > hJ.width) {
            T.x -= i;
          }
        } else {
          if (T.x < 0) {
            while (T.x < 0) {
              T.x += i;
            }
          }
        }
      }
      if (this._renderType === 'webgl') {
        return T;
      }
      T.x -= this.offsetX;
      T.y -= this.offsetY;
      return T;
    },
    overlayPixelToPointIn: function (i, e) {
      if (!i) {
        return;
      }
      var T = i.clone();
      if (this._renderType !== 'webgl') {
        T.x += this.offsetX;
        T.y += this.offsetY;
      }
      return this.pixelToPointIn(T, e);
    },
    getProjection: function () {
      return new ef();
    },
    lnglatToMercator: function (e, hI) {
      var i = new hj(e, hI);
      var T = ef.convertLL2MC(i);
      return [T.lng, T.lat];
    },
    mercatorToLnglat: function (i, e) {
      if (isNaN(i) || isNaN(e)) {
        return [];
      }
      i = parseFloat(i);
      e = parseFloat(e);
      var hI = new hj(i, e);
      var T = ef.convertMC2LL(hI);
      return [T.lng, T.lat];
    },
    getBoundsIn: function () {
      var hV = arguments[0];
      if (this.mapType === BMAP_EARTH_MAP && this._earth) {
        var hP = this._earth.getCustomBounds();
        if (!hP) {
          return this.config.defaultMaxBounds;
        }
        var hO = hP.getSouthWest();
        var e = hP.getNorthEast();
        if (hO.lng > e.lng) {
          e.lng = 180;
        }
        var ic = ef.convertLL2MC(hO);
        var h2 = ef.convertLL2MC(e);
        var hS = this.config.defaultMaxBounds;
        var h1 = Math.max(ic.lng, hS.sw.lng);
        var h0 = Math.max(ic.lat, hS.sw.lat);
        var hU = Math.min(h2.lng, hS.ne.lng);
        var hT = Math.min(h2.lat, hS.ne.lat);
        var hX = new dM(new hj(h1, h0), new hj(hU, hT));
        hX.pointBottomLeft = new hj(h1, h0);
        hX.pointBottomRight = new hj(hU, h0);
        hX.pointTopLeft = new hj(h1, hT);
        hX.pointTopRight = new hj(hU, hT);
        hX.setMinMax();
        hX.makeNormalizedPoint(this._earth.getHeading());
        return hX;
      }
      hV = hV || {};
      var hJ = hV.margins || [0, 0, 0, 0];
      var h7 = this.pixelToPointIn({x: hJ[3], y: this.height - hJ[2]}, hV);
      var ib = this.pixelToPointIn({x: this.width - hJ[1], y: hJ[0]}, hV);
      var hZ = typeof hV.heading === 'number' ? hV.heading : this._heading % 360;
      var T = typeof hV.tilt === 'number' ? hV.tilt : this._tilt;
      var hR = this._webglMapCamera;
      if ((hZ === 0 && T === 0) || !hR) {
        this._bounds.setSouthWest(h7);
        this._bounds.setNorthEast(ib);
        this._bounds.pointBottomLeft = h7;
        this._bounds.pointBottomRight = new hj(ib.lng, h7.lat);
        this._bounds.pointTopRight = ib;
        this._bounds.pointTopLeft = new hj(h7.lng, ib.lat);
        this._bounds.setMinMax();
        this._bounds.makeNormalizedPoint(hZ);
        return this._bounds;
      }
      var hY = this.pixelToPointIn({x: hJ[3], y: hJ[0]}, hV);
      var hI = hR.getPosition();
      var id = Math.sqrt(Math.pow(hY.lng - hI[0], 2) + Math.pow(hY.lat - hI[1], 2));
      var h8 = this.getZoomUnits();
      var ig = id / h8;
      var h5 = hR._frustumSideLen;
      var hN = hR._fovy;
      if (ig > h5 || 90 - T < hN / 2) {
        var ie = [hY.lng - hI[0], hY.lat - hI[1]];
        if (90 - T < hN / 2) {
          ie[0] = -ie[0];
          ie[1] = -ie[1];
        }
        var h6 = h5 * h8;
        var hM = [(ie[0] / id) * h6 + hI[0], (ie[1] / id) * h6 + hI[1]];
        var h3 = [ib.lng - hI[0], ib.lat - hI[1]];
        if (90 - T < hN / 2) {
          h3[0] = -h3[0];
          h3[1] = -h3[1];
        }
        var hK = [(h3[0] / id) * h6 + hI[0], (h3[1] / id) * h6 + hI[1]];
        hY.lng = hM[0];
        hY.lat = hM[1];
        ib.lng = hK[0];
        ib.lat = hK[1];
      }
      var hW = this.pixelToPointIn({x: this.width - hJ[1], y: this.height - hJ[2]}, hV);
      var h4 = [h7, ib, hY, hW];
      var ia = h4[0].lng;
      var ih = h4[0].lat;
      var hL = h4[0].lng;
      var hQ = h4[0].lat;
      for (var h9 = 1; h9 < 4; h9++) {
        if (h4[h9].lng < ia) {
          ia = h4[h9].lng;
        }
        if (h4[h9].lng > hL) {
          hL = h4[h9].lng;
        }
        if (h4[h9].lat < ih) {
          ih = h4[h9].lat;
        }
        if (h4[h9].lat > hQ) {
          hQ = h4[h9].lat;
        }
      }
      this._bounds.setSouthWest(new hj(ia, ih));
      this._bounds.setNorthEast(new hj(hL, hQ));
      this._bounds.pointTopLeft = hY;
      this._bounds.pointTopRight = ib;
      this._bounds.pointBottomRight = hW;
      this._bounds.pointBottomLeft = h7;
      this._bounds.makeNormalizedPoint(hZ);
      this._bounds.setMinMax();
      return this._bounds;
    },
    isLoaded: function () {
      return !!this.loaded;
    },
    _getBestLevel: function (i, hR) {
      var hK = 0;
      if (this._renderType === 'webgl' && !fW()) {
        hK = 100;
      }
      var hL = hR.margins || [10, 10, 10, 10];
      var hI = hR.zoomFactor || 0;
      var hM = hL[1] + hL[3];
      var hJ = hL[0] + hL[2];
      var e = this.getMinZoom();
      var hQ = this.getMaxZoom();
      var hP = i.toSpan();
      var hO = hP.width / (this.width - hM - hK);
      var hN = hP.height / (this.height - hJ - hK);
      var T = 18 - eu(Math.max(hO, hN));
      if (T < e) {
        T = e;
      }
      if (T > hQ) {
        T = hQ;
      }
      T += hI;
      if (this._renderType !== 'webgl') {
        T = Math.floor(T);
      }
      return T;
    },
    getViewportIn: function (hT, hW) {
      if (this.mapType === BMAP_EARTH_MAP) {
        hT = hT || [];
        var hS = [];
        for (var hJ = 0; hJ < hT.length; hJ++) {
          if (!hT[hJ]) {
            continue;
          }
          hS.push(ef.convertMC2LL(hT[hJ]));
        }
        var hR = this._earth.getViewportIn(hS, hW);
        var hK = hR.center;
        var hL = hR.zoom;
        var hP = ef.convertLL2MC(hK);
        return {center: hP, zoom: hL};
      }
      var hV = {center: this.getCenterIn(), zoom: this.getZoom()};
      if (!hT || hT.length === 0) {
        return hV;
      }
      hW = hW || {};
      var T;
      if (hT instanceof dM) {
        T = hT;
      } else {
        var hO = hT;
        T = new dM();
        for (var hJ = hO.length - 1; hJ >= 0; hJ--) {
          T.extend(hO[hJ]);
        }
        if (T.isEmpty()) {
          return hV;
        }
      }
      var e = T.getCenter();
      var hU = this._getBestLevel(T, hW);
      if (hW.margins) {
        var hN = hW.margins;
        var hM = (hN[1] - hN[3]) / 2;
        var hQ = (hN[0] - hN[2]) / 2;
        var hI = this.getZoomUnits(hU);
        e.lng = e.lng + hI * hM;
        e.lat = e.lat + hI * hQ;
      }
      return {center: e, zoom: hU};
    },
    setViewportIn: function (hI, hJ) {
      if (this.mapType === BMAP_EARTH_MAP) {
        var hN;
        if (hI && hI.center) {
          var T = ef.convertMC2LL(hI.center);
          var hL = this._earth._getEarthZoomByImgZoom(hI.zoom, T);
          hN = {center: T, zoom: hL};
        } else {
          hN = [];
          for (var hK = 0; hK < hI.length; hK++) {
            var hM = ef.convertMC2LL(hI[hK]);
            hN[hK] = new cX(hM.lat, hM.lng);
          }
        }
        this._earth.setViewportIn(hN, hJ);
        return;
      }
      var e;
      if (hI && hI.center) {
        e = hI;
      } else {
        e = this.getViewportIn(hI, hJ);
      }
      hJ = hJ || {};
      if (this._renderType === 'webgl') {
        this.centerAndZoomIn(e.center, e.zoom, hJ);
        return;
      }
      if (e.zoom === this.zoomLevel && hJ.enableAnimation !== false) {
        this.panToIn(e.center, {duration: 200, callback: hJ.callback});
      } else {
        this.centerAndZoomIn(e.center, e.zoom, hJ);
      }
    },
    addSpots: function (T, i) {
      if (!T || T.length === 0) {
        return;
      }
      i = i || {};
      var hK = i.zIndex || 0;
      var hJ = typeof i.enableMultiResponse === 'undefined' ? true : !!i.enableMultiResponse;
      this.spotsPool = this.spotsPool || {};
      var e = 'sp' + this.temp.spotsGuid++;
      this.spotsPool[e] = {spots: T.slice(0), zIndex: hK, enableMultiResponse: hJ};
      var hI = this;
      d2.load('hotspot', function () {
        hI._asyncRegister();
      });
      return e;
    },
    getSpots: function (e) {
      return (this.spotsPool[e] && this.spotsPool[e].spots) || [];
    },
    removeSpots: function (e) {
      if (!e || !this.spotsPool[e]) {
        return;
      }
      delete this.spotsPool[e];
    },
    clearSpots: function () {
      delete this.spotsPool;
    },
    getIconByClickPosition: function (i) {
      if (!this.config.enableIconClick || !this._spotsMgr) {
        return null;
      }
      var e = this._spotsMgr.getSpotsByScreenPosition(i);
      if (e[0] && e[0].userdata) {
        var T = e[0].userdata;
        return {name: T.name, uid: T.uid, position: T.iconPoint || e[0].pt};
      }
      return null;
    },
    setBounds: function (e) {
      b1[this.mapType].bounds = e.clone();
    },
    getCoordType: function () {
      return this.config.coordType;
    },
    getPanes: function () {
      return this._panes;
    },
    getInfoWindow: function () {
      if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
        return this.temp.infoWin;
      }
      return null;
    },
    getDistanceIn: function (hJ, e) {
      if (!hJ || !e) {
        return;
      }
      if (hJ.equals(e)) {
        return 0;
      }
      if (this.mapType === BMAP_EARTH_MAP) {
        var hI = ef.convertMC2LL(hJ);
        var T = ef.convertMC2LL(e);
        return this._earth.getDistance(hI, T);
      }
      var i = ef.getDistanceByMC(hJ, e);
      return i;
    },
    getOverlays: function () {
      var hJ = [];
      var hK = this._overlays;
      var hI = this._customOverlays;
      if (hK) {
        for (var T in hK) {
          if (hK[T] instanceof cP) {
            hJ.push(hK[T]);
          }
        }
      }
      if (hI) {
        for (var T = 0, e = hI.length; T < e; T++) {
          hJ.push(hI[T]);
        }
      }
      return hJ;
    },
    getMapType: function () {
      return this.mapType;
    },
    _asyncRegister: function () {
      for (var e = this.temp.registerIndex; e < bj._register.length; e++) {
        bj._register[e](this);
      }
      this.temp.registerIndex = e;
    },
    setDefaultCursor: function (e) {
      this.config.defaultCursor = e;
      if (this.platform) {
        this.platform.style.cursor = this.config.defaultCursor;
      }
    },
    getDefaultCursor: function () {
      return this.config.defaultCursor;
    },
    setDraggingCursor: function (e) {
      this.config.draggingCursor = e;
    },
    getDraggingCursor: function () {
      return this.config.draggingCursor;
    },
    _syncAndChangeMapType: function (e) {
      var i = this;
      if (i._renderType === 'webgl' && i.getTilt() > c2.MAX_DRAG_TILT_L2) {
        i.setTilt(c2.MAX_DRAG_TILT_L2, {
          callback: function () {
            i._changeEarthMapType(e);
          },
        });
      } else {
        i._changeEarthMapType(e);
      }
    },
    _changeEarthMapType: function (T) {
      var hI = this;
      var hL = hI.tileMgr.tileLayers;
      if (this._mapTypeChangAni) {
        this._mapTypeChangAni.stop();
      }
      var hK;
      if (this._earth) {
        hK = this._earth.getEarthCanvas();
      }
      if (!this._earth) {
        this.maskLayer.style.opacity = 1;
        this.maskLayer.style.zIndex = 999;
        this.maskLayer.style.background = '#000';
      }
      this._mapTypeChangAni = new o({
        duration: 400,
        render: function (e) {
          if (!hI._earth) {
            return;
          }
          hK.style.opacity = e;
        },
        finish: function () {
          for (var e = hL.length - 1, hM = e; hM >= 0; hM--) {
            var hO = hL[hM].tilesDiv;
            if (hO) {
              hO.style.visibility = 'hidden';
            }
            if (hL[hM]._isInnerLayer && hI._renderType !== 'webgl') {
              hI.removeTileLayer(hL[hM]);
            }
          }
          hI._mapTypeChangAni = null;
          hI._mapTypeChanging = false;
          function hN() {
            var hS = hI.getZoom() - 2;
            var hT = hI.getCenterIn();
            var hQ = ef.convertMC2LL(hT);
            hI._earth = new bj.Earth(hI, {
              center: hQ,
              zoom: hS,
              showRealSunlight: hI.config.showRealSunlight,
              showMilkyway: hI.config.showMilkyway,
              earthBackground: hI.config.earthBackground,
            });
            hI._proxyEarthEvents();
            var hP = hI.mapType;
            hI.mapType = T;
            var hR = new a6('onmaptypechange');
            hR.zoomLevel = this.zoomLevel;
            hR.mapType = T;
            hR.exMapType = hP;
            hI.dispatchEvent(hR);
            hI._setMapTypeStatus(T);
            C.extend(hI, bj.EarthView.prototype);
            if (!hI._navigationCtrl && hI.config.showControls) {
              hI._navigationCtrl = new eM(hI);
            }
          }
          if (!hI._earth) {
            if (bj['FeatureStyle' + hI.config.style]) {
              hN();
            } else {
              hI.loadMapStyleFiles(function () {
                hN();
              });
            }
          }
          if (parseInt(hI.maskLayer.style.opacity, 10) === 1) {
            setTimeout(function () {
              hI.maskLayer.style.zIndex = 9;
              hI.maskLayer.style.opacity = 0;
            }, 1000);
          }
        },
      });
      if (!this._earth) {
        return;
      }
      var i = this.mapType;
      this.mapType = T;
      var hJ = new a6('onmaptypechange');
      hJ.zoomLevel = this.zoomLevel;
      hJ.mapType = T;
      hJ.exMapType = i;
      this.dispatchEvent(hJ);
      hI._setMapTypeStatus(T);
      C.extend(hI, bj.EarthView.prototype);
    },
    getMapStyleId: function () {
      if (typeof this.config.style === 'string') {
        return this.config.style;
      }
      return this.config.mapStyleId || 'custom';
    },
    _setMapTypeStatus: function (T) {
      var hM = arguments[1];
      if (T === BMAP_EARTH_MAP) {
        var hK = this._earth.getEarthCanvas();
        if (hK) {
          hK.style.display = '';
        }
        var hN = {noAnimation: true};
        this._earth.setCenter(ef.convertMC2LL(this.centerPoint), hN);
        this._earth.setImageZoom(this.zoomLevel, hN);
        this._earth.setTilt(this.getTilt(), hN);
        this._earth.setHeading(this.getHeading(), hN);
      } else {
        if (this.preMapType === BMAP_EARTH_MAP && this._earth) {
          var hL = this._earth;
          var hI = hL.getMapZoom();
          var hJ = hL._imageRawZoom || hI;
          var i = hJ - hI;
          var e = hL.getCenter();
          if (this._renderType === 'webgl') {
            this._tilt = hL.getTilt();
            if (this.zoomLevel > 7) {
              this._heading = hL.getHeading();
              hM && hM(e, hI);
              return;
            }
            if (hL.getHeading() !== 0) {
              hL.setTilt(this.getTilt());
              hL.setHeading(this.getHeading(), {
                callback: function () {
                  hM && hM(e, hI);
                },
              });
            } else {
              hM && hM(e, hI);
            }
            return;
          }
          if (i < 0.1 && hL.getTilt() === 0 && hL.getHeading() === 0) {
            hM && hM(e, hI);
            return;
          }
          hL.setTilt(0);
          hL.setHeading(0);
          hL.setZoom(hL.getZoom() - i, {
            callback: function () {
              hM && hM(e, hI);
            },
          });
        }
      }
    },
    _proxyEarthEvents: function () {
      var hJ = this;
      var hK = this._earth;
      hK.on('tilesload', function (i) {
        hJ.fire(i);
      });
      hK.on('centerandzoom', function (i) {
        hJ.dispatchEvent(new a6('onmoveend'));
        hJ.dispatchEvent(new a6('onzoomend'));
      });
      function hI(i) {
        hJ.fire(i);
      }
      var e = [
        'zoomstart',
        'zoomend',
        'tilesload',
        'sunlighttime_change',
        'sunlighttime_clear',
        'centerandzoom',
        'animation_start',
        'animation_stop',
        'movestart',
        'moveend',
        'moving',
        'dragstart',
        'dragend',
        'dragging',
      ];
      for (var T = 0; T < e.length; T++) {
        hK.on(e[T], hI);
      }
    },
    forceEnableEarth: function () {
      this.config.forceEnableEarth = true;
      this.config.enableEarth = a3.ifEnableEarth(true);
      this.dispatchEvent(new a6('forceenableearth'));
      return this.config.enableEarth;
    },
    setLock: function (e) {
      if (this.mapType === BMAP_EARTH_MAP) {
        this._earth.setLock(e);
      }
      this._lock = e;
    },
    getLock: function () {
      if (this.mapType === BMAP_EARTH_MAP) {
        return this._earth.getLock();
      }
      return this._lock;
    },
    getEarth: function () {
      return this._earth;
    },
    isSupportEarth: function () {
      return this.config.enableEarth;
    },
    isCanvasMap: function () {
      return !!(this._renderType === 'canvas' && this.getMapType() !== 'B_EARTH_MAP');
    },
    getCanvasMapCoordByUid: function (hJ) {
      if (this._renderType === 'webgl') {
        var hK = this.tileMgr.tileLayers;
        for (var hI = 0; hI < hK.length; hI++) {
          if (hK[hI].labelProcessor) {
            return hK[hI].labelProcessor.getLabelByUid(hJ, '');
          }
        }
        return null;
      }
      var e = this.canvas2dMapMgr._labelClick;
      var T = e.findLabelByUid(hJ);
      return T ? new hj(T.iconPos.geoX, T.iconPos.geoY) : null;
    },
    loadBizData: function (i) {
      var e = new a6('onloadbizdata');
      e.data = i;
      this.dispatchEvent(e);
    },
    unloadBizData: function () {
      var e = new a6('onunloadbizdata');
      this.dispatchEvent(e);
    },
    zoomIn: function (e) {
      this.setZoomIn(this.zoomLevel + 1, {zoomCenter: e});
    },
    zoomOut: function (e) {
      this.setZoomIn(this.zoomLevel - 1, {zoomCenter: e});
    },
    setCenterIn: function (e, i) {
      this.panToIn(e, i);
    },
    getRenderType: function () {
      return this._renderType;
    },
    getSolarInfo: function (hI) {
      hI = hI || this._initDate;
      var T = bu(hI);
      var e = ef.convertLL2MC(new hj(T[0], T[1]));
      var hQ = e.latLng;
      var hL = bj.Projection.convertMC2LL(this.centerPoint);
      var hN = hI.getUTCHours();
      var hP = hN + (24 * hL.lng) / 360;
      var hO = hP - 12;
      var hM = hO * 60 * 0.25;
      var hK = Math.asin(
        Math.sin(dE(hL.lat)) * Math.sin(dE(hQ.lat)) +
          Math.cos(dE(hL.lat)) * Math.cos(dE(hQ.lat)) * Math.cos(dE(hM)),
      );
      var hJ = Math.asin((Math.sin(dE(hM)) * Math.cos(dE(hQ.lat))) / Math.cos(hK));
      var i = 'north';
      if (hL.lat < hQ.lat) {
        i = 'south';
      }
      return {zenith: e, solarAltitude: hK, solarAzimuth: hJ, centerPosition: i, position: e};
    },
    setDisplayOptions: function (T) {
      if (!T) {
        return;
      }
      for (var e in this._displayOptions) {
        if (this._displayOptions.hasOwnProperty(e)) {
          if (typeof T[e] === 'boolean' || (e === 'skyColors' && typeof T.skyColors === 'object')) {
            this._displayOptions[e] = T[e];
          }
        }
      }
      var i = this.getMapType();
      if (i === c4.NORMAL) {
        this.fire(new a6('ondisplayoptions_changed'));
      } else {
        if (i === c4.EARTH && this._earth) {
          this._earth.fire(new a6('ondisplayoptions_changed'));
        }
      }
    },
    getHorizonPosY: function (e) {
      if (!e || !this._webglMapCamera) {
        return null;
      }
      var i = this._webglMapCamera.fromMCToScreenPixel(e.lng, e.lat, {heading: 0});
      return i.y;
    },
    getIndoorInfo: function () {
      if (!this._indoorMgr) {
        return;
      }
      return this._indoorMgr.getData();
    },
    showIndoor: function (e, T) {
      var i = new a6('onindoor_status_changed');
      i.uid = e;
      i.floor = T;
      this.fire(i);
    },
    addAreaSpot: function (e, T) {
      if (!e || e.length === 0) {
        return;
      }
      T = T || {};
      this.areaSpots = this.areaSpots || {};
      var i = T.id || 'sp' + this.temp.spotsGuid++;
      this.areaSpots[i] = {spot: e, userData: T.userData};
      var hI = this;
      d2.load('hotspot', function () {
        hI._asyncRegister();
      });
      return i;
    },
    getAreaSpot: function (e) {
      if (this.areaSpots && this.areaSpots[e]) {
        return this.areaSpots[e];
      }
      return null;
    },
    removeAreaSpot: function (e) {
      if (!e || !this.areaSpots[e]) {
        return;
      }
      delete this.areaSpots[e];
    },
    clearAreaSpots: function () {
      this.areaSpots = {};
    },
    resetSpotStatus: function () {
      this.fire(new a6('onspot_status_reset'));
    },
    hightlightSpotByUid: function (e, T) {
      var i = new a6('onspot_highlight');
      i.uid = e;
      i.tilePosStr = T;
      this.fire(i);
    },
    setZoomIn: function (i, e) {
      e = e || {};
      this.zoomTo(i, e.zoomCenter || null, e);
    },
    getCurrentMaxTilt: function () {
      var e = this.zoomLevel;
      if (this.mapType === 'B_EARTH_MAP') {
        return c2.MAX_DRAG_TILT_L2;
      }
      if (this.config.restrictCenter === false) {
        return c2.MAX_DRAG_TILT;
      }
      if (e >= 19) {
        return c2.MAX_DRAG_TILT;
      } else {
        if (e <= 18) {
          if (e < this._enableTiltZoom) {
            if (e >= this._enableTiltZoom - 2) {
              return (1 - (this._enableTiltZoom - e) / 2) * c2.MAX_DRAG_TILT_L2;
            }
            return 0;
          }
          return c2.MAX_DRAG_TILT_L2;
        } else {
          return (c2.MAX_DRAG_TILT - c2.MAX_DRAG_TILT_L2) * (e - 18) + c2.MAX_DRAG_TILT_L2;
        }
      }
    },
    worldSize: function (i) {
      var e = i || this.zoomLevel;
      return c2.WORLD_SIZE_MC / this.getZoomUnits(e);
    },
    setTrafficOn: function () {
      this.addTileLayer(b9);
    },
    setTrafficOff: function () {
      this.removeTileLayer(b9);
    },
    showOverlayContainer: function () {
      this.setDisplayOptions({overlay: true});
    },
    hideOverlayContainer: function () {
      this.setDisplayOptions({overlay: false});
    },
    addLabelsToMapTile: function (T) {
      for (var e = 0; e < T.length; e++) {
        if (typeof T[e].type === 'undefined') {
          T[e].type = 'fixed';
        }
        if (typeof T[e].rank !== 'number') {
          T[e].rank = 50000;
        }
        T[e].pt = T[e].position;
        T[e].custom = true;
        T[e].processedInZoom = 0;
        this._customTileLabels.push(T[e]);
      }
      this.dispatchEvent(new a6('onadd_tile_labels'));
    },
    removeLabelsFromMapTile: function (T) {
      for (var hI = 0; hI < T.length; hI++) {
        for (var e = 0; e < this._customTileLabels.length; e++) {
          if (this._customTileLabels[e].uid === T[hI]) {
            this._customTileLabels.splice(e, 1);
          }
        }
      }
      this.dispatchEvent(new a6('onremove_tile_labels'));
    },
    clearLabels: function () {
      this._customTileLabels.length = 0;
      this.dispatchEvent(new a6('onclear_labels'));
    },
    loadMapStyleFiles: function (hI) {
      var i = this.config.style;
      var T = this;
      this._setTextRenderType();
      if (typeof i === 'string') {
        if (bj['FeatureStyle' + i]) {
          T.fire(new a6('onstyle_loaded'));
          hI();
          return;
        }
        hd.load(eV.getMapStyleFiles(i), function () {
          if (T.config.style === i) {
            bj['FeatureStyle' + i] = window.FeatureStyle;
            bj['iconSetInfo' + i] = window.iconSetInfo_high;
            bj.indoorStyle = window.indoorStyle;
            T.fire(new a6('onstyle_loaded'));
            hI();
          }
        });
      } else {
        var e = i;
        f.init(T);
        f.getStyleJson(e, function (hK) {
          var hP = f5;
          var hR = bj.getGUID('custom');
          T.config.mapStyleId = hR;
          var hN = {};
          C.extend(hN, hK);
          var hL = Math.floor(T.getZoom());
          window.styleCbk = function (hS, hT) {
            if (hT !== hO) {
              return;
            }
            hS = JSON.parse(hS);
            f.onStyleDataBack(hS, hL, hR, hN, hP);
            bj.customStyleLoaded = true;
            T.fire(new a6('onstyle_loaded'));
            hI();
          };
          bj.customStyleInfo = {zoomRegion: {}, zoomStyleBody: [], zoomFrontStyle: {}};
          var hQ = f.getStyleUrl(hK, hP, 'styleCbk', hL);
          var hJ = hQ.split('?')[0];
          var hO = hQ.split('?')[1];
          if (!bj.iconSetInfoCustom) {
            var hM = eV.getMapStyleFiles('default');
            hM.splice(1, 1);
            hd.load(hM, function () {
              bj.iconSetInfoCustom = window.iconSetInfo_high;
              bj.indoorStyle = window.indoorStyle;
              bj.customStyleInfo.xhr = gr.post(hJ, hO, styleCbk);
            });
          } else {
            bj.customStyleInfo.xhr = gr.post(hJ, hO, styleCbk);
          }
        });
      }
    },
    setCopyrightOffset: function (hI, i) {
      var T = new a6('oncopyrightoffsetchange', {logo: hI, cpy: i});
      this.dispatchEvent(T);
    },
    _setTextRenderType: function (e) {
      if (e) {
        this.config.textRenderType = e;
        return;
      }
      if (this.config.textRenderType !== null) {
        return;
      }
      if (fW()) {
        this.config.textRenderType = 'canvas';
      } else {
        if (typeof this.config.style === 'string') {
          this.config.textRenderType = 'image';
        } else {
          this.config.textRenderType = 'canvas';
        }
      }
    },
    destroy: function () {
      this._destroyed = true;
      this.fire(new a6('ondestroy'));
    },
    centerAndZoom: function (e, hK, T) {
      if (Object.prototype.toString.call(hK) !== '[object Undefined]') {
        hK = parseInt(hK);
      }
      if (typeof e === 'string') {
        var hI = this;
        var hJ = new V();
        hJ.getPoint(e, function (hL) {
          e = hL;
          var hM = ef.convertLL2MC(e);
          hI.centerAndZoomIn(hM, hK, T);
        });
      } else {
        var i = ef.convertLL2MC(e);
        this.centerAndZoomIn(i, hK, T);
      }
    },
    pointToPixel: function (e, T) {
      var i = ef.convertLL2MC(e);
      var hI = {};
      C.extend(hI, T);
      if (hI && hI.center) {
        hI.center = ef.convertLL2MC(hI.center);
      }
      return this.pointToPixelIn(i, hI);
    },
    pixelToPoint: function (T, i) {
      var hI = {};
      C.extend(hI, i);
      if (hI && hI.center) {
        hI.center = ef.convertLL2MC(hI.center);
      }
      var e = this.pixelToPointIn(T, hI);
      return ef.convertMC2LL(e);
    },
    pointToOverlayPixel: function (e, T) {
      var i = ef.convertLL2MC(e);
      var hI = {};
      C.extend(hI, T);
      if (hI && hI.center) {
        hI.center = ef.convertLL2MC(hI.center);
      }
      return this.pointToOverlayPixelIn(i, hI);
    },
    overlayPixelToPoint: function (T, i) {
      var hI = {};
      C.extend(hI, i);
      if (hI && hI.center) {
        hI.center = ef.convertLL2MC(hI.center);
      }
      var e = this.overlayPixelToPointIn(T, hI);
      return ef.convertMC2LL(e);
    },
    setViewport: function (T, hI) {
      var e;
      if (T && T.center) {
        e = {};
        C.extend(e, T);
        e.center = ef.convertLL2MC(e.center);
      } else {
        e = [];
        for (var hJ = 0; hJ < T.length; hJ++) {
          e[hJ] = ef.convertLL2MC(T[hJ]);
        }
      }
      this.setViewportIn(e, hI);
    },
    getViewport: function (hK, hI) {
      var T;
      if (hK && hK.length) {
        T = [];
        for (var hJ = 0; hJ < hK.length; hJ++) {
          T[hJ] = ef.convertLL2MC(hK[hJ]);
        }
      } else {
        if (hK instanceof dM) {
          T = new dM(ef.convertLL2MC(hK.getSouthWest()), ef.convertLL2MC(hK.getNorthEast()));
          T.setMinMax();
        }
      }
      var e = this.getViewportIn(T, hI);
      e.center = ef.convertMC2LL(e.center);
      return e;
    },
    getDistance: function (hJ, T) {
      var i = ef.convertLL2MC(hJ);
      var hI = ef.convertLL2MC(T);
      var e = this.getDistanceIn(i, hI);
      return e;
    },
    setCenter: function (e, T) {
      if (typeof e === 'string') {
        var hI = this;
        var hJ = new V();
        hJ.getPoint(e, function (hK) {
          e = hK;
          var hL = ef.convertLL2MC(e);
          hI.setCenterIn(hL, T);
        });
      } else {
        var i = ef.convertLL2MC(e);
        this.setCenterIn(i, T);
      }
    },
    setZoom: function (T, e) {
      var i = {};
      C.extend(i, e);
      if (i && i.zoomCenter) {
        i.zoomCenter = ef.convertLL2MC(i.zoomCenter);
      }
      this.setZoomIn(T, i);
    },
    flyTo: function (e, T) {
      var i = ef.convertLL2MC(e);
      this.flyToIn(i, T);
    },
    panTo: function (e, T) {
      var i = ef.convertLL2MC(e);
      this.panToIn(i, T);
    },
    getCenter: function () {
      var e = this.getCenterIn();
      return ef.convertMC2LL(e);
    },
    getBounds: function () {
      var e = this.getBoundsIn();
      var i = new dM(ef.convertMC2LL(e.getSouthWest()), ef.convertMC2LL(e.getNorthEast()));
      return i;
    },
    setMapStyleV2: function (e) {
      this._setTextRenderType('canvas');
      this.setOptions({style: e});
    },
    startViewAnimation: function (T) {
      var e = T._options.delay;
      var i = this;
      setTimeout(function () {
        T._start(i);
      }, e);
    },
    pauseViewAnimation: function (e) {
      e._pause(this);
    },
    continueViewAnimation: function (e) {
      e._continue(this);
    },
    cancelViewAnimation: function (e) {
      e._cancel(this);
    },
    getMapScreenshot: function () {
      return this._webglMapScene._painter._canvas.toDataURL();
    },
  });
  var c4 = {NORMAL: 'B_NORMAL_MAP', EARTH: 'B_EARTH_MAP', SATELLITE: 'B_STREET_MAP'};
  bj.MapTypeId = c4;
  window.BMAP_NORMAL_MAP = 'B_NORMAL_MAP';
  window.BMAPGL_NORMAL_MAP = 'B_NORMAL_MAP';
  window.BMAP_SATELLITE_MAP = 'B_SATELLITE_MAP';
  window.BMAP_HYBRID_MAP = 'B_STREET_MAP';
  window.BMAP_EARTH_MAP = 'B_EARTH_MAP';
  window.BMAP_COORD_MERCATOR = 1;
  window.BMAP_SYS_DRAWER = 0;
  window.BMAP_SVG_DRAWER = 1;
  window.BMAP_VML_DRAWER = 2;
  window.BMAP_CANVAS_DRAWER = 3;
  var f = {
    environment: 'jsapi',
    map: null,
    ontilesloaded: false,
    onstyle_loaded: false,
    init: function (i) {
      var e = this;
      e.map = i;
      this.changeCopyright();
      this.setEnvironment(e.map.config.style);
      this.resetEventListener();
    },
    resetEventListener: function () {
      var e = this;
      this.ontilesloaded = false;
      this.onstyle_loaded = false;
      e.map.addEventListener('ontilesloaded', e.checkLoadedStatus);
      e.map.addEventListener('onstyle_loaded', e.checkLoadedStatus);
    },
    checkLoadedStatus: function (i) {
      f[i.type] = true;
      if (f.ontilesloaded && f.onstyle_loaded) {
        this.dispatchEvent(new a6('onstylechangetilesloaded'));
        this.removeEventListener('ontilesloaded', f.checkLoadedStatus);
        this.removeEventListener('onstyle_loaded', f.checkLoadedStatus);
      }
    },
    changeCopyright: function () {
      var e = this;
      if (e.map.cpyCtrl) {
        e.map.cpyCtrl.hide();
        if (e.environment !== 'customEditor') {
          e.map.setCopyrightOffset(new d1(1, 1));
        }
      } else {
        e.map.addEventListener('oncopyrightaddend', function () {
          e.map.cpyCtrl.hide();
          if (e.environment !== 'customEditor') {
            e.map.setCopyrightOffset(new d1(1, 1));
          }
        });
      }
    },
    setEnvironment: function (e) {
      if (e.customEditor) {
        this.environment = 'customEditor';
        bE.map = this.map;
      } else {
        if (e.sharing) {
          this.environment = 'sharing';
        } else {
          if (e.preview) {
            this.environment = 'preview';
          } else {
            this.environment = 'jsapi';
          }
        }
      }
    },
    getStyleJson: function (hI, hK) {
      var hJ = this;
      if (hI.styleJson) {
        hK && hK(hI.styleJson);
      } else {
        if (hI.styleId) {
          var i = hI.styleId;
          var e = (Math.random() * 100000).toFixed(0);
          bj['_cbk_si_phpui' + e] = function (hM) {
            var hL = [];
            if (hM.result && hM.result['error'] === 0 && hM.content && hM.content['status'] === 0) {
              hL = hJ.parseJson(hM.content['data']['json']);
              hK && hK(hL);
            } else {
              hK && hK('default');
            }
          };
          bj['_cbk_si_api' + e] = function (hM) {
            var hL = [];
            if (hM.status === 0) {
              if (hM.info) {
                hL = hJ.parseJson(hM.info['json']);
              } else {
                hL = hJ.parseJson(hM.data['json']);
              }
              hK && hK(hL);
            } else {
              hK && hK('default');
            }
          };
          var T = '';
          switch (this.environment) {
            case 'jsapi':
              T = eN.apiHost + '/?qt=custom_map&v=3.0&style_id=' + i + '&type=publish&ak=' + f5;
              T += '&callback=' + es + '._cbk_si_phpui' + e;
              break;
            case 'sharing':
              T += '/apiconsole/custommap/getSharingJson';
              T += '?styleid=' + i + '&type=edit';
              T += '&ck=' + es + '._cbk_si_api' + e;
              break;
            case 'preview':
              T += '/apiconsole/custommap/getJson';
              T += '?styleid=' + i + '&type=edit';
              T += '&ck=' + es + '._cbk_si_api' + e;
              break;
          }
          hd.load(T);
        } else {
          hK && hK('default');
        }
      }
    },
    parseJson: function (T) {
      if (T === null || T === '') {
        return [];
      }
      var i = {
        t: 'featureType',
        e: 'elementType',
        v: 'visibility',
        c: 'color',
        l: 'lightness',
        s: 'saturation',
        w: 'weight',
        z: 'level',
        h: 'hue',
        f: 'fontsize',
        zri: 'curZoomRegionId',
        zr: 'curZoomRegion',
      };
      var hJ = {
        all: 'all',
        g: 'geometry',
        'g.f': 'geometry.fill',
        'g.s': 'geometry.stroke',
        l: 'labels',
        'l.t.f': 'labels.text.fill',
        'l.t.s': 'labels.text.stroke',
        'l.t': 'labels.text',
        'l.i': 'labels.icon',
        'g.tf': 'geometry.topfill',
        'g.sf': 'geometry.sidefill',
      };
      var hI = T.split(',');
      var e = hI.map(function (hN) {
        var hM = hN.split('|').map(function (hT) {
          var hR = i[hT.split(':')[0]];
          var hQ = hJ[hT.split(':')[1]] ? hJ[hT.split(':')[1]] : hT.split(':')[1];
          switch (hQ) {
            case 'poi':
              hQ = 'poilabel';
              break;
            case 'districtlabel':
              hQ = 'districtlabel';
              break;
          }
          var hS = {};
          hS[hR] = hQ;
          return hS;
        });
        var hK = hM[0];
        var hP = 1;
        if (hM[1]['elementType']) {
          hP = 2;
          C.extend(hK, hM[1]);
        }
        var hO = {};
        for (var hL = hP; hL < hM.length; hL++) {
          C.extend(hO, hM[hL]);
        }
        return C.extend(hK, {stylers: hO});
      });
      return e;
    },
    getStyleUrl: function (T, hJ, hI, e) {
      this.styleJson = T;
      var i = eV.apiHost + '/custom/v2/mapstyle?version=' + 4 + '&ak=' + hJ + '&';
      i += 'is_all=true&is_new=1&';
      i += 'styles=' + encodeURIComponent(this.styleJson2styleStringV2(T, e));
      return i;
    },
    styleJson2styleStringV2: function (e, hN) {
      var hO = {
        featureType: 't',
        elementType: 'e',
        visibility: 'v',
        color: 'c',
        lightness: 'l',
        saturation: 's',
        weight: 'w',
        level: 'z',
        hue: 'h',
        fontsize: 'f',
      };
      var hQ = {
        all: 'all',
        geometry: 'g',
        'geometry.fill': 'g.f',
        'geometry.stroke': 'g.s',
        labels: 'l',
        'labels.text.fill': 'l.t.f',
        'labels.text.stroke': 'l.t.s',
        'labels.text': 'l.t',
        'labels.icon': 'l.i',
        'geometry.topfill': 'g.tf',
        'geometry.sidefill': 'g.sf',
      };
      var hR = [];
      for (var hI = this.map.getMinZoom(); hI <= this.map.getMaxZoom(); hI++) {
        bj.customStyleInfo.zoomFrontStyle[hI] = {};
      }
      bj.customStyleInfo.zoomFrontStyle.main = {};
      var T = false;
      for (var hI = 0; !!e[hI]; hI++) {
        var hP = e[hI];
        if (this.isOnlyZoomStyler(hP)) {
          continue;
        }
        hN = this.getFrontZoom(hP, hN);
        if (
          (hP.featureType === 'land' ||
            hP.featureType === 'all' ||
            hP.featureType === 'background') &&
          typeof hP.elementType === 'string' &&
          (hP.elementType === 'geometry' ||
            hP.elementType === 'geometry.fill' ||
            hP.elementType === 'all') &&
          hP.stylers &&
          !T
        ) {
          if (hP.stylers['color']) {
            bj.customStyleInfo.bmapLandColor = hP.stylers['color'];
          }
          if (hP.stylers['visibility'] && hP.stylers['visibility'] === 'off') {
            bj.customStyleInfo.bmapLandColor = '#00000000';
          }
          if (hP.featureType === 'land') {
            T = true;
          }
        }
        if (
          hP.featureType === 'building' &&
          typeof hP.elementType === 'string' &&
          hP.elementType === 'geometry.fill'
        ) {
          bj.customStyleInfo.buildingFill = true;
        }
        if (hP.featureType === 'roadarrow' && hP.elementType === 'labels.icon' && hP.stylers) {
          bj.customStyleInfo.zoomFrontStyle[hN]['bmapRoadarrowVisibility'] =
            hP.stylers['visibility'];
        }
        var hJ = {};
        C.extend(hJ, hP);
        var hL = hJ.stylers;
        delete hJ.stylers;
        C.extend(hJ, hL);
        var hK = [];
        for (var hM in hO) {
          if (hJ[hM]) {
            if (this.isEditorZoomKeys(hM)) {
              continue;
            }
            if (hM === 'elementType') {
              hK.push(hO[hM] + ':' + hQ[hJ[hM]]);
            } else {
              switch (hJ[hM]) {
                case 'poilabel':
                  hJ[hM] = 'poi';
                  break;
                case 'districtlabel':
                  hJ[hM] = 'label';
                  break;
              }
              hK.push(hO[hM] + ':' + hJ[hM]);
            }
          }
        }
        if (hK.length > 2) {
          hR.push(hK.join('|'));
        }
      }
      return hR.join(',');
    },
    getFrontZoom: function (i, e) {
      var T = i.stylers['level'];
      if (T === undefined) {
        return 'main';
      } else {
        return parseInt(T, 10);
      }
    },
    isZoomConfig: function (e) {
      var i = e.stylers['level'];
      if (i === undefined) {
        return false;
      } else {
        return true;
      }
    },
    isOnlyZoomStyler: function (e) {
      var i = {};
      C.extend(i, e.stylers);
      delete i.curZoomRegionId;
      delete i.curZoomRegion;
      delete i.level;
      if (C.isEmptyObject(i)) {
        return true;
      } else {
        return false;
      }
    },
    isSelectZoom: function (i, e) {
      var T = i.stylers['level'];
      if (T === undefined) {
        return true;
      } else {
        if (T === e + '') {
          return true;
        } else {
          return false;
        }
      }
    },
    isEditorZoomKeys: function (e) {
      var i = {curZoomRegionId: true, curZoomRegion: true};
      if (i[e]) {
        return true;
      } else {
        return false;
      }
    },
    getZoomRegion: function (e, i) {
      var hI = e.stylers['level'];
      var T = {};
      C.extend(T, i);
      if (hI === undefined) {
        return T;
      } else {
        T[parseInt(hI, 10)] = true;
        return T;
      }
    },
    onStyleDataBack: function (hI, e, i, T, hK) {
      if (hI.status !== 0) {
        return;
      }
      if (hI.data.style.length === 3) {
        if (!bj.customStyleInfo.baseFs) {
          bj.customStyleInfo.baseFs = hI.data.style;
        }
        bj.StyleBody = hI.data.style[2];
      } else {
        bj.StyleBody = hI.data.style;
      }
      var hJ = bj.customStyleInfo.baseFs;
      bj['FeatureStyle' + i] = hJ;
      this.updateFrontFeatureStyle();
    },
    updateFrontFeatureStyle: function () {
      if (bj.customStyleInfo.zoomFrontStyle.main['bmapRoadarrowVisibility']) {
        for (var e = this.map.getMinZoom(); e <= this.map.getMaxZoom(); e++) {
          if (!bj.customStyleInfo.zoomFrontStyle[e]['bmapRoadarrowVisibility']) {
            bj.customStyleInfo.zoomFrontStyle[e]['bmapRoadarrowVisibility'] =
              bj.customStyleInfo.zoomFrontStyle.main['bmapRoadarrowVisibility'];
          }
        }
      }
    },
  };
  var bE = {
    map: null,
    labelCache: {},
    calcDrawMc: function (T, i, e) {
      var hI = [];
      switch (i) {
        case 'fill':
          hI = this.calcFill(T, e);
          break;
        case 'line':
          break;
        case 'building3d':
          hI = this.calcBuilding3d(T, e);
          break;
      }
      return hI;
    },
    calcFill: function (hJ, T) {
      var hK = [];
      for (var hI = 0; hI < hJ.length; hI = hI + 5) {
        var e = this.coordToMc(
          {x: hJ[hI], y: hJ[hI + 1]},
          T.row,
          T.col,
          T.mercatorSize,
          T.baseTileSize,
        );
        hK.push(e[0], e[1]);
      }
      return hK;
    },
    calcLine: function (hJ, T) {
      var hK = [];
      var hL = new Int16Array(hJ.buffer);
      for (var hI = 0; hI < hL.length; hI = hI + 10) {
        var e = this.coordToMc(
          {x: hL[hI] / 10, y: hL[hI + 1] / 10},
          T.row,
          T.col,
          T.mercatorSize,
          T.baseTileSize,
        );
        hK.push(e[0], e[1]);
      }
      return hK;
    },
    calcBuilding3d: function (hK, T) {
      var hL = [];
      var hI = {};
      for (var hJ = 0; hJ < hK.length / 2; hJ = hJ + 7) {
        if (hK[hJ] === hK[hJ - 7] && hK[hJ + 1] === hK[hJ - 6]) {
          continue;
        }
        if (hI[hK[hJ].toString() + hK[hJ + 1].toString()]) {
          continue;
        }
        hI[hK[hJ].toString() + hK[hJ + 1].toString()] = true;
        var e = this.coordToMc(
          {x: hK[hJ], y: hK[hJ + 1]},
          T.row,
          T.col,
          T.mercatorSize,
          T.baseTileSize,
        );
        hL.push(e[0], e[1]);
      }
      return hL;
    },
    coordToMc: function (hJ, hI, e, i, T) {
      return [hJ.x * (i / T) + e * i, hJ.y * (i / T) + hI * i];
    },
    addDrawIntoAreaSpots: function (e, hJ) {
      if (f.environment !== 'customEditor') {
        return;
      }
      if (!hJ.styleIds) {
        return;
      }
      for (var T = 0; T < hJ.styleIds.length; T++) {
        var hM = 0;
        if (T > 0) {
          hM = hJ.verticesLength[T - 1];
        }
        end = hJ.verticesLength[T];
        var hK = [];
        var hI = '';
        if (hJ.vertex) {
          hK = hJ.vertex;
          hI = 'building3d';
        } else {
          if (hJ.data[0]) {
            hK = hJ.data[0];
            hI = hJ.type;
          } else {
            continue;
          }
        }
        var hL = this.calcDrawMc(hK.slice(hM, end), hI, e);
        this.map.addAreaSpot(hL, {userData: {styleId: hJ.styleIds[T], type: 'mapstyle'}});
      }
    },
    addLabelIntoAreaSpots: function (e) {
      if (f.environment !== 'customEditor') {
        return;
      }
      for (var hJ = 0; hJ < e.length; hJ++) {
        var hK = e[hJ];
        for (var hI = 0; hI < hK.fixedLabel.length; hI++) {
          var T = hK.fixedLabel[hI];
          if (!T._mcBds) {
            continue;
          }
          var hL = [
            T._mcBds[0].lng,
            T._mcBds[0].lat,
            T._mcBds[0].lng,
            T._mcBds[1].lat,
            T._mcBds[1].lng,
            T._mcBds[1].lat,
            T._mcBds[1].lng,
            T._mcBds[0].lat,
          ];
          if (!this.labelCache[hL.join()]) {
            this.labelCache[hL.join()] = true;
            this.map.addAreaSpot(hL, {
              userData: {styleId: T.styleId, type: 'mapstyle', name: T.name},
            });
          }
        }
      }
    },
  };
  function bM(i, e, hI, T) {
    this.cx = 3 * i;
    this.bx = 3 * (hI - i) - this.cx;
    this.ax = 1 - this.cx - this.bx;
    this.cy = 3 * e;
    this.by = 3 * (T - e) - this.cy;
    this.ay = 1 - this.cy - this.by;
    this.p1x = i;
    this.p1y = T;
    this.p2x = hI;
    this.p2y = T;
  }
  bM.prototype.sampleCurveX = function (e) {
    return ((this.ax * e + this.bx) * e + this.cx) * e;
  };
  bM.prototype.sampleCurveY = function (e) {
    return ((this.ay * e + this.by) * e + this.cy) * e;
  };
  bM.prototype.sampleCurveDerivativeX = function (e) {
    return (3 * this.ax * e + 2 * this.bx) * e + this.cx;
  };
  bM.prototype.solveCurveX = function (e, hN) {
    if (typeof hN === 'undefined') {
      hN = 0.000001;
    }
    var hM;
    var hL;
    var hJ;
    var T;
    var hI;
    for (hJ = e, hI = 0; hI < 8; hI++) {
      T = this.sampleCurveX(hJ) - e;
      if (Math.abs(T) < hN) {
        return hJ;
      }
      var hK = this.sampleCurveDerivativeX(hJ);
      if (Math.abs(hK) < 0.000001) {
        break;
      }
      hJ = hJ - T / hK;
    }
    hM = 0;
    hL = 1;
    hJ = e;
    if (hJ < hM) {
      return hM;
    }
    if (hJ > hL) {
      return hL;
    }
    while (hM < hL) {
      T = this.sampleCurveX(hJ);
      if (Math.abs(T - e) < hN) {
        return hJ;
      }
      if (e > T) {
        hM = hJ;
      } else {
        hL = hJ;
      }
      hJ = (hL - hM) * 0.5 + hM;
    }
    return hJ;
  };
  bM.prototype.solve = function (e, i) {
    return this.sampleCurveY(this.solveCurveX(e, i));
  };
  var ci = {};
  function o(T) {
    var e = {duration: 1000, fps: 30, delay: 0, transition: ci.linear, dropLastAnimation: false};
    if (T) {
      for (var hI in T) {
        e[hI] = T[hI];
      }
    }
    if (T.beginTime) {
      this._beginTime = T.beginTime;
    }
    this._callbacks = [];
    this._options = e;
    if (e.delay) {
      var hJ = this;
      setTimeout(function () {
        hJ._doStart();
      }, e.delay);
    } else {
      this._doStart();
    }
    this._pauseTime = 0;
  }
  o.INFINITE = 'INFINITE';
  o.prototype._doStart = function () {
    if (this._isPausing) {
      var e = performance.now() || new Date().getTime();
      this._pauseTime += e - this._isPausing;
      this._isPausing = undefined;
    }
    if (window.requestAnimationFrame) {
      var i = this;
      i._timer = window.requestAnimationFrame(function (T) {
        i._loop(T);
      });
    } else {
      this._beginTime = new Date().getTime();
      if (this._options.duration === o.INFINITE) {
        this._endTime = null;
      } else {
        this._endTime = this._beginTime + this._options.duration;
      }
      this._loop();
    }
  };
  o.prototype._loop = function (hI) {
    var hL = this;
    hI = hI || new Date().getTime();
    hI = hI - this._pauseTime;
    if (!this._beginTime) {
      this._beginTime = hI;
    }
    if (!this._endTime && typeof this._options.duration === 'number') {
      this._endTime = this._beginTime + this._options.duration;
    }
    if (hL._endTime !== null && hI >= hL._endTime) {
      if (hL._options.dropLastAnimation === false) {
        hL._options.render(hL._options.transition(1), 1, hI);
      }
      if (typeof hL._options.finish === 'function') {
        hL._options.finish(hI, this);
      }
      for (var hK = 0, e = hL._callbacks.length; hK < e; hK++) {
        hL._callbacks[hK]();
      }
      return;
    }
    var hJ;
    if (typeof hL._options.duration === 'number') {
      hJ = (hI - hL._beginTime) / hL._options.duration;
      hL.schedule = hL._options.transition(hJ);
    } else {
      hJ = hI - hL._beginTime;
      hL.schedule = 0;
    }
    hL._options.render(hL.schedule, hJ, hI);
    if (!hL.terminative) {
      if (window.requestAnimationFrame) {
        hL._timer = requestAnimationFrame(function T(i) {
          hL._loop(i);
        });
      } else {
        hL._timer = setTimeout(function () {
          hL._loop();
        }, 1000 / hL._options.fps);
      }
    }
  };
  o.prototype.stop = function (i, e) {
    this.terminative = true;
    if (this._timer) {
      if (window.cancelAnimationFrame) {
        cancelAnimationFrame(this._timer);
      } else {
        clearTimeout(this._timer);
      }
      this._timer = null;
      if (typeof this._options.onStop === 'function') {
        this._options.onStop(e);
      }
    }
    if (i) {
      this._endTime = this._beginTime;
      this._loop();
    }
  };
  o.prototype.pause = function () {
    if (!this._isPausing) {
      this.stop();
      this.terminative = undefined;
      this._isPausing = performance.now() || new Date().getTime();
    }
  };
  o.prototype.cancel = function () {
    this.stop();
  };
  o.prototype.append = function (e) {
    this._callbacks.push(e);
    return this;
  };
  ci = {
    _p1: 1,
    _p2: 1 * 1.525,
    linear: function (e) {
      return e;
    },
    reverse: function (e) {
      return 1 - e;
    },
    easeInQuad: function (e) {
      return e * e;
    },
    easeInCubic: function (e) {
      return Math.pow(e, 3);
    },
    easeInBiquad: function (e) {
      return Math.pow(e, 4);
    },
    easeInBack: function (e) {
      return e * e * ((ci._p1 + 1) * e - ci._p1);
    },
    easeOutQuad: function (e) {
      return -(e * (e - 2));
    },
    easeOutCubic: function (e) {
      return Math.pow(e - 1, 3) + 1;
    },
    easeOutBiquad: function (e) {
      return 1 - Math.pow(e - 1, 4);
    },
    easeOutBack: function (e) {
      return (e = e - 1) * e * ((ci._p1 + 1) * e + ci._p1) + 1;
    },
    easeInOutQuad: function (e) {
      if (e < 0.5) {
        return e * e * 2;
      } else {
        return -2 * (e - 2) * e - 1;
      }
    },
    easeInOutCubic: function (e) {
      if (e < 0.5) {
        return Math.pow(e, 3) * 4;
      } else {
        return Math.pow(e - 1, 3) * 4 + 1;
      }
    },
    easeInOutBiquad: function (e) {
      if (e < 0.5) {
        return Math.pow(e, 4) * 8;
      } else {
        return 1 - Math.pow(e - 1, 4) * 8;
      }
    },
    easeInOutSine: function (e) {
      return (1 - Math.cos(Math.PI * e)) / 2;
    },
  };
  ci.ease = (function () {
    var e = new bM(0.4, 0, 0.6, 1);
    return function (i) {
      return e.solve(i);
    };
  })();
  ci['ease-in'] = ci.easeInQuad;
  ci['ease-out'] = ci.easeOutQuad;
  var fc = {
    start: function (hO) {
      var hI = hO.el;
      var e = hO.style;
      var i = hO.startValue;
      var hL = hO.endValue;
      var hJ = hO.duration || 1400;
      var hK = hO.transition || ci.linear;
      var hN = hO.callback;
      var hM = hL - i;
      var T = hO.unit || '';
      return new o({
        fps: 60,
        duration: hJ,
        transition: hK,
        render: function (hP) {
          hI.style[e] = i + hM * hP + T;
        },
        finish: function () {
          hN && hN();
        },
      });
    },
  };
  function cG(hJ, T) {
    d5.call(this);
    this.keyframes = hJ;
    var e = {duration: 1000, delay: 0, transition: ci.linear, interation: 1};
    if (T) {
      for (var hI in T) {
        e[hI] = T[hI];
      }
    }
    this._options = e;
  }
  cG.inherits(d5, 'ViewAnimation');
  cG.prototype._start = function (hK) {
    var T = this;
    T.map = hK;
    var hJ = new a6('onanimationstart');
    T.dispatchEvent(hJ);
    this._initStatus(T.map);
    var hI = this._options.duration;
    var i = this._options.interation;
    var hL = this._options.transition;
    var hM = 0;
    T.poiStatus = T.map._displayOptions.poi;
    if (T.poiStatus) {
      T.map.setDisplayOptions({poi: false});
    }
    T.map.viewAnimationTime = new Date().getTime();
    this.animation = new o({
      duration: hI,
      transition: hL,
      start: function (e) {},
      render: function (hN, e) {
        if (hN === 0) {
          T._initStatus(T.map);
        } else {
          T._setViewByRate(hN);
        }
      },
      finish: function (hO, hN) {
        if (++hM < i || i === 'INFINITE') {
          var hP = new a6('onanimationiterations');
          T.dispatchEvent(hP);
          delete hN._beginTime;
          delete hN._endTime;
          hN._doStart();
        } else {
          var hP = new a6('onanimationend');
          T.dispatchEvent(hP);
          delete T.map.viewAnimationTime;
          T.map.setDisplayOptions({poi: T.poiStatus});
        }
      },
    });
  };
  cG.prototype._getTotalDuration = function (e, i) {
    if (e === o.INFINITE) {
      return o.INFINITE;
    } else {
      return e * i;
    }
  };
  cG.prototype._initStatus = function (e) {
    if (this.keyframes[0]) {
      e.setCenter(this.keyframes[0].center, {noAnimation: true});
      e.setZoom(this.keyframes[0].zoom, {noAnimation: true});
      e.setTilt(this.keyframes[0].tilt, {noAnimation: true});
      e.setHeading(this.keyframes[0].heading, {noAnimation: true});
    }
  };
  cG.prototype._setViewByRate = function (hI) {
    for (var e = 0; e < this.keyframes.length - 1; e++) {
      var hJ = this.keyframes[e];
      var T = this.keyframes[e + 1];
      if (hI >= hJ.percentage && hI < T.percentage) {
        this.map.setHeading(this._getHeadingDelta(hJ, T, hI), {noAnimation: true});
        this.map.setTilt(this._getTiltDelta(hJ, T, hI), {noAnimation: true});
        this.map.setCenter(this._getCenterDelta(hJ, T, hI), {noAnimation: true});
        this.map.setZoom(this._getZoomDelta(hJ, T, hI), {noAnimation: true});
      }
    }
  };
  cG.prototype._getHeadingDelta = function (T, i, e) {
    var hJ = (e - T.percentage) / (i.percentage - T.percentage);
    var hI = T.heading + (i.heading - T.heading) * hJ;
    return hI;
  };
  cG.prototype._getTiltDelta = function (T, i, e) {
    var hJ = (e - T.percentage) / (i.percentage - T.percentage);
    var hI = T.tilt + (i.tilt - T.tilt) * hJ;
    return hI;
  };
  cG.prototype._getCenterDelta = function (T, i, e) {
    var hJ = (e - T.percentage) / (i.percentage - T.percentage);
    var hI = T.center.add(i.center.sub(T.center).mult(hJ));
    return hI;
  };
  cG.prototype._getZoomDelta = function (hI, T, i) {
    var hJ = (i - hI.percentage) / (T.percentage - hI.percentage);
    var e = hI.zoom + (T.zoom - hI.zoom) * hJ;
    return e;
  };
  cG.prototype._pause = function (e) {
    this.animation.pause();
  };
  cG.prototype._continue = function (e) {
    this.animation._doStart();
  };
  cG.prototype._cancel = function (T) {
    T.setDisplayOptions({poi: this.poiStatus});
    this.animation.cancel();
    delete T.viewAnimationTime;
    var i = new a6('onanimationcancel');
    this.dispatchEvent(i);
  };
  var em = undefined;
  var cU = {
    is64Bit: function () {
      if (/Windows/.test(navigator.userAgent)) {
        if (/Win64; x64/.test(navigator.userAgent)) {
          return true;
        } else {
          if (/WOW64/.test(navigator.userAgent)) {
            return true;
          } else {
            return false;
          }
        }
      }
      return true;
    },
    isIOS112: function cK(e) {
      return /11_2/.test(navigator.userAgent);
    },
    canUseWebAssembly: function (i) {
      if (em !== undefined) {
        i && i(em);
        return;
      }
      if (window.WebAssembly && this.is64Bit()) {
        if (!bq()) {
          em = true;
          i && i(em);
        } else {
          if (this.isIOS112()) {
            em = false;
            i && i(em);
          } else {
            var e = new Uint8Array([
              0,
              97,
              115,
              109,
              1,
              0,
              0,
              0,
              1,
              133,
              128,
              128,
              128,
              0,
              1,
              96,
              0,
              1,
              127,
              3,
              130,
              128,
              128,
              128,
              0,
              1,
              0,
              4,
              132,
              128,
              128,
              128,
              0,
              1,
              112,
              0,
              0,
              5,
              131,
              128,
              128,
              128,
              0,
              1,
              0,
              1,
              6,
              129,
              128,
              128,
              128,
              0,
              0,
              7,
              145,
              128,
              128,
              128,
              0,
              2,
              6,
              109,
              101,
              109,
              111,
              114,
              121,
              2,
              0,
              4,
              109,
              97,
              105,
              110,
              0,
              0,
              10,
              138,
              128,
              128,
              128,
              0,
              1,
              132,
              128,
              128,
              128,
              0,
              0,
              65,
              42,
              11,
            ]);
            WebAssembly.instantiate(e).then(
              function (T) {
                em = true;
                i && i(em);
              },
              function (T) {
                em = false;
                i && i(em);
              },
            );
          }
        }
      } else {
        em = false;
        i && i(em);
      }
    },
  };
  var dq = {};
  bj.Utils = dq;
  function c7(e) {
    return e.style;
  }
  function dg(i) {
    if (C.Browser.ie > 0) {
      i.unselectable = 'on';
      i.selectstart = function () {
        return false;
      };
      i.onmousedown = function (T) {
        T.preventDefault();
        return false;
      };
    } else {
      var e = c7(i);
      e.MozUserSelect = 'none';
      e.WebkitUserSelect = 'none';
      i.addEventListener(
        'mousedown',
        function (T) {
          T.preventDefault();
        },
        false,
      );
    }
  }
  function g4(e) {
    return e && e.parentNode && e.parentNode.nodeType !== 11;
  }
  function dC(i, e) {
    i.insertAdjacentHTML('beforeEnd', e);
    return i.lastChild;
  }
  function hs(T, i) {
    var hI = document.createElement('div');
    hI.innerHTML = i;
    var e = hI.childNodes[0];
    return T.parentNode.insertBefore(e, T);
  }
  function h(i) {
    i = i || window.event;
    i.stopPropagation ? i.stopPropagation() : (i.cancelBubble = true);
  }
  function bP(i) {
    i = i || window.event;
    i.preventDefault ? i.preventDefault() : (i.returnValue = false);
    return false;
  }
  function c5(i) {
    h(i);
    return bP(i);
  }
  function fB() {
    var e = document.documentElement;
    var i = document.body;
    if (e && (e.scrollTop || e.scrollLeft)) {
      return [e.scrollTop, e.scrollLeft];
    } else {
      if (i) {
        return [i.scrollTop, i.scrollLeft];
      } else {
        return [0, 0];
      }
    }
  }
  function fi(hJ) {
    if (!hJ) {
      return;
    }
    hJ.onload = hJ.onerror = null;
    var T = hJ.attributes,
      hI,
      e,
      hK;
    if (T) {
      e = T.length;
      for (hI = 0; hI < e; hI += 1) {
        hK = T[hI].name;
        if (typeof hJ[hK] === 'function') {
          hJ[hK] = null;
        }
      }
    }
    T = hJ.children;
    if (T) {
      e = T.length;
      for (hI = 0; hI < e; hI += 1) {
        fi(hJ.children[hI]);
      }
    }
  }
  function bB(i, hL, hK) {
    var hJ = hL.lng - hK.lng;
    var hI = hL.lat - hK.lat;
    if (hJ === 0) {
      return Math.abs(i.lng - hL.lng);
    }
    if (hI === 0) {
      return Math.abs(i.lat - hL.lat);
    }
    var T = hI / hJ;
    var e = hL.lat - T * hL.lng;
    return Math.abs(T * i.lng - i.lat + e) / Math.sqrt(T * T + 1);
  }
  function gN(i, e) {
    if (!i || !e) {
      return;
    }
    return Math.round(Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)));
  }
  function bK(i, e) {
    if (!i || !e) {
      return 0;
    }
    return Math.round(Math.sqrt(Math.pow(i.lng - e.lng, 2) + Math.pow(i.lat - e.lat, 2)));
  }
  function cV(T, i) {
    var e = Math.round((T.x + i.x) / 2);
    var hI = Math.round((T.y + i.y) / 2);
    return new eb(e, hI);
  }
  function ha(e, T) {
    var i = [];
    T =
      T ||
      function (hJ) {
        return hJ;
      };
    for (var hI in e) {
      i.push(hI + '=' + T(e[hI]));
    }
    return i.join('&');
  }
  function S(T, i, hK) {
    var hL = document.createElement(T);
    if (hK) {
      hL = document.createElementNS(hK, T);
    }
    i = i || {};
    for (var hI in i) {
      var hJ = {for: 'htmlFor', class: 'cssClass'}[hI] || hI;
      if (hI === 'style') {
        hL.style.cssText = i[hI];
        continue;
      }
      if (hI === 'class') {
        C.ac(hL, i[hI]);
        continue;
      }
      if (hL.setAttribute) {
        hL.setAttribute(hJ, i[hI]);
      } else {
        try {
          hL[hJ] = i[hI];
        } catch (hL) {}
      }
    }
    return hL;
  }
  function fQ(e) {
    if (e.currentStyle) {
      return e.currentStyle;
    } else {
      if (e.ownerDocument && e.ownerDocument.defaultView) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null);
      }
    }
  }
  function bQ(e) {
    return typeof e === 'function';
  }
  var hf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  function gS(hJ) {
    var T = '';
    var hQ;
    var hO;
    var hM = '';
    var hP;
    var hN;
    var hL;
    var hK = '';
    var hI = 0;
    var e = /[^A-Za-z0-9+/=]/g;
    if (!hJ || e.exec(hJ)) {
      return hJ;
    }
    hJ = hJ.replace(/[^A-Za-z0-9+/=]/g, '');
    do {
      hP = hf.indexOf(hJ.charAt(hI++));
      hN = hf.indexOf(hJ.charAt(hI++));
      hL = hf.indexOf(hJ.charAt(hI++));
      hK = hf.indexOf(hJ.charAt(hI++));
      hQ = (hP << 2) | (hN >> 4);
      hO = ((hN & 15) << 4) | (hL >> 2);
      hM = ((hL & 3) << 6) | hK;
      T = T + String.fromCharCode(hQ);
      if (hL !== 64) {
        T = T + String.fromCharCode(hO);
      }
      if (hK !== 64) {
        T = T + String.fromCharCode(hM);
      }
      hQ = hO = hM = '';
      hP = hN = hL = hK = '';
    } while (hI < hJ.length);
    return T;
  }
  (function (e) {
    if (!e.Utils) {
      e.Utils = {};
    }
    var i = e.Utils;
    i.format = (function () {
      function T(hL, hK, hM) {
        var hJ = hM[+hK];
        return typeof hJ === 'function' ? hJ(hK) : hJ;
      }
      function hI(hL, hK, hM) {
        var hO = hK;
        var hP = [];
        var hJ = hK.split(':');
        if (hJ.length === 2) {
          hO = hJ[0];
          hP.push(hJ[1]);
        }
        var hN = typeof hM[hO];
        if (hN === 'function') {
          return hM[hO].apply(undefined, hP);
        } else {
          if (hN === 'undefined') {
            return hL;
          } else {
            return String(hM[hO]);
          }
        }
      }
      return function (hJ, hK) {
        var hM = hK.splice ? T : hI;
        var hL = hJ.splice ? hJ.join('') : hJ;
        return hL.replace(/{([a-zA-Z0-9_$:.]+)}/g, function (hO, hN) {
          return hM(hO, hN, hK);
        });
      };
    })();
    i.ErrorMonitor = function (hI, T, hJ) {};
    cU.canUseWebAssembly(function (T) {
      i.canUseWebAssembly = T;
    });
  })(bj);
  function fW() {
    return bq() || et();
  }
  function bq() {
    var e = navigator.userAgent;
    if (e.indexOf('iPhone') > -1 || e.indexOf('iPad') > -1) {
      return true;
    }
    return false;
  }
  function et() {
    var e = navigator.userAgent;
    if (e.indexOf('Android') > -1) {
      return true;
    }
    return false;
  }
  function dE(e) {
    return (e * Math.PI) / 180;
  }
  function c8(e) {
    return (e / Math.PI) * 180;
  }
  function dI(e, hJ) {
    var hI = Math.pow(10, hJ);
    if (typeof e === 'number') {
      return Math.round(e * hI) / hI;
    }
    for (var T = 0; T < e.length; T++) {
      e[T] = dI(e[T], hJ);
    }
    return e;
  }
  function fx(T, i, e) {
    if (T < i) {
      T = i;
    } else {
      if (T > e) {
        T = e;
      }
    }
    return T;
  }
  function fR(e, i) {
    while (e < 0) {
      e += i;
    }
    return e % i;
  }
  function d0(i, e) {
    return (i >= 0 && e >= 0) || (i < 0 && e < 0);
  }
  function a0(i) {
    if (i._gl) {
      return i._gl;
    }
    var e = {
      alpha: true,
      antialias: false,
      failIfMajorPerformanceCaveat: false,
      preserveDrawingBuffer: false,
      stencil: false,
    };
    var T = i.getContext('webgl', e) || i.getContext('experimental-webgl', e);
    i._gl = T;
    return T;
  }
  function eC(hI, T) {
    for (var e = 0; e < T.length; e++) {
      C.on(hI, T[e], h);
    }
  }
  function hH(i, T, e) {
    T[e] = i.getUniformLocation(T, e);
  }
  function eT(hJ, hK, e, T, i) {
    var hI = '';
    switch (i) {
      case 'mat4':
        hJ.uniformMatrix4fv(hK[e], false, T);
        return;
      case 'v3':
        hI = 'uniform3fv';
        break;
      case 'f':
        hI = 'uniform1f';
        break;
      case 'i':
        hI = 'uniform1i';
        break;
    }
    if (hI === '') {
      throw 'error';
    }
    hJ[hI](hK[e], T);
  }
  function K(hQ, e) {
    while (hQ < 0) {
      hQ += 360;
    }
    hQ = hQ % 360;
    var hI = e.width;
    var hP = e.height;
    var hL = hI;
    var T = hP;
    if (hQ < 90) {
      var i = Math.sin(dE(hQ)) * hI;
      var hN = Math.sin(dE(hQ)) * hP;
      var hO = Math.cos(dE(hQ)) * hI;
      var hK = Math.cos(dE(hQ)) * hP;
      var hL = Math.ceil(hO + hN);
      var T = Math.ceil(i + hK);
    } else {
      if (hQ < 180) {
        var hQ = hQ - 90;
        var i = Math.sin(dE(hQ)) * hI;
        var hN = Math.sin(dE(hQ)) * hP;
        var hO = Math.cos(dE(hQ)) * hI;
        var hK = Math.cos(dE(hQ)) * hP;
        var hL = Math.ceil(i + hK);
        var T = Math.ceil(hO + hN);
      } else {
        if (hQ < 270) {
          var hQ = hQ - 180;
          var i = Math.sin(dE(hQ)) * hI;
          var hN = Math.sin(dE(hQ)) * hP;
          var hO = Math.cos(dE(hQ)) * hI;
          var hK = Math.cos(dE(hQ)) * hP;
          var hL = Math.ceil(hO + hN);
          var T = Math.ceil(i + hK);
        } else {
          var hQ = hQ - 270;
          var i = Math.sin(dE(hQ)) * hI;
          var hN = Math.sin(dE(hQ)) * hP;
          var hO = Math.cos(dE(hQ)) * hI;
          var hK = Math.cos(dE(hQ)) * hP;
          var hL = Math.ceil(i + hK);
          var T = Math.ceil(hO + hN);
        }
      }
    }
    var hM = hL - hI;
    var hJ = T - hP;
    return [0 - hM / 2, 0 - hJ / 2, hI + hM / 2, hP + hJ / 2];
  }
  function gw(e) {
    if (e.toDataURL() === gw._blankData) {
      return true;
    }
    return false;
  }
  function gm(hJ, hI, T) {
    var i = [T.lng - hJ.lng, T.lat - hJ.lat];
    var e = [hI.lng - hJ.lng, hI.lat - hJ.lat];
    return i[0] * e[1] - i[1] * e[0];
  }
  function cc(hK, hJ, T) {
    var e;
    var hL;
    var hI;
    var i;
    if (hK.lng < hJ.lng) {
      e = hK.lng;
      hI = hJ.lng;
    } else {
      e = hJ.lng;
      hI = hK.lng;
    }
    if (hK.lat < hJ.lat) {
      hL = hK.lat;
      i = hJ.lat;
    } else {
      hL = hJ.lat;
      i = hK.lat;
    }
    if (T.lng < e || T.lng > hI || T.lat < hL || T.lat > i) {
      return false;
    }
    return true;
  }
  function go(hM, hL, hK, hI) {
    var hJ = gm(hK, hI, hM);
    var T = gm(hK, hI, hL);
    var i = gm(hM, hL, hK);
    var e = gm(hM, hL, hI);
    if (hJ * T < 0 && i * e < 0) {
      return true;
    } else {
      if (hJ === 0 && cc(hK, hI, hM)) {
        return true;
      } else {
        if (T === 0 && cc(hK, hI, hL)) {
          return true;
        } else {
          if (i === 0 && cc(hM, hL, hK)) {
            return true;
          } else {
            if (e === 0 && cc(hM, hL, hI)) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    }
  }
  function hq(T, i) {
    var e = i.parentNode;
    if (e.lastChild === i) {
      e.appendChild(T);
    } else {
      e.insertBefore(T, i.nextSibling);
    }
  }
  function hw(hO, hP) {
    if (hP === 0) {
      return hO;
    }
    var hN = 0;
    var hL = 0;
    if (!hO) {
      throw '异常';
    }
    if (hO.length === 0) {
      return [];
    }
    for (var hJ = 1, T = hO.length - 1; hJ < T; hJ++) {
      var hM = bB(hO[hJ], hO[0], hO[hO.length - 1]);
      if (hM > hN) {
        hL = hJ;
        hN = hM;
      }
    }
    var e = [];
    if (hN >= hP) {
      var hR = hO.slice(0, hL);
      var hQ = hO.slice(hL, hO.length);
      var hK = hw(hR, hP);
      var hI = hw(hQ, hP);
      for (var hJ = 0, T = hK.length; hJ < T; hJ++) {
        e.push(hK[hJ]);
      }
      for (var hJ = 0, T = hI.length; hJ < T; hJ++) {
        e.push(hI[hJ]);
      }
    } else {
      e.push(hO[0]);
      e.push(hO[hO.length - 1]);
    }
    return e;
  }
  function eu(e) {
    if (Math.log2) {
      return Math.log2(e);
    }
    return Math.log(e) / Math.LN2;
  }
  function bm(T, i, e) {
    return Math.min(e, Math.max(i, T));
  }
  function cD(e, i) {
    if (!i) {
      return e;
    }
    var hK = i[0];
    var hJ = i[1];
    var hI = i[2];
    var T = i[3];
    var hM = [];
    var hL = [];
    hM[0] = T * e[0] + hI * e[2];
    hM[1] = e[1];
    hM[2] = -hI * e[0] + T * e[2];
    hL[0] = hM[0];
    hL[1] = hJ * hM[1] - hK * hM[2];
    hL[2] = hK * hM[1] + hJ * hM[2];
    return hL;
  }
  var aL = Math.PI / 180;
  var E = 180 / Math.PI;
  function bu(T) {
    var i = (T - Date.UTC(2000, 0, 1, 12)) / 86400000 / 36525;
    var e = ((d3.utcDay.floor(T) - T) / 86400000) * 360 - 180;
    return [e - U(i) * E, gt(i) * E];
  }
  function U(hI) {
    var hJ = fY(hI);
    var i = dF(hI);
    var T = ai(hI);
    var hK = Math.tan(fU(hI) / 2);
    hK *= hK;
    return (
      hK * Math.sin(2 * T) -
      2 * hJ * Math.sin(i) +
      4 * hJ * hK * Math.sin(i) * Math.cos(2 * T) -
      0.5 * hK * hK * Math.sin(4 * T) -
      1.25 * hJ * hJ * Math.sin(2 * i)
    );
  }
  function gt(e) {
    return Math.asin(Math.sin(fU(e)) * Math.sin(gQ(e)));
  }
  function gQ(e) {
    return bb(e) - (0.00569 + 0.00478 * Math.sin((125.04 - 1934.136 * e) * aL)) * aL;
  }
  function bb(e) {
    return ai(e) + dL(e);
  }
  function dF(e) {
    return (357.52911 + e * (35999.05029 - 0.0001537 * e)) * aL;
  }
  function ai(i) {
    var e = (280.46646 + i * (36000.76983 + i * 0.0003032)) % 360;
    return ((e < 0 ? e + 360 : e) / 180) * Math.PI;
  }
  function dL(i) {
    var e = dF(i);
    return (
      (Math.sin(e) * (1.914602 - i * (0.004817 + 0.000014 * i)) +
        Math.sin(e + e) * (0.019993 - 0.000101 * i) +
        Math.sin(e + e + e) * 0.000289) *
      aL
    );
  }
  function fU(e) {
    return e4(e) + 0.00256 * Math.cos((125.04 - 1934.136 * e) * aL) * aL;
  }
  function e4(e) {
    return (23 + (26 + (21.448 - e * (46.815 + e * (0.00059 - e * 0.001813))) / 60) / 60) * aL;
  }
  function fY(e) {
    return 0.016708634 - e * (0.000042037 + 1.267e-7 * e);
  }
  function a1() {
    return window.devicePixelRatio || 1;
  }
  function aB(T) {
    var i;
    var e;
    var hI;
    if (T >= 0) {
      hI = Math.floor(T / 65536) * 65536;
      i = hI;
      e = T - hI;
    } else {
      hI = Math.floor(-T / 65536) * 65536;
      i = -hI;
      e = T + hI;
    }
    return [i, e];
  }
  function G(e) {
    if (e.lng >= 0 && e.lat >= 0) {
      return new hj(e.lng - 10000000, e.lat - 6000000);
    }
    if (e.lng >= 0 && e.lat < 0) {
      return new hj(e.lng - 10000000, e.lat + 6000000);
    }
    if (e.lng < 0 && e.lat >= 0) {
      return new hj(e.lng + 10000000, e.lat - 6000000);
    }
    if (e.lng < 0 && e.lat < 0) {
      return new hj(e.lng + 10000000, e.lat + 6000000);
    }
  }
  var fs = null;
  if (window.performance && window.performance.now) {
    fs = function () {
      return performance.now();
    };
  } else {
    if (Date.now) {
      fs = function () {
        return Date.now();
      };
    } else {
      fs = function () {
        return new Date().getTime();
      };
    }
  }
  function bG(hI, e, i) {
    var T = 'mouseWheel';
    if (C.Platform.macintosh) {
      if (!isNaN(hI) && (hI < 10 || hI !== 120) && e % 1 === 0 && e < 5) {
        T = 'padScroll';
      }
      if (C.Browser.firefox && e % 1 === 0 && e < 5 && i === 0) {
        T = 'padScroll';
      }
    }
    if (C.Browser.safari && hI === 12) {
      T = 'mouseWheel';
    }
    return T;
  }
  function da(hR, hM) {
    var hQ = hR[0];
    var hP = hR[1];
    var hI = false;
    for (var hL = 0, hK = hM.length - 2; hL < hM.length; hL += 2) {
      var hO = hM[hL];
      var hJ = hM[hL + 1];
      var hN = hM[hK];
      var T = hM[hK + 1];
      var e = hJ > hP !== T > hP && hQ < ((hN - hO) * (hP - hJ)) / (T - hJ) + hO;
      if (e) {
        hI = !hI;
      }
      hK = hL;
    }
    return hI;
  }
  function cy(T, e, i, hI) {
    hI = hI || 0.4;
    if (T > i) {
      T = Math.pow(T - i + 1, hI) + i - 1;
    } else {
      if (T < e) {
        T = e - Math.pow(e - T + 1, hI) + 1;
      }
    }
    return T;
  }
  function gc(hM) {
    var hK = '';
    for (var T = 0; T < hM.length; T++) {
      var hN = hM.charCodeAt(T) << 1;
      var e = hN.toString(2);
      var hJ = e.length;
      var hQ = e;
      if (hJ < 8) {
        hQ = '00000000' + e;
        hQ = hQ.substr(e.length, 8);
      }
      hK += hQ;
    }
    var hO = 5 - (hK.length % 5);
    var hI = [];
    for (var T = 0; T < hO; T++) {
      hI[T] = '0';
    }
    hK = hI.join('') + hK;
    var hP = [];
    for (var T = 0; T < hK.length / 5; T++) {
      var hN = hK.substr(T * 5, 5);
      var hL = parseInt(hN, 2) + 50;
      hP.push(String.fromCharCode(hL));
    }
    return hP.join('') + hO.toString();
  }
  function az(T, i) {
    var e = bj.TILE_VERSION || window.TILE_VERSION;
    if (!e || !e[T] || !e[T][i] || !e[T][i].version || !e[T][i].updateDate) {
      e = eV.tvc;
    }
    return {ver: e[T][i].version, udt: e[T][i].updateDate};
  }
  function fr() {
    var e = bj.MSV || window.MSV;
    if (!e || !e.mapstyle || !e.mapstyle.updateDate || !e.mapstyle.version) {
      e = eV.msv;
    }
    return {ver: e.mapstyle.version, udt: e.mapstyle.updateDate};
  }
  function ej(e, hJ) {
    var hI = e.slice(0);
    for (var T = 0; T < hI.length; T++) {
      hI[T] += hJ;
    }
    return hI;
  }
  var aZ = null;
  function bt(e) {
    if (aZ) {
      return;
    }
    e.fire(new a6('onloadtile'));
    aZ = setTimeout(function () {
      aZ = null;
    }, 1000);
  }
  function eS() {
    if (cl('//map.baidu.com') || cl('//maps.baidu.com') || cl('//ditu.baidu.com')) {
      return true;
    }
    return false;
  }
  dq.inMapHost = eS();
  if (typeof window._inMapHost === 'boolean') {
    dq.inMapHost = window._inMapHost;
  }
  function cl(i) {
    var T = window.location;
    var e = document.createElement('a');
    e.href = i;
    return e.hostname === T.hostname && e.port === T.port && e.protocol === T.protocol;
  }
  function d2() {}
  C.extend(d2, {
    Request: {INITIAL: -1, WAITING: 0, LOADED: 1, COMPLETED: 2},
    Dependency: {
      poly: ['marker'],
      hotspot: ['poly'],
      infowindow: ['marker', 'hotspot'],
      groundOverlay: ['marker'],
      simpleInfowindow: ['marker'],
      tools: ['marker', 'poly'],
      mapgl: ['glcommon', 'poly'],
      earth: ['glcommon'],
      scommon: [],
      localSearch: ['scommon'],
      otherSearch: ['scommon'],
      route: ['scommon'],
      buslineSearch: ['route'],
      autocomplete: ['scommon'],
    },
    MD5Mapping: {
      control: 'rc1k2r',
      marker: 'oobh41',
      poly: 'exdm1z',
      infowindow: 'rgx2wt',
      simpleInfowindow: 'i0nqhg',
      groundOverlay: '5ohvo3',
      hotspot: 'u2tsn5',
      menu: 'bztorz',
      tools: 'img2el',
      oppc: 'pbu4tu',
      oppcgl: 'kcxu4l',
      mapgl: '11wctr',
      markeranimation: 'egzuaa',
      earth: 'gkrond',
      glcommon: 'hq2xo0',
      localSearch: 'nmujvm',
      scommon: '1mpl3s',
      otherSearch: 'hpk2aj',
      route: 'd2ljt0',
      buslineSearch: 'oh10jc',
      autocomplete: 'uahcd5',
    },
    Config: {
      baseUrl: eV.apiHost + '/getmodules?v=1.0&type=webgl',
      jsModPath: (dq.inMapHost ? '' : eV.mapHost) + '/res/newui/',
      timeout: 5000,
    },
    delayFlag: false,
    Module: {modules: {}, modulesNeedToLoad: []},
    _getMd5ModsStr: function (hK) {
      var hJ = [];
      for (var hM = 0, T = hK.length; hM < T; hM++) {
        var hL = hK[hM];
        var e = this.MD5Mapping[hL];
        var hI = '$' + hL + '$';
        if (e !== hI) {
          hJ.push(hL + '_' + e);
        }
      }
      return hJ.join(',');
    },
    load: function (i, hK, hI) {
      var e = this.getModuleInfo(i);
      if (e.status === this.Request.COMPLETED) {
        if (hI === true) {
          hK();
        }
      } else {
        if (e.status === this.Request.INITIAL) {
          this.combine(i);
          this.addToLoadQueue(i);
          var T = this;
          if (T.delayFlag === false) {
            T.delayFlag = true;
            setTimeout(function () {
              var hL = T.Config.baseUrl + '&mod=' + T._getMd5ModsStr(T.Module.modulesNeedToLoad);
              hd.load(hL);
              T.Module.modulesNeedToLoad.length = 0;
              T.delayFlag = false;
            }, 1);
          }
          e.status = this.Request.WAITING;
          function hJ(hN) {
            var hM = T.getModuleInfo(i);
            if (hM.status !== T.Request.COMPLETED) {
              if (window.map) {
                var hL = new a6('onmod_timeout');
                hL.timeout = hN / 1000;
                hL.moduleName = i;
                window.map.fire(hL);
              }
            }
          }
          setTimeout(hJ, this.Config.timeout, this.Config.timeout);
          setTimeout(hJ, this.Config.timeout * 2, this.Config.timeout * 2);
        }
        if (hK) {
          e.callbacks.push(hK);
        }
      }
    },
    combine: function (e) {
      if (e && this.Dependency[e]) {
        var hI = this.Dependency[e];
        for (var T = 0; T < hI.length; T++) {
          this.combine(hI[T]);
          if (!this.Module.modules[hI[T]]) {
            this.addToLoadQueue(hI[T]);
          }
        }
      }
    },
    addToLoadQueue: function (e) {
      var i = this.getModuleInfo(e);
      if (i.status === this.Request.INITIAL) {
        i.status = this.Request.WAITING;
        this.Module.modulesNeedToLoad.push(e);
      }
    },
    run: function (T, hI) {
      var hM = this.getModuleInfo(T);
      var hP = this.Dependency[T];
      if (hP) {
        for (var hK = 0; hK < hP.length; hK++) {
          var hL = this.getModuleInfo(hP[hK]);
          if (hL.status !== this.Request.COMPLETED) {
            hL.modsNeedToRun.push({name: T, code: hI});
            return;
          }
        }
      }
      try {
        eval(hI);
      } catch (hN) {
        return;
      }
      hM.status = this.Request.COMPLETED;
      for (var hK = 0, hJ = hM.callbacks.length; hK < hJ; hK++) {
        hM.callbacks[hK]();
      }
      hM.callbacks.length = 0;
      for (hK = 0; hK < hM.modsNeedToRun.length; hK++) {
        var hO = hM.modsNeedToRun[hK];
        this.run(hO.name, hO.code);
      }
      hM.modsNeedToRun.length = 0;
    },
    getModuleInfo: function (i) {
      var e;
      if (!this.Module.modules[i]) {
        this.Module.modules[i] = {status: this.Request.INITIAL, callbacks: [], modsNeedToRun: []};
      }
      e = this.Module.modules[i];
      return e;
    },
  });
  window._jsload = function (hJ, hK) {
    var i = d2.getModuleInfo(hJ);
    i.status = d2.Request.LOADED;
    if (hK !== '') {
      d2.run(hJ, hK);
    } else {
      if (window.map) {
        var e = new a6('ongetmodules_fail');
        e.moduleName = hJ;
        window.map.fire(e);
      }
      var T = document.createElement('script');
      var hI = d2.MD5Mapping[hJ];
      T.src = d2.Config.jsModPath + hJ + '_' + hI + '.js';
      document.getElementsByTagName('head')[0].appendChild(T);
    }
  };
  function ac() {
    this._timeData = {};
  }
  var e1;
  if (typeof window !== 'undefined') {
    e1 = window;
  } else {
    e1 = self;
  }
  ac.prototype.mark = function (e) {
    this._timeData[e] = this._getTime();
  };
  ac.prototype.getMark = function (e) {
    return this._timeData[e];
  };
  ac.prototype.getTime = function (i, e) {
    return parseFloat((this._timeData[e] - this._timeData[i]).toFixed(2));
  };
  ac.prototype.print = function () {};
  ac.prototype.clear = function () {
    this._timeData = {};
  };
  if (e1.performance && e1.performance.now) {
    ac.prototype._getTime = function () {
      return performance.now();
    };
  } else {
    ac.prototype._getTime = function () {
      return Date.now();
    };
  }
  !(function (i, T) {
    T((i.d3 = i.d3 || {}));
  })(window, function (im) {
    function iH(iN, iO, T, it) {
      function e(i) {
        return iN((i = new Date(+i))), i;
      }
      return (
        (e.floor = e),
        (e.ceil = function (i) {
          return iN((i = new Date(i - 1))), iO(i, 1), iN(i), i;
        }),
        (e.round = function (i) {
          var iP = e(i),
            iQ = e.ceil(i);
          return iQ - i > i - iP ? iP : iQ;
        }),
        (e.offset = function (i, iP) {
          return iO((i = new Date(+i)), null == iP ? 1 : Math.floor(iP)), i;
        }),
        (e.range = function (iQ, i, iP) {
          var iR = [];
          if (((iQ = e.ceil(iQ)), (iP = null == iP ? 1 : Math.floor(iP)), !(i > iQ && iP > 0))) {
            return iR;
          }
          do {
            iR.push(new Date(+iQ));
          } while ((iO(iQ, iP), iN(iQ), i > iQ));
          return iR;
        }),
        (e.filter = function (i) {
          return iH(
            function (iP) {
              for (; iN(iP), !i(iP); ) {
                iP.setTime(iP - 1);
              }
            },
            function (iP, iQ) {
              for (; --iQ >= 0; ) {
                for (; iO(iP, 1), !i(iP); ) {}
              }
            },
          );
        }),
        T &&
          ((e.count = function (i, iP) {
            return ip.setTime(+i), iv.setTime(+iP), iN(ip), iN(iv), Math.floor(T(ip, iv));
          }),
          (e.every = function (i) {
            return (
              (i = Math.floor(i)),
              isFinite(i) && i > 0
                ? i > 1
                  ? e.filter(
                      it
                        ? function (iP) {
                            return it(iP) % i === 0;
                          }
                        : function (iP) {
                            return e.count(0, iP) % i === 0;
                          },
                    )
                  : e
                : null
            );
          })),
        e
      );
    }
    function iw(e) {
      return iH(
        function (i) {
          i.setDate(i.getDate() - ((i.getDay() + 7 - e) % 7)), i.setHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setDate(i.getDate() + 7 * T);
        },
        function (i, T) {
          return (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * io) / iE;
        },
      );
    }
    function il(e) {
      return iH(
        function (i) {
          i.setUTCDate(i.getUTCDate() - ((i.getUTCDay() + 7 - e) % 7)), i.setUTCHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setUTCDate(i.getUTCDate() + 7 * T);
        },
        function (i, T) {
          return (T - i) / iE;
        },
      );
    }
    var ip = new Date(),
      iv = new Date(),
      iC = iH(
        function () {},
        function (i, T) {
          i.setTime(+i + T);
        },
        function (i, T) {
          return T - i;
        },
      );
    iC.every = function (e) {
      return (
        (e = Math.floor(e)),
        isFinite(e) && e > 0
          ? e > 1
            ? iH(
                function (i) {
                  i.setTime(Math.floor(i / e) * e);
                },
                function (i, T) {
                  i.setTime(+i + T * e);
                },
                function (i, T) {
                  return (T - i) / e;
                },
              )
            : iC
          : null
      );
    };
    var iL = iC.range,
      iJ = 1000,
      io = 60000,
      iG = 3600000,
      iy = 86400000,
      iE = 604800000,
      hO = iH(
        function (e) {
          e.setTime(Math.floor(e / iJ) * iJ);
        },
        function (i, T) {
          i.setTime(+i + T * iJ);
        },
        function (i, T) {
          return (T - i) / iJ;
        },
        function (e) {
          return e.getUTCSeconds();
        },
      ),
      iI = hO.range,
      ix = iH(
        function (e) {
          e.setTime(Math.floor(e / io) * io);
        },
        function (i, T) {
          i.setTime(+i + T * io);
        },
        function (i, T) {
          return (T - i) / io;
        },
        function (e) {
          return e.getMinutes();
        },
      ),
      hW = ix.range,
      ih = iH(
        function (i) {
          var T = (i.getTimezoneOffset() * io) % iG;
          0 > T && (T += iG), i.setTime(Math.floor((+i - T) / iG) * iG + T);
        },
        function (i, T) {
          i.setTime(+i + T * iG);
        },
        function (i, T) {
          return (T - i) / iG;
        },
        function (e) {
          return e.getHours();
        },
      ),
      iD = ih.range,
      h6 = iH(
        function (e) {
          e.setHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setDate(i.getDate() + T);
        },
        function (i, T) {
          return (T - i - (T.getTimezoneOffset() - i.getTimezoneOffset()) * io) / iy;
        },
        function (e) {
          return e.getDate() - 1;
        },
      ),
      hN = h6.range,
      h3 = iw(0),
      h5 = iw(1),
      hJ = iw(2),
      h1 = iw(3),
      hQ = iw(4),
      ik = iw(5),
      iu = iw(6),
      hL = h3.range,
      ij = h5.range,
      hU = hJ.range,
      ig = h1.range,
      iz = hQ.range,
      ii = ik.range,
      iK = iu.range,
      iB = iH(
        function (e) {
          e.setDate(1), e.setHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setMonth(i.getMonth() + T);
        },
        function (i, T) {
          return T.getMonth() - i.getMonth() + 12 * (T.getFullYear() - i.getFullYear());
        },
        function (e) {
          return e.getMonth();
        },
      ),
      iM = iB.range,
      h0 = iH(
        function (e) {
          e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setFullYear(i.getFullYear() + T);
        },
        function (i, T) {
          return T.getFullYear() - i.getFullYear();
        },
        function (e) {
          return e.getFullYear();
        },
      );
    h0.every = function (e) {
      return isFinite((e = Math.floor(e))) && e > 0
        ? iH(
            function (i) {
              i.setFullYear(Math.floor(i.getFullYear() / e) * e),
                i.setMonth(0, 1),
                i.setHours(0, 0, 0, 0);
            },
            function (i, T) {
              i.setFullYear(i.getFullYear() + T * e);
            },
          )
        : null;
    };
    var hT = h0.range,
      iq = iH(
        function (e) {
          e.setUTCSeconds(0, 0);
        },
        function (i, T) {
          i.setTime(+i + T * io);
        },
        function (i, T) {
          return (T - i) / io;
        },
        function (e) {
          return e.getUTCMinutes();
        },
      ),
      h8 = iq.range,
      h7 = iH(
        function (e) {
          e.setUTCMinutes(0, 0, 0);
        },
        function (i, T) {
          i.setTime(+i + T * iG);
        },
        function (i, T) {
          return (T - i) / iG;
        },
        function (e) {
          return e.getUTCHours();
        },
      ),
      h4 = h7.range,
      h2 = iH(
        function (e) {
          e.setUTCHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setUTCDate(i.getUTCDate() + T);
        },
        function (i, T) {
          return (T - i) / iy;
        },
        function (e) {
          return e.getUTCDate() - 1;
        },
      ),
      hZ = h2.range,
      hY = il(0),
      hX = il(1),
      hV = il(2),
      hS = il(3),
      hR = il(4),
      hM = il(5),
      hK = il(6),
      hI = hY.range,
      ie = hX.range,
      iF = hV.range,
      ir = hS.range,
      iA = hR.range,
      id = hM.range,
      ic = hK.range,
      ib = iH(
        function (e) {
          e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setUTCMonth(i.getUTCMonth() + T);
        },
        function (i, T) {
          return T.getUTCMonth() - i.getUTCMonth() + 12 * (T.getUTCFullYear() - i.getUTCFullYear());
        },
        function (e) {
          return e.getUTCMonth();
        },
      ),
      ia = ib.range,
      hP = iH(
        function (e) {
          e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        },
        function (i, T) {
          i.setUTCFullYear(i.getUTCFullYear() + T);
        },
        function (i, T) {
          return T.getUTCFullYear() - i.getUTCFullYear();
        },
        function (e) {
          return e.getUTCFullYear();
        },
      );
    hP.every = function (e) {
      return isFinite((e = Math.floor(e))) && e > 0
        ? iH(
            function (i) {
              i.setUTCFullYear(Math.floor(i.getUTCFullYear() / e) * e),
                i.setUTCMonth(0, 1),
                i.setUTCHours(0, 0, 0, 0);
            },
            function (i, T) {
              i.setUTCFullYear(i.getUTCFullYear() + T * e);
            },
          )
        : null;
    };
    var h9 = hP.range;
    (im.timeInterval = iH),
      (im.timeMillisecond = iC),
      (im.timeMilliseconds = iL),
      (im.utcMillisecond = iC),
      (im.utcMilliseconds = iL),
      (im.timeSecond = hO),
      (im.timeSeconds = iI),
      (im.utcSecond = hO),
      (im.utcSeconds = iI),
      (im.timeMinute = ix),
      (im.timeMinutes = hW),
      (im.timeHour = ih),
      (im.timeHours = iD),
      (im.timeDay = h6),
      (im.timeDays = hN),
      (im.timeWeek = h3),
      (im.timeWeeks = hL),
      (im.timeSunday = h3),
      (im.timeSundays = hL),
      (im.timeMonday = h5),
      (im.timeMondays = ij),
      (im.timeTuesday = hJ),
      (im.timeTuesdays = hU),
      (im.timeWednesday = h1),
      (im.timeWednesdays = ig),
      (im.timeThursday = hQ),
      (im.timeThursdays = iz),
      (im.timeFriday = ik),
      (im.timeFridays = ii),
      (im.timeSaturday = iu),
      (im.timeSaturdays = iK),
      (im.timeMonth = iB),
      (im.timeMonths = iM),
      (im.timeYear = h0),
      (im.timeYears = hT),
      (im.utcMinute = iq),
      (im.utcMinutes = h8),
      (im.utcHour = h7),
      (im.utcHours = h4),
      (im.utcDay = h2),
      (im.utcDays = hZ),
      (im.utcWeek = hY),
      (im.utcWeeks = hI),
      (im.utcSunday = hY),
      (im.utcSundays = hI),
      (im.utcMonday = hX),
      (im.utcMondays = ie),
      (im.utcTuesday = hV),
      (im.utcTuesdays = iF),
      (im.utcWednesday = hS),
      (im.utcWednesdays = ir),
      (im.utcThursday = hR),
      (im.utcThursdays = iA),
      (im.utcFriday = hM),
      (im.utcFridays = id),
      (im.utcSaturday = hK),
      (im.utcSaturdays = ic),
      (im.utcMonth = ib),
      (im.utcMonths = ia),
      (im.utcYear = hP),
      (im.utcYears = h9),
      Object.defineProperty(im, '__esModule', {value: !0});
  });
  function ge(e) {
    this._elemType = e;
    this._objCollection = {};
  }
  ge.prototype.get = function () {
    var i = null;
    for (var e in this._objCollection) {
      if (this._objCollection[e] && this._objCollection[e]._free === true) {
        this._objCollection[e]._free = false;
        return this._objCollection[e];
      }
    }
    i = S(this._elemType);
    e = bj.getGUID('obj_pool_');
    this._objCollection[e] = i;
    return i;
  };
  ge.prototype.free = function (e) {
    if (!e) {
      return;
    }
    e._free = true;
    if (e.tagName.toLowerCase() === 'img') {
      e.src = '';
      e.crossOrigin = null;
      e.onload = e.onerror = null;
    }
  };
  ge.prototype.clear = function () {
    for (var e in this._objCollection) {
      if (this._objCollection[e] && this._objCollection[e].tagName.toLowerCase === 'img') {
        this._objCollection[e].onload = this._objCollection[e].onerror = null;
      }
    }
    this._objCollection = {};
  };
  var gr = {
    get: function (i, hJ, e, T) {
      var hI = new XMLHttpRequest();
      hI.open('GET', i, true);
      hI.timeout = 10000;
      hI.ontimeout = function () {
        T && T();
      };
      hI.onreadystatechange = function (hK) {
        if (this.readyState === 4) {
          if (this.status === 200) {
            hJ && hJ(hI.responseText);
          } else {
            e && e();
          }
        }
      };
      hI.send();
    },
    post: function (i, hK, hJ, e, T) {
      var hI = new XMLHttpRequest();
      hI.open('POST', i, true);
      hI.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      hI.timeout = 10000;
      hI.ontimeout = function () {
        T && T();
      };
      hI.onreadystatechange = function (hL) {
        if (this.readyState === 4) {
          if (this.status === 200) {
            hJ && hJ(hI.responseText, hK);
          } else {
            e && e();
          }
        }
      };
      hI.send(hK);
      return hI;
    },
  };
  var hd = (function (e) {
    function i(hK, T, hJ) {
      var hI = S('script', {src: hK, type: 'text/javascript', charset: 'utf-8'});
      if (hI.addEventListener) {
        hI.addEventListener(
          'load',
          function (hM) {
            var hL = hM.target;
            hL.parentNode.removeChild(hL);
            T && T();
          },
          false,
        );
        hI.addEventListener(
          'error',
          function (hL) {
            hJ && hJ(null);
          },
          false,
        );
      } else {
        if (hI.attachEvent) {
          hI.attachEvent('onreadystatechange', function (hM) {
            var hL = window.event.srcElement;
            if (hL && (hL.readyState === 'loaded' || hL.readyState === 'complete')) {
              hL.parentNode.removeChild(hL);
            }
            T && T();
          });
        }
      }
      e.getElementsByTagName('head')[0].appendChild(hI);
    }
    return {
      load: function (hL, T, hI) {
        if (typeof hL === 'string') {
          i(hL, T, hI);
        } else {
          if (hL.length > 0) {
            var hK = hL.length;
            for (var hJ = 0; hJ < hK; hJ++) {
              i(hL[hJ], function () {
                hK--;
                if (hK === 0 && T) {
                  T();
                }
              });
            }
          }
        }
      },
    };
  })(window.document);
  function cF() {}
  cF.instances = {};
  cF.getInstance = function (i, T) {
    if (cF.instances[i]) {
      return cF.instances[i];
    }
    var e = new dc(i, T);
    cF.instances[i] = e;
    return e;
  };
  function dc(e, i) {
    this._name = e;
    this._baseZoom = 18;
    this._opts = {tileSize: 256};
    C.extend(this._opts, i || {});
  }
  dc.mapZoomBaseIndex = [
    8,
    8,
    8,
    8,
    7,
    7,
    6,
    6,
    5,
    5,
    4,
    3,
    3,
    3,
    2,
    2,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  dc.baseScaleZoom = [19, 17, 15, 12, 10, 9, 7, 5, 3];
  dc.baseScaleZoomMercatorSize = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608];
  dc.mapZoomBaseZoomMapping = [
    3,
    3,
    3,
    3,
    5,
    5,
    7,
    7,
    9,
    9,
    10,
    12,
    12,
    12,
    15,
    15,
    17,
    17,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
  ];
  dc.mapZoomStartZoomMapping = [
    3,
    3,
    3,
    3,
    4,
    4,
    6,
    6,
    8,
    8,
    10,
    11,
    11,
    11,
    14,
    14,
    16,
    16,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
  ];
  dc.baseScaleTileSize = [1024, 1024, 512, 512, 256, 512, 512, 512, 256];
  dc.mapZoomTileSize = [
    256,
    256,
    256,
    256,
    256,
    512,
    256,
    512,
    256,
    512,
    256,
    256,
    512,
    1024,
    256,
    512,
    512,
    1024,
    512,
    1024,
    2048,
    4096,
    4096 * 2,
    4096 * 2 * 2,
    4096 * 2 * 2 * 2,
    4096 * 2 * 2 * 2 * 2,
  ];
  dc.baseZoomInfo = {
    3: [3],
    5: [4, 5],
    7: [6, 7],
    9: [8, 9],
    10: [10],
    12: [11, 12, 13],
    15: [14, 15],
    17: [16, 17],
    19: [18, 19, 20, 21, 22, 23, 24, 25],
  };
  dc.prototype = {
    getName: function () {
      return this._name;
    },
    getTileSize: function (e) {
      e = Math.floor(e);
      if (e < 3) {
        e = 3;
      }
      if (this._name === 'na') {
        return dc.mapZoomTileSize[e];
      }
      return this._opts.tileSize;
    },
    getBaseTileSize: function (i) {
      i = Math.floor(i);
      if (this._name === 'na') {
        var e = dc.mapZoomBaseZoomMapping[i];
        return dc.mapZoomTileSize[e];
      }
      return this._opts.tileSize;
    },
    getDataZoom: function (e) {
      e = Math.floor(e);
      if (this._name === 'na') {
        return dc.mapZoomBaseZoomMapping[e];
      }
      return e;
    },
    getZoomUnits: function (e) {
      return Math.pow(2, this._baseZoom - e);
    },
    getMercatorSize: function (T, i) {
      if (this._name === 'na') {
        T = Math.floor(T);
        var e = dc.mapZoomBaseIndex[T];
        return dc.baseScaleZoomMercatorSize[e];
      }
      return this._opts.tileSize * this.getZoomUnits(i);
    },
    getBaseZoom: function () {
      return this._baseZoom;
    },
    getParentTile: function (hI, hO, hN, T, i) {
      if (this._name === 'na') {
        var hJ = dc.baseZoomInfo[hN];
        T--;
        if (hJ.indexOf(T) > -1) {
          return {col: hI, row: hO, zoom: hN, useZoom: T};
        } else {
          var hL = dc.mapZoomBaseIndex[hN];
          var hK = dc.baseScaleZoom[hL + 1];
          if (!hK) {
            return null;
          }
          var hM = this.getFactorByZooms(hK, hN);
          var e = dc.baseZoomInfo[hK];
          return {
            col: Math.floor(hI / hM),
            row: Math.floor(hO / hM),
            zoom: hK,
            useZoom: e[e.length - 1],
          };
        }
        return null;
      }
      if (hN - 1 < i) {
        return null;
      }
      return {col: Math.floor(hI / 2), row: Math.floor(hO / 2), zoom: hN - 1, useZoom: hN - 1};
    },
    getChildTiles: function (hJ, hL, e, T, hS, hY) {
      if (this._name === 'na') {
        var hI = dc.baseZoomInfo[e];
        T += hY;
        if (hI.indexOf(T) > -1) {
          return [{col: hJ, row: hL, zoom: e, useZoom: T}];
        } else {
          var hW = 0;
          var hT = e;
          while (hW < hY) {
            var hX = dc.mapZoomBaseIndex[hT];
            var hN = dc.baseScaleZoom[hX - 1];
            if (!hN) {
              return null;
            }
            var hO = dc.baseZoomInfo[hN];
            if (hO[hY - 1]) {
              var hP = [];
              var hR = this.getFactorByZooms(e, hN);
              var i = hJ * hR;
              var hQ = hL * hR;
              for (var hV = 0; hV < hR; hV++) {
                var hK = i + hV;
                for (var hU = 0; hU < hR; hU++) {
                  var hM = hQ + hU;
                  hP.push({col: hK, row: hM, zoom: hN, useZoom: hO[hY - 1]});
                }
              }
              return hP;
            }
            hW += hO.length;
            if (hY === hO.length) {
              hT = hN;
            }
          }
        }
        return null;
      }
      var hP = [];
      if (e + hY > hS) {
        return null;
      }
      var hR = Math.pow(2, hY);
      var i = hJ * hR;
      var hQ = hL * hR;
      var hN = e + hY;
      var hP = [];
      for (var hV = 0; hV < 2; hV++) {
        var hK = i + hV;
        for (var hU = 0; hU < 2; hU++) {
          var hM = hQ + hU;
          hP.push({col: hK, row: hM, zoom: hN, useZoom: hN});
        }
      }
      return hP;
    },
    getFactorByZooms: function (i, hI) {
      var T = dc.mapZoomBaseIndex[i];
      var hJ = dc.mapZoomBaseIndex[hI];
      var e = dc.baseScaleZoomMercatorSize[T];
      var hK = dc.baseScaleZoomMercatorSize[hJ];
      return e / hK;
    },
  };
  var a3 = {};
  var af = ['swiftshader', 'microsoft basic render driver'];
  var cg = ['intel', 'nvidia', 'amd', 'apple', 'geforce'];
  function dp(e) {
    e = e.toLowerCase();
    if (af.indexOf(e) >= 0) {
      return true;
    }
    if (e.indexOf('mobile') >= 0) {
      return true;
    }
    return false;
  }
  function fv(T) {
    T = T.toLowerCase();
    for (var e = 0; e < cg.length; e++) {
      if (T.indexOf(cg[e]) >= 0) {
        return true;
      }
    }
    return false;
  }
  function dS(e) {
    if (!e) {
      return false;
    }
    if (dp(e)) {
      return false;
    }
    if (fv(e)) {
      return true;
    }
    return false;
  }
  a3.ifEnableEarth = function (i) {
    var e = a3.ifEnableEarth;
    if (!i && typeof e._enable === 'boolean') {
      return e._enable;
    }
    if (a3.ifSupportWebGL()) {
      e._enable = true;
      return true;
    }
    e._enable = false;
    return false;
  };
  a3.ifEnableWebGLMap = function (i) {
    var e = a3.ifEnableWebGLMap;
    if (!i && typeof e._enable === 'boolean') {
      return e._enable;
    }
    if (a3.ifSupportWebGL()) {
      if (dq.inMapHost) {
        e._enable = true;
        return true;
      } else {
        if (
          window.Blob ||
          window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MozBlobBuilder
        ) {
          e._enable = true;
          return true;
        } else {
          e._enable = false;
          return false;
        }
      }
    }
    e._enable = false;
    return false;
  };
  a3.params = {};
  a3.ifSupportWebGL = function () {
    var i = a3.ifSupportWebGL;
    if (typeof i._supportWebGL === 'boolean') {
      return i._supportWebGL;
    }
    if (!window.WebGLRenderingContext) {
      i._supportWebGL = false;
      return false;
    }
    var T = document.createElement('canvas');
    T.width = 300;
    T.height = 150;
    var hJ = null;
    var hP = {
      alpha: true,
      antialias: false,
      failIfMajorPerformanceCaveat: true,
      preserveDrawingBuffer: false,
      stencil: false,
    };
    try {
      hJ = T.getContext('webgl', hP) || T.getContext('experimental-webgl', hP);
    } catch (hL) {
      i._supportWebGL = false;
    }
    if (hJ === null) {
      i._supportWebGL = false;
    } else {
      i._supportWebGL = true;
      var hN = hJ.getExtension('WEBGL_debug_renderer_info');
      if (hN) {
        var hM = hJ.getParameter(hN.UNMASKED_RENDERER_WEBGL);
        if (dS(hM) === true) {
          i._supportWebGL = true;
        }
        var hO = hJ.getParameter(hN.UNMASKED_VENDOR_WEBGL);
        i._renderer = hM;
        i._vendor = hO;
      }
      if (!hN && C.Browser.firefox) {
        i._supportWebGL = true;
      }
      if (!hN && C.Platform.macintosh) {
        i._supportWebGL = true;
      }
      if (hJ.drawingBufferWidth !== T.width || hJ.drawingBufferHeight !== T.height) {
        i._supportWebGL = false;
      }
      if (hJ.getParameter(hJ.MAX_VERTEX_TEXTURE_IMAGE_UNITS) < 4) {
        i._supportWebGL = false;
      }
      var hI = hJ.getParameter(hJ.MAX_TEXTURE_SIZE);
      a3.params.maxTextureSize = hI;
      if (hI < 4096) {
        i._supportWebGL = false;
      }
      var hK = hJ.getParameter(hJ.MAX_TEXTURE_IMAGE_UNITS);
      if (hK < 8) {
        i._supportWebGL = false;
      }
      if (
        !hJ.getShaderPrecisionFormat ||
        hJ.getShaderPrecisionFormat(hJ.FRAGMENT_SHADER, hJ.HIGH_FLOAT).precision < 23
      ) {
        i._supportWebGL = false;
      }
    }
    return i._supportWebGL;
  };
  a3.ifSupportCanvas2d = function () {
    var hJ = a3.ifSupportCanvas2d;
    if (typeof hJ.supportCanvas2d === 'boolean') {
      return hJ.supportCanvas2d;
    }
    var T = document.createElement('canvas');
    var i = null;
    try {
      i = T.getContext('2d');
    } catch (hI) {
      hJ.supportCanvas2d = false;
    }
    if (i === null) {
      hJ.supportCanvas2d = false;
    } else {
      hJ.supportCanvas2d = true;
    }
    return hJ.supportCanvas2d;
  };
  a3.ifEnableCanvas2dMap = function () {
    var i = navigator.userAgent;
    var e = 0;
    var hI = 0;
    var hJ = 0;
    if (/macintosh/gi.test(i)) {
      var T = 0;
      if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(i) && !/chrome/i.test(i)) {
        T = parseInt(RegExp['\x241'] || RegExp['\x242'], 10);
      }
      if (T > 0) {
        return false;
      }
      return true;
    }
    if (/windows nt (\d+\.\d)/gi.test(i)) {
      hI = parseFloat(RegExp.$1);
      if (hI >= 6.1) {
        if (/chrome\/(\d+\.\d)/i.test(i)) {
          e = parseFloat(RegExp.$1);
          if (e >= 31) {
            return true;
          }
        }
        if (/MSIE (\d+(\.\d+)?)/.test(i)) {
          hJ = parseFloat(RegExp.$1);
          if (hJ >= 10) {
            return true;
          }
        }
        if (/Firefox/.test(i)) {
          return true;
        }
        if (/rv:11.0/gi.test(i)) {
          return true;
        }
        if (/edge/gi.test(i)) {
          return true;
        }
      }
    }
    return false;
  };
  a3.ifSupportCSS3 = function (hM, i) {
    var hL = document.createElement('div');
    var hK = 'Webkit Moz O ms'.split(' ');
    var e = hK.length;
    var T = '';
    var hI = hL.style;
    if (hM in hI) {
      T = hM;
    }
    hM = hM.replace(/^[a-z]/, function (hN) {
      return hN.toUpperCase();
    });
    while (e--) {
      var hJ = hK[e] + hM;
      if (hJ in hI) {
        T = hJ;
        break;
      }
    }
    if (i) {
      return T;
    } else {
      return T.length > 0 ? true : false;
    }
  };
  a3.isModernBrowser = a3.ifSupportCanvas2d() && a3.ifSupportCSS3('transform');
  function eR(i, e) {
    this._size = i;
    this._curSize = 0;
    this._cache = {};
    this._least = null;
    this._most = null;
    this._options = {clearCallback: null, removeOldCallback: null};
    e = e || {};
    for (var T in e) {
      this._options[T] = e[T];
    }
    this._getDataTimes = 0;
    this._hitTimes = 0;
  }
  eR.prototype.setData = function (hI, hK) {
    var i = this._cache;
    var T = this._size;
    if (T === 0) {
      return;
    }
    var e = this._curSize;
    if (e === T) {
      this._removeOld();
    }
    var hJ;
    if (!i[hI]) {
      hJ = {key: hI, data: hK, older: null, newwer: null};
      i[hI] = hJ;
      if (this._least === null) {
        this._least = hJ;
      }
      if (this._most === null) {
        this._most = hJ;
      }
      this._curSize++;
    } else {
      hJ = i[hI];
      hJ.data = hK;
      if (this._most === hJ) {
        return;
      }
      hJ.older && (hJ.older.newer = hJ.newer);
      hJ.newer && (hJ.newer.older = hJ.older);
      if (this._least === hJ) {
        this._least = hJ.newer;
      }
    }
    if (this._most && this._most !== hJ) {
      this._most.newer = hJ;
      hJ.older = this._most;
      this._most = hJ;
      hJ.newer = null;
    }
  };
  eR.prototype.getData = function (e) {
    var i = this._cache[e];
    this._getDataTimes++;
    if (i) {
      this._hitTimes++;
      var T = i.data;
      if (this._most === i) {
        return T;
      }
      i.older && (i.older.newer = i.newer);
      i.newer && (i.newer.older = i.older);
      if (this._least === i) {
        this._least = i.newer;
      }
      this._most.newer = i;
      i.older = this._most;
      i.newer = null;
      this._most = i;
      return T;
    }
    return null;
  };
  eR.prototype.getAllData = function () {
    return this._cache;
  };
  eR.prototype.getHitRate = function () {
    return this._hitTimes / this._getDataTimes;
  };
  eR.prototype.removeData = function (i) {
    var e = this._cache;
    var T = e[i];
    if (!T) {
      return;
    }
    if (this._options.clearCallback) {
      this._options.clearCallback(T.data, T.key);
    }
    T.older && (T.older.newer = T.newer);
    T.newer && (T.newer.older = T.older);
    if (this._least === T) {
      this._least = T.newer;
    }
    if (this._most === T) {
      this._most = T.older;
    }
    delete e[i];
    this._curSize--;
  };
  eR.prototype._removeOld = function () {
    var e = this._cache;
    var hI = Math.round(this._size * 0.6);
    var T = 0;
    while (this._least && T < hI) {
      var i = this._least;
      this._least = i.newer;
      i.newer && (i.newer.older = null);
      if (this._options.clearCallback) {
        this._options.clearCallback(i.data, i.key);
      }
      delete e[i.key];
      T++;
    }
    this._curSize -= T;
    if (this._options.removeOldCallback) {
      this._options.removeOldCallback();
    }
  };
  eR.prototype.clear = function () {
    var e = this._cache;
    var i = this._least;
    if (this._options.clearCallback) {
      while (i) {
        this._options.clearCallback(i.data, i.key);
        i = i.newer;
      }
    }
    this._least = this._most = null;
    this._cache = {};
    this._curSize = 0;
  };
  eR.prototype.forEach = function (e) {
    var i = this._least;
    while (i) {
      e(i.data);
      i = i.newer;
    }
  };
  eR.prototype.clearExcept = function (i) {
    var e = this._cache;
    var T = this._least;
    while (T) {
      if (!i[T.key]) {
        if (this._options.clearCallback) {
          this._options.clearCallback(T.data, T.key);
        }
        T.older && (T.older.newer = T.newer);
        T.newer && (T.newer.older = T.older);
        if (this._least === T) {
          this._least = T.newer;
        }
        if (this._most === T) {
          this._most = T.older;
        }
        delete e[T.key];
        this._curSize--;
      }
      T = T.newer;
    }
  };
  var gR = {
    parseHexToRgbaArray: function (hK) {
      var hL = hK.replace('#', '');
      if (hL.length === 3) {
        hL += 'f';
      } else {
        if (hL.length === 6) {
          hL += 'ff';
        }
      }
      var e = [];
      var hJ = hL.length;
      var hI = hJ === 8 ? 2 : 1;
      for (var T = 0; T < hJ; T = T + hI) {
        if (hI === 2) {
          e.push(parseInt(hL.slice(T, T + 2), 16));
        } else {
          e.push(parseInt(hL.slice(T, T + 1) + hL.slice(T, T + 1), 16));
        }
      }
      return e;
    },
    parseRgbaStrToArray: function (i) {
      var e = [0, 0, 0, 255];
      if (i.indexOf('rgba(') === 0) {
        var hI = i.replace('rgba(', '').replace(')', '');
        var T = hI.split(',');
        e[0] = parseInt(T[0], 10);
        e[1] = parseInt(T[1], 10);
        e[2] = parseInt(T[2], 10);
        e[3] = Math.round(parseFloat(T[3]) * 255);
      } else {
        if (i.indexOf('rgb(') === 0) {
          var hI = i.replace('rgb(', '').replace(')', '');
          var hJ = hI.split(',');
          e[0] = parseInt(hJ[0], 10);
          e[1] = parseInt(hJ[1], 10);
          e[2] = parseInt(hJ[2], 10);
          e[3] = 255;
        }
      }
      return e;
    },
    parseHexAndOpacityToRgbaArray: function (hJ, hK) {
      var T = [];
      var hN = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      var hM = hJ.toLowerCase();
      if (hN.test(hM)) {
        if (hM.length === 4) {
          var e = '#';
          for (var hL = 1; hL < 4; hL++) {
            e += hM.slice(hL, hL + 1).concat(hM.slice(hL, hL + 1));
          }
          hM = e;
        }
        for (var hI = 1; hI < 7; hI += 2) {
          T.push(parseInt(hM.slice(hI, hI + 2), 16));
        }
        T.push(hK);
      }
      return T;
    },
    parseCSSColor: function (e) {
      if (e.indexOf('#') === 0) {
        return gR.parseHexToRgbaArray(e);
      }
      return gR.parseRgbaStrToArray(e);
    },
    rgbToHSV: function (hJ) {
      var e = hJ[0] / 255;
      var T = hJ[1] / 255;
      var hK = hJ[2] / 255;
      var hN = Math.max(e, T, hK);
      var hI = Math.min(e, T, hK);
      var hM = hN - hI;
      var i;
      if (hM === 0) {
        i = 0;
      } else {
        if (hN === e) {
          i = 60 * (((T - hK) / hM) % 6);
        } else {
          if (hN === T) {
            i = 60 * ((hK - e) / hM + 2);
          } else {
            if (hN === hK) {
              i = 60 * ((e - T) / hM + 4);
            }
          }
        }
      }
      var hO = hN === 0 ? 0 : hM / hN;
      var hL = hN;
      while (i < 0) {
        i += 360;
      }
      return [i, hO, hL];
    },
    hsvToRGB: function (hI) {
      var hM = hI[2] * hI[1];
      var T = hM * (1 - Math.abs(((hI[0] / 60) % 2) - 1));
      var i = hI[2] - hM;
      var hJ = hI[0];
      var hL;
      var hK;
      var e;
      if (hJ >= 0 && hJ < 60) {
        hL = hM;
        hK = T;
        e = 0;
      } else {
        if (hJ >= 60 && hJ < 120) {
          hL = T;
          hK = hM;
          e = 0;
        } else {
          if (hJ >= 120 && hJ < 180) {
            hL = 0;
            hK = hM;
            e = T;
          } else {
            if (hJ >= 180 && hJ < 240) {
              hL = 0;
              hK = T;
              e = hM;
            } else {
              if (hJ >= 240 && hJ < 300) {
                hL = T;
                hK = 0;
                e = hM;
              } else {
                if (hJ >= 300 && hJ < 360) {
                  hL = hM;
                  hK = 0;
                  e = T;
                }
              }
            }
          }
        }
      }
      hL = (hL + i) * 255 > 255 ? 255 : (hL + i) * 255;
      hK = (hK + i) * 255 > 255 ? 255 : (hK + i) * 255;
      e = (e + i) * 255 > 255 ? 255 : (e + i) * 255;
      return [Math.round(hL), Math.round(hK), Math.round(e)];
    },
  };
  var cv = {
    request: function (hL, hI, i, hN, T) {
      var hJ = (Math.random() * 100000).toFixed(0);
      bj._rd['_cbk' + hJ] = function (hO) {
        if (hO.result && hO.result['error'] && hO.result['error'] === 202) {
          alert('该AK因为恶意行为已经被管理员封禁！');
          return;
        }
        i = i || {};
        hL && hL(hO, i);
        delete bj._rd['_cbk' + hJ];
      };
      hN = hN || '';
      var hM;
      if (i && i.useEncodeURI) {
        hM = ha(hI, encodeURI);
      } else {
        hM = ha(hI, encodeURIComponent);
      }
      var hK = this;
      var e = eV.apiHost + '/' + hN + '?' + hM + '&ie=utf-8&oue=1&fromproduct=jsapi';
      if (!T) {
        e += '&res=api';
      }
      e += '&callback=' + es + '._rd._cbk' + hJ;
      e += '&ak=' + f5;
      hd.load(e);
    },
  };
  bj._rd = {};
  var D = {
    request: function (i, T) {
      var e = S('script', {src: i, type: 'text/javascript', charset: 'utf-8'});
      if (e.addEventListener) {
        e.addEventListener(
          'load',
          function (hJ) {
            var hI = hJ.target;
            hI.parentNode.removeChild(hI);
          },
          false,
        );
        e.addEventListener(
          'error',
          function (hI) {
            T && T([, , , , ,]);
          },
          false,
        );
      } else {
        if (e.attachEvent) {
          e.attachEvent('onreadystatechange', function (hJ) {
            var hI = window.event.srcElement;
            if (hI && (hI.readyState == 'loaded' || hI.readyState == 'complete')) {
              hI.parentNode.removeChild(hI);
            }
          });
        }
      }
      document.getElementsByTagName('head')[0].appendChild(e);
      e = null;
    },
  };
  function a2() {
    this._map = null;
    this._container;
    this._type = 'control';
    this.blockInfoWindow = true;
    this._visible = true;
  }
  a2.inherits(d5, 'Control');
  C.extend(a2.prototype, {
    initialize: function (e) {
      this._map = e;
      if (this._container) {
        if (this._opts && this._opts.container) {
          this._opts.container.appendChild(this._container);
        } else {
          e.container.appendChild(this._container);
        }
        return this._container;
      }
      return;
    },
    _i: function (e) {
      if (!this._container && this.initialize && bQ(this.initialize)) {
        this._container = this.initialize(e);
      }
      this._opts = this._opts || {printable: false};
      this._setStyle();
      this._setPosition();
      if (this._container) {
        this._container._jsobj = this;
      }
    },
    _setStyle: function () {
      var i = this._container;
      if (i) {
        var e = i.style;
        e.position = 'absolute';
        e.zIndex = this._cZIndex || '10';
        e.MozUserSelect = 'none';
        if (!this._opts.printable) {
          C.ac(i, 'BMap_noprint');
        }
        C.on(i, 'contextmenu', c5);
      }
    },
    remove: function () {
      this._map = null;
      if (!this._container) {
        return;
      }
      this._container.parentNode && this._container.parentNode.removeChild(this._container);
      this._container._jsobj = null;
      this._container = null;
    },
    _render: function (e) {
      if (this._opts && this._opts.container) {
        this._container = dC(this._opts.container, '<div unselectable="on"></div>');
      } else {
        var i = '<div unselectable="on"></div>';
        if (e && e.config.autoSafeArea && bq()) {
          this._safeAreaContainer = dC(this._map.container, i);
          this._safeAreaContainer.style.position = 'absolute';
          this._safeAreaContainer.style.bottom = 'env(safe-area-inset-bottom)';
          this._container = dC(this._safeAreaContainer, i);
        } else {
          this._container = dC(this._map.container, i);
        }
      }
      if (this._visible === false) {
        this._container.style.display = 'none';
      }
      return this._container;
    },
    _setPosition: function () {
      this.setAnchor(this._opts.anchor);
    },
    setAnchor: function (hI) {
      if (
        this.anchorFixed ||
        typeof hI !== 'number' ||
        isNaN(hI) ||
        hI < BMAP_ANCHOR_TOP_LEFT ||
        hI > BMAP_ANCHOR_BOTTOM_RIGHT
      ) {
        hI = this.defaultAnchor;
      }
      this._opts.offset = this._opts.offset || this.defaultOffset;
      var T = this._opts.anchor;
      this._opts.anchor = hI;
      if (!this._container) {
        return;
      }
      var hK = this._container;
      var e = this._opts.offset.width;
      var hJ = this._opts.offset.height;
      hK.style.left = hK.style.top = hK.style.right = hK.style.bottom = 'auto';
      switch (hI) {
        case BMAP_ANCHOR_TOP_LEFT:
          hK.style.top = hJ + 'px';
          hK.style.left = e + 'px';
          break;
        case BMAP_ANCHOR_TOP_RIGHT:
          hK.style.top = hJ + 'px';
          hK.style.right = e + 'px';
          break;
        case BMAP_ANCHOR_BOTTOM_LEFT:
          hK.style.bottom = hJ + 'px';
          hK.style.left = e + 'px';
          break;
        case BMAP_ANCHOR_BOTTOM_RIGHT:
          hK.style.bottom = hJ + 'px';
          hK.style.right = e + 'px';
          break;
        default:
          break;
      }
      var i = ['TL', 'TR', 'BL', 'BR'];
      C.rc(this._container, 'anchor' + i[T]);
      C.ac(this._container, 'anchor' + i[hI]);
    },
    getAnchor: function () {
      return this._opts.anchor;
    },
    setOffset: function (e) {
      if (!e) {
        return;
      }
      this._opts = this._opts || {};
      this._opts.offset = new d1(e.width, e.height);
      if (!this._container) {
        return;
      }
      this.setAnchor(this._opts.anchor);
    },
    getOffset: function () {
      return this._opts.offset;
    },
    getDom: function () {
      return this._container;
    },
    show: function () {
      if (this._visible === true) {
        return;
      }
      this._visible = true;
      if (this._container) {
        this._container.style.display = '';
      }
      this.dispatchEvent(new a6('onshow'));
    },
    hide: function () {
      if (this._visible === false) {
        return;
      }
      this._visible = false;
      if (this._container) {
        this._container.style.display = 'none';
      }
      this.dispatchEvent(new a6('onhide'));
    },
    isPrintable: function () {
      return !!this._opts.printable;
    },
    isVisible: function () {
      if (!this._container && !this._map) {
        return false;
      }
      return !!this._visible;
    },
    _asyncLoadCode: function () {
      var e = this;
      d2.load('control', function () {
        if (e._asyncDraw) {
          e._asyncDraw();
        }
      });
    },
  });
  var hu = {TOP_LEFT: 0, TOP_RIGHT: 1, BOTTOM_LEFT: 2, BOTTOM_RIGHT: 3};
  bj.ControlAnchor = hu;
  window.BMAP_ANCHOR_TOP_LEFT = 0;
  window.BMAP_ANCHOR_TOP_RIGHT = 1;
  window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
  window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
  function dB(e) {
    a2.call(this);
    e = e || {};
    this._opts = {printable: false};
    C.extend(this._opts, e);
    this._copyrightCollection = [];
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new d1(5, 2);
    this.setAnchor(e.anchor);
    this._canShow = true;
    this.sateMapStyle = false;
    this.blockInfoWindow = false;
    this._asyncLoadCode();
  }
  dB.inherits(a2, 'CopyrightControl');
  C.extend(dB.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container;
    },
    addCopyright: function (hI) {
      var e = {minZoom: 0, bounds: null, content: '', mapType: ''};
      for (var T in hI) {
        e[T] = hI[T];
      }
      if (this._map) {
        var hL = e.minZoom;
        if (hL === -1 || hL < this._map.getMinZoom() || hL > this._map.getMaxZoom()) {
          e.minZoom = this._map.getMinZoom();
        }
        if (e.mapType !== '' && !b1[e.mapType]) {
          e.mapType = BMAPGL_NORMAL_MAP;
        }
      }
      var hJ = this.getCopyright(hI.id);
      if (hJ) {
        for (var hK in e) {
          hJ[hK] = e[hK];
        }
      } else {
        this._copyrightCollection.push(e);
      }
    },
    getCopyright: function (hI) {
      for (var T = 0, e = this._copyrightCollection.length; T < e; T++) {
        if (this._copyrightCollection[T].id === hI) {
          return this._copyrightCollection[T];
        }
      }
    },
    addSateMapStyle: function () {
      this.sateMapStyle = true;
      if (this._container) {
        C.ac(this._container, 'BMap_cpyCtrl_w');
      }
    },
    removeSateMapStyle: function () {
      this.sateMapStyle = false;
      if (this._container) {
        C.rc(this._container, 'BMap_cpyCtrl_w');
      }
    },
  });
  function g8(e) {
    a2.call(this);
    e = e || {};
    this._opts = {printable: false};
    this._opts = C.extend(C.extend(this._opts, {unit: 'metric'}), e);
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new d1(81, 18);
    if (fW()) {
      this.defaultOffset = new d1(75, 10);
    }
    this.setAnchor(e.anchor);
    this._units = {
      metric: {name: 'metric', conv: 1, incon: 1000, u1: '米', u2: '公里'},
      us: {name: 'us', conv: 3.2808, incon: 5280, u1: '英尺', u2: '英里'},
    };
    this.sateMapStyle = false;
    if (!this._units[this._opts.unit]) {
      this._opts.unit = 'metric';
    }
    this._scaleText = null;
    this._numberArray = {};
    this._asyncLoadCode();
  }
  window.BMAP_UNIT_METRIC = 'metric';
  window.BMAP_UNIT_IMPERIAL = 'us';
  g8.inherits(a2, 'ScaleControl');
  C.extend(g8.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container;
    },
    setUnit: function (e) {
      this._opts.unit = (this._units[e] && this._units[e].name) || this._opts.unit;
    },
    getUnit: function () {
      return this._opts.unit;
    },
    addSateMapStyle: function () {
      this.sateMapStyle = true;
      var e = this._container;
      if (e) {
        C.ac(e.children[0], 'dark');
      }
    },
    removeSateMapStyle: function () {
      this.sateMapStyle = false;
      var e = this._container;
      if (e) {
        C.rc(e.children[0], 'dark');
      }
    },
  });
  window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
  window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
  window.BMAP_NAVIGATION_CONTROL_PAN = 2;
  window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;
  window.BMAP_NAVIGATION_CONTROL_ANIM = 4;
  function dm(e) {
    a2.call(this);
    e = e || {};
    this._opts = {printable: false};
    C.extend(this._opts, e);
    this.controlHeight = [
      {width: 65, height: 227, zoomHeight: 227, zoomWidth: 37, sliderHeight: 180},
      {
        width: 65,
        height: 47,
        zoomHeight: this._opts.forceNew === true ? 56 : 47,
        zoomWidth: 37,
        sliderHeight: 0,
      },
      {width: 37, height: 57, zoomHeight: 0, zoomWidth: 0, sliderHeight: 0},
      {width: 26, height: 56, zoomHeight: 56, zoomWidth: 6, sliderHeight: 0},
      {width: 56, height: 47, zoomHeight: 47, zoomWidth: 37, sliderHeight: 180},
    ];
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset = new d1(10, 10);
    this.setAnchor(e.anchor);
    this.setType(e.type);
    this._maxTotalZoomLv = 19;
    this._minZoomLevel = -1;
    this._maxZoomLevel = -1;
    this._totalZoomLv = -1;
    this._sliderInterval = 10;
    this._sliderHeight = 180;
    this._minBarY = 1;
    this._maxBarY = -1;
    this._curBarY = -1;
    this._zoomDom = null;
    this._zoomBtnDom = null;
    this._sliderDom = null;
    this._sliderBaseDom = null;
    this._cZIndex = '1100';
    this._asyncLoadCode();
  }
  dm.inherits(a2, 'NavigationControl');
  C.extend(dm.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container;
    },
    setType: function (e) {
      if (
        typeof e == 'number' &&
        e >= BMAP_NAVIGATION_CONTROL_LARGE &&
        e <= BMAP_NAVIGATION_CONTROL_ANIM
      ) {
        this._opts.type = e;
      } else {
        this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE;
      }
    },
    getType: function () {
      return this._opts.type;
    },
  });
  function bx(i) {
    a2.call(this);
    i = i || {};
    this._opts = {printable: false};
    this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
    this.defaultOffset = new d1(10, 10);
    this.setAnchor(i.anchor);
    this._opts = C.extend(
      C.extend(this._opts, {offset: this.defaultOffset, enableSwitch: true}),
      i,
    );
    var e = this;
    d2.load('control', function () {
      e._asyncDraw();
    });
  }
  bx.inherits(a2, 'MapTypeControl');
  C.extend(bx.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container;
    },
    showStreetLayer: function (e) {
      this._map.showStreetLayer(e);
    },
  });
  function cs(e) {
    a2.call(this);
    e = e || {};
    this._opts = {};
    this._opts = C.extend(this._opts, e);
    this._zoomInDisabled = false;
    this._zoomOutDisabled = false;
    this._zoomInTapped = false;
    this._zoomOutTapped = false;
    this.defaultAnchor = hu.BOTTOM_RIGHT;
    this.defaultOffset = new d1(15, 20);
    this.setAnchor(e.anchor);
    this._asyncLoadCode();
  }
  cs.inherits(a2, 'ZoomControl');
  C.extend(cs.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container;
    },
  });
  function bv(e) {
    a2.call(this);
    e = e || {};
    this._opts = {autoZoom: true, autoViewport: true};
    this._opts = C.extend(this._opts, e);
    this.defaultAnchor = hu.BOTTOM_LEFT;
    this.defaultOffset = new d1(10, 50);
    this.watchPosition = this._opts.watchPosition || false;
    this.useCompass = this._opts.useCompass || false;
    this.locMarker = null;
    this.locLevel = 16;
    this.setAnchor(this._opts.anchor);
    this.onLocationStart = e.onLocationStart || null;
    this._asyncLoadCode();
  }
  bv.inherits(a2, 'LocationControl');
  C.extend(bv.prototype, {
    initialize: function (e) {
      this._map = e;
      return this._container;
    },
    startLocation: function () {
      this._startLocationCalled = true;
    },
    stopLocationTrace: function () {},
    setOptions: function (e) {
      e = e || {};
      C.extend(this._opts, e);
    },
  });
  function ae(e) {
    a2.call(this);
    e = e || {};
    this._opts = {};
    this._opts = C.extend(this._opts, e);
    this.defaultAnchor = hu.BOTTOM_LEFT;
    this.defaultOffset = new d1(5, 15);
    if (fW()) {
      this.defaultOffset = new d1(10, 10);
    }
    this.setAnchor(e.anchor);
  }
  ae.inherits(a2, 'LogoControl');
  C.extend(ae.prototype, {
    initialize: function (i) {
      this._map = i;
      var e = (this._container = document.createElement('div'));
      e.innerHTML =
        '<img src="' + eV.apiHost + '/images/logo_hd.png"  style="height:21px;width:62px;"/>';
      i.getContainer().appendChild(e);
      return e;
    },
  });
  function gs(e, i) {
    this._map = e;
    this._indoorInfo = i;
    this._visible = true;
    this._adjustVisible = true;
    this._isMobile = fW();
    this._sizeConfig = {
      FLOOR_BTN_HEIGHT: this._isMobile ? 35 : 26,
      SWITCH_ARROW_HEIGHT: this._isMobile ? 20 : 15,
    };
    this._init();
  }
  gs.prototype._init = function () {
    this._render();
    this._bindDom();
    this._bind();
    this._adjustDisplayHeight();
    var e = new a6('onindoor_bar_show');
    e.uid = this._indoorInfo.uid;
    this._map.dispatchEvent(e);
  };
  gs.prototype._render = function () {
    if (!this._indoorInfo) {
      return;
    }
    var hM = this._isMobile;
    var e = (this._div = S('div'));
    C.ac(e, 'floor-select-container');
    hM && C.ac(e, 'mobile');
    hM && C.ac(e, 'all-border-radius');
    var i = (this._btnTop = S('button'));
    C.ac(i, 'floor-switch-top');
    C.ac(i, 'top-border-radius');
    var hK = S('div');
    C.ac(hK, 'floor-switch-top-icon');
    i.appendChild(hK);
    var hJ = (this._btnBottom = S('button'));
    var T = S('div');
    C.ac(T, 'floor-switch-bottom-icon');
    hJ.appendChild(T);
    C.ac(hJ, 'floor-switch-bottom');
    C.ac(hJ, 'bottom-border-radius');
    var hI = (this._floorsContainer = S('div'));
    C.ac(hI, 'floors-container');
    hI.appendChild(this._createFloorsDom());
    this._div.appendChild(i);
    this._div.appendChild(hI);
    this._div.appendChild(hJ);
    var hN = 0;
    if (this._btnTop.style.display === '') {
      hN = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
    }
    this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + hN + 'px';
    this._map.getContainer().appendChild(this._div);
    if (!hM) {
      var hL = this;
      setTimeout(function () {
        hL._div.style.right = '20px';
      }, 20);
    }
  };
  gs.prototype._createFloorsDom = function () {
    if (!this._indoorInfo) {
      return;
    }
    var T = (this._ol = S('ol'));
    var hK = this._indoorInfo.currentFloor;
    for (var hJ = this._indoorInfo.floors.length - 1; hJ >= 0; hJ--) {
      var hL = this._indoorInfo.floors[hJ].floorName;
      var e = S('li');
      var hI = S('button');
      C.ac(hI, 'btn-select-floor');
      if (hJ === hK) {
        C.ac(hI, 'selected');
      }
      hI.setAttribute('data-floor', hJ);
      hI.innerHTML = hL;
      e.appendChild(hI);
      T.appendChild(e);
    }
    return T;
  };
  gs.prototype._updateUI = function () {
    if (!this._ol) {
      this._render();
      this._bind();
      this._adjustDisplayHeight();
      return;
    }
    this._ol = null;
    this._ol = this._createFloorsDom();
    this._floorsContainer.innerHTML = '';
    this._floorsContainer.appendChild(this._ol);
    this._adjustDisplayHeight();
  };
  gs.prototype._bindDom = function () {
    var e = this;
    C.on(this._floorsContainer, 'click', function (hI) {
      var T = hI.target || hI.srcElement;
      if (T.tagName.toLowerCase() === 'button') {
        e._map.showIndoor(e._indoorInfo.uid, parseInt(T.getAttribute('data-floor'), 10));
        var i = new a6('onindoor_bar_click');
        i.uid = e._indoorInfo.uid;
        e._map.dispatchEvent(i);
      }
    });
    C.on(this._floorsContainer, 'mouseover', function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === 'button') {
        C.ac(i, 'hover');
      }
    });
    C.on(this._floorsContainer, 'mouseout', function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === 'button') {
        C.rc(i, 'hover');
      }
    });
    C.on(this._floorsContainer, 'touchstart', function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === 'button') {
        C.ac(i, 'onmousedown');
      }
    });
    C.on(this._floorsContainer, 'touchend', function (T) {
      var i = T.target;
      if (i.tagName.toLowerCase() === 'button') {
        C.rc(i, 'onmousedown');
      }
    });
    C.on(this._btnTop, 'mouseover', function (i) {
      if (this._disable) {
        return;
      }
      C.ac(this, 'hover');
    });
    C.on(this._btnTop, 'mouseout', function (i) {
      C.rc(this, 'hover');
    });
    C.on(this._btnBottom, 'mouseover', function (i) {
      if (this._disable) {
        return;
      }
      C.ac(this, 'hover');
    });
    C.on(this._btnBottom, 'mouseout', function (i) {
      C.rc(this, 'hover');
    });
    C.on(this._btnTop, 'touchstart', function (i) {
      if (this.className.indexOf('disable') > -1) {
        return;
      }
      C.ac(this, 'onmousedown');
    });
    C.on(this._btnTop, 'touchend', function (i) {
      C.rc(this, 'onmousedown');
    });
    C.on(this._btnBottom, 'touchstart', function (i) {
      if (this.className.indexOf('disable') > -1) {
        return;
      }
      C.ac(this, 'onmousedown');
    });
    C.on(this._btnBottom, 'touchend', function (i) {
      C.rc(this, 'onmousedown');
    });
    C.on(this._btnTop, 'click', function (i) {
      e._setBarSliderTop(parseInt(e._ol.style.top, 10) + 26);
    });
    C.on(this._btnBottom, 'click', function (i) {
      e._setBarSliderTop(parseInt(e._ol.style.top, 10) - 26);
    });
    C.on(this._div, 'mousemove', h);
    C.on(this._div, 'wheel', c5);
    C.on(this._div, 'mousewheel', c5);
    this._map.addEventListener('resize', function () {
      e._adjustDisplayHeight();
    });
  };
  gs.prototype._adjustDisplayHeight = function () {
    if (!this._indoorInfo) {
      return;
    }
    var hK = this._map.getSize().height;
    var hL = this._sizeConfig.FLOOR_BTN_HEIGHT;
    var hM = hK - 291 - 100;
    if (this._isMobile) {
      hM = hK - 12 - 108 - this._map.config.bottomOffset;
    }
    var e = this._indoorInfo.floors.length;
    var T = e * hL;
    var hI = e;
    var hO = 0;
    var hP = this._floorsContainer.children[0];
    if (T > hM) {
      this._showArrow = true;
      C.rc(hP.children[0].children[0], 'top-border-radius');
      C.rc(hP.children[e - 1].children[0], 'bottom-border-radius');
    } else {
      this._showArrow = false;
      C.ac(hP.children[0].children[0], 'top-border-radius');
      C.ac(hP.children[e - 1].children[0], 'bottom-border-radius');
    }
    while (T > hM) {
      if (hI === 0) {
        break;
      }
      hI--;
      hO = 2 * this._sizeConfig.SWITCH_ARROW_HEIGHT;
      T = hI * hL + hO;
    }
    this._currentDisplayHeight = T;
    if (hI < 3) {
      this._setAdjustVisbile(false);
    } else {
      this._setAdjustVisbile(true);
    }
    this._floorsContainer.style.height = hI * hL + 'px';
    var hJ = this._indoorInfo.currentFloor;
    var i = e - hJ;
    var hN = hJ - 1;
    this._div.style.height = parseInt(this._floorsContainer.style.height, 10) + hO + 'px';
    var hQ = -(e - (hJ + Math.round(hI / 2))) * hL;
    this._setBarSliderTop(hQ);
    if (hI < e) {
      C.show(this._btnTop);
      C.show(this._btnBottom);
    } else {
      C.hide(this._btnTop);
      C.hide(this._btnBottom);
      this._setBarSliderTop(0);
    }
    if (this._isMobile) {
      this._div.style.bottom = 108 + this._map.config.bottomOffset + 'px';
    }
  };
  gs.prototype._setBarSliderTop = function (hI) {
    var T = 26;
    var i = this._indoorInfo.floors.length;
    var e = i * T;
    if (this._currentDisplayHeight) {
      if (this._showArrow) {
        e = this._currentDisplayHeight - 30;
      } else {
        e = this._currentDisplayHeight;
      }
    }
    if (e - hI >= i * T) {
      hI = e - i * T;
      C.ac(this._btnBottom, 'disable');
      C.rc(this._btnBottom, 'hover');
      this._btnBottom._disable = true;
    } else {
      C.rc(this._btnBottom, 'disable');
      this._btnBottom._disable = false;
    }
    if (hI >= 0) {
      hI = 0;
      C.ac(this._btnTop, 'disable');
      C.rc(this._btnTop, 'hover');
      this._btnTop._disable = true;
    } else {
      C.rc(this._btnTop, 'disable');
      this._btnTop._disable = false;
    }
    this._ol.style.top = hI + 'px';
  };
  gs.prototype._setAdjustVisbile = function (e) {
    if (this._adjustVisible === e) {
      return;
    }
    this._adjustVisible = e;
    if (e && this._visible) {
      this._div.style.right = '20px';
    } else {
      this._div.style.right = '-30px';
    }
  };
  gs.prototype._bind = function () {
    var i = this._map;
    var e = this;
    i.on('indoor_status_changed', function (hM) {
      if (e._visible === false) {
        return;
      }
      var T = e._ol;
      var hK = hM.uid;
      if (!hK) {
        return;
      }
      var hL = hM.floor;
      for (var hJ = 0; hJ < T.children.length; hJ++) {
        var hI = T.children[hJ].children[0];
        if (parseInt(hI.getAttribute('data-floor'), 10) === hL) {
          C.ac(hI, 'selected');
        } else {
          C.rc(hI, 'selected');
        }
      }
    });
    i.on('zoomend', function (T) {
      if (this.getZoom() < 17) {
        e._setAdjustVisbile(false);
      } else {
        e._setAdjustVisbile(true);
      }
    });
  };
  gs.prototype.setInfo = function (e) {
    if (this._indoorInfo && this._indoorInfo.uid === e.uid) {
      return;
    }
    this._indoorInfo = e;
    this._updateUI();
  };
  gs.prototype.show = function () {
    if (this._visible === true) {
      return;
    }
    this._visible = true;
    if (!this._isMobile) {
      this._div.style.right = '20px';
    } else {
      this._div.style.display = '';
    }
    var e = new a6('onindoor_bar_show');
    e.uid = this._indoorInfo.uid;
    this._map.dispatchEvent(e);
  };
  gs.prototype.hide = function () {
    if (this._visible === false) {
      return;
    }
    this._visible = false;
    if (!this._isMobile) {
      this._div.style.right = '-30px';
    } else {
      this._div.style.display = 'none';
    }
  };
  function eM() {
    this._opts = {};
    this.defaultOffset = new d1(2, 80);
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this._firstAnimation = true;
  }
  eM.inherits(a2, 'NavigationControl3D');
  C.extend(eM.prototype, {
    initialize: function (T) {
      this._map = T;
      this._createDom();
      this._bindDom();
      this._bind();
      if (!fW()) {
        this._headingControl = new hx(this._map, this._div);
      }
      this._tiltControl = new ek(this._map, this._div);
      this._render();
      var i = this._map.getMapType();
      var e = this;
      if (i === 'B_EARTH_MAP' || this._map._renderType === 'webgl') {
        e._div.style.opacity = '1';
        e._div.style.visibility = 'visible';
      } else {
        e._div.style.opacity = '0';
        e._div.style.visibility = 'hidden';
      }
      return this._container;
    },
    _createDom: function () {
      var i = (this._div = document.createElement('div'));
      this._container = i;
      var e = i.style;
      e.position = 'absolute';
      e.zIndex = 5;
      e.width = '52px';
      e.height = '82px';
      e.right = '-3px';
      e.bottom = '79px';
      e.opacity = '0';
      e.visibility = 'hidden';
      e.WebkitTransition = e.transition = 'opacity .3s ease-out,visibility .3s ease-out';
    },
    _render: function () {
      var e = document.getElementById('map-operate');
      if (e) {
        e.appendChild(this._div);
      } else {
        this._map.getContainer().appendChild(this._div);
      }
    },
    _bindDom: function () {
      this._div.addEventListener('mousemove', h);
    },
    _bind: function () {
      if (this._map._renderType === 'webgl') {
        return;
      }
      var e = this;
      this._map.on('maptypechange', function () {
        if (this.mapType === 'B_EARTH_MAP') {
          if (e._firstAnimation) {
            e._firstAnimation = false;
            setTimeout(function () {
              e._div.style.opacity = '1';
              e._div.style.visibility = 'visible';
            }, 300);
          } else {
            e._div.style.opacity = '1';
            e._div.style.visibility = 'visible';
          }
        } else {
          e._div.style.opacity = '0';
          e._div.style.visibility = 'hidden';
        }
      });
    },
  });
  function hx(T, i) {
    this._map = T;
    this._target = T;
    var hI = T.temp.originMapType || T.mapType;
    if (hI === 'B_EARTH_MAP' && T._earth) {
      this._target = T._earth;
    }
    this._outContainer = i || T.getContainer();
    this._imgRatio = a1() >= 1.5 ? 2 : 1;
    this._imgPath =
      eV.imgPath + 'earth-navi-control-pc4' + (this._imgRatio === 2 ? '-2x.png' : '.png');
    this._enabled = true;
    var e = this;
    this._setHeadingOptions = {
      callback: function () {
        e._target.setLock(false);
      },
    };
    this._init();
  }
  C.extend(hx.prototype, {
    _init: function () {
      this._createDom();
      this._render();
      this._bindDom();
      this._bind();
      this._updateUI();
      this._checkEnable();
    },
    _checkEnable: function () {
      if (this._target.getZoom() >= this._target._enableHeadingZoom) {
        this.enable();
      } else {
        this.disable();
      }
    },
    _createDom: function () {
      var i = (this._div = S('div'));
      var e = i.style;
      e.position = 'absolute';
      e.zIndex = 5;
      e.top = '0';
      e.left = '0';
      e.width = '52px';
      e.height = '54px';
      e.background = 'url(' + this._imgPath + ') no-repeat';
      e.backgroundSize = '266px auto';
      this._rotateCCW = this._createButton();
      this._rotateCCW.title = '逆时针转动';
      e = this._rotateCCW.style;
      e.left = '2px';
      e.top = '5px';
      e.zIndex = '1';
      e.width = '15px';
      e.height = '42px';
      e.backgroundPosition = '-75px -5px';
      this._rotateCW = this._createButton();
      this._rotateCW.title = '顺时针转动';
      e = this._rotateCW.style;
      e.right = '2px';
      e.top = '5px';
      e.zIndex = '1';
      e.width = '15px';
      e.height = '42px';
      e.backgroundPosition = '-75px -5px';
      e.WebkitTransform = e.transform = 'scaleX(-1)';
      this._compass = this._createButton();
      this._compass.title = '恢复正北方向';
      e = this._compass.style;
      e.left = '19px';
      e.top = '4px';
      e.width = '14px';
      e.height = '44px';
      e.backgroundPosition = '-56px -4px';
      e.WebkitTransform = e.transform = 'rotate(0deg)';
      this._div.appendChild(this._rotateCCW);
      this._div.appendChild(this._compass);
      this._div.appendChild(this._rotateCW);
      this._domRendered = true;
    },
    _createButton: function () {
      var e = S('button');
      var i = e.style;
      i.position = 'absolute';
      i.outline = 'none';
      i.border = 'none';
      i.background = 'url(' + this._imgPath + ') no-repeat';
      i.backgroundSize = '266px auto';
      i.cursor = 'pointer';
      return e;
    },
    _render: function () {
      this._outContainer.appendChild(this._div);
    },
    enable: function () {
      this._enabled = true;
      if (this._domRendered) {
        this._rotateCCW.style.cursor = 'pointer';
        this._rotateCCW.style.opacity = 1;
        this._rotateCW.style.cursor = 'pointer';
        this._rotateCW.style.opacity = 1;
        this._compass.style.cursor = 'pointer';
        this._compass.style.opacity = 1;
      }
    },
    disable: function () {
      this._enabled = false;
      if (this._domRendered) {
        this._rotateCCW.style.cursor = '';
        this._rotateCCW.style.opacity = 0.4;
        this._rotateCW.style.cursor = '';
        this._rotateCW.style.opacity = 0.4;
        this._compass.style.cursor = '';
        this._compass.style.opacity = 0.4;
      }
    },
    _bindDom: function () {
      eC(this._div, ['mousedown', 'click', 'dblclick']);
      var i = this._map;
      var e = this;
      this._rotateCW.addEventListener(
        'click',
        function () {
          if (e._isOperating || e._enabled === false) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          if (e._target.getHeading() === 360) {
            e._target.setHeading(0);
          }
          e._target.setLock(true);
          e._target.setHeading(e._target.getHeading() + 90, e._setHeadingOptions);
          i.fire(new a6('onrotatecwclick'));
        },
        false,
      );
      this._rotateCCW.addEventListener(
        'click',
        function () {
          if (e._isOperating || e._enabled === false) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          if (e._target.getHeading() === -360) {
            e._target.setHeading(0);
          }
          e._target.setLock(true);
          e._target.setHeading(e._target.getHeading() - 90, e._setHeadingOptions);
          i.fire(new a6('onrotateccwclick'));
        },
        false,
      );
      this._rotateCW.addEventListener(
        'mouseover',
        function () {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = '-89px -5px';
        },
        false,
      );
      this._rotateCW.addEventListener(
        'mouseout',
        function () {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = '-75px -5px';
        },
        false,
      );
      this._rotateCCW.addEventListener(
        'mouseover',
        function () {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = '-89px -5px';
        },
        false,
      );
      this._rotateCCW.addEventListener(
        'mouseout',
        function () {
          if (e._enabled === false) {
            return;
          }
          this.style.backgroundPosition = '-75px -5px';
        },
        false,
      );
      this._compass.addEventListener(
        'click',
        function () {
          if (e._isOperating || e._enabled === false) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          e._target.setLock(true);
          var T = false;
          if (e._target.getTilt() !== 0) {
            T = true;
            e._target.setTilt(0, e._setHeadingOptions);
          }
          if (e._target.getHeading() % 360 !== 0) {
            T = true;
            e._target.resetHeading(e._setHeadingOptions);
          }
          if (!T) {
            e._target.setLock(false);
          }
          i.fire(new a6('oncompassclick'));
        },
        false,
      );
    },
    _bind: function () {
      var e = this;
      this._bindTarget(this._target);
      if (this._map._renderType === 'webgl') {
        this._map.addEventListener('maptypechange', function (i) {
          if (this.mapType === 'B_EARTH_MAP') {
            e._target = e._map._earth;
          } else {
            e._target = e._map;
          }
          e._bindTarget(e._target);
          e._checkEnable();
        });
      }
    },
    _bindTarget: function (i) {
      if (i === this._map && this._mapBinded) {
        return;
      }
      if (i === this._map._earth && this._earthBinded) {
        return;
      }
      var e = this;
      i.addEventListener('heading_changed', function (T) {
        e._updateUI();
      });
      i.addEventListener('animation_start', function (T) {
        e._isOperating = true;
      });
      i.addEventListener('animation_end', function (T) {
        e._isOperating = false;
      });
      i.on('load', function () {
        e._checkEnable();
      });
      i.on('zoom_changed', function () {
        e._checkEnable();
      });
      if (i === this._map) {
        this._mapBinded = true;
      } else {
        this._earthBinded = true;
      }
    },
    _updateUI: function () {
      var e = this._target.getHeading();
      var i = this._compass.style;
      i.WebkitTransform = i.transform = 'rotate(' + e + 'deg)';
    },
    hide: function () {
      this._div.style.display = 'none';
    },
    show: function () {
      this._div.style.display = 'block';
    },
  });
  function ek(T, i) {
    this._map = T;
    this._target = T;
    var hI = T.temp.originMapType || T.mapType;
    if (hI === 'B_EARTH_MAP' && T._earth) {
      this._target = T._earth;
    }
    this._outContainer = i || T.getContainer();
    this._imgRatio = a1() >= 1.5 ? 2 : 1;
    this._imgPath =
      eV.imgPath + 'gl-navi-control-pc4' + (this._imgRatio === 2 ? '-2x.png' : '.png');
    this._enabled = true;
    var e = this;
    this._setTiltOptions = {
      callback: function () {
        e._target.setLock(false);
      },
    };
    this._init();
  }
  C.extend(ek.prototype, {
    _init: function () {
      this._createDom();
      this._render();
      this._bindDom();
      this._bind();
      this._checkEnable();
    },
    _checkEnable: function () {
      if (this._target.getZoom() >= this._target._enableTiltZoom) {
        this.enable();
      } else {
        this.disable();
      }
    },
    _createDom: function () {
      var e = (this._div = S('button'));
      e.title = '倾斜';
      var i = e.style;
      i.position = 'absolute';
      i.zIndex = 5;
      i.outline = 'none';
      i.border = 'none';
      i.cursor = 'pointer';
      i.width = '26px';
      i.height = '26px';
      i.top = '56px';
      i.right = '13px';
      i.background = 'url(' + this._imgPath + ') no-repeat #fff';
      i.backgroundSize = '266px auto';
      i.backgroundPosition = '-110px 1px';
      i.boxShadow = '1px 2px 1px rgba(0, 0, 0, 0.15)';
    },
    enable: function () {
      this._enabled = true;
      if (this._div) {
        this._div.style.cursor = 'pointer';
      }
      this._updateUI();
    },
    disable: function () {
      this._enabled = false;
      if (this._div) {
        this._div.style.cursor = '';
      }
      this._updateUI();
    },
    _render: function () {
      this._outContainer.appendChild(this._div);
    },
    _bindDom: function () {
      var e = this;
      this._div.addEventListener(
        'mousedown',
        function (hI) {
          if (!e._enabled) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          var i = e._target.getTilt();
          var T;
          if (i === e._map.getCurrentMaxTilt()) {
            T = 'out';
          } else {
            if (i === 0) {
              T = 'in';
            } else {
              T = e._preTrend ? e._preTrend : 'in';
            }
          }
          e._curTrend = T;
          e._clickTimer = setTimeout(function () {
            e._map.fire(new a6('ontiltmsdown'));
            e._tiltAni = new o({
              duration: 9999999,
              render: function (hJ) {
                i = e._target.getTilt();
                if (T === 'in' && i < e._map.getCurrentMaxTilt()) {
                  e._target.setTilt(i + 1, {noAnimation: true});
                } else {
                  if (T === 'out' && i > 0) {
                    e._target.setTilt(i - 1, {noAnimation: true});
                  }
                }
              },
              finish: function () {
                e._tiltAni = null;
              },
            });
            e._clickTimer = null;
          }, 200);
          hI.stopPropagation();
        },
        false,
      );
      this._div.addEventListener(
        'mouseup',
        function (i) {
          if (!e._enabled) {
            return;
          }
          if (e._tiltAni) {
            e._tiltAni.stop();
          }
          e._preTrend = e._curTrend;
        },
        false,
      );
      this._div.addEventListener(
        'click',
        function (hI) {
          if (!e._enabled) {
            return;
          }
          if (!e._clickTimer) {
            return;
          }
          if (e._target.getLock()) {
            return;
          }
          clearTimeout(e._clickTimer);
          e._map.fire(new a6('ontiltclick'));
          var i = e._target.getTilt();
          e._target.setLock(true);
          hI.stopPropagation();
          var T = e._map.getCurrentMaxTilt();
          if (e._curTrend === 'in') {
            e._target.setTilt(T, e._setTiltOptions);
          } else {
            if (e._curTrend === 'out') {
              e._target.setTilt(0, e._setTiltOptions);
            } else {
              if (i < T) {
                e._target.setTilt(T, e._setTiltOptions);
              } else {
                e._target.setTilt(0, e._setTiltOptions);
              }
            }
          }
        },
        false,
      );
      this._div.addEventListener(
        'mouseover',
        function (i) {
          if (!e._enabled) {
            return;
          }
          e._mouseOver = true;
          e._updateUI();
        },
        false,
      );
      this._div.addEventListener(
        'mouseout',
        function (i) {
          if (!e._enabled) {
            return;
          }
          e._mouseOver = false;
          e._updateUI();
        },
        false,
      );
      eC(this._div, ['mousedown', 'click', 'dblclick']);
    },
    _bind: function () {
      var e = this;
      var i = this._map;
      this._bindTarget(this._target);
      if (this._map._renderType === 'webgl') {
        this._map.addEventListener('maptypechange', function (T) {
          if (this.mapType === 'B_EARTH_MAP') {
            e._target = e._map._earth;
          } else {
            e._target = e._map;
          }
          e._bindTarget(e._target);
          e._checkEnable();
        });
      }
    },
    _bindTarget: function (i) {
      if (i === this._map && this._mapBinded) {
        return;
      }
      if (i === this._map._earth && this._earthBinded) {
        return;
      }
      var e = this;
      i.on('load', function () {
        e._checkEnable();
      });
      i.on('zoom_changed', function () {
        e._checkEnable();
      });
      i.on('tilt_changed', function () {
        e._updateUI();
      });
      if (i === this._map) {
        this._mapBinded = true;
      } else {
        this._earthBinded = true;
      }
    },
    _updateUI: function () {
      var T = this._target.getTilt();
      var i = 0;
      var hI = 0;
      var e = 0;
      if (T > 0) {
        i = 78;
      }
      if (this._mouseOver) {
        e = 52;
      }
      if (this._enabled === false) {
        hI = 26;
        e = 0;
        i = 0;
      }
      var hJ = '-' + (110 + i + hI + e) + 'px 1px';
      this._div && (this._div.style.backgroundPosition = hJ);
      if (this._enabled) {
        if (T > 0) {
          this._div && (this._div.title = '恢复');
        } else {
          this._div && (this._div.title = '倾斜');
        }
      } else {
        this._div && (this._div.title = '请放大地图后操作');
      }
    },
    hide: function () {
      this._div.style.display = 'none';
    },
    show: function () {
      this._div.style.display = 'block';
    },
  });
  function ca(i) {
    d5.call(this);
    this._opts = {container: null, cursor: 'default'};
    this._opts = C.extend(this._opts, i);
    this._type = 'contextmenu';
    this._map = null;
    this._container;
    this._left = 0;
    this._top = 0;
    this._items = [];
    this._rItems = [];
    this._dividers = [];
    this._enable = true;
    this.curPixel = null;
    this.curPoint = null;
    this._isOpen = false;
    var e = this;
    d2.load('menu', function () {
      e._draw();
    });
  }
  ca.inherits(d5, 'ContextMenu');
  C.extend(ca.prototype, {
    initialize: function (e) {
      this._map = e;
    },
    remove: function () {
      this._map = null;
    },
    addItem: function (hJ, e) {
      if (!hJ || hJ._type != 'menuitem' || hJ._text == '' || hJ._width <= 0) {
        return;
      }
      for (var hI = 0, T = this._items.length; hI < T; hI++) {
        if (this._items[hI] === hJ) {
          return;
        }
      }
      if (e === undefined || e > this._items.length - 1) {
        e = -1;
      }
      hJ._insertIndex = e;
      if (e === -1) {
        this._items.push(hJ);
        this._rItems.push(hJ);
      } else {
        this._items.splice(e, 0, hJ);
        this._rItems.splice(e, 0, hJ);
      }
    },
    removeItem: function (hI) {
      if (!hI || hI._type != 'menuitem') {
        return;
      }
      for (var T = 0, e = this._items.length; T < e; T++) {
        if (this._items[T] === hI) {
          this._items[T].remove();
          this._items.splice(T, 1);
          delete hI._insertIndex;
          e--;
        }
      }
      for (var T = 0, e = this._rItems.length; T < e; T++) {
        if (this._rItems[T] === hI) {
          this._rItems[T].remove();
          this._rItems.splice(T, 1);
          delete hI._insertIndex;
          e--;
        }
      }
    },
    addSeparator: function (e) {
      if (e === undefined || e > this._items.length - 1) {
        e = -1;
      }
      var i = {_type: 'divider', _dIndex: this._dividers.length, _insertIndex: e};
      this._dividers.push({dom: null});
      if (e === -1) {
        this._items.push(i);
      } else {
        this._items.splice(e, 0, i);
      }
    },
    removeSeparator: function (T) {
      if (!this._dividers[T]) {
        return;
      }
      for (var hI = 0, e = this._items.length; hI < e; hI++) {
        if (this._items[hI] && this._items[hI]._type == 'divider' && this._items[hI]._dIndex == T) {
          this._items.splice(hI, 1);
          e--;
        }
        if (this._items[hI] && this._items[hI]._type == 'divider' && this._items[hI]._dIndex > T) {
          this._items[hI]._dIndex--;
        }
      }
      this._dividers.splice(T, 1);
    },
    getDom: function () {
      return this._container;
    },
    show: function () {
      if (this._isOpen == true) {
        return;
      }
      this._isOpen = true;
    },
    hide: function () {
      if (this._isOpen == false) {
        return;
      }
      this._isOpen = false;
    },
    setCursor: function (e) {
      if (!e) {
        return;
      }
      this._opts.cursor = e;
    },
    getItem: function (e) {
      return this._rItems[e];
    },
    enable: function () {
      this._enable = true;
    },
    disable: function () {
      this._enable = false;
    },
  });
  function fq(T, hI, i) {
    if (!T || !hI || typeof hI != 'function') {
      return;
    }
    d5.call(this);
    this._opts = {width: 100, id: ''};
    i = i || {};
    this._opts.width = i.width * 1 ? i.width : 100;
    this._opts.id = i.id ? i.id : '';
    this._text = T + '';
    this._callback = hI;
    this._map = null;
    this._type = 'menuitem';
    this._contextmenu = null;
    this._container = null;
    this._enabled = true;
    var e = this;
    d2.load('menu', function () {
      e._draw();
    });
  }
  fq.inherits(d5, 'MenuItem');
  C.extend(fq.prototype, {
    initialize: function (e, i) {
      this._map = e;
      this._contextmenu = i;
    },
    remove: function () {
      this._contextmenu = null;
      this._map = null;
    },
    setText: function (e) {
      if (!e) {
        return;
      }
      this._text = e + '';
    },
    getDom: function () {
      return this._container;
    },
    enable: function () {
      this._enabled = true;
    },
    disable: function () {
      this._enabled = false;
    },
  });
  function dM(e, i) {
    this.setSouthWest(e);
    this.setNorthEast(i);
  }
  C.extend(dM.prototype, {
    isEmpty: function () {
      return this.sw === null && this.ne === null;
    },
    equals: function (e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return false;
      }
      return this.sw.equals(e.sw) && this.ne.equals(e.ne);
    },
    containsBounds: function (e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return false;
      }
      return (
        e.sw.lng > this.sw.lng &&
        e.ne.lng < this.ne.lng &&
        e.sw.lat > this.sw.lat &&
        e.ne.lat < this.ne.lat
      );
    },
    getCenter: function () {
      if (this.isEmpty()) {
        return null;
      }
      return new hj((this.sw.lng + this.ne.lng) / 2, (this.sw.lat + this.ne.lat) / 2);
    },
    intersects: function (T) {
      if (!T || T.isEmpty() || this.isEmpty()) {
        return null;
      }
      if (
        Math.max(T.sw.lng, T.ne.lng) < Math.min(this.sw.lng, this.ne.lng) ||
        Math.min(T.sw.lng, T.ne.lng) > Math.max(this.sw.lng, this.ne.lng) ||
        Math.max(T.sw.lat, T.ne.lat) < Math.min(this.sw.lat, this.ne.lat) ||
        Math.min(T.sw.lat, T.ne.lat) > Math.max(this.sw.lat, this.ne.lat)
      ) {
        return null;
      }
      var hJ = Math.max(this.sw.lng, T.sw.lng);
      var i = Math.min(this.ne.lng, T.ne.lng);
      var hI = Math.max(this.sw.lat, T.sw.lat);
      var e = Math.min(this.ne.lat, T.ne.lat);
      return new dM(new hj(hJ, hI), new hj(i, e));
    },
    setMinMax: function () {
      this.minX = this.sw ? this.sw.lng : null;
      this.minY = this.sw ? this.sw.lat : null;
      this.maxX = this.ne ? this.ne.lng : null;
      this.maxY = this.ne ? this.ne.lat : null;
    },
    containsPoint: function (e) {
      if (!e) {
        return;
      }
      return (
        e.lng >= this.sw.lng && e.lng <= this.ne.lng && e.lat >= this.sw.lat && e.lat <= this.ne.lat
      );
    },
    extend: function (e) {
      if (!e) {
        return;
      }
      var i = e.lng;
      var T = e.lat;
      if (!this.sw) {
        this.sw = e.clone();
      }
      if (!this.ne) {
        this.ne = e.clone();
      }
      if (this.sw.lng > i) {
        this.sw.lng = i;
      }
      if (this.ne.lng < i) {
        this.ne.lng = i;
      }
      if (this.sw.lat > T) {
        this.sw.lat = T;
      }
      if (this.ne.lat < T) {
        this.ne.lat = T;
      }
    },
    getMin: function () {
      return this.sw;
    },
    getMax: function () {
      return this.ne;
    },
    getSouthWest: function () {
      return this.sw;
    },
    getNorthEast: function () {
      return this.ne;
    },
    setSouthWest: function (e) {
      this.sw = e ? e.clone() : null;
    },
    setNorthEast: function (e) {
      this.ne = e ? e.clone() : null;
    },
    clone: function () {
      return new dM(this.sw, this.ne);
    },
    toSpan: function () {
      if (this.isEmpty()) {
        return new d1(0, 0);
      }
      return new d1(Math.abs(this.ne.lng - this.sw.lng), Math.abs(this.ne.lat - this.sw.lat));
    },
    div: function (e) {
      if (!e || e.isEmpty() || this.isEmpty()) {
        return 0;
      }
      return (
        ((this.ne.lng - this.sw.lng) * (this.ne.lat - this.sw.lat)) /
        ((e.ne.lng - e.sw.lng) * (e.ne.lat - e.sw.lat))
      );
    },
    makeNormalizedPoint: function (e) {
      this.normalizedTopLeft = this.pointTopLeft.clone();
      this.normalizedTopRight = this.pointTopRight.clone();
      this.normalizedBottomRight = this.pointBottomRight.clone();
      this.normalizedBottomLeft = this.pointBottomLeft.clone();
      while (e < 0) {
        e += 360;
      }
      e = e % 360;
      if ((e >= 0 && e < 90) || (e >= 270 && e < 360)) {
        if (this.normalizedTopRight.lng < this.normalizedTopLeft.lng) {
          this.normalizedTopRight.lng += c2.WORLD_SIZE_MC;
        }
        if (this.normalizedBottomRight.lng < this.normalizedBottomLeft.lng) {
          this.normalizedBottomRight.lng += c2.WORLD_SIZE_MC;
        }
      } else {
        if (this.normalizedTopLeft.lng < this.normalizedTopRight.lng) {
          this.normalizedTopLeft.lng += c2.WORLD_SIZE_MC;
        }
        if (this.normalizedBottomLeft.lng < this.normalizedBottomRight.lng) {
          this.normalizedBottomLeft.lng += c2.WORLD_SIZE_MC;
        }
      }
    },
    toString: function () {
      return 'Bounds';
    },
  });
  function hj(e, i) {
    if (isNaN(e)) {
      e = gS(e);
      e = isNaN(e) ? 0 : e;
    }
    if (typeof e === 'string') {
      e = parseFloat(e);
    }
    if (isNaN(i)) {
      i = gS(i);
      i = isNaN(i) ? 0 : i;
    }
    if (typeof i === 'string') {
      i = parseFloat(i);
    }
    this.lng = e;
    this.lat = i;
  }
  hj.prototype.equals = function (i) {
    if (!i) {
      return false;
    }
    var hI = Math.abs(this.lat - i.lat);
    var T = Math.abs(this.lng - i.lng);
    var e = 1e-8;
    if (hI < e && T < e) {
      return true;
    }
    return false;
  };
  hj.prototype.clone = function () {
    return new hj(this.lng, this.lat);
  };
  hj.prototype.add = function (e) {
    return new hj(this.lng + e.lng, this.lat + e.lat);
  };
  hj.prototype.sub = function (e) {
    return new hj(this.lng - e.lng, this.lat - e.lat);
  };
  hj.prototype.mult = function (e) {
    return new hj(this.lng * e, this.lat * e);
  };
  hj.prototype.div = function (e) {
    return new hj(this.lng / e, this.lat / e);
  };
  hj.prototype.mag = function () {
    return Math.sqrt(this.lng * this.lng + this.lat * this.lat);
  };
  hj.prototype.toString = function () {
    return 'Point';
  };
  function ef() {}
  C.extend(ef, {
    EARTHRADIUS: 6370996.81,
    MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    LLBAND: [86, 60, 45, 30, 15, 0],
    MC2LL: [
      [
        1.410526172116255e-8,
        0.00000898305509648872,
        -1.9939833816331,
        200.9824383106796,
        -187.2403703815547,
        91.6087516669843,
        -23.38765649603339,
        2.57121317296198,
        -0.03801003308653,
        17337981.2,
      ],
      [
        -7.435856389565537e-9,
        0.000008983055097726239,
        -0.78625201886289,
        96.32687599759846,
        -1.85204757529826,
        -59.36935905485877,
        47.40033549296737,
        -16.50741931063887,
        2.28786674699375,
        10260144.86,
      ],
      [
        -3.030883460898826e-8,
        0.00000898305509983578,
        0.30071316287616,
        59.74293618442277,
        7.357984074871,
        -25.38371002664745,
        13.45380521110908,
        -3.29883767235584,
        0.32710905363475,
        6856817.37,
      ],
      [
        -1.981981304930552e-8,
        0.000008983055099779535,
        0.03278182852591,
        40.31678527705744,
        0.65659298677277,
        -4.44255534477492,
        0.85341911805263,
        0.12923347998204,
        -0.04625736007561,
        4482777.06,
      ],
      [
        3.09191371068437e-9,
        0.000008983055096812155,
        0.00006995724062,
        23.10934304144901,
        -0.00023663490511,
        -0.6321817810242,
        -0.00663494467273,
        0.03430082397953,
        -0.00466043876332,
        2555164.4,
      ],
      [
        2.890871144776878e-9,
        0.000008983055095805407,
        -3.068298e-8,
        7.47137025468032,
        -0.00000353937994,
        -0.02145144861037,
        -0.00001234426596,
        0.00010322952773,
        -0.00000323890364,
        826088.5,
      ],
    ],
    LL2MC: [
      [
        -0.0015702102444,
        111320.7020616939,
        1704480524535203,
        -10338987376042340,
        26112667856603880,
        -35149669176653700,
        26595700718403920,
        -10725012454188240,
        1800819912950474,
        82.5,
      ],
      [
        0.0008277824516172526,
        111320.7020463578,
        647795574.6671607,
        -4082003173.641316,
        10774905663.51142,
        -15171875531.51559,
        12053065338.62167,
        -5124939663.577472,
        913311935.9512032,
        67.5,
      ],
      [
        0.00337398766765,
        111320.7020202162,
        4481351.045890365,
        -23393751.19931662,
        79682215.47186455,
        -115964993.2797253,
        97236711.15602145,
        -43661946.33752821,
        8477230.501135234,
        52.5,
      ],
      [
        0.00220636496208,
        111320.7020209128,
        51751.86112841131,
        3796837.749470245,
        992013.7397791013,
        -1221952.21711287,
        1340652.697009075,
        -620943.6990984312,
        144416.9293806241,
        37.5,
      ],
      [
        -0.0003441963504368392,
        111320.7020576856,
        278.2353980772752,
        2485758.690035394,
        6070.750963243378,
        54821.18345352118,
        9540.606633304236,
        -2710.55326746645,
        1405.483844121726,
        22.5,
      ],
      [
        -0.0003218135878613132,
        111320.7020701615,
        0.00369383431289,
        823725.6402795718,
        0.46104986909093,
        2351.343141331292,
        1.58060784298199,
        8.77738589078284,
        0.37238884252424,
        7.45,
      ],
    ],
    getDistanceByMC: function (hK, hI) {
      if (!hK || !hI) {
        return 0;
      }
      var i;
      var hJ;
      var e;
      var T;
      hK = this.convertMC2LL(hK);
      if (!hK) {
        return 0;
      }
      i = dE(hK.lng);
      hJ = dE(hK.lat);
      hI = this.convertMC2LL(hI);
      if (!hI) {
        return 0;
      }
      e = dE(hI.lng);
      T = dE(hI.lat);
      return this.getDistance(i, e, hJ, T);
    },
    getDistanceByLL: function (hK, hI) {
      if (!hK || !hI) {
        return 0;
      }
      hK.lng = this.getLoop(hK.lng, -180, 180);
      hK.lat = this.getRange(hK.lat, -80, 84);
      hI.lng = this.getLoop(hI.lng, -180, 180);
      hI.lat = this.getRange(hI.lat, -80, 84);
      var i;
      var e;
      var hJ;
      var T;
      i = dE(hK.lng);
      hJ = dE(hK.lat);
      e = dE(hI.lng);
      T = dE(hI.lat);
      return this.getDistance(i, e, hJ, T);
    },
    proximityCovertMC2LL: function (e) {
      if (e === null) {
        return e;
      }
      if (e.lng < 180 && e.lng > -180 && e.lat < 90 && e.lat > -90) {
        return e;
      }
      return this.convertMC2LL(e);
    },
    convertMC2LL: function (e) {
      if (e === null) {
        return e;
      }
      if (!e) {
        return new hj(0, 0);
      }
      var T;
      var hJ;
      T = new hj(Math.abs(e.lng), Math.abs(e.lat));
      for (var hI = 0; hI < this.MCBAND.length; hI++) {
        if (T.lat >= this.MCBAND[hI]) {
          hJ = this.MC2LL[hI];
          break;
        }
      }
      var hK = this.convertor(e, hJ);
      return new cX(hK.lat, hK.lng);
    },
    convertLL2MC: function (hL) {
      if (!hL) {
        return new hj(0, 0);
      }
      var hN = hL.lat;
      var hI = hL.lng;
      hI = this.getLoop(hL.lng, -180, 180);
      hN = fx(hN, -85, 85);
      var hK;
      for (var hJ = 0; hJ < this.LLBAND.length; hJ++) {
        if (hN >= this.LLBAND[hJ]) {
          hK = this.LL2MC[hJ];
          break;
        }
      }
      if (!hK) {
        for (hJ = 0; hJ < this.LLBAND.length; hJ++) {
          if (hN <= -this.LLBAND[hJ]) {
            hK = this.LL2MC[hJ];
            break;
          }
        }
      }
      var T = new hj(hI, hN);
      var hM = this.convertor(T, hK);
      var e = new hj(hM.lng, hM.lat);
      e.latLng = new cX(hL.lat, hL.lng);
      return e;
    },
    convertor: function (T, hI) {
      if (!T || !hI) {
        return;
      }
      var e = hI[0] + hI[1] * Math.abs(T.lng);
      var i = Math.abs(T.lat) / hI[9];
      var hJ =
        hI[2] +
        hI[3] * i +
        hI[4] * i * i +
        hI[5] * i * i * i +
        hI[6] * i * i * i * i +
        hI[7] * i * i * i * i * i +
        hI[8] * i * i * i * i * i * i;
      e *= T.lng < 0 ? -1 : 1;
      hJ *= T.lat < 0 ? -1 : 1;
      return new hj(e, hJ);
    },
    getDistance: function (i, e, hI, T) {
      return (
        this.EARTHRADIUS *
        Math.acos(Math.sin(hI) * Math.sin(T) + Math.cos(hI) * Math.cos(T) * Math.cos(e - i))
      );
    },
    getRange: function (T, i, e) {
      if (i != null) {
        T = Math.max(T, i);
      }
      if (e != null) {
        T = Math.min(T, e);
      }
      return T;
    },
    getLoop: function (T, i, e) {
      while (T > e) {
        T -= e - i;
      }
      while (T < i) {
        T += e - i;
      }
      return T;
    },
  });
  C.extend(ef.prototype, {
    lnglatToMercator: function (e) {
      return ef.convertLL2MC(e);
    },
    lngLatToPoint: function (e) {
      var i = ef.convertLL2MC(e);
      return new eb(i.lng, i.lat);
    },
    mercatorToLnglat: function (e) {
      return ef.convertMC2LL(e);
    },
    pointToLngLat: function (i) {
      var e = new hj(i.x, i.y);
      var T = ef.convertMC2LL(e);
      return new cX(T.lat, T.lng);
    },
    pointToPixel: function (i, hK, hJ, hI) {
      if (!i) {
        return;
      }
      i = this.lnglatToMercator(i);
      var T = this.getZoomUnits(hK);
      var e = Math.round((i.lng - hJ.lng) / T + hI.width / 2);
      var hL = Math.round((hJ.lat - i.lat) / T + hI.height / 2);
      return new eb(e, hL);
    },
    mercatorToPixel: function (hK, hJ, hI, T) {
      if (!hK) {
        return;
      }
      var i = this.getZoomUnits(hJ);
      var e = Math.round((hK.lng - hI.lng) / i + T.width / 2);
      var hL = Math.round((hI.lat - hK.lat) / i + T.height / 2);
      return new eb(e, hL);
    },
    pixelToPoint: function (hI, hL, hK, hJ) {
      if (!hI) {
        return;
      }
      var i = this.getZoomUnits(hL);
      var T = hK.lng + i * (hI.x - hJ.width / 2);
      var hM = hK.lat - i * (hI.y - hJ.height / 2);
      var e = new hj(T, hM);
      return this.mercatorToLnglat(e);
    },
    getZoomUnits: function (e) {
      return Math.pow(2, 18 - e);
    },
    setCoordType: function (e) {
      this.coordsType = e;
    },
  });
  function cX(i, e) {
    if (i < -90) {
      i = -90;
    } else {
      if (i > 90) {
        i = 90;
      }
    }
    while (e < -180) {
      e += 360;
    }
    while (e > 180) {
      e -= 360;
    }
    e = e || 0;
    i = i || 0;
    hj.call(this, e, i);
  }
  cX.inherits(hj, 'LatLng');
  C.extend(cX.prototype, {
    equals: function (e) {
      return this.lat === e.lat && this.lng === e.lng;
    },
    clone: function () {
      return new cX(this.lat, this.lng);
    },
    add: function (e) {
      return new cX(this.lng + e.lng, this.lat + e.lat);
    },
    sub: function (e) {
      return new cX(this.lat - e.lat, this.lng - e.lng);
    },
    mult: function (e) {
      return new cX(this.lng * e, this.lat * e);
    },
    div: function (e) {
      return new cX(this.lng / e, this.lat / e);
    },
    mag: function () {
      return Math.sqrt(this.lng * this.lng + this.lat * this.lat);
    },
    getLngSpan: function (e) {
      var i = this.lng;
      var T = Math.abs(e - i);
      if (T > 180) {
        T = 360 - T;
      }
      return T;
    },
    toString: function () {
      return 'LatLng';
    },
  });
  function ey(e, i) {
    if (e && !i) {
      i = e;
    }
    this._sw = this._ne = null;
    this._swLng = this._swLat = null;
    this._neLng = this._neLat = null;
    if (e) {
      this._sw = new cX(e.lat, e.lng);
      this._ne = new cX(i.lat, i.lng);
      this._swLng = e.lng;
      this._swLat = e.lat;
      this._neLng = i.lng;
      this._neLat = i.lat;
    }
  }
  C.extend(ey.prototype, {
    isEmpty: function () {
      return !this._sw || !this._ne;
    },
    equals: function (e) {
      if (this.isEmpty()) {
        return false;
      }
      return (
        this.getSouthWest().equals(e.getSouthWest()) && this.getNorthEast().equals(e.getNorthEast())
      );
    },
    getSouthWest: function () {
      return this._sw;
    },
    getNorthEast: function () {
      return this._ne;
    },
    containsBounds: function (e) {
      if (this.isEmpty() || e.isEmpty()) {
        return false;
      }
      return (
        e._swLng > this._swLng &&
        e._neLng < this._neLng &&
        e._swLat > this._swLat &&
        e._neLat < this._neLat
      );
    },
    getCenter: function () {
      if (this.isEmpty()) {
        return null;
      }
      return new cX((this._swLat + this._neLat) / 2, (this._swLng + this._neLng) / 2);
    },
    intersects: function (T) {
      if (
        Math.max(T._swLng, T._neLng) < Math.min(this._swLng, this._neLng) ||
        Math.min(T._swLng, T._neLng) > Math.max(this._swLng, this._neLng) ||
        Math.max(T._swLat, T._neLat) < Math.min(this._swLat, this._neLat) ||
        Math.min(T._swLat, T._neLat) > Math.max(this._swLat, this._neLat)
      ) {
        return false;
      }
      var hJ = Math.max(this._swLng, T._swLng);
      var i = Math.min(this._neLng, T._neLng);
      var hI = Math.max(this._swLat, T._swLat);
      var e = Math.min(this._neLat, T._neLat);
      this._sw = new cX(hI, hJ);
      this._ne = new cX(e, i);
      this._swLng = hJ;
      this._swLat = hI;
      this._neLng = i;
      this._neLat = e;
      return true;
    },
    containsPoint: function (e) {
      if (this.isEmpty()) {
        return false;
      }
      return (
        e.lng >= this._swLng && e.lng <= this._neLng && e.lat >= this._swLat && e.lat <= this._neLat
      );
    },
    extend: function (e) {
      var i = e.lng;
      var T = e.lat;
      if (!this._sw) {
        this._sw = new cX(0, 0);
      }
      if (!this._ne) {
        this._ne = new cX(0, 0);
      }
      if (!this._swLng || this._swLng > i) {
        this._sw.lng = this._swLng = i;
      }
      if (!this._neLng || this._neLng < i) {
        this._ne.lng = this._neLng = i;
      }
      if (!this._swLat || this._swLat > T) {
        this._sw.lat = this._swLat = T;
      }
      if (!this._neLat || this._neLat < T) {
        this._ne.lat = this._neLat = T;
      }
    },
    toSpan: function () {
      if (this.isEmpty()) {
        return new cX(0, 0);
      }
      return new cX(Math.abs(this._neLat - this._swLat), Math.abs(this._neLng - this._swLng));
    },
    union: function (i) {
      if (i.isEmpty()) {
        return false;
      }
      var e = i.getSouthWest();
      var T = i.getNorthEast();
      if (this._swLat > e.lat) {
        this._swLat = e.lat;
      }
      if (this._swLng > e.lng) {
        this._swLng = e.lng;
      }
      if (this._neLat < T.lat) {
        this._neLat = T.lat;
      }
      if (this._neLng < T.lng) {
        this._neLng = T.lng;
      }
      this._sw = new cX(this._swLat, this._swLng);
      this._ne = new cX(this._neLat, this._neLng);
      return true;
    },
    toString: function () {
      return this._swLat + ', ' + this._swLng + ', ' + this._neLat + ', ' + this._neLng;
    },
  });
  var dO = {
    idle: 0,
    freeze: 1,
    zooming: 2,
    dragging: 3,
    moving: 4,
    readyToDrag: 5,
    readyToPinch: 6,
    pinching: 7,
    stdMapCtrlDrag: 8,
    KEY_LEFT: 37,
    KEY_UP: 38,
    KEY_RIGHT: 39,
    KEY_DOWN: 40,
    arrowOpCodes: {37: 1, 38: 2, 39: 4, 40: 8},
  };
  var d9 = {
    _map: null,
    _html: "<div class='BMap_opMask' unselectable='on'></div>",
    _maskElement: null,
    _cursor: 'default',
    inUse: false,
    show: function (e) {
      if (!this._map) {
        this._map = e;
      }
      this.inUse = true;
      if (!this._maskElement) {
        this._createMask(e);
      }
      this._maskElement.style.display = 'block';
    },
    _createMask: function (i) {
      if (!this._map) {
        this._map = i;
      }
      if (!this._map) {
        return;
      }
      var e = (this._maskElement = dC(this._map.container, this._html));
      C.on(e, 'mouseup', function (T) {
        if (T.button == 2) {
          c5(T);
        }
      });
      C.on(e, 'contextmenu', c5);
      e.style.display = 'none';
    },
    getDrawPoint: function (hI, hL, hJ) {
      hI = window.event || hI;
      var i = hI.offsetX || hI.layerX || 0;
      var hK = parseInt(hI.offsetY) || parseInt(hI.layerY) || 0;
      var T = hI.target || hI.srcElement;
      if (T != d9.getDom(this._map) && hL == true) {
        while (T && T != this._map.container) {
          if (
            !(
              T.clientWidth == 0 &&
              T.clientHeight == 0 &&
              T.offsetParent &&
              T.offsetParent.nodeName.toLowerCase() == 'td'
            )
          ) {
            i += T.offsetLeft;
            hK += T.offsetTop;
          }
          T = T.offsetParent;
        }
      }
      if (T != d9.getDom(this._map) && T != this._map.container) {
        return;
      }
      if (typeof i === 'undefined' || typeof hK === 'undefined') {
        return;
      }
      if (isNaN(i) || isNaN(hK)) {
        return;
      }
      if (hJ) {
        i = i + hJ.x;
        hK = hK + hJ.y;
      }
      return this._map.pixelToPointIn(new eb(i, hK));
    },
    hide: function () {
      if (!this._map) {
        return;
      }
      this.inUse = false;
      if (this._maskElement) {
        this._maskElement.style.display = 'none';
      }
    },
    getDom: function (e) {
      if (!this._maskElement) {
        this._createMask(e);
      }
      return this._maskElement;
    },
    setCursor: function (e) {
      this._cursor = e || 'default';
      if (this._maskElement) {
        this._maskElement.style.cursor = this._cursor;
      }
    },
  };
  function bf() {
    this._type = 'overlay';
  }
  bf.inherits(C.BaseClass, 'Overlay');
  bf.getZIndex = function (i, e) {
    i = i * 1;
    if (!i) {
      return 0;
    }
    if (e) {
      i = ef.convertMC2LL(new hj(0, i)).lat;
    }
    return (i * -100000) << 1;
  };
  C.extend(bf.prototype, {
    _i: function (e) {
      this._map = e;
      if (!this.domElement && bQ(this.initialize)) {
        this.domElement = this.initialize(e);
        if (this.domElement) {
          this.domElement.style.WebkitUserSelect = 'none';
        }
      }
      this.draw();
    },
    initialize: function (e) {
      throw 'initialize方法未实现';
    },
    draw: function () {
      throw 'draw方法未实现';
    },
    remove: function () {
      if (this.domElement && this.domElement.parentNode) {
        this.domElement.parentNode.removeChild(this.domElement);
      }
      this.domElement = null;
      this.dispatchEvent(new a6('onremove'));
    },
    hide: function () {
      this._visible = false;
      C.hide(this.domElement);
    },
    show: function () {
      this._visible = true;
      C.show(this.domElement);
    },
    getMap: function () {
      return this._map;
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this);
    },
  });
  function cP() {
    C.BaseClass.call(this);
    bf.call(this);
    this._visible = true;
    this._visibleInternal = true;
    this.infoWindow = null;
    this._dblclickTime = 0;
  }
  cP.inherits(bf, 'OverlayInternal');
  C.extend(cP.prototype, {
    initialize: function (e) {
      this.map = e;
      C.BaseClass.call(this, this.hashCode);
      return null;
    },
    draw: function () {},
    remove: function () {
      this.decontrol();
      bf.prototype.remove.call(this);
    },
    hide: function () {
      this._visible = false;
    },
    show: function () {
      this._visible = true;
    },
    getDom: function () {
      return this.domElement;
    },
    getContainer: function () {
      return this.domElement;
    },
    setClassName: function () {},
    setConfig: function (i) {
      if (!i) {
        return;
      }
      for (var e in i) {
        if (i.hasOwnProperty(e)) {
          this._config[e] = i[e];
        }
      }
    },
    getPoint: function (T, hI) {
      if (!T) {
        return this.point;
      } else {
        var e = hI ? hI.width : 0;
        var hJ = hI ? hI.height : 0;
        if (this.map) {
          var i = this.map.pointToPixelIn(this.point);
          if (this._config && this._config.offset) {
            i.x = i.x + this._config.offset.width + e;
            i.y = i.y + this._config.offset.height + hJ;
          } else {
            i.x = i.x + e;
            i.y = i.y + hJ;
          }
          return this.map.pixelToPointIn(i);
        }
      }
    },
    setZIndex: function (e) {
      this.zIndex = e;
    },
    isVisible: function () {
      if (!this.domElement) {
        return false;
      }
      return !!this._visible;
    },
    enableMassClear: function () {
      this._config.enableMassClear = true;
    },
    disableMassClear: function () {
      this._config.enableMassClear = false;
    },
    showInternal: function () {
      this._visibleInternal = true;
    },
    hideInternal: function (e) {
      this._visibleInternal = false;
      this._hideInternalReason = e;
    },
  });
  function eP(e) {
    this.map = e;
    this._overlays = {};
    this._overlayArray = [];
    this._customOverlays = [];
    e._overlays = this._overlays;
    e._overlayArray = this._overlayArray;
    e._customOverlays = this._customOverlays;
    this._zoomingOrMoving = false;
    this._init();
  }
  eP.prototype._init = function () {
    if (this.map._renderType !== 'webgl') {
      this._createOverlayContainers();
    } else {
      this._createWebGLOverlayContainers();
    }
    this._bind();
  };
  eP.prototype._createOverlayContainers = function () {
    var e = this.map;
    e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
    e.temp.overlayDivEx = e.overlayDivEx = this._createOverlayDiv(e.platform, 50);
    e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
    e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
    e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
    e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
    e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
    if (e.isCanvasMap()) {
      e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDivEx, 50);
    } else {
      e._panes.mapPane = this._createOverlayDiv(e.temp.overlayDiv, 200);
    }
  };
  eP.prototype._createWebGLOverlayContainers = function () {
    var e = this.map;
    e.temp.overlayDiv = e.overlayDiv = this._createOverlayDiv(e.platform, 200);
    e._panes.floatPane = this._createOverlayDiv(e.temp.overlayDiv, 800);
    e._panes.markerMouseTarget = this._createOverlayDiv(e.temp.overlayDiv, 700);
    e._panes.floatShadow = this._createOverlayDiv(e.temp.overlayDiv, 600);
    e._panes.labelPane = this._createOverlayDiv(e.temp.overlayDiv, 500);
    e._panes.markerPane = this._createOverlayDiv(e.temp.overlayDiv, 400);
  };
  eP.prototype._createOverlayDiv = function (e, hI) {
    var T = S('div');
    var i = T.style;
    i.position = 'absolute';
    i.top = i.left = i.width = i.height = '0';
    i.zIndex = hI;
    e.appendChild(T);
    return T;
  };
  eP.prototype._bind = function () {
    var hJ = this.map;
    var hI = this;
    function i(hL) {
      hI.draw(hL);
    }
    if (hJ._renderType !== 'webgl') {
      hJ.addEventListener('load', i);
      hJ.addEventListener('moveend', i);
      hJ.addEventListener('resize', i);
      hJ.addEventListener('zoomend', i);
      hJ.addEventListener('zooming_inner', i);
    } else {
      hJ.on('update', i);
    }
    hJ.addEventListener('zoomend', function (hL) {
      if (this.mapType === 'B_EARTH_MAP') {
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = 'none';
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = 'none';
          }
        } else {
          if (this.temp.overlayDiv.style.display === 'none') {
            this.temp.overlayDiv.style.display = '';
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = '';
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw();
            }
          }
        }
      }
    });
    hJ.addEventListener('oncenterandzoom', function (hL) {
      hI.draw(hL);
      if (this.mapType === 'B_EARTH_MAP') {
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = 'none';
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = 'none';
          }
        } else {
          if (this.temp.overlayDiv.style.display === 'none') {
            this.temp.overlayDiv.style.display = '';
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = '';
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw();
            }
          }
        }
      }
    });
    hJ.addEventListener('maptypechange', function (hL) {
      if (this.mapType === 'B_EARTH_MAP') {
        if (this._panes.mapPane) {
          this._panes.mapPane.style.display = 'none';
        }
        if (this._earth.getZoom() < this._earth.zoomForNight + 1) {
          this.temp.overlayDiv.style.display = 'none';
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = 'none';
          }
        } else {
          if (this.temp.overlayDiv.style.display === 'none') {
            this.temp.overlayDiv.style.display = '';
            if (this.temp.overlayDivEx) {
              this.temp.overlayDivEx.style.display = '';
            }
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
              this.temp.infoWin.redraw();
            }
          }
        }
        if (this._panes.markerPane) {
          this._panes.markerPane.style.display = 'none';
        }
      } else {
        if (this._panes.mapPane) {
          this._panes.mapPane.style.display = '';
        }
        if (this._panes.markerPane) {
          this._panes.markerPane.style.display = '';
        }
        if (this.temp.overlayDiv.style.display === 'none') {
          this.temp.overlayDiv.style.display = '';
          if (this.temp.overlayDivEx) {
            this.temp.overlayDivEx.style.display = '';
          }
          if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
            this.temp.infoWin.redraw();
          }
        }
      }
      hI.draw(hL);
    });
    hJ.on('earthstatuschange', function hK(hL) {
      hI.draw(hL);
    });
    hJ.addEventListener('addoverlay', function (hP) {
      var hM = hP.target;
      if (hM instanceof cP) {
        if (!hI._overlays[hM.hashCode]) {
          hI._overlays[hM.hashCode] = hM;
          hI._overlayArray.push(hM);
        }
      } else {
        var hO = false;
        for (var hN = 0, hL = hI._customOverlays.length; hN < hL; hN++) {
          if (hI._customOverlays[hN] === hM) {
            hO = true;
            break;
          }
        }
        if (!hO) {
          hI._customOverlays.push(hM);
        }
      }
    });
    hJ.addEventListener('removeoverlay', function (hO) {
      var hM = hO.target;
      if (hM instanceof cP) {
        delete hI._overlays[hM.hashCode];
        for (var hN = 0; hN < hI._overlayArray.length; hN++) {
          if (hI._overlayArray[hN] === hM) {
            hI._overlayArray.splice(hN, 1);
            break;
          }
        }
      } else {
        for (var hN = 0, hL = hI._customOverlays.length; hN < hL; hN++) {
          if (hI._customOverlays[hN] === hM) {
            hI._customOverlays.splice(hN, 1);
            break;
          }
        }
      }
    });
    hJ.addEventListener('clearoverlays', function (hN) {
      this.closeInfoWindow();
      this.closeSimpleInfoWindow();
      for (var hM in hI._overlays) {
        if (hI._overlays[hM]._config.enableMassClear) {
          this.removeOverlay(hI._overlays[hM]);
        }
      }
      for (var hL = hI._customOverlays.length - 1; hL > 0; hL--) {
        if (hI._customOverlays[hL].enableMassClear !== false) {
          this.removeOverlay(hI._customOverlays[hL]);
          hI._customOverlays.splice(hL, 1);
        }
      }
    });
    hJ.addEventListener('infowindowopen', function (hM) {
      var hL = this.infoWindow;
      if (hL) {
        C.hide(hL.popDom);
        C.hide(hL.shadowDom);
      }
    });
    function T() {
      if (this.getMapType() === 'B_EARTH_MAP' || this._renderType === 'webgl') {
        if (hI._zoomingOrMoving === false) {
          this._panes.markerMouseTarget.style.display = 'none';
          hI._zoomingOrMoving = true;
        }
      }
    }
    function e(hN) {
      if (this.getMapType() === 'B_EARTH_MAP' || this._renderType === 'webgl') {
        if (hI._zoomingOrMoving === true) {
          this._panes.markerMouseTarget.style.display = '';
          hI._zoomingOrMoving = false;
          for (var hM = 0; hM < hI._overlayArray.length; hM++) {
            var hL = hI._overlayArray[hM];
            if (hL instanceof dk === true) {
              hL.draw(hN);
            }
          }
        }
      }
    }
    hJ.addEventListener('movestart', T);
    hJ.addEventListener('moveend', e);
    hJ.addEventListener('zoomstart', T);
    hJ.addEventListener('zoomend', e);
    hJ.addEventListener('animation_start', T);
    hJ.addEventListener('animation_end', e);
    hJ.addEventListener('displayoptions_changed', function (hL) {
      if (this._displayOptions.overlay === false) {
        this.temp.overlayDiv.style.display = 'none';
      } else {
        this.temp.overlayDiv.style.display = '';
      }
    });
  };
  eP.prototype.draw = function (hL) {
    hL = hL || {};
    if (this.map.getMapType() === 'B_EARTH_MAP') {
      for (var hJ = 0; hJ < this._overlayArray.length; hJ++) {
        var T = this._overlayArray[hJ];
        if (T instanceof w === true) {
          continue;
        }
        if (this._zoomingOrMoving) {
          if (T instanceof dk === true) {
            continue;
          }
        }
        T.draw(hL);
      }
    } else {
      for (var hJ = 0, hI = this._overlayArray.length; hJ < hI; hJ++) {
        var T = this._overlayArray[hJ];
        if (this._zoomingOrMoving && T instanceof dk === true) {
          continue;
        }
        T.draw(hL);
      }
    }
    C.each(this._customOverlays, function (e) {
      e.draw(hL);
    });
    if (this.map.temp.infoWin) {
      this.map.temp.infoWin.setPosition(hL.center, hL.zoom);
    }
    if (this.map.getMapType() !== 'B_EARTH_MAP' && this.map._renderType !== 'webgl') {
      if (bj.DrawerSelector) {
        var hK = bj.DrawerSelector.getDrawer(this.map);
        hK.setPalette();
      }
    }
  };
  bj.register(function (e) {
    e._overlayMgr = new eP(e);
  });
  function w(e) {
    cP.call(this);
    this._config = {
      strokeColor: '#000',
      strokeWeight: 2,
      strokeOpacity: 1,
      strokeStyle: 'solid',
      dashArray: null,
      strokeLineCap: 'round',
      strokeLineJoin: 'round',
      enableMassClear: true,
      getParseTolerance: null,
      getParseCacheIndex: null,
      enableParse: true,
      enableEditing: false,
      mouseOverTolerance: 5,
      geodesic: false,
      clip: true,
      texture: null,
      textureSize: null,
      textureZoomWithMap: false,
      textureRepeat: true,
    };
    this.setConfig(e);
    if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
      this._config.strokeOpacity = 1;
    }
    if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
      this._config.fillOpacity = 1;
    }
    if (
      this._config.strokeStyle !== 'solid' &&
      this._config.strokeStyle !== 'dashed' &&
      this._config.strokeStyle !== 'dotted'
    ) {
      this._config.strokeStyle = 'solid';
    }
    this.domElement = null;
    this._bounds = new dM();
    this.points = [];
    this.greatCirclePoints = [];
    this._parseCache = [];
    this._holesCache = [];
    this._parseCacheGL = [];
    this._parseCacheGLRaw = [];
    this._areaCacheGL = [];
    this._strokeStyleInfoForGL = [[]];
    this._fillStyleInfoForGL = '';
    this.vertexMarkers = [];
    this._temp = {};
  }
  w.JOININDEX = {miter: 0, round: 1, bevel: 2};
  w.CAPINDEX = {round: 0, butt: 1, square: 2};
  w.inherits(cP, 'Graph');
  w.getGraphPoints = function (i) {
    var e = [];
    if (!i || i.length === 0) {
      return e;
    }
    if (typeof i === 'string') {
      var T = i.split(';');
      C.each(T, function (hJ) {
        var hI = hJ.split(',');
        e.push(new hj(hI[0], hI[1]));
      });
    }
    if (i.constructor === Array && i.length > 0) {
      e = i;
    }
    return e;
  };
  w.parseTolerance = {0: [0.09, 0.005, 0.0001, 0.00001], 1: [9000, 500, 20, 1]};
  C.extend(w.prototype, {
    initialize: function (e) {
      this.map = e;
      return null;
    },
    draw: function () {},
    setPoints: function (e) {
      this._clearCache();
      this.points = w.getGraphPoints(e).slice(0);
      this._calcBounds();
    },
    setPathIn: function (e) {
      this.setPoints(e);
    },
    _calcBounds: function () {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds = new dM();
      if (!this.hasMultipleParts) {
        C.each(this.points, function (i) {
          e._bounds.extend(i);
        });
      } else {
        C.each(this.points, function (i) {
          C.each(i, function (T) {
            e._bounds.extend(T);
          });
        });
      }
    },
    getPoints: function () {
      return this.points;
    },
    getPathIn: function () {
      return this.points;
    },
    setPointAt: function (i, e) {
      if (!e || !this.points[i]) {
        return;
      }
      this._clearCache();
      this.points[i] = new hj(e.lng, e.lat);
      this._calcBounds();
    },
    setPositionAt: function (i, e) {
      if (!e || !this.points[i]) {
        return;
      }
      var T = ef.convertLL2MC(e);
      this.setPointAt(i, T);
    },
    setOptions: function (i) {
      i = i || {};
      for (var e in i) {
        if (i.hasOwnProperty(e)) {
          this._config[e] = i[e];
        }
      }
    },
    setStrokeColor: function (e) {
      this._config.strokeColor = e;
    },
    getStrokeColor: function () {
      return this._config.strokeColor;
    },
    setStrokeLineCap: function (e) {
      this._config.strokeLineCap = e;
    },
    getStrokeLineCap: function () {
      return this._config.strokeLineCap;
    },
    setStrokeLineJoin: function (e) {
      this._config.strokeLineJoin = e;
    },
    getStrokeLineJoin: function () {
      return this._config.strokeLineJoin;
    },
    setStrokeWeight: function (e) {
      if (e > 0) {
        this._config.strokeWeight = e;
      }
    },
    getStrokeWeight: function () {
      return this._config.strokeWeight;
    },
    setStrokeOpacity: function (e) {
      if (!e || e > 1 || e < 0) {
        return;
      }
      this._config.strokeOpacity = e;
    },
    getStrokeOpacity: function () {
      return this._config.strokeOpacity;
    },
    setFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.fillOpacity = e;
    },
    getFillOpacity: function () {
      return this._config.fillOpacity;
    },
    setStrokeStyle: function (e) {
      if (e !== 'solid' && e !== 'dashed' && e !== 'dotted') {
        return;
      }
      this._config.strokeStyle = e;
    },
    getStrokeStyle: function () {
      return this._config.strokeStyle;
    },
    setFillColor: function (e) {
      this._config.fillColor = e || '';
    },
    getFillColor: function () {
      return this._config.fillColor;
    },
    getBoundsIn: function () {
      this._bounds.setMinMax();
      return this._bounds;
    },
    getBounds: function () {
      var e = this.getBoundsIn();
      var i = new dM(ef.convertMC2LL(e.getSouthWest()), ef.convertMC2LL(e.getNorthEast()));
      i.setMinMax();
      return i;
    },
    remove: function () {
      if (this.map) {
        this.map.removeEventListener('onmousemove', this._graphMouseEvent);
        this.map.removeEventListener('onclick', this._graphClickEvent);
      }
      cP.prototype.remove.call(this);
      this._clearCache();
      var e = new a6('onlineupdate');
      e.action = 'remove';
      e.overlay = this;
      this.fire(e);
    },
    enableEditing: function () {
      if (this.points.length < 2) {
        return;
      }
      this._config.enableEditing = true;
      var e = this;
      d2.load(
        'poly',
        function () {
          e.addVertexs();
        },
        true,
      );
    },
    disableEditing: function () {
      this._config.enableEditing = false;
      var e = this;
      d2.load(
        'poly',
        function () {
          e.clearVertexs();
        },
        true,
      );
    },
    getLength: function () {
      if (typeof this._length === 'number') {
        return this._length;
      }
      if (typeof this._config.totalLength === 'number') {
        this._length = this._config.totalLength;
        return this._length;
      }
      var T = 0;
      if (this.points.length <= 1) {
        this._length = 0;
        return T;
      }
      for (var e = 0; e < this.points.length - 1; e++) {
        T += bK(this.points[e], this.points[e + 1]);
      }
      this._length = T;
      return T;
    },
    getParsedPoints: function () {
      var e = this._simplification(this.points);
      if (this.hasMultipleParts) {
        return e;
      }
      return [e];
    },
    _simplification: function (hM) {
      var e = this.map;
      var hL = this.getParseCacheIndex(e.getZoom());
      var hO;
      if (this._parseCache[hL]) {
        hO = this._parseCache[hL];
      } else {
        var hJ = hM;
        if (this.greatCirclePoints.length > 0) {
          hJ = this.greatCirclePoints;
        }
        var hK = this.getParseTolerance(e.getZoom(), e.config.coordType);
        if (!this.hasMultipleParts) {
          var hN = hw(hJ, hK);
        } else {
          var hN = [];
          for (var T = 0; T < hJ.length; T++) {
            var hI = hw(hJ[T], hK);
            hN.push(hI);
          }
        }
        hO = this._parseCache[hL] = hN;
      }
      return hO;
    },
    _clearCache: function () {
      this._length = null;
      this._parseCache.length = 0;
      this._parseCacheGL.length = 0;
      this._parseCacheGLRaw.length = 0;
      this._areaCacheGL.length = 0;
    },
    canRenderDataBeMerged: function () {
      var e = this._config;
      if (e.texture) {
        return false;
      }
      return true;
    },
  });
  if (C.Browser.ie && document.namespaces && !document.namespaces.olv) {
    document.namespaces.add('olv', 'urn:schemas-microsoft-com:vml');
  }
  function g2(hK, hI, T) {
    if (!hK || !hI) {
      return;
    }
    this.imageUrl = null;
    this.imageDom = null;
    if (typeof hK === 'string') {
      this.imageUrl = hK;
    } else {
      this.imageDom = hK;
      if (!this.imageDom.id) {
        this.imageDom.id = bj.getGUID('icon_dom_');
      }
    }
    this.size = hI;
    var hJ = new d1(Math.floor(hI.width / 2), Math.floor(hI.height / 2));
    var i = {offset: hJ, imageOffset: new d1(0, 0)};
    T = T || {};
    for (var e in T) {
      i[e] = T[e];
    }
    if (T.anchor) {
      i.offset = T.anchor;
    }
    this.anchor = this.offset = i.offset;
    this.imageOffset = i.imageOffset;
    this.infoWindowOffset = T.infoWindowOffset || this.offset;
    this.printImageUrl = T.printImageUrl || '';
    this.imageSize = T.imageSize || this.size;
    this.srcSetObject = {};
    this.setImageSrcset(T.srcset || T.srcSet);
  }
  g2.prototype.setImageUrl = function (e) {
    if (!e) {
      return;
    }
    this.imageUrl = e;
    this._renderData = null;
  };
  g2.prototype.getCurrentImageUrl = function () {
    if (window.devicePixelRatio > 1 && this.srcSetObject['2x']) {
      return this.srcSetObject['2x'];
    }
    return this.imageUrl;
  };
  g2.prototype.setPrintImageUrl = function (e) {
    if (!e) {
      return;
    }
    this.printImageUrl = e;
  };
  g2.prototype.setSize = function (e) {
    if (!e) {
      return;
    }
    this.size = new d1(e.width, e.height);
    this._renderData = null;
  };
  g2.prototype.setOffset = function (e) {
    if (!e) {
      return;
    }
    this.anchor = this.offset = new d1(e.width, e.height);
    this._renderData = null;
  };
  g2.prototype.setAnchor = function (e) {
    this.setOffset(e);
  };
  g2.prototype.setImageOffset = function (e) {
    if (!e) {
      return;
    }
    this.imageOffset = new d1(e.width, e.height);
    this._renderData = null;
  };
  g2.prototype.setInfoWindowOffset = function (e) {
    if (!e) {
      return;
    }
    this.infoWindowOffset = new d1(e.width, e.height);
  };
  g2.prototype.setImageSize = function (e) {
    if (!e) {
      return;
    }
    this.imageSize = new d1(e.width, e.height);
  };
  g2.prototype.setImageSrcset = function (T) {
    var e = '';
    if (!T) {
      return;
    }
    for (var i in T) {
      if (T.hasOwnProperty(i)) {
        this.srcSetObject[i] = T[i];
        e = T[i] + ' ' + i + ',';
      }
    }
    this.srcSet = e;
  };
  g2.prototype.toString = function () {
    return 'Icon';
  };
  g2.prototype.generateRenderData = function (hK) {
    var T = this.offset;
    var e = this.size;
    var hM = this.imageOffset;
    var hL = [];
    hL.push(-T.width, T.height - e.height, 0);
    hL.push(e.width - T.width, T.height - e.height, 0);
    hL.push(e.width - T.width, T.height, 0);
    hL.push(-T.width, T.height - e.height, 0);
    hL.push(e.width - T.width, T.height, 0);
    hL.push(-T.width, T.height, 0);
    if (hK !== 0) {
      for (var hJ = 0; hJ < hL.length; hJ += 3) {
        var hI = vec2.fromValues(hL[hJ], hL[hJ + 1]);
        vec2.rotate(hI, hI, [0, 0], dE(-hK));
        hL[hJ] = hI[0];
        hL[hJ + 1] = hI[1];
      }
    }
    return {vertex: hL};
  };
  g2.prototype.getRenderData = function (e) {
    this._renderData = this.generateRenderData(e);
    return this._renderData;
  };
  function am(T, i) {
    C.BaseClass.call(this);
    this.content = T;
    this.map = null;
    this._config = {
      width: 0,
      height: 0,
      maxWidth: 600,
      offset: new d1(0, 0),
      title: '',
      maxContent: '',
      enableMaximize: false,
      enableAutoPan: true,
      enableCloseOnClick: true,
      margin: [10, 10, 40, 10],
      collisions: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
      ifMaxScene: false,
      onClosing: function () {
        return true;
      },
    };
    this.setConfig(i);
    if (this._config.width !== 0) {
      if (this._config.width < 220) {
        this._config.width = 220;
      }
      if (this._config.width > 730) {
        this._config.width = 730;
      }
    }
    if (this._config.height !== 0) {
      if (this._config.height < 60) {
        this._config.height = 60;
      }
      if (this._config.height > 650) {
        this._config.height = 650;
      }
    }
    if (this._config.maxWidth !== 0) {
      if (this._config.maxWidth < 220) {
        this._config.maxWidth = 220;
      }
      if (this._config.maxWidth > 730) {
        this._config.maxWidth = 730;
      }
    }
    this.isWinMax = false;
    this.IMG_PATH = eV.imgPath;
    this.overlay = null;
    var e = this;
    d2.load('infowindow', function () {
      e._draw();
    });
  }
  am.inherits(C.BaseClass, 'InfoWindow');
  C.extend(am.prototype, {
    setWidth: function (e) {
      e = e * 1;
      if ((!e && e !== 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e !== 0) {
        if (e < 220) {
          e = 220;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.width = e;
    },
    setHeight: function (e) {
      e = e * 1;
      if ((!e && e !== 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e !== 0) {
        if (e < 60) {
          e = 60;
        }
        if (e > 650) {
          e = 650;
        }
      }
      this._config.height = e;
    },
    setMaxWidth: function (e) {
      e = e * 1;
      if ((!e && e !== 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e !== 0) {
        if (e < 220) {
          e = 220;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.maxWidth = e;
    },
    setTitle: function (e) {
      this._config.title = e || '';
    },
    setContent: function (e) {
      this.content = e || '';
    },
    getContent: function () {
      return this.content;
    },
    setMaxContent: function (e) {
      this._config.maxContent = e || '';
    },
    redraw: function () {},
    enableAutoPan: function () {
      this._config.enableAutoPan = true;
    },
    disableAutoPan: function () {
      this._config.enableAutoPan = false;
    },
    enableCloseOnClick: function () {
      this._config.enableCloseOnClick = true;
    },
    disableCloseOnClick: function () {
      this._config.enableCloseOnClick = false;
    },
    enableMaximize: function () {
      this._config.enableMaximize = true;
    },
    disableMaximize: function () {
      this._config.enableMaximize = false;
    },
    show: function () {
      this._visible = true;
    },
    hide: function () {
      this._visible = false;
    },
    close: function () {
      this.hide();
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this);
    },
    maximize: function () {
      this.isWinMax = true;
    },
    restore: function () {
      this.isWinMax = false;
    },
    setConfig: function (i) {
      if (!i) {
        return;
      }
      for (var e in i) {
        if (typeof this._config[e] === typeof i[e]) {
          this._config[e] = i[e];
        }
      }
    },
    isVisible: function () {
      return this.isOpen();
    },
    isOpen: function () {
      return false;
    },
    getPointIn: function () {
      if (this.overlay && this.overlay.getPoint) {
        return this.overlay.getPoint();
      }
    },
    getTitle: function () {
      return this._config.title || '';
    },
    getPosition: function () {
      return this.latLng;
      var e = this.getPointIn();
      return ef.convertMC2LL(e);
    },
    getPoint: function () {
      var e = this.getPointIn();
      return ef.convertMC2LL(e);
    },
    getOffset: function () {
      return this._config.offset;
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this);
    },
    toString: function () {
      return 'InfoWindow';
    },
  });
  c2.prototype.openInfoWindow = function (T, e) {
    T.latLng = new cX(e.lat, e.lng);
    var i = ef.convertLL2MC(e);
    this.openInfoWindowIn(T, i);
  };
  c2.prototype.closeInfoWindow = function () {
    var e = this.temp.infoWin || this.temp._infoWin;
    if (e && e.overlay) {
      e.overlay.closeInfoWindow();
    }
  };
  c2.prototype.openInfoWindowIn = function (hI, e) {
    if (!hI || hI.toString() !== 'InfoWindow' || !e || e.toString() !== 'Point') {
      return;
    }
    var i = this.temp;
    if (!i.marker) {
      var T = new g2(eV.imgPath + 'blank.gif', {width: 1, height: 1});
      i.marker = new dk(e, {
        icon: T,
        width: 1,
        height: 1,
        offset: new d1(0, 0),
        infoWindowOffset: new d1(0, 0),
        clickable: false,
      });
      i.marker._fromMap = 1;
    } else {
      i.marker.setPoint(e);
    }
    this.addOverlay(i.marker);
    i.marker.show();
    i.marker.openInfoWindow(hI);
  };
  cP.prototype.openInfoWindow = function (e) {
    if (this.map) {
      this.map.closeInfoWindow();
      e._visible = true;
      this.map.temp._infoWin = e;
      e.overlay = this;
      C.BaseClass.call(e, e.hashCode);
    }
  };
  cP.prototype.closeInfoWindow = function () {
    if (this.map && this.map.temp._infoWin) {
      this.map.temp._infoWin._visible = false;
      this.map.temp._infoWin.decontrol();
      this.map.temp._infoWin = null;
    }
  };
  function aI(T, i) {
    cP.call(this);
    this.content = T;
    this.map = null;
    this.domElement = null;
    this._config = {
      width: 0,
      offset: new d1(0, 0),
      styles: {
        backgroundColor: '#fff',
        border: '1px solid #f00',
        padding: '1px',
        whiteSpace: 'nowrap',
        fontSize: '12px',
        zIndex: '80',
        MozUserSelect: 'none',
      },
      point: null,
      enableMassClear: true,
    };
    i = i || {};
    this.setConfig(i);
    if (this._config.width < 0) {
      this._config.width = 0;
    }
    this.point = this._config.point;
    var e = this;
    d2.load('marker', function () {
      e._draw();
    });
  }
  aI.inherits(cP, 'Label');
  C.extend(aI.prototype, {
    setPoint: function (e) {
      if (e && e.toString() === 'Point' && !this.getMarker()) {
        this.point = this._config.point = new hj(e.lng, e.lat);
      }
    },
    setContent: function (e) {
      this.content = e;
    },
    getContent: function (e) {
      return this.content;
    },
    setOpacity: function (e) {
      if (e >= 0 && e <= 1) {
        this._config.opacity = e;
      }
    },
    setOffset: function (e) {
      if (!e || e.toString() !== 'Size') {
        return;
      }
      this._config.offset = new d1(e.width, e.height);
    },
    getOffset: function () {
      return this._config.offset;
    },
    setStyle: function (e) {
      e = e || {};
      this._config.styles = C.extend(this._config.styles, e);
    },
    setStyles: function (e) {
      this.setStyle(e);
    },
    setTitle: function (e) {
      this._config.title = e || '';
    },
    getTitle: function () {
      return this._config.title;
    },
    setMarker: function (e) {
      if (this._marker && this._marker !== e) {
        this._marker._config.label = null;
      }
      this._marker = e;
      if (e) {
        this.point = this._config.point = e.getPoint();
      } else {
        this.point = this._config.point = null;
      }
    },
    getMarker: function () {
      return this._marker || null;
    },
    getPositionIn: function () {
      return this.getPoint();
    },
  });
  function fH(T, i) {
    var hI = {};
    for (var e in i) {
      if (i.hasOwnProperty(e)) {
        if (e === 'position') {
          hI.point = ef.convertLL2MC(i[e]);
          this.latLng = new cX(i[e]['lat'], i[e]['lng']);
        } else {
          hI[e] = i[e];
        }
      }
    }
    aI.call(this, T, hI);
  }
  fH.inherits(aI, 'LabelOut');
  C.extend(fH.prototype, {
    toString: function () {
      return 'Label';
    },
    setPosition: function (e) {
      this.latLng = new cX(e.lat, e.lng);
      var i = ef.convertLL2MC(e);
      this.setPoint(i);
    },
    getPosition: function () {
      return this.latLng;
      var e = this.getPositionIn();
      return ef.convertMC2LL(e);
    },
  });
  window.BMAP_ANIMATION_DROP = 1;
  window.BMAP_ANIMATION_BOUNCE = 2;
  function dk(e, i) {
    cP.call(this);
    i = i || {};
    this.point = e;
    this._rotation = 0;
    this.map = null;
    this._animation = null;
    this.domElement = null;
    this.iconDom = null;
    this.infoWindowDom = null;
    this.siblingElement = null;
    this.textureCoord = null;
    this.textureCoordGLMap = null;
    this.collisionDetectionFailed = false;
    this._config = {
      offset: new d1(0, 0),
      opacity: 1,
      icon: null,
      title: '',
      infoWindow: null,
      label: null,
      baseZIndex: 0,
      clickable: true,
      zIndexFixed: false,
      isTop: false,
      enableMassClear: true,
      enableDragging: false,
      raiseOnDrag: false,
      restrictDraggingArea: false,
      startAnimation: '',
      enableCollisionDetection: false,
      rank: 0,
      enableDraggingMap: false,
    };
    this.setConfig(i);
    if (!i.icon) {
      this._config.icon = new g2(eV.imgPath + 'marker_red.png', new d1(23, 25), {
        offset: new d1(10, 25),
        infoWindowOffset: new d1(10, 0),
      });
    }
    this._isDragging = false;
    var T = this;
    d2.load('marker', function () {
      T._draw();
    });
  }
  dk.TOP_ZINDEX = bf.getZIndex(-90) + 1000000;
  dk.DRAG_ZINDEX = dk.TOP_ZINDEX + 1000000;
  dk._injectMethond = function (e) {
    C.extend(dk.prototype, e);
  };
  dk.inherits(cP, 'Marker');
  C.extend(dk.prototype, {
    toString: function () {
      return 'Marker';
    },
    setIcon: function (e) {
      if (e) {
        this._config.icon = e;
        this.textureCoord = this.textureCoordGLMap = null;
      }
    },
    getIcon: function () {
      return this._config.icon;
    },
    setLabel: function (e) {
      if (!(e instanceof aI)) {
        return;
      }
      this._config.label = e;
      e._config.enableMassClear = this._config.enableMassClear;
      e.setPoint(this.point);
    },
    getLabel: function () {
      return this._config.label;
    },
    enableDragging: function () {
      this._config.enableDragging = true;
    },
    disableDragging: function () {
      this._config.enableDragging = false;
    },
    setPoint: function (e) {
      if (e) {
        this.point = this._config.point = new hj(e.lng, e.lat);
        this.latLng = ef.convertMC2LL(e);
      }
    },
    setPositionIn: function (e) {
      this.setPoint(e);
    },
    getPositionIn: function () {
      return this.getPoint();
    },
    setTop: function (i, e) {
      this._config.isTop = !!i;
      if (i) {
        this._addi = e || 0;
      }
    },
    setTitle: function (e) {
      this._config.title = e || '';
    },
    getTitle: function () {
      return this._config.title;
    },
    setOffset: function (e) {
      if (e) {
        this._config.offset = e;
      }
    },
    getOffset: function () {
      return this._config.offset;
    },
    setAnimation: function (e) {
      this._animation = e;
    },
    setRank: function (e) {
      this._config.rank = e;
    },
    getRank: function () {
      return this._config.rank;
    },
    setRotation: function (e) {
      while (e < 0) {
        e += 360;
      }
      this._rotation = e % 360;
    },
    getRotation: function () {
      return this._rotation;
    },
  });
  function ay(e, T) {
    this.latLng = new cX(e.lat, e.lng);
    var i = ef.convertLL2MC(e);
    dk.call(this, i, T);
  }
  ay.inherits(dk, 'MarkerOut');
  C.extend(ay.prototype, {
    toString: function () {
      return 'Marker';
    },
    setPosition: function (e) {
      this.latLng = new cX(e.lat, e.lng);
      var i = ef.convertLL2MC(e);
      this.setPositionIn(i);
    },
    getPosition: function () {
      return this.latLng;
      var e = this.getPositionIn();
      return ef.convertMC2LL(e);
    },
  });
  window.BMAP_SHAPE_CIRCLE = 1;
  window.BMAP_SHAPE_RECT = 2;
  function a8(i, e, T) {
    cP.call(this, e, T);
    this.domElement = null;
    this.point = i;
    T = T || {};
    this._config = {};
    this._config.height = e || 0;
    this._config.size = typeof T.size === 'number' ? T.size : 50;
    this._config.fillOpacity = typeof T.fillOpacity === 'number' ? T.fillOpacity : 0.8;
    this._config.shape = typeof T.shape === 'number' ? T.shape : 1;
    fx(this._config.fillOpacity, 0, 1);
    if (T.fillColor === '') {
      this._config.fillColor = '';
    } else {
      this._config.fillColor = T.fillColor ? T.fillColor : '#f00';
    }
    this._config.icon = T.icon instanceof g2 ? T.icon : '';
    var hI = this;
    d2.load('marker', function () {
      hI._draw();
    });
  }
  a8.inherits(cP, 'Marker3D');
  C.extend(a8.prototype, {
    setPoint: function (e) {
      this.point = this._config.point = new hj(e.lng, e.lat);
      this.latLng = ef.convertMC2LL(e);
      var i = new a6('onstatus_change');
      i.overlay = this;
      i.action = 'setPoint';
      this.fire(i);
    },
    setPositionIn: function (e) {
      this.setPoint(e);
    },
    getPositionIn: function () {
      return this.getPoint();
    },
    setDomAttribute: function (i, T) {
      var e = new a6('onlineupdate');
      e.overlay = this;
      this.dispatchEvent(e);
    },
  });
  function cp(i, e, hI) {
    this.latLng = new cX(i.lat, i.lng);
    var T = ef.convertLL2MC(i);
    a8.call(this, T, e, hI);
  }
  cp.inherits(a8, 'Marker3d');
  C.extend(cp.prototype, {
    toString: function () {
      return 'Marker3D';
    },
    setHeight: function (e) {
      this._config.height = Number(e);
      this.draw();
      var i = new a6('onlineupdate');
      i.overlay = this;
      this.dispatchEvent(i);
    },
    getHeight: function () {
      return this._config.height;
    },
    setFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.fillOpacity = e;
      this.setDomAttribute('fillopacity', e);
    },
    getFillOpacity: function () {
      return this._config.fillOpacity;
    },
    setFillColor: function (e) {
      this._config.fillColor = e || '';
      this.setDomAttribute('fillcolor', e);
    },
    getFillColor: function () {
      return this._config.fillColor;
    },
    setIcon: function (i) {
      if (!i || !this.map) {
        return;
      }
      this._config.icon = i;
      if (this._config.icon) {
        var e = this._config.icon.getCurrentImageUrl();
        var hI = i.getCurrentImageUrl() !== e;
        this._config.icon = i;
        this.textureCoord = this.textureCoordGLMap = null;
        this.draw();
        var T = new a6('onstatus_change');
        T.overlay = this;
        T.action = 'setIcon';
        T.imageUrlChanged = hI;
        this.fire(T);
      }
    },
    getIcon: function () {
      return this._config.icon;
    },
    setPosition: function (e) {
      this.latLng = new cX(e.lat, e.lng);
      var i = ef.convertLL2MC(e);
      this.setPositionIn(i);
    },
    getPosition: function () {
      var e = this.getPositionIn();
      return ef.convertMC2LL(e);
    },
  });
  function a(T, e) {
    w.call(this, e);
    this._normalizedBounds = new dM();
    this.setPoints(T);
    var i = this;
    d2.load('poly', function () {
      i._draw();
    });
  }
  a.inherits(w, 'Polyline');
  C.extend(a.prototype, {
    getBoundsIn: function (e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds;
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds;
    },
    setPoints: function (T) {
      this._clearCache();
      this.points = w.getGraphPoints(T).slice(0);
      if (this._config.geodesic === true) {
        this.greatCirclePoints.length = 0;
        for (var e = 0; e < this.points.length - 1; e++) {
          this.calcGreatCirclePoints(this.points[e], this.points[e + 1]);
        }
      }
      this._calcBounds();
    },
    _calcBounds: function () {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        C.each(e.greatCirclePoints, function (i) {
          e._bounds.extend(i);
        });
      } else {
        C.each(e.points, function (i) {
          e._bounds.extend(i);
        });
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (
        e._normalizedBounds.sw.lng < -c2.WORLD_SIZE_MC_HALF ||
        e._normalizedBounds.ne.lng > c2.WORLD_SIZE_MC_HALF
      ) {
        e._normalizedBounds.sw.lng = -c2.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c2.WORLD_SIZE_MC_HALF;
      }
    },
    calcGreatCirclePoints: function (hI, T) {
      var hK = hI.latLng;
      var hJ = T.latLng;
      if (hK.equals(hJ)) {
        return;
      }
      var e = ef.getDistance(dE(hK.lng), dE(hK.lat), dE(hJ.lng), dE(hJ.lat));
      if (e < 250000) {
        return;
      }
      var hO = Math.round(e / 150000);
      var hS = this.calcAngularDistance(hK, hJ);
      this.greatCirclePoints.push(hI);
      var hR = hK.lng;
      var hQ = hI;
      for (var hL = 0; hL < hO; hL++) {
        var hN = this.calcMiddlePoint(hK, hJ, hL / hO, hS);
        var hP = ef.convertLL2MC(hN);
        var hM = hP.lng;
        var hT = bK(hP, hQ);
        if (hT > 30037726) {
          if (hP.lng < hQ.lng) {
            hP.lng += c2.WORLD_SIZE_MC;
          } else {
            hP.lng -= c2.WORLD_SIZE_MC;
          }
        }
        this.greatCirclePoints.push(hP);
        hQ = hP;
      }
      var hT = bK(T, hQ);
      if (hT > 30037726) {
        if (T.lng < hQ.lng) {
          T.lng += c2.WORLD_SIZE_MC;
        } else {
          T.lng -= c2.WORLD_SIZE_MC;
        }
      }
      this.greatCirclePoints.push(T);
    },
    calcMiddlePoint: function (hP, hO, hQ, hU) {
      var hJ = hP.lat;
      var hI = hO.lat;
      var hT = hP.lng;
      var hR = hO.lng;
      var hV = dE(hJ);
      var hS = dE(hI);
      var i = dE(hT);
      var e = dE(hR);
      var hX = Math.sin((1 - hQ) * hU) / Math.sin(hU);
      var hW = Math.sin(hQ * hU) / Math.sin(hU);
      var hM = hX * Math.cos(hV) * Math.cos(i) + hW * Math.cos(hS) * Math.cos(e);
      var hL = hX * Math.cos(hV) * Math.sin(i) + hW * Math.cos(hS) * Math.sin(e);
      var hK = hX * Math.sin(hV) + hW * Math.sin(hS);
      var T = Math.atan2(hK, Math.sqrt(Math.pow(hM, 2) + Math.pow(hL, 2)));
      var hN = Math.atan2(hL, hM);
      return new hj(c8(hN), c8(T));
    },
    calcAngularDistance: function (hJ, i) {
      var hK = dE(hJ.lat);
      var hI = dE(i.lat);
      var T = dE(hJ.lng);
      var e = dE(i.lng);
      return Math.acos(
        Math.sin(hK) * Math.sin(hI) + Math.cos(hK) * Math.cos(hI) * Math.cos(Math.abs(e - T)),
      );
    },
  });
  function aj(hJ, e) {
    if (!hJ || hJ.length === 0) {
      return;
    }
    var hI = [];
    for (var T = 0; T < hJ.length; T++) {
      hI[T] = ef.convertLL2MC(hJ[T]);
    }
    a.call(this, hI, e);
  }
  aj.inherits(a, 'PolylineOut');
  C.extend(aj.prototype, {
    toString: function () {
      return 'Polyline';
    },
    setPath: function (hI) {
      if (!hI || hI.length === 0) {
        return;
      }
      var T = [];
      for (var e = 0; e < hI.length; e++) {
        T[e] = ef.convertLL2MC(hI[e]);
      }
      this.setPathIn(T);
    },
    getPath: function () {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hI = [];
      for (var T = 0; T < e.length; T++) {
        hI[T] = ef.convertMC2LL(e[T]);
      }
      return hI;
    },
    getBounds: function (i) {
      var e = this.getBoundsIn(i);
      var T = new dM(ef.convertMC2LL(e.getSouthWest()), ef.convertMC2LL(e.getNorthEast()));
      return T;
    },
  });
  function eh(T, hI, e) {
    w.call(this, e);
    this._normalizedBounds = new dM();
    this._cps = hI;
    this._path = T;
    this.setPoints(T);
    var i = this;
    d2.load('poly', function () {
      i._draw();
    });
  }
  eh.inherits(a, 'BezierCurve');
  C.extend(eh.prototype, {
    getBoundsIn: function (e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds;
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds;
    },
    setPoints: function (e) {
      this._clearCache();
      this.points = w.getGraphPoints(e).slice(0);
      this.points = this.calcBezierPoints(this.points, this._cps);
      this._calcBounds();
    },
    _calcBounds: function () {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        C.each(e.greatCirclePoints, function (i) {
          e._bounds.extend(i);
        });
      } else {
        C.each(e.points, function (i) {
          e._bounds.extend(i);
        });
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (
        e._normalizedBounds.sw.lng < -c2.WORLD_SIZE_MC_HALF ||
        e._normalizedBounds.ne.lng > c2.WORLD_SIZE_MC_HALF
      ) {
        e._normalizedBounds.sw.lng = -c2.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c2.WORLD_SIZE_MC_HALF;
      }
    },
    getPathIn: function () {
      return this._path;
    },
    setPathIn: function (e) {
      this._path = e;
      this.setPoints(e);
    },
    getCpsIn: function () {
      return this._cps;
    },
    setCpsIn: function (e) {
      this._cps = e;
      this.setPoints(this._path);
    },
    calcBezierPoints: function (hI, hK) {
      var T = [];
      for (var e = 0; e < hI.length - 1; e++) {
        var hJ = [hI[e], hK[e][0], hK[e][1], hI[e + 1]];
        T = T.concat(this.bezierbetweenTwoP(hJ));
      }
      return T;
    },
    bezierbetweenTwoP: function (hK) {
      var T = 100;
      var hJ = 1 / T;
      var e = [];
      for (var hI = 0; hI < T; hI++) {
        e.push(this.getPointOnCubicBezier(hK, hI * hJ));
      }
      return e;
    },
    getPointOnCubicBezier: function (hL, hP) {
      var i;
      var hK;
      var hI;
      var hQ;
      var hJ;
      var T;
      var hO;
      var e;
      var hN;
      var hM;
      hI = 3 * (hL[1].lng - hL[0].lng);
      hK = 3 * (hL[2].lng - hL[1].lng) - hI;
      i = hL[3].lng - hL[0].lng - hI - hK;
      T = 3 * (hL[1].lat - hL[0].lat);
      hJ = 3 * (hL[2].lat - hL[1].lat) - T;
      hQ = hL[3].lat - hL[0].lat - T - hJ;
      hO = hP * hP;
      e = hO * hP;
      hN = i * e + hK * hO + hI * hP + hL[0].lng;
      hM = hQ * e + hJ * hO + T * hP + hL[0].lat;
      return new hj(hN, hM);
    },
  });
  function ff(hJ, hL, e) {
    if (!hJ || hJ.length === 0) {
      return;
    }
    this.userPath = hJ;
    this.userCps = hL;
    var hI = [];
    for (var T = 0; T < hJ.length; T++) {
      hI[T] = ef.convertLL2MC(hJ[T]);
    }
    if (!hL || hL.length === 0) {
      return;
    }
    var hK = [];
    for (var T = 0; T < hL.length; T++) {
      hK[T] = [];
      hK[T][0] = ef.convertLL2MC(hL[T][0]);
      if (hL[T][1]) {
        hK[T][1] = ef.convertLL2MC(hL[T][1]);
      } else {
        hK[T][1] = ef.convertLL2MC(hL[T][0]);
      }
    }
    eh.call(this, hI, hK, e);
  }
  ff.inherits(eh, 'BezierCurveOut');
  C.extend(ff.prototype, {
    toString: function () {
      return 'BezierCurve';
    },
    setPath: function (hI) {
      if (!hI || hI.length === 0) {
        return;
      }
      this.userPath = hI;
      var T = [];
      for (var e = 0; e < hI.length; e++) {
        T[e] = ef.convertLL2MC(hI[e]);
      }
      this.setPathIn(T);
    },
    getPath: function () {
      return this.userPath;
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hI = [];
      for (var T = 0; T < e.length; T++) {
        hI[T] = ef.convertMC2LL(e[T]);
      }
      return hI;
    },
    getControlPoints: function () {
      return this.userCps;
      var e = this.getCpsIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hI = [];
      for (var T = 0; T < e.length; T++) {
        hI[T] = [];
        hI[T][0] = ef.convertMC2LL(e[T][0]);
        hI[T][1] = ef.convertMC2LL(e[T][1]);
      }
      return hI;
    },
    setControlPoints: function (hI) {
      if (!hI || hI.length === 0) {
        return;
      }
      this.userCps = hI;
      var T = [];
      for (var e = 0; e < hI.length; e++) {
        T[e] = [];
        T[e][0] = ef.convertLL2MC(hI[e][0]);
        if (hI[e][1]) {
          T[e][1] = ef.convertLL2MC(hI[e][1]);
        } else {
          T[e][1] = ef.convertLL2MC(hI[e][0]);
        }
      }
      this.setCpsIn(T);
    },
    getBounds: function (i) {
      var e = this.getBoundsIn(i);
      var T = new dM(ef.convertMC2LL(e.getSouthWest()), ef.convertMC2LL(e.getNorthEast()));
      return T;
    },
  });
  function fd(e, T) {
    w.call(this, T);
    this._normalizedBounds = new dM();
    this.setPoints(e);
    var i = this;
    d2.load('poly', function () {
      i._draw();
    });
  }
  fd.inherits(a, 'PolylineMultipart');
  C.extend(fd.prototype, {
    setPoints: function (e) {
      if (!e) {
        return;
      }
      this._clearCache();
      this.points = this._unifyArgs(e);
      this._calcBounds();
    },
    _unifyArgs: function (T) {
      var e = [];
      var i = [];
      if (T.constructor === Array) {
        if (T[0].constructor === hj) {
          i.push(T);
        } else {
          i = T;
        }
      } else {
        if (typeof T === 'string') {
          i.push(T);
        }
      }
      C.each(i, function (hI) {
        e.push(w.getGraphPoints(hI));
      });
      return e;
    },
    setPointAt: function (i, e, T) {
      T = T || 0;
      if (!e || !this.points[T] || !this.points[T][i]) {
        return;
      }
      this._clearCache();
      this.points[T][i] = new hj(e.lng, e.lat);
      this._calcBounds();
    },
    getBoundsIn: function (e) {
      if (!e) {
        this._bounds.setMinMax();
        return this._bounds;
      }
      this._normalizedBounds.setMinMax();
      return this._normalizedBounds;
    },
    _calcBounds: function () {
      if (!this.points) {
        return;
      }
      var e = this;
      e._bounds.setNorthEast(null);
      e._bounds.setSouthWest(null);
      if (e.greatCirclePoints && e.greatCirclePoints.length > 0) {
        C.each(e.greatCirclePoints, function (i) {
          e._bounds.extend(i);
        });
      } else {
        C.each(e.points, function (i) {
          C.each(i, function (T) {
            e._bounds.extend(T);
          });
        });
      }
      e._normalizedBounds.setSouthWest(e._bounds.getSouthWest());
      e._normalizedBounds.setNorthEast(e._bounds.getNorthEast());
      if (
        e._normalizedBounds.sw.lng < -c2.WORLD_SIZE_MC_HALF ||
        e._normalizedBounds.ne.lng > c2.WORLD_SIZE_MC_HALF
      ) {
        e._normalizedBounds.sw.lng = -c2.WORLD_SIZE_MC_HALF;
        e._normalizedBounds.ne.lng = c2.WORLD_SIZE_MC_HALF;
      }
    },
  });
  function aM(T, e) {
    w.call(this, e);
    e = e || {};
    if (typeof e.fillOpacity === 'number') {
      this._config.fillOpacity = e.fillOpacity;
    } else {
      this._config.fillOpacity = 0.6;
    }
    fx(this._config.fillOpacity, 0, 1);
    if (e.fillColor === '') {
      this._config.fillColor = '';
    } else {
      this._config.fillColor = e.fillColor ? e.fillColor : '#fff';
    }
    this._parseFillCacheWebGL = [];
    this.setPoints(T, e);
    var i = this;
    d2.load('poly', function () {
      i._draw();
    });
  }
  aM.inherits(w, 'Polygon');
  C.extend(aM.prototype, {
    setPoints: function (hK) {
      var hI = [];
      if (
        typeof hK === 'string' ||
        hK[0] instanceof hj ||
        hK[0] instanceof cX ||
        this instanceof fZ ||
        hK.length === 0
      ) {
        var e = this._processSinglePointArray(hK);
        this._userPoints = e.userPoints;
        hI = e.innerPoints;
        this.hasMultipleParts = false;
      } else {
        this._userPoints = [];
        for (var hJ = 0; hJ < hK.length; hJ++) {
          var T = this._processSinglePointArray(hK[hJ]);
          this._userPoints.push(T.userPoints);
          hI.push(T.innerPoints);
        }
        this.hasMultipleParts = true;
      }
      w.prototype.setPoints.call(this, hI);
    },
    setPathIn: function (e) {
      this.setPoints(e);
    },
    _processSinglePointArray: function (e) {
      var i = w.getGraphPoints(e).slice(0);
      innerPoints = i.slice(0);
      if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
        innerPoints.push(new hj(innerPoints[0].lng, innerPoints[0].lat));
      }
      return {userPoints: i, innerPoints: innerPoints};
    },
    setPointAt: function (i, e) {
      if (!this._userPoints[i]) {
        return;
      }
      this._clearCache();
      this._userPoints[i] = new hj(e.lng, e.lat);
      this.points[i] = new hj(e.lng, e.lat);
      if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
        this.points[this.points.length - 1] = new hj(e.lng, e.lat);
      }
      this._calcBounds();
    },
    setPositionAt: function (i, e) {
      if (!this._userPoints[i]) {
        return;
      }
      var T = ef.convertLL2MC(e);
      this.setPointAt(i, T);
    },
    getPoints: function () {
      var e = this._userPoints;
      if (e.length === 0) {
        e = this.points;
      }
      return e;
    },
    getPathIn: function () {
      return this.getPoints();
    },
  });
  function gV(hN, hK) {
    if (!hN || hN.length === 0) {
      return;
    }
    var hM = [];
    if (typeof hN === 'string' || hN[0] instanceof hj || hN[0] instanceof cX) {
      var e = this._processSinglePointArray(hN);
      for (var hL = 0; hL < e.innerPoints.length; hL++) {
        hM[hL] = ef.convertLL2MC(e.innerPoints[hL]);
      }
    } else {
      for (var hL = 0; hL < hN.length; hL++) {
        var T = this._processSinglePointArray(hN[hL]);
        var hJ = [];
        for (var hI = 0; hI < T.innerPoints.length; hI++) {
          hJ[hI] = ef.convertLL2MC(T.innerPoints[hI]);
        }
        hM.push(hJ);
      }
    }
    aM.call(this, hM, hK);
  }
  gV.inherits(aM, 'PolygonOut');
  C.extend(gV.prototype, {
    toString: function () {
      return 'Polygon';
    },
    setPath: function (hI) {
      if (!hI || hI.length === 0) {
        return;
      }
      hI = w.getGraphPoints(hI);
      var T = [];
      for (var e = 0; e < hI.length; e++) {
        T[e] = ef.convertLL2MC(hI[e]);
      }
      this.setPathIn(T);
    },
    getPath: function () {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hI = [];
      for (var T = 0; T < e.length; T++) {
        hI[T] = ef.convertMC2LL(e[T]);
      }
      return hI;
    },
  });
  function fZ(i, e, T) {
    this.point = i;
    this.radius = Math.abs(e);
    aM.call(this, [], T);
  }
  fZ.parseTolerance = {0: [0.01, 0.0001, 0.00001, 0.000004], 1: [1000, 10, 1, 0.4]};
  fZ.inherits(aM, 'Circle');
  C.extend(fZ.prototype, {
    initialize: function (e) {
      this.map = e;
      this.points = this._getPerimeterPoints(this.point, this.radius);
      this._calcBounds();
      return null;
    },
    getPoint: function () {
      return this.point;
    },
    setPoint: function (e) {
      if (!e) {
        return;
      }
      this.point = e;
      this.latLng = ef.convertMC2LL(e);
    },
    setCenterIn: function (e) {
      var i = arguments[1];
      this.setPoint(e, i);
    },
    setRadius: function (e) {
      this.radius = Math.abs(e);
    },
    getCenterIn: function () {
      return this.point;
    },
    getRadius: function () {
      return this.radius;
    },
    _getPerimeterPoints: function (e, hP) {
      if (!e || !hP || !this.map) {
        return [];
      }
      var T = this.map;
      var hM = e.lng;
      var hK = e.lat;
      var hV = ef.convertMC2LL(e);
      hM = hV.lng;
      hK = hV.lat;
      var hW = [];
      var hR = hP / ef.EARTHRADIUS;
      var hO = (Math.PI / 180) * hK;
      var hU = (Math.PI / 180) * hM;
      for (var hN = 0; hN < 360; hN += 9) {
        var hL = (Math.PI / 180) * hN;
        var hS = Math.asin(
          Math.sin(hO) * Math.cos(hR) + Math.cos(hO) * Math.sin(hR) * Math.cos(hL),
        );
        var hQ = Math.atan2(
          Math.sin(hL) * Math.sin(hR) * Math.cos(hO),
          Math.cos(hR) - Math.sin(hO) * Math.sin(hS),
        );
        var hT = ((hU - hQ + Math.PI) % (2 * Math.PI)) - Math.PI;
        var hJ = new cX(hS * (180 / Math.PI), hT * (180 / Math.PI));
        hW.push(ef.convertLL2MC(hJ));
      }
      var hI = hW[0];
      hW.push(new hj(hI.lng, hI.lat));
      if (hI) {
        this._radiusMercator = Math.sqrt(
          Math.pow(hI.lng - this.point.lng, 2) + Math.pow(hI.lat - this.point.lat, 2),
        );
      } else {
        this._radiusMercator = this.radius;
      }
      return hW;
    },
  });
  function dz(i, e, hI) {
    this.latLng = new cX(i.lat, i.lng);
    var T = ef.convertLL2MC(i);
    fZ.call(this, T, e, hI);
  }
  dz.inherits(fZ, 'CircleOut');
  C.extend(dz.prototype, {
    toString: function () {
      return 'Circle';
    },
    setCenter: function (e) {
      this.latLng = new cX(e.lat, e.lng);
      var i = ef.convertLL2MC(e);
      this.setCenterIn(i);
    },
    getCenter: function () {
      return this.latLng;
    },
    getPath: function () {
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hI = [];
      for (var T = 0; T < e.length; T++) {
        hI[T] = ef.convertMC2LL(e[T]);
      }
      return hI;
    },
  });
  function bn(hI, e, i) {
    w.call(this, i);
    i = i || {};
    if (typeof i.topFillOpacity === 'number') {
      this._config.topFillOpacity = i.topFillOpacity;
    } else {
      this._config.topFillOpacity = 0.6;
    }
    if (typeof i.sideFillOpacity === 'number') {
      this._config.sideFillOpacity = i.sideFillOpacity;
    } else {
      this._config.sideFillOpacity = 0.8;
    }
    fx(this._config.sideFillOpacity, 0, 1);
    if (i.topFillColor === '') {
      this._config.topFillColor = '';
    } else {
      this._config.topFillColor = i.topFillColor ? i.topFillColor : '#fff';
    }
    if (i.sideFillColor === '') {
      this._config.sideFillColor = '';
    } else {
      this._config.sideFillColor = i.sideFillColor ? i.sideFillColor : '#fff';
    }
    this._parseFillCacheWebGL = [];
    this.setPoints(hI, i);
    this._config.altitude = e || 0;
    var T = this;
    d2.load('poly', function () {
      T._draw();
    });
  }
  bn.inherits(w, 'Prism');
  C.extend(bn.prototype, {
    setPoints: function (hK) {
      var hI = [];
      if (
        typeof hK === 'string' ||
        hK[0] instanceof hj ||
        hK[0] instanceof cX ||
        this instanceof fZ ||
        hK.length === 0
      ) {
        var e = this._processSinglePointArray(hK);
        this._userPoints = e.userPoints;
        hI = e.innerPoints;
        this.hasMultipleParts = false;
      } else {
        this._userPoints = [];
        for (var hJ = 0; hJ < hK.length; hJ++) {
          var T = this._processSinglePointArray(hK[hJ]);
          this._userPoints.push(T.userPoints);
          hI.push(T.innerPoints);
        }
        this.hasMultipleParts = true;
      }
      w.prototype.setPoints.call(this, hI);
    },
    setPathIn: function (e) {
      this.setPoints(e);
    },
    _processSinglePointArray: function (e) {
      var i = w.getGraphPoints(e).slice(0);
      innerPoints = i.slice(0);
      if (innerPoints.length > 1 && !innerPoints[0].equals(innerPoints[innerPoints.length - 1])) {
        innerPoints.push(new hj(innerPoints[0].lng, innerPoints[0].lat));
      }
      return {userPoints: i, innerPoints: innerPoints};
    },
    setPointAt: function (i, e) {
      if (!this._userPoints[i]) {
        return;
      }
      this._clearCache();
      this._userPoints[i] = new hj(e.lng, e.lat);
      this.points[i] = new hj(e.lng, e.lat);
      if (i === 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
        this.points[this.points.length - 1] = new hj(e.lng, e.lat);
      }
      this._calcBounds();
    },
    getPoints: function () {
      var e = this._userPoints;
      if (e.length === 0) {
        e = this.points;
      }
      return e;
    },
    getPathIn: function () {
      return this.getPoints();
    },
    setTopFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.topFillOpacity = e;
      this._setDomAttribute('topfillopacity', e);
    },
    getTopFillOpacity: function () {
      return this._config.topFillOpacity;
    },
    setSideFillOpacity: function (e) {
      if (e > 1 || e < 0) {
        return;
      }
      this._config.sideFillOpacity = e;
      this._setDomAttribute('sidefillopacity', e);
    },
    getSideFillOpacity: function () {
      return this._config.sideFillOpacity;
    },
    setTopFillColor: function (e) {
      this._config.topFillColor = e || '';
      this._setDomAttribute('topfillcolor', e);
    },
    getTopFillColor: function () {
      return this._config.topFillColor;
    },
    setSideFillColor: function (e) {
      this._config.sideFillColor = e || '';
      this._setDomAttribute('sidefillcolor', e);
    },
    getSideFillColor: function () {
      return this._config.sideFillColor;
    },
    setAltitude: function (e) {
      this._config.altitude = Number(e);
      this.draw();
      var i = new a6('onlineupdate');
      i.overlay = this;
      this.dispatchEvent(i);
    },
    getAltitude: function () {
      return this._config.altitude;
    },
  });
  function cb(hM, hK, hN) {
    if (!hM || hM.length === 0) {
      return;
    }
    this.userPath = hM;
    var e = [];
    if (typeof hM === 'string' || hM[0] instanceof hj || hM[0] instanceof cX) {
      var hO = this._processSinglePointArray(hM);
      for (var hJ = 0; hJ < hO.innerPoints.length; hJ++) {
        e[hJ] = ef.convertLL2MC(hO.innerPoints[hJ]);
      }
    } else {
      for (var hJ = 0; hJ < hM.length; hJ++) {
        var hL = this._processSinglePointArray(hM[hJ]);
        var T = [];
        for (var hI = 0; hI < hL.innerPoints.length; hI++) {
          T[hI] = ef.convertLL2MC(hL.innerPoints[hI]);
        }
        e.push(T);
      }
    }
    bn.call(this, e, hK, hN);
  }
  cb.inherits(bn, 'PrismOut');
  C.extend(cb.prototype, {
    toString: function () {
      return 'Prism';
    },
    setPath: function (hI) {
      if (!hI || hI.length === 0) {
        return;
      }
      this.userPath = hI;
      var T = [];
      for (var e = 0; e < hI.length; e++) {
        T[e] = ef.convertLL2MC(hI[e]);
      }
      this.setPathIn(T);
    },
    getPath: function () {
      return this.userPath;
      var e = this.getPathIn();
      if (!e || e.length === 0) {
        return [];
      }
      var hI = [];
      for (var T = 0; T < e.length; T++) {
        hI[T] = ef.convertMC2LL(e[T]);
      }
      return hI;
    },
  });
  var bw = {};
  function hy(T, i) {
    C.BaseClass.call(this);
    this.content = T;
    this.map = null;
    this._config = {
      width: 0,
      height: 0,
      maxWidth: 600,
      offset: new d1(0, 0),
      title: '',
      maxContent: '',
      enableMaximize: false,
      enableAutoPan: true,
      enableCloseOnClick: true,
      margin: [10, 10, 40, 10],
      collisions: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
      ifMaxScene: false,
      onClosing: function () {
        return true;
      },
    };
    this.setConfig(i);
    if (this._config.width < 50) {
      this._config.width = 50;
    }
    if (this._config.width > 730) {
      this._config.width = 730;
    }
    if (this._config.height != 0) {
      if (this._config.height < 50) {
        this._config.height = 50;
      }
      if (this._config.height > 650) {
        this._config.height = 650;
      }
    }
    if (this._config.maxWidth !== 0) {
      if (this._config.maxWidth < 50) {
        this._config.maxWidth = 50;
      }
      if (this._config.maxWidth > 730) {
        this._config.maxWidth = 730;
      }
    }
    this.isWinMax = false;
    this.IMG_PATH = eV.imgPath;
    this.overlay = null;
    var e = this;
    d2.load('simpleInfowindow', function () {
      e._draw();
    });
  }
  hy.inherits(C.BaseClass, 'SimpleInfoWindow');
  C.extend(hy.prototype, {
    setWidth: function (e) {
      e = e * 1;
      if ((!e && e != 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e != 0) {
        if (e < 50) {
          e = 50;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.width = e;
    },
    setHeight: function (e) {
      e = e * 1;
      e -= 10;
      if ((!e && e != 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e != 0) {
        if (e < 50) {
          e = 50;
        }
        if (e > 650) {
          e = 650;
        }
      }
      this._config.height = e;
    },
    setMaxWidth: function (e) {
      e = e * 1;
      if ((!e && e != 0) || isNaN(e) || e < 0) {
        return;
      }
      if (e != 0) {
        if (e < 50) {
          e = 50;
        }
        if (e > 730) {
          e = 730;
        }
      }
      this._config.maxWidth = e;
    },
    setTitle: function (e) {
      this._config.title = e || '';
    },
    setContent: function (e) {
      this.content = e || '';
    },
    setMaxContent: function (e) {
      this._config.maxContent = e || '';
    },
    redraw: function () {},
    enableAutoPan: function () {
      this._config.enableAutoPan = true;
    },
    disableAutoPan: function () {
      this._config.enableAutoPan = false;
    },
    enableCloseOnClick: function () {
      this._config.enableCloseOnClick = true;
    },
    disableCloseOnClick: function () {
      this._config.enableCloseOnClick = false;
    },
    enableMaximize: function () {
      this._config.enableMaximize = true;
    },
    disableMaximize: function () {
      this._config.enableMaximize = false;
    },
    show: function () {
      this._visible = true;
    },
    hide: function () {
      this._visible = false;
    },
    close: function () {
      this.hide();
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this);
    },
    maximize: function () {
      this.isWinMax = true;
    },
    restore: function () {
      this.isWinMax = false;
    },
    setConfig: function (i) {
      if (!i) {
        return;
      }
      for (var e in i) {
        if (typeof this._config[e] == typeof i[e]) {
          this._config[e] = i[e];
        }
      }
    },
    isVisible: function () {
      return this.isOpen();
    },
    isOpen: function () {
      return false;
    },
    getPoint: function () {
      if (this.overlay && this.overlay.getPoint) {
        return this.overlay.getPoint();
      }
    },
    getOffset: function () {
      return this._config.offset;
    },
    dispose: function () {
      C.BaseClass.prototype.decontrol.call(this);
    },
    toString: function () {
      return 'SimpleInfoWindow';
    },
  });
  c2.prototype.openSimpleInfoWindow = function (hI, e) {
    if (!hI || hI.toString() != 'SimpleInfoWindow' || !e || e.toString() != 'Point') {
      return;
    }
    var i = this.temp;
    if (!i.marker) {
      var T = new g2(eV.imgPath + 'blank.gif', {width: 1, height: 1});
      i.marker = new dk(e, {
        icon: T,
        width: 1,
        height: 1,
        offset: new d1(0, 0),
        infoWindowOffset: new d1(0, 0),
        clickable: false,
      });
      i.marker._fromMap = 1;
    } else {
      i.marker.setPoint(e);
    }
    this.addOverlay(i.marker);
    i.marker.show();
    i.marker.openSimpleInfoWindow(hI);
  };
  c2.prototype.closeSimpleInfoWindow = function () {
    var e = this.temp.infoWin || this.temp._infoWin;
    if (e && e.overlay) {
      e.overlay.closeSimpleInfoWindow();
    }
  };
  cP.prototype.openSimpleInfoWindow = function (e) {
    if (this.map) {
      this.map.closeSimpleInfoWindow();
      e._visible = true;
      this.map.temp._infoWin = e;
      e.overlay = this;
      C.BaseClass.call(e, e.hashCode);
    }
  };
  cP.prototype.closeSimpleInfoWindow = function () {
    if (this.map && this.map.temp._infoWin) {
      this.map.temp._infoWin._visible = false;
      this.map.temp._infoWin.decontrol();
      this.map.temp._infoWin = null;
    }
  };
  function dQ(T, e) {
    if (arguments.length === 0) {
      return;
    }
    cP.apply(this, arguments);
    e = e || {};
    this._config = {
      bounds: T,
      opacity: e.opacity || 1,
      imageURL: e.imageURL || '',
      displayOnMinLevel: e.displayOnMinLevel || 1,
      enableMassClear: e.enableMassClear === false ? false : true,
      displayOnMaxLevel: e.displayOnMaxLevel || 19,
      stretch: e.stretch || false,
    };
    if (e.opacity === 0) {
      this._config.opacity = 0;
    }
    var i = this;
    d2.load('groundOverlay', function () {
      i._draw();
    });
  }
  dQ.inherits(cP, 'GroundOverlay');
  C.extend(dQ.prototype, {
    _addDom: function () {
      return null;
    },
    setBounds: function (e) {
      this._config.bounds = e;
    },
    getBounds: function () {
      return this._config.bounds;
    },
    setOpacity: function (e) {
      this._config.opacity = e;
    },
    getOpacity: function () {
      return this._config.opacity;
    },
    setImageURL: function (e) {
      this._config.imageURL = e;
    },
    getImageURL: function () {
      return this._config.imageURL;
    },
    setDisplayOnMinLevel: function (e) {
      this._config.displayOnMinLevel = e;
    },
    getDisplayOnMinLevel: function () {
      return this._config.displayOnMinLevel;
    },
    setDisplayOnMaxLevel: function (e) {
      this._config.displayOnMaxLevel = e;
    },
    getDisplayOnMaxLevel: function () {
      return this._config.displayOnMaxLevel;
    },
  });
  function eb(e, i) {
    e = isNaN(e) ? 0 : e;
    i = isNaN(i) ? 0 : i;
    this.x = e;
    this.y = i;
  }
  eb.prototype.equals = function (e) {
    if (!e) {
      return false;
    }
    return e.x === this.x && e.y === this.y;
  };
  eb.prototype.clone = function () {
    return new eb(this.x, this.y);
  };
  eb.prototype.toString = function () {
    return 'Pixel';
  };
  function d1(i, e) {
    if (typeof i !== 'number') {
      this.width = parseFloat(i);
    } else {
      this.width = i;
    }
    if (typeof e !== 'number') {
      this.height = parseFloat(e);
    } else {
      this.height = e;
    }
  }
  d1.prototype.equals = function (e) {
    return !!(e && this.width === e.width && this.height === e.height);
  };
  d1.prototype.toString = function () {
    return 'Size';
  };
  var bC = {
    B_NORMAL_MAP: {
      tileUrls: ej(eV.tileDomain, eV.rasterTilePath),
      vectorTileUrls: ej(eV.tileDomain, eV.vectorTilePath),
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      webgl: {minZoom: 3, maxZoom: 25},
      zoomLevelBase: 18,
      errorUrl: eV.imgPath + 'bg.png',
      bounds: new dM(new hj(-21364736, -11708041.66), new hj(23855104, 12474104.17)),
      imgExtend: 'png',
    },
    B_SATELLITE_MAP: {
      tileUrls: [
        'https://maponline0.bdimg.com/starpic/?qt=satepc&',
        'https://maponline1.bdimg.com/starpic/?qt=satepc&',
        'https://maponline2.bdimg.com/starpic/?qt=satepc&',
        'https://maponline3.bdimg.com/starpic/?qt=satepc&',
      ],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: eV.imgPath + 'bg.png',
      bounds: new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712)),
      imgExtend: 'png',
    },
    B_STREET_MAP: {
      tileUrls: ej(eV.tileDomain, eV.rasterTilePath),
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: eV.imgPath + 'bg.png',
      bounds: new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712)),
      imgExtend: 'png',
    },
    BMAP_CUSTOM_LAYER: {
      tileUrls: [''],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 1,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      zoomLevelBase: 18,
      errorUrl: eV.imgPath + 'blank.gif',
      bounds: new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712)),
      imgExtend: 'png',
    },
    B_EARTH_MAP: {
      tileUrls: [''],
      tileSize: 256,
      baseUnits: 256,
      zoomLevelMin: 3,
      zoomLevelMax: 19,
      minDataZoom: 3,
      maxDataZoom: 19,
      minZoom: 3,
      maxZoom: 19,
      webgl: {minZoom: 3, maxZoom: 21},
      zoomLevelBase: 18,
      errorUrl: eV.imgPath + 'blank.gif',
      bounds: new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712)),
      imgExtend: 'png',
    },
  };
  var b1 = bC;
  function bO(hN, i, hJ, T, hI) {
    this.mgr = hN;
    this.position = hJ;
    this._cbks = [];
    this.name = hN.getTileName(T, hI, hN.map.config.style);
    this.info = T;
    this._transparentPng = hI.isTransparentPng();
    var hO = S('img');
    dg(hO);
    hO.galleryImg = false;
    var hM = hO.style;
    hM.position = 'absolute';
    hM.width = hN.tileSize + 'px';
    hM.height = hN.tileSize + 'px';
    hM.left = hJ[0] + 'px';
    hM.top = hJ[1] + 'px';
    this.img = hO;
    this.src = i;
    if (ab && hJ._offsetX === 0) {
      hM.opacity = 0;
      hM.willChange = 'opacity';
    }
    var hL = this;
    this.img.onload = function (hW) {
      if (!hL.mgr) {
        return;
      }
      var hR = hL.mgr;
      var hP = hR.bufferTiles;
      if (hR.bufferNumber > 0) {
        hP[hL.name] = hL;
        hP.push(hL.name);
      }
      var hT = hP.length - hR.bufferNumber;
      for (var hU = 0; hT > 0 && hU < hP.length; hU++) {
        var hV = hP[hU];
        if (!hR.mapTiles[hV]) {
          if (hP[hV]) {
            hP[hV].mgr = null;
            var hS = hP[hV].img;
            if (hS.parentNode) {
              fi(hS);
              hS.parentNode.removeChild(hS);
            }
            hS = null;
            hP[hV].img = null;
            hP[hV] = null;
            delete hP[hV];
          }
          hP.splice(hU, 1);
          hU--;
          hT--;
        }
      }
      hL.loaded = true;
      hR.imgNumber++;
      if (!g4(hL.img)) {
        if (hI.tilesDiv) {
          hI.tilesDiv.appendChild(hL.img);
        }
      }
      var hW = new a6('onimagechange');
      hW.action = 'show';
      hW.tile = hL.name;
      hR.map.dispatchEvent(hW);
      if (ab && hJ._offsetX === 0) {
        var hQ = new o({
          fps: 10,
          duration: 300,
          render: function (e) {
            if (hL.img && hL.img.style) {
              hL.img.style.opacity = e * 1;
            }
          },
          finish: function () {
            if (hL.img && hL.img.style) {
              delete hL.img.style.opacity;
              hL.img.style.willChange = 'auto';
            }
          },
        });
      }
      hL._callCbks();
    };
    this.img.onerror = function (hR) {
      hL.error = true;
      hL._callCbks();
      if (!hL.mgr) {
        return;
      }
      var hP = hL.mgr;
      var hQ = b1[hI.mapType];
      if (hQ.errorUrl) {
        hL.img.src = hQ.errorUrl;
      }
      if (!g4(hL.img)) {
        if (hI.tilesDiv) {
          hI.tilesDiv.appendChild(hL.img);
        }
      }
    };
    hO = null;
    var hK = new a6('onimagebefore');
    hK.tile = hL.name;
    hN.map.dispatchEvent(hK);
  }
  bO.prototype._addLoadCbk = function (e) {
    this._cbks.push(e);
  };
  bO.prototype._load = function () {
    if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && this._transparentPng) {
      this.img.src = eV.imgPath + 'blank.gif';
    } else {
      this.img.src = this.src;
    }
  };
  bO.prototype._callCbks = function () {
    var T = this;
    for (var e = 0; e < T._cbks.length; e++) {
      T._cbks[e]();
    }
    T._cbks.length = 0;
  };
  var ab = !C.Browser.ie || C.Browser.ie > 8;
  function e5(e) {
    this.tileLayers = [];
    this.map = e;
    this.bufferNumber = 300;
    this.mapTiles = [];
    this.bufferTiles = [];
    this.config = b1[this.map.mapType];
    this.errorUrl = this.config.errorUrl;
    this.tileSize = this.config.tileSize;
    this.baseUnits = this.config.baseUnits;
    this.baseZoomLevel = this.config.zoomLevelBase;
    this.tileURLs = this.config.tileUrls;
    this.imgNumber = 0;
    this.numLoading = 0;
    this.temp = {};
  }
  bj.register(function (i) {
    if (i._renderType === 'webgl') {
      return;
    }
    var e = (i.tileMgr = new e5(i));
    i.addEventListener('mousewheel', function (T) {
      e.mouseWheel(T);
    });
    i.addEventListener('dblclick', function (T) {
      e.dblClick(T);
    });
    i.addEventListener('rightdblclick', function (T) {
      e.dblClick(T);
    });
    i.addEventListener('minuspress', function (T) {
      e.keypress(T);
    });
    i.addEventListener('pluspress', function (T) {
      e.keypress(T);
    });
    i.addEventListener('load', function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e.loadTiles();
    });
    i.addEventListener('zoomstartcode', function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e._zoom(T);
    });
    i.addEventListener('moving', function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e.moveGridTiles();
    });
    i.addEventListener('resize', function (T) {
      if (this.mapType === BMAP_EARTH_MAP) {
        return;
      }
      e.resizeMap(T);
    });
    i.addEventListener('addtilelayer', function (T) {
      e.addTileLayer(T);
    });
    i.addEventListener('removetilelayer', function (T) {
      e.removeTileLayer(T);
    });
  });
  C.extend(e5.prototype, {
    addTileLayer: function (hI) {
      var T = this;
      var i = hI.target;
      T.tileLayers.push(i);
      if (T.map.loaded) {
        T.moveGridTiles();
      }
    },
    removeTileLayer: function (hP) {
      var hQ = this;
      var hN = hP.target;
      var hL = hN.mapType;
      var hK = hQ.mapTiles;
      var hS = hQ.bufferTiles;
      for (var T in hS) {
        var hI = T.split('-')[1];
        if (hI == hL) {
          delete hS[T];
        }
      }
      for (var T in hK) {
        var hI = T.split('-')[1];
        if (hI == hL) {
          delete hK[T];
        }
      }
      if (hQ.zoomsDiv && hQ.zoomsDiv.parentNode) {
        hQ.zoomsDiv.parentNode.removeChild(hQ.zoomsDiv);
        hQ.zoomsDiv.innerHTML = '';
      }
      var hJ = hQ.map;
      if (hJ.deepZoom) {
        var hR = hJ.deepZoom.preDeepZoomDiv;
        if (hR && hR.parentNode) {
          hR.parentNode.removeChild(hR);
        }
      }
      for (var hO = 0, hM = hQ.tileLayers.length; hO < hM; hO++) {
        if (hN == hQ.tileLayers[hO]) {
          hQ.tileLayers.splice(hO, 1);
        }
      }
      hQ.moveGridTiles();
    },
    hideDeepZoomDiv: function () {
      var i = this,
        T = i.map;
      if (T.deepZoom) {
        var e = T.deepZoom.preDeepZoomDiv;
        if (e && e.style.display != 'none') {
          e.style.display = 'none';
        }
      }
    },
    getTileLayer: function (hJ) {
      var hI = this;
      for (var T = 0, e = hI.tileLayers.length; T < e; T++) {
        tilelayer = hI.tileLayers[T];
        if (tilelayer.mapType == hJ) {
          return tilelayer;
        }
      }
      return null;
    },
    _zoom: function (T) {
      var i = this;
      if (i.zoomsDiv && i.zoomsDiv.style.display != 'none') {
        i.zoomsDiv.style.display = 'none';
      }
      i.hideDeepZoomDiv();
      i.moveGridTiles();
    },
    resizeMap: function (i) {
      this.loaded = false;
      this.moveGridTiles();
    },
    _checkTilesLoaded: function () {
      this.numLoading--;
      var e = this;
      if (this.numLoading == 0) {
        if (this._checkLoadedTimer) {
          clearTimeout(this._checkLoadedTimer);
          this._checkLoadedTimer = null;
        }
        this._checkLoadedTimer = setTimeout(function () {
          if (e.numLoading == 0) {
            e.map.dispatchEvent(new a6('ontilesloaded'));
          }
          e._checkLoadedTimer = null;
        }, 80);
      }
    },
    getTileName: function (e, T, i) {
      var hJ = T.mapType;
      var hI = 'TILE-' + hJ + '-' + i + '-' + e[0] + '-' + e[1] + '-' + e[2];
      return hI;
    },
    hideTile: function (hI, T) {
      var i = hI.img;
      if (g4(i)) {
        if (hI.loaded) {
          this.imgNumber--;
        }
        if (i.parentNode) {
          fi(i);
          i.parentNode.removeChild(i);
        }
      }
      var hJ = new a6('onimagechange');
      hJ.tile = this.getTileName(hI.info, T, this.map.config.style);
      hJ.action = 'hide';
      delete this.mapTiles[hI.name];
      if (!hI.loaded) {
        fi(i);
        hI._callCbks();
        i = null;
        hI.img = null;
        hI.mgr = null;
      }
      this.map.dispatchEvent(hJ);
    },
    loadTiles: function () {
      var i = this;
      if (C.Browser.ie) {
        try {
          document.execCommand('BackgroundImageCache', false, true);
        } catch (T) {}
      }
      if (this.zoomsDiv && this.zoomsDiv.style.display != 'none') {
        this.zoomsDiv.style.display = 'none';
      }
      i.hideDeepZoomDiv();
      i.moveGridTiles();
    },
    getCell: function (hJ, hI) {
      var e = this.baseUnits * Math.pow(2, this.baseZoomLevel - hI);
      var T = parseInt(hJ.lng / e);
      var i = parseInt(hJ.lat / e);
      return [T, i, e * (T + 0.5), e * (i + 0.5)];
    },
    moveGridTiles: function () {
      var hW = this.map,
        h5 = hW.getMapType(),
        h3 = this.tileLayers.length;
      var h1 = hW.centerPoint;
      if (h5 !== BMAP_SATELLITE_MAP) {
        h1 = dX.calcLoopCenterPoint(h1);
      }
      var hN = hW.width;
      var ij = hW.getZoomUnits();
      var h2 = ij * hN;
      var h7 = h1.lng - h2 / 2;
      var hS = h1.lng + h2 / 2;
      var hV = dX.isAddWidth(h7, hS);
      for (var h9 = 0; h9 < h3; h9++) {
        var hJ = this.tileLayers[h9];
        if (hJ.baseLayer || h3 == 1) {
          this.tilesDiv = hJ.tilesDiv;
        }
        var hX = b1[hJ.mapType];
        var hI = hW.zoomLevel;
        var ic = hW.getZoomUnits(hW.zoomLevel);
        var hR = hX.baseUnits * Math.pow(2, hX.zoomLevelBase - hI);
        var hP = Math.floor(h1.lng / hR);
        var h8 = Math.floor(h1.lat / hR);
        var hU = hX.tileSize;
        var hY = [hP, h8, ((h1.lng - hP * hR) / hR) * hU, ((h1.lat - h8 * hR) / hR) * hU];
        var hQ = hV ? (hW.width / 2) * 1.5 : hW.width / 2;
        var hT = hY[0] - Math.ceil((hQ - hY[2]) / hU);
        var ii = hY[1] - Math.ceil((hW.height / 2 - hY[3]) / hU);
        var ia = hY[0] + Math.ceil((hQ + hY[2]) / hU);
        var hZ = hY[1] + Math.ceil((hW.height / 2 + hY[3]) / hU);
        var hO = [];
        for (var ig = hT; ig < ia; ig++) {
          for (var ie = ii; ie < hZ; ie++) {
            hO.push([ig, ie]);
            var h4 = 'id_' + ig + '_' + ie + '_' + hI;
            hO[h4] = true;
          }
        }
        if (hJ.mapType !== BMAP_SATELLITE_MAP) {
          hO = dX.calcLoopTiles(hO, hI);
        }
        hO.sort(
          (function (i) {
            return function (id, il) {
              return (
                0.4 * Math.abs(id[0] - i[0]) +
                0.6 * Math.abs(id[1] - i[1]) -
                (0.4 * Math.abs(il[0] - i[0]) + 0.6 * Math.abs(il[1] - i[1]))
              );
            };
          })([hY[0], hY[1]]),
        );
        var T = this.mapTiles;
        var e = -h1.lng / ic;
        var ik = h1.lat / ic;
        var h6 = [e, ik];
        for (var h0 in T) {
          var hL = T[h0];
          var ih = hL.info;
          if (!ih) {
            continue;
          }
          var h4 = 'id_' + ih[0] + '_' + ih[1] + '_' + ih[2];
          if (!hO[h4]) {
            this.hideTile(hL, hJ);
          }
        }
        var hK = -hW.offsetX + hW.width / 2;
        var hM = -hW.offsetY + hW.height / 2;
        hJ.tilesDiv.style.left = Math.round(e + hK) - h6[0] + 'px';
        hJ.tilesDiv.style.top = Math.round(ik + hM) - h6[1] + 'px';
        this.numLoading += hO.length;
        for (var ig = 0, ib = hO.length; ig < ib; ig++) {
          this.showTile([hO[ig][0], hO[ig][1], hW.zoomLevel], h6, hJ, ig, hW.config.style);
        }
      }
    },
    showTile: function (hL, hK, hO, hT) {
      this.centerPos = hK;
      var hM = b1[hO.mapType];
      var hP = this.map.config.style;
      var hI = this.getTileName(hL, hO, hP);
      var hJ = hL[0] * hM.tileSize + hK[0];
      var T = (-1 - hL[1]) * hM.tileSize + hK[1];
      var hS = [hJ, T];
      var hN = null;
      if (hO.mapType !== BMAP_SATELLITE_MAP) {
        hN = dX.calcLoopParam(hL[0], hL[2]);
        var hR = hN.offsetX;
        hS[0] += hR;
        hS._offsetX = hR;
      }
      var hW = this;
      var hV = this.mapTiles[hI];
      if (hV) {
        hV.img.style.left = hS[0] + 'px';
        hV.img.style.top = hS[1] + 'px';
        if (hV.loaded) {
          this._checkTilesLoaded();
        } else {
          hV._addLoadCbk(function () {
            hW._checkTilesLoaded();
          });
        }
        return;
      }
      hV = this.bufferTiles[hI];
      if (hV) {
        this.imgNumber++;
        hO.tilesDiv.insertBefore(hV.img, hO.tilesDiv.lastChild);
        this.mapTiles[hI] = hV;
        hV.img.style.left = hS[0] + 'px';
        hV.img.style.top = hS[1] + 'px';
        if (hV.loaded) {
          this._checkTilesLoaded();
        } else {
          hV._addLoadCbk(function () {
            hW._checkTilesLoaded();
          });
        }
        var hU = new a6('onimagechange');
        hU.action = 'cache';
        hU.tile = this.getTileName(hL, hO, hP);
        this.map.dispatchEvent(hU);
      } else {
        var hQ = new eb(hL[0], hL[1]);
        if (hN) {
          hQ.x = hN.col;
        }
        var i = hO.getTilesUrl(hQ, hL[2]);
        hV = new bO(this, i, hS, hL, hO);
        hV._addLoadCbk(function () {
          hW._checkTilesLoaded();
        });
        hV._load();
        this.mapTiles[hI] = hV;
        bt(this.map);
      }
    },
    mouseWheel: function (hM) {
      var hL = this.map;
      if (!hL.config.enableWheelZoom) {
        return;
      }
      var hN = hL.zoomLevel + (hM.trend === true ? 1 : -1);
      var hJ = hL._getProperZoom(hN);
      if (hJ.exceeded) {
        var T = new a6('onzoomexceeded');
        T.targetZoom = hN;
        hL.dispatchEvent(T);
        return;
      }
      hL.dispatchEvent(new a6('onzoomstart'));
      hL.lastLevel = hL.zoomLevel;
      hL.zoomLevel = hJ.zoom;
      var i = hM.pixel;
      var hI = hL.pixelToPointIn(i, {zoom: hL.lastLevel});
      var hK = hL.getZoomUnits(hL.zoomLevel);
      hL.centerPoint = new hj(
        hI.lng + hK * (hL.width / 2 - i.x),
        hI.lat - hK * (hL.height / 2 - i.y),
      );
      this.zoom(i);
    },
    dblClick: function (T) {
      var i = this.map;
      if (!i.config.enableDblclickZoom) {
        return;
      }
      if (i.mapType === 'B_EARTH_MAP') {
        return;
      }
      if (i.currentOperation === dO.dragging) {
        return;
      }
      if (T.type == 'onrightdblclick') {
        i.zoomOut(T.point);
      } else {
        i.zoomIn(T.point);
      }
    },
    keypress: function (T) {
      var i = this.map;
      if (i.getMapType() === BMAP_EARTH_MAP) {
        return;
      }
      T.type == 'onpluspress' ? i.zoomIn() : i.zoomOut();
    },
  });
  function cL(hI) {
    this.opts = hI || {};
    this.copyright = this.opts.copyright || {};
    this.transparentPng = this.opts.transparentPng || false;
    this.png8 = this.opts.png8 || false;
    this.baseLayer = this.opts.baseLayer || false;
    this.dataType = this.opts.dataType || 1;
    this.isFlat = this.opts.isFlat === false ? false : true;
    this.showLabel = this.opts.showLabel === false ? false : true;
    var e = this.opts.tileTypeName || 'web';
    this.tileType = cF.getInstance(e);
    this.clipTile = this.opts.clipTile || false;
    this._type = 'tilelayer';
    var i = fW() ? 128 : 256;
    this.cacheSize = this.opts.cacheSize || i;
    var T = this;
    this.tileCache = new eR(this.cacheSize, {
      clearCallback: function (hJ) {
        if (hJ.label) {
          if (hJ.label.textImageBitmap) {
            hJ.label.textImageBitmap.close();
          }
          if (hJ.label.indoorTextImageBitmap) {
            hJ.label.indoorTextImageBitmap.close();
          }
        }
        T._removeIndoorData(hJ);
      },
    });
    this.scaler = a1() >= 1.5 ? 2 : 1;
    this.normalUdt = az('ditu', 'normal').udt;
    this.numLoading = 0;
    this.useThumbData = false;
    if (this.baseLayer) {
      this.useThumbData = true;
    }
    if (typeof this.opts.customLayer === 'boolean') {
      this.customLayer = this.opts.customLayer;
    } else {
      this.customLayer = true;
    }
  }
  cL.inherits(d5, 'TileLayer');
  C.extend(cL.prototype, {
    isTransparentPng: function () {
      return this.transparentPng;
    },
    getTilesUrl: function (hP, e) {
      var T = b1[this.mapType];
      if (typeof T != 'object') {
        return null;
      }
      var hI = hP.x;
      var hQ = hP.y;
      if (this.mapType !== BMAP_SATELLITE_MAP) {
        var hQ = dX.calcLoopParam(hQ, e).col;
      }
      var i = '';
      if (this.opts.tileUrlTemplate) {
        i = this.opts.tileUrlTemplate;
        i = i.replace(/\{X\}/, hQ);
        i = i.replace(/\{Y\}/, hI);
        i = i.replace(/\{Z\}/, e);
      } else {
        if (this.mapType == BMAPGL_NORMAL_MAP) {
          var hO = this.isCanvasMap ? 0 : 1;
          var hK = T.tileUrls[Math.abs(hQ + hI) % T.tileUrls.length];
          if (window.offLineIPAddress) {
            hK = window.offLineIPAddress + 'tile5/';
          }
          var hJ = this.map.config.style;
          i =
            hK +
            '?qt=vtile&x=' +
            hI +
            '&y=' +
            hQ +
            '&z=' +
            e +
            (hJ === 'default' ? '' : '&styleId=' + eV.mapStyleNameIdPair[hJ]) +
            '&styles=pl&udt=' +
            this.normalUdt +
            '&scaler=' +
            this.scaler +
            '&showtext=' +
            hO;
          i = i.replace(/-(\d+)/gi, 'M$1');
        }
        if (this.mapType == BMAP_SATELLITE_MAP) {
          var hL = az('ditu', 'satellite');
          var hN = hL.ver;
          var hM = hL.udt;
          i =
            T.tileUrls[Math.abs(hQ + hI) % T.tileUrls.length] +
            'u=x=' +
            hI +
            ';y=' +
            hQ +
            ';z=' +
            e +
            ';v=' +
            hN +
            ';type=sate&fm=46&udt=' +
            hM;
          i = i.replace(/-(\d+)/gi, 'M$1');
        }
      }
      return i;
    },
    initialize: function (hJ) {
      this.map = hJ;
      if (hJ._renderType === 'webgl') {
        var hI = null;
        if (this.customLayer !== false) {
          hI = this.getTilesUrl;
        }
        C.extend(this, fK);
        this.labelProcessor = new dd(this);
        this.callbackDataQueue = [];
        if (hI) {
          this.getTilesUrl = hI;
        }
        var e = this;
        hJ.on('indoor_data_refresh', function (hK) {
          if (!e.baseLayer) {
            return;
          }
          e._refreshIndoorData(hK.uid, hK.floor);
        });
        hJ.on('custom_labels_ready', function (hK) {
          if (!e.baseLayer) {
            return;
          }
          e._doWorkAfterLabelImageLoad(hK.virtualTile, hK.labelCanvas, null, hK.imgKey);
        });
        hJ.on('glmoduleloaded', function () {
          if (!e.baseLayer) {
            return;
          }
          e.updateAllIconsTextureCoords();
        });
      }
      if (!hJ.temp.layerZIndex) {
        hJ.temp.layerZIndex = 0;
      }
      this.zIndex = this.zIndex || 0;
      if (this.baseLayer) {
        this.zIndex = 0;
      }
      if (!hJ.temp.layid) {
        hJ.temp.layid = 0;
      }
      if (!this.opts.mapType) {
        this.mapType = 'BMAP_CUSTOM_LAYER_' + hJ.temp.layid;
        hJ.temp.layid++;
      } else {
        this.mapType = this.opts.mapType;
      }
      var i = b1[this.mapType];
      if (!i) {
        b1[this.mapType] = {
          tileUrls: [],
          tileSize: 256,
          baseUnits: 256,
          zoomLevelMin: 1,
          zoomLevelMax: 19,
          minZoom: 3,
          maxZoom: 19,
          minDataZoom: 3,
          maxDataZoom: 19,
          zoomLevelBase: 18,
          errorUrl: eV.imgPath + '/blank.gif',
          bounds: new dM(new hj(-21364736, -10616832), new hj(23855104, 15859712)),
          imgExtend: 'png',
        };
      }
      if (hJ._renderType !== 'webgl') {
        var T = dC(
          hJ.platform,
          '<div style="position:absolute;z-index:' + this.zIndex + '"></div>',
        );
        T.style.display = '';
        T.style.left = Math.ceil(-hJ.offsetX + hJ.width / 2) + 'px';
        T.style.top = Math.ceil(-hJ.offsetY + hJ.height / 2) + 'px';
        this.tilesDiv = T;
      }
      this.isCanvasMap = hJ.isCanvasMap();
      this.lastZoom = hJ.getZoom();
    },
    remove: function () {
      if (this.tilesDiv && this.tilesDiv.parentNode) {
        this.tilesDiv.innerHTML = '';
        this.tilesDiv.parentNode.removeChild(this.tilesDiv);
      }
      delete this.tilesDiv;
    },
    getCopyright: function () {
      return this.copyright;
    },
    getMapType: function () {
      return this.mapType;
    },
    setZIndex: function (e) {
      this.zIndex = e;
      if (this.tilesDiv) {
        this.tilesDiv.style.zIndex = e;
      }
    },
  });
  function cY(i, e, T) {
    this.bounds = i;
    this.content = e;
    this.mapType = T;
  }
  cY.inherits(d5, 'Copyright');
  var gf = {
    get: function (e) {
      if (!gf.singleton) {
        gf.singleton = new ah(e);
      }
      return gf.singleton;
    },
  };
  function ah(i) {
    this._map = i;
    this._tileMgr = i.tileMgr;
    this._animationDiv = null;
    this._preAnimationDiv = null;
    this._animation = null;
    this._baseLayerDiv = null;
    this._transformStyleName = a3.ifSupportCSS3('transform', true);
    this._transformOriginStyleName = a3.ifSupportCSS3('transformOrigin', true);
    this._preZoomTimes = 1;
    this._preRenderTick = 1;
    this._enableCanvas2dMap = !!(i.getRenderType() === 'canvas');
    this._isIE9 = !!(C.Browser.ie === 9);
    var e = this;
    i.addEventListener('maptypechange', function () {
      e.hide();
    });
    i.addEventListener('load', function () {
      e.hide();
    });
  }
  C.extend(ah.prototype, {
    prepareLayer: function () {
      var hI = this._map;
      var e = this._tileMgr;
      this._canvas2dMapMgr = hI.canvas2dMapMgr;
      var T = (this._baseLayerDiv = e.tilesDiv);
      if (!this._animationDiv) {
        var i = this._preAnimationDiv;
        if (i) {
          i.parentNode && i.parentNode.removeChild(i);
          this._preAnimationDiv = null;
        }
        this._preAnimationDiv = this._animationDiv = T.cloneNode(true);
        hI.platform.insertBefore(this._animationDiv, hI.platform.firstChild);
      }
      this.show();
    },
    prepareAniParam: function () {
      var hI = this._animationDiv;
      if (!hI) {
        return;
      }
      var e = hI.children.length;
      var T;
      this._zoomAniInfo = [];
      for (var hJ = e - 1; hJ > -1; hJ--) {
        var hK = {};
        T = hI.children[hJ].style;
        hK.top = parseInt(T.top, 10);
        hK.left = parseInt(T.left, 10);
        this._zoomAniInfo[hJ] = hK;
      }
    },
    prepareLabelLayer: function () {
      var hJ = this._map;
      if (this._enableCanvas2dMap && hJ.canvas2dMapMgr) {
        if (this.touchZoomLabelCanvas) {
          this.touchZoomLabelCanvas.parentNode.removeChild(this.touchZoomLabelCanvas);
        }
        var i = hJ.canvas2dMapMgr._labelCanvas;
        this.touchZoomLabelCanvas = i.cloneNode(false);
        var e = this.touchZoomLabelCanvas.getContext('2d');
        e.drawImage(i, 0, 0);
        hJ.platform.insertBefore(this.touchZoomLabelCanvas, hJ.platform.firstChild);
        var hI = parseInt(i.style.left, 10);
        var T = parseInt(i.style.top, 10);
        this.touchZoomLabelCanvas.style.zIndex = 9;
        this.touchZoomLabelCanvas.style[this._transformOriginStyleName] =
          this._fixPosition.x -
          (hJ.offsetX + hI) +
          'px ' +
          (this._fixPosition.y - (hJ.offsetY + T)) +
          'px';
        i.style.visibility = 'hidden';
      }
    },
    show: function () {
      if (this._animationDiv) {
        this._animationDiv.style.visibility = '';
      }
    },
    showLabel: function () {
      var i = this._map;
      if (this._enableCanvas2dMap && i.canvas2dMapMgr) {
        var e = i.canvas2dMapMgr._labelCanvas;
        if (e) {
          e.style.visibility = '';
        }
        if (this.touchZoomLabelCanvas) {
          this.touchZoomLabelCanvas.style.zIndex = -2;
          this.touchZoomLabelCanvas.style.visibility = 'hidden';
        }
      }
    },
    hide: function () {
      if (this._animationDiv) {
        this._animationDiv.style.visibility = 'hidden';
      }
      if (this._preAnimationDiv) {
        this._preAnimationDiv.style.visibility = 'hidden';
      }
    },
    hideNonAnimationLayers: function () {
      var hI = this._map;
      if (hI.getRenderType() === 'dom') {
        if (hI.overlayDiv) {
          hI.overlayDiv.style.visibility = 'hidden';
        }
        if (hI.overlayDivEx) {
          hI.overlayDivEx.style.visibility = 'hidden';
        }
      }
      var hK = hI.tileMgr.tileLayers;
      var hJ;
      for (var T = 0, e = hK.length; T < e; T++) {
        hJ = hK[T];
        hJ.tilesDiv.style.visibility = 'hidden';
      }
    },
    showNonAnimationLayers: function () {
      var hI = this._map;
      if (hI.getRenderType() === 'dom') {
        if (hI.overlayDiv) {
          hI.overlayDiv.style.visibility = '';
        }
        if (hI.overlayDivEx) {
          hI.overlayDivEx.style.visibility = '';
        }
      }
      var hK = hI.tileMgr.tileLayers;
      var hJ;
      for (var T = 0, e = hK.length; T < e; T++) {
        hJ = hK[T];
        hJ.tilesDiv.style.visibility = '';
      }
    },
    setFixPosition: function (e) {
      this._fixPosition = e;
    },
    setZoom: function (e, hO) {
      var hL = this._fixPosition;
      var hU = this._map;
      var hV = this._baseLayerDiv;
      var hM = {
        x: hL.x - parseInt(hV.style.left, 10) - hU.offsetX,
        y: hL.y - parseInt(hV.style.top, 10) - hU.offsetY,
      };
      var hI = this._animationDiv;
      if (!hI) {
        return;
      }
      var hS = hI.children.length;
      var hQ;
      var hT = this._transformStyleName;
      var hK = this._transformOriginStyleName;
      var hW = this;
      var hY;
      var hN;
      for (var hR = hS - 1; hR > -1; hR--) {
        var hP = this._zoomAniInfo[hR];
        hQ = hI.children[hR].style;
        var hJ = hP.left - hM.x;
        var T = hP.top - hM.y;
        hP.dx = hJ * e - hJ;
        hP.dy = T * e - T;
        hP.preDx = hJ - hJ;
        hP.preDy = T - T;
        hY = hP.preDx + (hP.dx - hP.preDx);
        hN = hP.preDy + (hP.dy - hP.preDy) + hO;
        hQ.left = hP.left + hY + 'px';
        hQ.top = hP.top + hN + 'px';
        hQ.width = hQ.height = 256 * e + 'px';
      }
      if (this._enableCanvas2dMap) {
        var hX = !hW._isIE9
          ? 'translate3d(0px, ' + hO + 'px, 0) scale(' + e + ')'
          : 'translate(0px, ' + hO + 'px) scale(' + e + ')';
        this.touchZoomLabelCanvas.style[hT] = hX;
      }
    },
    setZoomFinish: function () {
      this._animationDiv = null;
    },
    startAnimation: function (hL) {
      this.prepareLayer();
      this.hideNonAnimationLayers();
      var h4 = this._map;
      if (this.touchZoomLabelCanvas) {
        this.touchZoomLabelCanvas.style.display = 'none';
      }
      hL = hL || {};
      var h2 = hL.zoomCount || 0;
      var hQ = hL.fixPosition;
      var h0 = hL.fixMCPosition;
      var hO = hL.pixOffset;
      this._zoomCount = h2;
      var hI = h4.getZoom();
      var h3 = hI + h2;
      var e = h4.config.enableContinuousZoom;
      var hU = 0.5;
      var hP = 5;
      var T = Math.pow(2, h2);
      var h6 = this._baseLayerDiv;
      var hR = {
        x: hQ.x - parseInt(h6.style.left, 10) - h4.offsetX,
        y: hQ.y - parseInt(h6.style.top, 10) - h4.offsetY,
      };
      var hM = this._animationDiv;
      var hY = hM.children.length;
      var h8 = this._preZoomTimes;
      var h1 = [];
      var hZ = this._transformStyleName;
      var hN = this._transformOriginStyleName;
      for (var hX = hY - 1; hX > -1; hX--) {
        var hV = {};
        var hW = hM.children[hX].style;
        hV.top = parseInt(hW.top, 10);
        hV.left = parseInt(hW.left, 10);
        var hK = hV.left - hR.x;
        var hJ = hV.top - hR.y;
        hV.dx = hK * T - hK;
        hV.dy = hJ * T - hJ;
        hV.preDx = hK * h8 - hK;
        hV.preDy = hJ * h8 - hJ;
        h1[hX] = hV;
      }
      var h5 = this;
      var hT;
      var h7;
      var hS;
      this._zoomAni = new o({
        fps: 60,
        duration: e ? 500 : 1,
        transition: function (i) {
          i = (i * hP) / (2 * hU);
          return hP * i - hU * i * i;
        },
        render: function (ii) {
          ii = (ii * (4 * hU)) / (hP * hP);
          hT = h8 + ii * (T - h8);
          var ia = hI + eu(hT);
          var ig = null;
          var ie = 0;
          var ij = 0;
          if (hL.onAnimationBeforeLooping) {
            var ik = hL.onAnimationBeforeLooping(ii, ia);
            ig = ik.loopingCenter;
            ie = ik.yDiff;
            ij = ik.totalYDiff;
          }
          for (var ib = h1.length - 1; ib > -1; ib--) {
            var ic = h1[ib];
            if (hM.children[ib]) {
              var ih = hM.children[ib].style;
              h7 = ic.preDx + (ic.dx - ic.preDx) * ii - hO.width * ii;
              hS = ic.preDy + (ic.dy - ic.preDy) * ii - hO.height * ii + ie;
              ih.left = ic.left + h7 + 'px';
              ih.top = ic.top + hS + 'px';
              ih.height = ih.width = 256 * hT + 'px';
            }
          }
          var h9 = hO.width * ii;
          var id = hO.height * ii;
          if (h4.isRestrict) {
            h5._enableCanvas2dMap && h5._canvas2dMapMgr.clearLabel();
          } else {
            h5._enableCanvas2dMap &&
              h5._canvas2dMapMgr.drawLabel(hT, hQ, hI, h3, h2, ii, h9, id, ij, ie);
          }
          h5._preZoomTimes = hT;
          h5._preRenderTick = ii;
          hL.onAnimationLooping && hL.onAnimationLooping(ii, ia, ig);
        },
        finish: function () {
          h5._preZoomTimes = 1;
          h5._zoomAni = null;
          h5._animationDiv = null;
          hL.onAnimationFinish && hL.onAnimationFinish();
          h5.showNonAnimationLayers();
        },
      });
      return this._zoomAni;
    },
    stopAnimation: function () {
      if (this._zoomAni) {
        this._zoomAni.stop();
        this._zoomAni = null;
      }
    },
  });
  function c(e) {
    this._initVars(e);
    this._initColorCanvas();
    this._bindEvent(e);
  }
  C.extend(c.prototype, {
    _initVars: function (e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this._labelCtx = e._labelCtx;
      this.ratio = this._map.config.ratio;
      this.sizeRatio = this.ratio > 1 ? 2 : 1;
      this.RANK1 = 1000000;
      this.RANK2 = 2000000;
      this.RANK3 = 3000000;
      this.RANK4 = 4000000;
      this.RANK5 = 5000000;
    },
    _initColorCanvas: function () {
      var i = 256,
        T = S('canvas'),
        e = T.style;
      e.width = i + 'px';
      e.height = i + 'px';
      T.width = i;
      T.height = i;
      this._colorCvsSize = i;
      this._colorCvs = T;
      this._colorCtx = T.getContext('2d');
    },
    getLabelImageData: function (hV) {
      var hU = hV.textImg;
      var T = hV.textPos;
      var hS = this.ratio;
      var hQ = this.sizeRatio / hS;
      var hJ = this._colorCtx;
      var hN = this._colorCvsSize;
      hJ.clearRect(0, 0, hN, hN);
      var hP = 0;
      var e = 0;
      var hM = 0;
      for (var hO = 0; hO < T.length; hO++) {
        if (T[hO].width > hP) {
          hP = T[hO].width;
          e = hO;
          hM = T[hO].drawX;
        }
      }
      hP /= hQ;
      var hR = 0;
      for (var hO = 0, hL = T.length; hO < hL; hO++) {
        var hT = T[hO];
        var hW;
        if (hO === e) {
          hW = 0;
        } else {
          hW = hT.drawX - hM;
        }
        hJ.drawImage(
          hU,
          hT.srcX,
          hT.srcY,
          hT.width,
          hT.height,
          hW,
          hR,
          hT.width / hQ,
          hT.height / hQ,
        );
        if (hT.width / hQ > hP) {
          hP = hT.width / hQ;
        }
        hR += hT.height / hQ + 2 * hS;
      }
      var hI = hJ.getImageData(0, 0, hP, hR);
      var hK = hJ.getImageData(0, 0, hP, hR);
      return [hI, hK];
    },
    _bindEvent: function (i) {
      var e = this,
        T = i._map;
      T.addEventListener('onspotmouseover', function (hL) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return;
        }
        if (hL.spots.length > 0) {
          var hK = hL.spots[0].userdata.uid;
          var hJ = hL.spots[0].userdata.name;
          var hI = e.findLabelByUid(hK, hJ);
          hI && e._toHighLightColor(hI);
        }
      });
      T.addEventListener('onspotmouseout', function (hL) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return;
        }
        if (hL.spots.length > 0) {
          var hK = hL.spots[0].userdata.uid;
          var hJ = hL.spots[0].userdata.name;
          var hI = e.findLabelByUid(hK, hJ);
          hI && e._toDefaultColor(hI);
        }
      });
      T.addEventListener('onspotclick', function (hL) {
        if (!this.isCanvasMap() || !this.temp.isPermitSpotOver) {
          return;
        }
        if (hL.spots && hL.spots.length > 0) {
          var hK = hL.spots[0].userdata.uid;
          var hJ = hL.spots[0].userdata.name;
          var hI = e.findLabelByUid(hK, hJ);
          hI && e._changeBaseMapState(hI);
        } else {
          e._recoverNormalState();
        }
      });
      T.on('spot_status_reset', function () {
        e._recoverNormalState();
      });
      T.on('spot_highlight', function (hJ) {
        var hI = e.findLabelByUid(hJ.uid);
        hI && e._changeBaseMapState(hI);
      });
    },
    _getTextBound: function (hT) {
      if (!hT.textPos) {
        return null;
      }
      var hR = this.ratio;
      var hP = this.sizeRatio / hR;
      var T = hT.textPos;
      var hS = hT.baseDrawX;
      var hQ = hT.baseDrawY;
      var hN = hS * hR + (T[0].drawX - hS) / hP;
      var hL = hQ * hR + (T[0].drawY - hQ) / hP;
      var hJ = hN + T[0].width / hP;
      var e = hL + T[0].height / hP;
      for (var hO = 0, hM = T.length; hO < hM; hO++) {
        var hU = T[hO];
        var hK = hS * hR + (hU.drawX - hS) / hP;
        if (hK < hN) {
          hN = hK;
        }
        var hI = hQ * hR + (hU.drawY - hQ) / hP;
        if (hI < hL) {
          hL = hI;
        }
        if (hK + hU.width > hJ) {
          hJ = hK + hU.width;
        }
        if (hI + hU.height > e) {
          e = hI + hU.height;
        }
      }
      return [hN, hL, hJ, e];
    },
    _toHighLightColor: function (T) {
      if (T._tempRank && T._tempRank == this.RANK5) {
        return;
      }
      var hM = this._getTextBound(T);
      if (!hM) {
        return;
      }
      var hI = Math.round(hM[0]);
      var i = Math.round(hM[1]);
      var e = this.getLabelImageData(T);
      var hK = e[0];
      var hJ = e[1];
      var hL = this._canvas2dMapMgr.getFilterImageData(hK, this.RANK5);
      T._oldImgData = hJ;
      this._labelCtx.putImageData(hL, hI, i);
    },
    _toDefaultColor: function (e) {
      if (e._tempRank && e._tempRank == this.RANK5) {
        return;
      }
      if (e._oldImgData) {
        var i = this.sizeRatio;
        var T = this._getTextBound(e);
        if (!T) {
          return;
        }
        this._labelCtx.putImageData(e._oldImgData, Math.round(T[0]), Math.round(T[1]));
        e._oldImgData = null;
      }
    },
    _changeBaseMapState: function (hI) {
      var T = this._canvas2dMapMgr;
      var i = hI.guid;
      var e = hI.guidExt;
      var hJ = {guid: i, name: hI.name, guidExt: e};
      T._labelStrategy.setStrategyInfo(hJ);
      T._loadData();
    },
    _recoverNormalState: function () {
      var e = this._canvas2dMapMgr;
      e._labelStrategy.setStrategyInfo(null);
      e._loadData();
    },
    findLabelByUid: function (hK, hI) {
      var hM = this._canvas2dMapMgr,
        e = hM._computedLabel;
      for (var hJ = 0, T = e.length; hJ < T; hJ++) {
        var hL = e[hJ];
        if (!hM.isClickableLabel(hL)) {
          continue;
        }
        if (hK && hL.guid === hK) {
          return hL;
        }
        if (hI && hL.name === hI) {
          return hL;
        }
      }
      return null;
    },
  });
  function d4(e) {
    this._initVars(e);
  }
  C.extend(d4.prototype, {
    _initVars: function (e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this.ratio = this._map.config.ratio;
      this._strategyInfo = null;
      this.RANK1 = 1000000;
      this.RANK2 = 2000000;
      this.RANK3 = 3000000;
      this.RANK4 = 4000000;
      this.RANK5 = 5000000;
    },
    setStrategyInfo: function (e) {
      this._strategyInfo = e;
    },
    preComputeLabel: function (hO, iI, iq, h0, iC, iW) {
      var ij = [],
        hW = hO._centerX,
        hU = hO._centerY,
        iX = h0 * iC;
      var ix = this.ratio;
      var hN = this._map.getZoom();
      var id = 0;
      if (hN === 5) {
        id = 4;
      }
      if (hN === 8) {
        id = -6;
      }
      hO.sort(function (iY, i) {
        if (iY.x * iY.y < i.x * i.y) {
          return -1;
        } else {
          return 1;
        }
      });
      for (var ig = 0, ib = hO.length; ig < ib; ig++) {
        var iN = hO[ig],
          h6 = iN.x,
          h3 = iN.y,
          h1 = iN.z;
        var h8 = dX.calcLoopParam(h6, h1).offsetX;
        var iv = h6 * iX,
          iu = (h3 + 1) * iX,
          hI = (iv - hW) / h0 + iI / 2 + h8,
          T = (hU - iu) / h0 + iq / 2;
        for (var ic = 0, iR = iN.length; ic < iR; ic++) {
          var hQ = iN[ic],
            hX = undefined,
            hV = undefined,
            iP = undefined,
            iO = undefined;
          var iE = (hQ.baseDrawX = hI + hQ.baseX);
          var iD = (hQ.baseDrawY = T + hQ.baseY);
          if (hQ.type == 'fixed') {
            var io = hQ.iconPos,
              hZ = hQ.textPos,
              iT = hQ.textImg;
            if (io) {
              io.drawX = hI + io.destX;
              io.drawY = T + io.destY;
              hX = io.drawX;
              hV = io.drawY;
              iP = io.drawX + io.width;
              iO = io.drawY + io.height;
            }
            if (hZ && iT) {
              for (var iF = 0; iF < hZ.length; iF++) {
                var iS = hZ[iF];
                iS.drawX = hI + iS.destX;
                iS.drawY = T + iS.destY;
                if (!hX) {
                  hX = iS.drawX;
                  hV = iS.drawY;
                  iP = iS.drawX + iS.width;
                  iO = iS.drawY + iS.height;
                } else {
                  if (iS.drawX < hX) {
                    hX = iS.drawX;
                  }
                  if (iS.drawY < hV) {
                    hV = iS.drawY;
                  }
                  if (iS.drawX + iS.width > iP) {
                    iP = iS.drawX + iS.width;
                  }
                  if (iS.drawY + iS.height > iO) {
                    iO = iS.drawY + iS.height;
                  }
                }
              }
            }
          } else {
            hQ.tileX = hI;
            hQ.tileY = T;
            hX = hI + hQ.minXOriginal;
            hV = T + hQ.minYOriginal;
            iP = hI + hQ.maxXOriginal;
            iO = T + hQ.maxYOriginal;
          }
          if (hX != undefined) {
            var iH = iE + (hX - iE) / ix;
            var iG = iD + (hV - iD) / ix;
            var ih = iE + (iP - iE) / ix;
            var ie = iD + (iO - iD) / ix;
            hQ.minX = iH;
            hQ.minY = iG;
            hQ.maxX = ih;
            hQ.maxY = ie;
            var iL = (iH + ih) / 2,
              iK = (iG + ie) / 2,
              ir = hW + (iL - iI / 2) * h0,
              ip = hU + (iq / 2 - iK) * h0;
            hQ.geoX = ir;
            hQ.geoY = ip;
            ij.push(hQ);
          }
        }
      }
      if (iW) {
        for (var ig = 0, ib = iW.length; ig < ib; ig++) {
          var ia = iW[ig];
          var iA = ia[0];
          var hR = ia[1];
          var io = iA.iconPos;
          var hL = io.geoX;
          var hJ = io.geoY;
          var iE = (hL - hW) / h0 + iI / 2;
          var iD = (hU - hJ) / h0 + iq / 2;
          var hX = iE + io.destX;
          var hV = iD + io.destY;
          var iP = hX + io.width;
          var iO = hV + io.height;
          iA.textPos = iA.textPos || iA._textPos;
          var hZ = iA.textPos;
          var iJ = hZ[0];
          var h5 = iE + iJ.destX;
          var hT = iD + iJ.destY;
          if (hT < hV) {
            hV = hT;
          }
          if (h5 + iJ.width > iP) {
            iP = h5 + iJ.width;
          }
          if (hT + iJ.height > iO) {
            iO = hT + iJ.height;
          }
          if (hZ.length === 2) {
            var h4 = hZ[1];
            var h2 = iE + h4.destX;
            var hS = iD + h4.destY;
            if (hS < hV) {
              hV = hS;
            }
            if (h2 + h4.width > iP) {
              iP = h2 + h4.width;
            }
            if (hS + h4.height > iO) {
              iO = hS + h4.height;
            }
          }
          iA._tempBounds = [hX, hV, iP, iO];
          var io = hR.iconPos;
          var hL = io.geoX;
          var hJ = io.geoY;
          var iE = (hL - hW) / h0 + iI / 2;
          var iD = (hU - hJ) / h0 + iq / 2;
          var hX = iE + io.destX;
          var hV = iD + io.destY;
          var iP = hX + io.width;
          var iO = hV + io.height;
          hR.textPos = hR.textPos || hR._textPos;
          var hZ = hR.textPos;
          var iJ = hZ[0];
          var h5 = iE + iJ.destX;
          var hT = iD + iJ.destY;
          if (h5 < hX) {
            hX = h5;
          }
          if (hT < hV) {
            hV = hT;
          }
          if (hT + iJ.height > iO) {
            iO = hT + iJ.height;
          }
          if (hZ.length === 2) {
            var h4 = hZ[1];
            var h2 = iE + h4.destX;
            var hS = iD + h4.destY;
            if (h2 < hX) {
              hX = h2;
            }
            if (hS < hV) {
              hV = hS;
            }
            if (hS + h4.height > iO) {
              iO = hS + h4.height;
            }
          }
          hR._tempBounds = [hX, hV, iP, iO];
        }
        for (var ig = 0, ib = iW.length; ig < ib; ig++) {
          var ia = iW[ig];
          var iA = ia[0];
          var hR = ia[1];
          if (ig === 0 && hR.textPos) {
            hR._textPos = hR.textPos;
            delete hR.textPos;
          }
          var iM = iA;
          if (!iA.textPos && hR.textPos) {
            iM = hR;
          }
          var iQ = iM._tempBounds;
          for (ic = ig + 1; ic < ib; ic++) {
            var h9 = iW[ic];
            var ik = h9[0];
            var iV = h9[1];
            var hY = 0;
            var iU = ik._tempBounds;
            if (!(iQ[2] < iU[0] || iQ[0] > iU[2] || iQ[3] < iU[1] || iQ[1] > iU[3])) {
              hY++;
              if (ik.textPos) {
                ik._textPos = ik.textPos;
                delete ik.textPos;
              }
            }
            var iU = iV._tempBounds;
            if (!(iQ[2] < iU[0] || iQ[0] > iU[2] || iQ[3] < iU[1] || iQ[1] > iU[3])) {
              hY++;
              if (iV.textPos) {
                iV._textPos = iV.textPos;
                delete iV.textPos;
              }
            }
            if (hY >= 2) {
              if (iM.textPos) {
                iM._textPos = iM.textPos;
                delete iM.textPos;
              }
            }
          }
        }
        for (var ig = 0, ib = iW.length; ig < ib; ig++) {
          var ia = iW[ig];
          var iA = ia[0];
          var hR = ia[1];
          var il = iA;
          if (!iA.textPos && hR.textPos) {
            il = hR;
          }
          var io = il.iconPos;
          var hL = io.geoX;
          var hJ = io.geoY;
          var iE = (il.baseDrawX = (hL - hW) / h0 + iI / 2);
          var iD = (il.baseDrawY = (hU - hJ) / h0 + iq / 2);
          io.drawX = iE + io.destX;
          io.drawY = iD + io.destY;
          var hX = io.drawX;
          var hV = io.drawY;
          var iP = io.drawX + io.width;
          var iO = io.drawY + io.height;
          var hZ = il.textPos;
          if (hZ) {
            var iJ = hZ[0];
            iJ.drawX = iE + iJ.destX;
            iJ.drawY = iD + iJ.destY;
            if (iJ.drawX < hX) {
              hX = iJ.drawX;
            }
            if (iJ.drawY < hV) {
              hV = iJ.drawY;
            }
            if (iJ.drawX + iJ.width > iP) {
              iP = iJ.drawX + iJ.width;
            }
            if (iJ.drawY + iJ.height > iO) {
              iO = iJ.drawY + iJ.height;
            }
            if (hZ.length === 2) {
              var h4 = hZ[1];
              h4.drawX = iE + h4.destX;
              h4.drawY = iD + h4.destY;
              if (h4.drawX < hX) {
                hX = h4.drawX;
              }
              if (h4.drawY < hV) {
                hV = h4.drawY;
              }
              if (h4.drawX + h4.width > iP) {
                iP = h4.drawX + h4.width;
              }
              if (h4.drawY + h4.height > iO) {
                iO = h4.drawY + h4.height;
              }
            }
          }
          var iH = iE + (hX - iE) / ix;
          var iG = iD + (hV - iD) / ix;
          var ih = iE + (iP - iE) / ix;
          var ie = iD + (iO - iD) / ix;
          il.minX = iH;
          il.minY = iG;
          il.maxX = ih;
          il.maxY = ie;
          var iz = (iH + ih) / 2;
          var iy = (iG + ie) / 2;
          var hM = hW + (iz - iI / 2) * h0;
          var hK = hU + (iq / 2 - iy) * h0;
          il.geoX = hM;
          il.geoY = hK;
          ij.push(il);
        }
      }
      var iB = this._strategyInfo;
      if (iB) {
        var ii = iB.guid;
        var it = iB.name;
        var h7 = iB.guidExt;
        for (var ig = 0, ib = ij.length; ig < ib; ig++) {
          var hP = ij[ig];
          delete hP._tempRank;
          if (!this._canvas2dMapMgr.isClickableLabel(hP) || (h7 === 1 && !hP.guidExt)) {
            continue;
          }
          if ((ii && ii === hP.guid) || (it && it === hP.name)) {
            hP._tempRank = this.RANK5;
          }
        }
      } else {
        for (var ig = 0, ib = ij.length; ig < ib; ig++) {
          var hP = ij[ig];
          if (hP.type == 'line' || !hP.iconPos) {
            continue;
          }
          delete hP._tempRank;
        }
      }
      ij.sort(function (iZ, iY) {
        var i0 = iZ._tempRank ? iZ._tempRank : iZ.rank,
          i = iY._tempRank ? iY._tempRank : iY.rank;
        if (i0 === i) {
          return iZ.baseX - iY.baseX;
        }
        return i - i0;
      });
      for (var ig = 0, ib = ij.length; ig < ib; ig++) {
        var iM = ij[ig];
        iM.isDel = false;
        iM.isFadeout = false;
        iM._schedule = 0;
        iM._isIgnore = false;
        iM.arrIntersectIndex = [];
        for (ic = ig + 1; ic < ib; ic++) {
          var im = ij[ic];
          if (
            !(
              iM.maxX - id < im.minX ||
              iM.minX > im.maxX - id ||
              iM.maxY - id < im.minY ||
              iM.minY > im.maxY - id
            )
          ) {
            iM.arrIntersectIndex.push(ic);
          }
        }
      }
      for (var ig = 0, ib = ij.length; ig < ib; ig++) {
        var hP = ij[ig];
        if (hP.isDel == false) {
          var e = hP.arrIntersectIndex;
          for (var ic = 0, iR = e.length; ic < iR; ic++) {
            var iw = ij[e[ic]];
            iw.isDel = true;
            if (iw.guidExt === 1) {
              iw.isDel = false;
            }
          }
        }
      }
      return ij;
    },
  });
  function ag(e) {
    this._map = e;
    this._initCanvas();
    this._initVars();
    this._bindEvent();
    this._tileType = cF.getInstance('na');
  }
  bj.register(function (i) {
    if (i.getRenderType() === 'canvas') {
      var e = i.config.style;
      if (bj['FeatureStyle' + e]) {
        i.canvas2dMapMgr = new ag(i);
      } else {
        i.loadMapStyleFiles(function () {
          i.canvas2dMapMgr = new ag(i);
          i.canvas2dMapMgr._loadData();
        });
      }
    }
  });
  C.extend(ag.prototype, {
    _initCanvas: function () {
      var hL = this._map,
        hJ = hL.getSize(),
        hI = hJ.width,
        i = hJ.height,
        e = hL.platform,
        hM = S('canvas'),
        hK = hM.style;
      var T = (this.ratio = hL.config.ratio);
      this._width = hI;
      this._height = i;
      hK.cssText =
        'position: absolute;left:0;top:0;width:' + hI + 'px;height:' + i + 'px;z-index:100;';
      hM.width = hI * T;
      hM.height = i * T;
      this._labelCanvas = hM;
      this._labelCtx = hM.getContext('2d');
      e.appendChild(hM);
    },
    _initVars: function () {
      var e = az('ditu', 'normal');
      this._udt = e.udt;
      this._version = e.ver;
      this._labelDataUrls = b1.B_NORMAL_MAP.vectorTileUrls;
      this._style = bj['FeatureStyle' + this._map.config.style];
      this._labelCount = 0;
      this._vectorDrawLib = new aV(this);
      this._cache = {maxNum: 500, delNum: 50, arrCache: []};
      this._computedLabel = null;
      this._spotData = null;
      this._labelStrategy = new d4(this);
      this._labelClick = new c(this);
      this._biz = new gE(this);
      this._map.temp.isPermitSpotOver = true;
      this.labelStyleParam = 'pl';
      if (this._map.getMapType() === BMAP_SATELLITE_MAP) {
        this.labelStyleParam = 'sl';
      }
      this.statRequestCount = 0;
      this.statResponseCount = 0;
    },
    _resizeHandler: function (hK) {
      var hM = this,
        i = hM._map,
        hJ = i.getSize(),
        T = hJ.width,
        hO = hJ.height;
      var hL = this.ratio;
      var hP = this._labelCanvas,
        hI = hP.style;
      hI.width = T + 'px';
      hI.height = hO + 'px';
      hP.width = T * hL;
      hP.height = hO * hL;
      hM._width = T;
      hM._height = hO;
      var hN = true;
      hM._loadData(hN);
    },
    _bindEvent: function () {
      var e = this,
        i = e._map;
      i.addEventListener('load', function (T) {
        e.clearLabel();
        e._loadData();
      });
      i.addEventListener('zoomend', function (T) {
        if (!T.notClearLabel) {
          e.clearLabel();
        }
        e._loadData();
      });
      i.addEventListener('moveend', function (T) {
        e._loadData();
      });
      i.addEventListener('resize', function (T) {
        e._resizeHandler(T);
      });
      i.addEventListener('maptypechange', function (T) {
        if (T.mapType === BMAP_EARTH_MAP) {
          e.hideLabelCanvas();
        } else {
          e.showLabelCanvas();
          if (T.mapType === BMAPGL_NORMAL_MAP) {
            e.labelStyleParam = 'pl';
          } else {
            if (T.mapType === BMAP_SATELLITE_MAP) {
              e.labelStyleParam = 'sl';
            }
          }
          e._loadData();
        }
      });
      i.addEventListener('streetlayer_show', function (T) {
        if (this.isCanvasMap()) {
          e.showLabelCanvas();
        }
      });
      i.addEventListener('streetlayer_hide', function (T) {
        if (this.isCanvasMap()) {
          e.hideLabelCanvas();
        }
      });
      i.addEventListener('loadbizdata', function (hI) {
        var T = hI.data;
        e._biz.proecessBizData(T, function () {
          e.updateLabel();
        });
      });
      i.addEventListener('unloadbizdata', function (T) {
        e._biz.clearBizData();
        e.updateLabel();
      });
      e.isDrawText = false;
      setTimeout(function () {
        if (!e.isDrawText) {
          i.dispatchEvent(new a6('onmapwhitescreen'));
        }
      }, 10000);
    },
    getStyle: function () {
      return this._style;
    },
    _getZoomUnits: function (e) {
      return Math.pow(2, 18 - e);
    },
    _createCacheForm: function (T, hM, hL, i) {
      var hK = this;
      var e = hK._cache;
      var hI = e.arrCache;
      var hN = this._getLabelId(T, hM, hL, i);
      var hJ = {id: hN, updateLabelCounter: 0};
      hI.push(hJ);
      hI[hN] = hJ;
      return hJ;
    },
    _getLabelId: function (i, hI, T, e) {
      return '_' + i + '_' + hI + '_' + T + '_' + e + '_' + this.labelStyleParam;
    },
    _getCache: function (i, hI, T, e) {
      return this._cache.arrCache[this._getLabelId(i, hI, T, e)];
    },
    _setCacheValue: function (hJ, hW, hU, hI, hP) {
      var hR = this;
      var e = hR._cache;
      var hL = e.arrCache;
      var hN = e.maxNum;
      var hK = e.delNum;
      var hV = this._getLabelId(hJ, hW, hU, hI);
      var hQ = hL[hV];
      if (hP) {
        hQ.lb = hP;
      }
      if (hL.length > hN) {
        var T = hL.splice(0, hK);
        for (var hO = 0, hM = T.length; hO < hM; hO++) {
          var hS = T[hO],
            hT = hS.id;
          if (hL[hT].lb) {
            hL[hT].lb = null;
          }
          hL[hT] = null;
          delete hL[hT];
        }
        T = null;
      }
    },
    _loadData: function (hU) {
      var ie = this._map;
      if (!ie.isCanvasMap()) {
        return;
      }
      var hN = ie.getCenterIn();
      var ic = dX.calcLoopCenterPoint(hN);
      var hM = this._tileType;
      var hP = this._width / 2;
      var h1 = this._height;
      var h2 = ie.getZoom();
      var hY = hM.getDataZoom(h2);
      var hR = ie.getZoomUnits(h2);
      var hX = hR * hP;
      var ib = ic.lng - hX;
      var ia = ic.lng + hX;
      var hV = dX.isAddWidth(ib, ia);
      hP = hV ? hP * 1.5 : hP;
      var hW = hM.getTileSize(h2);
      var hJ = hM.getMercatorSize(h2, hY);
      var hQ = Math.floor(ic.lng / hJ);
      var hS = Math.floor(ic.lat / hJ);
      var hK = [hQ, hS, ((ic.lng - hQ * hJ) / hJ) * hW, ((ic.lat - hS * hJ) / hJ) * hW];
      var h4 = hK[0] - Math.ceil((hP - hK[2]) / hW);
      var h8 = hK[1] - Math.ceil((h1 / 2 - hK[3]) / hW);
      var h0 = hK[0] + Math.ceil((hP + hK[2]) / hW);
      var h5 = hK[1] + Math.ceil((h1 / 2 + hK[3]) / hW);
      ie.temp.isPermitSpotOver = false;
      var e = [];
      for (var h7 = h4; h7 < h0; h7++) {
        for (var h6 = h8; h6 < h5; h6++) {
          e.push([h7, h6, hY]);
          var hZ = 'id_' + h7 + '_' + h6 + '_' + h2;
          e[hZ] = true;
        }
      }
      e._zoom = hY;
      e = dX.calcLoopTiles(e, h2);
      e.sort(
        (function (i) {
          return function (id, ih) {
            return (
              0.4 * Math.abs(id[0] - i[0]) +
              0.6 * Math.abs(id[1] - i[1]) -
              (0.4 * Math.abs(ih[0] - i[0]) + 0.6 * Math.abs(ih[1] - i[1]))
            );
          };
        })([hK[0], hK[1]]),
      );
      var hT = this._cache.arrCache;
      this._curViewLabels = [];
      var hI = 'viewKey_' + Math.floor(hN.lng) + '_' + Math.floor(hN.lat) + '_' + h2;
      this.statRequestCount = 0;
      this.statResponseCount = 0;
      this._labelCount += e.length;
      var hO = h2;
      for (var h7 = 0, h3 = e.length; h7 < h3; h7++) {
        var hQ = e[h7][0];
        var hS = e[h7][1];
        var T = e[h7][2];
        var hL = this._getLabelId(hQ, hS, T, hO);
        var h9 = hT[hL];
        if (!h9) {
          h9 = this._createCacheForm(hQ, hS, T, hO);
        }
        if (typeof h9.lb === 'undefined') {
          h9.lb = null;
          this._loadLabelData(hQ, hS, T, hO, hW, hI);
          this.statRequestCount++;
        } else {
          if (h9.lb) {
            this._curViewLabels.push(h9.lb);
            this._labelCount--;
          } else {
            if (hU) {
              this._loadLabelData(hQ, hS, T, hO, hW, hI);
            }
            h9.updateLabelCounter++;
          }
        }
      }
      if (this._labelCount === 0) {
        this.updateLabel();
      }
      var ig = this;
      if (ig.errorTimer) {
        clearTimeout(ig.errorTimer);
      }
      ig.errorTimer = setTimeout(function () {
        if (ig._labelCount !== 0) {
          ig._labelCount = 0;
          ig.updateLabel();
        }
        var ih = new a6('onloaddatatimeout');
        var ii = 0;
        var id = 0;
        var ij = 0;
        var i = 0;
        if (ig.statRequestCount === ig.statResponseCount) {
          ii = 1;
        } else {
          id = 1;
        }
        if (id === 1) {
          i = ig.statRequestCount - ig.statResponseCount;
          ij = ig.statResponseCount;
        }
        ih.noTimeoutCount = ii;
        ih.timeoutCount = id;
        ih.timeoutNoLoaded = i;
        ih.timeoutLoaded = ij;
        ig._map.dispatchEvent(ih);
      }, 500);
    },
    clearLabel: function () {
      var e = this._width;
      var T = this._height;
      var i = this.ratio;
      this._labelCtx.clearRect(0, 0, e * i, T * i);
    },
    updateLabel: function () {
      var i = this._map;
      var e = i.getCenterIn();
      var hI = this._width;
      var hL = this._height;
      var hO = i.getZoom();
      var hN = this._tileType.getTileSize(hO);
      var hM = this._getZoomUnits(hO);
      var T = this._labelCtx;
      this._labelCanvas.style.left = -i.offsetX + 'px';
      this._labelCanvas.style.top = -i.offsetY + 'px';
      var hK = this._curViewLabels;
      hK._centerX = e.lng;
      hK._centerY = e.lat;
      var hJ = this._biz.bizLabels;
      this._computedLabel = this._labelStrategy.preComputeLabel(hK, hI, hL, hM, hN, hJ);
      this._computedLabel._zoom = hO;
      this.clearLabel();
      this._vectorDrawLib.drawIconAndText(T, this._computedLabel, hO);
      this._addSpotData();
      i.temp.isPermitSpotOver = true;
      if (hK.length > 0) {
        this.isDrawText = true;
      }
    },
    _loadLabelData: function (hR, hQ, hP, T, hS, e) {
      var hK = hR.toString();
      var hI = hQ.toString();
      var hM = 'cbk_' + hK.replace('-', '_') + '_' + hI.replace('-', '__') + '_' + Math.floor(hP);
      var hW = es + '.' + hM;
      var hV = this._labelDataUrls;
      var hO = Math.abs(hR + hQ) % hV.length;
      var h1 = hV[hO];
      if (window.offLineIPAddress) {
        h1 = window.offLineIPAddress + 'pvd/';
      }
      var i = this.labelStyleParam;
      var hU = '?qt=vtile';
      var hX = '';
      if (this._map.config.style !== 'default') {
        hX = '&styleId=' + eV.mapStyleNameIdPair[this._map.config.style];
      }
      var hT =
        'x={x}&y={y}&z={z}&udt={udt}&v={v}&styles={styles}' +
        hX +
        '&textonly=1&textimg=1&scaler={scaler}&fn=' +
        encodeURIComponent(hW);
      var hY = dX.calcLoopParam(hR, hP).col;
      var hN = this.ratio > 1 ? 2 : 1;
      var hL = hT
        .replace(/{x}/, hY)
        .replace(/{y}/, hQ)
        .replace(/{z}/, Math.floor(hP))
        .replace(/{styles}/, i)
        .replace(/{udt}/, this._udt)
        .replace(/{v}/, this._version)
        .replace(/{scaler}/, hN);
      var hJ = h1 + hU + '&param=' + window.encodeURIComponent(gc(hL));
      var h0 = this;
      var hZ = h0._map;
      bj[hM] = function (h2) {
        h0._vectorDrawLib.parseLabelData(h2, hR, hQ, hP, T, hS, function (h7) {
          var h4 = hZ.getCenterIn();
          var h8 = hZ.getZoom();
          var ia = 'viewKey_' + Math.floor(h4.lng) + '_' + Math.floor(h4.lat) + '_' + h8;
          h0._labelCount--;
          var ib = h0._getCache(hR, hQ, hP, T).updateLabelCounter;
          h0._labelCount -= ib;
          var h5 = h0._curViewLabels;
          if (ia === e || (h0._labelCount < 0 && h8 === hP)) {
            h5.push(h7);
          }
          if (ia === e) {
            h0.statResponseCount++;
          }
          if (h0._labelCount <= 0) {
            var h3 = new Date().getTime();
            h0.updateLabel();
            var h6 = new Date().getTime();
            var h9 = new a6('oncanvasmaploaded');
            h9.drawTime = h6 - h3;
            if (h0.statResponseCount === h0.statRequestCount) {
              h9.isAllLoadedDrawing = true;
            }
            hZ.dispatchEvent(h9);
          }
          h0._setCacheValue(hR, hQ, hP, T, h7);
          delete bj[hM];
        });
      };
      hd.load(hJ);
    },
    drawLabel: function (T, hI, hP, i, hN, hJ, e, hK, hO, hL) {
      var hM = this;
      if (!hM._computedLabel) {
        return;
      }
      if (hM._computedLabel._zoom !== hP) {
        hM.clearLabel();
        return;
      }
      hM._map.temp.isPermitSpotOver = false;
      hM.clearLabel();
      hM._vectorDrawLib.zoomingIconAndText(
        this._labelCtx,
        hM._computedLabel,
        T,
        hI,
        i,
        hN,
        hJ,
        e,
        hK,
        hO,
        hL,
      );
    },
    _addSpotData: function () {
      this._spotData = [];
      var hP = this._map.getZoom();
      for (var hK = 0, hJ = this._computedLabel.length; hK < hJ; hK++) {
        var hM = this._computedLabel[hK];
        if (!this.isClickableLabel(hM) || (hM.guidExt === 1 && hM.startScale > hP)) {
          continue;
        }
        var hL = [];
        hL[0] = (hM.minX - hM.maxX) / 2;
        hL[1] = (hM.minY - hM.maxY) / 2;
        hL[2] = (hM.maxX - hM.minX) / 2;
        hL[3] = (hM.maxY - hM.minY) / 2;
        var hI = null;
        if (hM.iconPos) {
          hI = new hj(hM.iconPos.geoX, hM.iconPos.geoY);
        }
        var T = hM.name ? hM.name.replace('\\\\', '<br>') : '';
        if (hM.iconPos && hM.iconPos.iconType.indexOf('ditie') > -1 && this._map.getZoom() > 14) {
          T = '';
        }
        var hO = {
          n: T,
          pt: new hj(hM.geoX, hM.geoY),
          userdata: {
            iconPoint: hI,
            uid: hM.guid,
            name: T,
            type: hM.iconPos ? hM.iconPos.iconType : '',
            iconImg: hM.iconImg,
            mapPoi: true,
            adver_log: hM.adver_log || '',
          },
          bd: hL,
          tag: 'MAP_SPOT_INFO',
        };
        this._spotData.push(hO);
      }
      var hN = new a6('onspotsdataready');
      hN.spots = this._spotData;
      this._map._spotDataOnCanvas = this._spotData;
      this._map.dispatchEvent(hN);
    },
    isClickableLabel: function (e) {
      if (e.isDel || (!e.guid && !e.name)) {
        return false;
      }
      return true;
    },
    getFilterImageData: function (T, hL) {
      var hM = T.data,
        hK = this._labelStrategy,
        hL = parseInt(hL);
      for (var hN = 0, hJ = hM.length; hN < hJ; hN += 4) {
        var e = hM[hN],
          hO = hM[hN + 1],
          hP = hM[hN + 2],
          hQ = hM[hN + 3];
        if (hQ === 0) {
          continue;
        }
        var hI = Math.round((e + hO + hP) / 3);
        var hR = hI - 90;
        hR = hR < 0 ? 0 : hR;
        if (hL === hK.RANK5) {
          hM[hN] = 51 + hR * 1.3;
          hM[hN + 1] = 133 + hR * 0.8;
          hM[hN + 2] = 255;
        }
      }
      return T;
    },
    showLabelCanvas: function () {
      this._labelCanvas.style.visibility = '';
    },
    hideLabelCanvas: function () {
      this._labelCanvas.style.visibility = 'hidden';
    },
  });
  var b4 = 5;
  var dR = 4;
  var hh = 3;
  var e7 = 2;
  var hB = 1;
  var dU = 0;
  var hE = 3;
  var g7 = 5;
  var I = {
    3: {start: 3, base: 3},
    4: {start: 4, base: 5},
    5: {start: 4, base: 5},
    6: {start: 6, base: 7},
    7: {start: 6, base: 7},
    8: {start: 8, base: 9},
    9: {start: 8, base: 9},
    10: {start: 10, base: 10},
    11: {start: 11, base: 12},
    12: {start: 11, base: 12},
    13: {start: 11, base: 12},
    14: {start: 14, base: 15},
    15: {start: 14, base: 15},
    16: {start: 16, base: 17},
    17: {start: 16, base: 17},
    18: {start: 18, base: 19},
    19: {start: 18, base: 19},
    20: {start: 18, base: 19},
    21: {start: 18, base: 19},
  };
  function aV(hI) {
    this._canvas2dMapMgr = hI;
    var i = (this.ratio = hI._map.config.ratio);
    this._featureStyle = null;
    this._map = hI._map;
    var T = fr();
    var e = 'udt=' + T.udt + '&v=' + T.ver;
    this.sizeRatio = this.ratio > 1 ? 2 : 1;
    this._binaryCache = {};
    this._iconCache = {};
    this._initColorCanvas();
  }
  C.extend(aV.prototype, {
    _initColorCanvas: function () {
      var i = 256,
        T = S('canvas'),
        e = T.style;
      e.width = i + 'px';
      e.height = i + 'px';
      T.width = i;
      T.height = i;
      this._colorCvs = T;
      this._colorCtx = T.getContext('2d');
    },
    parseLabelData: function (i, hK, hJ, hI, e, hN, hM) {
      if (!this._featureStyle) {
        this._featureStyle = this._canvas2dMapMgr.getStyle();
      }
      if (!i || !i[0]) {
        hM([]);
        return;
      }
      var hL = this._map.getZoomUnits();
      var T = this;
      this.loadTextPng(i, hN, hK, hJ, hI, e, hL, hM);
    },
    loadTextPng: function (hZ, hQ, hO, hN, hL, i, hJ, hI) {
      var hY = this;
      var e = hZ[5];
      var hX = this._map;
      var hU = hX.getZoom();
      var T = hX.getSize();
      var hV = T.width;
      var hT = T.height;
      var hW = hX.getCenterIn();
      var hM = hW.lng;
      var hK = hW.lat;
      var hS = hO * hQ * hJ;
      var hR = (hN + 1) * hQ * hJ;
      if (e) {
        var hP = new Image();
        hP.onload = function () {
          hY.calcIconAndTextInfo(hZ, hP, hQ, hO, hN, hL, i, hJ, hS, hR, hI);
          delete this.onload;
        };
        hP.src = e;
      } else {
        setTimeout(function () {
          hY.calcIconAndTextInfo(hZ, null, hQ, hO, hN, hL, i, hJ, hS, hR, hI);
        }, 1);
      }
    },
    calcIconAndTextInfo: function (h1, hS, hT, hR, hO, hM, hI, hK, hV, hU, hJ) {
      var h0 = this;
      var hZ = h0._featureStyle;
      var hP = [];
      hP.x = hR;
      hP.y = hO;
      hP.z = hM;
      var hQ = h0._canvas2dMapMgr,
        T = hR * hK * hT,
        hY = (hO + 1) * hK * hT,
        hL = {tileLeft: T, tileTop: hY, zoomUnits: hK};
      var e = [];
      if (h1[0]) {
        for (var hW = 0; hW < h1[0].length; hW++) {
          if (h1[0][hW][0] === hE) {
            e.push(h1[0][hW]);
          }
        }
      }
      var hN = h1[2] || [];
      for (var hW = 0; hW < e.length; hW++) {
        this._getFixedLabelInfo(e[hW], hS, hI, hK, hT, hV, hU, hP);
      }
      var hX = Math.pow(2, hI - hM);
      for (hW = 0; hW < hN.length; hW++) {
        this._getLineLabelInfo(hN[hW], hS, hM, hI, hK, hT, hV, hU, hX, hP);
      }
      hJ(hP);
    },
    _getFixedLabelInfo: function (hS, hW, hJ, hN, hX, h0, hZ, h2) {
      var hR = hS[1];
      if (!hR) {
        return;
      }
      var h4 = this._map.getZoom();
      var ic = this._map.config.style;
      var id = this._featureStyle;
      var hO = hJ;
      if (hO === 9) {
        hO = 8;
      }
      for (var h9 = 0; h9 < hR.length; h9++) {
        var ie = hR[h9];
        var e = ie[0];
        var hI = ed.getStyleFromCache(ic, e, 'point', hO, id);
        var h8 = ed.getStyleFromCache(ic, e, 'pointText', hO, id);
        if ((!h8 || h8.length === 0) && (!hI || hI.length === 0)) {
          if (hO === 5) {
            var hM = ie[1];
            if (!hM) {
              continue;
            }
            for (var h5 = 0; h5 < hM.length; h5++) {
              var h3 = hM[h5][4];
              if (h3 && h3[7] === '北京') {
                hI = ed.getStyleFromCache(ic, e, 'point', 6, id);
                h8 = ed.getStyleFromCache(ic, e, 'pointText', 6, id);
                break;
              } else {
                continue;
              }
            }
          } else {
            continue;
          }
        }
        var hM = ie[1];
        if (!hM) {
          continue;
        }
        var ia = null;
        var hP = 1;
        var T = 0;
        var hV = 0;
        if (hI && hI[0]) {
          hI = hI[0];
          ia = hI.icon;
          hP = hI.zoom ? hI.zoom / 100 : 1;
        } else {
          hI = null;
        }
        for (var h5 = 0; h5 < hM.length; h5++) {
          var h3 = hM[h5][4];
          if (!h3) {
            continue;
          }
          var h7 = h3[2];
          if (!this._isVisible(h7, h4)) {
            continue;
          }
          var hQ = h3[12];
          if (h8 && h8.length > 0 && !hQ) {
            continue;
          }
          var hU = Math.round(h3[0] / 100);
          var hT = Math.round(h3[1] / 100);
          var h6 = {lng: h0 + hU, lat: hZ - (hX * hN - hT)};
          var hL = hU / hN;
          var hK = hX - hT / hN;
          var hY = h3[7] || '';
          var ib = h3[5];
          var h1 = {
            type: 'fixed',
            name: hY,
            textImg: hW,
            rank: h3[4],
            baseX: hL,
            baseY: hK,
            iconPos: null,
            textPos: null,
            guid: h3[3] || '',
            tracer: h7,
            direction: ib,
            startScale: 3,
          };
          if (((ib !== dR && hQ) || !hQ) && ia !== null) {
            h1.iconPos = this._getIconPosition(ia, hP, hL, hK, h6);
            if (h1.iconPos) {
              T = h1.iconPos.width;
              hV = h1.iconPos.height;
            }
          }
          if (T === 0) {
            h1.direction = dR;
          }
          if (hQ) {
            h1.textPos = this._getTextDrawData(h3, hL, hK, T, hV);
          }
          if (h1.textPos || h1.iconPos) {
            h2.push(h1);
          }
        }
      }
    },
    _isVisible: function (e, i) {
      var hI;
      if (!this._binaryCache[e]) {
        hI = e.toString(2);
        if (hI.length < 8) {
          hI = new Array(8 - hI.length + 1).join('0') + hI;
        }
        this._binaryCache[e] = hI;
      }
      hI = this._binaryCache[e];
      var T = I[i].start;
      return hI[i - T] === '1';
    },
    _getIconPosition: function (hM, hK, T, i, e) {
      var hI = this._map.config.style;
      var hN = bj['iconSetInfo' + hI][hM];
      if (!hN) {
        if (hM.charCodeAt(0) >= 48 && hM.charCodeAt(0) <= 57) {
          hN = bj['iconSetInfo' + hI]['_' + hM];
        }
      }
      if (!hN) {
        return null;
      }
      var hJ = hN[0];
      var hL = hN[1];
      hJ = hJ * hK;
      hL = hL * hK;
      return {
        srcX: 0,
        srcY: 0,
        destX: T - hJ / 2,
        destY: i - hL / 2,
        width: hJ,
        height: hL,
        geoX: e.lng,
        geoY: e.lat,
        mcPt: e,
        iconType: hM,
      };
    },
    _getTextDrawData: function (hT, hS, hR, hI, hP) {
      var hY = hT[5];
      if (typeof hY !== 'number') {
        hY = 0;
      }
      var hN = this.ratio;
      var hM = hN / 2;
      hI *= hM;
      hP *= hM;
      var hO = hT[12];
      var hJ = hO.length;
      var h1 = 0;
      var h0 = 0;
      var hX = [];
      var hW = 0;
      var hZ = 0;
      for (var hV = 0; hV < hJ; hV++) {
        hZ += Math.round(hO[hV][3]);
      }
      for (var hV = 0; hV < hJ; hV++) {
        var hL = hO[hV];
        var hK = hL[0];
        var i = hL[1];
        var T = hL[2];
        var e = hL[3];
        var h2 = 2 * hN;
        var hU = 0;
        if (hI !== 0) {
          hU = 2 * hN;
        }
        if (hI === 0) {
          hY = dR;
        }
        switch (hY) {
          case hh:
            var hQ = hR - hZ / 2 - (h2 * (hJ - 1)) / 2;
            h1 = hS - T - hI / 2 - hU;
            h0 = hQ + hW + h2 * hV;
            break;
          case hB:
            var hQ = hR - hZ / 2 - (h2 * (hJ - 1)) / 2;
            h1 = hS + hI / 2 + hU;
            h0 = hQ + hW + h2 * hV;
            break;
          case e7:
            var hQ = hR - hP / 2 - hZ - h2 * (hJ - 1) - h2;
            h1 = hS - T / 2;
            h0 = hQ + hW + h2 * hV;
            break;
          case dU:
            var hQ = hR + hP / 2 + h2 / 2;
            h1 = hS - T / 2;
            h0 = hQ + hW + h2 * hV;
            break;
          case dR:
            var hQ = hR - e / 2 - (h2 * (hJ - 1)) / 2;
            h1 = hS - T / 2;
            h0 = hQ + hW + h2 * hV;
            break;
        }
        hW += e;
        if (T > 0 && e > 0) {
          hX.push({srcX: hK, srcY: i, destX: h1, destY: h0, width: T, height: e});
        }
      }
      if (hX.length > 0) {
        return hX;
      }
      return null;
    },
    _getLineLabelInfo: function (hQ, hI, hJ, h5, ij, hX, h3, h2, h4, hW) {
      if (hQ.length !== 10) {
        return;
      }
      var h7 = this.ratio;
      var T = this.ratio;
      var ie = hQ[7].length;
      var hY = hQ[1];
      var ih = hQ[3];
      var io = hQ[8];
      var hM = hQ[4];
      var e = 2;
      var hK = hM.slice(0, e);
      for (var ik = e; ik < hM.length; ik += e) {
        hK[ik] = hK[ik - e] + hM[ik];
        hK[ik + 1] = hK[ik - (e - 1)] + hM[ik + 1];
      }
      for (var ik = e; ik < hM.length; ik += e) {
        if (ik % (ih * e) === 0 || ik % (ih * e) === 1) {
          continue;
        }
        hK[ik] = hK[ik - e] + hM[ik] / h4;
        hK[ik + 1] = hK[ik - (e - 1)] + hM[ik + 1] / h4;
      }
      for (var im = 0; im < ie; im++) {
        var ii = hQ[7][im];
        if (!this._isVisible(ii, h5)) {
          continue;
        }
        var h9 = hQ[6][im];
        var hV = im * ih * e;
        hM = hK.slice(hV, hV + ih * e);
        var hZ = [];
        var h8 = undefined;
        var h6 = undefined;
        var hU = undefined;
        var hT = undefined;
        var io = hQ[9].slice(0);
        if (h9) {
          io.reverse();
        }
        var ic;
        var ia;
        for (var il = 0; il < ih; il++) {
          var hS = hQ[5][ih * im + il];
          var id = hM[il * e] / 100;
          var ib = hM[il * e + 1] / 100;
          var hR = io[il];
          var hN = hR[0];
          var hP = hR[1];
          var hL = hR[2];
          var hO = hR[3];
          var h1;
          var h0;
          var iq;
          var ip;
          if (il === 0) {
            ic = iq = id / ij;
            ia = hX - ib / ij;
            ip = ib / ij;
          } else {
            iq = id / ij;
            ip = ib / ij;
          }
          var it = ic + (iq - ic) * T - hL / 2;
          var ir = ia + (hX - ip - ia) * T - hO / 2;
          if (h8 === undefined) {
            h8 = ic - hL / 2;
            h6 = ia - hO / 2;
            hU = h8 + hL;
            hT = h6 + hO;
          } else {
            if (it < h8) {
              h8 = it;
            }
            if (ir < h6) {
              h6 = ir;
            }
            if (it + hL > hU) {
              hU = it + hL;
            }
            if (ir + hO > hT) {
              hT = ir + hO;
            }
          }
          hZ.push({angle: hS, srcX: hN, srcY: hP, destX: it, destY: ir, width: hL, height: hO});
        }
        var ig = {
          type: 'line',
          textImg: hI,
          rank: hY,
          baseX: ic,
          baseY: ia,
          arrWordPos: hZ,
          minXOriginal: h8,
          minYOriginal: h6,
          maxXOriginal: hU,
          maxYOriginal: hT,
          text: '',
        };
        hW.push(ig);
      }
    },
    alterColor: function (hL, e, hK) {
      var T = this._colorCtx,
        i = this._canvas2dMapMgr;
      T.clearRect(0, 0, hL.width, hL.height);
      T.drawImage(e, hL.srcX, hL.srcY, hL.width, hL.height, 0, 0, hL.width, hL.height);
      var hJ = T.getImageData(0, 0, hL.width, hL.height),
        hI = i.getFilterImageData(hJ, hK);
      T.putImageData(hI, 0, 0);
    },
    drawIconAndText: function (hX, hW, e) {
      var hO = this.ratio;
      var hM = this.sizeRatio / hO;
      var hQ = 2 / hO;
      var h8 = this;
      for (var h0 = 0, hY = hW.length; h0 < hY; h0++) {
        var hP = hW[h0];
        if (hP.isDel == false) {
          var hJ = hP.baseDrawX;
          var hI = hP.baseDrawY;
          if (hP.type == 'fixed') {
            var hL = hP.iconPos,
              h1 = hP.textPos,
              hU = hP.textImg,
              h4 = hP.startScale;
            if (hL && h4 <= e) {
              var T = this._iconCache[hL.iconType];
              if (T) {
                if (T.img) {
                  hX.drawImage(
                    T.img,
                    0,
                    0,
                    T.img.width,
                    T.img.height,
                    Math.round(hJ * hO + (hL.drawX - hJ) / hQ),
                    Math.round(hI * hO + (hL.drawY - hI) / hQ),
                    hL.width / hQ,
                    hL.height / hQ,
                  );
                } else {
                  T.drawLabels.push(hP);
                }
              } else {
                if (!T) {
                  this._iconCache[hL.iconType] = {img: null, drawLabels: [hP]};
                  var ia = new Image();
                  ia._iconName = hL.iconType;
                  ia.onload = function () {
                    var ih = h8._iconCache[this._iconName];
                    ih.img = this;
                    this.onload = null;
                    for (var ic = 0; ic < ih.drawLabels.length; ic++) {
                      var ie = ih.drawLabels[ic];
                      var id = ie.baseDrawX;
                      var ib = ie.baseDrawY;
                      var ig = ie.iconPos;
                      hX.drawImage(
                        this,
                        0,
                        0,
                        this.width,
                        this.height,
                        Math.round(id * hO + (ig.drawX - id) / hQ),
                        Math.round(ib * hO + (ig.drawY - ib) / hQ),
                        ig.width / hQ,
                        ig.height / hQ,
                      );
                    }
                    ih.drawPos = [];
                  };
                  ia.src = eV.getIconSetPath(h8._map.config.style) + hL.iconType + '.png';
                }
              }
            }
            if (h1 && hU && h4 <= e) {
              for (var hN = 0; hN < h1.length; hN++) {
                var hV = h1[hN];
                if (!hP._tempRank) {
                  hX.drawImage(
                    hU,
                    hV.srcX,
                    hV.srcY,
                    hV.width,
                    hV.height,
                    Math.round(hJ * hO + (hV.drawX - hJ) / hM),
                    Math.round(hI * hO + (hV.drawY - hI) / hM),
                    hV.width / hM,
                    hV.height / hM,
                  );
                } else {
                  this.alterColor(hV, hU, hP._tempRank);
                  hX.drawImage(
                    this._colorCvs,
                    0,
                    0,
                    hV.width,
                    hV.height,
                    Math.round(hJ * hO + (hV.drawX - hJ) / hM),
                    Math.round(hI * hO + (hV.drawY - hI) / hM),
                    hV.width / hM,
                    hV.height / hM,
                  );
                }
              }
            }
          } else {
            var hK = hP.arrWordPos,
              hU = hP.textImg,
              hT = hP.tileX,
              hR = hP.tileY;
            for (var hZ = 0, hS = hK.length; hZ < hS; hZ++) {
              var h2 = hK[hZ];
              var h9 = Math.round(hT + h2.destX);
              var h7 = Math.round(hR + h2.destY);
              var h3 = h2.angle;
              h9 = hJ * hO + h9 - hJ;
              h7 = hI * hO + h7 - hI;
              if (h3 > 10 && h3 < 350) {
                hX.save();
                var h6 = Math.round(h9 + h2.width / 2);
                var h5 = Math.round(h7 + h2.height / 2);
                hX.translate(h6, h5);
                hX.rotate((-h3 / 180) * Math.PI);
                hX.drawImage(
                  hU,
                  h2.srcX,
                  h2.srcY,
                  h2.width,
                  h2.height,
                  -Math.round(h2.width / 2),
                  -Math.round(h2.height / 2),
                  h2.width / hM,
                  h2.height / hM,
                );
                hX.restore();
              } else {
                hX.drawImage(
                  hU,
                  h2.srcX,
                  h2.srcY,
                  h2.width,
                  h2.height,
                  h9,
                  h7,
                  h2.width / hM,
                  h2.height / hM,
                );
              }
            }
          }
        }
      }
    },
    isCollide: function (hK, hT, hS, e, hM, T, hO) {
      for (var hJ = 0, hI = T.length; hJ < hI; hJ++) {
        var hN = T[hJ],
          hL = 1 / Math.pow(2, hO + 1),
          hR = (hL * hN[3]) / 2,
          hQ = (hL * hN[4]) / 2,
          hP = hN[0];
        if (hP != hK) {
          if (
            !(
              hT + e < hN[1] - hR ||
              hT > hN[1] + hN[3] + hR ||
              hS + hM < hN[2] - hQ ||
              hS > hN[2] + hN[4] + hQ
            )
          ) {
            return true;
          }
        }
      }
      return false;
    },
    zoomingIconAndText: function (h8, h2, hI, h6, h7, iC, ig, hQ, im, ie, hZ) {
      var iD = this.ratio;
      var hR = this.sizeRatio / iD;
      var iE = 2 / iD;
      var iO = iD / 2;
      var iy = h6.x;
      var ix = h6.y;
      var h9 = 2 * iD;
      if (hZ !== 0) {
        ix += ie;
      }
      var hU = undefined,
        hN = undefined,
        hK = undefined,
        hP = undefined,
        hY = undefined;
      var il = iC > 0 ? true : false;
      if (!il) {
        hU = [];
        var iq = 1 - ig;
      }
      for (var iK = 0, iI = h2.length; iK < iI; iK++) {
        var iF = h2[iK];
        if (iF.isDel == false) {
          var iP = iF.baseDrawX;
          var iM = iF.baseDrawY;
          h8.save();
          h8.translate(-hQ * iD, -im * iD);
          if (iF.isFadeout) {
            if (!il && iF._schedule <= ig && !iF._isIgnore) {
              h8.globalAlpha = iq;
              iF._schedule = ig;
            } else {
              iF._isIgnore = true;
              continue;
            }
          }
          if (iF.type == 'fixed') {
            var ia = iF.iconPos,
              ii = iF.textPos,
              hL = iF.textImg,
              ib = iF.startScale;
            var T;
            var iv = 0;
            if (ia) {
              iv = h9;
            }
            if (ia && !iF.iconImg && this._iconCache[ia.iconType]) {
              T = this._iconCache[ia.iconType].img;
            }
            if (ia && ib <= h7 && T) {
              hP = ia.width;
              hY = ia.height;
              hN = (iy + (iP - iy) * hI) * iD - hP / 2 / iE;
              hK = (ix + (iM - ix) * hI) * iD - hY / 2 / iE + hZ;
              if (!il && this.isCollide(iK, hN, hK, hP, hY, hU, iC)) {
                iF.isFadeout = true;
              }
              h8.drawImage(
                T,
                ia.srcX,
                ia.srcY,
                T.width,
                T.height,
                Math.round(hN),
                Math.round(hK),
                hP / iE,
                hY / iE,
              );
              !il && hU.push([iK, hN, hK, hP, hY]);
            }
            if (ii && hL && ib <= h7) {
              var ih;
              var ij;
              var h1 = 0;
              var id = 0;
              if (ia) {
                h1 = ia.width;
                id = ia.height;
              }
              var iw = ii.length;
              var hT = 0;
              var ik = 0;
              for (var h3 = 0; h3 < iw; h3++) {
                var iH = ii[h3];
                ik += iH.height;
                if (hT < iH.width) {
                  hT = iH.width;
                }
              }
              ik += (h3 - 1) * h9;
              if (!il && this.isCollide(iK, hN, hK, hT, ik, hU, iC)) {
                iF.isFadeout = true;
              }
              var iG = 0;
              for (var h3 = 0; h3 < iw; h3++) {
                var iH = ii[h3];
                switch (iF.direction) {
                  case hh:
                    ih = -(h1 / 2 / iE + iH.width + iv);
                    ij = -ik / 2 + iG + h9 * h3;
                    break;
                  case hB:
                    ih = h1 / 2 / iE + iv;
                    ij = -ik / 2 + iG + h9 * h3;
                    break;
                  case e7:
                    ih = -iH.width / 2;
                    ij = -id / 2 / iE - ik + iG - h9 * (h3 + 1);
                    break;
                  case dU:
                    ih = -iH.width / 2;
                    ij = id / 2 / iE + iG + h9 * (h3 + 1);
                    break;
                  case dR:
                    ih = -iH.width / 2;
                    ij = -ik / 2 + iG + h9 * h3;
                    break;
                }
                iG += iH.height;
                hN = (iy + (iP - iy) * hI) * iD + ih / hR;
                hK = (ix + (iM - ix) * hI) * iD + ij / hR;
                +hZ;
                hP = iH.width;
                hY = iH.height;
                if (!iF._tempRank) {
                  h8.drawImage(
                    hL,
                    iH.srcX,
                    iH.srcY,
                    hP,
                    hY,
                    Math.round(hN),
                    Math.round(hK),
                    hP / hR,
                    hY / hR,
                  );
                } else {
                  this.alterColor(iH, hL, iF._tempRank);
                  h8.drawImage(
                    this._colorCvs,
                    0,
                    0,
                    hP,
                    hY,
                    Math.round(hN),
                    Math.round(hK),
                    hP / hR,
                    hY / hR,
                  );
                }
                !il && hU.push([iK, hN, hK, hP, hY]);
              }
            }
          } else {
            var h0 = iF.arrWordPos,
              hL = iF.textImg,
              iN = iF.tileX,
              iL = iF.tileY;
            var hS = h0[0];
            var hO = Math.round(iN + hS.destX);
            var hM = Math.round(iL + hS.destY);
            for (var iJ = 0, iu = h0.length; iJ < iu; iJ++) {
              var iB = h0[iJ];
              var iR = Math.round(iN + iB.destX);
              var iQ = Math.round(iL + iB.destY);
              var h5 = iB.angle;
              var it = Math.round((iy + (iP - iy) * hI) * iD - hS.width / 2 + iR - hO);
              var ir = Math.round((ix + (iM - ix) * hI) * iD - hS.height / 2 + iQ - hM);
              hN = it;
              hK = ir;
              hP = iB.width;
              hY = iB.height;
              if (!il && this.isCollide(iK, hN, hK, hP, hY, hU, iC)) {
                iF.isFadeout = true;
              }
              if (h5 > 10 && h5 < 350) {
                var iA = it + iB.width / 2;
                var iz = ir + iB.height / 2;
                var hJ = (h5 / 180) * Math.PI;
                var ic = Math.cos(hJ);
                var hV = Math.sin(hJ);
                var ip = ic;
                var hW = ic;
                var io = hV;
                var hX = -hV;
                var h4 = iA - iA * ic - iz * hV;
                var e = iz + iA * hV - iz * ic;
                h8.save();
                h8.transform(ip, hX, io, hW, h4, e);
                h8.drawImage(hL, iB.srcX, iB.srcY, hP, hY, hN, hK, hP / hR, hY / hR);
                h8.restore();
              } else {
                h8.drawImage(hL, iB.srcX, iB.srcY, hP, hY, hN, hK, hP / hR, hY / hR);
              }
              !il && hU.push([iK, hN, hK, hP, hY]);
            }
          }
          h8.restore();
        }
      }
    },
  });
  function gE(e) {
    this.initVars(e);
  }
  C.extend(gE.prototype, {
    initVars: function (e) {
      this._map = e._map;
      this._canvas2dMapMgr = e;
      this.base64Prefix = 'data:image/png;base64,';
      this.bizData = null;
      this.objTextsPng = null;
      this.arrIconsPng = null;
      this.bizLabels = null;
    },
    proecessBizData: function (hK, hO) {
      var hM = this;
      this.bizData = hK;
      this.objTextsPng = null;
      this.arrIconsPng = null;
      var T = hK.textsPng;
      var hQ = hK.iconsPng;
      if (!T || !hQ) {
        return;
      }
      var hN = new Image();
      hN.onload = function () {
        hM.objTextsPng = this;
        hM.calcIconAndTextInfo(hO);
        this.onload = null;
      };
      hN.src = this.base64Prefix + T;
      var hP = hQ.length;
      var e = [];
      for (var hJ = 0; hJ < hP; hJ++) {
        var hL = hQ[hJ];
        var hI = new Image();
        (function (i) {
          hI.onload = function () {
            hP--;
            e[i] = this;
            if (hP === 0) {
              hM.arrIconsPng = e;
              hM.calcIconAndTextInfo(hO);
            }
            this.onload = null;
          };
        })(hJ);
        hI.src = this.base64Prefix + hL;
      }
    },
    calcIconAndTextInfo: function (hR) {
      if (this.objTextsPng && this.arrIconsPng) {
        var hN = this.bizData;
        var hL = hN.pois;
        var e = [];
        for (var hO = 0, hK = hL.length; hO < hK; hO++) {
          var hI = hL[hO];
          var hM = this.arrIconsPng[hI.iconPng];
          var hJ = hM.height / 2;
          var hQ = {
            type: 'fixed',
            name: '',
            textImg: this.objTextsPng,
            iconImg: hM,
            rank: hI.rank,
            iconPos: {
              srcX: 0,
              srcY: 0,
              destX: -hM.width / 2,
              destY: -hJ / 2,
              width: hM.width,
              height: hJ,
              geoX: hI.x,
              geoY: hI.y,
              iconType: 'vectorCustom',
            },
            textPos: this.calcTextPos(hI.pos, hM),
            startScale: hI.from < 12 ? 12 : hI.from,
            guid: hI.guid,
            guidExt: 1,
            adver_log: hI.adver_log || '',
          };
          var T = {
            type: 'fixed',
            textDirLeft: 'left',
            name: '',
            textImg: this.objTextsPng,
            iconImg: hM,
            rank: hI.rank,
            iconPos: {
              srcX: 0,
              srcY: 0,
              destX: -hM.width / 2,
              destY: -hJ / 2,
              width: hM.width,
              height: hJ,
              geoX: hI.x,
              geoY: hI.y,
              iconType: 'vectorCustom',
            },
            textPos: this.calcTextPosLeft(hI.pos, hM),
            startScale: hI.from < 12 ? 12 : hI.from,
            guid: hI.guid,
            guidExt: 1,
            adver_log: hI.adver_log || '',
          };
          var hP = [hQ, T];
          e.push(hP);
        }
        this.bizLabels = e;
        hR && hR();
      }
    },
    calcTextPos: function (hL, T) {
      var i = [];
      var hK = hL.length / 4;
      var hJ = T.width / 2;
      if (hK === 1) {
        var hI = {
          srcX: hL[0],
          srcY: hL[1],
          destX: hJ,
          destY: -hL[3] / 2,
          width: hL[2],
          height: hL[3],
        };
        i.push(hI);
      } else {
        var hI = {srcX: hL[0], srcY: hL[1], destX: hJ, destY: -hL[3], width: hL[2], height: hL[3]};
        var e = {srcX: hL[4], srcY: hL[5], destX: hJ, destY: 0, width: hL[6], height: hL[7]};
        i.push(hI);
        i.push(e);
      }
      return i;
    },
    calcTextPosLeft: function (hL, T) {
      var i = [];
      var hK = hL.length / 4;
      var hJ = T.width / 2;
      if (hK === 1) {
        var hI = {
          srcX: hL[0],
          srcY: hL[1],
          destX: -hJ - hL[2],
          destY: -hL[3] / 2,
          width: hL[2],
          height: hL[3],
        };
        i.push(hI);
      } else {
        var hI = {
          srcX: hL[0],
          srcY: hL[1],
          destX: -hJ - hL[2],
          destY: -hL[3],
          width: hL[2],
          height: hL[3],
        };
        var e = {
          srcX: hL[4],
          srcY: hL[5],
          destX: -hJ - hL[2],
          destY: 0,
          width: hL[6],
          height: hL[7],
        };
        i.push(hI);
        i.push(e);
      }
      return i;
    },
    clearBizData: function () {
      this.bizData = null;
      this.bizLabels = null;
    },
  });
  function c1() {}
  C.extend(c1.prototype, {
    centerAndZoomIn: function (T, hO, hP) {
      hP = hP || {};
      if (!this.loaded) {
        this.firstTileLoad = false;
      }
      hO = this._getProperZoom(hO).zoom;
      if (hP.noAnimation !== true && this.loaded) {
        var hK = this._ifUseAnimation(T, hO);
        if (hK) {
          this.flyToIn(T, hO, hP);
          return;
        }
      }
      var hM = this;
      if (!T && !hO) {
        return;
      }
      this._stopAllAnimations();
      if (T && !T.equals(this.centerPoint)) {
        this.fire(new a6('oncenter_changed'));
      }
      if (hO && hO !== this.zoomLevel) {
        this.fire(new a6('onzoom_changed'));
      }
      T = T || this.centerPoint;
      hO = hO || this.zoomLevel;
      hO = this._getProperZoom(hO).zoom;
      if (this.mapType === BMAP_EARTH_MAP) {
        if (!this._earth) {
          this.mapType = BMAPGL_NORMAL_MAP;
          this.temp.originMapType = BMAP_EARTH_MAP;
          function hN() {
            hM._earth = new bj.Earth(hM, {
              showRealSunlight: hM.config.showRealSunlight,
              showMilkyway: hM.config.showMilkyway,
              earthBackground: hM.config.earthBackground,
            });
            hM._proxyEarthEvents();
            hM._changeEarthMapType(BMAP_EARTH_MAP);
            C.extend(hM, bj.EarthView.prototype);
            delete hM.temp.originMapType;
          }
          d2.load('earth', function () {
            if (bj['FeatureStyle' + hM.config.style]) {
              hN();
            } else {
              hM.loadMapStyleFiles(function () {
                hN();
              });
            }
          });
        }
      }
      this.lastLevel = this.zoomLevel || hO;
      this.zoomLevel = hO;
      var hL = new a6('onload');
      hL.point = T;
      hL.zoom = hO;
      this.centerPoint = new hj(T.lng, T.lat);
      this.defaultZoomLevel = this.defaultZoomLevel || this.zoomLevel;
      this.defaultCenter = this.defaultCenter || this.centerPoint;
      if (this.mapType !== BMAP_EARTH_MAP) {
        this.centerPoint = this.restrictCenter(this.centerPoint);
      }
      if (!this.loaded && !(this.temp.originMapType === BMAP_EARTH_MAP)) {
        var i = this.config.defaultMaxBounds;
        var hJ = new cY(i, 'baidu', this.mapType);
        var hI = new cL({
          mapType: this.mapType,
          copyright: hJ,
          dataType: gk,
          customLayer: false,
          baseLayer: true,
          tileTypeName: 'na',
        });
        hI._isInnerLayer = true;
        this.addTileLayer(hI);
        if (this.mapType === BMAP_SATELLITE_MAP && this._isHybridShow === true) {
          this._addHybirdMap();
        }
        this.baseLayerAdded = true;
        this.on('zoom_changed', function () {
          if (this._heading === 0) {
            return;
          }
          if (this.getZoom() < 7 && this.config.restrictCenter === true) {
            hM.resetHeading();
          }
        });
      }
      this.loaded = true;
      this.dispatchEvent(hL);
      hP.callback && hP.callback();
    },
    _ifUseAnimation: function (hI, hN) {
      var hM = this.getSize();
      var T = {zoom: this.zoomLevel};
      var hP = {zoom: hN};
      var hO = this.pointToPixelIn(this.centerPoint);
      var hJ = this.pointToPixelIn(hI, T);
      var hL = this.pointToPixelIn(this.centerPoint, hP);
      var hR = this.pointToPixelIn(hI, hP);
      var hK = Math.abs(hO.x - hJ.x);
      var i = Math.abs(hO.y - hJ.y);
      var e = Math.abs(hL.x - hR.x);
      var hQ = Math.abs(hL.y - hR.y);
      if ((hK > hM.width || i > hM.height) && (e > hM.width || hQ > hM.height)) {
        return false;
      }
      return true;
    },
    _setPlatformPosition: function (hP, hO, hR) {
      hR = hR || {};
      if (hP === 0 && hO === 0 && !hR.point) {
        return;
      }
      if (isNaN(hR.initMapOffsetX)) {
        hR.initMapOffsetX = this.offsetX;
      }
      if (isNaN(hR.initMapOffsetY)) {
        hR.initMapOffsetY = this.offsetY;
      }
      var hL = dE(this._heading);
      if (this._tilt > 0) {
        hO = hO / Math.cos(dE(this._tilt));
      }
      var hQ = hP * Math.cos(hL) + hO * Math.sin(hL);
      var hN = -hP * Math.sin(hL) + hO * Math.cos(hL);
      hQ = hQ + hR.initMapOffsetX;
      hN = hN + hR.initMapOffsetY;
      if (hR.point) {
        var i = this.restrictCenter(hR.point);
        if (!i.equals(this.centerPoint)) {
          this.centerPoint = i.clone();
          this.fire(new a6('oncenter_changed'));
        }
      } else {
        var hI = this.offsetX - hQ;
        var e = this.offsetY - hN;
        var hM = this.centerPoint.lng;
        var hK = this.centerPoint.lat;
        var hJ = new hj(hM, hK);
        var T = this.getZoomUnits();
        this.centerPoint = this.restrictCenter(new hj(hJ.lng + hI * T, hJ.lat - e * T), T);
        this.fire(new a6('oncenter_changed'));
      }
      this.offsetX = hQ;
      this.offsetY = hN;
      this.dispatchEvent(new a6('onmoving'));
    },
    restrictCenter: function (hI, hJ) {
      if (this.config.restrictCenter === false) {
        return hI;
      }
      hJ = hJ || this.getZoomUnits();
      var T = this.pixelToPointIn(new eb(0, 0), {center: hI});
      var i = this.pixelToPointIn(new eb(0, this.height), {center: hI});
      if (this.zoomLevel < 5) {
        if (T.lat > c2.MAX_LAT && i.lat < c2.MIN_LAT) {
          var hK = c2.MAX_LAT - hI.lat;
          var e = hI.lat - c2.MIN_LAT;
          var hM;
          if (hK < e) {
            hM = hK / (this.height / 2);
          } else {
            hM = e / (this.height / 2);
          }
          var hL = 18 - eu(hM);
          this.zoomLevel = hL;
          return hI;
        }
      }
      if (T.lat > c2.MAX_LAT) {
        hI.lat = c2.MAX_LAT - (this.height / 2) * hJ;
      } else {
        if (i.lat < c2.MIN_LAT) {
          hI.lat = c2.MIN_LAT + (this.height / 2) * hJ;
        }
      }
      return hI;
    },
    zoomTo: function (e, hT, hU) {
      var hP = b1[this.mapType];
      if (!hP) {
        return;
      }
      var hO = this._getProperZoom(e);
      e = hO.zoom;
      if (this.zoomLevel === e) {
        return;
      }
      var hK = e;
      this.lastLevel = this.zoomLevel;
      hU = hU || {};
      if (this.zoomEventStatus === 'idle') {
        this.fire(new a6('onzoomstart'));
        this.zoomEventStatus = 'zooming';
      }
      if (!hT && this.getInfoWindow() && this.temp.infoWin && this.temp.infoWin.isOpen()) {
        hT = this.getInfoWindow().getPoint();
      }
      var T = null;
      if (hU.fixPixel) {
        T = hU.fixPixel;
      } else {
        if (hT) {
          T = this.pointToPixelIn(hT, {useRound: false});
        }
      }
      var hL = this.pixelToPointIn(T);
      var hM = this.centerPoint.clone();
      this.fixPoint = hT;
      this.fixPixel = T;
      this.fixCenter = hM;
      this.mousePosMCPoint = hL;
      if (hU.noAnimation) {
        e = hO.zoom;
        this.zoomLevel = e;
        this.fire(new a6('onzoom_changed'));
        var hJ = this.getCurrentMaxTilt();
        if (this._tilt > hJ) {
          this._tilt = hJ;
        }
        if (hT) {
          if (this._heading % 360 !== 0 || this._tilt > 0) {
            var i = this._webglMapCamera.fromScreenPixelToMC(T.x, T.y, {
              center: hM,
              zoom: this.zoomLevel,
            });
            if (i) {
              var hQ = i.sub(hL);
              var hI = hM.sub(hQ);
              this.centerPoint = this.restrictCenter(hI);
            }
          } else {
            var hN = this.getZoomUnits();
            var hI = new hj(
              hT.lng - hN * (T.x - this.width / 2),
              hT.lat + hN * (T.y - this.height / 2),
            );
            this.centerPoint = this.restrictCenter(hI, hN);
          }
          this.fire(new a6('oncenter_changed'));
        }
        this._checkFireZoomend();
        return;
      }
      this._animationInfo.zoom = {current: this.zoomLevel, diff: e - this.zoomLevel, target: e};
      var hR = this;
      hU.callback = function () {
        hR._checkFireZoomend();
      };
      var hS = this._tilt;
      if (this.fixPoint || hS > c2.MAX_DRAG_TILT_L2) {
        hU.renderCallback = function () {
          var hY = hR.getCurrentMaxTilt();
          if (hR._tilt > hY) {
            hR._tilt = hY;
          }
          var hZ = hR.fixPixel;
          if (!hR.fixPixel || !hR.fixPoint) {
            return;
          }
          var hV = hR.fixPixel;
          var h5 = hR.fixPoint;
          var h2 = hR.fixCenter;
          var h0 = hR.mousePosMCPoint;
          if (hR._heading % 360 !== 0 || hR._tilt > 0) {
            var hW = hR._webglMapCamera.fromScreenPixelToMC(hV.x, hV.y, {
              center: h2,
              zoom: hR.zoomLevel,
              tilt: hR._tilt,
            });
            if (hW) {
              var h4 = hW.sub(h0);
              var hX = h2.sub(h4);
              hR.centerPoint = hR.restrictCenter(hX);
            }
          } else {
            var h1 = hV;
            var h3 = hR.getZoomUnits();
            var hX = new hj(
              h5.lng - h3 * (h1.x - hR.width / 2),
              h5.lat + h3 * (h1.y - hR.height / 2),
            );
            hR.centerPoint = hR.restrictCenter(hX, h3);
          }
          hR.fire(new a6('oncenter_changed'));
        };
      }
      if (hU.fromMouseWheel === true) {
        this._startInfiniteZoomAnimation(hU);
        return;
      }
      this._startAnimation(hU);
    },
    _checkFireZoomend: function () {
      var e = this;
      if (e.fireZoomendTimer) {
        clearTimeout(e.fireZoomendTimer);
      }
      e.fireZoomendTimer = setTimeout(function () {
        if (e.zoomEventStatus === 'zooming') {
          e.fire(new a6('onzoomend'));
          e.zoomEventStatus = 'idle';
        }
        e.fireZoomendTimer = null;
      }, 150);
    },
    deepZoomMedia: function (e) {
      var i = this;
      if (!i.temp.isStdCtrlBusy) {
        i.temp.isStdCtrlBusy = true;
        i.deepZoomTo(i.zoomLevel + e);
        setTimeout(function () {
          i.temp.isStdCtrlBusy = false;
        }, 400);
      }
    },
    deepZoomTo: function (e) {
      this.zoomTo(e);
    },
    flyToIn: function (T, ic, hX) {
      hX = hX || {};
      var hJ = this._getProperZoom(ic);
      ic = hJ.zoom;
      if (
        this.centerPoint.equals(T) &&
        this.zoomLevel === ic &&
        typeof hX.heading !== 'number' &&
        typeof hX.tilt !== 'number'
      ) {
        return;
      }
      var e = this.getHeading() % 360;
      var hP = this.getTilt();
      var hV = 0;
      var hZ = 0;
      var hS = this.getBounds().containsPoint(T);
      if (typeof hX.heading === 'number') {
        hV = hX.heading;
      } else {
        if (hS) {
          hV = e;
        }
      }
      if (typeof hX.tilt === 'number') {
        hZ = hX.tilt;
      } else {
        if (hS) {
          hZ = hP;
        }
      }
      this._heading = e;
      var h9 = hV - e;
      var h5 = hZ - hP;
      var hT = this;
      var hL = this.zoomLevel;
      var hM = 1.42;
      var h1 = this.zoomScale(ic - hL);
      var ie = this.getZoomUnits();
      var hR = this.centerPoint.div(ie);
      var ig = T.div(ie);
      var h8 = this.worldSize();
      var h4 = hM;
      var h3 = Math.max(this.width, this.height);
      var h2 = h3 / h1;
      var hQ = ig.sub(hR).mag();
      var i = h4 * h4;
      function ib(ii) {
        var ih =
          (h2 * h2 - h3 * h3 + (ii ? -1 : 1) * i * i * hQ * hQ) / (2 * (ii ? h2 : h3) * i * hQ);
        return Math.log(Math.sqrt(ih * ih + 1) - ih);
      }
      function hI(ih) {
        return (Math.exp(ih) - Math.exp(-ih)) / 2;
      }
      function hN(ih) {
        return (Math.exp(ih) + Math.exp(-ih)) / 2;
      }
      function hW(ih) {
        return hI(ih) / hN(ih);
      }
      var hO = ib(0);
      var h6 = function (ih) {
        return hN(hO) / hN(hO + h4 * ih);
      };
      var h7 = function (ih) {
        return (h3 * ((hN(hO) * hW(hO + h4 * ih) - hI(hO)) / i)) / hQ;
      };
      var hK = (ib(1) - hO) / h4;
      if (Math.abs(hQ) < 0.000001 || hK === Infinity || isNaN(hK)) {
        if (Math.abs(h3 - h2) < 0.000001) {
          this._animationInfo.zoom = {current: this.zoomLevel, diff: ic - this.zoomLevel};
          this._animationInfo.center = {current: this.centerPoint, diff: T.sub(this.centerPoint)};
          this._animationInfo.heading = {current: e, diff: hV - e};
          this._animationInfo.tilt = {current: hP, diff: hZ - hP};
          this.setLock(true);
          this._startAnimation({
            callback: function (ih) {
              hT.setLock(false);
              if (hX.callback) {
                hX.callback(ih);
              }
            },
            duration: hX.duration,
          });
          return;
        }
        var id = h2 < h3 ? -1 : 1;
        hK = Math.abs(Math.log(h2 / h3)) / h4;
        h7 = function () {
          return 0;
        };
        h6 = function (ih) {
          return Math.exp(id * h4 * ih);
        };
      }
      var ia = 1.7;
      if (hK < 0.3) {
        ia = 0.8;
      } else {
        if (hK > 5) {
          ia = (hK - 5) / 2 + ia;
        }
      }
      var hY = hX.duration || (1000 * hK) / ia;
      if (isNaN(hY)) {
        var h0 = {};
        for (var hU in hX) {
          h0[hU] = hX[hU];
          h0.noAnimation = true;
        }
        this.centerAndZoomIn(T, ic, h0);
        return;
      }
      this.fire(new a6('onmovestart'));
      this.fire(new a6('onzoomstart'));
      this.setLock(true);
      this._startAnimation({
        duration: hY,
        renderCallback: function (ih, ii) {
          var ij = ih * hK;
          var im = h7(ij);
          var il = hL + hT.scaleZoom(1 / h6(ij));
          if (il < hT.getMinZoom()) {
            il = hT.getMinZoom();
          }
          if (il > hT.getMaxZoom()) {
            il = hT.getMaxZoom();
          }
          if (il !== hT.zoomLevel) {
            hT.zoomLevel = il;
            hT.fire(new a6('onzoom_changed'));
          }
          hT.centerPoint = hR.add(ig.sub(hR).mult(im)).mult(ie);
          hT.fire(new a6('oncenter_changed'));
          if (typeof hV === 'number') {
            var ik = ih / 0.7;
            if (ik > 1) {
              ik = 1;
            }
            hT.setHeading(e + h9 * ih, {noAnimation: true});
          }
          if (typeof hZ === 'number') {
            hT.setTilt(hP + h5 * ih, {noAnimation: true});
          }
        },
        callback: function (ih, ii) {
          hT.setLock(false);
          if (ii && ii.stop === true) {
            hT.fire(new a6('onmoveend'));
            hT.fire(new a6('onzoomend'));
            hX.callback && hX.callback(ih);
            return;
          }
          if (ic !== hT.zoomLevel) {
            hT.zoomLevel = ic;
            hT.fire(new a6('onzoom_changed'));
          }
          hT.fire(new a6('onmoveend'));
          hT.fire(new a6('onzoomend'));
          hX.callback && hX.callback(ih);
        },
      });
    },
    zoomScale: function (e) {
      return Math.pow(2, e);
    },
    scaleZoom: function (e) {
      return Math.log(e) / Math.LN2;
    },
    panToIn: function (i, T) {
      T = T || {};
      if (!i || i.equals(this.centerPoint)) {
        T.callback && T.callback();
        return;
      }
      var hI = this.pointToPixelIn(i);
      var e = Math.round(this.width / 2);
      var hK = Math.round(this.height / 2);
      var hJ = this._ifUseAnimation(i, this.zoomLevel);
      if (T.noAnimation === true || hJ === false) {
        this._stopAllAnimations();
        this._panToIn(e - hI.x, hK - hI.y, i);
        T.callback && T.callback();
        return;
      }
      this.flyToIn(i, this.zoomLevel, T);
    },
    _panToIn: function (i, e, hI) {
      var T = this.temp;
      if (T.operating === true) {
        return;
      }
      if (T.dragAni) {
        T.dragAni.stop(false, {readyToMove: true});
        T.dragAni = null;
      }
      this.dispatchEvent(new a6('onmovestart'));
      this._setPlatformPosition(i, e, {point: hI});
      this.dispatchEvent(new a6('onmoveend'));
    },
    _stopAllAnimations: function (e) {
      e = e || {};
      if (this._ani) {
        this._ani.stop(!!e.goToEnd, {stopCurrentAnimation: e.stopCurrentAnimation});
        this._ani = null;
      }
      if (this._infiniteAni) {
        this._infiniteAni.stop();
        this._infiniteAni = null;
      }
    },
    panBy: function (i, e, T) {
      i = Math.round(i) || 0;
      e = Math.round(e) || 0;
      T = T || {};
      if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && T.noAnimation !== true) {
        this._panBy(i, e, T);
      } else {
        this._panToIn(i, e, T.point);
        T.callback && T.callback();
      }
    },
    _panBy: function (i, e, hJ) {
      if (this.temp.operating === true) {
        return;
      }
      hJ = hJ || {};
      this.dispatchEvent(new a6('onmovestart'));
      var hI = this;
      var T = hI.temp;
      T.pl = hI.offsetX;
      T.pt = hI.offsetY;
      if (T.tlPan) {
        T.tlPan.cancel();
      }
      if (T.dragAni) {
        T.dragAni.stop(false, {readyToMove: true});
        T.dragAni = null;
      }
      T.tlPan = new o({
        fps: hJ.fps || hI.config.fps,
        duration: hJ.duration || hI.config.actionDuration,
        transition: hJ.transition || ci.easeInOutQuad,
        render: function (hK) {
          this.terminative = hI.temp.operating;
          if (hI.temp.operating) {
            return;
          }
          hI._setPlatformPosition(i * hK, e * hK, {initMapOffsetX: T.pl, initMapOffsetY: T.pt});
        },
        finish: function (hK) {
          hI.dispatchEvent(new a6('onmoveend'));
          hI.temp.tlPan = false;
          if (hI.temp.stopArrow === true) {
            hI.temp.stopArrow = false;
            if (hI.temp.arrow !== 0) {
              hI._arrow();
            }
          }
        },
      });
    },
    _startAnimation: function (i) {
      var hJ = this._animationInfo;
      var T = this;
      i = i || {};
      if (T._ani) {
        T._ani.stop(!!i.goToEnd, {stopCurrentAnimation: i.stopCurrentAnimation});
      }
      if (T._infiniteAni) {
        T._infiniteAni.stop();
        T._infiniteAni = null;
      }
      var hK = i.duration || 500;
      var hL = i.transition || ci.ease;
      var e = new a6('onanimation_start');
      this.fire(e);
      if (i.unstopable) {
        hJ = this._animationInfoUnstopable;
      }
      var hI = new o({
        duration: hK,
        transition: hL,
        render: function (hO, hN) {
          for (var hM in hJ) {
            if (!hJ.hasOwnProperty(hM)) {
              continue;
            }
            var hQ = hJ[hM].current;
            var hP = hJ[hM].diff;
            T._setValueTick(hM, hQ, hP, hO);
          }
          if (i.renderCallback) {
            i.renderCallback(hO, hN);
          }
        },
        finish: function (hM) {
          T.fire(new a6('onanimation_end'));
          if (i.unstopable) {
            T._animationInfoUnstopable = {};
            T._unstopableAni = null;
          } else {
            T._ani = null;
            T._animationInfo = {};
          }
          if (i.mapNeedCbk) {
            i.mapNeedCbk();
          }
          if (i.callback) {
            i.callback(hM);
          }
        },
        onStop: function (hM) {
          hM = hM || {};
          T.fire(new a6('onanimation_end'));
          if (hM.stopCurrentAnimation) {
            T._animationInfo = {};
          }
          T._ani = null;
          if (i.mapNeedCbk) {
            i.mapNeedCbk();
          }
          if (i.callback) {
            i.callback(null, {stop: true});
          }
        },
      });
      if (i.unstopable) {
        T._unstopableAni = hI;
      } else {
        T._ani = hI;
      }
    },
    _startInfiniteZoomAnimation: function (e) {
      var i = this;
      if (i._ani) {
        i._ani.stop(!!e.goToEnd, {stopCurrentAnimation: e.stopCurrentAnimation});
      }
      if (i._infiniteAni) {
        return;
      }
      this.fire(new a6('onanimation_start'));
      i._infiniteAni = new o({
        duration: 10000,
        transition: ci.linear,
        render: function () {
          var T = i._animationInfo.zoom;
          if (Math.abs(T.current - T.target) < 0.001) {
            i._setValue('zoom', T.target);
            i._infiniteAni.stop();
            return;
          }
          T.current += (T.target - T.current) * 0.35;
          i._setValue('zoom', T.current);
          if (e.renderCallback) {
            e.renderCallback();
          }
        },
        finish: function () {
          i._infiniteAni = null;
          i._animationInfo = {};
          i.fire(new a6('onanimation_end'));
          if (e.callback) {
            e.callback();
          }
        },
        onStop: function () {
          i._infiniteAni = null;
          i._animationInfo = {};
          i.fire(new a6('onanimation_end'));
          if (e.callback) {
            e.callback();
          }
        },
      });
    },
    _setValue: function (e, T) {
      if (e === 'zoom') {
        this._preZoomLevel = this.zoomLevel;
        var i = this._getProperZoom(T);
        T = i.zoom;
        if (T !== this.zoomLevel) {
          this.zoomLevel = T;
          if (T < 5) {
            this.restrictCenter(this.centerPoint);
          }
          this.fire(new a6('on' + e + '_changed'));
        }
        return;
      } else {
        if (e === 'center') {
          this.centerPoint = T;
        }
      }
      this['_' + e] = T;
      this.fire(new a6('on' + e + '_changed'));
    },
    _setValueTick: function (e, hJ, hI, i) {
      if (e === 'center') {
        var T = new hj(hJ.lng + hI.lng * i, hJ.lat + hI.lat * i);
        this._setValue(e, T);
        return;
      }
      if (e === 'zoom') {
        this._setValue(e, Math.pow(hJ, 1 - i) * Math.pow(hJ + hI, i));
        return;
      }
      this._setValue(e, hJ + hI * i);
    },
    setHeading: function (hI, i) {
      i = i || {};
      if (hI === this._heading) {
        i.callback && i.callback();
        return;
      }
      var T = fR(this._heading, 360);
      var e = fR(hI, 360);
      if (e === T) {
        this._heading = hI;
        i.callback && i.callback();
        return;
      }
      if (i.noAnimation) {
        this._setValue('heading', hI);
        i.callback && i.callback();
        return;
      }
      if (i.unstopable) {
        this._animationInfoUnstopable.heading = {current: this._heading, diff: hI - this._heading};
      } else {
        this._animationInfo.heading = {current: this._heading, diff: hI - this._heading};
      }
      this._startAnimation(i);
    },
    resetHeading: function (e) {
      var i = this._heading;
      while (i < 0) {
        i += 360;
      }
      i = i % 360;
      if (i > 180) {
        i -= 360;
      }
      this._heading = i;
      e = e || {};
      e.unstopable = true;
      this.setHeading(0, e);
    },
    getHeading: function () {
      return this._heading;
    },
    setTilt: function (e, i) {
      i = i || {};
      if (e === this._tilt) {
        i.callback && i.callback();
        return;
      }
      if (e > c2.MAX_TILT) {
        e = c2.MAX_TILT;
      }
      if (e < c2.MIN_TILT) {
        e = c2.MIN_TILT;
      }
      if (i && i.noAnimation) {
        this._setValue('tilt', e);
        i.callback && i.callback();
        return;
      }
      this._animationInfo.tilt = {current: this._tilt, diff: e - this._tilt};
      this._startAnimation(i);
    },
    getTilt: function () {
      return this._tilt;
    },
    getCenterIn: function () {
      return this.centerPoint;
    },
    getZoom: function () {
      return this.zoomLevel;
    },
    getCameraPosition: function (T) {
      T = T || {};
      var e = T.center || this.centerPoint;
      var hI = T.zoom || this.zoomLevel;
      var hL = typeof T.heading === 'number' ? T.heading : this._heading;
      var i = typeof T.tilt === 'number' ? T.tilt : this._tilt;
      var hK = this._webglMapCamera.generateMVMatrix(e, hI, hL, i);
      var hJ = mat4.create(Float32Array);
      mat4.invert(hJ, hK);
      return this._webglMapCamera.getPosition(hJ);
    },
  });
  function fG(i) {
    this._jobQueue = [];
    this._idleOnlyJobQueue = [];
    var e = this;
    this.isIdle = true;
    i.on('updateframe', function (hI) {
      var T = 12 - hI.frameTime;
      T = T < 1 ? 1 : T;
      e.isIdle = false;
      if (e.idleWorkTimer) {
        clearInterval(e.idleWorkTimer);
        e.idleWorkTimer = null;
      }
      e.runJobs(T);
    });
    this._idleWorkerTicker = (function (T) {
      return function () {
        if (T.isIdle) {
          T.runJobs();
          T.runIdleOnlyJobs();
        }
      };
    })(this);
    i.on('mapglidle', function () {
      e.isIdle = true;
      e.runJobs();
      e.runIdleOnlyJobs();
      e.idleWorkTimer = setInterval(e._idleWorkerTicker, fG.MAX_IDLE_TIME);
    });
  }
  fG.MAX_IDLE_TIME = 50;
  fG.MAX_FRAME_TIME = 6;
  fG.prototype.runJobs = function (i) {
    if (this._jobQueue.length === 0) {
      return;
    }
    var hI = fs();
    var e = 0;
    i = i || fG.MAX_FRAME_TIME;
    while (this._jobQueue.length && e < i) {
      var T = this._jobQueue.shift();
      if (T.state !== 'invalid') {
        T.call();
      }
      e = fs() - hI;
    }
  };
  fG.prototype.runIdleOnlyJobs = function () {
    if (this._idleOnlyJobQueue.length === 0) {
      return;
    }
    var T = fs();
    var e = 0;
    while (this._idleOnlyJobQueue.length && e < fG.MAX_IDLE_TIME) {
      var i = this._idleOnlyJobQueue.shift();
      if (i.state !== 'invalid') {
        i.call();
      }
      e = fs() - T;
    }
  };
  fG.prototype.checkIdleRunning = function () {
    if (this.isIdle && !this.idleWorkTimer) {
      this.runJobs();
      this.runIdleOnlyJobs();
      this.idleWorkTimer = setInterval(this._idleWorkerTicker, 50);
    }
  };
  fG.prototype.addJob = function (e) {
    this._jobQueue.push(e);
    this.checkIdleRunning();
  };
  fG.prototype.clearJobs = function () {
    this._jobQueue.length = 0;
    this._idleOnlyJobQueue.length = 0;
  };
  fG.prototype.addIdleOnlyJob = function (e) {
    this._idleOnlyJobQueue.push(e);
    this.checkIdleRunning();
  };
  var b6 = {};
  (function (hL) {
    if (!hP) {
      var hP = 0.000001;
    }
    if (!i) {
      var i = typeof Float32Array !== 'undefined' ? Float32Array : Array;
    }
    if (!hJ) {
      var hJ = Math.random;
    }
    var T = {};
    var hK = Math.PI / 180;
    T.toRadian = function (hQ) {
      return hQ * hK;
    };
    var hO = {};
    hO.create = function (hR) {
      hR = hR || i;
      var hQ = new hR(2);
      hQ[0] = 0;
      hQ[1] = 0;
      return hQ;
    };
    hO.clone = function (hQ, hS) {
      hS = hS || i;
      var hR = new hS(2);
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      return hR;
    };
    hO.fromValues = function (hQ, hT, hS) {
      hS = hS || i;
      var hR = new hS(2);
      hR[0] = hQ;
      hR[1] = hT;
      return hR;
    };
    hO.copy = function (hR, hQ) {
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      return hR;
    };
    hO.set = function (hR, hQ, hS) {
      hR[0] = hQ;
      hR[1] = hS;
      return hR;
    };
    hO.add = function (hS, hR, hQ) {
      hS[0] = hR[0] + hQ[0];
      hS[1] = hR[1] + hQ[1];
      return hS;
    };
    hO.subtract = function (hS, hR, hQ) {
      hS[0] = hR[0] - hQ[0];
      hS[1] = hR[1] - hQ[1];
      return hS;
    };
    hO.sub = hO.subtract;
    hO.multiply = function (hS, hR, hQ) {
      hS[0] = hR[0] * hQ[0];
      hS[1] = hR[1] * hQ[1];
      return hS;
    };
    hO.mul = hO.multiply;
    hO.divide = function (hS, hR, hQ) {
      hS[0] = hR[0] / hQ[0];
      hS[1] = hR[1] / hQ[1];
      return hS;
    };
    hO.div = hO.divide;
    hO.min = function (hS, hR, hQ) {
      hS[0] = Math.min(hR[0], hQ[0]);
      hS[1] = Math.min(hR[1], hQ[1]);
      return hS;
    };
    hO.max = function (hS, hR, hQ) {
      hS[0] = Math.max(hR[0], hQ[0]);
      hS[1] = Math.max(hR[1], hQ[1]);
      return hS;
    };
    hO.scale = function (hS, hR, hQ) {
      hS[0] = hR[0] * hQ;
      hS[1] = hR[1] * hQ;
      return hS;
    };
    hO.scaleAndAdd = function (hS, hR, hQ, hT) {
      hS[0] = hR[0] + hQ[0] * hT;
      hS[1] = hR[1] + hQ[1] * hT;
      return hS;
    };
    hO.distance = function (hS, hR) {
      var hQ = hR[0] - hS[0],
        hT = hR[1] - hS[1];
      return Math.sqrt(hQ * hQ + hT * hT);
    };
    hO.dist = hO.distance;
    hO.squaredDistance = function (hS, hR) {
      var hQ = hR[0] - hS[0],
        hT = hR[1] - hS[1];
      return hQ * hQ + hT * hT;
    };
    hO.sqrDist = hO.squaredDistance;
    hO.length = function (hR) {
      var hQ = hR[0],
        hS = hR[1];
      return Math.sqrt(hQ * hQ + hS * hS);
    };
    hO.len = hO.length;
    hO.squaredLength = function (hR) {
      var hQ = hR[0],
        hS = hR[1];
      return hQ * hQ + hS * hS;
    };
    hO.sqrLen = hO.squaredLength;
    hO.negate = function (hR, hQ) {
      hR[0] = -hQ[0];
      hR[1] = -hQ[1];
      return hR;
    };
    hO.normalize = function (hT, hS) {
      var hR = hS[0],
        hU = hS[1];
      var hQ = hR * hR + hU * hU;
      if (hQ > 0) {
        hQ = 1 / Math.sqrt(hQ);
        hT[0] = hS[0] * hQ;
        hT[1] = hS[1] * hQ;
      }
      return hT;
    };
    hO.dot = function (hR, hQ) {
      return hR[0] * hQ[0] + hR[1] * hQ[1];
    };
    hO.cross = function (hS, hR, hQ) {
      var hT = hR[0] * hQ[1] - hR[1] * hQ[0];
      hS[0] = hS[1] = 0;
      hS[2] = hT;
      return hS;
    };
    hO.lerp = function (hS, hR, hQ, hT) {
      var hV = hR[0],
        hU = hR[1];
      hS[0] = hV + hT * (hQ[0] - hV);
      hS[1] = hU + hT * (hQ[1] - hU);
      return hS;
    };
    hO.random = function (hQ, hS) {
      hS = hS || 1;
      var hR = hJ() * 2 * Math.PI;
      hQ[0] = Math.cos(hR) * hS;
      hQ[1] = Math.sin(hR) * hS;
      return hQ;
    };
    hO.transformMat2 = function (hT, hS, hR) {
      var hQ = hS[0],
        hU = hS[1];
      hT[0] = hR[0] * hQ + hR[2] * hU;
      hT[1] = hR[1] * hQ + hR[3] * hU;
      return hT;
    };
    hO.transformMat2d = function (hT, hS, hR) {
      var hQ = hS[0],
        hU = hS[1];
      hT[0] = hR[0] * hQ + hR[2] * hU + hR[4];
      hT[1] = hR[1] * hQ + hR[3] * hU + hR[5];
      return hT;
    };
    hO.transformMat3 = function (hT, hS, hR) {
      var hQ = hS[0],
        hU = hS[1];
      hT[0] = hR[0] * hQ + hR[3] * hU + hR[6];
      hT[1] = hR[1] * hQ + hR[4] * hU + hR[7];
      return hT;
    };
    hO.transformMat4 = function (hT, hS, hR) {
      var hQ = hS[0],
        hU = hS[1];
      hT[0] = hR[0] * hQ + hR[4] * hU + hR[12];
      hT[1] = hR[1] * hQ + hR[5] * hU + hR[13];
      return hT;
    };
    hO.rotate = function (hT, hR, hQ, hX) {
      var hW = hR[0] - hQ[0];
      var hV = hR[1] - hQ[1];
      var hS = Math.sin(hX);
      var hU = Math.cos(hX);
      hT[0] = hW * hU - hV * hS + hQ[0];
      hT[1] = hW * hS + hV * hU + hQ[1];
      return hT;
    };
    hO.forEach = (function () {
      var hQ = hO.create();
      return function (hT, hX, hY, hW, hV, hR) {
        var hU, hS;
        if (!hX) {
          hX = 2;
        }
        if (!hY) {
          hY = 0;
        }
        if (hW) {
          hS = Math.min(hW * hX + hY, hT.length);
        } else {
          hS = hT.length;
        }
        for (hU = hY; hU < hS; hU += hX) {
          hQ[0] = hT[hU];
          hQ[1] = hT[hU + 1];
          hV(hQ, hQ, hR);
          hT[hU] = hQ[0];
          hT[hU + 1] = hQ[1];
        }
        return hT;
      };
    })();
    hO.str = function (hQ) {
      return 'vec2(' + hQ[0] + ', ' + hQ[1] + ')';
    };
    hL.vec2 = hO;
    var hN = {};
    hN.create = function (hR) {
      hR = hR || i;
      var hQ = new hR(3);
      hQ[0] = 0;
      hQ[1] = 0;
      hQ[2] = 0;
      return hQ;
    };
    hN.clone = function (hQ, hS) {
      hS = hS || i;
      var hR = new hS(3);
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      return hR;
    };
    hN.fromValues = function (hQ, hU, hS, hT) {
      hT = hT || i;
      var hR = new hT(3);
      hR[0] = hQ;
      hR[1] = hU;
      hR[2] = hS;
      return hR;
    };
    hN.copy = function (hR, hQ) {
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      return hR;
    };
    hN.set = function (hR, hQ, hT, hS) {
      hR[0] = hQ;
      hR[1] = hT;
      hR[2] = hS;
      return hR;
    };
    hN.add = function (hS, hR, hQ) {
      hS[0] = hR[0] + hQ[0];
      hS[1] = hR[1] + hQ[1];
      hS[2] = hR[2] + hQ[2];
      return hS;
    };
    hN.subtract = function (hS, hR, hQ) {
      hS[0] = hR[0] - hQ[0];
      hS[1] = hR[1] - hQ[1];
      hS[2] = hR[2] - hQ[2];
      return hS;
    };
    hN.sub = hN.subtract;
    hN.multiply = function (hS, hR, hQ) {
      hS[0] = hR[0] * hQ[0];
      hS[1] = hR[1] * hQ[1];
      hS[2] = hR[2] * hQ[2];
      return hS;
    };
    hN.mul = hN.multiply;
    hN.divide = function (hS, hR, hQ) {
      hS[0] = hR[0] / hQ[0];
      hS[1] = hR[1] / hQ[1];
      hS[2] = hR[2] / hQ[2];
      return hS;
    };
    hN.div = hN.divide;
    hN.min = function (hS, hR, hQ) {
      hS[0] = Math.min(hR[0], hQ[0]);
      hS[1] = Math.min(hR[1], hQ[1]);
      hS[2] = Math.min(hR[2], hQ[2]);
      return hS;
    };
    hN.max = function (hS, hR, hQ) {
      hS[0] = Math.max(hR[0], hQ[0]);
      hS[1] = Math.max(hR[1], hQ[1]);
      hS[2] = Math.max(hR[2], hQ[2]);
      return hS;
    };
    hN.scale = function (hS, hR, hQ) {
      hS[0] = hR[0] * hQ;
      hS[1] = hR[1] * hQ;
      hS[2] = hR[2] * hQ;
      return hS;
    };
    hN.scaleAndAdd = function (hS, hR, hQ, hT) {
      hS[0] = hR[0] + hQ[0] * hT;
      hS[1] = hR[1] + hQ[1] * hT;
      hS[2] = hR[2] + hQ[2] * hT;
      return hS;
    };
    hN.distance = function (hS, hR) {
      var hQ = hR[0] - hS[0],
        hU = hR[1] - hS[1],
        hT = hR[2] - hS[2];
      return Math.sqrt(hQ * hQ + hU * hU + hT * hT);
    };
    hN.dist = hN.distance;
    hN.squaredDistance = function (hS, hR) {
      var hQ = hR[0] - hS[0],
        hU = hR[1] - hS[1],
        hT = hR[2] - hS[2];
      return hQ * hQ + hU * hU + hT * hT;
    };
    hN.sqrDist = hN.squaredDistance;
    hN.length = function (hR) {
      var hQ = hR[0],
        hT = hR[1],
        hS = hR[2];
      return Math.sqrt(hQ * hQ + hT * hT + hS * hS);
    };
    hN.len = hN.length;
    hN.squaredLength = function (hR) {
      var hQ = hR[0],
        hT = hR[1],
        hS = hR[2];
      return hQ * hQ + hT * hT + hS * hS;
    };
    hN.sqrLen = hN.squaredLength;
    hN.negate = function (hR, hQ) {
      hR[0] = -hQ[0];
      hR[1] = -hQ[1];
      hR[2] = -hQ[2];
      return hR;
    };
    hN.normalize = function (hT, hS) {
      var hR = hS[0],
        hV = hS[1],
        hU = hS[2];
      var hQ = hR * hR + hV * hV + hU * hU;
      if (hQ > 0) {
        hQ = 1 / Math.sqrt(hQ);
        hT[0] = hS[0] * hQ;
        hT[1] = hS[1] * hQ;
        hT[2] = hS[2] * hQ;
      }
      return hT;
    };
    hN.dot = function (hR, hQ) {
      return hR[0] * hQ[0] + hR[1] * hQ[1] + hR[2] * hQ[2];
    };
    hN.cross = function (hR, hW, hV) {
      var hQ = hW[0],
        hY = hW[1],
        hX = hW[2],
        hU = hV[0],
        hT = hV[1],
        hS = hV[2];
      hR[0] = hY * hS - hX * hT;
      hR[1] = hX * hU - hQ * hS;
      hR[2] = hQ * hT - hY * hU;
      return hR;
    };
    hN.lerp = function (hS, hR, hQ, hT) {
      var hW = hR[0],
        hV = hR[1],
        hU = hR[2];
      hS[0] = hW + hT * (hQ[0] - hW);
      hS[1] = hV + hT * (hQ[1] - hV);
      hS[2] = hU + hT * (hQ[2] - hU);
      return hS;
    };
    hN.random = function (hQ, hU) {
      hU = hU || 1;
      var hS = hJ() * 2 * Math.PI;
      var hT = hJ() * 2 - 1;
      var hR = Math.sqrt(1 - hT * hT) * hU;
      hQ[0] = Math.cos(hS) * hR;
      hQ[1] = Math.sin(hS) * hR;
      hQ[2] = hT * hU;
      return hQ;
    };
    hN.transformMat4 = function (hT, hS, hR) {
      var hQ = hS[0],
        hV = hS[1],
        hU = hS[2];
      hT[0] = hR[0] * hQ + hR[4] * hV + hR[8] * hU + hR[12];
      hT[1] = hR[1] * hQ + hR[5] * hV + hR[9] * hU + hR[13];
      hT[2] = hR[2] * hQ + hR[6] * hV + hR[10] * hU + hR[14];
      return hT;
    };
    hN.transformMat3 = function (hT, hS, hR) {
      var hQ = hS[0],
        hV = hS[1],
        hU = hS[2];
      hT[0] = hQ * hR[0] + hV * hR[3] + hU * hR[6];
      hT[1] = hQ * hR[1] + hV * hR[4] + hU * hR[7];
      hT[2] = hQ * hR[2] + hV * hR[5] + hU * hR[8];
      return hT;
    };
    hN.transformQuat = function (hW, h2, hQ) {
      var h3 = h2[0],
        h1 = h2[1],
        h0 = h2[2],
        hY = hQ[0],
        hX = hQ[1],
        hV = hQ[2],
        hZ = hQ[3],
        hT = hZ * h3 + hX * h0 - hV * h1,
        hS = hZ * h1 + hV * h3 - hY * h0,
        hR = hZ * h0 + hY * h1 - hX * h3,
        hU = -hY * h3 - hX * h1 - hV * h0;
      hW[0] = hT * hZ + hU * -hY + hS * -hV - hR * -hX;
      hW[1] = hS * hZ + hU * -hX + hR * -hY - hT * -hV;
      hW[2] = hR * hZ + hU * -hV + hT * -hX - hS * -hY;
      return hW;
    };
    hN.rotateX = function (hS, hR, hQ, hV) {
      var hU = [],
        hT = [];
      hU[0] = hR[0] - hQ[0];
      hU[1] = hR[1] - hQ[1];
      hU[2] = hR[2] - hQ[2];
      hT[0] = hU[0];
      hT[1] = hU[1] * Math.cos(hV) - hU[2] * Math.sin(hV);
      hT[2] = hU[1] * Math.sin(hV) + hU[2] * Math.cos(hV);
      hS[0] = hT[0] + hQ[0];
      hS[1] = hT[1] + hQ[1];
      hS[2] = hT[2] + hQ[2];
      return hS;
    };
    hN.rotateY = function (hS, hR, hQ, hV) {
      var hU = [],
        hT = [];
      hU[0] = hR[0] - hQ[0];
      hU[1] = hR[1] - hQ[1];
      hU[2] = hR[2] - hQ[2];
      hT[0] = hU[2] * Math.sin(hV) + hU[0] * Math.cos(hV);
      hT[1] = hU[1];
      hT[2] = hU[2] * Math.cos(hV) - hU[0] * Math.sin(hV);
      hS[0] = hT[0] + hQ[0];
      hS[1] = hT[1] + hQ[1];
      hS[2] = hT[2] + hQ[2];
      return hS;
    };
    hN.rotateZ = function (hS, hR, hQ, hV) {
      var hU = [],
        hT = [];
      hU[0] = hR[0] - hQ[0];
      hU[1] = hR[1] - hQ[1];
      hU[2] = hR[2] - hQ[2];
      hT[0] = hU[0] * Math.cos(hV) - hU[1] * Math.sin(hV);
      hT[1] = hU[0] * Math.sin(hV) + hU[1] * Math.cos(hV);
      hT[2] = hU[2];
      hS[0] = hT[0] + hQ[0];
      hS[1] = hT[1] + hQ[1];
      hS[2] = hT[2] + hQ[2];
      return hS;
    };
    hN.forEach = (function () {
      var hQ = hN.create();
      return function (hT, hX, hY, hW, hV, hR) {
        var hU, hS;
        if (!hX) {
          hX = 3;
        }
        if (!hY) {
          hY = 0;
        }
        if (hW) {
          hS = Math.min(hW * hX + hY, hT.length);
        } else {
          hS = hT.length;
        }
        for (hU = hY; hU < hS; hU += hX) {
          hQ[0] = hT[hU];
          hQ[1] = hT[hU + 1];
          hQ[2] = hT[hU + 2];
          hV(hQ, hQ, hR);
          hT[hU] = hQ[0];
          hT[hU + 1] = hQ[1];
          hT[hU + 2] = hQ[2];
        }
        return hT;
      };
    })();
    hN.str = function (hQ) {
      return 'vec3(' + hQ[0] + ', ' + hQ[1] + ', ' + hQ[2] + ')';
    };
    hL.vec3 = hN;
    var hM = {};
    hM.create = function (hR) {
      hR = hR || i;
      var hQ = new hR(4);
      hQ[0] = 0;
      hQ[1] = 0;
      hQ[2] = 0;
      hQ[3] = 0;
      return hQ;
    };
    hM.clone = function (hQ, hS) {
      hS = hS || i;
      var hR = new hS(4);
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      hR[3] = hQ[3];
      return hR;
    };
    hM.fromValues = function (hQ, hV, hT, hR, hU) {
      hU = hU || i;
      var hS = new hU(4);
      hS[0] = hQ;
      hS[1] = hV;
      hS[2] = hT;
      hS[3] = hR;
      return hS;
    };
    hM.copy = function (hR, hQ) {
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      hR[3] = hQ[3];
      return hR;
    };
    hM.set = function (hS, hQ, hU, hT, hR) {
      hS[0] = hQ;
      hS[1] = hU;
      hS[2] = hT;
      hS[3] = hR;
      return hS;
    };
    hM.add = function (hS, hR, hQ) {
      hS[0] = hR[0] + hQ[0];
      hS[1] = hR[1] + hQ[1];
      hS[2] = hR[2] + hQ[2];
      hS[3] = hR[3] + hQ[3];
      return hS;
    };
    hM.subtract = function (hS, hR, hQ) {
      hS[0] = hR[0] - hQ[0];
      hS[1] = hR[1] - hQ[1];
      hS[2] = hR[2] - hQ[2];
      hS[3] = hR[3] - hQ[3];
      return hS;
    };
    hM.sub = hM.subtract;
    hM.multiply = function (hS, hR, hQ) {
      hS[0] = hR[0] * hQ[0];
      hS[1] = hR[1] * hQ[1];
      hS[2] = hR[2] * hQ[2];
      hS[3] = hR[3] * hQ[3];
      return hS;
    };
    hM.mul = hM.multiply;
    hM.divide = function (hS, hR, hQ) {
      hS[0] = hR[0] / hQ[0];
      hS[1] = hR[1] / hQ[1];
      hS[2] = hR[2] / hQ[2];
      hS[3] = hR[3] / hQ[3];
      return hS;
    };
    hM.div = hM.divide;
    hM.min = function (hS, hR, hQ) {
      hS[0] = Math.min(hR[0], hQ[0]);
      hS[1] = Math.min(hR[1], hQ[1]);
      hS[2] = Math.min(hR[2], hQ[2]);
      hS[3] = Math.min(hR[3], hQ[3]);
      return hS;
    };
    hM.max = function (hS, hR, hQ) {
      hS[0] = Math.max(hR[0], hQ[0]);
      hS[1] = Math.max(hR[1], hQ[1]);
      hS[2] = Math.max(hR[2], hQ[2]);
      hS[3] = Math.max(hR[3], hQ[3]);
      return hS;
    };
    hM.scale = function (hS, hR, hQ) {
      hS[0] = hR[0] * hQ;
      hS[1] = hR[1] * hQ;
      hS[2] = hR[2] * hQ;
      hS[3] = hR[3] * hQ;
      return hS;
    };
    hM.scaleAndAdd = function (hS, hR, hQ, hT) {
      hS[0] = hR[0] + hQ[0] * hT;
      hS[1] = hR[1] + hQ[1] * hT;
      hS[2] = hR[2] + hQ[2] * hT;
      hS[3] = hR[3] + hQ[3] * hT;
      return hS;
    };
    hM.distance = function (hT, hR) {
      var hQ = hR[0] - hT[0],
        hV = hR[1] - hT[1],
        hU = hR[2] - hT[2],
        hS = hR[3] - hT[3];
      return Math.sqrt(hQ * hQ + hV * hV + hU * hU + hS * hS);
    };
    hM.dist = hM.distance;
    hM.squaredDistance = function (hT, hR) {
      var hQ = hR[0] - hT[0],
        hV = hR[1] - hT[1],
        hU = hR[2] - hT[2],
        hS = hR[3] - hT[3];
      return hQ * hQ + hV * hV + hU * hU + hS * hS;
    };
    hM.sqrDist = hM.squaredDistance;
    hM.length = function (hS) {
      var hQ = hS[0],
        hU = hS[1],
        hT = hS[2],
        hR = hS[3];
      return Math.sqrt(hQ * hQ + hU * hU + hT * hT + hR * hR);
    };
    hM.len = hM.length;
    hM.squaredLength = function (hS) {
      var hQ = hS[0],
        hU = hS[1],
        hT = hS[2],
        hR = hS[3];
      return hQ * hQ + hU * hU + hT * hT + hR * hR;
    };
    hM.sqrLen = hM.squaredLength;
    hM.negate = function (hR, hQ) {
      hR[0] = -hQ[0];
      hR[1] = -hQ[1];
      hR[2] = -hQ[2];
      hR[3] = -hQ[3];
      return hR;
    };
    hM.normalize = function (hU, hT) {
      var hR = hT[0],
        hW = hT[1],
        hV = hT[2],
        hS = hT[3];
      var hQ = hR * hR + hW * hW + hV * hV + hS * hS;
      if (hQ > 0) {
        hQ = 1 / Math.sqrt(hQ);
        hU[0] = hT[0] * hQ;
        hU[1] = hT[1] * hQ;
        hU[2] = hT[2] * hQ;
        hU[3] = hT[3] * hQ;
      }
      return hU;
    };
    hM.dot = function (hR, hQ) {
      return hR[0] * hQ[0] + hR[1] * hQ[1] + hR[2] * hQ[2] + hR[3] * hQ[3];
    };
    hM.lerp = function (hS, hR, hQ, hT) {
      var hW = hR[0],
        hV = hR[1],
        hU = hR[2],
        hX = hR[3];
      hS[0] = hW + hT * (hQ[0] - hW);
      hS[1] = hV + hT * (hQ[1] - hV);
      hS[2] = hU + hT * (hQ[2] - hU);
      hS[3] = hX + hT * (hQ[3] - hX);
      return hS;
    };
    hM.random = function (hQ, hR) {
      hR = hR || 1;
      hQ[0] = hJ();
      hQ[1] = hJ();
      hQ[2] = hJ();
      hQ[3] = hJ();
      hM.normalize(hQ, hQ);
      hM.scale(hQ, hQ, hR);
      return hQ;
    };
    hM.transformMat4 = function (hU, hT, hR) {
      var hQ = hT[0],
        hW = hT[1],
        hV = hT[2],
        hS = hT[3];
      hU[0] = hR[0] * hQ + hR[4] * hW + hR[8] * hV + hR[12] * hS;
      hU[1] = hR[1] * hQ + hR[5] * hW + hR[9] * hV + hR[13] * hS;
      hU[2] = hR[2] * hQ + hR[6] * hW + hR[10] * hV + hR[14] * hS;
      hU[3] = hR[3] * hQ + hR[7] * hW + hR[11] * hV + hR[15] * hS;
      return hU;
    };
    hM.transformQuat = function (hW, h2, hQ) {
      var h3 = h2[0],
        h1 = h2[1],
        h0 = h2[2],
        hY = hQ[0],
        hX = hQ[1],
        hV = hQ[2],
        hZ = hQ[3],
        hT = hZ * h3 + hX * h0 - hV * h1,
        hS = hZ * h1 + hV * h3 - hY * h0,
        hR = hZ * h0 + hY * h1 - hX * h3,
        hU = -hY * h3 - hX * h1 - hV * h0;
      hW[0] = hT * hZ + hU * -hY + hS * -hV - hR * -hX;
      hW[1] = hS * hZ + hU * -hX + hR * -hY - hT * -hV;
      hW[2] = hR * hZ + hU * -hV + hT * -hX - hS * -hY;
      return hW;
    };
    hM.forEach = (function () {
      var hQ = hM.create();
      return function (hT, hX, hY, hW, hV, hR) {
        var hU, hS;
        if (!hX) {
          hX = 4;
        }
        if (!hY) {
          hY = 0;
        }
        if (hW) {
          hS = Math.min(hW * hX + hY, hT.length);
        } else {
          hS = hT.length;
        }
        for (hU = hY; hU < hS; hU += hX) {
          hQ[0] = hT[hU];
          hQ[1] = hT[hU + 1];
          hQ[2] = hT[hU + 2];
          hQ[3] = hT[hU + 3];
          hV(hQ, hQ, hR);
          hT[hU] = hQ[0];
          hT[hU + 1] = hQ[1];
          hT[hU + 2] = hQ[2];
          hT[hU + 3] = hQ[3];
        }
        return hT;
      };
    })();
    hM.str = function (hQ) {
      return 'vec4(' + hQ[0] + ', ' + hQ[1] + ', ' + hQ[2] + ', ' + hQ[3] + ')';
    };
    hL.vec4 = hM;
    var hI = {};
    hI.create = function (hR) {
      hR = hR || i;
      var hQ = new hR(4);
      hQ[0] = 1;
      hQ[1] = 0;
      hQ[2] = 0;
      hQ[3] = 1;
      return hQ;
    };
    hI.clone = function (hQ, hS) {
      hS = hS || i;
      var hR = new hS(4);
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      hR[3] = hQ[3];
      return hR;
    };
    hI.copy = function (hR, hQ) {
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      hR[3] = hQ[3];
      return hR;
    };
    hI.identity = function (hQ) {
      hQ[0] = 1;
      hQ[1] = 0;
      hQ[2] = 0;
      hQ[3] = 1;
      return hQ;
    };
    hI.transpose = function (hS, hR) {
      if (hS === hR) {
        var hQ = hR[1];
        hS[1] = hR[2];
        hS[2] = hQ;
      } else {
        hS[0] = hR[0];
        hS[1] = hR[2];
        hS[2] = hR[1];
        hS[3] = hR[3];
      }
      return hS;
    };
    hI.invert = function (hU, hS) {
      var hT = hS[0],
        hR = hS[1],
        hQ = hS[2],
        hW = hS[3],
        hV = hT * hW - hQ * hR;
      if (!hV) {
        return null;
      }
      hV = 1 / hV;
      hU[0] = hW * hV;
      hU[1] = -hR * hV;
      hU[2] = -hQ * hV;
      hU[3] = hT * hV;
      return hU;
    };
    hI.adjoint = function (hS, hQ) {
      var hR = hQ[0];
      hS[0] = hQ[3];
      hS[1] = -hQ[1];
      hS[2] = -hQ[2];
      hS[3] = hR;
      return hS;
    };
    hI.determinant = function (hQ) {
      return hQ[0] * hQ[3] - hQ[2] * hQ[1];
    };
    hI.multiply = function (hU, hZ, hX) {
      var hT = hZ[0],
        hS = hZ[1],
        hR = hZ[2],
        hQ = hZ[3];
      var h0 = hX[0],
        hY = hX[1],
        hW = hX[2],
        hV = hX[3];
      hU[0] = hT * h0 + hR * hY;
      hU[1] = hS * h0 + hQ * hY;
      hU[2] = hT * hW + hR * hV;
      hU[3] = hS * hW + hQ * hV;
      return hU;
    };
    hI.mul = hI.multiply;
    hI.rotate = function (hU, hX, hW) {
      var hT = hX[0],
        hS = hX[1],
        hR = hX[2],
        hQ = hX[3],
        hY = Math.sin(hW),
        hV = Math.cos(hW);
      hU[0] = hT * hV + hR * hY;
      hU[1] = hS * hV + hQ * hY;
      hU[2] = hT * -hY + hR * hV;
      hU[3] = hS * -hY + hQ * hV;
      return hU;
    };
    hI.scale = function (hU, hV, hX) {
      var hT = hV[0],
        hS = hV[1],
        hR = hV[2],
        hQ = hV[3],
        hY = hX[0],
        hW = hX[1];
      hU[0] = hT * hY;
      hU[1] = hS * hY;
      hU[2] = hR * hW;
      hU[3] = hQ * hW;
      return hU;
    };
    hI.str = function (hQ) {
      return 'mat2(' + hQ[0] + ', ' + hQ[1] + ', ' + hQ[2] + ', ' + hQ[3] + ')';
    };
    hI.frob = function (hQ) {
      return Math.sqrt(
        Math.pow(hQ[0], 2) + Math.pow(hQ[1], 2) + Math.pow(hQ[2], 2) + Math.pow(hQ[3], 2),
      );
    };
    hI.LDU = function (hQ, hT, hS, hR) {
      hQ[2] = hR[2] / hR[0];
      hS[0] = hR[0];
      hS[1] = hR[1];
      hS[3] = hR[3] - hQ[2] * hS[1];
      return [hQ, hT, hS];
    };
    hL.mat2 = hI;
    var e = {};
    e.create = function (hR) {
      hR = hR || i;
      var hQ = new hR(16);
      hQ[0] = 1;
      hQ[1] = 0;
      hQ[2] = 0;
      hQ[3] = 0;
      hQ[4] = 0;
      hQ[5] = 1;
      hQ[6] = 0;
      hQ[7] = 0;
      hQ[8] = 0;
      hQ[9] = 0;
      hQ[10] = 1;
      hQ[11] = 0;
      hQ[12] = 0;
      hQ[13] = 0;
      hQ[14] = 0;
      hQ[15] = 1;
      return hQ;
    };
    e.clone = function (hQ) {
      var hR = new i(16);
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      hR[3] = hQ[3];
      hR[4] = hQ[4];
      hR[5] = hQ[5];
      hR[6] = hQ[6];
      hR[7] = hQ[7];
      hR[8] = hQ[8];
      hR[9] = hQ[9];
      hR[10] = hQ[10];
      hR[11] = hQ[11];
      hR[12] = hQ[12];
      hR[13] = hQ[13];
      hR[14] = hQ[14];
      hR[15] = hQ[15];
      return hR;
    };
    e.copy = function (hR, hQ) {
      hR[0] = hQ[0];
      hR[1] = hQ[1];
      hR[2] = hQ[2];
      hR[3] = hQ[3];
      hR[4] = hQ[4];
      hR[5] = hQ[5];
      hR[6] = hQ[6];
      hR[7] = hQ[7];
      hR[8] = hQ[8];
      hR[9] = hQ[9];
      hR[10] = hQ[10];
      hR[11] = hQ[11];
      hR[12] = hQ[12];
      hR[13] = hQ[13];
      hR[14] = hQ[14];
      hR[15] = hQ[15];
      return hR;
    };
    e.identity = function (hQ) {
      hQ[0] = 1;
      hQ[1] = 0;
      hQ[2] = 0;
      hQ[3] = 0;
      hQ[4] = 0;
      hQ[5] = 1;
      hQ[6] = 0;
      hQ[7] = 0;
      hQ[8] = 0;
      hQ[9] = 0;
      hQ[10] = 1;
      hQ[11] = 0;
      hQ[12] = 0;
      hQ[13] = 0;
      hQ[14] = 0;
      hQ[15] = 1;
      return hQ;
    };
    e.transpose = function (hT, hS) {
      if (hT === hS) {
        var hX = hS[1],
          hV = hS[2],
          hU = hS[3],
          hQ = hS[6],
          hW = hS[7],
          hR = hS[11];
        hT[1] = hS[4];
        hT[2] = hS[8];
        hT[3] = hS[12];
        hT[4] = hX;
        hT[6] = hS[9];
        hT[7] = hS[13];
        hT[8] = hV;
        hT[9] = hQ;
        hT[11] = hS[14];
        hT[12] = hU;
        hT[13] = hW;
        hT[14] = hR;
      } else {
        hT[0] = hS[0];
        hT[1] = hS[4];
        hT[2] = hS[8];
        hT[3] = hS[12];
        hT[4] = hS[1];
        hT[5] = hS[5];
        hT[6] = hS[9];
        hT[7] = hS[13];
        hT[8] = hS[2];
        hT[9] = hS[6];
        hT[10] = hS[10];
        hT[11] = hS[14];
        hT[12] = hS[3];
        hT[13] = hS[7];
        hT[14] = hS[11];
        hT[15] = hS[15];
      }
      return hT;
    };
    e.invert = function (h9, ie) {
      var ij = ie[0],
        ih = ie[1],
        ig = ie[2],
        ic = ie[3],
        hU = ie[4],
        hT = ie[5],
        hS = ie[6],
        hR = ie[7],
        h8 = ie[8],
        h7 = ie[9],
        h6 = ie[10],
        h5 = ie[11],
        il = ie[12],
        ik = ie[13],
        ii = ie[14],
        id = ie[15],
        h4 = ij * hT - ih * hU,
        h3 = ij * hS - ig * hU,
        h2 = ij * hR - ic * hU,
        h1 = ih * hS - ig * hT,
        h0 = ih * hR - ic * hT,
        hZ = ig * hR - ic * hS,
        hY = h8 * ik - h7 * il,
        hX = h8 * ii - h6 * il,
        hW = h8 * id - h5 * il,
        hV = h7 * ii - h6 * ik,
        ib = h7 * id - h5 * ik,
        ia = h6 * id - h5 * ii,
        hQ = h4 * ia - h3 * ib + h2 * hV + h1 * hW - h0 * hX + hZ * hY;
      if (!hQ) {
        return null;
      }
      hQ = 1 / hQ;
      h9[0] = (hT * ia - hS * ib + hR * hV) * hQ;
      h9[1] = (ig * ib - ih * ia - ic * hV) * hQ;
      h9[2] = (ik * hZ - ii * h0 + id * h1) * hQ;
      h9[3] = (h6 * h0 - h7 * hZ - h5 * h1) * hQ;
      h9[4] = (hS * hW - hU * ia - hR * hX) * hQ;
      h9[5] = (ij * ia - ig * hW + ic * hX) * hQ;
      h9[6] = (ii * h2 - il * hZ - id * h3) * hQ;
      h9[7] = (h8 * hZ - h6 * h2 + h5 * h3) * hQ;
      h9[8] = (hU * ib - hT * hW + hR * hY) * hQ;
      h9[9] = (ih * hW - ij * ib - ic * hY) * hQ;
      h9[10] = (il * h0 - ik * h2 + id * h4) * hQ;
      h9[11] = (h7 * h2 - h8 * h0 - h5 * h4) * hQ;
      h9[12] = (hT * hX - hU * hV - hS * hY) * hQ;
      h9[13] = (ij * hV - ih * hX + ig * hY) * hQ;
      h9[14] = (ik * h3 - il * h1 - ii * h4) * hQ;
      h9[15] = (h8 * h1 - h7 * h3 + h6 * h4) * hQ;
      return h9;
    };
    e.adjoint = function (hY, h1) {
      var h5 = h1[0],
        h3 = h1[1],
        h2 = h1[2],
        hZ = h1[3],
        hT = h1[4],
        hS = h1[5],
        hR = h1[6],
        hQ = h1[7],
        hX = h1[8],
        hW = h1[9],
        hV = h1[10],
        hU = h1[11],
        h7 = h1[12],
        h6 = h1[13],
        h4 = h1[14],
        h0 = h1[15];
      hY[0] = hS * (hV * h0 - hU * h4) - hW * (hR * h0 - hQ * h4) + h6 * (hR * hU - hQ * hV);
      hY[1] = -(h3 * (hV * h0 - hU * h4) - hW * (h2 * h0 - hZ * h4) + h6 * (h2 * hU - hZ * hV));
      hY[2] = h3 * (hR * h0 - hQ * h4) - hS * (h2 * h0 - hZ * h4) + h6 * (h2 * hQ - hZ * hR);
      hY[3] = -(h3 * (hR * hU - hQ * hV) - hS * (h2 * hU - hZ * hV) + hW * (h2 * hQ - hZ * hR));
      hY[4] = -(hT * (hV * h0 - hU * h4) - hX * (hR * h0 - hQ * h4) + h7 * (hR * hU - hQ * hV));
      hY[5] = h5 * (hV * h0 - hU * h4) - hX * (h2 * h0 - hZ * h4) + h7 * (h2 * hU - hZ * hV);
      hY[6] = -(h5 * (hR * h0 - hQ * h4) - hT * (h2 * h0 - hZ * h4) + h7 * (h2 * hQ - hZ * hR));
      hY[7] = h5 * (hR * hU - hQ * hV) - hT * (h2 * hU - hZ * hV) + hX * (h2 * hQ - hZ * hR);
      hY[8] = hT * (hW * h0 - hU * h6) - hX * (hS * h0 - hQ * h6) + h7 * (hS * hU - hQ * hW);
      hY[9] = -(h5 * (hW * h0 - hU * h6) - hX * (h3 * h0 - hZ * h6) + h7 * (h3 * hU - hZ * hW));
      hY[10] = h5 * (hS * h0 - hQ * h6) - hT * (h3 * h0 - hZ * h6) + h7 * (h3 * hQ - hZ * hS);
      hY[11] = -(h5 * (hS * hU - hQ * hW) - hT * (h3 * hU - hZ * hW) + hX * (h3 * hQ - hZ * hS));
      hY[12] = -(hT * (hW * h4 - hV * h6) - hX * (hS * h4 - hR * h6) + h7 * (hS * hV - hR * hW));
      hY[13] = h5 * (hW * h4 - hV * h6) - hX * (h3 * h4 - h2 * h6) + h7 * (h3 * hV - h2 * hW);
      hY[14] = -(h5 * (hS * h4 - hR * h6) - hT * (h3 * h4 - h2 * h6) + h7 * (h3 * hR - h2 * hS));
      hY[15] = h5 * (hS * hV - hR * hW) - hT * (h3 * hV - h2 * hW) + hX * (h3 * hR - h2 * hS);
      return hY;
    };
    e.determinant = function (ib) {
      var ih = ib[0],
        ie = ib[1],
        ic = ib[2],
        ia = ib[3],
        hT = ib[4],
        hS = ib[5],
        hR = ib[6],
        hQ = ib[7],
        h7 = ib[8],
        h6 = ib[9],
        h5 = ib[10],
        h4 = ib[11],
        ij = ib[12],
        ii = ib[13],
        ig = ib[14],
        id = ib[15],
        h3 = ih * hS - ie * hT,
        h2 = ih * hR - ic * hT,
        h1 = ih * hQ - ia * hT,
        h0 = ie * hR - ic * hS,
        hZ = ie * hQ - ia * hS,
        hY = ic * hQ - ia * hR,
        hX = h7 * ii - h6 * ij,
        hW = h7 * ig - h5 * ij,
        hV = h7 * id - h4 * ij,
        hU = h6 * ig - h5 * ii,
        h9 = h6 * id - h4 * ii,
        h8 = h5 * id - h4 * ig;
      return h3 * h8 - h2 * h9 + h1 * hU + h0 * hV - hZ * hW + hY * hX;
    };
    e.multiply = function (h2, h6, h3) {
      var ia = h6[0],
        h9 = h6[1],
        h7 = h6[2],
        h4 = h6[3],
        hW = h6[4],
        hU = h6[5],
        hS = h6[6],
        hQ = h6[7],
        h1 = h6[8],
        h0 = h6[9],
        hZ = h6[10],
        hY = h6[11],
        ic = h6[12],
        ib = h6[13],
        h8 = h6[14],
        h5 = h6[15];
      var hX = h3[0],
        hV = h3[1],
        hT = h3[2],
        hR = h3[3];
      h2[0] = hX * ia + hV * hW + hT * h1 + hR * ic;
      h2[1] = hX * h9 + hV * hU + hT * h0 + hR * ib;
      h2[2] = hX * h7 + hV * hS + hT * hZ + hR * h8;
      h2[3] = hX * h4 + hV * hQ + hT * hY + hR * h5;
      hX = h3[4];
      hV = h3[5];
      hT = h3[6];
      hR = h3[7];
      h2[4] = hX * ia + hV * hW + hT * h1 + hR * ic;
      h2[5] = hX * h9 + hV * hU + hT * h0 + hR * ib;
      h2[6] = hX * h7 + hV * hS + hT * hZ + hR * h8;
      h2[7] = hX * h4 + hV * hQ + hT * hY + hR * h5;
      hX = h3[8];
      hV = h3[9];
      hT = h3[10];
      hR = h3[11];
      h2[8] = hX * ia + hV * hW + hT * h1 + hR * ic;
      h2[9] = hX * h9 + hV * hU + hT * h0 + hR * ib;
      h2[10] = hX * h7 + hV * hS + hT * hZ + hR * h8;
      h2[11] = hX * h4 + hV * hQ + hT * hY + hR * h5;
      hX = h3[12];
      hV = h3[13];
      hT = h3[14];
      hR = h3[15];
      h2[12] = hX * ia + hV * hW + hT * h1 + hR * ic;
      h2[13] = hX * h9 + hV * hU + hT * h0 + hR * ib;
      h2[14] = hX * h7 + hV * hS + hT * hZ + hR * h8;
      h2[15] = hX * h4 + hV * hQ + hT * hY + hR * h5;
      return h2;
    };
    e.mul = e.multiply;
    e.translate = function (h2, h4, hX) {
      var hW = hX[0],
        hV = hX[1],
        hU = hX[2],
        h7,
        h6,
        h5,
        h3,
        hT,
        hS,
        hR,
        hQ,
        h1,
        h0,
        hZ,
        hY;
      if (h4 === h2) {
        h2[12] = h4[0] * hW + h4[4] * hV + h4[8] * hU + h4[12];
        h2[13] = h4[1] * hW + h4[5] * hV + h4[9] * hU + h4[13];
        h2[14] = h4[2] * hW + h4[6] * hV + h4[10] * hU + h4[14];
        h2[15] = h4[3] * hW + h4[7] * hV + h4[11] * hU + h4[15];
      } else {
        h7 = h4[0];
        h6 = h4[1];
        h5 = h4[2];
        h3 = h4[3];
        hT = h4[4];
        hS = h4[5];
        hR = h4[6];
        hQ = h4[7];
        h1 = h4[8];
        h0 = h4[9];
        hZ = h4[10];
        hY = h4[11];
        h2[0] = h7;
        h2[1] = h6;
        h2[2] = h5;
        h2[3] = h3;
        h2[4] = hT;
        h2[5] = hS;
        h2[6] = hR;
        h2[7] = hQ;
        h2[8] = h1;
        h2[9] = h0;
        h2[10] = hZ;
        h2[11] = hY;
        h2[12] = h7 * hW + hT * hV + h1 * hU + h4[12];
        h2[13] = h6 * hW + hS * hV + h0 * hU + h4[13];
        h2[14] = h5 * hW + hR * hV + hZ * hU + h4[14];
        h2[15] = h3 * hW + hQ * hV + hY * hU + h4[15];
      }
      return h2;
    };
    e.scale = function (hT, hR, hS) {
      var hQ = hS[0],
        hV = hS[1],
        hU = hS[2];
      hT[0] = hR[0] * hQ;
      hT[1] = hR[1] * hQ;
      hT[2] = hR[2] * hQ;
      hT[3] = hR[3] * hQ;
      hT[4] = hR[4] * hV;
      hT[5] = hR[5] * hV;
      hT[6] = hR[6] * hV;
      hT[7] = hR[7] * hV;
      hT[8] = hR[8] * hU;
      hT[9] = hR[9] * hU;
      hT[10] = hR[10] * hU;
      hT[11] = hR[11] * hU;
      hT[12] = hR[12];
      hT[13] = hR[13];
      hT[14] = hR[14];
      hT[15] = hR[15];
      return hT;
    };
    e.rotate = function (ia, ii, ik, hQ) {
      var h0 = hQ[0],
        hZ = hQ[1],
        hY = hQ[2],
        ib = Math.sqrt(h0 * h0 + hZ * hZ + hY * hY),
        h5,
        ig,
        h4,
        im,
        il,
        ij,
        ih,
        hX,
        hW,
        hV,
        hU,
        h9,
        h8,
        h7,
        h6,
        h3,
        h2,
        h1,
        ie,
        id,
        ic,
        hT,
        hS,
        hR;
      if (Math.abs(ib) < hP) {
        return null;
      }
      ib = 1 / ib;
      h0 *= ib;
      hZ *= ib;
      hY *= ib;
      h5 = Math.sin(ik);
      ig = Math.cos(ik);
      h4 = 1 - ig;
      im = ii[0];
      il = ii[1];
      ij = ii[2];
      ih = ii[3];
      hX = ii[4];
      hW = ii[5];
      hV = ii[6];
      hU = ii[7];
      h9 = ii[8];
      h8 = ii[9];
      h7 = ii[10];
      h6 = ii[11];
      h3 = h0 * h0 * h4 + ig;
      h2 = hZ * h0 * h4 + hY * h5;
      h1 = hY * h0 * h4 - hZ * h5;
      ie = h0 * hZ * h4 - hY * h5;
      id = hZ * hZ * h4 + ig;
      ic = hY * hZ * h4 + h0 * h5;
      hT = h0 * hY * h4 + hZ * h5;
      hS = hZ * hY * h4 - h0 * h5;
      hR = hY * hY * h4 + ig;
      ia[0] = im * h3 + hX * h2 + h9 * h1;
      ia[1] = il * h3 + hW * h2 + h8 * h1;
      ia[2] = ij * h3 + hV * h2 + h7 * h1;
      ia[3] = ih * h3 + hU * h2 + h6 * h1;
      ia[4] = im * ie + hX * id + h9 * ic;
      ia[5] = il * ie + hW * id + h8 * ic;
      ia[6] = ij * ie + hV * id + h7 * ic;
      ia[7] = ih * ie + hU * id + h6 * ic;
      ia[8] = im * hT + hX * hS + h9 * hR;
      ia[9] = il * hT + hW * hS + h8 * hR;
      ia[10] = ij * hT + hV * hS + h7 * hR;
      ia[11] = ih * hT + hU * hS + h6 * hR;
      if (ii !== ia) {
        ia[12] = ii[12];
        ia[13] = ii[13];
        ia[14] = ii[14];
        ia[15] = ii[15];
      }
      return ia;
    };
    e.rotateX = function (hQ, hX, hW) {
      var h2 = Math.sin(hW),
        hV = Math.cos(hW),
        h1 = hX[4],
        h0 = hX[5],
        hZ = hX[6],
        hY = hX[7],
        hU = hX[8],
        hT = hX[9],
        hS = hX[10],
        hR = hX[11];
      if (hX !== hQ) {
        hQ[0] = hX[0];
        hQ[1] = hX[1];
        hQ[2] = hX[2];
        hQ[3] = hX[3];
        hQ[12] = hX[12];
        hQ[13] = hX[13];
        hQ[14] = hX[14];
        hQ[15] = hX[15];
      }
      hQ[4] = h1 * hV + hU * h2;
      hQ[5] = h0 * hV + hT * h2;
      hQ[6] = hZ * hV + hS * h2;
      hQ[7] = hY * hV + hR * h2;
      hQ[8] = hU * hV - h1 * h2;
      hQ[9] = hT * hV - h0 * h2;
      hQ[10] = hS * hV - hZ * h2;
      hQ[11] = hR * hV - hY * h2;
      return hQ;
    };
    e.rotateY = function (hU, h1, h0) {
      var h2 = Math.sin(h0),
        hZ = Math.cos(h0),
        hT = h1[0],
        hS = h1[1],
        hR = h1[2],
        hQ = h1[3],
        hY = h1[8],
        hX = h1[9],
        hW = h1[10],
        hV = h1[11];
      if (h1 !== hU) {
        hU[4] = h1[4];
        hU[5] = h1[5];
        hU[6] = h1[6];
        hU[7] = h1[7];
        hU[12] = h1[12];
        hU[13] = h1[13];
        hU[14] = h1[14];
        hU[15] = h1[15];
      }
      hU[0] = hT * hZ - hY * h2;
      hU[1] = hS * hZ - hX * h2;
      hU[2] = hR * hZ - hW * h2;
      hU[3] = hQ * hZ - hV * h2;
      hU[8] = hT * h2 + hY * hZ;
      hU[9] = hS * h2 + hX * hZ;
      hU[10] = hR * h2 + hW * hZ;
      hU[11] = hQ * h2 + hV * hZ;
      return hU;
    };
    e.rotateZ = function (hU, hX, hW) {
      var h2 = Math.sin(hW),
        hV = Math.cos(hW),
        hT = hX[0],
        hS = hX[1],
        hR = hX[2],
        hQ = hX[3],
        h1 = hX[4],
        h0 = hX[5],
        hZ = hX[6],
        hY = hX[7];
      if (hX !== hU) {
        hU[8] = hX[8];
        hU[9] = hX[9];
        hU[10] = hX[10];
        hU[11] = hX[11];
        hU[12] = hX[12];
        hU[13] = hX[13];
        hU[14] = hX[14];
        hU[15] = hX[15];
      }
      hU[0] = hT * hV + h1 * h2;
      hU[1] = hS * hV + h0 * h2;
      hU[2] = hR * hV + hZ * h2;
      hU[3] = hQ * hV + hY * h2;
      hU[4] = h1 * hV - hT * h2;
      hU[5] = h0 * hV - hS * h2;
      hU[6] = hZ * hV - hR * h2;
      hU[7] = hY * hV - hQ * h2;
      return hU;
    };
    e.fromRotationTranslation = function (h3, h1, hZ) {
      var hW = h1[0],
        hV = h1[1],
        hU = h1[2],
        hX = h1[3],
        h4 = hW + hW,
        hQ = hV + hV,
        hY = hU + hU,
        hT = hW * h4,
        hS = hW * hQ,
        hR = hW * hY,
        h2 = hV * hQ,
        h0 = hV * hY,
        h7 = hU * hY,
        h8 = hX * h4,
        h6 = hX * hQ,
        h5 = hX * hY;
      h3[0] = 1 - (h2 + h7);
      h3[1] = hS + h5;
      h3[2] = hR - h6;
      h3[3] = 0;
      h3[4] = hS - h5;
      h3[5] = 1 - (hT + h7);
      h3[6] = h0 + h8;
      h3[7] = 0;
      h3[8] = hR + h6;
      h3[9] = h0 - h8;
      h3[10] = 1 - (hT + h2);
      h3[11] = 0;
      h3[12] = hZ[0];
      h3[13] = hZ[1];
      h3[14] = hZ[2];
      h3[15] = 1;
      return h3;
    };
    e.fromQuat = function (h0, hX) {
      var hU = hX[0],
        hT = hX[1],
        hS = hX[2],
        hV = hX[3],
        h1 = hU + hU,
        hQ = hT + hT,
        hW = hS + hS,
        hR = hU * h1,
        hZ = hT * h1,
        hY = hT * hQ,
        h7 = hS * h1,
        h6 = hS * hQ,
        h4 = hS * hW,
        h5 = hV * h1,
        h3 = hV * hQ,
        h2 = hV * hW;
      h0[0] = 1 - hY - h4;
      h0[1] = hZ + h2;
      h0[2] = h7 - h3;
      h0[3] = 0;
      h0[4] = hZ - h2;
      h0[5] = 1 - hR - h4;
      h0[6] = h6 + h5;
      h0[7] = 0;
      h0[8] = h7 + h3;
      h0[9] = h6 - h5;
      h0[10] = 1 - hR - hY;
      h0[11] = 0;
      h0[12] = 0;
      h0[13] = 0;
      h0[14] = 0;
      h0[15] = 1;
      return h0;
    };
    e.frustum = function (hU, hR, hZ, hQ, hY, hW, hV) {
      var hX = 1 / (hZ - hR),
        hT = 1 / (hY - hQ),
        hS = 1 / (hW - hV);
      hU[0] = hW * 2 * hX;
      hU[1] = 0;
      hU[2] = 0;
      hU[3] = 0;
      hU[4] = 0;
      hU[5] = hW * 2 * hT;
      hU[6] = 0;
      hU[7] = 0;
      hU[8] = (hZ + hR) * hX;
      hU[9] = (hY + hQ) * hT;
      hU[10] = (hV + hW) * hS;
      hU[11] = -1;
      hU[12] = 0;
      hU[13] = 0;
      hU[14] = hV * hW * 2 * hS;
      hU[15] = 0;
      return hU;
    };
    e.perspective = function (hT, hS, hR, hU, hQ) {
      var hW = 1 / Math.tan(hS / 2),
        hV = 1 / (hU - hQ);
      hT[0] = hW / hR;
      hT[1] = 0;
      hT[2] = 0;
      hT[3] = 0;
      hT[4] = 0;
      hT[5] = hW;
      hT[6] = 0;
      hT[7] = 0;
      hT[8] = 0;
      hT[9] = 0;
      hT[10] = (hQ + hU) * hV;
      hT[11] = -1;
      hT[12] = 0;
      hT[13] = 0;
      hT[14] = 2 * hQ * hU * hV;
      hT[15] = 0;
      return hT;
    };
    e.ortho = function (hT, hR, hZ, hQ, hX, hW, hV) {
      var hU = 1 / (hR - hZ),
        hY = 1 / (hQ - hX),
        hS = 1 / (hW - hV);
      hT[0] = -2 * hU;
      hT[1] = 0;
      hT[2] = 0;
      hT[3] = 0;
      hT[4] = 0;
      hT[5] = -2 * hY;
      hT[6] = 0;
      hT[7] = 0;
      hT[8] = 0;
      hT[9] = 0;
      hT[10] = 2 * hS;
      hT[11] = 0;
      hT[12] = (hR + hZ) * hU;
      hT[13] = (hX + hQ) * hY;
      hT[14] = (hV + hW) * hS;
      hT[15] = 1;
      return hT;
    };
    e.lookAt = function (h4, ib, ic, hW) {
      var ia,
        h9,
        h7,
        hS,
        hR,
        hQ,
        hZ,
        hY,
        hX,
        h5,
        h8 = ib[0],
        h6 = ib[1],
        h3 = ib[2],
        hV = hW[0],
        hU = hW[1],
        hT = hW[2],
        h2 = ic[0],
        h1 = ic[1],
        h0 = ic[2];
      if (Math.abs(h8 - h2) < hP && Math.abs(h6 - h1) < hP && Math.abs(h3 - h0) < hP) {
        return e.identity(h4);
      }
      hZ = h8 - h2;
      hY = h6 - h1;
      hX = h3 - h0;
      h5 = 1 / Math.sqrt(hZ * hZ + hY * hY + hX * hX);
      hZ *= h5;
      hY *= h5;
      hX *= h5;
      ia = hU * hX - hT * hY;
      h9 = hT * hZ - hV * hX;
      h7 = hV * hY - hU * hZ;
      h5 = Math.sqrt(ia * ia + h9 * h9 + h7 * h7);
      if (!h5) {
        ia = 0;
        h9 = 0;
        h7 = 0;
      } else {
        h5 = 1 / h5;
        ia *= h5;
        h9 *= h5;
        h7 *= h5;
      }
      hS = hY * h7 - hX * h9;
      hR = hX * ia - hZ * h7;
      hQ = hZ * h9 - hY * ia;
      h5 = Math.sqrt(hS * hS + hR * hR + hQ * hQ);
      if (!h5) {
        hS = 0;
        hR = 0;
        hQ = 0;
      } else {
        h5 = 1 / h5;
        hS *= h5;
        hR *= h5;
        hQ *= h5;
      }
      h4[0] = ia;
      h4[1] = hS;
      h4[2] = hZ;
      h4[3] = 0;
      h4[4] = h9;
      h4[5] = hR;
      h4[6] = hY;
      h4[7] = 0;
      h4[8] = h7;
      h4[9] = hQ;
      h4[10] = hX;
      h4[11] = 0;
      h4[12] = -(ia * h8 + h9 * h6 + h7 * h3);
      h4[13] = -(hS * h8 + hR * h6 + hQ * h3);
      h4[14] = -(hZ * h8 + hY * h6 + hX * h3);
      h4[15] = 1;
      return h4;
    };
    e.str = function (hQ) {
      return (
        'mat4(' +
        hQ[0] +
        ', ' +
        hQ[1] +
        ', ' +
        hQ[2] +
        ', ' +
        hQ[3] +
        ', ' +
        hQ[4] +
        ', ' +
        hQ[5] +
        ', ' +
        hQ[6] +
        ', ' +
        hQ[7] +
        ', ' +
        hQ[8] +
        ', ' +
        hQ[9] +
        ', ' +
        hQ[10] +
        ', ' +
        hQ[11] +
        ', ' +
        hQ[12] +
        ', ' +
        hQ[13] +
        ', ' +
        hQ[14] +
        ', ' +
        hQ[15] +
        ')'
      );
    };
    e.frob = function (hQ) {
      return Math.sqrt(
        Math.pow(hQ[0], 2) +
          Math.pow(hQ[1], 2) +
          Math.pow(hQ[2], 2) +
          Math.pow(hQ[3], 2) +
          Math.pow(hQ[4], 2) +
          Math.pow(hQ[5], 2) +
          Math.pow(hQ[6], 2) +
          Math.pow(hQ[6], 2) +
          Math.pow(hQ[7], 2) +
          Math.pow(hQ[8], 2) +
          Math.pow(hQ[9], 2) +
          Math.pow(hQ[10], 2) +
          Math.pow(hQ[11], 2) +
          Math.pow(hQ[12], 2) +
          Math.pow(hQ[13], 2) +
          Math.pow(hQ[14], 2) +
          Math.pow(hQ[15], 2),
      );
    };
    hL.mat4 = e;
  })(window);
  function c6() {
    this.result = {bkData: [], eleData: [[], [], [], [], [], [], [], []], tileLabels: []};
  }
  C.extend(c6.prototype, {
    createLayer: function (T, i) {
      var e = this.result.bkData;
      i = i || {};
      if (!e[T]) {
        e[T] = [[], [], []];
      }
      e[T].dataType = i.dataType || 2;
      e[T].png8 = i.png8 || false;
      e[T].clipTile = i.clipTile || false;
    },
    removeLayer: function (i) {
      var e = this.result.bkData;
      e[i] = null;
    },
    getResult: function () {
      return this.result;
    },
    setData: function (hK, hJ, hL) {
      var e = this.result.bkData;
      var T = e[hJ] ? e[hJ][hL] : null;
      if (!T) {
        return;
      }
      for (var hI = 0; hI < T.length; hI++) {
        if (T[hI].key && T[hI].key === hK.key) {
          T[hI] = hK;
          return;
        }
      }
      T.push(hK);
    },
    setLabelData: function (e) {
      this.result.tileLabels = e;
    },
    getLabelData: function () {
      return this.result.tileLabels;
    },
    setOverlayData: function (i, e) {
      if (!this.result.eleData[e]) {
        return;
      }
      this.result.eleData[e] = i;
    },
    clearLabelOverlayData: function () {
      this.result.eleData[2] = [];
      this.result.eleData[3] = [];
      this.result.eleData[4] = [];
    },
    clearData: function (hI) {
      var e = this.result.bkData;
      if (typeof hI === 'number') {
        if (e[hI]) {
          e[hI][0] = [];
          e[hI][1] = [];
          e[hI][2] = [];
        }
        return;
      }
      for (var T = 0; T < e.length; T++) {
        if (!e[T]) {
          continue;
        }
        e[T][0] = [];
        e[T][1] = [];
        e[T][2] = [];
      }
    },
    sortThumbData: function (i) {
      var e = this.result.bkData;
      var T = e[i];
      if (!T) {
        return;
      }
      if (T[0] && T[0].length > 0) {
        T[0].sort(function (hJ, hI) {
          return hJ.tileInfo.useZoom - hI.tileInfo.useZoom;
        });
      }
    },
  });
  var e9 = (function () {
    var hS = new Int8Array(4);
    var T = new Int32Array(hS.buffer, 0, 1);
    var hN = new Float32Array(hS.buffer, 0, 1);
    function hU(h1) {
      T[0] = h1;
      return hN[0];
    }
    function i(h1) {
      hN[0] = h1;
      return T[0];
    }
    function hO(h1) {
      var h3 = (h1[3] << 24) | (h1[2] << 16) | (h1[1] << 8) | h1[0];
      var h2 = hU(h3 & 4278190079);
      return h2;
    }
    var hJ = 0;
    var hM = 1;
    var hQ = 2;
    var hY = 0;
    var hV = 1;
    var hT = 2;
    var hK = 9;
    function hR(h1, h2) {
      var h3;
      if (h2 % 2 === 0) {
        h3 = [-h1[1], h1[0]];
      } else {
        h3 = [h1[1], -h1[0]];
      }
      return h3;
    }
    function e(h1, h2, h3) {
      var h4 = hR(h1, h2);
      var h5;
      if (h3 === hM) {
        return h4;
      } else {
        if (h2 === 4 || h2 === 5) {
          h5 = [h4[0] - h1[0], h4[1] - h1[1]];
        } else {
          h5 = [h4[0] + h1[0], h4[1] + h1[1]];
        }
        if (h3 === hJ) {
          vec2.normalize(h5, h5);
        }
        return h5;
      }
    }
    function hX(h2, h1) {
      return Math.sqrt(Math.pow(h2[0] - h1[0], 2) + Math.pow(h2[1] - h1[1], 2));
    }
    function hI(h5, h4, h3, h1) {
      var h2 = vec2.dot(h5, h4);
      if (h3 === hT || h3 === hV) {
        if ((h1 === 0 || h1 === 1) && h2 > 0) {
          return true;
        } else {
          if ((h1 === 2 || h1 === 3) && h2 < 0) {
            return true;
          }
        }
      }
      if ((h1 === 0 || h1 === 1) && h2 < 0) {
        return true;
      } else {
        if ((h1 === 2 || h1 === 3) && h2 > 0) {
          return true;
        }
      }
      return false;
    }
    function hP(h2, h7, h9) {
      var h8 = hR(h2, h7);
      var h4;
      var h6 = h2;
      var h5 = h9;
      var ib = [];
      vec2.normalize(ib, [h6[0] + h5[0], h6[1] + h5[1]]);
      var ia = vec2.dot(h8, [-ib[1], ib[0]]);
      if (Math.abs(ia) < 0.1) {
        ia = 1;
      }
      var h3 = 1 / ia;
      h4 = [-ib[1] * h3, ib[0] * h3];
      var h1 = vec2.dot(h2, h4);
      if (h1 < 0) {
        vec2.negate(h4, h4);
      }
      return {cos2: h1, offset: h4};
    }
    function h0(h2, h7, h9, h1) {
      var h8 = hR(h2, h7);
      var h6;
      var h5;
      var h4;
      if (h7 === 0 || h7 === 1) {
        h6 = h9;
        h5 = h2;
      } else {
        h6 = h2;
        h5 = h9;
      }
      if (!h6 || !h5) {
        return h8;
      }
      var ib = [h6[0] + h5[0], h6[1] + h5[1]];
      if (ib[0] === 0 && ib[1] === 0) {
        vec2.normalize(ib, h5);
      } else {
        vec2.normalize(ib, ib);
      }
      var ic = hI(ib, h8, h1, h7);
      if (ic) {
        return h8;
      }
      var ia = vec2.dot(h8, [-ib[1], ib[0]]);
      if (Math.abs(ia) < 0.1) {
        ia = 1;
      }
      var h3 = 1 / ia;
      h4 = [-ib[1] * h3, ib[0] * h3];
      return h4;
    }
    function hZ(ic, id, h6, h5, ie, ib, h4, h7, h3, ia) {
      var h9;
      var h2 = 0;
      var h1 = false;
      h9 = ib.length / hK - 1;
      hL(id[0], ic[0], h6[0], ie, h5, 4, h7, h3, undefined, ib, ia);
      h9++;
      h2++;
      hL(id[0], ic[0], h6[0], ie, h5, 5, h7, h3, undefined, ib, ia);
      h9++;
      h2++;
      for (var h8 = 0; h8 < ic.length; h8++) {
        hL(id[h8], ic[h8], h6[h8], ie, h5, 0, h7, h3, ic[h8 - 1], ib, ia);
        hW(h4, ++h9, ++h2, h1);
        hL(id[h8], ic[h8], h6[h8], ie, h5, 1, h7, h3, ic[h8 - 1], ib, ia);
        hW(h4, ++h9, ++h2, h1);
        hL(id[h8 + 1], ic[h8], h6[h8 + 1], ie, h5, 2, h7, h3, ic[h8 + 1], ib, ia);
        hW(h4, ++h9, ++h2, h1);
        hL(id[h8 + 1], ic[h8], h6[h8 + 1], ie, h5, 3, h7, h3, ic[h8 + 1], ib, ia);
        hW(h4, ++h9, ++h2, h1);
        if (h5 === hV && h8 !== ic.length - 1) {
          hL(id[h8 + 1], ic[h8], h6[h8 + 1], ie, h5, 8, h7, h3, ic[h8 + 1], ib, ia);
          hW(h4, ++h9, ++h2, h1);
          h1 = h1 ? false : true;
        }
      }
      hL(
        id[id.length - 1],
        ic[ic.length - 1],
        h6[id.length - 1],
        ie,
        h5,
        6,
        h7,
        h3,
        undefined,
        ib,
        ia,
      );
      hW(h4, ++h9, ++h2, h1);
      hL(
        id[id.length - 1],
        ic[ic.length - 1],
        h6[id.length - 1],
        ie,
        h5,
        7,
        h7,
        h3,
        undefined,
        ib,
        ia,
      );
      hW(h4, ++h9, ++h2, h1);
    }
    function hL(ie, h4, h8, ig, h3, h9, h6, h2, ic, ib, ia) {
      var id = h9 % 2 === 0 ? 1 : -1;
      var h7;
      if (h9 === 4 || h9 === 5 || h9 === 6 || h9 === 7) {
        h7 = e(h4, h9, ig);
      } else {
        if (h9 === 0 || h9 === 1 || h9 === 2 || h9 === 3) {
          h7 = h0(h4, h9, ic, h3);
        } else {
          if (h9 === 8) {
            var h5 = hP(h4, h9, ic);
            h7 = h5.offset;
            vec2.normalize(h7, h7);
            var h1 = h5.cos2;
            if (h1 < 0) {
              id = -id;
            }
          }
        }
      }
      ib[ib.length] = ie[0] * 10;
      ib[ib.length] = ie[1] * 10;
      ib[ib.length] = h7[0] * h2 * 10;
      ib[ib.length] = h7[1] * h2 * 10;
      ib[ib.length] = h6;
      ib[ib.length] = id;
      ib[ib.length] = 0;
      ib[ib.length] = ia || 0;
      ib[ib.length] = h8;
    }
    function hW(h5, h3, h1, h4) {
      var h2;
      if (h1 % 2 === 0) {
        if (h4) {
          h5[h5.length] = h3 - 2;
          h5[h5.length] = h3 - 1;
          h5[h5.length] = h3;
        } else {
          h5[h5.length] = h3 - 1;
          h5[h5.length] = h3 - 2;
          h5[h5.length] = h3;
        }
      } else {
        if (h4) {
          h5[h5.length] = h3 - 1;
          h5[h5.length] = h3 - 2;
          h5[h5.length] = h3;
        } else {
          h5[h5.length] = h3 - 2;
          h5[h5.length] = h3 - 1;
          h5[h5.length] = h3;
        }
      }
    }
    return {
      getVertexCount: function (h2, h1) {
        if (h1 === hV) {
          return h2 * 5 - 2;
        } else {
          return h2 * 4;
        }
      },
      buildData: function (ic, h3, id, h9, h1, h6, h2, ia) {
        var ib = [];
        var h8 = 0;
        var h5 = [0];
        for (var h7 = 0; h7 < ic.length; h7++) {
          if (h7 > 0) {
            h8 += hX(ic[h7], ic[h7 - 1]);
            h5.push(h8 * 10);
          }
          if (h7 !== ic.length - 1) {
            var h4 = [ic[h7 + 1][0] - ic[h7][0], ic[h7 + 1][1] - ic[h7][1]];
            var ie = [];
            if (h4[0] === 0 && h4[1] === 0) {
              ie = [0, 0];
            } else {
              vec2.normalize(ie, h4);
            }
            ib[ib.length] = [ie[0], ie[1]];
          }
        }
        return hZ(ib, ic, h5, h3, id, h9, h1, hO(h6), h2, ia);
      },
      toTileSolidLineVertices: function (h5, h2) {
        var h3 = new Float32Array((h5.length / hK) * 5);
        var h1 = new Int16Array(h3.buffer);
        var h7 = 0;
        var h4 = 0;
        for (var h6 = 0; h6 < h5.length; h6 += hK) {
          h1[h7] = ~~h5[h6];
          h1[h7 + 1] = ~~h5[h6 + 1];
          h1[h7 + 2] = ~~h5[h6 + 2];
          h1[h7 + 3] = ~~h5[h6 + 3];
          h3[h4 + 2] = h5[h6 + 4];
          h1[h7 + 6] = h5[h6 + 5];
          h1[h7 + 7] = h2 ? h2 : 0;
          h1[h7 + 8] = h5[h6 + 7];
          h1[h7 + 9] = 0;
          h7 += 10;
          h4 += 5;
        }
        return h3;
      },
    };
  })();
  var ez = 1;
  var gk = 2;
  var fK = {
    drawIndex: 0,
    devicePixelRatio: a1(),
    zoomState: 1,
    curViewTilesInfo: null,
    iconSetImg: null,
    LAST_CALC_ZOOM: -1,
    LAST_LOAD_VECTOR_ZOOM_CHANGE: false,
    lastCollisionTestTime: 0,
    remove: function () {
      this.tileCache.clear();
    },
    initDrawData: function () {
      this.drawIndex = this.zIndex;
      this.map._featureMgr.createLayer(this.drawIndex, {
        dataType: this.dataType,
        png8: this.png8,
        clipTile: this.clipTile,
      });
    },
    destroyDrawData: function () {
      this.map._featureMgr.removeLayer(this.drawIndex);
    },
    setZIndex: function (e) {
      this.zIndex = e;
    },
    getTileKey: function (e, hI) {
      hI = hI || {};
      var i = typeof hI.useZoom === 'number' ? hI.useZoom : e.useZoom;
      var T = e.style || this.mapStyleId || 'default';
      return this.mapType + '_' + T + '_' + e.col + '_' + e.row + '_' + e.zoom + '_' + i;
    },
    getTileRenderDataKey: function (i) {
      var T = i.col;
      var hI = i.zoom;
      var e = i.baseTileSize;
      T = dX.calcLoopParam(T, hI, e).col;
      return this.mapType + '_' + T + '_' + i.row + '_' + hI + '_' + i.useZoom;
    },
    getTileUnits: function (e) {
      var hI = this.map;
      var T = b1[hI.getMapType()];
      var i = T.baseUnits * Math.pow(2, T.zoomLevelBase - e);
      return i;
    },
    getTilesUrl: function (hJ, hS, hT) {
      var i = hJ.x;
      var hU = hJ.y;
      var hP = az('ditu', 'normal');
      var hL = hP.ver;
      var hM = hP.udt;
      i = dX.calcLoopParam(i, hS, hT).col;
      var hR = b1.B_NORMAL_MAP.vectorTileUrls;
      var hK = Math.abs(i + hU) % hR.length;
      var hQ = hR[hK];
      if (window.offLineIPAddress) {
        hR = [window.offLineIPAddress + 'pvd/'];
        hQ = hR[0];
      }
      var T = 'x=' + i + '&y=' + hU + '&z=' + Math.floor(hS);
      var hO = this.devicePixelRatio > 1 ? '&scaler=2' : '';
      var hN = '&textimg=1';
      if (this.map.config.textRenderType === 'canvas') {
        hN = '&textimg=0';
      }
      var hI = this.map.config.style;
      if (typeof hI === 'string' && hI !== 'default') {
        T += '&styleId=' + eV.mapStyleNameIdPair[hI];
      }
      T += '&styles=pl' + hN + hO + '&v=' + hL + '&udt=' + hM + '&json=0';
      var e = hQ + '?qt=vtile&param=' + window.encodeURIComponent(gc(T));
      return e;
    },
    getRasterTilesUrl: function (T, hK, hI) {
      var hJ = b1[this.map.mapType];
      var i = this.map.config.style;
      var e =
        hJ.tileUrls[Math.abs(hK + T) % hJ.tileUrls.length] +
        '?qt=tile&x=' +
        T +
        '&y=' +
        hK +
        '&z=' +
        hI +
        (i === 'default' || typeof i !== 'string' ? '' : '&styleId=' + eV.mapStyleNameIdPair[i]) +
        '&styles=pl&udt=' +
        this.normalUdt +
        '&scaler=' +
        this.scaler +
        '&p=1';
      e = e.replace(/-(\d+)/gi, 'M$1');
      return e;
    },
    getZoomState: function () {
      var T = this.map;
      var i = T.getZoom();
      var e = i - this.lastZoom;
      if (e > 0) {
        this.zoomState = 1;
      } else {
        if (e < 0) {
          this.zoomState = -1;
        }
      }
      this.lastZoom = i;
      return this.zoomState;
    },
    releaseOutViewTileData: function (e) {
      var hJ = this.map._workerMgr.releasePendingData(e);
      for (var hI = 0, T = hJ.length; hI < T; hI++) {
        var hK = this.getTileKey(hJ[hI]);
        this.tileCache.removeData(hK);
      }
    },
    loadLayerData: function (e, hI, i) {
      this.hasZoomChange = i;
      this.curViewTilesInfo = e;
      this.mapStyleId = this.map.getMapStyleId();
      this.releaseOutViewTileData(e);
      var T = this.getZoomState();
      if (this.dataType === gk) {
        if (hI) {
          this.getVectorLayerDataFromCache(e, T);
        } else {
          this.loadVectorLayerData(e);
        }
      } else {
        this.loadRasterLayerData(e, hI);
      }
    },
    getVectorLayerDataFromCache: function (hN, hX) {
      this.map.temp.isPermitSpotOver = false;
      this.tileLabels = [];
      if (this.baseLayer === true) {
        var hR = this.map._customLabelMgr.virtualTile;
        if (hR && hR.label) {
          this.tileLabels.push(hR.label);
        }
      }
      this.thumbCache = {};
      var hY = -1;
      for (var hU = 0, hS = hN.length; hU < hS; hU++) {
        var hV = hN[hU];
        var hJ = hV.col;
        var hK = hV.row;
        var T = hV.zoom;
        var hT = this._getTileTexImgKey(hV);
        var hI = hV.useZoom;
        hY = T;
        var hL = this.getTileKey(hV);
        var h0 = this.tileCache.getData(hL);
        if (h0 && h0.status === 'ready') {
          var h1 = h0;
          this.map._featureMgr.setData(h0, this.drawIndex, 2);
          if (h0.label) {
            if (h0.label.status === 'ready') {
              h0.label.tileInfo = h0.tileInfo;
              this.tileLabels.push(h0.label);
              if (
                h0.label.textureSources &&
                h0.label.textureSources[hI] &&
                this.map._webglMapScene
              ) {
                var hZ = this.map._webglMapScene._painter;
                if (!hZ._labelTextureAtlasOffset[hT]) {
                  hZ._addToAsyncJob(h0.label.textureSources[hI]);
                }
              }
            } else {
              if (h0.label.status !== 'processing') {
                this.processLabelData(h0);
              }
            }
          }
        } else {
          var hW = {tileInfo: hV, dataType: gk, key: hL};
          this.map._featureMgr.setData(hW, this.drawIndex, 2);
          if (this.useThumbData) {
            this.setThumbData(hJ, hK, T, hI, hX);
          }
        }
      }
      this.tileLabels.labelZoom = hY;
      this.updateLabels(hX);
      var hO = this.map.getZoom();
      var hM = Math.floor(hO);
      var hQ = hO - hM;
      var hP = Math.floor(this.LAST_CALC_ZOOM);
      var e = this.LAST_CALC_ZOOM - hP;
      var h2 = false;
      if (this.hasZoomChange) {
        if (Math.abs(hO - this.LAST_CALC_ZOOM) >= 0.5) {
          h2 = true;
        } else {
          if (hQ < 0.5 && e >= 0.5) {
            h2 = true;
          } else {
            if (hQ >= 0.5 && e < 0.5) {
              h2 = true;
            }
          }
        }
        if (h2) {
          this.cacheDataCollideLabels(0);
        }
        this.LAST_CALC_ZOOM = hO;
      } else {
        if (this.tileLabels.length > 0) {
          this.cacheDataCollideLabels(C.Browser.ie ? 50 : 30);
        }
      }
    },
    loadVectorLayerData: function (hO) {
      this.map.temp.isPermitSpotOver = false;
      var hN = this;
      function hM(i, hP) {
        var hR = hN.tileCache.getData(hP);
        if (!hR) {
          return;
        }
        if (!i || i.error) {
          var hQ = new a6('ontileloaderror');
          i = i || {};
          hQ.error = i.error || '';
          hQ.message = i.message || '';
          hN.map.fire(hQ);
          hR.status = 'init';
          hR.reloadTimer = setTimeout(function () {
            if (hR.retry < 3) {
              hR.retry++;
              hR.status = 'loading';
              hN.loadVectorTileData(i.tileInfo, hM);
            } else {
              hN.tileCache.removeData(hP);
            }
          }, 4000);
          hN.map._featureMgr.clearData(hN.drawIndex);
          hN._checkTilesLoaded();
          hN.getVectorLayerDataFromCache(hN.curViewTilesInfo, hN.getZoomState());
          return;
        }
        if (hR.reloadTimer) {
          clearTimeout(hR.reloadTimer);
          hR.reloadTimer = null;
        }
        hN.callbackDataQueue.push([i, hP]);
        if (hN.processDataTimer) {
          return;
        }
        hN.processDataTimer = setTimeout(function () {
          while (hN.callbackDataQueue.length > 0) {
            var hS = hN.callbackDataQueue.shift();
            hN.vectorTileDataCbk(hS[0], hS[1]);
            hN._checkTilesLoaded();
          }
          hN.map._featureMgr.clearData(hN.drawIndex);
          hN.getVectorLayerDataFromCache(hN.curViewTilesInfo, hN.getZoomState());
          hN.processDataTimer = null;
        }, 200);
      }
      for (var hL = 0, hJ = hO.length; hL < hJ; hL++) {
        var T = hO[hL];
        var hK = this.getTileKey(T);
        var e = this.tileCache.getData(hK);
        if (!e) {
          e = {status: 'init', tileInfo: T, dataType: gk, key: hK, retry: 0};
        }
        if (e.status !== 'ready' && e.status !== 'loading') {
          this.numLoading++;
          e.status = 'loading';
          this.tileCache.setData(hK, e);
          var hI = this.getProcessedLabelZoom(T);
          if (hI) {
            T.processedLabelZooms = hI;
          }
          this.loadVectorTileData(T, hM);
        }
      }
    },
    setThumbData: function (i, hJ, hI, e, T) {
      if (T === 1) {
        if (this._findParentZoomTile(i, hJ, hI, e, 8) === false) {
          this._findChildZoomTile(i, hJ, hI, e, 3);
        }
      } else {
        if (T === -1) {
          if (this._findChildZoomTile(i, hJ, hI, e, 3) === false) {
            this._findParentZoomTile(i, hJ, hI, e, 8);
          }
        }
      }
      this.map._featureMgr.sortThumbData(this.drawIndex);
    },
    _findParentZoomTile: function (hL, hU, hT, hJ, hO) {
      var hK = b1[this.getMapType()];
      var T = hK.minDataZoom;
      var e = hL;
      var hR = hU;
      var hP = hT;
      var hQ = hJ;
      for (var hN = 1; hN <= hO; hN++) {
        var hI = this.tileType.getParentTile(e, hR, hP, hQ, T);
        if (hI === null) {
          continue;
        }
        var hS = this.getTileKey(hI);
        var hM = this.tileCache.getData(hS);
        if (hM && hM.status === 'ready') {
          if (this.thumbCache[hS]) {
            continue;
          }
          this.map._featureMgr.setData(hM, this.drawIndex, 0);
          this.thumbCache[hS] = true;
          return true;
        }
        e = hI.col;
        hR = hI.row;
        hP = hI.zoom;
        hQ = hI.useZoom;
      }
      return false;
    },
    _findChildZoomTile: function (hM, hO, e, hJ, hX) {
      var hV = b1[this.getMapType()];
      var hR = hV.maxDataZoom;
      var hL = hM;
      var hN = hO;
      var hP = e;
      var hI = hJ;
      var hK = true;
      for (var hU = 1; hU <= hX; hU++) {
        var hS = false;
        var T = this.tileType.getChildTiles(hL, hN, hP, hI, hR, hU);
        if (!T) {
          continue;
        }
        for (var hT = 0; hT < T.length; hT++) {
          var hQ = this.getTileKey(T[hT]);
          var hW = this.tileCache.getData(hQ);
          if (hW && hW.status === 'ready') {
            if (!this.thumbCache[hQ]) {
              this.map._featureMgr.setData(hW, this.drawIndex, 1);
              this.thumbCache[hQ] = true;
            }
            hS = true;
          } else {
            hK = false;
          }
        }
        if (hS) {
          break;
        }
      }
      return hK;
    },
    loadVectorTileData: function (i, hJ) {
      var T = i.col;
      var hN = i.row;
      var hL = i.zoom;
      var hM = i.baseTileSize;
      var e = this.getTilesUrl(new eb(T, hN), hL, hM);
      if (!e) {
        return;
      }
      var hK = this.getTileKey(i);
      bt(this.map);
      if (!this.processData) {
        this.map._workerMgr.loadTileData(e, i, hK, hJ);
        return;
      }
      var hJ = 'cbk' + hK.replace(/-/g, '_');
      var hI = this;
      bj[hJ] = function (hO) {
        var hP = (function (hQ) {
          return function () {
            hQ.tileInfo = i;
            var hW = hI.processData(hQ);
            if (!hW.road) {
              return;
            }
            var hT = {
              tileInfo: i,
              renderData: {base: []},
              status: 'ready',
              key: hK,
              mapType: hI.mapType,
            };
            var hZ = [];
            var h2 = [];
            for (var hV = 0; hV < hW.road.length; hV++) {
              var hY = hW.road[hV];
              var hX = -1;
              for (var hU = 0; hU < hY.length; hU++) {
                var h0 = hY[hU];
                var h1 = [];
                if (hZ.length / 7 + h0[0].length / 2 > 65536) {
                  hT.renderData.base.push({
                    type: 'line',
                    data: [e9.toTileSolidLineVertices(hZ, 4000), new Uint16Array(h2)],
                  });
                  hZ = [];
                  h2 = [];
                }
                for (var hS = 0; hS < h0[0].length; hS += 2) {
                  h1[h1.length] = [h0[0][hS], h0[0][hS + 1]];
                }
                var hR = h0[3];
                e9.buildData(h1, h0[1], h0[2], hZ, h2, hR, h0[4], hV + 20, false);
              }
              hT.renderData.base.push({
                type: 'line',
                data: [e9.toTileSolidLineVertices(hZ, 4000), new Uint16Array(h2)],
              });
            }
            hI.tileCache.setData(hK, hT);
            hI.map._featureMgr.clearData(hI.drawIndex);
            hI.getVectorLayerDataFromCache(hI.curViewTilesInfo, hI.getZoomState());
            hI.map.dispatchEvent(new a6('onrefresh'));
          };
        })(hO);
        hI.map.jobScheduler.addJob(hP);
        delete bj[hJ];
      };
      e += '&fn=' + encodeURIComponent(es + '.' + hJ);
      hd.load(e);
    },
    vectorTileDataCbk: function (hI, hJ) {
      var hN = new a6('ontileloaded');
      hN.perfStat = hI.perfStat || [];
      var e = this.map;
      e.fire(hN);
      var i = hI.tileInfo;
      var T = i.col;
      var hS = i.row;
      var hR = i.zoom;
      var hQ = i.baseTileSize;
      var hL = this.tileCache.getData(hJ);
      if (!hL) {
        return;
      }
      if (!this.showLabel) {
        hI.label = null;
      }
      hL.renderData = hI;
      hL.tileInfo = i;
      var hK = dX.calcLoopParam(T, hR, hQ);
      var hO = hK.geoOffsetX;
      hL.tileInfo.loopOffsetX = hO;
      hL.status = 'ready';
      hL.mapType = this.mapType;
      this.tileCache.setData(hJ, hL);
      hL.label = hI.label;
      hI.label = null;
      if (hI.indoorData && e._indoorMgr) {
        e._indoorMgr.setData(hI.indoorData);
      }
      var hM = 'id_' + T + '_' + hS + '_' + hR;
      if (!this.curViewTilesInfo[hM]) {
        e.fire(new a6('ontilenotinview'));
        return;
      }
      this.processLabelData(hL);
      if (hI.indoorData && e._indoorMgr && e._indoorMgr.currentUid) {
        this._refreshIndoorData(e._indoorMgr.currentUid, e._indoorMgr.currentFloor);
      }
      var hP = new a6('onrefresh');
      hP.source = 'webgllayer';
      this.map.dispatchEvent(hP);
    },
    _refreshIndoorData: function (hQ, hP) {
      var hS = this.map._indoorMgr.getIndoorData(hQ);
      var hV = hS.tileKeys;
      var hT = Math.floor(this.map.getZoom());
      for (var hN = 0; hN < hV.length; hN++) {
        var hK = hV[hN];
        var hM = this.tileCache.getData(hK);
        if (!hM) {
          continue;
        }
        var hU = hM.renderData;
        hU.indoorBase = [];
        hU.indoorBaseContour = [];
        hU.indoorBorder3D = [];
        hU.indoorArea3D = [];
        hM.label.indoorLabel = [];
        this.labelProcessor.clearCollisionCache(hM.label);
        for (var hO in hU.indoorData) {
          if (hO === 'tileInfo') {
            continue;
          }
          var e = hU.indoorData[hO];
          var hJ = e.defaultFloor;
          if (hO === hQ) {
            hJ = hP;
            e.currentFloor = hP;
          }
          if (e.floors[hJ]) {
            if (e.floors[hJ].base) {
              for (var hL = 0; hL < e.floors[hJ].base.length; hL++) {
                hU.indoorBase.push(e.floors[hJ].base[hL]);
              }
            }
            if (e.floors[hJ].contour) {
              for (var hL = 0; hL < e.floors[hJ].contour.length; hL++) {
                hU.indoorBaseContour.push(e.floors[hJ].contour[hL]);
              }
            }
            if (e.floors[hJ].indoorBorder3D) {
              hU.indoorBorder3D.push(e.floors[hJ].indoorBorder3D);
            }
            if (e.floors[hJ].area3D) {
              hU.indoorArea3D.push(e.floors[hJ].area3D);
            }
            if (e.floors[hJ].pois) {
              hM.label.indoorLabel = hM.label.indoorLabel.concat(e.floors[hJ].pois);
            }
          }
        }
        this.updateAllIconsTextureCoords(hM);
        var hR = this;
        this.labelProcessor.loadIconImages(hM, function (i) {
          hR.updateAllIconsTextureCoords(i);
        });
        var hI = hK.split('_');
        var T = parseInt(hI[hI.length - 1], 10);
        if (T !== hT) {
          continue;
        }
        hR.map._featureMgr.setData(hM, this.drawIndex, 2);
      }
      this.dataBackCollideLabels();
      this.map.dispatchEvent(new a6('onrefresh'));
    },
    _removeIndoorData: function (i) {
      if (!i.indoorData) {
        return;
      }
      for (var e in i.indoorData) {
        if (e === 'tileInfo') {
          continue;
        }
        this.map._indoorMgr.removeData(e, i.key);
      }
    },
    getProcessedLabelZoom: function (hI) {
      var hJ = dc.baseZoomInfo[hI.zoom];
      if (!hJ) {
        return false;
      }
      var T = [];
      for (var hK = 0; hK < hJ.length; hK++) {
        var hL = this.getTileKey(hI, {useZoom: hJ[hK]});
        var e = this.tileCache.getData(hL);
        if (e && e.status === 'ready' && e.label && e.label.status === 'ready') {
          T.push(hJ[hK]);
        }
      }
      if (T.length) {
        return T;
      } else {
        return false;
      }
    },
    getSameZoomDataFromCache: function (T) {
      var hI = dc.baseZoomInfo[T.zoom];
      for (var hJ = 0; hJ < hI.length; hJ++) {
        var hK = this.getTileKey(T, {useZoom: hI[hJ]});
        if (T.useZoom === hI[hJ]) {
          continue;
        }
        var e = this.tileCache.getData(hK);
        if (e && e.status === 'ready' && e.label && e.label.status === 'ready') {
          return e;
        }
      }
      return false;
    },
    hasSameLabelData: function (hI, T) {
      for (var e = 0; e < T.length; e++) {
        if (T[e].key === hI) {
          return true;
        }
      }
      return false;
    },
    getDataByFloorName: function (T, hI) {
      for (var e = 0; e < T.length; e++) {
        if (T[e].floorName === hI) {
          return T[e];
        }
      }
      return null;
    },
    mergeIndoorLabelData: function (hN, e) {
      for (var hL in hN) {
        if (hL === 'tileInfo') {
          continue;
        }
        if (e[hL]) {
          var T = hN[hL].floors;
          var hO = e[hL].floors;
          for (var hJ = 0; hJ < T.length; hJ++) {
            var hI = T[hJ];
            var hM = hI.floorName;
            var hK = this.getDataByFloorName(hO, hM);
            if (hK) {
              if (hK.pois) {
                hK.pois = hK.pois.concat(hI.pois);
                hI.pois = hK.pois;
              } else {
                hK.pois = hI.pois;
              }
            }
          }
        }
      }
    },
    mergeSameZoomLabelData: function (hL) {
      var hJ = hL.label;
      if (!hJ) {
        return;
      }
      var e = hL.tileInfo;
      var hK = this.getSameZoomDataFromCache(e);
      if (!hK) {
        return;
      }
      var hI = hK.label;
      if (!hI) {
        return;
      }
      for (var T = 0; T < hJ.fixedLabel.length; T++) {
        if (!this.hasSameLabelData(hJ.fixedLabel[T].key, hI.fixedLabel)) {
          hI.hasNewData = true;
          hI.fixedLabel.push(hJ.fixedLabel[T]);
        }
      }
      for (var T = 0; T < hJ.lineLabel.length; T++) {
        if (!this.hasSameLabelData(hJ.lineLabel[T].key, hI.lineLabel)) {
          hI.hasNewData = true;
          hI.lineLabel.push(hJ.lineLabel[T]);
        }
      }
      for (var T = 0; T < hJ.indoorLabel.length; T++) {
        if (!this.hasSameLabelData(hJ.indoorLabel[T].key, hI.indoorLabel)) {
          hI.hasNewData = true;
          hI.indoorLabel.push(hJ.indoorLabel[T]);
        }
      }
      hL.label = hI;
      if (hK.renderData.indoorData && hL.renderData.indoorData) {
        this.mergeIndoorLabelData(hL.renderData.indoorData, hK.renderData.indoorData);
      }
    },
    processLabelData: function (hK) {
      if (!hK.label) {
        return;
      }
      if (hK.label.status === 'processing') {
        return;
      }
      hK.label.status = 'processing';
      var hI = this;
      hI.updateAllIconsTextureCoords(hK);
      this.labelProcessor.loadIconImages(hK, function (hL) {
        hI.updateAllIconsTextureCoords(hL);
      });
      if (this.map.config.textRenderType === 'canvas') {
        var e = this.labelProcessor.drawLabelsOnCanvas(hK, function (hN, hO) {
          var hM = hK.tileInfo;
          if (!bj.customStyleInfo) {
            hI.mergeSameZoomLabelData(hK);
          }
          if (hN) {
            if (!hK.label.textureHeights) {
              hK.label.textureHeights = [];
            }
            hK.label.textureHeights[hM.useZoom] = hN.height;
          }
          if (hO) {
            if (!hK.label.indoorTextureHeights) {
              hK.label.indoorTextureHeights = [];
            }
            hK.label.indoorTextureHeights[hM.useZoom] = hO.height;
          }
          var hL = hI._getTileTexImgKey(hM);
          hI._doWorkAfterLabelImageLoad(hK, hN, hO, hL);
        });
        return;
      }
      var T = hK.label.textImageBitmap || hK.label.textImgStr;
      var hJ = hK.label.indoorTextImageBitmap || hK.label.indoorTextImgStr;
      this.labelProcessor.loadImgByStr(T, hJ, function i(hQ, hO) {
        var hN = hK.label.textureHeight;
        var hR = hK.label.indoorTextureHeight;
        hK.label.textureHeight = undefined;
        hK.label.indoorTextureHeight = undefined;
        var hM = hK.tileInfo;
        hI.mergeSameZoomLabelData(hK);
        var hP = hK.label;
        hP.textImgStr = '';
        hP.indoorTextImgStr && (hP.indoorTextImgStr = '');
        if (!hP.textureHeights) {
          hP.textureHeights = [];
        }
        hP.textureHeights[hM.useZoom] = hN;
        if (!hP.indoorTextureHeights) {
          hP.indoorTextureHeights = [];
        }
        hP.indoorTextureHeights[hM.useZoom] = hR;
        var hL = hI._getTileTexImgKey(hM);
        hI._doWorkAfterLabelImageLoad(hK, hQ, hO, hL);
      });
    },
    _getTileTexImgKey: function (i) {
      var T = i.style || this.mapStyleId || 'default';
      var e = T + '_' + i.col + '_' + i.row + '_' + i.zoom;
      if (this.map.config.textRenderType === 'canvas') {
        e += '_' + i.useZoom;
      }
      return e;
    },
    _doWorkAfterLabelImageLoad: function (hM, hK, hI, i) {
      var hL = this;
      var hJ = hM.label;
      hJ.tileInfo = hM.tileInfo;
      hJ.status = 'ready';
      if (hK || hI) {
        var e = hJ.tileInfo;
        if (hK) {
          hK.id = i;
          if (!hJ.textureSources) {
            hJ.textureSources = [];
          }
          hJ.textureSources[e.useZoom] = hK;
        }
        if (hI) {
          hI.id = i + '_indoor';
          if (!hJ.indoorTextureSources) {
            hJ.indoorTextureSources = [];
          }
          hJ.indoorTextureSources[e.useZoom] = hI;
        }
        if (hL.map._webglMapScene) {
          var T = hL.map._webglMapScene._painter;
          if (hK) {
            T._addToAsyncJob(hJ.textureSources[e.useZoom]);
          }
        }
      }
      if (hM.custom !== true) {
        hL.tileLabels.push(hJ);
      }
      if (hL.collisionTimer) {
        return;
      }
      hL.collisionTimer = setTimeout(function () {
        hL.dataBackCollideLabels();
        hL.collisionTimer = null;
      }, 300);
    },
    _updateIconTextureCoords: function (hM, T) {
      if (!hM) {
        return;
      }
      var hL = this.map;
      for (var hI = 0; hI < hM.length; hI++) {
        var hK = hM[hI];
        if (!hK.iconPos) {
          continue;
        }
        if (hL._webglMapScene) {
          var e = hL._webglMapScene._painter;
          var hJ = T + '_' + hK.iconPos.iconType;
          hK.iconPos.texcoord = e._iconTextureAtlasCoords[hJ] || null;
        }
      }
    },
    updateAllIconsTextureCoords: function (hJ) {
      if (this.map.viewAnimationTime) {
        return;
      }
      if (hJ) {
        if (hJ.label) {
          var i = hJ.tileInfo.style;
          this._updateIconTextureCoords(hJ.label.fixedLabel, i);
          this._updateIconTextureCoords(hJ.label.indoorLabel, i);
        }
      } else {
        var hI = this.tileCache.getAllData();
        for (var T in hI) {
          var e = hI[T].data;
          if (e.status === 'ready' && e.label) {
            var i = e.tileInfo.style;
            this._updateIconTextureCoords(e.label.fixedLabel, i);
            this._updateIconTextureCoords(e.label.indoorLabel, i);
          }
        }
      }
      this.updateLabels();
      this.map.dispatchEvent(new a6('onrefresh'));
    },
    cacheDataCollideLabels: function (T) {
      var hJ = this;
      var i = this.map._featureMgr;
      function hI() {
        hJ.cacheLabelTimer = null;
        var hK;
        var hL = hJ.map.getTilt();
        var hM = hJ.map.getHeading() % 360;
        if (
          hJ.tileLabels.length === 0 ||
          (hJ.tileLabels.length === 1 && hJ.tileLabels[0].tileInfo.zoom === 0)
        ) {
          hK = i.getLabelData();
          if (hK.length > 0) {
            hK = hJ.labelProcessor.collisionTest(hK, -1);
          }
        } else {
          if (hL || hM) {
            if (this._collisionTimer) {
              if (!hL) {
                clearTimeout(this._collisionTimer);
              } else {
                if (Date.now() - hJ.lastCollisionTestTime > 500) {
                  hJ.lastCollisionTestTime = Date.now();
                } else {
                  clearTimeout(this._collisionTimer);
                }
              }
            }
            this._collisionTimer = setTimeout(function () {
              hK = hJ.labelProcessor.collisionTest(hJ.tileLabels);
              if (hK) {
                i.setLabelData(hK);
              }
              hJ.updateLabels();
              hJ.map.dispatchEvent(new a6('onrefresh'));
              hJ._collisionTimer = null;
            }, 60);
            return;
          } else {
            hK = hJ.labelProcessor.getCachedLabels(hJ.tileLabels);
          }
        }
        if (hK) {
          i.setLabelData(hK);
        }
        hJ.updateLabels();
        hJ.map.dispatchEvent(new a6('onrefresh'));
      }
      if (!T) {
        clearTimeout(hJ.cacheLabelTimer);
        hI();
      } else {
        if (hJ.cacheLabelTimer) {
          return;
        }
        hJ.cacheLabelTimer = setTimeout(function e() {
          hI();
        }, T);
      }
    },
    dataBackCollideLabels: function () {
      var i = this;
      if (i.tileLabels && i.tileLabels.length === 0) {
        return;
      }
      var e;
      i.labelProcessor.calcLabelsCollision(i.tileLabels);
      e = i.labelProcessor.getCachedLabels(i.tileLabels);
      if (e) {
        i.map._featureMgr.setLabelData(e);
      }
      i.updateLabels();
      i.map.dispatchEvent(new a6('onrefresh'));
      if (fW()) {
        this.labelProcessor._refreshSpotData();
      }
    },
    updateLabels: function (hJ) {
      var hK = this.map;
      var i = hK._featureMgr;
      var T = i.getLabelData();
      if (T.length > 0) {
        var hI = hK.getZoom();
        if (T.labelZoom - hI < 3) {
          this.labelProcessor.updateLabels(T);
          var e = this.labelProcessor.fixDataFormat(T);
          i.setOverlayData(e[0], 2);
          i.setOverlayData(e[1], 3);
          i.setOverlayData(e[2], 4);
        } else {
          i.clearLabelOverlayData();
        }
        hK.temp.isPermitSpotOver = false;
        this.labelProcessor.curSpotAdded = false;
      }
    },
    loadRasterLayerData: function (hI, hM) {
      if (hM) {
        for (var hK = 0, hJ = hI.length; hK < hJ; hK++) {
          var T = hI[hK];
          var hN = this.getTileKey(T);
          var e = this.tileCache.getData(hN);
          if (e && e.status === 'ready') {
            this.map._featureMgr.setData(e, this.drawIndex, 2);
          }
        }
        return;
      }
      for (var hK = 0, hJ = hI.length; hK < hJ; hK++) {
        var T = hI[hK];
        var hN = this.getTileKey(T);
        var e = this.tileCache.getData(hN);
        if (!e) {
          this.tileCache.setData(hN, {});
          var hL = this;
          this.loadRasterTileData(T, function (i, hO) {
            hL.rasterTileDataCbk(i, hO);
          });
        }
      }
    },
    loadRasterTileData: function (i, e) {
      var hJ = i.col;
      var hM = i.row;
      var hK = i.zoom;
      var hI = this.getTilesUrl(new eb(hJ, hM), hK);
      if (!hI) {
        return;
      }
      var hL = this.getTileKey(i);
      var T = this.loadTileImage(hI, hL, e);
      T.tileInfo = i;
    },
    loadTileImage: function (hI, T, e) {
      var i = new Image();
      i.crossOrigin = 'anonymous';
      i.onload = function () {
        e && e(this, T);
      };
      i.onerror = function () {
        e && e(null, T);
      };
      i.src = hI;
      return i;
    },
    rasterTileDataCbk: function (hK, hI) {
      if (!hK) {
        this.tileCache.removeData(hI);
        return;
      }
      var i = hK.tileInfo;
      var T = i.col;
      var hQ = i.row;
      var hP = i.zoom;
      var e = this.tileCache.getData(hI);
      if (!e) {
        return;
      }
      var hJ = dX.calcLoopParam(T, hP);
      var hN = hJ.geoOffsetX;
      hK.tileInfo.loopOffsetX = hN;
      e.textureSource = hK;
      e.dataType = ez;
      e.tileInfo = i;
      e.renderData = {
        vertexAll: [
          0,
          0,
          0,
          0,
          0,
          256,
          0,
          0,
          1,
          0,
          256,
          256,
          0,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          256,
          256,
          0,
          1,
          1,
          0,
          256,
          0,
          0,
          1,
        ],
      };
      e.status = 'ready';
      this.tileCache.setData(hI, e);
      var hL = 'id_' + T + '_' + hQ + '_' + hP;
      var hM = false;
      if (this.curViewTilesInfo[hL]) {
        e.dataType = ez;
        e.png8 = this.png8 || false;
        this.map._featureMgr.setData(e, this.drawIndex, 2);
        hM = true;
      }
      if (hM) {
        var hO = new a6('onrefresh');
        hO.source = 'webgllayer';
        this.map.dispatchEvent(hO);
      }
    },
    _checkTilesLoaded: function () {
      this.numLoading--;
      if (this.map.firstTileLoad === false) {
        this.map.dispatchEvent(new a6('onfirsttilesloaded'));
        this.map.firstTileLoad = true;
      }
      var e = this;
      if (this.numLoading === 0) {
        if (this._checkLoadedTimer) {
          clearTimeout(this._checkLoadedTimer);
          this._checkLoadedTimer = null;
        }
        this._checkLoadedTimer = setTimeout(function () {
          if (e.numLoading === 0) {
            e.map.dispatchEvent(new a6('ontilesloaded'));
          }
          e._checkLoadedTimer = null;
        }, 60);
      }
    },
    isClickableLabel: function (e) {
      if (e.isDel) {
        return false;
      }
      if (e.zoom > 9 && !e.guid) {
        return false;
      }
      if (e.zoom <= 9 && !e.name && !e.guid) {
        return false;
      }
      return true;
    },
  };
  var b4 = 5;
  var dR = 4;
  var hh = 3;
  var e7 = 2;
  var hB = 1;
  var dU = 0;
  function v(e) {
    this._ratio = a1();
    this._iconCache = {};
    this._map = e;
    this._drawingCanvasPool = [];
    this._drawingCanvasHeight = 4096;
  }
  C.extend(v.prototype, {
    _loadIcons: function (i, hM) {
      var hK = 0;
      var hJ = this;
      var T = this._map.config.style;
      for (var hL in i) {
        hK++;
        var e = new Image();
        e.id = hL;
        e.crossOrigin = 'anonymous';
        e.onload = function () {
          hJ._iconCache[this.id].loaded = true;
          hK--;
          if (hK === 0) {
            hM();
          }
          this.onload = null;
        };
        e.onerror = function () {
          hJ._iconCache[this.id] = null;
          hK--;
          if (hK === 0) {
            hM();
          }
          this.onerror = null;
        };
        var hI = eV.getIconSetPath(T) + hL + '.png';
        e.src = hI;
        this._iconCache[hL] = {loaded: false, image: e};
      }
    },
    _getEmptyDrawingCanvas: function () {
      for (var T = 0; T < this._drawingCanvasPool.length; T++) {
        if (this._drawingCanvasPool[T]._free === true) {
          this._drawingCanvasPool[T]._free = false;
          return this._drawingCanvasPool[T];
        }
      }
      var e = this._createNewDrawingCanvas();
      this._drawingCanvasPool.push(e);
      e._free = false;
      return e;
    },
    _createNewDrawingCanvas: function () {
      var e = S('canvas');
      e.width = 512;
      e.height = this._drawingCanvasHeight;
      e._free = true;
      e._id = bj.getGUID();
      var i = e.getContext('2d');
      i.textBaseline = 'bottom';
      i.lineJoin = 'round';
      return e;
    },
    drawLabelsOnCanvas: function (h0, hI) {
      var hQ = h0.label.fixedLabel.slice(0);
      var hW = h0.label.lineLabel.slice(0);
      var T = h0.label.indoorLabel.slice(0);
      if (hQ.length === 0 && hW.length === 0 && T.length === 0) {
        hI();
        return;
      }
      var hL = function (h5, i) {
        return h5.styleId - i.styleId;
      };
      hQ.sort(hL);
      hW.sort(hL);
      T.sort(hL);
      var hZ = {};
      var e = this._getEmptyDrawingCanvas();
      var hV = e.getContext('2d');
      hV.clearRect(0, 0, e.width, e.height);
      var h3 = 0;
      var hR = null;
      var hK = 0;
      if (hQ.length > 0) {
        while (hK < hQ.length && !hQ[hK].styleText[0]) {
          hK++;
        }
        if (hQ[hK] && hQ[hK].styleText[0]) {
          hR = hQ[hK].styleText[0].fontSize + hQ[hK].styleText[0].haloSize * 2;
        }
      }
      if (hR === null && T.length > 0) {
        hK = 0;
        while (hK < T.length && !T[hK].styleText[0]) {
          hK++;
        }
        if (T[hK] && T[hK].styleText[0]) {
          hR = T[hK].styleText[0].fontSize + T[hK].styleText[0].haloSize * 2;
        }
      }
      if (hR === null && hW.length > 0) {
        hK = 0;
        while (hK < hW.length && !hW[hK].styleText[0]) {
          hK++;
        }
        if (hW[hK] && hW[hK].styleText[0]) {
          hR = hW[hK].styleText[0].fontSize + hW[hK].styleText[0].haloSize * 2;
        }
      }
      if (hR === null || isNaN(hR)) {
        hI();
        return;
      }
      var hN = 0;
      var hM = hR;
      var hT = {};
      var h4 = 0;
      var hU = [];
      for (var hY = 0; hY < hQ.length; hY++) {
        var hP = hQ[hY];
        var hS = hP.name;
        var hX = hP.styleText;
        if (!hS || hX.length === 0) {
          continue;
        }
        var hJ = hP.icon;
        if (hP.textOnIcon && (!this._iconCache[hJ] || this._iconCache[hJ].loaded === false)) {
          hU.push(hP);
          h4++;
          if (!hT[hJ]) {
            hT[hJ] = true;
          }
          continue;
        }
        var h1 = this._drawEachText(hV, hP, h3, hN, hM, hR, hZ);
        if (!h1) {
          continue;
        }
        hN = h1.curX;
        hM = h1.curY;
        hR = h1.curLineHeight;
        h3 = h1.styleId;
      }
      var h1 = this._drawEachTypeOfLabels(hV, T, h3, hN, hM, hR, hZ);
      h3 = h1.curStyleId;
      hN = h1.curX;
      hM = h1.curY;
      hR = h1.curLineHeight;
      var h1 = this._drawEachTypeOfLabels(hV, hW, h3, hN, hM, hR, hZ);
      h3 = h1.curStyleId;
      hN = h1.curX;
      hM = h1.curY;
      hR = h1.curLineHeight;
      if (h4 > 0) {
        var h2 = this;
        this._loadIcons(hT, function () {
          h1 = h2._drawEachTypeOfLabels(hV, hU, h3, hN, hM, hR, hZ);
          h3 = h1.curStyleId;
          hN = h1.curX;
          hM = h1.curY;
          hR = h1.curLineHeight;
          var i = h2._generateEachLabelCanvas(e, hM, hQ, hW, T, h0);
          hI(i[0], i[1]);
        });
        return;
      }
      var hO = this._generateEachLabelCanvas(e, hM, hQ, hW, T, h0);
      hI(hO[0], hO[1]);
    },
    drawCustomLabelsOnCanvas: function (hL, hR) {
      if (hL.length === 0) {
        hR();
        return;
      }
      var T = 0;
      var e = hL[0].style.fontSize + (hL[0].style.haloSize || 0) * 2 || 0;
      var hI = e;
      var hN = this._getEmptyDrawingCanvas();
      var hS = hN.getContext('2d');
      hS.clearRect(0, 0, hN.width, hN.height);
      var hO = {};
      var hQ = -1;
      for (var hJ = 0; hJ < hL.length; hJ++) {
        if (!hL[hJ].name) {
          continue;
        }
        var hP = this._drawEachText(hS, hL[hJ], hQ, T, e, hI, hO);
        if (!hP) {
          continue;
        }
        T = hP.curX;
        e = hP.curY;
        hI = hP.curLineHeight;
        hQ = hP.styleId;
      }
      var hK = e;
      var hM = this._copyToNewCanvas(hN, hK);
      for (var hJ = 0; hJ < hL.length; hJ++) {
        if (!hL[hJ].name && hL[hJ].style.iconSize) {
          this._addFixedLabelBounds(hL[hJ]);
          continue;
        }
        if (!hL[hJ].textSize) {
          continue;
        }
        this._updateFixedLabelCoords(hL[hJ], hK);
        this._addFixedLabelBounds(hL[hJ]);
      }
      hR(hM);
    },
    _drawEachTypeOfLabels: function (hR, hL, hP, hI, T, hJ, hN) {
      for (var hK = 0; hK < hL.length; hK++) {
        var hM = hL[hK];
        var hQ = hM.name;
        var e = hM.styleText;
        if (!hQ || e.length === 0) {
          continue;
        }
        var hO = this._drawEachText(hR, hM, hP, hI, T, hJ, hN);
        if (!hO) {
          continue;
        }
        hI = hO.curX;
        T = hO.curY;
        hJ = hO.curLineHeight;
        hP = hO.styleId;
        if (hO.curY > this._drawingCanvasHeight) {
          return {curX: hI, curY: T, curLineHeight: hJ, curStyleId: hP};
        }
      }
      return {curX: hI, curY: T, curLineHeight: hJ, curStyleId: hP};
    },
    _drawIndoorTextLabelOnCanvas: function (hJ) {
      var e = this._getEmptyDrawingCanvas();
      var hQ = e.getContext('2d');
      hQ.clearRect(0, 0, e.width, e.height);
      var hY = 0;
      var hP = null;
      var hO = 0;
      var hM;
      var hV = {};
      var hU = [];
      for (var hK in hJ) {
        if (hK === 'tileInfo') {
          continue;
        }
        var hI = hJ[hK];
        var hT = hI.defaultFloor;
        var hN = hI.floors;
        for (var hS = 0; hS < hN.length; hS++) {
          if (hS === hT) {
            continue;
          }
          var hW = hN[hS];
          if (!hW.pois) {
            continue;
          }
          var hL = hW.pois;
          for (var hR = 0; hR < hL.length; hR++) {
            if (hP === null && hL[hR].styleText[0]) {
              hP = hL[hR].styleText[0].fontSize + hL[hR].styleText[0].haloSize * 2;
              hM = hP;
            }
            hU.push(hL[hR]);
          }
        }
      }
      if (hP === null) {
        return null;
      }
      hU.sort(function (hZ, i) {
        return i.rank - hZ.rank || hZ.styleId - i.styleId;
      });
      var hX = this._drawEachTypeOfLabels(hQ, hU, hY, hO, hM, hP, hV);
      hY = hX.curStyleId;
      hO = hX.curX;
      hM = hX.curY;
      hP = hX.curLineHeight;
      var T = this._copyToNewCanvas(e, hM);
      return T;
    },
    _updateIndoorLabelsCoords: function (hP, hQ) {
      for (var hO in hP) {
        if (hO === 'tileInfo') {
          continue;
        }
        var e = hP[hO];
        var hK = e.defaultFloor;
        var hL = e.floors;
        for (var hM = 0; hM < hL.length; hM++) {
          if (hM === hK) {
            continue;
          }
          var T = hL[hM];
          if (!T.pois) {
            continue;
          }
          var hJ = T.pois;
          for (var hI = 0; hI < hJ.length; hI++) {
            var hN = hJ[hI];
            if (hN.name && (!hN.textSize || hN.textSize.length === 0)) {
              hJ.splice(hI, 1);
              hI--;
              continue;
            }
            this._updateFixedLabelCoords(hN, hQ);
            this._addFixedLabelBounds(hN);
          }
        }
      }
    },
    _generateEachLabelCanvas: function (hL, hK, hM, e, hO, T) {
      hK = Math.min(hK, this._drawingCanvasHeight);
      var hN = this._copyToNewCanvas(hL, hK);
      var hI = null;
      if (T.renderData.indoorData) {
        hI = this._drawIndoorTextLabelOnCanvas(T.renderData.indoorData);
        if (hI) {
          this._updateIndoorLabelsCoords(T.renderData.indoorData, hI.height);
        }
      }
      for (var hJ = 0; hJ < hM.length; hJ++) {
        if (!hM[hJ].textSize) {
          continue;
        }
        this._updateFixedLabelCoords(hM[hJ], hK);
        this._addFixedLabelBounds(hM[hJ]);
      }
      for (var hJ = 0; hJ < hO.length; hJ++) {
        if (!hO[hJ].textSize) {
          continue;
        }
        this._updateFixedLabelCoords(hO[hJ], hK);
        this._addFixedLabelBounds(hO[hJ]);
      }
      for (var hJ = 0; hJ < e.length; hJ++) {
        this._updateLineLabelCoords(e[hJ], hK);
      }
      return [hN, hI];
    },
    _copyToNewCanvas: function (T, i) {
      if (i === 0) {
        return null;
      }
      var hI = S('canvas');
      hI.width = T.width;
      hI.height = i;
      var e = hI.getContext('2d');
      e.drawImage(T, 0, 0, 512, i, 0, 0, 512, i);
      hI._id = T._id;
      T._free = true;
      return hI;
    },
    _drawEachText: function (h0, hM, T, h2, h1, h9, hJ) {
      var h8 = hM.name;
      var hR = hM.styleText ? hM.styleText[0] : hM.style;
      if (!hR) {
        return null;
      }
      var hU = hR.fontSize;
      var id = hR.fontWeight;
      var it = hR.haloSize || 0;
      if (!hV) {
      }
      if (hR.fontRgba) {
        var iz = hR.fontRgba[3] / 255;
        var hQ = [];
        hQ[3] = iz;
        for (var iy = 0; iy < 3; iy++) {
          hQ[iy] = hR.fontRgba[iy];
        }
      }
      if (hR.haloRgba) {
        var iz = hR.haloRgba[3] / 255;
        var hX = [];
        hX[3] = iz;
        for (var iy = 0; iy < 3; iy++) {
          hX[iy] = hR.haloRgba[iy];
        }
      }
      var il = hQ ? 'rgba(' + hQ.join(',') + ')' : hR.color;
      var hL = hX ? 'rgba(' + hX.join(',') + ')' : hR.strokeColor;
      var iv = hM.styleId || 0;
      if (it > 4) {
        it = 4;
      }
      var ia = [];
      var hZ = [];
      var h6 = 0;
      if (hJ && !hJ[iv]) {
        hJ[iv] = {};
      }
      var hT = hU + it * 2;
      var ib = hT;
      if (hM.containDescendings) {
        ib += 4;
      }
      if (it === 0) {
        ib += 2;
      }
      if (hM.textOnIcon) {
        ib = Math.max(ib, hM.iconSize[1]);
      }
      if (iv !== T || ib > h9) {
        T = iv;
        if (id >= 10 && id % 10 === 0) {
          h0.font = id * 10 + ' ' + hU + 'px sans-serif';
        } else {
          h0.font = hU + 'px sans-serif';
        }
        if (ib > h9) {
          var h7 = ib - h9;
          h9 += h7;
          h1 += h7;
        }
        if (it > 0) {
          h0.lineWidth = it * 2;
          h0.strokeStyle = hL;
        }
        h0.fillStyle = il;
      }
      if (hM.type === 'line') {
        var hO = h8.split('');
        for (var iw = 0; iw < hO.length; iw++) {
          var io = hO[iw];
          var h3;
          var ie;
          if (hJ[iv][io]) {
            var hV = hJ[iv][io];
            h3 = hV.displaySize;
            ie = hV.curWordPosition;
          } else {
            var hI = Math.ceil(h0.measureText(io).width);
            if (h2 + hI > 512) {
              h2 = 0;
              h1 += ib;
              h9 = ib;
            }
            if (h1 > this._drawingCanvasHeight) {
              return {curX: h2, curY: h1, curLineHeight: h9, styleId: iv};
            }
            var ip = h2;
            if (it > 0) {
              hI += it;
              ip -= Math.round(it / 2);
              h0.strokeText(io, h2, h1);
            }
            h0.fillText(io, h2, h1);
            var ik = [hI, ib];
            h3 = [Math.round(ik[0] / 2), Math.round(ik[1] / 2)];
            ie = [ip, h1 - ib];
            hJ[iv][io] = {displaySize: h3, curWordPosition: ie, totalHeight: h6};
            h2 += hI + 2;
          }
          ia.push(h3);
          hZ.push(ie);
        }
        h6 = Math.round(ia[0][1]);
      } else {
        if (hJ[iv][h8]) {
          var hV = hJ[iv][h8];
          ia = hV.textSize;
          hZ = hV.labelImagePosition;
          h6 = hV.totalHeight;
        } else {
          var hW = h8.split('\\');
          if (hW.length > 1 && hM.textOnIcon) {
            var ix = 0;
            var iu = 0;
            var iA = [];
            var h4 = 8;
            for (var iw = 0; iw < hW.length; iw++) {
              var h8 = hW[iw];
              var hS = Math.ceil(h0.measureText(h8).width);
              if (hS > ix) {
                ix = hS;
              }
              iA.push(Math.round(hS / 2));
              iu += ib;
            }
            var hP = ix + 2 * h4;
            var ir = iu + 2 * h4;
            if (h2 + hP > 512) {
              h2 = 0;
              h1 += h9;
            }
            h1 += iu - ib + 2 * h4;
            var ij = h2;
            var h5 = h1 - ir;
            var e = Math.round(hP / 2);
            var hY = this._iconCache[hM.icon].image;
            this.drawStretchedIcon(h0, hY, [ij, h5], h4, ix, iu);
            for (var iw = 0; iw < hW.length; iw++) {
              var h8 = hW[iw];
              var iq = ij + (e - iA[iw]);
              var im = h5 + 4 + (iw + 1) * ib;
              h0.fillText(h8, iq, im);
            }
            ia.push([Math.round(hP / 2), Math.round(ir / 2)]);
            hZ.push([ij, h5]);
            h2 += hP;
            h9 = ir;
            h6 = Math.round(ir / 2);
          } else {
            for (var iw = 0; iw < hW.length; iw++) {
              var h8 = hW[iw];
              var hS = Math.ceil(h0.measureText(h8).width);
              var hP = hS;
              var hK = 0;
              if (hM.textOnIcon) {
                hK = 10;
                hP += hK * 2;
                if (hM.styleId === 519) {
                  hP = hM.iconSize[0];
                  hK = Math.round((hP - hS) / 2);
                }
              }
              if (h2 + hP > 512) {
                h2 = 0;
                h1 += ib;
                h9 = ib;
              }
              if (h1 > this._drawingCanvasHeight) {
                return {curX: h2, curY: h1, curLineHeight: h9, styleId: iv};
              }
              var ij = h2;
              var h5 = h1 - ib;
              var ii = h2;
              var ih = h1;
              if (hM.containDescendings) {
                ih -= 4;
              }
              if (hM.textOnIcon) {
                var ic = false;
                var hY = this._iconCache[hM.icon].image;
                var ig = hM.iconSize.concat([]);
                if (hT > ig[1]) {
                  ig[1] = hT;
                  ic = true;
                }
                if (hS > ig[0]) {
                  ig[0] = hS;
                  ic = true;
                }
                if (hM.styleId === 519) {
                  h0.drawImage(hY, 0, 0, ig[0], ig[1], ij, h5, ig[0], ig[1]);
                } else {
                  if (ic) {
                    this.drawStretchedIcon(h0, hY, [ij, h5], hK, hS, ig[1]);
                  } else {
                    this.draw3StretchedIcon(h0, hY, [ij, h5], hK, hS, ig[1]);
                  }
                }
                ii += hK;
                if (hM.iconSize[1] > hT) {
                  ih -= (hM.iconSize[1] - hT) / 2 - 1;
                }
                hP += 1;
              }
              if (it > 0) {
                hP += it;
                ij -= Math.round(it / 2);
                h5 += Math.round(it / 2);
                if (iv === 71028) {
                  ib -= 2;
                }
                if (iv === 32) {
                  ib -= 2;
                }
                h0.strokeText(h8, ii, ih);
              }
              h0.fillText(h8, ii, ih);
              var hN = [hP, ib];
              var h3 = [Math.round(hN[0] / 2), Math.round(hN[1] / 2)];
              ia.push(h3);
              hZ.push([ij, h5]);
              h6 += Math.round(h3[1]);
              h2 += hP;
            }
          }
          hJ[iv][h8] = {textSize: ia, labelImagePosition: hZ, totalHeight: h6};
        }
      }
      hM.textSize = ia;
      hM.labelImagePosition = hZ;
      hM.totalHeight = h6;
      return {curX: h2, curY: h1, curLineHeight: h9, styleId: iv};
    },
    drawStretchedIcon: function (e, T, hI, hL, hM, i) {
      var hK = hI[0];
      var hJ = hI[1];
      e.drawImage(T, 0, 0, hL, hL, hK, hJ, hL, hL);
      e.drawImage(T, hL, 0, 1, hL, hK + hL, hJ, hM, hL);
      e.drawImage(T, T.width - hL, 0, hL, hL, hK + hM + hL, hJ, hL, hL);
      e.drawImage(T, 0, hL, hL, 1, hK, hJ + hL, hL, i);
      e.drawImage(T, hL, hL, 1, 1, hK + hL, hJ + hL, hM, i);
      e.drawImage(T, T.width - hL, hL, hL, 1, hK + hM + hL, hJ + hL, hL, i);
      e.drawImage(T, 0, T.height - hL, hL, hL, hK, hJ + i + hL, hL, hL);
      e.drawImage(T, hL, T.height - hL, 1, hL, hK + hL, hJ + i + hL, hM, hL);
      e.drawImage(T, T.width - hL, T.height - hL, hL, hL, hK + hM + hL, hJ + i + hL, hL, hL);
    },
    draw3StretchedIcon: function (e, i, T, hK, hM, hL) {
      var hJ = T[0];
      var hI = T[1];
      e.drawImage(i, 0, 0, hK, i.height, hJ, hI, hK, i.height);
      e.drawImage(i, hK, 0, 1, i.height, hJ + hK, hI, hM, i.height);
      e.drawImage(i, i.width - hK, 0, hK, i.height, hJ + hK + hM, hI, hK, i.height);
    },
    _updateFixedLabelCoords: function (hJ, hY) {
      if (hY === 0) {
        return;
      }
      var hT = [];
      var h5 = [];
      var h6 = 0;
      var hW = hJ.totalHeight;
      var ie = hJ.textSize.length;
      var hK = hJ.direction;
      if (typeof hK !== 'number') {
        hK = 0;
      }
      for (var h7 = 0; h7 < ie; h7++) {
        var hZ = hJ.labelImagePosition[h7];
        var hX = hJ.textSize[h7];
        var hV = hZ[0];
        var hI = hZ[1];
        var hL = hX[0];
        var hQ = hX[1];
        var hS = 0;
        var h4 = 0;
        if (typeof hJ.textMargin === 'number') {
          h4 = hJ.textMargin;
        }
        var hR;
        var e;
        var hN = 0;
        var hU = 0;
        if (!hJ.iconPos) {
          if (!hJ.custom) {
            hK = dR;
          }
        } else {
          hN = hJ.iconPos.width;
          hU = hJ.iconPos.height;
        }
        switch (hK) {
          case hh:
            var T = hW / 2 - hQ + (hS * (ie - 1)) / 2;
            hR = Math.round(-hN / 2 - hL - h4);
            e = Math.round(T - h6 - hS * h7);
            break;
          case hB:
            var T = hW / 2 - hQ + (hS * (ie - 1)) / 2;
            hR = Math.round(hN / 2 + h4);
            e = Math.round(T - h6 - hS * h7);
            break;
          case e7:
            var T = hU / 2 + hW - hQ + hS * ie;
            hR = Math.round(-hL / 2);
            e = Math.round(T - h6 - hS * h7);
            break;
          case dU:
            var T = -hU / 2 - hS - hQ;
            hR = Math.round(-hL / 2);
            e = Math.round(T - h6 - hS * h7);
            break;
          case dR:
            var T = -hW / 2 - (hS * (ie - 1)) / 2;
            hR = Math.round(-hL / 2);
            e = Math.round(T - h6 - hS * h7);
            break;
        }
        h6 += hQ;
        var hP = hR + hL;
        var ig = e;
        var hO = hP;
        var id = ig + hQ;
        var hM = hR;
        var ic = id;
        hT.push(hR, e, hP, ig, hO, id, hR, e, hO, id, hM, ic);
        var ib = hV / 512;
        var h3 = (hY - hI - hQ * 2) / hY;
        var ia = (hV + hL * 2) / 512;
        var h2 = h3;
        var h9 = ia;
        var h1 = (hY - hI) / hY;
        var h8 = ib;
        var h0 = h1;
        h5.push(ib, h3, ia, h2, h9, h1, ib, h3, h9, h1, h8, h0);
      }
      if (!hJ.textPos) {
        hJ.textPos = {};
      }
      hJ.textPos.vertex = hT;
      hJ.textPos.texcoord = h5;
    },
    _addFixedLabelBounds: function (hO) {
      var hK = 1000;
      var hI = 1000;
      var T = -1000;
      var e = -1000;
      if (hO.iconPos) {
        var hM = hO.iconPos['vertex'];
        for (var hN = 0, hJ = hM.length; hN < hJ; hN += 2) {
          var hS = hM[hN];
          var hQ = hM[hN + 1];
          if (hS < hK) {
            hK = hS;
          }
          if (hS > T) {
            T = hS;
          }
          if (hQ < hI) {
            hI = hQ;
          }
          if (hQ > e) {
            e = hQ;
          }
        }
      }
      if (hO.custom && hO.style.iconSize && !hO.name) {
        var hP = hO.style.iconSize;
        var hR = hO.direction;
        switch (hR) {
          case dR:
            hK = -Math.round(hP[0] / 2);
            hI = -Math.round(hP[1] / 2);
            T = Math.round(hP[0] / 2);
            e = Math.round(hP[1] / 2);
            break;
          case e7:
            hK = -Math.round(hP[0] / 2);
            hI = 0;
            T = Math.round(hP[0] / 2);
            e = hP[1];
            break;
        }
      }
      if (hO.textPos) {
        var hL = hO.textPos['vertex'];
        for (var hN = 0, hJ = hL.length; hN < hJ; hN += 2) {
          var hS = hL[hN];
          var hQ = hL[hN + 1];
          if (hS < hK) {
            hK = hS;
          }
          if (hS > T) {
            T = hS;
          }
          if (hQ < hI) {
            hI = hQ;
          }
          if (hQ > e) {
            e = hQ;
          }
        }
      }
      hO.bds = [hK, hI, T, e];
    },
    _updateLineLabelCoords: function (hZ, hP) {
      if (hP === 0) {
        return;
      }
      var hI = hZ.wordsInfo;
      var hW = hZ.wordCount;
      if (!hZ.labelImagePosition) {
        return;
      }
      var hR = hZ.labelImagePosition.slice(0);
      if (hZ.reverse) {
        hR.reverse();
      }
      var h8 = 1000;
      var h5 = 1000;
      var h6 = -1000;
      var h4 = -1000;
      for (var h0 = 0; h0 < hW; h0++) {
        var h9 = hR[h0];
        var h7 = h9[0];
        var hX = h9[1];
        var hV = hZ.textSize[h0];
        var hO = hV[0];
        var e = hV[1];
        var hN = h7 / 512;
        var hU = (hP - hX - e * 2) / hP;
        var hL = (h7 + hO * 2) / 512;
        var hT = hU;
        var hJ = hL;
        var hS = (hP - hX) / hP;
        var T = hN;
        var hQ = hS;
        hI[h0].size = [hO, e];
        hI[h0].texcoord = [hN, hU, hL, hT, hJ, hS, hN, hU, hJ, hS, T, hQ];
        var h3 = hI[h0].offset[0];
        var h2 = hI[h0].offset[1];
        var h1 = h3 - hO / 2;
        var hM = h2 + e / 2;
        var hK = h2 - e / 2;
        var hY = h3 + hO / 2;
        if (h1 < h8) {
          h8 = h1;
        }
        if (hY > h6) {
          h6 = hY;
        }
        if (hK < h5) {
          h5 = hK;
        }
        if (hM > h4) {
          h4 = hM;
        }
      }
      hZ.bds = [h8, h5, h6, h4];
    },
  });
  var cM = {
    0: '00000000',
    16: '00010000',
    32: '00100000',
    48: '00110000',
    64: '01000000',
    96: '01100000',
  };
  function ck(T, hI, hJ) {
    var e = T.bds;
    if (!e) {
      return false;
    }
    var i = T.tracer;
    var hM;
    if (i) {
      if (!cM[i]) {
        hM = i.toString(2);
        if (hM.length < 8) {
          hM = new Array(8 - hM.length + 1).join('0') + hM;
        }
        cM[i] = hM;
      }
      hM = cM[i];
      var hL = dc.mapZoomStartZoomMapping[hI];
      return hM[hI - hL] === '1';
    }
    var hK = T.displayRange;
    if (hJ >= hK[0] && hJ <= hK[1]) {
      return true;
    }
    return false;
  }
  function dd(i, e) {
    this.map = i.map;
    this.layer = i;
    e = e || [];
    this.allLabels = [];
    this._spotData = [];
    this._strategyInfo = null;
    this.RANK1 = 1000000;
    this.RANK2 = 2000000;
    this.RANK3 = 3000000;
    this.RANK4 = 4000000;
    this.RANK5 = 5000000;
    this._useRound = false;
    this._mapIsMoving = false;
    this._onMapIdleCallback = e.onMapIdleCallback;
    this.map.temp.isPermitSpotOver = true;
    this.currentSelectedLabel = null;
    this.map._labelProcessor = this;
    this.iconCache = {};
    this.fixedLabelData = [];
    this.lineLabelData = [];
    this.highlightLabelData = [];
    this._iconLoadTimer = null;
    this._labelTextCanvas = null;
    if (this.map.config.textRenderType === 'canvas') {
      this._labelTextCanvas = this.map.tileMgr.getLabelTextCanvas();
    }
    this.bind();
  }
  C.extend(dd.prototype, {
    bind: function () {
      var T = this.map;
      var i = this;
      T.addEventListener('mapstatusbusy_inner', function (hI) {
        i._useRound = false;
        i._mapIsMoving = true;
      });
      T.addEventListener('mapstatusidle_inner', function (hI) {
        if (!fW()) {
          i._useRound = true;
        }
        i._mapIsMoving = false;
      });
      T.addEventListener('onspotmouseover', function (hK) {
        if (!this.temp.isPermitSpotOver) {
          return;
        }
        if (hK.spots.length > 0) {
          var hJ = hK.spots[0].userdata.uid;
          var hL = hK.spots[0].userdata.tilePosStr;
          var hI = i.getLabelByUid(hJ, hL);
          hI && hI.formatedData && i._toHighlightColor(hI.formatedData);
        }
      });
      T.addEventListener('onspotmouseout', function (hK) {
        if (!this.temp.isPermitSpotOver) {
          return;
        }
        if (hK.spots.length > 0) {
          var hJ = hK.spots[0].userdata.uid;
          var hL = hK.spots[0].userdata.tilePosStr;
          var hI = i.getLabelByUid(hJ, hL);
          hI && hI.formatedData && i._toDefaultColor(hI.formatedData);
        }
      });
      T.addEventListener('spotclick', function (hK) {
        if (hK.spots && hK.spots.length > 0) {
          if (hK.spots[0].userdata.zoom < 10) {
            return;
          }
          var hJ = hK.spots[0].userdata.uid;
          var hL = hK.spots[0].userdata.tilePosStr;
          if (
            i.currentSelectedLabel &&
            (i.currentSelectedLabel.uid !== hJ || i.currentSelectedLabel.tilePosStr !== hL)
          ) {
            i._recoverNormalState();
          }
          var hI = i.getLabelByUid(hJ, hL);
          hI && i._changeBaseMapState(hI);
        } else {
          i._recoverNormalState();
        }
      });
      T.on('spot_status_reset', function () {
        i._recoverNormalState();
      });
      T.on('spot_highlight', function (hJ) {
        var hI = i.getLabelByUid(hJ.uid, hJ.tilePosStr);
        hI && hI.formatedData && i._toHighlightColor(hI.formatedData);
      });
      T.addEventListener('mousemove', function (hI) {
        if (i.curSpotAdded) {
          return;
        }
        if (this.currentOperation !== dO.idle || i._mapIsMoving === true) {
          return;
        }
        i._refreshSpotData();
        this.temp.isPermitSpotOver = true;
        i.curSpotAdded = true;
      });
      if (fW()) {
        function e() {
          i._refreshSpotData();
        }
        T.addEventListener('mapstatusidle_inner', e);
      }
      T.on('style_loaded', function () {
        if (i.map.config.textRenderType === 'canvas' && !i._labelTextCanvas) {
          i._labelTextCanvas = i.map.tileMgr.getLabelTextCanvas();
        }
      });
    },
    getLabelByUid: function (hL, hM) {
      var e = this.map._featureMgr.getResult().tileLabels;
      for (var hK = 0; hK < e.length; hK++) {
        var T = e[hK].fixedLabel;
        for (var hJ = 0; hJ < T.length; hJ++) {
          if (e[hK].fixedLabel[hJ].guid === hL && e[hK].fixedLabel[hJ].tilePosStr === hM) {
            return e[hK].fixedLabel[hJ];
          }
        }
        var hI = e[hK].indoorLabel;
        for (var hJ = 0; hJ < hI.length; hJ++) {
          if (e[hK].indoorLabel[hJ].guid === hL && e[hK].indoorLabel[hJ].tilePosStr === hM) {
            return e[hK].indoorLabel[hJ];
          }
        }
      }
      return null;
    },
    getTileByLabelUid: function (hL) {
      var e = this.map._featureMgr.getResult().tileLabels;
      for (var hK = 0; hK < e.length; hK++) {
        var T = e[hK].fixedLabel;
        for (var hJ = 0; hJ < T.length; hJ++) {
          if (e[hK].fixedLabel[hJ].guid === hL) {
            return e[hK];
          }
        }
        var hI = e[hK].indoorLabel;
        for (var hJ = 0; hJ < hI.length; hJ++) {
          if (e[hK].indoorLabel[hJ].guid === hL) {
            return e[hK];
          }
        }
      }
      return null;
    },
    _toHighlightColor: function (T) {
      if (T.tempRank && T.tempRank === this.RANK5) {
        return;
      }
      var e = this.map._featureMgr.getResult().eleData[4] || [];
      var hJ = false;
      for (var hI = 0; hI < e.length; hI++) {
        if (
          e[hI] === T ||
          (e[hI].guid === T.guid && e[hI].tilePosStr === T.tilePosStr && e[hI].zoom === T.zoom)
        ) {
          hJ = true;
          break;
        }
      }
      if (hJ) {
        return;
      }
      e.push(T);
      this.map._featureMgr.setOverlayData(e, 4);
      this.map.dispatchEvent(new a6('onrefresh'));
    },
    _toDefaultColor: function (T) {
      if (T.tempRank && T.tempRank === this.RANK5) {
        return;
      }
      var e = this.map._featureMgr.getResult().eleData[4] || [];
      for (var hI = 0; hI < e.length; hI++) {
        if (
          T === e[hI] ||
          (T.guid === e[hI].guid && T.tilePosStr === e[hI].tilePosStr && T.zoom === e[hI].zoom)
        ) {
          e.splice(hI, 1);
          break;
        }
      }
      this.map._featureMgr.setOverlayData(e, 4);
      this.map.dispatchEvent(new a6('onrefresh'));
    },
    _changeBaseMapState: function (i) {
      var hJ = i.guid;
      var hN = i.formatedData.guidExt;
      var hP = {guid: hJ, tilePosStr: i.tilePosStr, guidExt: hN};
      this._strategyInfo = hP;
      this.currentSelectedLabel = i;
      var hI = this.map._featureMgr;
      var e = hI.getLabelData();
      e = this.collisionTest(e);
      this.updateLabels(e);
      var hQ = this.fixDataFormat(e);
      hI.setOverlayData(hQ[0], 2);
      hI.setOverlayData(hQ[1], 3);
      hI.setOverlayData(hQ[2], 4);
      var T = this.getTileByLabelUid(hJ);
      this.currentSelectedLabel.tileInfo = T.tileInfo;
      var hO = T.tileInfo.zoom;
      var hM = this.layer.tileCache.getAllData();
      for (var hL in hM) {
        var hK = hM[hL].data;
        if (!hK.label) {
          continue;
        }
        this.clearCollisionCache(hK.label);
      }
      this.map.dispatchEvent(new a6('onrefresh'));
    },
    _recoverNormalState: function () {
      this._strategyInfo = null;
      var hM = false;
      var hK = this.map._featureMgr.getLabelData();
      if (this.currentSelectedLabel) {
        var T = this.currentSelectedLabel.guid;
        this.clearCollisionCache(this.getTileByLabelUid(T));
        var hJ = this.layer.tileCache.getAllData();
        for (var hI in hJ) {
          var hL = hJ[hI].data;
          if (!hL.label) {
            continue;
          }
          this.clearCollisionCache(hL.label);
        }
        this.currentSelectedLabel.tempRank = null;
        this.currentSelectedLabel = null;
        hM = true;
      }
      hK = this.collisionTest(hK);
      this.updateLabels(hK);
      var e = this.fixDataFormat(hK);
      var i = this.map._featureMgr;
      i.setOverlayData(e[0], 2);
      i.setOverlayData(e[1], 3);
      i.setOverlayData([], 4);
      this.map.dispatchEvent(new a6('onrefresh'));
      if (hM) {
        this.curSpotAdded = false;
        this._refreshSpotData();
      }
    },
    loadIconImages: function (hJ, hU) {
      var hM = hJ.label;
      var hK = hJ.tileInfo.style;
      var T = hM.fixedLabel;
      var hR = hM.indoorLabel;
      var hV = T.length + hR.length;
      var hO = this;
      var hI = 0;
      var hT = 200;
      for (var hL = 0; hL < hV; hL++) {
        var hN;
        if (hL < T.length) {
          hN = T[hL];
        } else {
          hN = hR[hL - T.length];
        }
        if (!hN.iconPos) {
          continue;
        }
        var hQ = hN.iconPos.iconType;
        var hS = hK + '_' + hQ;
        hI++;
        if (this.iconCache[hS]) {
          if (this.iconCache[hS].loaded) {
            hU(hJ);
          }
          continue;
        }
        var hP = new Image();
        hP.id = hS;
        hP.crossOrigin = 'anonymous';
        hP.onload = function () {
          hO.iconCache[this.id].loaded = true;
          hO._addToIconTexture(this);
          if (hO._iconLoadTimer === null) {
            hO._iconLoadTimer = setTimeout(function () {
              hU();
              hO._iconLoadTimer = null;
            }, hT);
          }
          this.onload = null;
        };
        hP.onerror = function () {
          if (!hO._iconLoadTimer) {
            hO._iconLoadTimer = setTimeout(function () {
              hU();
              hO._iconLoadTimer = null;
            }, hT);
          }
          hO.iconCache[this.id] = null;
          this.onerror = null;
        };
        var e = eV.getIconSetPath(this.map.config.style) + hQ + '.png';
        hP.src = e;
        this.iconCache[hS] = {loaded: false, image: hP};
      }
      return hI;
    },
    _addToIconTexture: function (hK) {
      if (!this.map._webglMapScene) {
        return;
      }
      var hM = this.map._webglMapScene._painter;
      var e = hM._iconTextureAtlas.addTexture(hK);
      hM._iconTextureAtlasOffset[hK.id] = e;
      var hP = (0 * hK.width) / 1024 + e.width;
      var hJ = (0 * hK.height) / 1024 + e.height;
      var hO = hK.width / 1024 + e.width;
      var hI = hJ;
      var hN = hO;
      var T = hK.height / 1024 + e.height;
      var hL = hP;
      var i = T;
      hM._iconTextureAtlasCoords[hK.id] = [hP, hJ, hO, hI, hN, T, hP, hJ, hN, T, hL, i];
    },
    loadImgByStr: function (hI, hJ, hK) {
      if (!hI && !hJ) {
        hK && hK(null, null);
        return;
      }
      if (typeof hI === 'object' && typeof hJ === 'object') {
        hK(hI, hJ);
        return;
      }
      var i = 0;
      var T = null;
      var e = null;
      if (hI) {
        i++;
        T = new Image();
        T.onload = function () {
          i--;
          if (i === 0) {
            hK && hK(this, e);
          }
          this.onload = null;
        };
        T.src = hI;
      }
      if (hJ) {
        i++;
        e = new Image();
        e.onload = function () {
          i--;
          if (i === 0) {
            hK && hK(T, this);
          }
          this.onload = null;
        };
        e.src = hJ;
      }
    },
    collisionTest: function (hP, iv, h7) {
      if (this.map.viewAnimationTime) {
        return [];
      }
      if (!hP) {
        return [];
      }
      var hZ = this.map;
      var ie = hZ.getHeading();
      ie = this.calcLoopHeading(ie);
      var ip = hZ.height;
      var ik = this.allLabels;
      ik.length = 0;
      hP.sort(function (ix, i) {
        var iz = ix.tileInfo;
        var iy = i.tileInfo;
        if (iz.col * iz.row < iy.col * iy.row) {
          return -1;
        } else {
          return 1;
        }
      });
      var hQ = hP.labelZoom;
      var h0 = hZ.getTilt();
      var hS = hZ.getZoom();
      var ij;
      if (h7) {
        ij = h7;
      } else {
        ij = this.getZoomStep();
      }
      for (var it = 0, iq = hP.length; it < iq; it++) {
        var h3 = hP[it];
        var hN = h3.tileInfo;
        var hK = hN.zoom;
        var ii = hN.loopOffsetX / Math.pow(2, 18 - hK);
        if (!ie && !h0) {
          if (h3.unnecessaryCollisionTest && h3.unnecessaryCollisionTest[h7]) {
            continue;
          }
        }
        var ia = h3.fixedLabel || [];
        for (var ir = 0, h5 = ia.length; ir < h5; ir++) {
          var hL = ia[ir];
          hL.zoom = hK;
          if (iv === -1 && hL.isDel) {
            continue;
          }
          if (!ck(hL, hN.useZoom, hS)) {
            hL.isDel = true;
            continue;
          }
          this.calcCollisionBounds(hL, ij, ii, ip);
          ik.push(hL);
        }
        var h9 = h3.indoorLabel || [];
        for (var ir = 0, h5 = h9.length; ir < h5; ir++) {
          var hL = h9[ir];
          hL.zoom = hK;
          if (iv === -1 && hL.isDel) {
            continue;
          }
          if (!ck(hL, hN.useZoom)) {
            hL.isDel = true;
            continue;
          }
          this.calcCollisionBounds(hL, ij, ii, ip);
          ik.push(hL);
        }
        var hM = h3.lineLabel || [];
        for (var ir = 0, h5 = hM.length; ir < h5; ir++) {
          var hL = hM[ir];
          if (iv === -1 && hL.isDel) {
            continue;
          }
          if (!ck(hL, hN.useZoom)) {
            hL.isDel = true;
            continue;
          }
          var iw = hL.pt;
          var h6 = hZ.pointToPixelIn(iw, {zoom: ij, useRound: this._useRound});
          var h4 = h6.x + ii;
          var h2 = ip - h6.y;
          var h8 = hL.bds;
          var io = h8[0];
          var il = h8[1];
          var hX = h8[2];
          var hW = h8[3];
          var ig = io;
          var id = il;
          var hV = hX;
          var hU = hW;
          if ((ie >= 0 && ie < 45) || (ie >= 315 && ie < 360)) {
            ig = io;
            id = il;
            hV = hX;
            hU = hW;
          } else {
            if (ie >= 45 && ie < 135) {
              ig = il;
              id = -hX;
              hV = hW;
              hU = -io;
            } else {
              if (ie >= 135 && ie < 225) {
                ig = -hX;
                id = -hW;
                hV = -io;
                hU = -il;
              } else {
                if (ie >= 225 && ie < 315) {
                  ig = -hW;
                  id = io;
                  hV = -il;
                  hU = hX;
                }
              }
            }
          }
          hL._tempBds = [h4 + ig, h2 + id, h4 + hV, h2 + hU];
          var hO = hZ.pixelToPointIn(new eb(hL._tempBds[0], h6.y + id), {zoom: ij});
          var hI = hZ.pixelToPointIn(new eb(hL._tempBds[2], h6.y + hU), {zoom: ij});
          hL._mcBds = [hO, hI];
          ik.push(hL);
        }
      }
      var ih = this._strategyInfo;
      if (ih) {
        var hT = ih.guid;
        var h1 = ih.guidExt;
        var T = false;
        for (var it = 0, iq = ik.length; it < iq; it++) {
          var im = ik[it];
          delete im.tempRank;
          if (!this.layer.isClickableLabel(im) || (h1 === 1 && !im.guidExt)) {
            continue;
          }
          if (hT === im.guid && ih.tilePosStr === im.tilePosStr) {
            im.tempRank = this.RANK5;
            T = true;
          }
        }
        if (!T && this.currentSelectedLabel) {
          this.currentSelectedLabel.tempRank = this.RANK5;
          var hN = this.currentSelectedLabel.tileInfo;
          var hK = hN.zoom;
          var ii = hN.loopOffsetX / Math.pow(2, 18 - hK);
          this.calcCollisionBounds(this.currentSelectedLabel, ij, ii, ip);
          ik.push(this.currentSelectedLabel);
        }
      } else {
        for (var it = 0, iq = ik.length; it < iq; it++) {
          var im = ik[it];
          if (im.type === 'line' || !im.iconPos) {
            continue;
          }
          delete im.tempRank;
        }
      }
      ik.sort(function (iy, ix) {
        var iz = iy.tempRank ? iy.tempRank : iy.rank;
        var i = ix.tempRank ? ix.tempRank : ix.rank;
        return (
          i - iz || iy.startZoom - ix.startZoom || ix.pt.lng - iy.pt.lng || ix.pt.lat - iy.pt.lat
        );
      });
      var hJ = 0;
      if (h0 > 0) {
        hJ = 6;
      }
      var hS = hZ.getZoom();
      if (hS >= 8 && hS < 9) {
        hS < 8.5 ? (hJ = 6) : (hJ = 3);
      }
      if (hZ._displayOptions.labelMargin) {
        hJ = hZ._displayOptions.labelMargin;
      }
      var e = 2;
      if (hS < 6 && hS >= 5) {
        e = -1;
      }
      for (var it = 0, iq = ik.length; it < iq; it++) {
        var ic = ik[it];
        var hR = ic._tempBds;
        ic.isDel = false;
        ic._intersectIdx = [];
        for (ir = it + 1; ir < iq; ir++) {
          var hY = ik[ir];
          var iu = hY._tempBds;
          if (
            !(
              hR[2] + hJ + e < iu[0] - hJ ||
              hR[0] - hJ > iu[2] + hJ + e ||
              hR[3] + hJ + e < iu[1] - hJ ||
              hR[1] - hJ > iu[3] + hJ + e
            )
          ) {
            ic._intersectIdx.push(ir);
          }
        }
      }
      for (var it = 0, iq = ik.length; it < iq; it++) {
        var im = ik[it];
        if (im.isDel === false) {
          var ib = im._intersectIdx;
          for (var ir = 0, h5 = ib.length; ir < h5; ir++) {
            ik[ib[ir]].isDel = true;
          }
        }
      }
      return hP;
    },
    calcCollisionBounds: function (hO, hM, i, hN) {
      var hK = hO.pt;
      var hI = this.map;
      var hJ = hI.pointToPixelIn(hK, {zoom: hM, useRound: this._useRound});
      var T = hJ.x + i;
      var hQ = hN - hJ.y;
      var e = hO.bds;
      hO._tempBds = [T + e[0], hQ + e[1], T + e[2], hQ + e[3]];
      var hL = hI.pixelToPointIn(new eb(hO._tempBds[0], hJ.y + e[1]), {zoom: hM});
      var hP = hI.pixelToPointIn(new eb(hO._tempBds[2], hJ.y + e[3]), {zoom: hM});
      hO._mcBds = [hL, hP];
    },
    getZoomStep: function () {
      var T = this.map.getZoom();
      var e = Math.floor(T);
      var i = T - e >= 0.5 ? e + 0.5 : e;
      return i;
    },
    clearCollisionCache: function (e) {
      if (!e) {
        return;
      }
      e.cacheState = null;
      e.unnecessaryCollisionTest = null;
    },
    getCachedLabels: function (e) {
      e = e || [];
      var T = this.getZoomStep();
      var hJ = [];
      var hL = false;
      for (var hI = 0; hI < e.length; hI++) {
        var hK = e[hI];
        if (!hK.cacheState || !hK.cacheState[T]) {
          hL = true;
          break;
        }
        if (hK.hasNewData) {
          hL = true;
          break;
        }
      }
      if (hL) {
        this.calcLabelsCollision(e);
      }
      return e;
    },
    calcLabelsCollision: function (T) {
      var hJ = this.getZoomStep();
      var hK = {};
      var hN;
      var hI;
      T = this.collisionTest(T, undefined, hJ);
      bE.addLabelIntoAreaSpots(T);
      for (var hM = 0; hM < T.length; hM++) {
        hN = T[hM];
        hI = hN.tileInfo;
        var hR = hI.col + ',' + hI.row;
        hK[hR] = 1;
      }
      var e = {};
      for (var hM = 0; hM < T.length; hM++) {
        hN = T[hM];
        if (!hN.cacheState) {
          hN.cacheState = {};
        }
        hI = hN.tileInfo;
        var hQ = hI.col;
        var hO = hI.row;
        hR = hQ + ',' + hO;
        if (hN.cacheState[hJ] === 'stable') {
          e[hR] = 1;
          if (!hN.hasNewData) {
            continue;
          }
        }
        for (var hL = 0; hL < hN.fixedLabel.length; hL++) {
          var hP = hN.fixedLabel[hL];
          if (!hP.cachedIsDel) {
            hP.cachedIsDel = {};
          }
          hP.cachedIsDel[hJ] = hP.isDel;
        }
        for (var hL = 0; hL < hN.indoorLabel.length; hL++) {
          var hP = hN.indoorLabel[hL];
          if (!hP.cachedIsDel) {
            hP.cachedIsDel = {};
          }
          hP.cachedIsDel[hJ] = hP.isDel;
        }
        for (var hL = 0; hL < hN.lineLabel.length; hL++) {
          var hP = hN.lineLabel[hL];
          if (!hP.cachedIsDel) {
            hP.cachedIsDel = {};
          }
          hP.cachedIsDel[hJ] = hP.isDel;
        }
        if (
          hK[hQ - 1 + ',' + (hO - 1)] &&
          hK[hQ - 1 + ',' + hO] &&
          hK[hQ - 1 + ',' + (hO + 1)] &&
          hK[hQ + ',' + (hO - 1)] &&
          hK[hQ + ',' + (hO + 1)] &&
          hK[hQ + 1 + ',' + (hO - 1)] &&
          hK[hQ + 1 + ',' + hO] &&
          hK[hQ + 1 + ',' + (hO + 1)]
        ) {
          hN.cacheState[hJ] = 'stable';
          e[hR] = 1;
        } else {
          if (!hN.cacheState[hJ]) {
            hN.cacheState[hJ] = 'unstable';
          }
        }
      }
      for (var hM = 0; hM < T.length; hM++) {
        var hN = T[hM];
        hI = hN.tileInfo;
        var hR = hI.col + ',' + hI.row;
        var hQ = +hI.col;
        var hO = +hI.row;
        if (
          e[hQ - 1 + ',' + (hO - 1)] &&
          e[hQ - 1 + ',' + hO] &&
          e[hQ - 1 + ',' + (hO + 1)] &&
          e[hQ + ',' + (hO - 1)] &&
          e[hQ + ',' + (hO + 1)] &&
          e[hQ + 1 + ',' + (hO - 1)] &&
          e[hQ + 1 + ',' + hO] &&
          e[hQ + 1 + ',' + (hO + 1)]
        ) {
          if (!hN.unnecessaryCollisionTest) {
            hN.unnecessaryCollisionTest = {};
          }
          hN.unnecessaryCollisionTest[hJ] = 1;
        }
      }
      T.hasNewData = false;
    },
    updateLabels: function (hI) {
      var e = this.map;
      var hO = e.getZoom();
      var hQ = e.getHeading();
      hQ = this.calcLoopHeading(hQ);
      var hP = e.getTilt();
      var hJ = this.getZoomStep();
      for (var hN = 0, hK = hI.length; hN < hK; hN++) {
        var hM = hI[hN];
        var T = hM.tileInfo;
        var hL = T.loopOffsetX || 0;
        this.updateFixedLabel(hM.fixedLabel, hP, hQ, hM, hJ, hO, hL);
        this.updateFixedLabel(hM.indoorLabel, hP, hQ, hM, hJ, hO, 0);
        this.updateLineLabel(hM.lineLabel, hP, hQ, hM, hJ);
      }
    },
    updateFixedLabel: function (hN, hP, i, hR, hJ, e, hI) {
      if (hN.length === 1) {
      }
      for (var hS = 0, hK = hN.length; hS < hK; hS++) {
        var hO = hN[hS];
        if (!hO.cachedIsDel) {
          continue;
        }
        if (!hP && !i && hR.cacheState && hR.cacheState[hJ]) {
          hO.isDel = hO.cachedIsDel[hJ];
          if (typeof hO.isDel === 'undefined') {
            hO.isDel = hO.cachedIsDel[hJ] = true;
          }
        }
        if (hO.startScale > e) {
          hO.isDel = true;
        }
        if (hO.isDel) {
          continue;
        }
        var hU = hO.pt;
        var T = hO.iconPos;
        if (T && T.texcoord) {
          if (!T.rtVertex) {
            T.rtVertex = [];
            var hW = T.vertex;
            var hL = aB(hU.lng);
            var hT = aB(hU.lat);
            T.rtVertex = [
              hL[0],
              hT[0],
              hL[1],
              hT[1],
              0,
              hW[0],
              hW[1],
              0,
              0,
              T.texcoord[0],
              T.texcoord[1],
              hL[0],
              hT[0],
              hL[1],
              hT[1],
              0,
              hW[2],
              hW[3],
              0,
              0,
              T.texcoord[2],
              T.texcoord[3],
              hL[0],
              hT[0],
              hL[1],
              hT[1],
              0,
              hW[4],
              hW[5],
              0,
              0,
              T.texcoord[4],
              T.texcoord[5],
              hL[0],
              hT[0],
              hL[1],
              hT[1],
              0,
              hW[6],
              hW[7],
              0,
              0,
              T.texcoord[6],
              T.texcoord[7],
              hL[0],
              hT[0],
              hL[1],
              hT[1],
              0,
              hW[8],
              hW[9],
              0,
              0,
              T.texcoord[8],
              T.texcoord[9],
              hL[0],
              hT[0],
              hL[1],
              hT[1],
              0,
              hW[10],
              hW[11],
              0,
              0,
              T.texcoord[10],
              T.texcoord[11],
            ];
          }
        }
        var hV = hO.textPos;
        if (hV) {
          if (!hV.rtVertex) {
            hV.rtVertex = [];
            var hW = hV.vertex;
            var hM = hV.rtVertex;
            var hL = aB(hU.lng);
            var hT = aB(hU.lat);
            var hY = aB(hI);
            for (var hQ = 0, hX = hW.length; hQ < hX; hQ += 12) {
              hM.push(
                hL[0],
                hT[0],
                hL[1],
                hT[1],
                0,
                hW[hQ],
                hW[hQ + 1],
                hY[0],
                hY[1],
                hV.texcoord[0],
                hV.texcoord[1],
              );
              hM.push(
                hL[0],
                hT[0],
                hL[1],
                hT[1],
                0,
                hW[hQ + 2],
                hW[hQ + 3],
                hY[0],
                hY[1],
                hV.texcoord[2],
                hV.texcoord[3],
              );
              hM.push(
                hL[0],
                hT[0],
                hL[1],
                hT[1],
                0,
                hW[hQ + 4],
                hW[hQ + 5],
                hY[0],
                hY[1],
                hV.texcoord[4],
                hV.texcoord[5],
              );
              hM.push(
                hL[0],
                hT[0],
                hL[1],
                hT[1],
                0,
                hW[hQ + 6],
                hW[hQ + 7],
                hY[0],
                hY[1],
                hV.texcoord[6],
                hV.texcoord[7],
              );
              hM.push(
                hL[0],
                hT[0],
                hL[1],
                hT[1],
                0,
                hW[hQ + 8],
                hW[hQ + 9],
                hY[0],
                hY[1],
                hV.texcoord[8],
                hV.texcoord[9],
              );
              hM.push(
                hL[0],
                hT[0],
                hL[1],
                hT[1],
                0,
                hW[hQ + 10],
                hW[hQ + 11],
                hY[0],
                hY[1],
                hV.texcoord[10],
                hV.texcoord[11],
              );
            }
          }
        }
      }
    },
    updateLineLabel: function (hN, ii, h7, h2, h3) {
      hN = hN || [];
      var hX = this.map;
      var hQ = hX.getZoomUnits();
      for (var ih = 0, ie = hN.length; ih < ie; ih++) {
        var hM = hN[ih];
        if (!hM.cachedIsDel) {
          continue;
        }
        if (!ii && !h7 && h2.cacheState && h2.cacheState[h3]) {
          hM.isDel = hM.cachedIsDel[h3];
          if (typeof hM.isDel === 'undefined') {
            hM.isDel = hM.cachedIsDel[h3] = true;
          }
        }
        if (hM.isDel) {
          continue;
        }
        if (!hM.styleText || hM.styleText.length === 0) {
          continue;
        }
        var hO = hM.mcInTile;
        var ia = hO.x;
        var h8 = hO.y;
        var h1 = hM.wordsInfo;
        var hZ = hM.labelAngle;
        var hV = false;
        var h9 = 0;
        if (h7 !== 0) {
          var hW = h1[0].angle;
          var id = this.calcLoopHeading(hW - h7);
          var hT = this.calcLoopHeading(hZ - h7);
          if (id > 45 && id < 315) {
            if (id > 45 && id <= 135) {
              h9 = 270;
            } else {
              if (id > 135 && id <= 225) {
                h9 = 180;
              } else {
                if (id > 225 && id < 315) {
                  h9 = 90;
                }
              }
            }
            if (hZ > 225 && hZ <= 315 && h9 <= 180) {
              hV = true;
            } else {
              if (((hZ >= 0 && hZ <= 45) || (hZ >= 315 && hZ < 360)) && h9 >= 180) {
                hV = true;
              }
            }
          }
        }
        for (var ig = 0, hR = h1.length; ig < hR; ig++) {
          var ic = h1[ig];
          var hU = ic.calcInfo;
          var h6 = ic.offset[0];
          var h4 = ic.offset[1];
          if (!ic.size) {
            continue;
          }
          var e = ic.size[0];
          var T = ic.size[1];
          var hS = ic.angle;
          if (!hU) {
            hU = {};
          }
          if (h7 !== hU.mapHeading || hQ !== hU.zoomUnits) {
            hU.mapHeading = h7;
            hU.zoomUnits = hQ;
            if (hV) {
              var hY = h1[hR - 1 - ig];
              h6 = hY.offset[0];
              h4 = hY.offset[1];
              hS = hY.angle;
            }
            var hJ = ia + h6 * hQ;
            var hI = h8 + h4 * hQ;
            hU.rotationCenter = {lng: hJ, lat: hI};
            hU.calcHeading = h9;
            hU.angle = hS;
            hU.offsetX = h6;
            hU.offsetY = h4;
            ic.calcInfo = hU;
          }
          if (!ic.rtVertex) {
            ic.rtVertex = [];
          }
          ic.rtVertex.length = 0;
          var h0 = hU.calcHeading + hU.angle;
          var hK = hU.rotationCenter;
          h6 = hU.offsetX;
          h4 = hU.offsetY;
          var hL = Math.round(h6 - e / 2);
          var ib = Math.round(h6 + e / 2);
          var h5 = Math.round(h4 + T / 2);
          var hP = Math.round(h4 - T / 2);
          ic.rtVertex.push(
            ia,
            h8,
            ic.z,
            hL,
            hP,
            hK.lng,
            hK.lat,
            h0,
            ic.texcoord[0],
            ic.texcoord[1],
            ia,
            h8,
            ic.z,
            ib,
            hP,
            hK.lng,
            hK.lat,
            h0,
            ic.texcoord[2],
            ic.texcoord[3],
            ia,
            h8,
            ic.z,
            ib,
            h5,
            hK.lng,
            hK.lat,
            h0,
            ic.texcoord[4],
            ic.texcoord[5],
            ia,
            h8,
            ic.z,
            hL,
            hP,
            hK.lng,
            hK.lat,
            h0,
            ic.texcoord[6],
            ic.texcoord[7],
            ia,
            h8,
            ic.z,
            ib,
            h5,
            hK.lng,
            hK.lat,
            h0,
            ic.texcoord[8],
            ic.texcoord[9],
            ia,
            h8,
            ic.z,
            hL,
            h5,
            hK.lng,
            hK.lat,
            h0,
            ic.texcoord[10],
            ic.texcoord[11],
          );
        }
      }
    },
    calcLoopHeading: function (e) {
      while (e >= 360) {
        e -= 360;
      }
      while (e < 0) {
        e += 360;
      }
      return e;
    },
    fixDataFormat: function (hQ) {
      var hI = this.fixedLabelData;
      var e = this.lineLabelData;
      var T = this.highlightLabelData;
      var hX = 0;
      var hM = 0;
      var hV = 0;
      var hW;
      if (this.currentSelectedLabel) {
        var hL = this.getLabelByUid(
          this.currentSelectedLabel.guid,
          this.currentSelectedLabel.tilePosStr,
        );
        if (!hL || hL.isDel) {
          hI[hX] = this.currentSelectedLabel.formatedData;
          hX++;
          T[hV] = this.currentSelectedLabel.formatedData;
          hV++;
        }
      }
      for (var hU = 0; hU < hQ.length; hU++) {
        var hO = hQ[hU];
        var hN = hO.fixedLabel;
        var hJ = hO.indoorLabel;
        var hT = hO.lineLabel;
        hW = this.fixFixedLabelDataFormat(hN, hO, hI, hX, T, hV);
        hX = hW[0];
        hV = hW[1];
        hW = this.fixFixedLabelDataFormat(hJ, hO, hI, hX, T, hV, true);
        hX = hW[0];
        hV = hW[1];
        e[hM] = {tileInfo: hO.tileInfo, lineLabels: []};
        for (var hS = 0; hS < hT.length; hS++) {
          if (hT[hS].isDel) {
            continue;
          }
          var hP = hT[hS].wordsInfo;
          if (hP) {
            for (var hR = 0; hR < hP.length; hR++) {
              if (!hP[hR].rtVertex) {
                continue;
              }
              var hK = hP[hR].formatedData;
              if (!hK) {
                hK = {
                  textureSource: hO.textureSources[hT[hS].processedInZoom],
                  textureHeight: hO.textureHeights[hT[hS].processedInZoom],
                  renderData: {vertex: hP[hR].rtVertex, textureCoord: hP[hR].texcoord},
                };
                hP[hR].formatedData = hK;
              }
              e[hM].lineLabels.push(hK);
            }
          }
        }
        hM++;
      }
      hI.length = hX;
      e.length = hM;
      T.length = hV;
      return [e, hI, T];
    },
    fixFixedLabelDataFormat: function (hL, hO, hP, hM, hJ, e, hN) {
      for (var i = 0; i < hL.length; i++) {
        if (hL[i].isDel) {
          continue;
        }
        var hK = hL[i].textPos;
        var hI = hL[i].iconPos;
        var T = null;
        if (hK && hK.rtVertex) {
          if (!hL[i].formatedData) {
            T = {
              guid: hL[i].guid,
              guidExt: hL[i].guidExt,
              tilePosStr: hL[i].tilePosStr,
              zoom: hL[i].zoom,
              tempRank: hL[i].tempRank,
              textureSource: hO.textureSources[hL[i].processedInZoom],
              textureHeight: hO.textureHeights[hL[i].processedInZoom],
              renderData: {vertex: hK.rtVertex, textureCoord: hK.texcoord},
            };
            if (hN && hL[i].onDefaultFloor === false) {
              T.textureSource = hO.indoorTextureSources[hL[i].processedInZoom];
              T.textureHeight = hO.indoorTextureHeights[hL[i].processedInZoom];
            }
            hL[i].formatedData = T;
          } else {
            T = hL[i].formatedData;
            T.tempRank = hL[i].tempRank;
          }
          if (
            this.currentSelectedLabel &&
            T.guid === this.currentSelectedLabel.guid &&
            T.tilePosStr === this.currentSelectedLabel.tilePosStr
          ) {
            hJ[e] = T;
            e++;
          }
        }
        if (hI && hI.rtVertex) {
          if (T) {
            if (!T.iconRenderData) {
              T.iconRenderData = {vertex: hI.rtVertex, textureCoord: hI.texcoord};
            }
          } else {
            T = {
              guid: hL[i].guid,
              guidExt: hL[i].guidExt,
              zoom: hL[i].zoom,
              tempRank: hL[i].tempRank,
              iconRenderData: {vertex: hI.rtVertex, textureCoord: hI.texcoord},
            };
            hL[i].formatedData = T;
          }
        }
        hP[hM] = T;
        hM++;
      }
      return [hM, e];
    },
    _refreshSpotData: function () {
      this._spotData.length = 0;
      var hN = this.map;
      var hL = Math.floor(hN.getZoom());
      var T = this.map._featureMgr.getLabelData();
      if (T) {
        for (var hJ = 0, hI = T.length; hJ < hI; hJ++) {
          this._addFixedSpotData(T[hJ].fixedLabel, hL);
          this._addFixedSpotData(T[hJ].indoorLabel, hL);
        }
      }
      var hO = this.currentSelectedLabel;
      if (hO && !this.getTileByLabelUid(hO.guid, hO.tilePosStr)) {
        var hK = this._getSpotDataFromLabel(this.currentSelectedLabel);
        if (hK) {
          this._spotData.push(hK);
        }
      }
      var hM = new a6('onspotsdataready');
      hM.spots = this._spotData;
      hN._spotDataOnCanvas = this._spotData;
      hN.dispatchEvent(hM);
    },
    _addFixedSpotData: function (hJ, hI) {
      for (var e = 0; e < hJ.length; e++) {
        var T = hJ[e];
        if (!this.layer.isClickableLabel(T) || (T.guidExt === 1 && T.startScale > hI)) {
          continue;
        }
        var i = hJ[e].spot || this._getSpotDataFromLabel(hJ[e]);
        if (i) {
          this._spotData.push(i);
        }
      }
    },
    _getSpotDataFromLabel: function (T) {
      var hK = this.map;
      if (!T.bds) {
        return null;
      }
      var e = T.bds.slice(0);
      var hI = null;
      if (T.iconPos) {
        hI = new hj(T.pt.lng, T.pt.lat);
      }
      var i = T.name ? T.name.replace('\\\\', '<br>') : '';
      if (T.iconPos && T.iconPos.iconType.indexOf('ditie') > -1 && hK.getZoom() > 14) {
        i = '';
      }
      var hJ = {
        n: i,
        pt: new hj(T.pt.lng, T.pt.lat),
        userdata: {
          iconPoint: hI,
          uid: T.guid,
          name: i,
          mapPoi: true,
          type: T.iconPos ? T.iconPos.iconType : '',
          rank: T.rank,
          zoom: T.zoom,
          tilePosStr: T.tilePosStr,
        },
        bd: e,
        tag: 'MAP_SPOT_INFO',
      };
      T.spot = hJ;
      return hJ;
    },
    drawLabelsOnCanvas: function (i, e) {
      if (this._labelTextCanvas) {
        this._labelTextCanvas.drawLabelsOnCanvas(i, e);
      }
    },
  });
  function fL(e) {
    this._map = e;
    this.virtualTile = {
      custom: true,
      label: {fixedLabel: [], indoorLabel: [], lineLabel: [], textureHeights: [], status: 'ready'},
      tileInfo: {col: 0, row: 0, zoom: 0, useZoom: 0, loopOffsetX: 0},
      status: 'ready',
    };
    this.virtualTile.label.tileInfo = this.virtualTile.tileInfo;
    this.init();
  }
  fL.prototype.init = function () {
    var T = this._map;
    var i = this;
    function e() {
      i.updateLabels();
    }
    T.addEventListener('add_tile_labels', e);
    T.addEventListener('onremove_tile_labels', e);
    T.addEventListener('onclear_labels', e);
  };
  fL.prototype.updateLabels = function () {
    var i = this._map.tileMgr.getLabelTextCanvas();
    var T = this._map;
    var e = this;
    i.drawCustomLabelsOnCanvas(T._customTileLabels, function (hJ) {
      var hI = e.virtualTile;
      if (hJ) {
        hI.label.textureHeights[0] = [hJ.height];
      }
      hI.label.fixedLabel = T._customTileLabels;
      var hK = new a6('oncustom_labels_ready');
      hK.virtualTile = hI;
      hK.labelCanvas = hJ;
      hK.imgKey = bj.getGUID('custom_labels_');
      T.dispatchEvent(hK);
    });
  };
  bj.register(function (e) {
    e._customLabelMgr = new fL(e);
  });
  function eE(i) {
    var hI = null;
    try {
      if (dq.inMapHost) {
        hI = new Worker(i);
        hI.onerror = function (e) {
          e.preventDefault();
          hI = t(i);
        };
      } else {
        hI = t(i);
      }
    } catch (T) {
      hI = t(i);
    }
    return hI;
  }
  function t(hK) {
    var hN = null;
    try {
      var T;
      try {
        T = new Blob(['importScripts("' + hK + '");'], {type: 'application/javascript'});
      } catch (hL) {
        var hJ = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
        hJ.append('importScripts("' + hK + '");');
        T = hJ.getBlob('application/javascript');
      }
      var hI = window.URL || window.webkitURL;
      var i = hI.createObjectURL(T);
      hN = new Worker(i);
    } catch (hM) {}
    return hN;
  }
  function f0(e) {
    this.init(e);
  }
  var ba = {
    init: function (T) {
      var i = this;
      this.map = T;
      this.arrPendingData = [];
      var e = navigator.hardwareConcurrency || 4;
      if ((fW() || C.Browser.ie) && e > 2) {
        e = 2;
      }
      this.arrWorker = [];
      this.ratio = a1();
      this.wordSpaceRatio = this.ratio;
      if (this.ratio > 1) {
        this.textSizeRatio = 2;
      } else {
        this.textSizeRatio = 1;
      }
      cU.canUseWebAssembly(function (hI) {
        var hL;
        if (hI) {
          hL = 'https://api.map.baidu.com/res/webgl/10/worker_wasm_kcp3uy.js';
        } else {
          hL = 'https://api.map.baidu.com/res/webgl/10/worker_asm_maed2p.js';
        }
        for (var hK = 0; hK < e; hK++) {
          var hN = eE(hL);
          hN.onmessage = function hJ(hP) {
            if (hP.data) {
              this._cbk && this._cbk(hP.data, this._parsingTileKey);
            } else {
              this._cbk && this._cbk(null, this._parsingTileKey);
            }
            this._isBusy = false;
            this._cbk = null;
            this._parsingTileInfo = null;
            this._parsingTileKey = null;
            if (i.arrPendingData.length > 0) {
              var hR = i.arrPendingData.shift();
              var hO = hR.cbk;
              i.loadTileData(hR.url, hR.tileInfo, hR.tileKey, hO);
            }
            var hQ = new a6('onrefresh');
            hQ.source = 'workermgr';
            T.fire(hQ);
          };
          i.arrWorker.push(hN);
        }
        if (i.arrPendingData.length > 0) {
          for (var hK = 0; hK < Math.min(i.arrPendingData.length, e); hK++) {
            var hM = i.arrPendingData.shift();
            i.loadTileData(hM.url, hM.tileInfo, hM.tileKey, hM.cbk);
          }
        }
      });
      T.on('onstyle_loaded', function () {
        for (var hJ = 0, hI = i.arrWorker.length; hJ < hI; hJ++) {
          i.arrWorker[hJ].isSendFS = false;
        }
        if (typeof this.config.style !== 'string') {
          f0.stringifiedCustomStyleInfo = null;
          f0.stringifiedCustomStyleInfoZoom = [];
        }
      });
      T.on('onstylezoomupdate', function () {
        for (var hJ = 0, hI = i.arrWorker.length; hJ < hI; hJ++) {
          i.arrWorker[hJ].isSendFS = false;
        }
        if (typeof this.config.style !== 'string') {
          f0.stringifiedCustomStyleInfo = null;
          f0.stringifiedCustomStyleInfoZoom = [];
        }
      });
      T.on('destroy', function () {
        for (var hI = 0; hI < i.arrWorker.length; hI++) {
          if (i.arrWorker[hI]) {
            i.arrWorker[hI].terminate();
          }
        }
        i.arrWorker.length = 0;
      });
    },
    getIdleWorker: function () {
      for (var T = 0, e = this.arrWorker.length; T < e; T++) {
        var hI = this.arrWorker[T];
        if (!hI._isBusy) {
          hI._isBusy = true;
          return hI;
        }
      }
      return null;
    },
    releasePendingData: function (T) {
      var hI = [];
      var hL = this.arrPendingData;
      for (var hK = hL.length - 1; hK >= 0; hK--) {
        var hM = hL[hK];
        var e = hM.tileInfo;
        if (T.tileTypeName !== e.tileTypeName) {
          continue;
        }
        var hJ = 'id_' + e.col + '_' + e.row + '_' + e.zoom;
        if (!T[hJ]) {
          hL.splice(hK, 1);
          hI.push(e);
        }
      }
      return hI;
    },
    loadTileData: function (e, T, hO, hN) {
      var hI = this.getIdleWorker();
      if (hI) {
        hI._cbk = hN;
        hI._parsingTileInfo = T;
        hI._parsingTileKey = hO;
        var i = {action: 'loadTileData', url: e, tileInfo: T, tileKey: hO};
        var hM = this.map.getMapStyleId();
        var hL = !!(hM.indexOf('custom') === 0);
        var hK = hM;
        if (hL) {
          hK = 'Custom';
        }
        if (!hI.isSendFS) {
          if (!f0['stringifiedFeatureStyle' + hM] && bj['FeatureStyle' + hM]) {
            f0['stringifiedFeatureStyle' + hM] = JSON.stringify(bj['FeatureStyle' + hM]);
          }
          if (!f0['stringifiedIconSetInfo' + hK]) {
            f0['stringifiedIconSetInfo' + hK] = JSON.stringify(bj['iconSetInfo' + hK]);
          }
          if (!f0.stringifiedIndoorStyle) {
            f0.stringifiedIndoorStyle = JSON.stringify(bj.indoorStyle);
          }
          if (hL && bj.customStyleInfo) {
            if (!f0.stringifiedCustomStyleInfo) {
              f0.stringifiedCustomStyleInfo = JSON.stringify(bj.customStyleInfo);
            }
          }
          if (f0['stringifiedFeatureStyle' + hM]) {
            i.featureStyle = f0['stringifiedFeatureStyle' + hM];
          }
          i.iconSetInfo = f0['stringifiedIconSetInfo' + hK];
          i.indoorStyle = f0.stringifiedIndoorStyle;
          if (hL && f0.stringifiedCustomStyleInfo) {
            i.customMapStyle = f0.stringifiedCustomStyleInfo;
          }
          i.iconInfo = {wordSpaceRatio: this.wordSpaceRatio, textSizeRatio: this.textSizeRatio};
          i.mapStyleId = hM;
          hI.isSendFS = true;
        }
        hI.postMessage(i);
      } else {
        var hJ = {url: e, tileInfo: T, tileKey: hO, cbk: hN};
        this.arrPendingData.push(hJ);
      }
    },
  };
  C.extend(f0.prototype, ba);
  function dN(i) {
    this.tileLayers = [];
    this.map = i;
    var e = (this.config = b1[this.map.mapType]);
    this.errorUrl = e.errorUrl;
    this.tileSize = e.tileSize;
    this.baseUnits = e.baseUnits;
    this.baseZoomLevel = e.zoomLevelBase;
    this.tileURLs = e.tileUrls;
    this.tilesInfoCache = {};
    this.loadDelay = 10;
    this._labelTextCanvas = null;
  }
  bj.register(function (i) {
    if (i._renderType !== 'webgl') {
      return;
    }
    var e = (i.tileMgr = new dN(i));
    i.addEventListener('addtilelayer', function (hI) {
      e.addWebGLLayer(hI.target);
    });
    i.addEventListener('removetilelayer', function (hI) {
      e.removeWebGLLayer(hI.target);
    });
    i.on('update', function T(hI) {
      if (!bj['FeatureStyle' + this.config.style] && !bj.customStyleLoaded) {
        return;
      }
      e.loadLayersData({zoomChanged: hI.changedStatus.onzoom_changed ? true : false});
    });
    i.on('style_changed', function () {
      e.loadLayersData();
    });
  });
  C.extend(dN.prototype, {
    addWebGLLayer: function (hI) {
      this.tileLayers.push(hI);
      hI.initDrawData();
      if (this.tileLayers.length > 1) {
        for (var T = 1; T < this.tileLayers.length; T++) {
          if (this.tileLayers[T].isFlat) {
            this.map.setDisplayOptions({isFlat: true});
            break;
          }
        }
      }
      var e = this.map.config.style;
      if (bj['FeatureStyle' + e]) {
        this.loadLayersData();
      } else {
        var hJ = this;
        this.map.loadMapStyleFiles(function () {
          hJ.loadLayersData();
        });
      }
    },
    removeWebGLLayer: function (hK) {
      var hL = false;
      for (var hJ = 0, hI = this.tileLayers.length; hJ < hI; hJ++) {
        if (hK === this.tileLayers[hJ]) {
          hL = true;
          this.tileLayers.splice(hJ, 1);
          break;
        }
      }
      if (hL === false) {
        return;
      }
      hK.destroyDrawData();
      if (bj['FeatureStyle' + this.map.config.style]) {
        this.loadLayersData();
      }
      if (this.tileLayers.length === 1) {
        this.map.setDisplayOptions({isFlat: false});
      } else {
        var e = false;
        for (var hJ = 1; hJ < this.tileLayers.length; hJ++) {
          if (this.tileLayers[hJ].isFlat) {
            e = true;
            break;
          }
        }
        this.map.setDisplayOptions({isFlat: e});
      }
      var T = new a6('onrefresh');
      T.source = 'removewebgllayer';
      this.map.fire(T);
    },
    getLabelTextCanvas: function () {
      if (!this._labelTextCanvas) {
        this._labelTextCanvas = new v(this.map);
      }
      return this._labelTextCanvas;
    },
    loadLayersData: function (i) {
      if (this.map.suspendLoad) {
        return;
      }
      var hI = this;
      i = i || {};
      var T = !!i.zoomChanged;
      var e = T === true || this.map.getTilt() > 50;
      if (!e) {
        if (!this.syncLoadTimer) {
          this.syncLoadTimer = setTimeout(function () {
            hI._loadLayersFromCache(T);
            hI.syncLoadTimer = null;
          }, 40);
        }
      } else {
        this._loadLayersFromCache(T);
      }
      if (!hI.map.viewAnimationTime) {
        this.timer && window.clearTimeout(this.timer);
      }
      this.timer = window.setTimeout(function () {
        if (hI.map.viewAnimationTime) {
          if (new Date().getTime() - hI.map.viewAnimationTime < 1000) {
            return;
          }
          hI.map.viewAnimationTime = new Date().getTime();
        }
        var hK = hI.tileLayers.length;
        hI.tilesInfoCache = {};
        for (var hL = 0; hL < hK; hL++) {
          var hN = hI.tileLayers[hL];
          var hM = hN.tileType;
          var hJ = null;
          if (hI.tilesInfoCache[hM.getName()]) {
            hJ = hI.tilesInfoCache[hM.getName()];
          } else {
            hJ = hI.calcTilesInfo(hM);
            hI.tilesInfoCache[hM.getName()] = hJ;
          }
          hN.loadLayerData(hJ, false, T);
        }
        hI.timer = null;
      }, this.loadDelay);
      if ((fW() || C.Browser.ie) && T) {
        this.loadDelay = 200;
      } else {
        this.loadDelay = 80;
      }
    },
    _loadLayersFromCache: function (hJ) {
      this.map._featureMgr.clearData();
      var hM = this.tileLayers;
      hM.sort(function (hN, i) {
        return hN.zIndex - i.zIndex > 0;
      });
      var T = hM.length;
      this.tilesInfoCache = {};
      for (var hI = 0; hI < T; hI++) {
        var hL = hM[hI];
        var hK = hL.tileType;
        var e = null;
        if (this.tilesInfoCache[hK.getName()]) {
          e = this.tilesInfoCache[hK.getName()];
        } else {
          e = this.calcTilesInfo(hK);
          this.tilesInfoCache[hK.getName()] = e;
        }
        hL.loadLayerData(e, true, hJ);
      }
    },
    calcTilesInfo: function (hU) {
      var h6 = this.map;
      var ic = h6.getMapType();
      var h7 = b1[ic];
      var h1 = h6.getZoom();
      var e = Math.floor(h1);
      var hL = hU.getDataZoom(h1);
      var ip = hU.getName();
      hL = fx(hL, h7.minDataZoom, h7.maxDataZoom);
      var ih = e;
      if (hU._name === 'web') {
        ih = hL;
      } else {
        if (ih < 3) {
          ih = 3;
        }
      }
      var h5 = hU.getTileSize(h1);
      var hK = hU.getBaseTileSize(h1);
      var hY = hU.getMercatorSize(h1, hL);
      var hX;
      var ie;
      var h4;
      var ij;
      var h8 = h6.getCenterIn();
      if (ic !== BMAP_SATELLITE_MAP) {
        h8 = dX.calcLoopCenterPoint(h8);
      }
      var h2 = Math.floor(h8.lng / hY);
      var hN = Math.floor(h8.lat / hY);
      var h3 = h6.getBoundsIn();
      var ia = 0;
      var hI = 0;
      h3 = dX.calcLoopMapBounds(h3, h6.getCenter());
      if (h3.ne.lng > dX._mc180X) {
        var hS = dX.getSpaceDistanceInPixel(hL);
        ia = Math.ceil(hS / hK);
      }
      if (h3.sw.lng < dX._mcM180X) {
        var hS = dX.getSpaceDistanceInPixel(hL);
        hI = Math.ceil(hS / hK);
      }
      if (h3.ne.lat > 19505879.362428114 || h3.sw.lat < -15949096.637571886) {
        h3.ne.lat = 19505879.362428114;
        h3.sw.lat = -15949096.637571886;
      }
      var hP = [Math.floor(h3.sw.lng / hY) - hI, Math.floor(h3.sw.lat / hY)];
      var im = [Math.floor(h3.ne.lng / hY) + ia, Math.floor(h3.ne.lat / hY)];
      hX = hP[0];
      ie = im[0] + 1;
      h4 = hP[1];
      ij = im[1] + 1;
      var hT = [];
      for (var hQ = hX; hQ < ie; hQ++) {
        if (dX.isTileBlank(hQ, hL, hK) === true) {
          continue;
        }
        for (var hV = h4; hV < ij; hV++) {
          var hR = {
            col: hQ,
            row: hV,
            zoom: hL,
            useZoom: ih,
            tileTypeName: ip,
            loopOffsetX: 0,
            tileSize: h5,
            baseTileSize: hK,
            mercatorSize: hY,
          };
          hT.push(hR);
          var ib = 'id_' + hQ + '_' + hV + '_' + hL;
          hT[ib] = true;
        }
      }
      if (ic !== BMAP_SATELLITE_MAP) {
        hT = dX.calcLoopTiles(hT, hL, hK, hY);
      }
      if (hL === 3) {
        for (var il = 0, ik = hT.length; il < ik; il++) {
          var hQ = hT[il].col;
          var hV = hT[il].row;
          var ig = dX.calcLoopParam(hQ, hL);
          var hM = ig.T;
          var hZ = hQ >= 0 ? hQ - hM : hQ + hM;
          var h0 = 'id_' + hZ + '_' + hV + '_' + hL;
          if (!hT[h0]) {
            var hR = {
              col: hZ,
              row: hV,
              zoom: hL,
              useZoom: ih,
              loopOffsetX: 0,
              tileSize: h5,
              baseTileSize: hK,
              mercatorSize: hY,
            };
            hT.push(hR);
            hT[h0] = true;
          }
        }
      }
      if (this.map._tilt > 0) {
        for (var il = 0; il < hT.length; il++) {
          var hO = hT[il];
          var ii = hO.col;
          var io = hO.row;
          var h9 = [];
          h9.minX = ii * hY;
          h9.maxX = (ii + 1) * hY;
          h9.minY = io * hY;
          h9.maxY = (io + 1) * hY;
          var hJ = new hj(0, 0);
          hJ.lng = (h9.minX + h9.maxX) / 2;
          hJ.lat = (h9.minY + h9.maxY) / 2;
          var hW = h6.pointToPixelIn(hJ);
          if (hW.x > 0 && hW.x < this.map.width && hW.y > 0 && hW.y < this.map.height) {
            continue;
          }
          if (h9.minX < h8.lng && h9.maxX > h8.lng && h9.minY < h8.lat && h9.maxY > h8.lat) {
            continue;
          }
          if (!this.ifTileInMapBounds(h9, h3, ii, io)) {
            hT.splice(il, 1);
            il--;
          }
        }
      }
      hT.sort(
        (function (i) {
          return function (T, id) {
            return (
              0.4 * Math.abs(T.col - i[0]) +
              0.6 * Math.abs(T.row - i[1]) -
              (0.4 * Math.abs(id.col - i[0]) + 0.6 * Math.abs(id.row - i[1]))
            );
          };
        })([h2, hN]),
      );
      hT.zoom = hL;
      hT.tileTypeName = ip;
      return hT;
    },
    getCurrentViewTilesInfo: function (i) {
      var e = this.tilesInfoCache[i.getName()];
      if (!e) {
        return this.calcTilesInfo(i);
      }
      return e;
    },
    ifTileInMapBounds: function (e, hK, T, hJ) {
      var i = hK.normalizedBottomLeft;
      var hV = hK.normalizedTopRight;
      var hN = hK.normalizedTopLeft;
      var hL = hK.normalizedBottomRight;
      var hI = false;
      var hU = new hj(e.minX, e.minY);
      var hR = new hj(e.maxX, e.maxY);
      var hM = new hj(hR.lng, hU.lat);
      var hS = new hj(hU.lng, hR.lat);
      var hP = [hS, hR, hM, hU];
      for (var hT = 0, hO = hP.length; hT < hO; hT++) {
        var hQ = hT + 1;
        if (hQ === hO) {
          hQ = 0;
        }
        var hW = hT;
        var hX = go(hP[hQ], hP[hW], hN, i);
        if (hX) {
          hI = true;
          break;
        }
        hX = go(hP[hQ], hP[hW], hL, hV);
        if (hX) {
          hI = true;
          break;
        }
        hX = go(hP[hQ], hP[hW], hV, hN);
        if (hX) {
          hI = true;
          break;
        }
        hX = go(hP[hQ], hP[hW], i, hL);
        if (hX) {
          hI = true;
          break;
        }
      }
      return hI;
    },
    getTileLayer: function (hJ) {
      for (var hI = 0, e = this.tileLayers.length; hI < e; hI++) {
        var T = this.tileLayers[hI];
        if (T.mapType === hJ) {
          return T;
        }
      }
      return null;
    },
  });
  function aN(e) {
    this._map = e;
    this._spotsId = null;
    this._init();
  }
  aN.prototype._init = function () {
    var e = this._map;
    e.addEventListener('onspotsdataready', function (T) {
      var i = T.spots;
      if (this._spotsId) {
        e.removeSpots(this._spotsId);
      }
      this._spotsId = e.addSpots(i);
    });
  };
  bj.register(function (e) {
    if (!e.config.enableIconClick) {
      return;
    }
    e._mapIcon = new aN(e);
  });
  function aQ(e) {
    this._indoorData = {};
    this._map = e;
    this.currentUid = null;
    this.currentFloor = null;
    this._indoorControl = null;
    this.enterMethod = null;
    this.showMask = false;
    this._isMobile = fW();
    this._autoEnterZoom = 19;
    if (this._isMobile) {
      this._autoEnterZoom = 17;
    }
    this._init(e);
    window._indoorMgr = this;
  }
  aQ.prototype._init = function (i) {
    var e = this;
    i.on('indoor_status_changed', function (hL) {
      var T = hL.uid;
      var hJ = hL.floor;
      if (T === null) {
        T = e.currentUid;
        if (e._indoorData[T]) {
          hJ = e._indoorData[T].defaultFloor;
        }
        if (e._indoorControl) {
          e._indoorControl.hide();
        }
        e.currentUid = null;
        e.currentFloor = null;
        e.enterMethod = null;
      } else {
        if (e._indoorData[T]) {
          var hK = e._indoorData[T];
          hJ = typeof hJ === 'number' ? hJ : hK.defaultFloor;
          if (!e._indoorControl) {
            if (i.config.showControls && i._displayOptions.indoor) {
              e._indoorControl = new gs(i, hK);
            }
          } else {
            e._indoorControl.setInfo(hK);
            e._indoorControl.show();
          }
          e.currentUid = T;
          e.currentFloor = hJ;
        }
      }
      if (!e._indoorData || !e._indoorData[T] || e._indoorData[T].currentFloor === hJ) {
        this.fire(new a6('onrefresh'));
        return;
      }
      var hI = new a6('onindoor_data_refresh');
      hI.uid = T;
      hI.floor = hJ;
      hI.tileKey = e._indoorData[T].tileKey;
      e._indoorData[T].currentFloor = hJ;
      e.currentFloor = hJ;
      this.fire(hI);
    });
    i.on('spotclick', function (hI) {
      var T = null;
      if (hI.curAreaSpot && this.areaSpots[hI.curAreaSpot]) {
        T = this.areaSpots[hI.curAreaSpot].userData.uid;
      }
      if (T === e.currentUid) {
        if (hI.curAreaSpot) {
          e.enterMethod = 'byClick';
        }
        return;
      }
      if (T === null) {
        if (e.currentUid && e.enterMethod === 'byClick') {
          i.showIndoor(null);
          e.enterMethod = null;
        }
      } else {
        e.enterMethod = 'byClick';
        if (e.currentUid) {
          i.showIndoor(e.currentUid, e._indoorData[e.currentUid].defaultFloor);
        }
        i.showIndoor(T, e._indoorData[T].defaultFloor);
      }
    });
    i.on('moveend', function () {
      if (this.getZoom() >= e._autoEnterZoom) {
        e._checkIndoorByMove();
      }
    });
    i.on('zoomend', function () {
      if (this.getZoom() >= e._autoEnterZoom) {
        e._checkIndoorByMove();
      } else {
        if (e.enterMethod !== 'byClick' && e.currentUid !== null) {
          this.showIndoor(null);
        }
      }
    });
  };
  aQ.prototype._checkIndoorByMove = function () {
    var T = this._map;
    var hO = T.getSize();
    var hT = {x: hO.width / 2, y: hO.height / 2};
    var hS = Math.max(hO.width, hO.height);
    var hU = [];
    for (var hP in this._indoorData) {
      var e = this._indoorData[hP].center;
      var hI = T.pointToPixelIn(new bj.Point(e[0], e[1]));
      var hL = gN(hT, hI);
      hU.push({uid: hP, distance: hL});
    }
    if (hU.length === 0) {
      return;
    }
    hU.sort(function (hV, i) {
      return hV.distance - i.distance;
    });
    var hK = hU[0];
    var hQ = T.getCenterIn();
    var hJ = false;
    for (var hN = 0; hN < this._indoorData[hK.uid].contour.length; hN++) {
      if (da([hQ.lng, hQ.lat], this._indoorData[hK.uid].contour[hN])) {
        hJ = true;
        break;
      }
    }
    if (hJ === false && hK.uid === 'e96b44200baa3b4082288acc') {
      var hM = this._indoorData[hK.uid].boundsMin;
      var hR = this._indoorData[hK.uid].boundsMax;
      if (hQ.lng > hM[0] && hQ.lat > hM[1] && hQ.lng < hR[0] && hQ.lat < hR[1]) {
        hJ = true;
      }
    }
    if (hJ) {
      if (this.enterMethod !== 'byClick') {
        if (this.currentUid !== null && this.currentUid !== hK.uid) {
          this._map.showIndoor(this.currentUid, this._indoorData[this.currentUid].defaultFloor);
        }
        if (this.currentUid !== hK.uid) {
          this._map.showIndoor(hK.uid, this._indoorData[hK.uid].defaultFloor);
        }
        this.enterMethod = 'byMove';
      }
    } else {
      if (this.enterMethod !== 'byClick') {
        this._map.showIndoor(null);
      }
    }
  };
  aQ.prototype.setData = function (hI) {
    if (hI === null) {
      return;
    }
    for (var T in hI) {
      if (T === 'tileInfo') {
        continue;
      }
      var hJ = hI[T].tileKey;
      if (this._indoorData[T]) {
        if (!this._indoorData[T][hJ]) {
          this._indoorData[T].tileKeys.push(hJ);
          this._indoorData[T][hJ] = true;
        }
      } else {
        this._indoorData[T] = hI[T];
        this._indoorData[T].tileKeys = [hI[T].tileKey];
        this._indoorData[T][hJ] = true;
        for (var e = 0; e < this._indoorData[T].contour.length; e++) {
          this._map.addAreaSpot(this._indoorData[T].contour[e], {id: T + e, userData: {uid: T}});
        }
      }
    }
    if (this._map.getZoom() >= this._autoEnterZoom) {
      this._checkIndoorByMove();
    }
  };
  aQ.prototype.removeData = function (T, hJ) {
    if (!this._indoorData[T]) {
      return;
    }
    var hI = this._indoorData[T];
    for (var e = 0; e < hI.tileKeys.length; e++) {
      if (hI.tileKeys[e] === hJ) {
        hI.tileKeys.splice(e, 1);
        break;
      }
    }
    delete hI[hJ];
    if (hI.tileKeys.length === 0) {
      delete this._indoorData[T];
    }
  };
  aQ.prototype.getIndoorData = function (e) {
    return this._indoorData[e] || null;
  };
  aQ.prototype.getData = function () {
    return this._indoorData;
  };
  bj.register(function (e) {
    e._indoorMgr = new aQ(e);
  });
  var ed = (function () {
    var hI = {};
    var hR = {};
    var hN = {};
    function hP(hT) {
      if (Object.prototype.toString.call(hT) === '[object Object]') {
        for (var hS in hT) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
    function hO(hZ, h0, h3, hW, h2) {
      var hS = hS || null;
      hW = hW || hS;
      var hU;
      if (hW) {
        hU = hQ(hZ, h0, h3, hW);
      } else {
        hU = T(hZ, h0, h3, h2);
      }
      var hY = hU.drawId;
      var hT = hU.style;
      var h1 = hU.styleUpdate;
      var h4 = [];
      if (!hY) {
        return h4;
      }
      for (var hV = 0; hV < hY.length; hV++) {
        var hX = h1[hY[hV]] || hT[hY[hV]];
        if (hX) {
          switch (h0) {
            case 'polygon':
              hX = hJ(hX, hZ);
              break;
            case 'line':
              hX = hM(hX, hZ);
              break;
            case 'pointText':
              hX = hK(hX, hZ);
              break;
            case 'point':
              hX = e(hX, hZ);
              break;
            case 'polygon3d':
              hX = hL(hX, hZ);
              break;
          }
          if (hX) {
            hX.did = hY[hV];
            h4[h4.length] = hX;
          }
        }
      }
      return h4;
    }
    function hQ(hT, hV, hW, hS) {
      var hU = hS[2];
      switch (hV) {
        case 'point':
          hU = hU[0];
          break;
        case 'pointText':
          hU = hU[1];
          break;
        case 'line':
          hU = hU[3];
          break;
        case 'polygon':
          hU = hU[4];
          break;
        case 'polygon3d':
          hU = hU[5];
          break;
      }
      var hY = hW - 1;
      if (hV === 'line' && hW === 12) {
        hY = hW;
      }
      var hZ = hS[1][hY][0];
      var hX = hZ[hT];
      if (!hX) {
        if (hV === 'point' || hV === 'pointText') {
          hZ = hS[1][hW][0];
          hX = hZ[hT];
        }
      }
      return {drawId: hX, style: hU, styleUpdate: []};
    }
    function T(hW, hX, h0, hZ) {
      if (!hZ) {
        return {drawId: null, style: [], styleUpdate: []};
      }
      var hY;
      var hU = hZ.baseFs;
      hY = hZ.StyleBody || [];
      hY = hZ.zoomStyleBody[h0] || [];
      var hT = hU[2];
      switch (hX) {
        case 'point':
          hT = hT[0];
          hY = hY[0] || {};
          break;
        case 'pointText':
          hT = hT[1];
          hY = hY[1] || {};
          break;
        case 'line':
          hT = hT[3];
          hY = hY[3] || {};
          break;
        case 'polygon':
          hT = hT[4];
          hY = hY[4] || {};
          break;
        case 'polygon3d':
          hT = hT[5];
          hY = hY[5] || {};
          break;
      }
      var hS = hU[1][h0 - 1][0];
      var hV = hS[hW];
      return {drawId: hV, style: hT, styleUpdate: hY};
    }
    function hK(hT, hS) {
      if (!hT || hT.length === 0) {
        return null;
      }
      return {
        sid: hS,
        fontRgba: i(hT[0]),
        haloRgba: i(hT[1]),
        backRgba: i(hT[2]),
        fontSize: hT[3],
        haloSize: hT[4],
        fontWeight: hT[5],
        fontStyle: hT[6],
        density: hT[7],
      };
    }
    function e(hT, hS) {
      return {
        sid: hS,
        rank: hT[0],
        ucflag: hT[1],
        icon: hT[2],
        iconType: hT[3],
        nineGG: hT[4],
        density: hT[5],
        zoom: hT[6],
      };
    }
    function hM(hT, hS) {
      return {
        sid: hS,
        borderRgba: i(hT[0]),
        fillRgba: i(hT[1]),
        borderWidth: hT[2],
        fillWidth: hT[3],
        borderCap: hT[4],
        fillCap: hT[5],
        haveBorderLine: hT[6],
        haveBorderTexture: hT[7],
        haveFillTexture: hT[8],
        isUseBorderRgba: hT[9],
        isUseFillRgba: hT[10],
        borderTexture: hT[11],
        fillTexture: hT[12],
        borderTextureType: hT[13],
        fillTextureType: hT[14],
        isRealWidth: hT[15],
        haveArrow: hT[16],
        needRound: hT[17],
        realBorderWidth: hT[18],
      };
    }
    function hJ(hT, hS) {
      return {
        sid: hS,
        fillRgba: i(hT[0]),
        borderRgba: i(hT[1]),
        borderWidth: hT[2],
        borderTexture: hT[3],
        borderTextureType: hT[4],
        waterStyle: hT[5],
        haloStyle: hT[6],
        textureStyle: hT[7],
        thickRgba: i(hT[8]),
      };
    }
    function hL(hT, hS) {
      return {
        sid: hS,
        filter: hT[0],
        ratio: hT[1],
        haveBorder: hT[2],
        borderWidth: hT[3],
        borderRgba: i(hT[4]),
        fillTop: i(hT[5]),
        fillSide: i(hT[6]),
        polyTexture: hT[7],
      };
    }
    function i(hX) {
      var hW = hX;
      if (hN[hW]) {
        return hN[hW];
      }
      hX = hX >>> 0;
      var hV = hX & 255;
      var hU = (hX >> 8) & 255;
      var hS = (hX >> 16) & 255;
      var hT = (hX >> 24) & 255;
      hN[hW] = [hV, hU, hS, hT];
      return hN[hW];
    }
    return {
      getStyleFromCache: function (hZ, hU, hX, hY, hT, hW, hS) {
        hZ = hZ || 'default';
        var hV = hZ + '-' + hU + '-' + hX + '-' + hY;
        if (hW) {
          hV += '-indoor';
        }
        if (hT) {
          if (!hR[hV]) {
            hR[hV] = hO(hU, hX, hY, hT);
          }
          return hR[hV];
        }
        if (!hI[hV]) {
          hI[hV] = hO(hU, hX, hY, hT, hS);
        }
        return hI[hV];
      },
    };
  })();
  bj.register(function (i) {
    var e = new dA(i);
  });
  function dA(e) {
    e.container.appendChild(this.render());
    this.bind(e);
  }
  dA.prototype.render = function () {
    var i = document.createElement('div');
    i.className = 'click-ripple-container';
    var e = document.createElement('div');
    e.className = 'click-ripple';
    i.appendChild(e);
    this._div = i;
    this._ripple = e;
    return i;
  };
  dA.prototype.bind = function (i) {
    var e = this;
    i.addEventListener('spotclick', function (T) {
      if (!T.spots || T.spots.length === 0) {
        return;
      }
      e._div.style.left = T.pixel.x + 'px';
      e._div.style.top = T.pixel.y + 'px';
      C.ac(e._ripple, 'ripple-playing');
    });
    C.on(e._ripple, 'transitionend', function () {
      C.rc(e._ripple, 'ripple-playing');
    });
  };
  function fT(e) {
    d5.call(this);
    if (!e) {
      return;
    }
    this._opts = {};
    this._map = e;
    this._maxLat = 84.6;
    this._minLat = -80.6;
    this._maxLatMC = ef.convertLL2MC(new cX(this._maxLat, 0)).lat;
    this._minLatMC = ef.convertLL2MC(new cX(this._minLat, 0)).lat;
  }
  fT.inherits(d5, 'ToolbarItem');
  C.extend(fT.prototype, {
    open: function () {
      if (this._isOpen == true) {
        return true;
      }
      if (this._map._toolInUse) {
        return false;
      }
      this._map._toolInUse = true;
      this._isOpen = true;
      return true;
    },
    close: function () {
      if (!this._isOpen) {
        return;
      }
      this._map._toolInUse = false;
      this._isOpen = false;
    },
    _checkStr: function (e) {
      if (!e) {
        return '';
      }
      return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },
  });
  function gC(T, i) {
    fT.call(this, T);
    i = i || {};
    this._opts = C.extend(
      C.extend(this._opts || {}, {
        autoClear: false,
        tips: '测距',
        followText: '单击确定起点，双击结束绘制',
        unit: 'metric',
        showResult: true,
        lineColor: 'blue',
        lineStroke: 2,
        opacity: 1,
        lineStyle: 'solid',
        cursor: eV.distCursor,
        styleCodes: {lnCode: 0, spCode: 0, slCode: 0, tlCode: 0},
        enableMassClear: true,
      }),
      i,
    );
    if (this._opts.showResult === false) {
      if (typeof i.tips === 'undefined') {
        this._opts.tips = '绘制折线';
      }
      if (!i.cursor) {
        this._opts.cursor = 'crosshair';
      }
    }
    if (this._opts.lineStroke <= 0) {
      this._opts.lineStroke = 2;
    }
    if (this._opts.opacity > 1) {
      this._opts.opacity = 1;
    } else {
      if (this._opts.opacity < 0) {
        this._opts.opacity = 0;
      }
    }
    if (this._opts.lineStyle !== 'solid' && this._opts.lineStyle !== 'dashed') {
      this._opts.lineStyle = 'solid';
    }
    this._checked = false;
    this._drawing = null;
    this.followTitle = null;
    this._totalDis = {};
    this._points = [];
    this._paths = [];
    this._dots = [];
    this._segDistance = [];
    this._overlays = [];
    this._units = {
      metric: {name: 'metric', conv: 1, incon: 1000, u1: '米', u2: '公里'},
      us: {name: 'us', conv: 3.2808, incon: 5279.856, u1: '英尺', u2: '英里'},
    };
    if (!this._units[this._opts.unit]) {
      this._opts.unit = 'metric';
    }
    this._dLineColor = '#ff6319';
    this._dLineStroke = 3;
    this._dOpacity = 0.8;
    this._dLineStyle = 'solid';
    this._dCursor = eV.distCursor;
    if (this._opts.showResult) {
      this._opts.followText = '单击确定起点';
    }
    this._followTextM = '单击确定地点，双击结束';
    this._sectionMarkerTip = '单击可删除此点，拖拽可调整位置';
    this._movingTimerId = null;
    if (this._opts.showResult) {
      this.text = '测距';
    } else {
      this.text = '绘线';
    }
    this._isOpen = false;
    var e = this;
    d2.load('tools', function () {
      e._draw();
    });
  }
  gC.inherits(fT, 'PolylineTItem');
  C.extend(gC.prototype, {
    setLineColor: function (e) {
      this._opts.lineColor = e;
    },
    setLineStroke: function (e) {
      if (Math.round(e) > 0) {
        this._opts.lineStroke = Math.round(e);
      }
    },
    setOpacity: function (e) {
      if (e >= 0 && e <= 1) {
        this._opts.opacity = e;
      }
    },
    setLineStyle: function (e) {
      if (e === 'solid' || e === 'dashed') {
        this._opts.lineStyle = e;
      }
    },
    clear: function () {
      for (var T = 0, e = this._overlays.length; T < e; T++) {
        if (this._overlays[T]) {
          this._map.removeOverlay(this._overlays[T]);
        }
      }
      this._overlays.length = 0;
      for (var T = 0, e = this._dots.length; T < e; T++) {
        if (this._dots[T] && this._dots[T].parentNode) {
          this._dots[T].parentNode.removeChild(this._dots[T]);
        }
      }
      this._dots.length = 0;
    },
    setCursor: function (e) {
      if (this._opts.showResult === true) {
        return;
      }
      this._opts.cursor = e;
    },
    getCursor: function () {
      if (this._opts.showResult === true) {
        return this._dCursor;
      }
      var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
      if (e !== null) {
        return e[1];
      } else {
        return this._opts.cursor;
      }
    },
    showResult: function (e) {
      this._opts.showResult = !!e;
    },
  });
  function co() {
    var hJ = 3;
    var hQ = 256;
    var hI = Math.pow(2, 18 - hJ) * hQ;
    var hR = 2;
    var hP = (hR + 1) * hI;
    var T = ef.convertLL2MC(new hj(180, 0));
    var hN = T.lng;
    var hL = hP - hN;
    var hO = -3;
    var e = hO * hI;
    var hK = ef.convertLL2MC(new hj(-180, 0));
    var hM = hK.lng;
    var i = hM - e;
    this._validPixels = hN / Math.pow(2, 18 - hJ);
    this._mc180X = hN;
    this._mcM180X = hM;
    this._loopOffset = hL + i;
    this._mcTSpan = hN - hM;
    this._spaceDistance = hL;
    this._mSpaceDistance = i;
  }
  co.prototype = {
    calcLoopParam: function (hI, i, hP) {
      hP = hP || 256;
      var hM = 0;
      var hJ = 3;
      var hL = 6;
      var hK = (hL * Math.pow(2, i - hJ) * 256) / hP;
      var hO = hK / 2 - 1;
      var hN = -hK / 2;
      while (hI > hO) {
        hI -= hK;
        hM -= this._loopOffset;
      }
      while (hI < hN) {
        hI += hK;
        hM += this._loopOffset;
      }
      var e = hM;
      hM = Math.round(hM / Math.pow(2, 18 - i));
      return {offsetX: hM, geoOffsetX: e, col: hI, T: hK, maxCol: hO, minCol: hN};
    },
    calcLoopCenterPoint: function (i) {
      var e = i.lng;
      while (e > this._mc180X) {
        e -= this._mcTSpan;
      }
      while (e < this._mcM180X) {
        e += this._mcTSpan;
      }
      i.lng = e;
      return i;
    },
    calcLoopMapBounds: function (T, hI) {
      var i = hI || T.getCenter();
      var e = T.sw.lng;
      var hJ = T.ne.lng;
      while (i.lng > this._mc180X) {
        i.lng -= this._mcTSpan;
        e -= this._mcTSpan;
        hJ -= this._mcTSpan;
      }
      while (i.lng < this._mcM180X) {
        i.lng += this._mcTSpan;
        e += this._mcTSpan;
        hJ += this._mcTSpan;
      }
      T.sw.lng = e;
      T.ne.lng = hJ;
      if (T.pointBottomLeft) {
        T.pointBottomLeft = this.calcLoopCenterPoint(T.pointBottomLeft);
        T.pointTopLeft = this.calcLoopCenterPoint(T.pointTopLeft);
        T.pointTopRight = this.calcLoopCenterPoint(T.pointTopRight);
        T.pointBottomRight = this.calcLoopCenterPoint(T.pointBottomRight);
      }
      return T;
    },
    calcLoopTiles: function (hQ, e, hU, hN) {
      hU = hU || 256;
      var hJ = hN || Math.pow(2, 18 - e) * hU;
      var hP = Math.floor(this._mc180X / hJ);
      var hL = Math.floor(this._mcM180X / hJ);
      var hR = Math.floor(this._loopOffset / hJ);
      var hS = [];
      for (var hM = 0; hM < hQ.length; hM++) {
        var hT = hQ[hM];
        var hI = hT[0];
        var hV = hT[1];
        if (hI >= hP) {
          var hO = hI + hR;
          if (this.isTileBlank(hO, e, hU) === true) {
            continue;
          }
          var T = 'id_' + hO + '_' + hV + '_' + e;
          if (!hQ[T]) {
            hQ[T] = true;
            hS.push([hO, hV, e, 0]);
          }
        } else {
          if (hI <= hL) {
            var hO = hI - hR;
            if (this.isTileBlank(hO, e, hU) === true) {
              continue;
            }
            var T = 'id_' + hO + '_' + hV + '_' + e;
            if (!hQ[T]) {
              hQ[T] = true;
              hS.push([hO, hV, e, 0]);
            }
          }
        }
      }
      for (var hM = 0, hK = hS.length; hM < hK; hM++) {
        hQ.push(hS[hM]);
      }
      for (var hM = hQ.length - 1; hM >= 0; hM--) {
        var hI = hQ[hM][0];
        if (this.isTileBlank(hI, e, hU)) {
          hQ.splice(hM, 1);
        }
      }
      return hQ;
    },
    isTileBlank: function (T, hJ, e) {
      var hK = Math.pow(2, hJ - 3);
      var i = Math.round(this._validPixels * hK);
      var hI = (6 * hK * 256) / e;
      while (T > hI / 2 - 1) {
        T -= hI;
      }
      while (T < -(hI / 2)) {
        T += hI;
      }
      if (T > 0 && T * e > i) {
        return true;
      }
      if (T < 0 && Math.abs((T + 1) * e) > i) {
        return true;
      }
      return false;
    },
    isAddWidth: function (e, i) {
      return e < this._mcM180X || i > this._mc180X;
    },
    getSpaceDistanceInPixel: function (i) {
      var e = Math.round((this._spaceDistance + this._mSpaceDistance) / Math.pow(2, 18 - i));
      return e;
    },
  };
  var dX = new co();
  var b9 = (function () {
    var e = true;
    var hI = 256;
    var hK = az('ditu', 'normalTraffic');
    var T = hK.udt;
    var hL = 'https://sp3.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa/traffic/';
    var hJ = [
      [2, '79,210,125,1', 3, 2, 0, [], 0, 0],
      [2, '79,210,125,1', 3, 2, 0, [], 0, 0],
      [2, '79,210,125,1', 4, 2, 0, [], 0, 0],
      [2, '79,210,125,1', 5, 2, 0, [], 0, 0],
      [2, '79,210,125,1', 6, 2, 0, [], 0, 0],
      [2, '255,208,69,1', 3, 2, 0, [], 0, 0],
      [2, '255,208,69,1', 3, 2, 0, [], 0, 0],
      [2, '255,208,69,1', 4, 2, 0, [], 0, 0],
      [2, '255,208,69,1', 5, 2, 0, [], 0, 0],
      [2, '255,208,69,1', 6, 2, 0, [], 0, 0],
      [2, '232,14,14,1', 3, 2, 0, [], 0, 0],
      [2, '232,14,14,1', 3, 2, 0, [], 0, 0],
      [2, '232,14,14,1', 4, 2, 0, [], 0, 0],
      [2, '232,14,14,1', 5, 2, 0, [], 0, 0],
      [2, '232,14,14,1', 6, 2, 0, [], 0, 0],
      [2, '181,0,0,1', 3, 2, 0, [], 0, 0],
      [2, '181,0,0,1', 3, 2, 0, [], 0, 0],
      [2, '181,0,0,1', 4, 2, 0, [], 0, 0],
      [2, '181,0,0,1', 5, 2, 0, [], 0, 0],
      [2, '181,0,0,1', 6, 2, 0, [], 0, 0],
      [2, '255,255,255,1', 4, 0, 0, [], 0, 0],
      [2, '255,255,255,1', 5.5, 0, 0, [], 0, 0],
      [2, '255,255,255,1', 7, 0, 0, [], 0, 0],
      [2, '255,255,255,1', 8.5, 0, 0, [], 0, 0],
      [2, '255,255,255,1', 10, 0, 0, [], 0, 0],
    ];
    var i = new cL({transparentPng: true, dataType: 2, cacheSize: 256, clipTile: true});
    i.zIndex = 2;
    i.getTilesUrl = function (hO, hP) {
      if (!hO || hP < 7) {
        return null;
      }
      var hN = hO.x;
      var hQ = hO.y;
      var hM = hL + '?qt=vtraffic&z=' + hP + '&x=' + hN + '&y=' + hQ + '&udt=' + T;
      return hM;
    };
    i.setColors = function (hM) {
      for (var hP = 0; hP < hJ.length; hP++) {
        var hO = Math.floor(hP / 5);
        var hN = hM[hO];
        if (hN) {
          if (Object.prototype.toString.call(hN) === '[object String]') {
            hN = gR.parseCSSColor(hN);
          }
          hJ[hP][1] = [hN[0], hN[1], hN[2], hN[3] / 255].join(',');
        }
      }
    };
    i.processData = function (hP) {
      var hT = hP.content;
      var hR = 10;
      if (typeof hP.precision === 'number') {
        hR = hP.precision * 10;
      }
      var h0 = {road: [[], []]};
      if (!hT) {
        return h0;
      }
      var hY = hT.tf;
      if (!hY) {
        return h0;
      }
      for (var hQ = 0; hQ < hY.length; hQ++) {
        var hZ = hY[hQ][1];
        var hX = [];
        var hV = 0;
        var hU = 0;
        var hW = hJ[hY[hQ][3]];
        for (var hO = 0, hM = hZ.length; hO < hM / 2; hO++) {
          hV += hZ[hO * 2] / hR;
          hU += hZ[hO * 2 + 1] / hR;
          hX.push(hV, 256 - hU);
        }
        var hN = hW[1].split(',');
        hN[3] = hN[3] * 255;
        var hS = hW[2] / 2;
        h0.road[0].push([hX, 1, 2, [255, 255, 255, 255], hS + 2]);
        h0.road[1].push([hX, 1, 2, hN, hS]);
      }
      return h0;
    };
    return i;
  })();
  bj.register(function (i) {
    if (i.config && i.config.isOverviewMap) {
      return;
    }
    if (i.isLoaded()) {
      fu(i);
    } else {
      i.addEventListener('load', function () {
        fu(this);
      });
    }
    i.cityName = '中国';
    i.cCode = '1';
    var e = {};
    e.enableRequest = true;
    e.request = function () {
      if (e.enableRequest) {
        e.enableRequest = false;
        setTimeout(function () {
          e._request();
        }, 500);
      }
    };
    e._request = function () {
      var hI = i.getBoundsIn();
      var hK = i.getZoom();
      var T = hI.getSouthWest();
      var hJ = hI.getNorthEast();
      cv.request(
        function (hN) {
          if (hN.current_city['code'] >= 9000 && hN.current_city['code'] <= 9378) {
            hN.current_city['name'] = '台湾省';
          }
          if (hN.current_city['code'] >= 20000 && hN.current_city['code'] <= 20499) {
            hN.current_city['name'] = '新加坡';
          }
          if (hN.current_city['code'] >= 20500 && hN.current_city['code'] <= 25999) {
            hN.current_city['name'] = '泰国';
          }
          if (hN.current_city['code'] >= 26000 && hN.current_city['code'] <= 29999) {
            hN.current_city['name'] = '日本';
          }
          if (hN.current_city['code'] >= 30000 && hN.current_city['code'] <= 30999) {
            hN.current_city['name'] = '韩国';
          }
          if (hN.current_city['code'] >= 31000 && hN.current_city['code'] <= 37000) {
            hN.current_city['name'] = '亚太';
          }
          if (hN.current_city['code'] >= 46609 && hN.current_city['code'] <= 52505) {
            hN.current_city['name'] = '欧洲';
          }
          if (hN.current_city['code'] >= 39509 && hN.current_city['code'] <= 53500) {
            hN.current_city['name'] = '南美洲';
          }
          if (hN.current_city['code'] >= 54000 && hN.current_city['code'] <= 70000) {
            hN.current_city['name'] = '北美洲';
          }
          if (
            hN.current_city['code'] === 54003 &&
            hN.current_city['code'] >= 60731 &&
            hN.current_city['code'] <= 61123
          ) {
            hN.current_city['name'] = '美国';
          }
          if (
            hN.current_city['code'] === 54015 ||
            (hN.current_city['code'] >= 57970 && hN.current_city['code'] <= 60223)
          ) {
            hN.current_city['name'] = '加拿大';
          }
          if (
            hN.current_city['code'] === 54025 ||
            (hN.current_city['code'] >= 54338 && hN.current_city['code'] <= 57374)
          ) {
            hN.current_city['name'] = '墨西哥';
          }
          e.enableRequest = true;
          if (hN && hN.current_city) {
            var hM = hN.current_city['name'];
            var hL = hN.current_city['code'];
            if (hL !== i.cCode) {
              i.dispatchEvent('citychange', {name: hM, code: hL});
            }
            i.cityName = hM;
            i.cCode = hN.current_city['code'];
            if (!fW()) {
              en(i);
            }
          }
        },
        {qt: 'cen', b: T.lng + ',' + T.lat + ';' + hJ.lng + ',' + hJ.lat, l: hK},
        '',
        '',
        true,
      );
    };
    i.addEventListener('load', function (T) {
      e.request();
    });
    i.addEventListener('moveend', function (T) {
      e.request();
    });
    i.addEventListener('zoomend', function (T) {
      e.request();
    });
    e.request();
  });
  function fu(i) {
    if (i.temp.copyadded) {
      return;
    }
    i.temp.copyadded = true;
    if (!i.cpyCtrl) {
      var hI = new d1(2, 2);
      i.config.cpyCtrlOffset = hI;
      if (fW()) {
        hI.width = 72;
        hI.height = 0;
      }
      var T = new dB({offset: hI, printable: true});
      i.cpyCtrl = T;
    }
    if (!fW()) {
      en(i);
      i.addEventListener('maptypechange', function () {
        en(i);
      });
    }
    i.addControl(T);
    var e = new ae();
    e._opts = {printable: true};
    i.logoCtrl = e;
    i.addControl(e);
    i.addEventListener('resize', function () {
      if (this.getSize().width >= 300 && i.getSize().height >= 100) {
        e.show();
        T.setOffset(i.config.cpyCtrlOffset);
      } else {
        e.hide();
        T.setOffset(new d1(4, 2));
      }
    });
    if (i.getSize().width >= 300 && i.getSize().height >= 100) {
      e.show();
    } else {
      e.hide();
      T.setOffset(new d1(4, 2));
    }
    i.addEventListener('oncopyrightoffsetchange', function (hJ) {
      i.logoCtrl.setOffset(hJ.target.logo);
      i.cpyCtrl.setOffset(hJ.target.cpy);
    });
    i.dispatchEvent(new a6('oncopyrightaddend'));
  }
  function en(hX) {
    if (!hX.cpyCtrl) {
      var h5 = new d1(2, 2);
      if (fW()) {
        h5.width = 72;
        h5.height = 0;
      }
      var h0 = new dB({offset: h5, printable: true});
      hX.cpyCtrl = h0;
    }
    var ie = hX.cityName || '中国';
    var hY = hX.getMapType();
    var hZ = ['常州市', '南昌市', '乌鲁木齐市', '无锡市', '福州市', '泉州市', '珠海市', '贵阳市'];
    var hR = [
      '北京市',
      '上海市',
      '广州市',
      '深圳市',
      '宁波市',
      '石家庄市',
      '沈阳市',
      '长春市',
      '青岛市',
      '温州市',
      '台州市',
      '金华市',
      '佛山市',
      '中山市',
      '昆明市',
      '南宁市',
      '苏州市',
      '西安市',
      '济南市',
      '郑州市',
      '合肥市',
      '呼和浩特市',
      '杭州市',
      '成都市',
      '武汉市',
      '长沙市',
      '天津市',
      '南京市',
      '重庆市',
      '大连市',
      '东莞市',
      '厦门市',
    ];
    var hT = ['香港特别行政区'];
    var hN = ['台湾省'];
    var h6 = ['日本'];
    var ic = ['韩国'];
    var h1 = ['泰国'];
    var h4 = ['亚太'];
    var hO = ['新加坡'];
    var id = ['欧洲'];
    var hI = ['南美洲'];
    var h9 = ['北美洲'];
    var T = ['美国'];
    var h3 = ['墨西哥'];
    var hL = ['加拿大'];
    for (var ia in hZ) {
      if (hZ[ia] === ie) {
        var hU = true;
        break;
      }
    }
    for (var ia in hR) {
      if (hR[ia] === ie) {
        var hJ = true;
        break;
      }
    }
    for (var ia in hT) {
      if (hT[ia] === ie) {
        var ih = true;
        break;
      }
    }
    if (hN[0] === ie) {
      var h8 = true;
    }
    if (hO[0] === ie) {
      var i = true;
    }
    if (h6[0] === ie) {
      var hQ = true;
    }
    if (ic[0] === ie) {
      var hW = true;
    }
    if (h1[0] === ie) {
      var hV = true;
    }
    if (h4[0] === ie) {
      var hM = true;
    }
    if (id[0] === ie) {
      var hS = true;
    }
    if (hI[0] === ie) {
      var hP = true;
    }
    if (h9[0] === ie) {
      var e = true;
    }
    if (T[0] === ie) {
      var ib = true;
    }
    if (hL[0] === ie) {
      var h7 = true;
    }
    if (h3[0] === ie) {
      var hK = true;
    }
    var ig = [
      '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
    ];
    var h2 = 'rgba(255, 255, 255, 0.701961)';
    if (hX.getZoom() <= 9) {
      ig = [
        '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
      ];
    } else {
      if (h8) {
        ig = [
          '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
        ];
      } else {
        if (hQ || hW) {
          ig = [
            '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
          ];
        } else {
          if (i || hV) {
            ig = [
              '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
            ];
          } else {
            if (hM) {
              ig = [
                '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
              ];
            } else {
              if (hS) {
                ig = [
                  '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
                ];
              } else {
                if (hP) {
                  ig = [
                    '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
                  ];
                } else {
                  if (e) {
                    ig = [
                      '&copy;&nbsp;2020 Baidu - GS(2019)5218号 - 甲测资字1100930 - 京ICP证030173号 - Data &copy; ',
                    ];
                  }
                }
              }
            }
          }
        }
      }
    }
    if (hX.getZoom() <= 9) {
      ig.push('长地万方');
      ig.push(' &amp; <a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
      ig.push(
        ' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>',
      );
      if (hY === BMAP_SATELLITE_MAP || hY === BMAP_HYBRID_MAP) {
        ig.push(' &amp; <a target="_blank" href="http://www.eso.org/public/">ESO</a>');
        h2 = 'rgba(0,0,0,.7)';
      }
    } else {
      if (hQ || hW) {
        ig.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
      } else {
        if (i || hV) {
          ig.push(
            '<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>',
          );
        } else {
          if (hM) {
            ig.push(
              '<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>',
            );
            ig.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>');
          } else {
            if (hS) {
              ig.push('<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>');
              ig.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>');
            } else {
              if (hP) {
                ig.push(
                  '<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>',
                );
                ig.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>');
              } else {
                if (ib || hK || h7) {
                  ig.push(
                    '<a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>',
                  );
                  ig.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>');
                } else {
                  if (e) {
                    ig.push(
                      '<a target="_blank" href="http://www.openstreetmap.org/">OpenStreetMap</a>',
                    );
                    ig.push(' &amp; <a target="_blank" href="https://www.mapbox.com/">Mapbox</a>');
                  } else {
                    ig.push('长地万方');
                    if (hU) {
                      ig.push(
                        ' &amp; <a target="_blank" href="http://www.palmcity.cn/palmcity/">PalmCity</a>',
                      );
                    }
                    if (ih) {
                      ig.push(
                        ' &amp; <a target="_blank" href="http://www.mapking.com/HongKong/eng/home/MapKing_Webmap.html">MapKing</a>',
                      );
                    }
                    if (h8) {
                      ig.push(
                        ' &amp; <a target="_blank" href="http://corporate.navteq.com/supplier_terms.html">HERE</a>',
                      );
                      ig.push(
                        ' &amp; <a target="_blank" href="http://www.localking.com.tw/about/localking.aspx">樂客LocalKing</a>',
                      );
                    }
                    if (hY === BMAP_SATELLITE_MAP || hY === BMAP_HYBRID_MAP) {
                      h2 = 'rgba(0,0,0,.7)';
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ig.unshift(
      '<span style="background: ' +
        h2 +
        ';padding: 0px 1px;line-height: 16px;display: inline;height: 16px;">',
    );
    ig.push('</span>');
    ig = ig.join('');
    hX.cpyCtrl.addCopyright({id: 1, content: ig});
  }
  window.BMAP_STATUS_SUCCESS = 0;
  window.BMAP_STATUS_CITY_LIST = 1;
  window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
  window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
  window.BMAP_STATUS_INVALID_KEY = 4;
  window.BMAP_STATUS_INVALID_REQUEST = 5;
  window.BMAP_STATUS_PERMISSION_DENIED = 6;
  window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
  window.BMAP_STATUS_TIMEOUT = 8;
  window.BMAP_ROUTE_TYPE_WALKING = 2;
  window.BMAP_ROUTE_TYPE_DRIVING = 3;
  window.BMAP_ROUTE_TYPE_RIDING = 6;
  window.BMAP_ROUTE_STATUS_NORMAL = 0;
  window.BMAP_ROUTE_STATUS_EMPTY = 1;
  window.BMAP_ROUTE_STATUS_ADDRESS = 2;
  var ex = 'cur';
  var bX = 'cen';
  var ee = 's';
  var P = 'con';
  var dG = 'bd';
  var f4 = 'nb';
  var hz = 'bt';
  var cJ = 'nav';
  var ec = 'walk';
  var hv = 'gc';
  var fD = 'rgc';
  var ep = 'dec';
  var e3 = 'bse';
  var fe = 'nse';
  var g = 'bl';
  var a7 = 'bsl';
  var bk = 'bda';
  var X = 'sa';
  var aw = 'nba';
  var bU = 'drag';
  var H = 'ext';
  var aK = 'hip';
  var R = 'ride';
  var fI = 'drct';
  var gg = 2;
  var fF = 4;
  var gY = 7;
  var gW = 11;
  var fp = 12;
  var ht = 14;
  var bL = 15;
  var dD = 18;
  var e6 = 20;
  var cC = 21;
  var cj = 19;
  var e0 = 23;
  var cd = 26;
  var an = 28;
  var ea = 31;
  var cz = 35;
  var f8 = 44;
  var hG = 45;
  var eA = 46;
  var cx = 47;
  var gp = -1;
  var gO = 0;
  var g3 = 1;
  var ch = 2;
  var b3 = 3;
  window.BMAP_POI_TYPE_NORMAL = 0;
  var Q = 1;
  var b7 = 2;
  BMapGL.I = C.I;
  var O = {};
  O.removeHtml = function (e) {
    e = e.replace(/<\/?[^>]*>/g, '');
    e = e.replace(/[ | ]* /g, ' ');
    return e;
  };
  O.parseGeoExtReg1 = function (e) {
    return e.replace(
      /([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g,
      '$1,$2;',
    );
  };
  O.parseGeoExtReg2 = function (i, e) {
    var T = new RegExp(
      '(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){' +
        e +
        '}',
      'ig',
    );
    return i.replace(T, '$1');
  };
  window.BMAP_POI_TYPE_NORMAL = 0;
  window.BMAP_POI_TYPE_BUSSTOP = 1;
  window.BMAP_POI_TYPE_BUSLINE = 2;
  window.BMAP_POI_TYPE_SUBSTOP = 3;
  window.BMAP_POI_TYPE_SUBLINE = 4;
  var hm = 0;
  var fO = 1;
  var cZ = {};
  window.APIPack = cZ;
  function ft(i, e) {
    d5.call(this);
    this._loc = {};
    this.setLocation(i);
    e = e || {};
    e.renderOptions = e.renderOptions || {};
    this._opts = {
      renderOptions: {
        panel: e.renderOptions.panel || null,
        map: e.renderOptions.map || null,
        autoViewport: e.renderOptions.autoViewport || true,
        selectFirstResult: e.renderOptions.selectFirstResult,
        highlightMode: e.renderOptions.highlightMode,
        enableDragging: e.renderOptions.enableDragging || false,
      },
      onSearchComplete: e.onSearchComplete || function () {},
      onMarkersSet: e.onMarkersSet || function () {},
      onInfoHtmlSet: e.onInfoHtmlSet || function () {},
      onResultsHtmlSet: e.onResultsHtmlSet || function () {},
      onGetBusListComplete: e.onGetBusListComplete || function () {},
      onGetBusLineComplete: e.onGetBusLineComplete || function () {},
      onBusListHtmlSet: e.onBusListHtmlSet || function () {},
      onBusLineHtmlSet: e.onBusLineHtmlSet || function () {},
      onPolylinesSet: e.onPolylinesSet || function () {},
      reqFrom: e.reqFrom || '',
    };
    if (
      typeof e != 'undefined' &&
      typeof e.renderOptions != 'undefined' &&
      typeof e.renderOptions['autoViewport'] != 'undefined'
    ) {
      this._opts.renderOptions.autoViewport = e.renderOptions['autoViewport'];
    } else {
      this._opts.renderOptions.autoViewport = true;
    }
    this._opts.renderOptions.panel = C.G(this._opts.renderOptions.panel);
  }
  ft.inherits(d5, 'BaseSearch');
  C.extend(ft.prototype, {
    getResults: function () {
      if (!this._isMultiKey) {
        return this._results;
      } else {
        return this._arrResults;
      }
    },
    enableAutoViewport: function () {
      this._opts.renderOptions.autoViewport = true;
    },
    disableAutoViewport: function () {
      this._opts.renderOptions.autoViewport = false;
    },
    setLocation: function (e) {
      if (!e) {
        return;
      }
      this._loc.src = e;
    },
    setSearchCompleteCallback: function (e) {
      this._opts.onSearchComplete = e || function () {};
    },
    setMarkersSetCallback: function (e) {
      this._opts.onMarkersSet = e || function () {};
    },
    setPolylinesSetCallback: function (e) {
      this._opts.onPolylinesSet = e || function () {};
    },
    setInfoHtmlSetCallback: function (e) {
      this._opts.onInfoHtmlSet = e || function () {};
    },
    setResultsHtmlSetCallback: function (e) {
      this._opts.onResultsHtmlSet = e || function () {};
    },
    getStatus: function () {
      return this._status;
    },
  });
  var dH = function (T, i) {
    ft.call(this, T, i);
    i = i || {};
    i.renderOptions = i.renderOptions || {};
    this.setPageCapacity(i.pageCapacity);
    if (
      typeof i.renderOptions['selectFirstResult'] != 'undefined' &&
      !i.renderOptions['selectFirstResult']
    ) {
      this.disableFirstResultSelection();
    } else {
      this.enableFirstResultSelection();
    }
    this._overlays = [];
    this._arrPois = [];
    this._curIndex = -1;
    this._queryList = [];
    var e = this;
    d2.load(
      'localSearch',
      function () {
        e._check();
      },
      true,
    );
  };
  dH.inherits(ft, 'LocalSearch');
  dH.DEFAULT_PAGE_CAPACITY = 10;
  dH.MIN_PAGE_CAPACITY = 1;
  dH.MAX_PAGE_CAPACITY = 100;
  dH.DEFAULT_RADIUS = 2000;
  dH.MAX_RADIUS = 100000;
  C.extend(dH.prototype, {
    search: function (e, i) {
      this._queryList.push({method: 'search', arguments: [e, i]});
    },
    searchInBounds: function (e, T, i) {
      this._queryList.push({method: 'searchInBounds', arguments: [e, T, i]});
    },
    searchNearby: function (T, i, e, hI) {
      this._queryList.push({method: 'searchNearby', arguments: [T, i, e, hI]});
    },
    clearResults: function () {
      delete this._json;
      delete this._status;
      delete this._results;
      delete this._ud;
      this._curIndex = -1;
      this._setStatus();
      if (this._opts.renderOptions.panel) {
        this._opts.renderOptions.panel.innerHTML = '';
      }
    },
    gotoPage: function () {},
    enableFirstResultSelection: function () {
      this._opts.renderOptions.selectFirstResult = true;
    },
    disableFirstResultSelection: function () {
      this._opts.renderOptions.selectFirstResult = false;
    },
    setPageCapacity: function (e) {
      if (typeof e == 'number' && !isNaN(e)) {
        this._opts.pageCapacity =
          e < 1
            ? dH.DEFAULT_PAGE_CAPACITY
            : e > dH.MAX_PAGE_CAPACITY
            ? dH.DEFAULT_PAGE_CAPACITY
            : e;
      } else {
        this._opts.pageCapacity = dH.DEFAULT_PAGE_CAPACITY;
      }
    },
    getPageCapacity: function () {
      return this._opts.pageCapacity;
    },
    toString: function () {
      return 'LocalSearch';
    },
  });
  function V(i) {
    this._opts = {};
    C.extend(this._opts, i);
    this._queryList = [];
    var e = this;
    d2.load('otherSearch', function () {
      e._asyncSearch();
    });
  }
  V.inherits(d5, 'Geocoder');
  C.extend(V.prototype, {
    getPoint: function (e, T, i) {
      this._queryList.push({method: 'getPoint', arguments: [e, T, i]});
    },
    getLocation: function (e, T, i) {
      this._queryList.push({method: 'getLocation', arguments: [e, T, i]});
    },
    toString: function () {
      return 'Geocoder';
    },
  });
  function cN(e) {
    e = e || {};
    this.config = {
      timeout: e.timeout || 1000 * 10,
      maximumAge: e.maximumAge || 0,
      enableHighAccuracy: e.enableHighAccuracy || false,
      SDKLocation: e.SDKLocation || false,
    };
    this._pendingCalls = [];
    var i = this;
    d2.load('otherSearch', function () {
      var T = i._pendingCalls.length;
      for (var hI = 0; hI < T; hI++) {
        var hJ = i._pendingCalls[hI];
        i[hJ.method].apply(i, hJ.arguments);
      }
    });
  }
  C.extend(cN.prototype, {
    getCurrentPosition: function (e, i) {
      this._pendingCalls.push({method: 'getCurrentPosition', arguments: arguments});
    },
    getStatus: function () {
      return BMAP_STATUS_UNKNOWN_LOCATION;
    },
    enableSDKLocation: function () {
      if (fW()) {
        this.config.SDKLocation = true;
      }
    },
    disableSDKLocation: function () {
      this.config.SDKLocation = false;
    },
  });
  function gq() {
    this._queryList = [];
    var e = this;
    d2.load('otherSearch', function () {
      e._asyncSearch();
    });
  }
  gq.inherits(d5, 'Boundary');
  C.extend(gq.prototype, {
    get: function (i, e) {
      this._queryList.push({method: 'get', arguments: [i, e]});
    },
    toString: function () {
      return 'Boundary';
    },
  });
  function W(i) {
    i = i || {};
    i.renderOptions = i.renderOptions || {};
    this._opts = {renderOptions: {map: i.renderOptions.map || null}};
    this._queryList = [];
    var e = this;
    d2.load('otherSearch', function () {
      e._asyncSearch();
    });
  }
  W.inherits(d5, 'LocalCity');
  C.extend(W.prototype, {
    get: function (e) {
      this._queryList.push({method: 'get', arguments: [e]});
    },
    toString: function () {
      return 'LocalCity';
    },
  });
  function cH(e, T) {
    d5.call(this);
    this.markersList = [];
    this.destList = [];
    this.pointsList = [];
    this._opts = T;
    this.json = e;
    this.map = this._opts.renderOptions.map || null;
    this.sType = this._opts.sType;
    this.infoWindow = null;
    this.curPointIndex = 0;
    this.startName = '';
    this.endIndex = 1;
    this.endName = '';
    this.resCity = [0, 0, 0, 0, 0, 0, 0];
    this.locPois = [];
    this.curPageIndex = [1, 1, 1, 1, 1, 1, 1];
    this.totalPage = [1, 1, 1, 1, 1, 1, 1];
    this.resCount = [0, 0, 0, 0, 0, 0, 0];
    this.resType = [0, 0, 0, 0, 0, 0, 0];
    this.qInfo = [
      {n: '', c: 0, u: 0, x: 0, y: 0, t: -1},
      {n: '', c: 0, u: 0, x: 0, y: 0, t: -1},
      {n: '', c: 0, u: 0, x: 0, y: 0, t: -1},
      {n: '', c: 0, u: 0, x: 0, y: 0, t: -1},
      {n: '', c: 0, u: 0, x: 0, y: 0, t: -1},
      {n: '', c: 0, u: 0, x: 0, y: 0, t: -1},
      {n: '', c: 0, u: 0, x: 0, y: 0, t: -1},
    ];
    this.curSelectedIndex = -1;
    this.tpList = [];
    this.tpListInMap = [];
    var i = this;
    d2.load('route', function () {});
  }
  cH.inherits(d5, 'RouteAddr');
  function dW(T, i) {
    ft.call(this, T, i);
    this.QUERY_TYPE_BUSLIST = g;
    this.RETURN_TYPE_BUSLIST = bL;
    this.QUERY_TYPE_BUSLINE = a7;
    this.RETURN_TYPE_BUSLINE = dD;
    this._queryList = [];
    var e = this;
    d2.load('buslineSearch', function () {
      e._asyncSearch();
    });
  }
  var bi = eV.staticHost + '/wolfman/static/common/images/';
  dW._iconOpen = eV.apiIMG + '/iw_plus.gif';
  dW._iconClose = eV.apiIMG + '/iw_minus.gif';
  dW._stopUrl = bi + 'new/bus-stop-1x_ddd4723.png';
  dW.inherits(ft, 'BusLineSearch');
  C.extend(dW.prototype, {
    getBusList: function (e) {
      this._queryList.push({method: 'getBusList', arguments: [e]});
    },
    getBusLine: function (e) {
      this._queryList.push({method: 'getBusLine', arguments: [e]});
    },
    setGetBusListCompleteCallback: function (e) {
      this._opts.onGetBusListComplete = e || function () {};
    },
    setGetBusLineCompleteCallback: function (e) {
      this._opts.onGetBusLineComplete = e || function () {};
    },
    setBusListHtmlSetCallback: function (e) {
      this._opts.onBusListHtmlSet = e || function () {};
    },
    setBusLineHtmlSetCallback: function (e) {
      this._opts.onBusLineHtmlSet = e || function () {};
    },
    setPolylinesSetCallback: function (e) {
      this._opts.onPolylinesSet = e || function () {};
    },
  });
  function gT(i) {
    ft.call(this, i);
    i = i || {};
    this._options = {
      input: i.input || null,
      baseDom: i.baseDom || null,
      types: i.types || [],
      onSearchComplete: i.onSearchComplete || function () {},
    };
    this._loc.src = i.location || '全国';
    this._word = '';
    this._show = false;
    this._suggestion = null;
    this._inputValue = '';
    this._initialize();
    var e = this;
    d2.load(
      'autocomplete',
      function () {
        e._asyncSearch();
      },
      true,
    );
  }
  gT.inherits(ft, 'Autocomplete');
  C.extend(gT.prototype, {
    _initialize: function () {},
    show: function () {
      this._show = true;
    },
    hide: function () {
      this._show = false;
    },
    setTypes: function (e) {
      this._options.types = e;
    },
    setLocation: function (e) {
      this._loc.src = e;
    },
    search: function (e) {
      this._word = e;
    },
    setInputValue: function (e) {
      this._inputValue = e;
    },
    setSearchCompleteCallback: function (e) {
      this._options.onSearchComplete = e;
    },
  });
  var g6 = function (i, e) {
    ft.call(this, i, e);
  };
  C.inherit(g6, ft, 'BaseRoute');
  C.extend(g6.prototype, {clearResults: function () {}});
  window.BMAP_TRANSIT_POLICY_RECOMMEND = 0;
  window.BMAP_TRANSIT_POLICY_LEAST_TIME = 4;
  window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 1;
  window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 2;
  window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 3;
  window.BMAP_TRANSIT_POLICY_FIRST_SUBWAYS = 5;
  window.BMAP_LINE_TYPE_BUS = 0;
  window.BMAP_LINE_TYPE_SUBWAY = 1;
  window.BMAP_LINE_TYPE_FERRY = 2;
  window.BMAP_LINE_TYPE_TRAIN = 3;
  window.BMAP_LINE_TYPE_AIRPLANE = 4;
  window.BMAP_LINE_TYPE_COACH = 5;
  var de = 3;
  var fb = 4;
  var hp = 1;
  var dT = 2;
  var gG = 5;
  var gX = 6;
  window.BMAP_TRANSIT_TYPE_IN_CITY = 0;
  window.BMAP_TRANSIT_TYPE_CROSS_CITY = 1;
  window.BMAP_TRANSIT_PLAN_TYPE_ROUTE = 0;
  window.BMAP_TRANSIT_PLAN_TYPE_LINE = 1;
  window.BMAP_TRANSIT_TYPE_POLICY_TRAIN = 0;
  window.BMAP_TRANSIT_TYPE_POLICY_AIRPLANE = 1;
  window.BMAP_TRANSIT_TYPE_POLICY_COACH = 2;
  window.BMAP_INTERCITY_POLICY_LEAST_TIME = 0;
  window.BMAP_INTERCITY_POLICY_EARLY_START = 1;
  window.BMAP_INTERCITY_POLICY_CHEAP_PRICE = 2;
  function bD(T, i) {
    g6.call(this, T, i);
    i = i || {};
    this.setPolicy(i.policy);
    this.setIntercityPolicy(i.intercityPolicy);
    this.setTransitTypePolicy(i.transitTypePolicy);
    this.setPageCapacity(i.pageCapacity);
    this.QUERY_TYPE = hz;
    this.RETURN_TYPE = ht;
    this.ROUTE_TYPE = fO;
    this._overlays = [];
    this._curIndex = -1;
    this._opts._enableTraffic = i.enableTraffic || false;
    this._queryList = [];
    var e = this;
    d2.load(
      'route',
      function () {
        e._asyncSearch();
      },
      true,
    );
  }
  bD.MAX_PAGE_CAPACITY = 100;
  bD.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
  bD.LINE_TYPE_MAPPING_CROSS_CITY = [0, 3, 4, 0, 0, 0, 5];
  C.inherit(bD, g6, 'TransitRoute');
  C.extend(bD.prototype, {
    setPolicy: function (e) {
      if (e >= BMAP_TRANSIT_POLICY_RECOMMEND && e <= BMAP_TRANSIT_POLICY_FIRST_SUBWAYS) {
        this._opts.policy = e;
      } else {
        this._opts.policy = BMAP_TRANSIT_POLICY_RECOMMEND;
      }
    },
    setIntercityPolicy: function (e) {
      if (e >= BMAP_INTERCITY_POLICY_LEAST_TIME && e <= BMAP_INTERCITY_POLICY_CHEAP_PRICE) {
        this._opts.intercityPolicy = e;
      } else {
        this._opts.intercityPolicy = BMAP_INTERCITY_POLICY_LEAST_TIME;
      }
    },
    setTransitTypePolicy: function (e) {
      if (e >= BMAP_TRANSIT_TYPE_POLICY_TRAIN && e <= BMAP_TRANSIT_TYPE_POLICY_COACH) {
        this._opts.transitTypePolicy = e;
      } else {
        this._opts.transitTypePolicy = BMAP_TRANSIT_TYPE_POLICY_TRAIN;
      }
    },
    _internalSearch: function (i, e) {
      this._queryList.push({method: '_internalSearch', arguments: [i, e]});
    },
    search: function (i, e) {
      this._queryList.push({method: 'search', arguments: [i, e]});
    },
    setPageCapacity: function (e) {
      if (typeof e === 'string') {
        e = parseInt(e, 10);
        if (isNaN(e)) {
          this._opts.pageCapacity = bD.MAX_PAGE_CAPACITY;
          return;
        }
      }
      if (typeof e !== 'number') {
        this._opts.pageCapacity = bD.MAX_PAGE_CAPACITY;
        return;
      }
      if (e >= 1 && e <= bD.MAX_PAGE_CAPACITY) {
        this._opts.pageCapacity = Math.round(e);
      } else {
        this._opts.pageCapacity = bD.MAX_PAGE_CAPACITY;
      }
    },
    toString: function () {
      return 'TransitRoute';
    },
    _shortTitle: function (e) {
      return e.replace(/\(.*\)/, '');
    },
  });
  window.BMAP_HIGHLIGHT_STEP = 1;
  window.BMAP_HIGHLIGHT_ROUTE = 2;
  var cE = function (e, hI) {
    g6.call(this, e, hI);
    this._overlays = [];
    this._curIndex = -1;
    this._queryList = [];
    var T = this;
    var i = this._opts.renderOptions;
    if (i.highlightMode !== BMAP_HIGHLIGHT_STEP && i.highlightMode !== BMAP_HIGHLIGHT_ROUTE) {
      i.highlightMode = BMAP_HIGHLIGHT_STEP;
    }
    this._enableDragging = this._opts.renderOptions.enableDragging ? true : false;
    d2.load(
      'route',
      function () {
        T._asyncSearch();
      },
      true,
    );
    if (this.init_d) {
      this.init_d();
    }
  };
  cE.ROAD_TYPE = [
    '',
    '环岛',
    '无属性道路',
    '主路',
    '高速连接路',
    '交叉点内路段',
    '连接道路',
    '停车场内部道路',
    '服务区内部道路',
    '桥',
    '步行街',
    '辅路',
    '匝道',
    '全封闭道路',
    '未定义交通区域',
    'POI连接路',
    '隧道',
    '步行道',
    '公交专用道',
    '提前右转道',
  ];
  C.inherit(cE, g6, 'DWRoute');
  C.extend(cE.prototype, {
    search: function (T, e, i) {
      this._queryList.push({method: 'search', arguments: [T, e, i]});
    },
  });
  window.BMAP_DRIVING_POLICY_DEFAULT = 0;
  window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 3;
  window.BMAP_DRIVING_POLICY_FIRST_HIGHWAYS = 4;
  window.BMAP_DRIVING_POLICY_AVOID_CONGESTION = 5;
  window.BMAP_TRAFFICE_STATUS_NONE = 0;
  window.BMAP_TRAFFICE_STATUS_NORMAL = 1;
  window.BMAP_TRAFFICE_STATUS_SLOW = 2;
  window.BMAP_TRAFFICE_STATUS_JAM = 3;
  function fw(e, i) {
    cE.call(this, e, i);
    i = i || {};
    this._opts._enableTraffic = i.enableTraffic || false;
    this.setPolicy(i.policy);
    this.QUERY_TYPE = cJ;
    this.RETURN_TYPE = e6;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING;
  }
  C.inherit(fw, cE, 'DrivingRoute');
  fw.prototype.setPolicy = function (e) {
    if (e >= BMAP_DRIVING_POLICY_DEFAULT && e <= BMAP_DRIVING_POLICY_AVOID_CONGESTION) {
      this._opts.policy = e;
    } else {
      this._opts.policy = BMAP_DRIVING_POLICY_DEFAULT;
    }
  };
  function a5(e, i) {
    cE.call(this, e, i);
    this.QUERY_TYPE = ec;
    this.RETURN_TYPE = ea;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
    this._enableDragging = false;
  }
  C.inherit(a5, cE, 'WalkingRoute');
  function bh(e, i) {
    cE.call(this, e, i);
    this.QUERY_TYPE = R;
    this.ROUTE_TYPE = BMAP_ROUTE_TYPE_RIDING;
    this._enableDragging = false;
  }
  C.inherit(bh, cE, 'RidingRoute');
  window.BMAP_MODE_DRIVING = 'driving';
  window.BMAP_MODE_TRANSIT = 'transit';
  window.BMAP_MODE_WALKING = 'walking';
  window.BMAP_MODE_NAVIGATION = 'navigation';
  var a9 = {
    web: 'https://api.map.baidu.com/direction?',
    android: 'bdapp://map/direction?',
    ios: 'baidumap://map/direction?',
  };
  function hk(e) {
    this.opts = e || {};
  }
  C.extend(hk.prototype, {
    routeCall: function (hI, e, T) {
      var i = this;
      d2.load('route', function () {
        i._asyncSearch(hI, e, T);
      });
    },
  });
  bj.Map = c2;
  bj.MapType = b1;
  bj.Point = hj;
  bj.Pixel = eb;
  bj.Size = d1;
  bj.Bounds = dM;
  bj.TileLayer = cL;
  bj.Copyright = cY;
  bj.Projection = bj.Project = ef;
  bj.RenderTypeUtils = a3;
  bj.Overlay = bf;
  bj.Label = fH;
  bj.Marker = ay;
  bj.Icon = g2;
  bj.Polyline = aj;
  bj.BezierCurve = ff;
  bj.PolylineMultipart = fd;
  bj.Polygon = gV;
  bj.Prism = cb;
  bj.Marker3D = cp;
  bj.InfoWindow = am;
  bj.SimpleInfoWindow = hy;
  bj.Circle = dz;
  bj.GroundOverlay = dQ;
  bj.Control = a2;
  bj.NavigationControl = dm;
  bj.NavigationControl3D = eM;
  bj.CopyrightControl = dB;
  bj.ScaleControl = g8;
  bj.MapTypeControl = bx;
  bj.ZoomControl = cs;
  bj.LocationControl = bv;
  bj.LogoControl = ae;
  bj.DistanceTool = gC;
  bj.ContextMenu = ca;
  bj.MenuItem = fq;
  bj.OperationMask = d9;
  bj.Animation = o;
  bj.ViewAnimation = cG;
  bj.Transitions = ci;
  bj.Event = a6;
  bj.trafficLayer = b9;
  bj.Geolocation = cN;
  bj.Geocoder = V;
  bj.Boundary = gq;
  bj.LocalCity = W;
  bj.LocalSearch = dH;
  bj.Autocomplete = gT;
  bj.BusLineSearch = dW;
  bj.WalkingRoute = a5;
  bj.RidingRoute = bh;
  bj.DrivingRoute = fw;
  bj.TransitRoute = bD;
  bj.RouteSearch = hk;
  function dV(e, i) {
    for (var T in i) {
      e[T] = i[T];
    }
  }
  bj.verify();
  bj.apiLoad();
})(BMapGL, 'BMapGL');
