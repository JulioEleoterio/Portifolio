// Seleciona o botão de troca de tema
const themeToggleBtn = document.getElementById('theme-toggle');

// Adiciona o evento de clique
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento <body>
    document.body.classList.toggle('dark-mode');
    
});

// Seleciona o formulário e os campos
const form = document.getElementById('contact-form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    // Impede o comportamento padrão de recarregar a página ao enviar
    event.preventDefault(); 
    
    // Inicializa uma variável de controle de validação
    let isValid = true;

    // Limpa mensagens de erro anteriores
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');

    //  Validação do Campo Nome
    if (nome.value.trim() === '') {
        document.getElementById('error-nome').innerText = 'O campo nome é obrigatório.';
        isValid = false;
    }

    //  Validação do Campo E-mail com Regex (Expressão Regular)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        document.getElementById('error-email').innerText = 'O campo e-mail é obrigatório.';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('error-email').innerText = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    //  Validação do Campo Mensagem
    if (mensagem.value.trim() === '') {
        document.getElementById('error-mensagem').innerText = 'O campo mensagem é obrigatório.';
        isValid = false;
    }

    
    if (isValid) {
        // Simulação do envio bem-sucedido
        alert('Mensagem enviada com sucesso! (Simulação)');
        
        // Reseta todos os campos do formulário
        form.reset();
    }
});