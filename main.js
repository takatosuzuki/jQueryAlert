$(function(){
  var openTrigger = $(".trigger");
  var panel = $(".panel");
  var closeTrigger = $(".modal-close");
  var modalContent = $(".modal-content");
  var currentTargetModalId = null;

  function openModal(){
    $(currentTargetModalId).addClass('visible');
  }

  function hideModal(){
    $(currentTargetModalId).removeClass('visible');
  }  

  function bindOpenModal(){
    openTrigger.on('click', function(){
      currentTargetModalId = '#' + $(this).data('trigger');
      openModal();
    });
  }

  function bindCloseModal(){
    panel.on('click', hideModal);
  }

  function propagateModal(){
    modalContent.on('click', function(e){
      e.stopPropagation();
    })
  }

  function btnClose() {
    closeTrigger.on('click', hideModal);
  }

  bindOpenModal();
  propagateModal();
  bindCloseModal();
  btnClose();

});
