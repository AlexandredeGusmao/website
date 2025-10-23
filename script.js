// Você pode adicionar funcionalidades JavaScript aqui no futuro, se desejar.

console.log("Website da EE Alexandre de Gusmão carregado! Tema: Marsala.");

// --- Lógica do Chatbot ---

document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbot-box');
    const toggleButton = document.getElementById('chatbot-toggle');
    const closeButton = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');

    // Se os elementos do chatbot não existirem na página (apenas index.html e fale-conosco.html devem ter), a função deve sair
    if (!chatbox || !toggleButton) {
        return;
    }

    // Função para adicionar mensagens
    function appendMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageDiv.innerHTML = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll para o final
    }

    // Função principal de resposta
    function getBotResponse(input) {
        const text = input.toLowerCase().trim();

        // 1. Perguntas Gerais sobre Cursos Técnicos (SEDUC SP)
        if (text.includes('duração')) {
            return "Os cursos técnicos integrados ao Ensino Médio da SEDUC SP geralmente têm duração de **3 a 4 anos**, pois são cursados simultaneamente. Os cursos modulares (para quem já concluiu o EM) podem ter **1 a 2 anos** de duração.";
        }
        if (text.includes('requisitos') || text.includes('inscrever')) {
            return "Para os cursos técnicos integrados, é preciso ter concluído o Ensino Fundamental. Para os cursos modulares (subsequentes), é necessário ter concluído o Ensino Médio. O ingresso é feito por processo seletivo da SEDUC SP.";
        }
        if (text.includes('diploma') || text.includes('valido')) {
            return "Sim! O diploma de Técnico de Nível Médio emitido pela EE Alexandre de Gusmão é **reconhecido pelo MEC/SEDUC SP** e possui validade nacional, habilitando o profissional para o mercado de trabalho.";
        }
        if (text.includes('diferença') || text.includes('tecnólogo') || text.includes('superior')) {
            return "O **Técnico** (Nível Médio) foca em habilidades práticas e específicas para o mercado. O **Tecnólogo** é um curso superior (graduação) com foco prático, mas tem duração e complexidade maiores, dando acesso a pós-graduações.";
        }
        if (text.includes('estágio') || text.includes('obrigatorio')) {
            return "Depende do curso. Muitos dos nossos cursos técnicos exigem um **estágio curricular obrigatório** para a conclusão e obtenção do diploma, garantindo a experiência prática. Consulte a coordenadoria para detalhes específicos do seu curso.";
        }
        if (text.includes('online') || text.includes('distancia')) {
             return "A EE Alexandre de Gusmão oferece os cursos técnicos na modalidade **presencial** para garantir a qualidade do aprendizado em laboratório. Consulte o site da SEDUC SP para possíveis opções EAD de outras unidades.";
        }

        // 2. Perguntas sobre Cursos Específicos
        if (text.includes('administração') || text.includes('adm')) {
            return "O curso de **Administração** prepara para funções essenciais em qualquer empresa, como gestão de rotinas, controle financeiro, RH e logística. O mercado é amplo e sempre demanda bons profissionais de suporte administrativo.";
        }
        if (text.includes('dados') || text.includes('ciência de dados')) {
            return "O curso de **Ciência de Dados** está em alta! Você aprenderá a coletar, tratar e analisar informações para tomar decisões. É ideal para quem gosta de matemática, lógica e tecnologia, com salários iniciais atrativos.";
        }
        if (text.includes('desenvolvimento') || text.includes('sistemas') || text.includes('dev')) {
            return "No curso de **Desenvolvimento de Sistemas**, você se tornará um programador capaz de criar websites, aplicativos e softwares. É o curso com maior demanda no mercado de TI atualmente.";
        }
        if (text.includes('enfermagem')) {
            return "O curso de **Enfermagem** foca na assistência direta ao paciente, preparação de materiais e apoio à equipe de saúde. É uma profissão de alta responsabilidade e dedicação, com mercado forte em hospitais e clínicas.";
        }
        if (text.includes('farmácia') || text.includes('farmacia')) {
            return "O curso de **Farmácia** capacita o aluno para atuar em drogarias e laboratórios, na manipulação e controle de qualidade de medicamentos, e na orientação ao público sobre o uso correto de fármacos.";
        }
        if (text.includes('vendas')) {
            return "O curso de **Vendas** desenvolve habilidades em comunicação, negociação, prospecção e pós-venda. O mercado de trabalho é dinâmico, permitindo atuação em qualquer setor do comércio e da indústria.";
        }

        // 3. Resposta Padrão/Fallback
        return "Desculpe, não entendi. Tente perguntar sobre **duração**, **requisitos**, **mercado** ou o nome de um curso (**Enfermagem**, **Dev**, **Adm**).";
    }

    // Evento de Envio/Clique
    function sendMessage() {
        const input = userInput.value.trim();
        if (input === "") return;

        appendMessage('user', input);
        userInput.value = '';

        // Resposta do Bot
        setTimeout(() => {
            const response = getBotResponse(input);
            appendMessage('bot', response);
        }, 500); // Pequeno delay para simular o "pensamento"
    }

    // Alternar o chatbox
    toggleButton.addEventListener('click', () => {
        chatbox.classList.toggle('open');
    });

    closeButton.addEventListener('click', () => {
        chatbox.classList.remove('open');
    });

    // Enviar ao clicar no botão
    sendButton.addEventListener('click', sendMessage);

    // Enviar ao pressionar Enter
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});