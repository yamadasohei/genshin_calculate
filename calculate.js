$(function () {

    $('.calbutton').click(function() {
  
      var of = +($("#offense").val());
      var sk = +($("#skill").val());
      var sp = +($("#special").val());
      var rn = +($("#realnumber").val());
      var da = +($("#damebuff").val());
      var cr = +($("#cribuff").val());
      var el = +($("#element").val());
      var out;
      out = (of * (sk/100) * (1 + sp/100) + rn) * (1 +da/100) * (1 + cr/100) * el * 0.45;
  
      $("#output_dam").html(out);
    });
  
  });