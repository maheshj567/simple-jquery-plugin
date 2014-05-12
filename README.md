simple-jquery-plugin
====================

A simple/example jquery plugin that can be taken as a base to create your own plugin. Considers best practices as provided in official jQuery documentation.

Some best practices
---------------------

- chaining - always return the jquery object
- protect $ using anonymous function that takes jQuery reference as a parameter
- minimize plugin footprint by reducing the number of functions exposed
- better to loop among objects since jquery selectors often return collections
- accept options and provide sensible defaults using $.extend
