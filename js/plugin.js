/*---------------------------------------------------------------------
    File Name: plugin.js
---------------------------------------------------------------------*/

/* Avoid `console` errors in browsers that lack a console.
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

/* bootstrap-spin - v1.0
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */ 

/* ========================================================================
 * bootstrap-spin - v1.0
 * https://github.com/wpic/bootstrap-spin
 * ========================================================================
 * Copyright 2014 WPIC, Hamed Abdollahpour
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

(function ( $ ) {

	$.fn.bootstrapNumber = function( options ) {

		var settings = $.extend({
			upClass: 'default',
			downClass: 'default',
			center: true
			}, options );

		return this.each(function(e) {
			var self = $(this);
			var clone = self.clone();

			var min = self.attr('min');
			var max = self.attr('max');

			function setText(n) {
				if((min && n < min) || (max && n > max)) {
					return false;
				}

				clone.val(n);
				return true;
			}

			var group = $("<div class='input-group'></div>");
			var down = $("<button type='button'><span class='icon icon-minus'></span></button>").attr('class', 'btn btn-' + settings.downClass).click(function() {
				setText(parseInt(clone.val()) - 1);
			});
			var up = $("<button type='button'><span class='icon icon-plus'></span></button>").attr('class', 'btn btn-' + settings.upClass).click(function() {
				setText(parseInt(clone.val()) + 1);
			});
			$("<span class='input-group-btn'></span>").append(down).appendTo(group);
			clone.appendTo(group);
			if(clone) {
				clone.css('text-align', 'center');
			}
			$("<span class='input-group-btn'></span>").append(up).appendTo(group);

			// remove spins from original
			clone.attr('type', 'text').keydown(function (e) {
				if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -0 ||
					(e.keyCode == 65 && e.ctrlKey === true) || 
					(e.keyCode >= 35 && e.keyCode <= 39)) {
					return;
				}
				if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {				
					e.preventDefault();
				}

				var c = String.fromCharCode(e.which);
				var n = parseInt(clone.val() + c);

				if((min && n < min) || (max && n > max)) {
					e.preventDefault();
				}
			});

			self.replaceWith(group);
		});
	};
} ( jQuery ));

