System.register(["modules/core/plugin-logging", "modules/core/plugin-settings", "aurelia-framework"], function (_export) {
  "use strict";

  var log, logLevels, settings, LogManager, Aurelia, ViewLocator, Origin, BackgroundPageAppender;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  _export("configure", configure);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function configure(aurelia) {
    "use strict";

    ViewLocator.prototype.convertOriginToViewUrl = function (origin) {
      var moduleId = origin.moduleId;
      return moduleId.replace('build/modules', 'pages').replace('.js', '') + ".html";
    };

    aurelia.use.standardConfiguration().plugin('aurelia-validation');

    aurelia.start().then(function (a) {
      return a.setRoot('modules/recommendation/app.js');
    });
  }

  return {
    setters: [function (_modulesCorePluginLogging) {
      log = _modulesCorePluginLogging.log;
      logLevels = _modulesCorePluginLogging.logLevels;
    }, function (_modulesCorePluginSettings) {
      settings = _modulesCorePluginSettings.settings;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
      Aurelia = _aureliaFramework.Aurelia;
      ViewLocator = _aureliaFramework.ViewLocator;
      Origin = _aureliaFramework.Origin;
    }],
    execute: function () {
      BackgroundPageAppender = (function () {
        function BackgroundPageAppender() {
          _classCallCheck(this, BackgroundPageAppender);

          this._prefix = "Recommendation Editor";
        }

        _createClass(BackgroundPageAppender, [{
          key: "debug",
          value: function debug(logger, message) {
            for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              rest[_key - 2] = arguments[_key];
            }

            log.debug.apply(log, [this._prefix + " [" + logger.id + "] " + message].concat(rest));
          }
        }, {
          key: "info",
          value: function info(logger, message) {
            for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              rest[_key2 - 2] = arguments[_key2];
            }

            log.info.apply(log, [this._prefix + "  [" + logger.id + "] " + message].concat(rest));
          }
        }, {
          key: "warn",
          value: function warn(logger, message) {
            for (var _len3 = arguments.length, rest = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
              rest[_key3 - 2] = arguments[_key3];
            }

            log.warn.apply(log, [this._prefix + "  [" + logger.id + "] " + message].concat(rest));
          }
        }, {
          key: "error",
          value: function error(logger, message) {
            for (var _len4 = arguments.length, rest = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
              rest[_key4 - 2] = arguments[_key4];
            }

            log.error.apply(log, [this._prefix + "  [" + logger.id + "] " + message].concat(rest));
          }
        }]);

        return BackgroundPageAppender;
      })();

      LogManager.addAppender(new BackgroundPageAppender());
      LogManager.setLevel(logLevels[settings.logLevel]);
    }
  };
});
//# sourceMappingURL=../../modules/recommendation/main.js.map