 
       $(document).ready(function(){
 
 
                        
 $('.carregar2').click(function(){
        
        $('#basicModal').load(
                  "preCadastro.php",
                  function(responseTxt, statusTxt, xhr) {
                    if (statusTxt == "success") {
                      $('#basicModal').foundation('reveal', 'open');
                      $('#loading').remove();
                    }
                    if (statusTxt == "error") {
                      alert("Error: " + xhr.status + ": "
                          + xhr.statusText);
                      $('#loading').remove();
                    }
 
                  });
    })
    $('#carregarCadastro')
        .click(
            function() { 
             $('#carregarCadastro')
                  .prepend(
                      '<i class="fa fa-circle-o-notch fa-spin" id="loading"></i> ');

             $('#basicModal').load(
                  "preCadastro.php",
                  function(responseTxt, statusTxt, xhr) {
                    if (statusTxt == "success") {
                      $('#basicModal').foundation('reveal', 'open');
                      $('#loading').remove();
                    }
                    if (statusTxt == "error") {
                      alert("Error: " + xhr.status + ": "
                          + xhr.statusText);
                      $('#loading').remove();
                    }
 
                  });
                                                       

            });

        });