    function irParaLogin() {
        document.location.href = './login.html';
    }
    
    function cadastrar() {
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
    

        // EXERCICIO verificar se o usuário preencheu o nome e a senha antes de adicionar ao localStorage 
    
        // EXERCICIO fazer uma função para verificar se o usuário inseriu letras e números na senha antes de adicionar ao localStorage
       
        if (!name || !password) {
            alert('Por favor, preencha tanto o nome quanto a senha.');
            return;
        }
      
        if (!validarSenha(password)) {
            alert('A senha deve conter pelo menos uma letra e um número.');
            return;
        }
    
        const obj = {
            name: name,
            password: password
        };
    
        localStorage.setItem('login', JSON.stringify(obj));
    
        alert('Usuário cadastrado com sucesso!');
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
    }

    function validarSenha(senha) {
        const contemLetra = /[a-zA-Z]/.test(senha);
        const contemNumero = /[0-9]/.test(senha);
        return contemLetra && contemNumero;
    }
    