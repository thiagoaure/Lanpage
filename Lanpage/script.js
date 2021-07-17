function entrou (){
    $(document).ready(function(){
        $("input#botao").mouseenter(function(){
          $("input#botao").css("box-shadow", "2px 2px 2px white");
        });
        $("input#botao").mouseleave(function(){
          $("input#botao").css("box-shadow", "0px 0px 0px");
        });
    });
}

function clicou (){

let email = document.getElementById('email').value
let nome = document.getElementById('nome').value

if (email== 0 || nome == 0){
    alert('Preencha seu nome e seu e-mail')
} else {
    const form = document.getElementById('form');
    form.addEventListener('submit', (x) => {
        x.preventDefault();
        let nome = document.getElementById('nome').value 
        let email = document.getElementById('email').value 
        let data = {
            nome,
            email
        }
        let convertData = JSON.stringify(data);
        localStorage.setItem('lead', convertData)
    })

}

}