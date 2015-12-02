$(function(){
  ui.card.render('oblaka', '#65b6dc', 'Облака', 'Воронеж', '.lounges');
  ui.card.render('academy_novosibirsk', '#5F4D9B', 'Академия', 'Новосибирск', '.lounges');
  ui.card.render('unityhall', 'red', 'Unity Hall', 'Казань','.lounges');
  ui.card.render('reserv', 'green', 'Резерв', 'Тюмень','.lounges');

  $('#oblaka-card').click(function(e){
    document.location.href="/oblaka.html"
  });
  $('#academy_novosibirsk-card').click(function(e){
    document.location.href="/academy_novosibirsk.html"
  });
  $('#unityhall-card').click(function(e){
    document.location.href="/unityhall.html"
  });
  $('#reserv-card').click(function(e){
    document.location.href="/reserv.html"
  });
});
