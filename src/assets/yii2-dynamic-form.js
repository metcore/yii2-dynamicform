/**
 * yii2-dynamic-form
 *
 * A jQuery plugin to clone form elements in a nested manner, maintaining accessibility.
 *
 * @author Wanderson BraganÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¾ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§a <wanderson.wbc@gmail.com>
 */
(function ($) {
    var pluginName = 'yiiDynamicForm';

    var regexID = /^(.+?)([-\d-]{1,})(.+)$/i;

    var regexName = /(^.+?)([\[\d{1,}\]]{1,})(\[.+\]$)/i;

    $.fn.yiiDynamicForm = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.yiiDynamicForm');
            return false;
        }
    };

    var events = {
        beforeInsert: 'beforeInsert',
        afterInsert: 'afterInsert',
        beforeDelete: 'beforeDelete',
        afterDelete: 'afterDelete',
        limitReached: 'limitReached'
    };

    var methods = {
        init: function (widgetOptions) {
            return this.each(function () {
                widgetOptions.template = _parseTemplate(widgetOptions);
            });
        },

        addItem: function (widgetOptions, e, $elem) {
           _addItem(widgetOptions, e, $elem);
        },

        deleteItem: function (widgetOptions, e, $elem) {
           _deleteItem(widgetOptions, e, $elem);
        },

        updateContainer: function () {
            var widgetOptions = eval($(this).attr('data-dynamicform'));
            _updateAttributes(widgetOptions);
            _restoreSpecialJs(widgetOptions);
            _fixFormValidaton(widgetOptions);
        }
    };

    var _parseTemplate = function(widgetOptions) {
        var $template = $(widgetOptions.template);

        $template.find('div[data-dynamicform]').each(function(){
            var widgetOptions = eval($(this).attr('data-dynamicform'));
            if ($(widgetOptions.widgetItem).length > 1) {
                var item = $(this).find(widgetOptions.widgetItem).first()[0].outerHTML;
                $(this).find(widgetOptions.widgetBody).html(item);
            }
        });

        $template.find('input, textarea, select').each(function() {
            $(this).val('');
        });

        $template.find('input[type="checkbox"]').each(function() {
            var inputName = $(this).attr('name');
            var $inputHidden = $template.find('input[type="hidden"][name="' + inputName + '"]').first();
            if ($inputHidden) {
                $(this).val(1);
                $inputHidden.val(0);
            }
        });

        return $template;
    };

    var _getWidgetOptionsRoot = function(widgetOptions) {
        return eval($(widgetOptions.widgetBody).parents('div[data-dynamicform]').last().attr('data-dynamicform'));
    };

    var _getLevel = function($elem) {
        var level = $elem.parents('div[data-dynamicform]').length;
        level = (level < 0) ? 0 : level;
        return level;
    };

    var _count = function($elem, widgetOptions) {
        return $elem.closest('.' + widgetOptions.widgetContainer).find(widgetOptions.widgetItem).length;
    };

    var _creatIdentifiers = function(level) {
        return new Array(level + 2).join('0').split('');
    };

    var _addItem = function(widgetOptions, e, $elem) {
        var count = _count($elem, widgetOptions);

        if (count < widgetOptions.limit) {
            $toclone = widgetOptions.template;
            $newclone = $toclone.clone(false, false);

            if (widgetOptions.insertPosition === 'top') {
                $elem.closest('.' + widgetOptions.widgetContainer).find(widgetOptions.widgetBody).prepend($newclone);
            } else {
                $elem.closest('.' + widgetOptions.widgetContainer).find(widgetOptions.widgetBody).append($newclone);
            }

            _updateAttributes(widgetOptions);
            _restoreSpecialJs(widgetOptions);
            _fixFormValidaton(widgetOptions);
            $elem.closest('.' + widgetOptions.widgetContainer).triggerHandler(events.afterInsert, $newclone);
        } else {
            // trigger a custom event for hooking
            $elem.closest('.' + widgetOptions.widgetContainer).triggerHandler(events.limitReached, widgetOptions.limit);
        }
    };

    var _removeValidations = function($elem, widgetOptions, count) {
        if (count > 1) {
            $elem.find('div[data-dynamicform]').each(function() {
                var currentWidgetOptions = eval($(this).attr('data-dynamicform'));
                var level           = _getLevel($(this));
                var identifiers     = _creatIdentifiers(level);
                var numItems        = $(this).find(currentWidgetOptions.widgetItem).length;

                for (var i = 1; i <= numItems -1; i++) {
                    var aux = identifiers;
                    aux[level] = i;
                    currentWidgetOptions.fields.forEach(function(input) {
                        var id = input.id.replace("{}", aux.join('-'));
                        if ($("#" + currentWidgetOptions.formId).yiiActiveForm("find", id) !== "undefined") {
                            $("#" + currentWidgetOptions.formId).yiiActiveForm("remove", id);
                        }
                    });
                }
            });

            var level          = _getLevel($elem.closest('.' + widgetOptions.widgetContainer));
            var widgetOptionsRoot       = _getWidgetOptionsRoot(widgetOptions);
            var identifiers    = _creatIdentifiers(level);
            identifiers[0]     = $(widgetOptionsRoot.widgetItem).length - 1;
            identifiers[level] = count - 1;

            widgetOptions.fields.forEach(function(input) {
                var id = input.id.replace("{}", identifiers.join('-'));
                if ($("#" + widgetOptions.formId).yiiActiveForm("find", id) !== "undefined") {
                    $("#" + widgetOptions.formId).yiiActiveForm("remove", id);
                }
            });
        }
    };

    var _deleteItem = function(widgetOptions, e, $elem) {
        var count = _count($elem, widgetOptions);

        if (count > widgetOptions.min) {
            $todelete = $elem.closest(widgetOptions.widgetItem);

            // trigger a custom event for hooking
            var eventResult = $('.' + widgetOptions.widgetContainer).triggerHandler(events.beforeDelete, $todelete);
            if (eventResult !== false) {
                _removeValidations($todelete, widgetOptions, count);
                $todelete.remove();
                _updateAttributes(widgetOptions);
                _restoreSpecialJs(widgetOptions);
                _fixFormValidaton(widgetOptions);
                $('.' + widgetOptions.widgetContainer).triggerHandler(events.afterDelete);
            }
        }
    };

    var _updateAttrID = function(widgetOptions, $elem, index, level) {
        var id = $elem.attr('id');
        var newID = id;

        if (id !== undefined) {
            var matches = id.match(regexID);

            if (matches && matches.length === 4) {
                matches[2] = matches[2].substring(1, matches[2].length - 1);
                var identifiers = matches[2].split('-');
                identifiers[0] = index;

                if (level > 0 && identifiers[level] !== undefined) {
                    identifiers[level] = $elem.closest(widgetOptions.widgetItem).index();
                }

                newID = matches[1] + '-' + identifiers.join('-') + '-' + matches[3];
                $elem.attr('id', newID);
            } else {
                newID = id + index;
                $elem.attr('id', newID);
            }
        }

        if (id !== newID) {
            $elem.closest(widgetOptions.widgetItem).find('.field-' + id).each(function() {
                $(this).removeClass('field-' + id).addClass('field-' + newID);
            });
            // update "for" attribute
            $elem.closest(widgetOptions.widgetItem).find("label[for='" + id + "']").attr('for',newID); 
        }

        return newID;
    };

    var _updateAttrName = function(widgetOptions, $elem, index, level) {
        var name = $elem.attr('name');

        if (name !== undefined) {
            var matches = name.match(regexName);

            if (matches && matches.length === 4) {
                matches[2] = matches[2].replace(/\]\[/g, "-").replace(/\]|\[/g, '');
                var identifiers = matches[2].split('-');
                identifiers[0] = index;

                if (level > 0 && identifiers[level] !== undefined) {
                    identifiers[level] = $elem.closest(widgetOptions.widgetItem).index();
                }

                name = matches[1] + '[' + identifiers.join('][') + ']' + matches[3];
                $elem.attr('name', name);
            }
        }

        return name;
    };

    var _updateAttributes = function(widgetOptions) {
        var widgetOptionsRoot = _getWidgetOptionsRoot(widgetOptions);

        $(widgetOptionsRoot.widgetItem).each(function(index) {
            var $item = $(this);
            var level = 0;
            var currentWidgetOptions = widgetOptionsRoot;

            $(this).find('*').each(function() {
                if ($(this).attr('data-dynamicform') !== undefined) {
                    currentWidgetOptions = eval($(this).attr('data-dynamicform'));
                    level = _getLevel($(this));
                }

                // update "id" attribute
                _updateAttrID(currentWidgetOptions, $(this), index, level);

                // update "name" attribute
                _updateAttrName(currentWidgetOptions, $(this), index, level);
            });
        });
    };

    var _fixFormValidatonInput = function(widgetOptions, input, index, id, name) {
        var attribute = input.baseConfig;
        if (attribute !== undefined) {
            attribute = $.extend(true, {}, attribute);
            attribute.id = id;
            attribute.container = ".field-" + id;
            attribute.input = "#" + id;
            attribute.name = input.name.replace("{}", index);
            attribute.value = $("#" + id).val();
            attribute.status = 0;

            if ($("#" + widgetOptions.formId).yiiActiveForm("find", id) !== "undefined") {
                $("#" + widgetOptions.formId).yiiActiveForm("remove", id);
            }

            $("#" + widgetOptions.formId).yiiActiveForm("add", attribute);
        }
    };

    var _fixFormValidatonInputs = function(widgetOptions, level, index, i) {
         widgetOptions.fields.forEach(function(input) {
            var identifiers    = _creatIdentifiers(level);
            var yiiActiveFormAttribute = $("#" + widgetOptions.formId).yiiActiveForm("find", input.id.replace("{}", identifiers.join('-')));
            if (yiiActiveFormAttribute !== undefined) {
                input.baseConfig   = yiiActiveFormAttribute;
                identifiers[0]     = index;
                identifiers[level] = i;
                var id             = input.id.replace("{}", identifiers.join('-'));
                var name           = input.name.replace("{}", identifiers.join(']['));

                _fixFormValidatonInput(widgetOptions, input, i, id, name);
            }
        });
    };

    var _fixFormValidaton = function(widgetOptions) {
        var widgetOptionsRoot = _getWidgetOptionsRoot(widgetOptions);

        $(widgetOptionsRoot.widgetItem).each(function(index) {
            var $item = $(this);
            var level = 0;
            var currentWidgetOptions = widgetOptionsRoot;
            _fixFormValidatonInputs(widgetOptionsRoot, level, index, index);

            $(this).find('div[data-dynamicform]').each(function() {
                currentWidgetOptions = eval($(this).attr('data-dynamicform'));
                level = _getLevel($(this));

                if (level > 0) {
                    $(this).find(currentWidgetOptions.widgetItem).each(function(i) {

                         _fixFormValidatonInputs(currentWidgetOptions, level, index, i);
                    });
                }
            });
        });
    };

    var _restoreSpecialJs = function(widgetOptions) {
        var widgetOptionsRoot = _getWidgetOptionsRoot(widgetOptions);

        // "kartik-v/yii2-widget-datepicker"
        var $hasDatepicker = $(widgetOptionsRoot.widgetItem).find('[data-krajee-datepicker]');
        if ($hasDatepicker.length > 0) {
            $hasDatepicker.each(function() {
                $(this).parent().removeData().datepicker('remove');
                $(this).parent().datepicker(eval($(this).attr('data-krajee-datepicker')));
            });
        }

        // "kartik-v/yii2-widget-timepicker"
        var $hasTimepicker = $(widgetOptionsRoot.widgetItem).find('[data-krajee-timepicker]');
        if ($hasTimepicker.length > 0) {
            $hasTimepicker.each(function() {
                $(this).removeData().off();
                $(this).parent().find('.bootstrap-timepicker-widget').remove();
                $(this).unbind();
                $(this).timepicker(eval($(this).attr('data-krajee-timepicker')));
            });
        }

        // "kartik-v/yii2-money"
        var $hasMaskmoney = $(widgetOptionsRoot.widgetItem).find('[data-krajee-maskMoney]');
        if ($hasMaskmoney.length > 0) {
            $hasMaskmoney.each(function() {
                $(this).parent().find('input').removeData().off();
                var id = '#' + $(this).attr('id');
                var displayID  = id + '-disp';
                $(displayID).maskMoney('destroy');
                $(displayID).maskMoney(eval($(this).attr('data-krajee-maskMoney')));
                $(displayID).maskMoney('mask', parseFloat($(id).val()));
                $(displayID).on('change', function () {
                    var numDecimal = $(displayID).maskMoney('unmasked')[0];
                    $(id).val(numDecimal);
                    $(id).trigger('change');
                });
            });
        }

        // "kartik-v/yii2-widget-fileinput"
        var $hasFileinput = $(widgetOptionsRoot.widgetItem).find('[data-krajee-fileinput]');
        if ($hasFileinput.length > 0) {
            $hasFileinput.each(function() {
                $(this).fileinput(eval($(this).attr('data-krajee-fileinput')));
            });
        }

        // "kartik-v/yii2-widget-touchspin"
        var $hasTouchSpin = $(widgetOptionsRoot.widgetItem).find('[data-krajee-TouchSpin]');
        if ($hasTouchSpin.length > 0) {
            $hasTouchSpin.each(function() {
                $(this).TouchSpin('destroy');
                $(this).TouchSpin(eval($(this).attr('data-krajee-TouchSpin')));
            });
        }

        // "kartik-v/yii2-widget-colorinput"
        var $hasSpectrum = $(widgetOptionsRoot.widgetItem).find('[data-krajee-spectrum]');
        if ($hasSpectrum.length > 0) {
            $hasSpectrum.each(function() {
                var id = '#' + $(this).attr('id');
                var sourceID  = id + '-source';
                $(sourceID).spectrum('destroy');
                $(sourceID).unbind();
                $(id).unbind();
                var configSpectrum = eval($(this).attr('data-krajee-spectrum'));
                configSpectrum.change = function (color) {
                    jQuery(id).val(color.toString());
                };
                $(sourceID).attr('name', $(sourceID).attr('id'));
                $(sourceID).spectrum(configSpectrum);
                $(sourceID).spectrum('set', jQuery(id).val());
                $(id).on('change', function(){
                    $(sourceID).spectrum('set', jQuery(id).val());
                });
            });
        }

        // "kartik-v/yii2-widget-depdrop"
        var $hasDepdrop = $(widgetOptionsRoot.widgetItem).find('[data-krajee-depdrop]');
        if ($hasDepdrop.length > 0) {
            $hasDepdrop.each(function() {
                $(this).removeData().off();
                $(this).unbind();
                var configDepdrop = eval($(this).attr('data-krajee-depdrop'));
                var inputID = $(this).attr('id');
                var matchID = inputID.match(regex);
                if (matchID && matchID.length === 4) {
                    for (index = 0; index < configDepdrop.depends.length; ++index) {
                        var match = configDepdrop.depends[index].match(regex);
                        if (match && match.length === 4) {
                            configDepdrop.depends[index] = match[1] + matchID[2] + match[3];
                        }
                    }
                }
                $(this).depdrop(configDepdrop);
            });
        }
        // "kartik-v/yii2-widget-select2"
        var $hasSelect2 = $(widgetOptionsRoot.widgetItem).find('[data-krajee-select2]');
        if ($hasSelect2.length > 0) {
            $hasSelect2.each(function() {

                if ($(this).data('select2') === undefined) {

                    $(this).removeData().off();

                    $(this).unbind();
                    $(this).val("");
                    $(this).prop('disabled', false);
                    $(this).removeAttr("readonly");

                }

                var id = $(this).attr('id');
                var configSelect2 = eval($(this).attr('data-krajee-select2'));

                if ($(this).data('select2')) {
                    $(this).select2('destroy');
                }

                var configDepdrop = $(this).data('depdrop');
                if (configDepdrop) {
                    configDepdrop = $.extend(true, {}, configDepdrop);
                    $(this).removeData().off();
                    $(this).unbind();
                    _restoreKrajeeDepdrop($(this));
                }

                $.when($('#' + id).select2(configSelect2)).done(initS2Loading(id, '.select2-container--krajee'));

                var kvClose = 'kv_close_' + id.replace(/\-/g, '_');

                // $('#' + id).on('select2:opening', function(ev) {
                //     initSelect2DropStyle(id, kvClose, ev);
                // });

                $('#' + id).on('select2:unselect', function() {
                    window[kvClose] = true;
                });

               if (configDepdrop) {
                    var loadingText = (configDepdrop.loadingText) ? configDepdrop.loadingText : 'Loading ...';
                    initDepdropS2(id, loadingText);
                }
            });
        }
    };

})(window.jQuery);