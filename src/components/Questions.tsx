import React, { useState } from 'react';

const messages = [
  "1. Se você pudesse escolher qualquer pessoa do mundo, quem você iria querer como convidado para um jantar?",
  "2. Você gostaria de ser famoso? De que forma?",
  "3. Antes de fazer um telefonema, você costuma ensaiar o que vai dizer? Por quê?",
  "4. O que constitui um dia “perfeito” para você?",
  "5. Quando foi a última vez que você cantou sozinho? E para outra pessoa?",
  "6. Se você viver até os 90 anos e se pudesse escolher entre manter o corpo ou a mente dos seus 30 pelos últimos 60 anos de sua vida, qual você escolheria?",
  "7. Você tem algum pressentimento sobre como você vai morrer?",
  "8. Cite três coisas que você e seu (sua) parceiro(a) parecem ter em comum.",
  "9. Pelo que você se sente mais grato em sua vida?",
  "10. Se você pudesse mudar algo sobre a forma de como foi criado, o que seria?",
  "11. Conte a seu (sua) parceiro(a), em quatro minutos, a história de sua vida da maneira mais detalhada possível.",
  "12. Se você pudesse acordar amanhã com uma qualidade ou habilidade nova, qual seria?",
  "13. Se uma bola de cristal pudesse revelar a verdade sobre você mesmo, sua vida, seu futuro ou qualquer outra coisa, o que você gostaria de saber?",
  "14. Há algo que você sonha em fazer há muito tempo? Por que ainda não o fez?",
  "15. Qual é a maior realização da sua vida?",
  "16. O que você mais valoriza em uma amizade?",
  "17. Qual é a sua lembrança mais preciosa?",
  "18. Qual é a sua lembrança mais terrível?",
  "19. Se você soubesse que em um ano você irá morrer subitamente, você mudaria alguma coisa sobre a forma de como está vivendo agora? Por quê?",
  "20. O que a amizade significa para você?",
  "21. Que papel o amor e a afeição desempenham em sua vida?",
  "22. Alternando as respostas, diga cinco coisas que você considera características positivas do seu (sua) parceiro(a). Mencione um total de cinco características.",
  "23. O quanto a sua família é próxima e afetuosa? Você sente que sua infância foi mais feliz que a de outras pessoas?",
  "24. Como você se sente sobre o relacionamento com a sua mãe?",
  "25. Faca três declarações cada um, usando fatos verdadeiros e “nós dois” na mesma frase. Por exemplo, “Nós dois estamos nesta sala sentindo...”",
  "26. Complete a frase: “Eu gostaria de ter alguém com quem eu pudesse dividir...”",
  "27. Se você fosse se tornar um amigo próximo de seu (sua) parceiro(a), compartilhe o que seria importante que ele ou ela soubesse.",
  "28. Diga a seu (sua) parceiro(a) o que você gosta nele; seja bem honesto desta vez, dizendo coisas que você não diria a alguém que tivesse acabado de conhecer.",
  "29. Compartilhe com seu (sua) parceiro(a) um momento embaraçoso de sua vida.",
  "30. Quando foi a última vez que você chorou na frente de outra pessoa? E sozinho?",
  "31. Diga a seu (sua) parceiro(a) algo que você já gosta nele(a).",
  "32. O que você acha sério demais, se é que há algo, que nunca deveria ser motivo de chacota ou piada?",
  "33. Se você fosse morrer esta noite sem ter a oportunidade de se comunicar com ninguém, do que você se arrependeria de não ter dito? Por que você ainda não disse isso a essa pessoa?",
  "34. Sua casa, com tudo o que você possui, pega fogo. Depois de salvar todas as pessoas e animais, você tem tempo para uma volta final, com segurança, para salvar qualquer outro objeto. O que seria? Por quê?",
  "35. De todas as pessoas de sua família, a morte de quem você consideraria mais arrasadora?",
  "36. Compartilhe um problema pessoal e peça o conselho de seu (sua) parceiro(a) sobre como ele(a) lidaria com isso. Também peça a seu (sua) parceiro(a) para descrever a impressão dele(a) de como você parece se sentir quando fala sobre o problema que escolheu."
];

export default function RandomMessage() {
  const [message, setMessage] = useState<string | null>(null);

  const showRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={showRandomMessage}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Mostrar Mensagem Aleatória
      </button>
      {message && (
        <p
          style={{
            marginTop: '20px',
            fontSize: '18px',
            color: '#333',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}