# Guia de Desenvolvimento - Apoema Studio

Este projeto é uma landing page moderna e dinâmica para o Apoema Studio, construída com React, TypeScript, Vite e Tailwind CSS.

## Status do Projeto

- **Tipo**: Landing Page React Single Page
- **Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Design**: "Dark Premium", Minimalista, Glassmorphism Refinado, Textura de Ruído

## Estrutura de Componentes (`src/components/`)

- **Background.tsx**: Fundo escuro (`#0a0a0a`) com textura de ruído e blobs sutis animados.
- **Header.tsx**: Barra de navegação minimalista com efeito de mistura (mix-blend-difference).
- **Hero.tsx**: Layout assimétrico com tipografia grande e refinada.
- **History.tsx**: Layout lado-a-lado com linha do tempo visual.
- **GamesGrid.tsx**: Grid de jogos com cards baseados em imagem e micro-interações de hover.
- **Footer.tsx**: Rodapé minimalista com opacidade reduzida.

## Comandos de Desenvolvimento

- **Instalar dependências**: `npm install`
- **Iniciar servidor dev**: `npm run dev`
- **Build de produção**: `npm run build`
- **Preview do build**: `npm run preview`

## Diretrizes de Estilo

- **Cores**:
  - Fundo: `#0a0a0a` (Almost Black)
  - Texto: Branco (`text-white`) e Cinza Muted (`text-gray-400`)
  - Acentos: Roxo e Rosa (usados com parcimônia em gradientes de texto ou detalhes).
- **Tipografia**: Fonte 'Poppins'. Títulos com `tracking-tight`, labels com `tracking-widest`.
- **Imagens**: Estilo "Noir" para Arquivo Morto, "Glitch Art" para Glitch.
- **Animações**:
  - `framer-motion` para scroll reveal suave.
  - Easing: `[0.16, 1, 0.3, 1]` (suave e premium).

## Notas de Implementação

- O design foi otimizado para reduzir a fadiga visual (menos cores neon, mais tons neutros escuros).
- Imagens de alta qualidade do Unsplash foram integradas.
- Layout responsivo e acessível.
