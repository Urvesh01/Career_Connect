import {
  CommonModule,
  isPlatformBrowser
} from "./chunk-E6BXLYA4.js";
import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  VERSION
} from "./chunk-LZGPYKNY.js";
import "./chunk-BDPS6ZGI.js";
import "./chunk-6DOJV2XM.js";
import "./chunk-EXPDPFJV.js";
import "./chunk-32HXC6B6.js";

// node_modules/@cloudinary/angular-5.x/node_modules/tslib/tslib.es6.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

// node_modules/@cloudinary/angular-5.x/fesm5/cloudinary-angular-5.x.js
var isJsonLikeString = function(str) {
  return str && typeof str === "string" && str.trim().match(/^{[\s\S]*?}$/) !== null;
};
var isArrayLikeString = function(str) {
  return str && typeof str === "string" && str.trim().match(/^\[[\s\S]*?]$/) !== null;
};
var isNamedNodeMap = function(obj) {
  return obj && (obj.constructor.name === "NamedNodeMap" || obj instanceof NamedNodeMap);
};
var namedNodeMapToObject = function(source) {
  var target = {};
  Object.keys(source).forEach(function(index) {
    var name = source[index].name;
    var value = source[index].value;
    target[name] = value;
  });
  return target;
};
var transformKeyNames = function(obj) {
  var _obj = obj;
  if (isJsonLikeString(obj) || isArrayLikeString(obj)) {
    if (isArrayLikeString(obj)) {
      obj = obj.replace(/'/g, '"');
    }
    _obj = JSON.parse(obj);
  } else if (isNamedNodeMap(obj)) {
    _obj = namedNodeMapToObject(obj);
  }
  if (Array.isArray(_obj)) {
    _obj = _obj.map(function(currentValue) {
      return transformKeyNames(currentValue);
    });
  } else if (typeof _obj === "object") {
    Object.keys(_obj).forEach(function(key) {
      var kebabKey = key.replace(/-/g, "_").toLocaleLowerCase().replace(/^cld(-|_)?/, "");
      var kebabValue = transformKeyNames(_obj[key]);
      delete _obj[key];
      _obj[kebabKey] = kebabValue;
    });
  }
  return _obj;
};
var Cloudinary = (
  /** @class */
  function() {
    function Cloudinary2(cloudinaryJsLib, configuration) {
      if (cloudinaryJsLib.CloudinaryJQuery) {
        this._cloudinaryInstance = new cloudinaryJsLib.CloudinaryJQuery(configuration);
      } else {
        this._cloudinaryInstance = new cloudinaryJsLib.Cloudinary(configuration);
      }
    }
    Object.defineProperty(Cloudinary2.prototype, "cloudinaryInstance", {
      get: (
        /**
        * @return {?}
        */
        function() {
          return this._cloudinaryInstance;
        }
      ),
      enumerable: true,
      configurable: true
    });
    Cloudinary2.prototype.config = /**
    * @return {?}
    */
    function() {
      return this._cloudinaryInstance.config();
    };
    Cloudinary2.prototype.updateConfig = /**
    * @param {?} configuration
    * @return {?}
    */
    function(configuration) {
      this._cloudinaryInstance.config(configuration);
    };
    Cloudinary2.prototype.url = /**
    * @param {...?} parameters
    * @return {?}
    */
    function() {
      var parameters = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        parameters[_i] = arguments[_i];
      }
      var _a;
      return (_a = this._cloudinaryInstance).url.apply(_a, __spread(parameters));
    };
    Cloudinary2.prototype.imageTag = /**
    * @param {...?} parameters
    * @return {?}
    */
    function() {
      var parameters = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        parameters[_i] = arguments[_i];
      }
      var _a;
      return (_a = this._cloudinaryInstance).imageTag.apply(_a, __spread(parameters));
    };
    Cloudinary2.prototype.videoTag = /**
    * @param {...?} parameters
    * @return {?}
    */
    function() {
      var parameters = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        parameters[_i] = arguments[_i];
      }
      var _a;
      return (_a = this._cloudinaryInstance).videoTag.apply(_a, __spread(parameters));
    };
    Cloudinary2.prototype.responsive = /**
    * @param {?} img
    * @param {?} options
    * @return {?}
    */
    function(img, options) {
      this._cloudinaryInstance.cloudinary_update(img, options);
      this._cloudinaryInstance.responsive(options, false);
    };
    Cloudinary2.prototype.toCloudinaryAttributes = /**
    * Transforms a set of attributes and chained transformations to an options object that can be consumed by Cloudinary JS API
    * @param {?} attributes HTML element attributes
    * @param {?=} childTransformations QueryList with the element's <cl-transformation> children for chained transformations
    * @return {?} An options object that can be consumed by Cloudinary JS API
    */
    function(attributes, childTransformations) {
      var _this = this;
      var options = transformKeyNames(attributes);
      if (childTransformations && childTransformations.length > 0) {
        options.transformation = [];
        childTransformations.forEach(function(transformation) {
          options.transformation.push(_this.toCloudinaryAttributes(transformation.getAttributes()));
        });
      }
      if (options.responsive === "" || options.responsive === "true" || options.responsive === true) {
        options.responsive = true;
      }
      return options;
    };
    ;
    return Cloudinary2;
  }()
);
if (false) {
  Cloudinary.prototype._cloudinaryInstance;
}
function provideCloudinary(cloudinaryJsLib, configuration) {
  return {
    provide: Cloudinary,
    useFactory: function() {
      return new Cloudinary(cloudinaryJsLib, configuration);
    }
  };
}
var isBrowser = function() {
  return typeof window !== "undefined";
};
var CloudinaryTransformationDirective = (
  /** @class */
  function() {
    function CloudinaryTransformationDirective2(el) {
      this.el = el;
    }
    CloudinaryTransformationDirective2.prototype.getAttributes = /**
    * @return {?}
    */
    function() {
      return this.el.nativeElement.attributes;
    };
    CloudinaryTransformationDirective2.decorators = [{
      type: Directive,
      args: [{
        selector: "cl-transformation"
      }]
    }];
    CloudinaryTransformationDirective2.ctorParameters = function() {
      return [{
        type: ElementRef
      }];
    };
    return CloudinaryTransformationDirective2;
  }()
);
if (false) {
  CloudinaryTransformationDirective.prototype.el;
}
var CloudinaryPlaceHolder = (
  /** @class */
  function() {
    function CloudinaryPlaceHolder2(cloudinary, renderer, el) {
      this.cloudinary = cloudinary;
      this.renderer = renderer;
      this.el = el;
      this.options = {};
    }
    CloudinaryPlaceHolder2.prototype.setWidth = /**
    * @param {?} width
    * @return {?}
    */
    function(width) {
      this.itemWidth = width;
    };
    CloudinaryPlaceHolder2.prototype.setHeight = /**
    * @param {?} height
    * @return {?}
    */
    function(height) {
      this.itemHeight = height;
    };
    CloudinaryPlaceHolder2.prototype.setPublicId = /**
    * @param {?} id
    * @return {?}
    */
    function(id) {
      this.publicId = id;
    };
    CloudinaryPlaceHolder2.prototype.ngAfterContentChecked = /**
    * @return {?}
    */
    function() {
      var imageTag = this.cloudinary.imageTag(this.publicId, this.options);
      this.setElementAttributes(this.el.nativeElement.children[0], imageTag.attributes());
      this.placeholderImg = this.getPlaceholderImage();
    };
    CloudinaryPlaceHolder2.prototype.getPlaceholderImage = /**
    * @return {?}
    */
    function() {
      if (this.type === "predominant-color" && this.itemHeight && this.itemWidth) {
        return this.cloudinary.url(this.publicId, __assign({
          placeholder: "predominant-color-pixel"
        }, this.options));
      } else {
        return this.cloudinary.url(this.publicId, __assign({
          placeholder: this.type || true
        }, this.options));
      }
    };
    CloudinaryPlaceHolder2.prototype.setElementAttributes = /**
    * @param {?} element
    * @param {?} attributesLiteral
    * @return {?}
    */
    function(element, attributesLiteral) {
      var _this = this;
      Object.keys(attributesLiteral).forEach(function(attrName) {
        if (attrName !== "src" && attrName !== "style") {
          _this.renderer.setAttribute(element, attrName, attributesLiteral[attrName]);
        }
      });
    };
    CloudinaryPlaceHolder2.decorators = [{
      type: Component,
      args: [{
        selector: "cl-placeholder",
        template: '<img [src]="this.placeholderImg">'
      }]
    }];
    CloudinaryPlaceHolder2.ctorParameters = function() {
      return [{
        type: Cloudinary
      }, {
        type: Renderer2
      }, {
        type: ElementRef
      }];
    };
    CloudinaryPlaceHolder2.propDecorators = {
      type: [{
        type: Input,
        args: ["type"]
      }],
      itemWidth: [{
        type: HostBinding,
        args: ["style.width"]
      }],
      itemHeight: [{
        type: HostBinding,
        args: ["style.height"]
      }],
      publicId: [{
        type: HostBinding,
        args: ["attr.public-id"]
      }]
    };
    return CloudinaryPlaceHolder2;
  }()
);
if (false) {
  CloudinaryPlaceHolder.prototype.type;
  CloudinaryPlaceHolder.prototype.itemWidth;
  CloudinaryPlaceHolder.prototype.itemHeight;
  CloudinaryPlaceHolder.prototype.publicId;
  CloudinaryPlaceHolder.prototype.options;
  CloudinaryPlaceHolder.prototype.placeholderImg;
  CloudinaryPlaceHolder.prototype.cloudinary;
  CloudinaryPlaceHolder.prototype.renderer;
  CloudinaryPlaceHolder.prototype.el;
}
var APP_VERSION = "1.5.4";
var SDKAnalyticsConstants = {
  sdkSemver: APP_VERSION,
  techVersion: VERSION.full,
  sdkCode: "K"
};
var CloudinaryImage = (
  /** @class */
  function() {
    function CloudinaryImage2(el, cloudinary, renderer) {
      this.el = el;
      this.cloudinary = cloudinary;
      this.renderer = renderer;
      this.onLoad = new EventEmitter();
      this.onError = new EventEmitter();
      this.shouldShowPlaceHolder = true;
      this.options = {};
    }
    CloudinaryImage2.prototype.ngOnInit = /**
    * @return {?}
    */
    function() {
      var _this = this;
      if (isBrowser()) {
        this.observer = new MutationObserver(function() {
          _this.loadImage();
        });
        var config = {
          attributes: true,
          childList: true
        };
        this.observer.observe(this.el.nativeElement, config);
      }
    };
    CloudinaryImage2.prototype.ngOnChanges = /**
    * @param {?} changes
    * @return {?}
    */
    function(changes) {
      if (changes.publicId && !changes.publicId.isFirstChange()) {
        this.loadImage();
      }
    };
    CloudinaryImage2.prototype.ngOnDestroy = /**
    * @return {?}
    */
    function() {
      if (this.observer && this.observer.disconnect) {
        this.observer.disconnect();
      }
    };
    CloudinaryImage2.prototype.ngAfterViewInit = /**
    * @return {?}
    */
    function() {
      this.loadImage();
    };
    CloudinaryImage2.prototype.ngAfterContentChecked = /**
    * @return {?}
    */
    function() {
      if (this.width && this.placeholderComponent) {
        this.placeholderComponent.setWidth(this.width);
      }
      if (this.height && this.placeholderComponent) {
        this.placeholderComponent.setHeight(this.height);
      }
      if (this.placeholderComponent) {
        this.placeholderComponent.setPublicId(this.publicId);
      }
    };
    CloudinaryImage2.prototype.setPlaceHolderStyle = /**
    * appends opacity and position to cl-img->img when placeholder is displayed
    * removes styling from cl-img->img when placeholder does not display
    * @return {?}
    */
    function() {
      if (this.shouldShowPlaceHolder) {
        this.renderer.setStyle(this.el.nativeElement.children[0], "opacity", "0");
        this.renderer.setStyle(this.el.nativeElement.children[0], "position", "absolute");
      } else {
        this.renderer.removeAttribute(this.el.nativeElement.children[0], "style");
      }
    };
    CloudinaryImage2.prototype.hasLoaded = /**
    * @return {?}
    */
    function() {
      this.shouldShowPlaceHolder = false;
    };
    CloudinaryImage2.prototype.loadImage = /**
    * @return {?}
    */
    function() {
      var _this = this;
      if (isBrowser()) {
        if (!this.publicId) {
          throw new Error("You must set the public id of the image to load, e.g. <cl-image public-id={{photo.public_id}}...></cl-image>");
        }
        var nativeElement = this.el.nativeElement;
        var image = nativeElement.children[0];
        image.onload = function(e) {
          _this.onLoad.emit(e);
        };
        image.onerror = function(e) {
          _this.onError.emit(e);
        };
        this.options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
        if (this.clientHints || typeof this.clientHints === "undefined" && this.cloudinary.config().client_hints) {
          delete this.options["class"];
          delete this.options["data-src"];
          delete this.options["responsive"];
        }
        if (this.cloudinary.config().urlAnalytics) {
          this.options = __assign({}, SDKAnalyticsConstants, this.options);
        }
        if (this.placeholderComponent) {
          this.placeholderHandler(this.options, image);
        }
        if (this.accessibility) {
          this.options["src"] = this.accessibilityModeHandler();
        }
        var imageTag = this.cloudinary.imageTag(this.publicId, this.options);
        this.setElementAttributes(image, imageTag.attributes());
        if (this.options["responsive"]) {
          this.cloudinary.responsive(image, this.options);
        }
      }
    };
    CloudinaryImage2.prototype.setElementAttributes = /**
    * @param {?} element
    * @param {?} attributesLiteral
    * @return {?}
    */
    function(element, attributesLiteral) {
      var _this = this;
      Object.keys(attributesLiteral).forEach(function(attrName) {
        var attr = attrName === "src" && _this.loading === "lazy" ? "data-src" : attrName;
        _this.renderer.setAttribute(element, attr, attributesLiteral[attrName]);
      });
      if (this.placeholderComponent) {
        this.setPlaceHolderStyle();
      }
    };
    CloudinaryImage2.prototype.placeholderHandler = /**
    * Handles placeholder options
    * In case of responsive sets width from resize
    * In case width or height is known takes 10% of original dimension
    * @param {?} options
    * @param {?} image
    * @return {?}
    */
    function(options, image) {
      var placeholderOptions = __assign({}, options);
      if (placeholderOptions["width"]) {
        if (placeholderOptions["width"] === "auto") {
          placeholderOptions["width"] = image.getAttribute("data-width");
        }
      }
      this.placeholderComponent.options = placeholderOptions;
    };
    CloudinaryImage2.prototype.accessibilityModeHandler = /**
    * @return {?}
    */
    function() {
      return this.cloudinary.url(this.publicId, __assign({
        accessibility: this.accessibility
      }, this.options));
    };
    CloudinaryImage2.decorators = [{
      type: Component,
      args: [{
        selector: "cl-image",
        template: `<img (load)="hasLoaded()">
  <div *ngIf="placeholderComponent && shouldShowPlaceHolder" [style.display]="shouldShowPlaceHolder ? 'inline' : 'none'">
    <ng-content></ng-content>
  </div>
  `
      }]
    }];
    CloudinaryImage2.ctorParameters = function() {
      return [{
        type: ElementRef
      }, {
        type: Cloudinary
      }, {
        type: Renderer2
      }];
    };
    CloudinaryImage2.propDecorators = {
      publicId: [{
        type: Input,
        args: ["public-id"]
      }],
      clientHints: [{
        type: Input,
        args: ["client-hints"]
      }],
      loading: [{
        type: Input,
        args: ["loading"]
      }],
      width: [{
        type: Input,
        args: ["width"]
      }],
      height: [{
        type: Input,
        args: ["height"]
      }],
      accessibility: [{
        type: Input,
        args: ["accessibility"]
      }],
      transformations: [{
        type: ContentChildren,
        args: [CloudinaryTransformationDirective]
      }],
      placeholderComponent: [{
        type: ContentChild,
        args: [CloudinaryPlaceHolder]
      }],
      onLoad: [{
        type: Output
      }],
      onError: [{
        type: Output
      }]
    };
    return CloudinaryImage2;
  }()
);
if (false) {
  CloudinaryImage.prototype.publicId;
  CloudinaryImage.prototype.clientHints;
  CloudinaryImage.prototype.loading;
  CloudinaryImage.prototype.width;
  CloudinaryImage.prototype.height;
  CloudinaryImage.prototype.accessibility;
  CloudinaryImage.prototype.transformations;
  CloudinaryImage.prototype.placeholderComponent;
  CloudinaryImage.prototype.onLoad;
  CloudinaryImage.prototype.onError;
  CloudinaryImage.prototype.observer;
  CloudinaryImage.prototype.shouldShowPlaceHolder;
  CloudinaryImage.prototype.options;
  CloudinaryImage.prototype.el;
  CloudinaryImage.prototype.cloudinary;
  CloudinaryImage.prototype.renderer;
}
var CloudinaryVideo = (
  /** @class */
  function() {
    function CloudinaryVideo2(el, cloudinary, platformId) {
      this.el = el;
      this.cloudinary = cloudinary;
      this.platformId = platformId;
      this.play = new EventEmitter();
      this.loadstart = new EventEmitter();
      this.playing = new EventEmitter();
      this.error = new EventEmitter();
      this.ended = new EventEmitter();
    }
    CloudinaryVideo2.prototype.ngOnInit = /**
    * @return {?}
    */
    function() {
      var _this = this;
      if (typeof MutationObserver !== "undefined") {
        this.observer = new MutationObserver(function() {
          _this.loadVideo(_this.publicId);
        });
        var config = {
          attributes: true,
          childList: true
        };
        this.observer.observe(this.el.nativeElement, config);
      }
    };
    CloudinaryVideo2.prototype.ngOnChanges = /**
    * @param {?} changes
    * @return {?}
    */
    function(changes) {
      if (changes.publicId && !changes.publicId.isFirstChange()) {
        this.loadVideo(changes.publicId.currentValue);
      }
    };
    CloudinaryVideo2.prototype.ngOnDestroy = /**
    * @return {?}
    */
    function() {
      if (this.observer && this.observer.disconnect) {
        this.observer.disconnect();
      }
    };
    CloudinaryVideo2.prototype.ngAfterViewInit = /**
    * @return {?}
    */
    function() {
      if (!this.publicId) {
        throw new Error("You must set the public id of the video to load, e.g. <cl-video public-id={{video.public_id}}...></cl-video>");
      }
      this.loadVideo(this.publicId);
    };
    CloudinaryVideo2.prototype.loadVideo = /**
    * @param {?} publicId
    * @return {?}
    */
    function(publicId) {
      if (isPlatformBrowser(this.platformId)) {
        var nativeElement = this.el.nativeElement;
        var video = nativeElement.children[0];
        var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
        var videoTag = this.cloudinary.videoTag(publicId, options);
        this.appendSourceElements(video, videoTag.content());
        this.setElementAttributes(video, videoTag.attributes());
      }
    };
    CloudinaryVideo2.prototype.setElementAttributes = /**
    * @param {?} element
    * @param {?} attributesLiteral
    * @return {?}
    */
    function(element, attributesLiteral) {
      Object.keys(attributesLiteral).forEach(function(attrName) {
        element.setAttribute(attrName, attributesLiteral[attrName]);
      });
    };
    CloudinaryVideo2.prototype.appendSourceElements = /**
    * @param {?} element
    * @param {?} html
    * @return {?}
    */
    function(element, html) {
      var fragment = document.createDocumentFragment();
      element.innerHTML = html;
      while (element.childNodes[0]) {
        fragment.appendChild(element.childNodes[0]);
      }
      element.appendChild(fragment);
    };
    CloudinaryVideo2.prototype.emitPlayEvent = /**
    * @return {?}
    */
    function() {
      this.play.emit();
    };
    CloudinaryVideo2.prototype.emitLoadstartEvent = /**
    * @return {?}
    */
    function() {
      this.loadstart.emit();
    };
    CloudinaryVideo2.prototype.emitPlayingEvent = /**
    * @return {?}
    */
    function() {
      this.playing.emit();
    };
    CloudinaryVideo2.prototype.emitErrorEvent = /**
    * @return {?}
    */
    function() {
      this.error.emit();
    };
    CloudinaryVideo2.prototype.emitEndedEvent = /**
    * @return {?}
    */
    function() {
      this.ended.emit();
    };
    CloudinaryVideo2.decorators = [{
      type: Component,
      args: [{
        selector: "cl-video",
        template: '<video (play)="emitPlayEvent()" (loadstart)="emitLoadstartEvent()" (playing)="emitPlayingEvent()" (error)="emitErrorEvent" (ended)="emitEndedEvent"></video>'
      }]
    }];
    CloudinaryVideo2.ctorParameters = function() {
      return [{
        type: ElementRef
      }, {
        type: Cloudinary
      }, {
        type: Object,
        decorators: [{
          type: Inject,
          args: [PLATFORM_ID]
        }]
      }];
    };
    CloudinaryVideo2.propDecorators = {
      publicId: [{
        type: Input,
        args: ["public-id"]
      }],
      play: [{
        type: Output
      }],
      loadstart: [{
        type: Output
      }],
      playing: [{
        type: Output
      }],
      error: [{
        type: Output
      }],
      ended: [{
        type: Output
      }],
      transformations: [{
        type: ContentChildren,
        args: [CloudinaryTransformationDirective]
      }]
    };
    return CloudinaryVideo2;
  }()
);
if (false) {
  CloudinaryVideo.prototype.publicId;
  CloudinaryVideo.prototype.play;
  CloudinaryVideo.prototype.loadstart;
  CloudinaryVideo.prototype.playing;
  CloudinaryVideo.prototype.error;
  CloudinaryVideo.prototype.ended;
  CloudinaryVideo.prototype.transformations;
  CloudinaryVideo.prototype.observer;
  CloudinaryVideo.prototype.el;
  CloudinaryVideo.prototype.cloudinary;
  CloudinaryVideo.prototype.platformId;
}
var CloudinaryImageSourceDirective = (
  /** @class */
  function() {
    function CloudinaryImageSourceDirective2(el, cloudinary) {
      this.el = el;
      this.cloudinary = cloudinary;
    }
    CloudinaryImageSourceDirective2.prototype.ngAfterViewInit = /**
    * @return {?}
    */
    function() {
      if (isBrowser()) {
        var attrName = void 0;
        var propertyValue = void 0;
        if (this.clHref) {
          attrName = "href";
          propertyValue = this.clHref;
        } else if (this.clSrc) {
          attrName = "src";
          propertyValue = this.clSrc;
        } else if (this.clSrcset) {
          attrName = "srcset";
          propertyValue = this.clSrcset;
        }
        var isSvg = false;
        if (this.clHref && toString.call(this.el.nativeElement["href"] === "[object SVGAnimatedString]")) {
          this.el.nativeElement.setAttribute("xlinkHref", "xlink:href");
          isSvg = true;
        }
        if (!attrName || !propertyValue) {
          throw new Error("Directive value is missing for clHref/clSrc/clSrcset");
        }
        var nativeElement = this.el.nativeElement;
        var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
        var attrValue = this.cloudinary.url(propertyValue, options);
        this.el.nativeElement.setAttribute(attrName, attrValue);
        var msie = this.el.nativeElement.ownerDocument.documentMode;
        if (msie && !isSvg) {
          this.el.nativeElement[attrName] = attrValue;
        }
      }
    };
    ;
    CloudinaryImageSourceDirective2.decorators = [{
      type: Directive,
      args: [{
        selector: "[clHref], [clSrc], [clSrcset]"
      }]
    }];
    CloudinaryImageSourceDirective2.ctorParameters = function() {
      return [{
        type: ElementRef
      }, {
        type: Cloudinary
      }];
    };
    CloudinaryImageSourceDirective2.propDecorators = {
      clHref: [{
        type: Input
      }],
      clSrc: [{
        type: Input
      }],
      clSrcset: [{
        type: Input
      }],
      transformations: [{
        type: ContentChildren,
        args: [CloudinaryTransformationDirective]
      }]
    };
    return CloudinaryImageSourceDirective2;
  }()
);
if (false) {
  CloudinaryImageSourceDirective.prototype.clHref;
  CloudinaryImageSourceDirective.prototype.clSrc;
  CloudinaryImageSourceDirective.prototype.clSrcset;
  CloudinaryImageSourceDirective.prototype.transformations;
  CloudinaryImageSourceDirective.prototype.el;
  CloudinaryImageSourceDirective.prototype.cloudinary;
}
var CloudinaryBackgroundImageDirective = (
  /** @class */
  function() {
    function CloudinaryBackgroundImageDirective2(renderer, el, cloudinary) {
      this.renderer = renderer;
      this.el = el;
      this.cloudinary = cloudinary;
      this.position = "center";
    }
    CloudinaryBackgroundImageDirective2.prototype.isBrowser = /**
    * @return {?}
    */
    function() {
      return typeof window !== "undefined";
    };
    CloudinaryBackgroundImageDirective2.prototype.ngAfterViewInit = /**
    * @return {?}
    */
    function() {
      if (this.isBrowser()) {
        var nativeElement = this.el.nativeElement;
        var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
        var imageUrl = this.cloudinary.url(this.clBackgroundImage, options);
        this.renderer.setStyle(nativeElement, "background-image", "url('" + imageUrl + "')");
        this.renderer.setStyle(nativeElement, "background-repeat", "no-repeat");
        this.renderer.setStyle(nativeElement, "background-position", this.position);
      }
    };
    CloudinaryBackgroundImageDirective2.decorators = [{
      type: Directive,
      args: [{
        selector: "[clBackgroundImage]"
      }]
    }];
    CloudinaryBackgroundImageDirective2.ctorParameters = function() {
      return [{
        type: Renderer2
      }, {
        type: ElementRef
      }, {
        type: Cloudinary
      }];
    };
    CloudinaryBackgroundImageDirective2.propDecorators = {
      clBackgroundImage: [{
        type: Input
      }],
      position: [{
        type: Input
      }],
      transformations: [{
        type: ContentChildren,
        args: [CloudinaryTransformationDirective]
      }]
    };
    return CloudinaryBackgroundImageDirective2;
  }()
);
if (false) {
  CloudinaryBackgroundImageDirective.prototype.clBackgroundImage;
  CloudinaryBackgroundImageDirective.prototype.position;
  CloudinaryBackgroundImageDirective.prototype.transformations;
  CloudinaryBackgroundImageDirective.prototype.renderer;
  CloudinaryBackgroundImageDirective.prototype.el;
  CloudinaryBackgroundImageDirective.prototype.cloudinary;
}
var LazyLoadDirective = (
  /** @class */
  function() {
    function LazyLoadDirective2(el) {
      this.el = el;
    }
    LazyLoadDirective2.prototype.ngAfterViewInit = /**
    * @return {?}
    */
    function() {
      if (isBrowser()) {
        if (!this.isNativeLazyLoadSupported() && this.isLazyLoadSupported()) {
          this.lazyLoad();
        } else {
          this.loadImage();
        }
      }
    };
    LazyLoadDirective2.prototype.loadImage = /**
    * @return {?}
    */
    function() {
      var nativeElement = this.el.nativeElement;
      var image = nativeElement.children[0];
      image.setAttribute("src", image.dataset.src);
    };
    LazyLoadDirective2.prototype.isLazyLoadSupported = /**
    * @return {?}
    */
    function() {
      return window && "IntersectionObserver" in window;
    };
    LazyLoadDirective2.prototype.isNativeLazyLoadSupported = /**
    * @return {?}
    */
    function() {
      return "loading" in HTMLImageElement.prototype;
    };
    LazyLoadDirective2.prototype.lazyLoad = /**
    * @return {?}
    */
    function() {
      var _this = this;
      var options = {
        rootMargin: "0px 0px -50% 0px"
      };
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            _this.loadImage();
            observer.unobserve(entry.target);
          }
        }, options);
      });
      observer.observe(this.el.nativeElement);
    };
    LazyLoadDirective2.decorators = [{
      type: Directive,
      args: [{
        selector: "cl-image[loading=lazy]"
      }]
    }];
    LazyLoadDirective2.ctorParameters = function() {
      return [{
        type: ElementRef
      }];
    };
    return LazyLoadDirective2;
  }()
);
if (false) {
  LazyLoadDirective.prototype.el;
}
var CLOUDINARY_LIB = new InjectionToken("CLOUDINARY_LIB");
var CLOUDINARY_CONFIGURATION = new InjectionToken("CLOUDINARY_CONFIGURATION");
function createCloudinary(cloudinaryJsLib, configuration) {
  return new Cloudinary(cloudinaryJsLib, configuration);
}
var CloudinaryModule = (
  /** @class */
  function() {
    function CloudinaryModule2() {
    }
    CloudinaryModule2.forRoot = /**
    * @param {?} cloudinaryJsLib
    * @param {?} cloudinaryConfiguration
    * @return {?}
    */
    function(cloudinaryJsLib, cloudinaryConfiguration) {
      return {
        ngModule: CloudinaryModule2,
        providers: [{
          provide: CLOUDINARY_LIB,
          useValue: cloudinaryJsLib
        }, {
          provide: CLOUDINARY_CONFIGURATION,
          useValue: cloudinaryConfiguration
        }, {
          provide: Cloudinary,
          useFactory: createCloudinary,
          deps: [CLOUDINARY_LIB, CLOUDINARY_CONFIGURATION]
        }]
      };
    };
    CloudinaryModule2.decorators = [{
      type: NgModule,
      args: [{
        imports: [CommonModule],
        declarations: [CloudinaryImageSourceDirective, CloudinaryBackgroundImageDirective, CloudinaryImage, CloudinaryVideo, CloudinaryTransformationDirective, LazyLoadDirective, CloudinaryPlaceHolder],
        exports: [CloudinaryImageSourceDirective, CloudinaryBackgroundImageDirective, CloudinaryImage, CloudinaryVideo, CloudinaryTransformationDirective, LazyLoadDirective, CloudinaryPlaceHolder]
      }]
    }];
    return CloudinaryModule2;
  }()
);
export {
  CLOUDINARY_CONFIGURATION,
  CLOUDINARY_LIB,
  Cloudinary,
  CloudinaryBackgroundImageDirective,
  CloudinaryImage,
  CloudinaryImageSourceDirective,
  CloudinaryModule,
  CloudinaryPlaceHolder,
  CloudinaryTransformationDirective,
  CloudinaryVideo,
  LazyLoadDirective,
  createCloudinary,
  isBrowser,
  isJsonLikeString,
  isNamedNodeMap,
  namedNodeMapToObject,
  provideCloudinary,
  transformKeyNames
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@cloudinary_angular-5__x.js.map
