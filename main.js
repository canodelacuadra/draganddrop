$(document).ready(function(){
	//empieza el código
	//hacemos arrastrables los elementos de la parte izquierda del documento
  $('.drag').draggable({
		containment:'#tapete',//restringe donde se puede arrastrar:
		cursor:'crosshair',//cursor al arrastrar
		snap: true,
		opacity: 0.50,
		scroll: true,
		revert:true
	});
  $('.drop').droppable( {
		drop: function (event,ui ) {
				
				// cuando un elemmento drag se incorpora a un drop se lanza un evento (event) drop y un objeto ui.draggable
				//En este ejemplo el del evento extraeremos el data número de cada uno de ellos
				var arrastrable= ui.draggable;
				alert( 'El circulo con data-numero' +  arrastrable.attr("data-numero") + ' ha sido soltado dentro de'+ $(this).attr("data-numero"));
				var elementodrag=arrastrable.attr("data-numero");
				var elementodrop=$(this).attr("data-numero");
				
				if(elementodrag==elementodrop){
					$(this).html('<div class="bg-info ">Enhorabuena, acertaste...</div>');
					$(this).droppable( 'disable' );
					arrastrable.position( { 
						top:0,
						left:0,
						} );
					ui.arrastrable.draggable( 'option', 'revert', false );
				}
			}
	});


//termmina el código
	});

	

	

