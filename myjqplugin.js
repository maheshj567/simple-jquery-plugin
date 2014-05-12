( function ($)
{
	// Extend "$.fn" object. Your code will call "$('#css-selector').myJQPlugin" to instantiate the plugin.
	$.fn.myJQPlugin = function(options)
	{
		// options can be null here
		
		// merge plugin defaults and provided options into an empty object and assign the reference to a local variable
	    var opts = $.extend( {}, $.fn.myJQPlugin.defaults, options );

	    // Our plugin implementation code goes here
	    
	    // returning to make it chainable
	    // do "return this.each(function() { plugin implementation code... })" if the jquery object is a collection
	    return this.html(opts.foo);
	}

	// Plugin defaults – added as a property on our plugin function.
	$.fn.myJQPlugin.defaults = {
		foo: "bar"
	};

}) (jQuery);
