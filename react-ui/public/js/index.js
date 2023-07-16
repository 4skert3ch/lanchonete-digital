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

$(document).ready(function () {
  $('.incrementar').click(function () {
    var nomeProduto = $(this).closest('.col').find('.nomeProduto').text();
    var textoInput = $('.pedido').val();
    console.log(textoInput);

    var regex = new RegExp(nomeProduto + "\\((\\d+)\\)", "g");
    var match = textoInput.match(regex);
    var quantidade = 1;

    if (match) {
      quantidade = parseInt(match[match.length - 1].match(/\d+/)) + 1;
      textoInput = textoInput.replace(regex, '');
    }

    if (textoInput.length === 0 || textoInput.slice(-1) === ")") {
      $('.pedido').val(textoInput + nomeProduto + "(" + quantidade + ")");
    } else {
      $('.pedido').val(textoInput + " " + nomeProduto + "(" + quantidade + ")");
    }
  });
});


$('#limparBotao').click(function () {
  $('.pedido').val('');
  $('#contador').text("R$0");
});

$('#btnEnviar').click(function () {
  var textareaValue = $("#pedido").val();

  if (textareaValue === '') {
    alert("Você deve adicionar um produto")
  } else {

  }
})

$('#btnEnviar').prop('disabled', true);

$(document).ready(function () {
  $('.incrementar').click(function () {
    var textareaValue = $("#pedido").val();
    if (textareaValue != '' || textareaValue !== '') {
      $('#btnEnviar').prop('disabled', false);
    } else {
      console.log("enviar ativo");
    }
  });

  $('#limparBotao').click(function () {
    var textareaValue = $("#pedido").val();
    if (textareaValue != '' || textareaValue !== '') {
      $('#btnEnviar').prop('disabled', true);
    } else {
      console.log("enviar ativo");
    }
  });
});

