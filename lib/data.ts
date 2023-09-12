import fernando from "@/public/fernando.jpg"
import cherry from "@/public/cherry.jpg"
import canhassi from '@/public/canhassi.png'

export const links = [
  {
    name: "JPA",
    hash: "#jpa",
  },
  {
    name: "Oração",
    hash: "#oração",
  },
  {
    name: "Sindicato",
    hash: "#sindicato",
  },
  {
    name: "Almosso",
    hash: "#almosso",
  },
  {
    name: "#100Dias",
    hash: "#100Dias",
  },
  {
    name: "Stack",
    hash: "#stack",
  },

] as const;


export const sindicatoData = [

  {
    title: "Canhassi",
    description:
      "O Escolhido pelo Al-mosso. Não tankou a lore de Fate. Morou na cidade de Fujiro Nakombe, no Japão. Primo de terceiro grau do Baka Gaijin. Fundador dos Bigodudos de SP-SP",
    tags: ["PHP", "Rust", "Golang", "Microsserviços", "Laravel"],
    imageUrl: canhassi,
  },

  {
    title: "Cherry 🍒",
    description:
      "Rainha do Ruby. 5 vezes campeã do Soletrando Norte/Nordeste. No sigilo, coda em JS puro e diz que adora.",
    tags: ["Ruby", "TypeScript", "Elixir", "Golang", "Perl"],
    imageUrl:cherry,
  },

  {
    title: "Fernando",
    description:
      "Sofre com Vue.js. Já trabalhou como office boy na secretaria de saúde. Largou a facul de inglês, tentou ADM e hoje é dev. Flerta com o robô do PIX.",
    tags: [".NET", "Vue.js", "Node", "Python", "PostgreSQl"],
    imageUrl: fernando,
  },

] as const;


 export const hundredDaysData = [

  {
    queue:1,
    title:"Programe",
    details:"Estude programação por no mínimo uma hora todos os dias pelos próximos 100 dias."
  },

  {
    queue:2,
    title:"Tweete",
    details:"Tweete seu progresso todos os dias com a hashtag #100DiasDeCodigo. "
  },

    {
      queue:3,
    title:"Interaja",
    details:"Todos os dias, entre em contato com pelo menos duas pessoas no Twitter que também estão participando do desafio."
    }
] as const ;


export const stackData = [

  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Framer Motion",
]

