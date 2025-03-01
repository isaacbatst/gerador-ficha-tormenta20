import PERICIAS from '../pericias';

const BUCANEIRO = {
    name: 'Bucaneiro',
    pv: 16,
    addpv: 4,
    pm: 3,
    addpm: 3,
    periciasbasicas: [
        {
            type: 'or',
            list: [PERICIAS.LUTA, PERICIAS.PONTARIA]
        },
        {
            type: 'and',
            list: [PERICIAS.REFLEXOS]
        }],
    periciasrestantes: {
        qtd: 4,
        list: [PERICIAS.ACROBACIA, PERICIAS.ATLETISMO, PERICIAS.ATUACAO, PERICIAS.ENGANACAO, PERICIAS.FORTITUDE, PERICIAS.FURTIVIDADE, PERICIAS.INICIATIVA, PERICIAS.INTIMIDACAO, PERICIAS.JOGATINA, PERICIAS.LUTA, PERICIAS.OFICIO, PERICIAS.PERCEPCAO, PERICIAS.PILOTAGEM, PERICIAS.PONTARIA]
    },
    proeficiencias: ['Armas marciais.'],
    habilities: [
        {
            name: 'Audácia',
            text: 'Quando faz um teste de perícia, você pode gastar 2 PM para receber um bônus igual ao seu modificador de Carisma no teste. Você não pode usar esta habilidade em testes de ataque.',
            effect: null,
            nivel: 1
        },
        {
            name: 'Insolência',
            text: 'Você soma seu bônus de Carisma na Defesa, limitado pelo seu nível. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.',
            effect: null,
            nivel: 1
        }
    ],
    magics: [],
}

export default BUCANEIRO;