var $doc = $('html, body');
$('.scrollSuave').click(function () {
  $doc.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

$("#menu").click(function (e) {
  $(".nav-menu").toggleClass('is-open');
  $(".overlay").toggleClass('is-visible');
  $(this).toggleClass('open');
});



$(".button-collapse").click(function () {
  $(".side-nav").toggleClass('side-nav-open');
  $(".button-collapse").toggleClass('anda');
  $("#main_menu").toggleClass('roda');

});

$(".topo-fixo > a").click(function (e) {
  $(this).closest('.side-nav').toggleClass("side-nav-open");
  e.stopPropagation();
});

$(document).on('click', function (e) {
  if (!$(e.target).closest('.side-nav-open').length ||
    $(e.target).closest('li').length) {

    $('ul').removeClass('side-nav-open');
    $('.button-collapse').removeClass('anda');
  }
});


$('.incrementar').click(function () {

  var paragrafo = $('#contador');
  var texto = paragrafo.text();
  var novoTexto = texto.replace('R$', '')

  var valorProduto = $(this).val();

  var numero1 = parseFloat(valorProduto);
  var numero2 = parseFloat(novoTexto);

  soma = numero1 + numero2

  $('#contador').text("R$" + soma);
});

$(document).ready(function() {
  $('.incrementar').click(function() {
    var nomeProduto = $(this).closest('.col').find('.nomeProduto').text();
    
    var textoInput = $('.pedido').val();
    console.log(textoInput);
    
    $('.pedido').val(textoInput + nomeProduto + ",");

  });
});


$('#limparBotao').click(function() {
  $('.pedido').val('');
  $('#contador').text("R$0");
});


