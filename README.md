# Fiscal de Transportes — Ponta Grossa — V2

Aplicação estática para estudo, preparada para GitHub Pages.

## Como testar no VS Code

Abra a pasta do projeto no VS Code e use o Live Server (se tiver instalado) ou abra `index.html` no navegador.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `fiscal-transportes`.
2. Envie TODOS os arquivos e pastas deste projeto para o repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve.
7. Aguarde a publicação. O GitHub mostrará o endereço do site.

## Importante sobre o histórico

O desempenho usa `localStorage`. Portanto, o histórico fica salvo no navegador/dispositivo em que você estuda. Se trocar de computador ou navegador, o histórico não será sincronizado.

## Estrutura

- `index.html`: interface
- `css/`: visual
- `js/`: funcionamento
- `data/`: banco de questões

## Próxima expansão

O banco foi separado dos arquivos de funcionamento para permitir adicionar centenas de questões sem reescrever a aplicação.
