let result = '';
    let currentQuestion = 1;
    let frotEnd = 0;
    let backEnd = 0;
    let cienD = 0;
    let desnM = 0;
    let desnG = 0;
    let fullStack = 0;

    function selectOption() {
        currentQuestion++;

        if (currentQuestion == 2) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText ='Qual aspecto você acha mais fascinante ao imaginar um projeto digital?';
            document.getElementById('a').innerText = 'Tornar a experiência do usuário intuitiva e visualmente atraente.'
            document.getElementById('b').innerText = 'Garantir que os dados sejam processados de forma segura e eficiente.'
            document.getElementById('c').innerText = 'Descobrir padrões e informações valiosas em conjuntos de dados complexos.'
            document.getElementById('d').innerText = 'Criar aplicativos que funcionem perfeitamente em smartphones e tablets.'
            document.getElementById('e').innerText = 'Desenvolver jogos interativos e envolventes. '
            document.getElementById('f').innerText = 'Trabalhar em todas as partes do desenvolvimento de software, da interface ao servidor. '
        } else if (currentQuestion == 3) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText = 'O que te motiva mais ao pensar em criar algo novo?';
            document.getElementById('a').innerText = 'Aperfeiçoar a estética e a usabilidade de interfaces de usuário.'
            document.getElementById('b').innerText = 'Desenvolver a lógica que permite aplicações processarem dados de forma eficaz.'
            document.getElementById('c').innerText = 'Analisar grandes conjuntos de dados para extrair informações valiosas.'
            document.getElementById('d').innerText = 'Criar aplicativos que ofereçam ótima experiência em dispositivos móveis.'
            document.getElementById('e').innerText = 'Desenvolver jogos que cativem os jogadores com gráficos e jogabilidade envolventes.'
            document.getElementById('f').innerText = 'Lidar com todos os aspectos do desenvolvimento de software, da concepção à implementação.'
        } else if (currentQuestion == 4) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText = 'Qual destas atividades você acha mais empolgante ao criar algo digital?';
            document.getElementById('a').innerText = 'Tornar a interface do usuário atraente e intuitiva. '
            document.getElementById('b').innerText = 'Garantir que os dados sejam processados de forma segura e eficiente.'
            document.getElementById('c').innerText = 'Encontrar padrões e insights valiosos em grandes conjuntos de dados.'
            document.getElementById('d').innerText = 'Criar aplicativos que se integram perfeitamente aos sistemas operacionais móveis.'
            document.getElementById('e').innerText = 'Desenvolver jogos interativos e envolventes.'
            document.getElementById('f').innerText = 'rabalhar em todas as partes do desenvolvimento de software, da interface ao servidor.'
        } else if (currentQuestion == 5) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText = 'Quando você pensa em otimizar a eficiência de um aplicativo, qual aspecto você considera mais crucial?';
            document.getElementById('a').innerText = 'Aprimorar a velocidade de carregamento e a fluidez da interface.'
            document.getElementById('b').innerText = 'Otimizar consultas de banco de dados e processamento de dados no servidor.'
            document.getElementById('c').innerText = 'Utilizar algoritmos eficientes para manipulação e análise de dados'
            document.getElementById('d').innerText = 'Garantir que o aplicativo consuma poucos recursos e funcione sem problemas em dispositivos móveis.'
            document.getElementById('e').innerText = 'Otimizar o desempenho gráfico e a jogabilidade em um ambiente de jogo. '
            document.getElementById('f').innerText = 'Equilibrar a eficiência em todas as partes do desenvolvimento de software.'
        } else if (currentQuestion == 6) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText = 'Qual dessas habilidades você acha mais desafiadora e, ao mesmo tempo, mais crucial para o sucesso de um projeto?';
            document.getElementById('a').innerText = 'Dominar as últimas tendências em design de interfaces.'
            document.getElementById('b').innerText = 'Arquitetar sistemas escaláveis e de alta performance.'
            document.getElementById('c').innerText = 'Desenvolver algoritmos complexos para análise de dados avançada.'
            document.getElementById('d').innerText = 'Adaptar aplicativos para uma variedade de dispositivos móveis e sistemas operacionais.'
            document.getElementById('e').innerText = 'Criar gráficos e mecânicas de jogo envolventes e inovadoras.'
            document.getElementById('f').innerText = 'Ter habilidades abrangentes para lidar com todos os aspectos do desenvolvimento de software.'
        } else if (currentQuestion == 7) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText = 'Ao criar algo digital, qual aspecto você acha mais emocionante?';
            document.getElementById('a').innerText = 'A possibilidade de criar interfaces visualmente impressionantes.'
            document.getElementById('b').innerText = 'Desenvolver a lógica complexa por trás das funcionalidades do sistema.'
            document.getElementById('c').innerText = 'Descobrir padrões e insights escondidos em grandes conjuntos de dados.'
            document.getElementById('d').innerText = 'Ver seus aplicativos funcionando perfeitamente em diferentes dispositivos móveis.'
            document.getElementById('e').innerText = 'Criar mundos virtuais e experiências imersivas em jogos.'
            document.getElementById('f').innerText = 'Gerenciar todos os aspectos do desenvolvimento para criar soluções completas.'
        } else if (currentQuestion == 8) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText = 'Quando você pensa em inovação tecnológica, qual destas áreas mais te empolga?';
            document.getElementById('a').innerText = 'Novas técnicas de design e interação para interfaces mais modernas.'
            document.getElementById('b').innerText = 'Avanços em infraestrutura e segurança para sistemas robustos.'
            document.getElementById('c').innerText = 'Desenvolvimentos em algoritmos e técnicas de análise de dados.'
            document.getElementById('d').innerText = 'Evolução de dispositivos móveis e novas possibilidades de aplicativos.'
            document.getElementById('e').innerText = 'Novas tecnologias gráficas e experiências imersivas em jogos.'
            document.getElementById('f').innerText = 'Abordagens inovadoras que englobam todas as partes do desenvolvimento de software.'
        } else if (currentQuestion == 9) {
            document.getElementById('numQ').innerText = `Pergunta 0${currentQuestion}`
            document.getElementById('question').innerText = 'Quando se trata de solucionar problemas, qual abordagem você acha mais eficaz?';
            document.getElementById('a').innerText = 'Experimentar novas abordagens de design para encontrar soluções visuais.'
            document.getElementById('b').innerText = 'Analisar e otimizar a lógica de processamento de dados no backend.'
            document.getElementById('c').innerText = 'Utilizar técnicas avançadas de análise de dados para obter insights.'
            document.getElementById('d').innerText = 'Adaptar soluções para funcionarem perfeitamente em dispositivos móveis.'
            document.getElementById('e').innerText = 'Criar mecânicas de jogo únicas para resolver desafios em ambientes virtuais.'
            document.getElementById('f').innerText = 'Abordar problemas de maneira holística em todas as camadas do desenvolvimento de software.'
        } else if (currentQuestion == 10) {
            document.getElementById('numQ').innerText = `Pergunta ${currentQuestion}`
            document.getElementById('question').innerText = 'Qual destas áreas você acredita que terá um papel mais significativo na evolução tecnológica nos próximos anos?';
            document.getElementById('a').innerText = 'Inovações em interfaces de usuário e design.'
            document.getElementById('b').innerText = 'Desenvolvimento de infraestrutura e sistemas escaláveis.'
            document.getElementById('c').innerText = 'Avanços contínuos em algoritmos e análise de dados.'
            document.getElementById('d').innerText = 'Crescimento de aplicativos móveis e dispositivos conectados.'
            document.getElementById('e').innerText = 'Progresso na indústria de jogos com gráficos e experiências mais realistas.'
            document.getElementById('f').innerText = 'A integração harmoniosa de todas as partes do desenvolvimento de software.'
        } else if (currentQuestion == 11) {
            document.getElementById('numQ').innerText = `Pergunta ${currentQuestion}`
            document.getElementById('question').innerText = 'Se você pudesse escolher uma tecnologia emergente para se aprofundar, qual seria?';
            document.getElementById('a').innerText = 'Frameworks de front-end para interfaces mais interativas.'
            document.getElementById('b').innerText = 'Tecnologias de nuvem e arquiteturas escaláveis.'
            document.getElementById('c').innerText = 'Ferramentas avançadas de machine learning e inteligência artificial.'
            document.getElementById('d').innerText = 'Plataformas de desenvolvimento mobile e frameworks cross-platform.'
            document.getElementById('e').innerText = 'Motores de jogo e tecnologias gráficas avançadas.'
            document.getElementById('f').innerText = 'Tecnologias que permitem trabalhar eficientemente em todas as camadas do desenvolvimento.'
        } else {
            showResult();
        }
    }
    function ffrontEnd(value){
        frotEnd++;
        selectOption()
    }
    function fbackEnd(value){
        backEnd++;
        selectOption()
    }
    function fcienD(value){
        cienD++
        selectOption()
    }
    function fdesnM(valiosos){
        desnM++
        selectOption()
    }
    function fdesnG(value){
        desnG++
        selectOption()
    }
    function ffullStack(){
        fullStack++
        selectOption()
    }

    function showResult() {
        if (frotEnd > backEnd && frotEnd > cienD && frotEnd > desnM && frotEnd > desnG && frotEnd > fullStack) {
            result = "Front-End"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (backEnd > frotEnd && backEnd > cienD && backEnd > desnM && backEnd > desnG && backEnd > fullStack) {
            result = "Back-End"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (cienD > frotEnd && cienD > backEnd && cienD > desnM && cienD > desnG && cienD > fullStack) {
            result = "Ciência de Dados"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (desnM > frotEnd && desnM > backEnd && desnM > cienD && desnM > desnG && desnM > fullStack) {
            result = "Desenvolvimento Mobile"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (desnG > frotEnd && desnG > backEnd && desnG > cienD && desnG > desnM && desnG > fullStack){
            result = "Desenvolvimento de Jogos"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (fullStack > frotEnd && fullStack > backEnd && fullStack > cienD && fullStack > desnG && fullStack > desnM){
            result = "Full-Stack"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (frotEnd == backEnd && frotEnd != 0 && backEnd != 0){
            result = "Full-Stack"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (cienD == desnM && cienD != 0 && desnM != 0){
            result = "Ciência de Dados"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else if (desnG == fullStack && desnG != 0 && fullStack != 0){
            result = "Desenvolvimento de Jogos"  
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        } else {
            result = "Full-Stack"
            localStorage.setItem("rItem", result)
            window.location.href = "../pages/paginaResultado.html"
        }
    }