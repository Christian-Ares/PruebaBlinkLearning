
  const max_fields      = 10;
  const wrapper         = $("#listado_frutas");
  const list            = $(".lista_frutas");
  const add_button      = $(".agregar");

  let x = 1;
  $(add_button).click(function(e){ 
      e.preventDefault();
      const text = $("#nombre_fruta")[0].value;
      if(x < max_fields && text.length > 0){
          x++;
          $(list).append(`<li> ${text} <button type="button" class="remove">Borrar</button></li>`); //add input box
      }
  });

  $(wrapper).on("click",".remove", function(e){
      e.preventDefault(); $(this).parent('li').remove(); x--;
  });
