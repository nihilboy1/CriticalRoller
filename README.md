# Rolador de Acerto Crítico

O Rolador de Acerto Crítico é uma ferramenta online projetada para mestres e jogadores de RPG de mesa. Ele automatiza a rolagem de acertos críticos e Erros Críticos, adicionando um elemento de surpresa e emoção às suas sessões de jogo.

## Funcionalidades

- **Modos de Rolagem**: Alterne facilmente entre os modos "Acerto Crítico" e "Erro Crítico" com um único clique.
- **Seleção de Dano**: Escolha o tipo de dano (Contusão, Perfurante, Cortante ou Mágico) para obter resultados personalizados.
- **Resultados Detalhados**: Cada rolagem gera um resultado único e descritivo, com um título e uma descrição do efeito.
- **Animações e Sons**: Desfrute de uma experiência imersiva com animações de rolagem e efeitos sonoros.
- **Regras Acessíveis**: Consulte as regras de acerto crítico e erro crítico diretamente na aplicação.

## Tecnologias Utilizadas

- **React**: Uma biblioteca JavaScript para criar interfaces de usuário.
- **TypeScript**: Um superconjunto de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Um framework CSS utilitário para estilização rápida e responsiva.
- **Framer Motion**: Uma biblioteca de animação para React.
- **Vite**: Uma ferramenta de build moderna e rápida para desenvolvimento web.

## Como Executar Localmente

Para executar o projeto em sua máquina local, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/nihilboy1/CriticalRoller.git
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd CriticalRoller
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
5. **Abra o navegador e acesse:**
   [http://localhost:5173](http://localhost:5173)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `public/`: Contém os arquivos estáticos, como fontes e os dados das cartas em formato JSON.
- `src/`: Contém o código-fonte da aplicação.
  - `components/`: Componentes React reutilizáveis.
  - `constants/`: Constantes utilizadas na aplicação, como ícones e sons.
  - `hooks/`: Hooks personalizados do React.
  - `utils/`: Funções utilitárias.
- `types.ts`: Definições de tipos do TypeScript.

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma ideia para melhorar a aplicação, sinta-se à vontade para abrir uma issue ou enviar um pull request.
