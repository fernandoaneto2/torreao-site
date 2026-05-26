import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy service URLs → clean routes
      { source: "/servico-projetos.html",     destination: "/servicos/projetos-eletricos",    permanent: true },
      { source: "/servico-manutencao.html",   destination: "/servicos/manutencao-eletrica",   permanent: true },
      { source: "/servico-fotovoltaica.html", destination: "/servicos/fotovoltaica",          permanent: true },
      { source: "/servico-carregadores.html", destination: "/servicos/carregadores-eletricos", permanent: true },
      { source: "/servico-subestacoes.html",  destination: "/servicos/subestacoes-geradores", permanent: true },
      { source: "/servico-vigilancia.html",   destination: "/servicos/vigilancia",            permanent: true },
      // .html → clean routes
      { source: "/orcamento.html",            destination: "/orcamento",                      permanent: true },
      { source: "/privacidade.html",          destination: "/privacidade",                    permanent: true },
    ];
  },
};

export default nextConfig;
