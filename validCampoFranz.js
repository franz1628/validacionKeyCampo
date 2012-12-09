(function( $ ) {
	$.fn.validCampoFranz = function(cadena) {
    	$(this).on({
			keypress : function(e){
    			var key = e.which,
    				keye = e.keyCode,
    				tecla = String.fromCharCode(key).toLowerCase(),
    				letras = cadena;
			    if(letras.indexOf(tecla)==-1 && keye!=9&& (key==37 || keye!=37)&& (keye!=39 || key==39) && keye!=8 && (keye!=46 || key==46) || key==161){
			    	e.preventDefault();
			    }
			}
		});
	};
})( jQuery );