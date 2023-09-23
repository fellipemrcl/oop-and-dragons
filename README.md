
# OOP & Dragons

Este é um projeto de back-end que me proporcionou uma oportunidade empolgante de aplicar os conceitos de programação orientada a objetos (POO ou OOP em inglês) e os princípios SOLID em um ambiente prático e desafiador. Durante essa jornada, mergulhei profundamente no mundo das classes, herança, encapsulamento, polimorfismo e nas diretrizes que tornam o código mais sólido e flexível.

Além disso, escolhi elevar o nível do meu código, implementando o TypeScript. Essa escolha não apenas me forneceu mais segurança e rigor no desenvolvimento, mas também me permitiu utilizar interfaces e types para modelar e organizar de forma mais eficiente as estruturas de dados do projeto.


## Feedback

Se você tiver algum feedback, por favor, entre em contato comigo! Estou sempre em busca de outros pontos de vista e feedbacks construtivos. Sinta-se à vontade para me enviar um e-mail no fmrclms@gmail.com.


## Aprendizados

Trabalhando nesse projeto, pude mergulhar profundamente nos princípios da Programação Orientada a Objetos (POO) e, assim, expandir consideravelmente meu conhecimento nesse campo. Durante o projeto, explorei não apenas os conceitos fundamentais, como classe, herança, abstração e polimorfismo, mas também aprendi a aplicá-los de maneira prática em cenários do mundo real. Isso me permitiu compreender como a POO pode ser uma abordagem poderosa para resolver problemas complexos de desenvolvimento de software, promovendo reutilização de código, modularidade e manutenibilidade. Além disso, a experiência me ensinou a importância de projetar sistemas com foco em objetos e a colaborar eficazmente em equipes para criar soluções robustas e eficientes. No geral, esse projeto enriqueceu minha compreensão e aplicação da Programação Orientada a Objetos, tornando-me um desenvolvedor mais versátil e qualificado.


## Rodando localmente

Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

Clone o projeto

```bash
  git clone git@github.com:fellipemrcl/oop-and-dragons.git
```

Entre no diretório do projeto

```bash
  cd oop-and-dragons/
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Rodando com Docker

Rode o serviço node com o comando:
```bash
docker-compose up -d
```

Esse serviço irá inicializar um container chamado trybers_and_dragons.

A partir daqui você pode rodar o container trybers_and_dragons via CLI ou abri-lo no VS Code.

Use o comando abaixo para ter acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

```bash
docker exec -it trybers_and_dragons bash
```

Instale as dependências dentro do container:

```bash
npm install
```
