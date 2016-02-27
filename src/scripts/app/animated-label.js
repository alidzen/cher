define(['jquery'], function() {
    'use strict';

    /**
     * Анимированный лейбл
     * @constructor
     * @param {Object} $animatedLabel - jQuery объект
     *
     */
    var AnimatedLabel = function($animatedLabel) {
        this.$el = $animatedLabel;
        this.$input = this.$el.find('input');
        this.active = 'is-active';
    };

    AnimatedLabel.prototype.init = function() {
        this.bindEvent();
        this.changeState();
    };

    /**
     * events
     */
    AnimatedLabel.prototype.bindEvent = function() {
        this.$input.on('change', this.changeState.bind(this));
    };

    /**
     * проверяет состояние инпута и создает состояние
     * ('removeClass' or 'addClass') для этого инпута
     */
    AnimatedLabel.prototype.changeState = function() {
        var state = (this.$input.val() === '') ? 'removeClass' : 'addClass';
        this.render(state);
    };

    /**
     * @param {string} state - состояние ипута -
     * удаляет или добавяет активный класс
     */
    AnimatedLabel.prototype.render = function(state) {
        this.$input[state](this.active);
    };

    return AnimatedLabel;
});
