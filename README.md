# Casa Victória — Landing Page

Landing page premium de apresentação imobiliária para a Casa Victória, residência
contemporânea de alto padrão no Condomínio Entre Serras, Santa Isabel/SP.

## Stack

- React + Vite
- Tailwind CSS v4
- Framer Motion (animações e parallax)
- react-icons

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview   # para testar o build localmente
```

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub (ou GitLab/Bitbucket).
2. Em https://vercel.com, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta automaticamente o framework (Vite) — não é necessário configurar
   nada manualmente. Build command: `npm run build`. Output directory: `dist`.
4. Clique em **Deploy**.

Alternativamente, via CLI:

```bash
npm i -g vercel
vercel
```

## Estrutura

```
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── Hero.jsx
 │    ├── About.jsx
 │    ├── Features.jsx
 │    ├── Gallery.jsx
 │    ├── FloorPlan.jsx
 │    ├── Technology.jsx
 │    ├── Payment.jsx
 │    ├── Timeline.jsx
 │    ├── Location.jsx
 │    ├── Contact.jsx
 │    ├── Footer.jsx
 │    └── WhatsAppFloat.jsx
 ├── lib/
 │    └── whatsapp.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
public/
 └── images/       ← substitua as imagens aqui (mesmos nomes de arquivo)
```

## Substituindo imagens

Todas as imagens ficam em `public/images/`. Basta substituir o arquivo mantendo o
mesmo nome (ex.: `fachada-frontal.jpg`) para atualizar a foto exibida no site.

## Formulário de contato

O formulário na seção final monta automaticamente uma mensagem e abre o WhatsApp
(11 98331-8615) com os dados preenchidos. Os envios também ficam salvos no
`localStorage` do navegador do visitante (`casa-victoria-leads`) como registro local —
para captar leads de forma centralizada, integre esse formulário a um serviço como
Formspree, um backend próprio, ou um webhook do WhatsApp Business API.

## SEO e Open Graph

As meta tags (título, descrição, Open Graph para compartilhamento no WhatsApp) estão
em `index.html`. Atualize a URL canônica e a URL das imagens de Open Graph com o
domínio final antes de publicar.
