


class Produto {
    constructor(){
       this.id=1;
        this.arrayProdutos = [];
        this.editId =null;

    }

    salvar(){
        let produto = this.lerDados();

        if(this.validaCampos(produto)){
            if(this.editId == null){
                this.adicionar(produto);
            }else{
                this.atualizar(this.editId,  produto);
            }
            
        }

        this.listaTabela();
        this.cancelar();
        
    }
    listaTabela(){
        let tbody = document.querySelector('#tbody');
        tbody.innerText ='';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_data = tr.insertCell();
            let td_cliente = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_pagamento = tr.insertCell(); 
            let td_acoes= tr.insertCell();


            
            td_id.innerText = this.arrayProdutos[i].id;
            td_data.innerText = this.arrayProdutos[i].data;
            td_cliente.innerText = this.arrayProdutos[i].nomeCliente;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;
            td_pagamento.innerText = this.arrayProdutos[i].formaPagamento;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src ='img/editar.png';
            imgEdit.setAttribute("onclick","produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i]) +")"); 
           

            let imgDelet = document.createElement('img');
            imgDelet.src ='img/excluir.png';
            imgDelet.setAttribute("onclick","produto.deletar("+this.arrayProdutos[i].id+")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelet);

            

        }

    }

    adicionar(produto){
        produto.preco =parseFloat(produto.preco);
        this.arrayProdutos.push(produto);
        this.id++;

    }

    atualizar(id, produto){
        for(let i = 0;i<this.arrayProdutos.length;i++){
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].data = produto.data;
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].nomeCliente = produto.nomeCliente;
                this.arrayProdutos[i].valor = produto.valor;
                this.arrayProdutos[i].formaPagamento = produto.formaPagamento;
            }
        }
    }

    preparaEdicao(dados){
        this.editId= dados.id;

        document.querySelector('#data').value = dados.data;
        document.querySelector('#cliente').value = dados.nomeCliente;
        document.querySelector('#produto').value = dados.nomeProduto;
        document.querySelector('#valor').value = dados.valor;
        document.querySelector('#pagamento').value = dados.formaPagamento;

        document.querySelector('#btn-salvar').innerText ='Atualizar';
    }

    lerDados(){
        let produto = {}

            produto.id =this.id;
            produto.data = document.querySelector('#data').value;
            produto.nomeCliente  = document.querySelector('#cliente').value;
            produto.nomeProduto  = document.querySelector('#produto').value;
            produto.valor  = document.querySelector('#valor').value;
            produto.formaPagamento  = document.querySelector('#pagamento').value;

            return produto;
        
        
    }

    validaCampos(produto){
        let msg = '';
        

        if(produto.data == ''){
            msg +='- informe a data \n';
        }

        if(produto.nomeCliente == ''){
            msg +='- informe nome do Cliente \n';
        }

        if(produto.nomeProduto == ''){
            msg +='- informe nome do Produto \n';
        }

        if(produto.valor == ''){
            msg +='- informe o valor \n';
        }

        if(produto.formaPagamento == ''){
            msg +='- informe a forma de pagamento \n';
        }

        if(msg != '') {
            alert(msg);
            return false;
        }
        return true;
        
    }


    cancelar(){
        document.querySelector('#data').value ='';
        document.querySelector('#cliente').value ='';
        document.querySelector('#produto').value ='';
        document.querySelector('#valor').value ='';
        document.querySelector('#pagamento').value ='';

        document.querySelector('#btn-salvar').innerText ='Salvar';
        this.editId = null;
        
    }

    deletar(id){
            if(confirm('Deletar produto ->'+id+'?')){
                let tbody = document.querySelector('#tbody');
                for(let i = 0; i< this.arrayProdutos.length; i++){
                    if(this.arrayProdutos[i].id == id){
                        this.arrayProdutos.splice(i, 1);
                        tbody.deleteRow(i);
            }
     
            }
        }
        
    }

}


var produto = new Produto();
