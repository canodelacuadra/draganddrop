$( inicio );

function inicio() {
//las opciones de draggable
  $('#hazmeArrastrable').draggable( {
    containment: '#lienzo',//puede ser document, parent,window, un selector,o marcado con cordenadas
    cursor: 'move',//cambia el cursor sobre el elemento arrastrable
    snap: '#lienzo',
	revert:true
	
  } );
  $('#hazmeSoltable').droppable({
    drop: handleDropEvent
  })
}
function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  alert( 'El cuadrado con ID "' + draggable.attr('id') + '" ha sido encajado dentro de mí' );
}
