// Definições: 
//     PÁGINA FAR
//         primeira página da Nota:
//             Limite: 10 registros para cada categoria
//         Demais páginas FAR:
//             Limite: 13 registros para cada categoria
//     PÁGINA CAIXA (necessariamente da segunda em diante E última)
//         Última página da Nota:
//             Limite: 6 registros para cada categoria
//         Demais páginas Caixa:
//             Limite: 9 registros por categoria
var strArr = "";
const pdfConfig = {
        orientation: 'p',
        unit: 'px',
        format: 'a4'
    }

const pageConfig = {
        margemSup: 32,
        margemInf: 32,
        margemEsq: 24,
        margemDir: 24,
    }

const espacamento = 2.5;
const linhaHeigth = 15;

var countPage=0;
var totalPaginas=0;

function tableFooterTitleSomaHeader(){
        colunas = [{desc: "legenda", width: 463.5},{desc: "valor", width: 70},]
        var result = [];
        for (var i = 0; i < colunas.length; i += 1) {
          result.push({
            id: colunas[i].desc,
            name: colunas[i].desc,
            prompt: colunas[i].desc,
            width: colunas[i].width,
            align: "center",
            padding: 0
          });
        }
        return result;
}

function tableFooterTitleSomaBody(legenda, valor){
    return [
        {
            "legenda": legenda,
            "valor": valor
        }];
}

function tableSubTitleHeader(){
    return [{
        id: "titulo",
        name: "titulo",
        prompt: "titulo",
        width: 533.5,
        align: "center",
        padding: 0
    }]
}

function tableSubTitleBody(conteudo){
    return [{"titulo": conteudo}];
}

function createHeaders(colunas) {
    var result = [];
    for (var i = 0; i < colunas.length; i += 1) {
        result.push({
        id: colunas[i].desc,
        name: colunas[i].desc,
        prompt: colunas[i].desc,
        width: colunas[i].width,
        align: "center",
        padding: 0
        });
    }
    return result;
    }
    
    var headers = createHeaders([
    {desc: "Tipo Despesa", width: 183.5},
    {desc: "Competência", width: 70},
    {desc: "Data Pgto.", width: 70},
    {desc: "Vlr. Principal", width: 70},
    {desc: "Fator Correção", width: 70},
    {desc: "Vlr. Corrigido", width: 70}     
    ]);

function imprimirNota(){
    // Parâmetros a receber
    const numeroNota = 120
    const titulo = 'RELATÓRIO DESPESAS A RESSARCIR'
    const subTitulo = 'Centralizadora Nacional de Patrimônio e Bens de Terceiros'
    const dataCalculo = "01/01/1900";
    const contrato = "999999999999";
    const arrendatário = "Helder Hermani Almeida e Sousa";
    const enderecoImovel = "Rua Oceano Atlântico, 136, Jardim Oceania, João Pessoa/PB. CEP: 58037-675"
    const observacoes = "Este é jum texto de observações para imprimir no final da Nota de débito, contendo wulquer pataquada para teste. Quero verificar quebra de linhas e enquadramentos e etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc ";
    const valorTotal = 'R$ 10.000,00'


    const bodyFARadm = [
        {
            "Tipo Despesa": '4- Pagamento de tributos Estaduais (IPTU) - Em atraso',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 1.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido": 1
        },
        {
            "Tipo Despesa": '3- Prestação ',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 10.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido": 2
        },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 3
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 4
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 5
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 6
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 7
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 8
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 9
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 10
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 11
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 12
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 13
        // },    
        // {
        //     "Tipo Despesa": '4- Pagamento de tributos Estaduais (IPTU) - Em atraso',
        //     "Competência": '08/2020',
        //     "Data Pgto.": '15/10/2021',
        //     "Vlr. Principal": 'R$ 1.000,00',
        //     "Fator Correção": '1,025478541',
        //     "Vlr. Corrigido": 14
        // },
        // {
        //     "Tipo Despesa": '3- Prestação ',
        //     "Competência": '08/2020',
        //     "Data Pgto.": '15/10/2021',
        //     "Vlr. Principal": 'R$ 10.000,00',
        //     "Fator Correção": '1,025478541',
        //     "Vlr. Corrigido": 15
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 16
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 17
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 18
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 19
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 20
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 21
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 22
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 23
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 24
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 25
        // },    
        // {
        //     "Tipo Despesa": '',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido": 26
        // },    
        
   
    ];

    const bodyFARjud = [
        {
            "Tipo Despesa": 'FAR Judicial 1',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 1.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 1.500,00'
        },
        {
            "Tipo Despesa": 'FAR Judicial 2',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 10.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 10.500,00'
        },    
        {
            "Tipo Despesa": 'FAR Judicial 3',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'FAR Judicial 4',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 5',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 6',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 7',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 8',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 9',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 10',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 11',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 12',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 13',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 14',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 15',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 16',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 17',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'FAR Judicial 18',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        
     
       
    ];

    
    const bodyCaixaAdm = [
        {
            "Tipo Despesa": 'CAIXA Judicial 1',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 1.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 1.500,00'
        },
        {
            "Tipo Despesa": 'CAIXA Judicial 2',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 10.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 10.500,00'
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 3',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 4',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 5',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 6',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },
       
    ];
    const bodyCaixaEncJud = [
        {
            "Tipo Despesa": 'CAIXA Judicial 1',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 1.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 1.500,00'
        },
        {
            "Tipo Despesa": 'CAIXA Judicial 2',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 10.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 10.500,00'
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 3',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 4',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 5',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 6',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },
        // {
        //     "Tipo Despesa": 'CAIXA Judicial 7',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'CAIXA Judicial 8',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'CAIXA Judicial 9',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },    
        // {
        //     "Tipo Despesa": 'CAIXA Judicial 10',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // },
        // {
        //     "Tipo Despesa": 'CAIXA Judicial 11',
        //     "Competência": '',
        //     "Data Pgto.": '',
        //     "Vlr. Principal": '',
        //     "Fator Correção": '',
        //     "Vlr. Corrigido":''
        // }  
    ];

    const bodyCaixaDespJud = [
        {
            "Tipo Despesa": 'CAIXA Judicial 1',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 1.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 1.500,00'
        },
        {
            "Tipo Despesa": 'CAIXA Judicial 2',
            "Competência": '08/2020',
            "Data Pgto.": '15/10/2021',
            "Vlr. Principal": 'R$ 10.000,00',
            "Fator Correção": '1,025478541',
            "Vlr. Corrigido":'R$ 10.500,00'
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 3',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 4',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 5',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        },    
        {
            "Tipo Despesa": 'CAIXA Judicial 6',
            "Competência": '',
            "Data Pgto.": '',
            "Vlr. Principal": '',
            "Fator Correção": '',
            "Vlr. Corrigido":''
        }    
    ];


    //    Veriricar quantidade de páginas
    
    const qtdLimiteFarIni = 10
    const qtdLimiteFarIntermed = 13
    const qtdLimiteCaixaFim = 6
    const qtdLimiteCaixaIntermed = 9

    // var arrPagsFARadm = [];
    // var arrPagsFARjud = [];

    // var arrPagsCaixadm = [];
    // var arrPagsCaixaEncJud = [];
    // var arrPagsCaixaDespJud = [];

    const paginacaoFAR = makePaginationFAR(bodyFARadm, bodyFARjud, qtdLimiteFarIni, qtdLimiteFarIntermed);
    const qtdPagFar = paginacaoFAR.qtdPaginas;
    const arrPagsFARadm = paginacaoFAR.paginacaoADM;
    const arrPagsFARjud = paginacaoFAR.paginacaoJUD;

    const paginacaoCAIXA = makePaginationCaixa(bodyCaixaAdm, bodyCaixaEncJud, bodyCaixaDespJud, qtdLimiteCaixaIntermed, qtdLimiteCaixaFim);
    const qtdPagCaixa = paginacaoCAIXA.qtdPaginas;
    const arrPagsCaixaAdm = paginacaoCAIXA.paginacaoADM;
    const arrPagsCaixaEncJud = paginacaoCAIXA.paginacaoEncJUD;
    const arrPagsCaixaDespJud = paginacaoCAIXA.paginacaoDespJUD;
    
    totalPaginas = qtdPagFar + qtdPagCaixa;

    var doc = new jsPDF(pdfConfig)

    // ====================================================

    //PÁGINA RESSARCIMENTO FAR - PRIMEIRA PÁGINA DA NOTA
    for (var pagFar = 1; pagFar <= qtdPagFar;pagFar++){
        countPage=countPage+1;
        if (pagFar == 1){
            var posY = 0;
            criaCabecalho(doc, titulo, subTitulo);
        
            doc.setFontType("bold");
            doc.text("Nota de Débito nº: " + numeroNota, 400, 75, null, null, "right");
            doc.setFontType("normal");
            doc.setFontSize(10);
            doc.text("Data do cálculo: " + dataCalculo + " - Correção pela SELIC diária", 400, 85, null, null, "right");
        
            doc.setFontSize(12);
        
            strArr = doc.splitTextToSize("Contrato nº " + contrato + " - Arrendatário(a) " + arrendatário, 400)
            posY = 115
            doc.text(strArr, pageConfig.margemEsq, posY);
        
            posY = posY + (strArr.length*8) + espacamento;
            
            strArr = doc.splitTextToSize("Logradouro: " + enderecoImovel + ".", 400)
            doc.text(strArr, pageConfig.margemEsq, posY);
           
            posY = posY + (strArr.length*10) + (5*espacamento);
        
            // Tabelas Ressarcimento FAR
            doc.setFontType("bold");
            doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('A - VALORES A RESSARCIR AO FAR'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })
        
            posY = posY + linhaHeigth + espacamento;
            doc.setFont("Helvetica", "italic");
            doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('A.1 Valores principais de despesas pagas pelo FAR na esfera administrativa'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })
            posY = posY + linhaHeigth;
            
            doc.cell(pageConfig.margemEsq,posY,400,linhaHeigth,doc.table(pageConfig.margemEsq, posY, arrPagsFARadm[0], headers, { autoSize: false, fontSize: 9, printHeaders: true }),2);
        
            posY  = calculaPosYFARjud(posY,arrPagsFARadm[0].length);
        
            doc.setFont("Helvetica", "italic");
            doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('A.2 Valores principais de despesas pagas pelo FAR em condenação judicial'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })
        
            posY = posY + linhaHeigth;
            doc.table(pageConfig.margemEsq, posY, arrPagsFARjud[0], headers, { autoSize: false, fontSize: 9, printHeaders: true });        
            addPage(doc,countPage,totalPaginas);
        }else{
            addPageFAR(doc,arrPagsFARadm[pagFar-1],arrPagsFARjud[pagFar-1]);
        }
    }
    addSubTotalFAR(doc, 'R$ 150,00')
    addPage(doc,countPage,totalPaginas);

    //PÁGINA RESSARCIMENTO CAIXA
    for (var iPagCx=0;iPagCx<=qtdPagCaixa-1;iPagCx++){
        countPage=countPage+1;
        addPageCaixa(doc,arrPagsCaixaAdm[iPagCx],arrPagsCaixaEncJud[iPagCx],arrPagsCaixaDespJud[iPagCx]);
        if (iPagCx == qtdPagCaixa-1){
            addSubTotalCaixa(doc, 'R$ 1.000,00')
        }
        addPage(doc,countPage,totalPaginas);
    }
    
    
    addFooterTotal(doc, observacoes, valorTotal);
  
    doc.save('a4.pdf')

       
}

function criaCabecalho(doc, titulo, subTitulo){
    const dataImg = `data:image/jpeg;base64,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`
    doc.addImage(dataImg, 'JPEG', pageConfig.margemEsq, pageConfig.margemSup-7, 77, 18);
    doc.setFont("Helvetica", "normal");
    doc.setFontType("bold");
    doc.setFontSize(12);
    doc.text(titulo, pageConfig.margemEsq+77+16, pageConfig.margemSup);
    doc.setFont("Helvetica", "normal");
    doc.text(subTitulo, pageConfig.margemEsq+77+16, pageConfig.margemSup+10);
}

// function criaDescritivoRelatorio(doc, numeroNota, dataCalculo){
//     doc.text("Número da Nota: " + numeroNota, 400, 85, null, null, "right");
//     doc.text("Data do cálculo: " + dataCalculo + " - Correção pela SELIC diária", 400, 100, null, null, "right");
//     return 100;
// }

// function criaQualificacaoCliente(doc, posY, contrato, arrendatário, enderecoImovel){
//     var strArr = doc.splitTextToSize("Contrato nº " + contrato + " - Arrendatário(a) " + arrendatário, 400)
//     doc.text(strArr, pageConfig.margemEsq, posY);
    
//     posY = posY + (strArr.length*10) + espacamento;
    
//     strArr = doc.splitTextToSize("Logradouro: " + enderecoImovel + ".", 400)
//     doc.text(strArr, pageConfig.margemEsq, posY);

//     return posY + (strArr.length*10) + (5*espacamento);
// }

function addPageCaixa(doc, bodyCaixaAdm, bodyCaixaEncJud, bodyCaixaDespJud){
    doc.addPage();
    
    posY = pageConfig.margemSup;

    doc.setFontType("bold");
    doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('A - VALORES A RESSARCIR À CAIXA'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })

    posY = posY + linhaHeigth + espacamento;
    doc.setFont("Helvetica", "italic");
    doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('B.1 Valores de despesas pagas pela CAIXA na esfera administrativa'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })
    posY = posY + linhaHeigth;
    
    doc.cell(pageConfig.margemEsq,posY,400,linhaHeigth,doc.table(pageConfig.margemEsq, posY, bodyCaixaAdm, headers, { autoSize: false, fontSize: 9, printHeaders: true }),2);

    posY = posY + (linhaHeigth) + (bodyCaixaAdm.length*linhaHeigth) + (3*espacamento);

    doc.setFont("Helvetica", "italic");
    doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('B.2 Valores dos encargos de despesas pagas pela CAIXA em condenação judicial'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })

    posY = posY + linhaHeigth;
    doc.table(pageConfig.margemEsq, posY, bodyCaixaEncJud, headers, { autoSize: false, fontSize: 9, printHeaders: true });

    posY = posY + (linhaHeigth) + (bodyCaixaEncJud.length*linhaHeigth) + (3*espacamento);

    doc.setFont("Helvetica", "italic");
    doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('B.3 Valores de outros despesas pagas pela CAIXA em condenação judicial'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })

    posY = posY + linhaHeigth;
    doc.table(pageConfig.margemEsq, posY, bodyCaixaDespJud, headers, { autoSize: false, fontSize: 9, printHeaders: true, headerBackgroundColor: "#FFFFFF" });



    // doc.setFontType("bold");
    // posY = posY + (linhaHeigth) + (bodyCaixaDespJud.length*linhaHeigth) + (3*espacamento);
    // doc.table(pageConfig.margemEsq, posY, tableFooterTitleSomaBody('Subtotal B - Valores a ressarcir à CAIXA', 'R$ 150,00'), tableFooterTitleSomaHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })
}

function addPageFAR(doc, bodyFARadm, bodyFARjud){
    doc.addPage();
    
    posY = pageConfig.margemSup;

    doc.setFontType("bold");
    doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('A - VALORES A RESSARCIR AO FAR'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })

    posY = posY + linhaHeigth + espacamento;
    doc.setFont("Helvetica", "italic");
    doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('A.1 Valores principais de despesas pagas pelo FAR na esfera administrativa'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })
    posY = posY + linhaHeigth;
    
    doc.cell(pageConfig.margemEsq,posY,400,linhaHeigth,doc.table(pageConfig.margemEsq, posY, bodyFARadm, headers, { autoSize: false, fontSize: 9, printHeaders: true }),2);

    posY = posY + (linhaHeigth) + (bodyFARadm.length*linhaHeigth) + (3*espacamento);

    doc.setFont("Helvetica", "italic");
    doc.table(pageConfig.margemEsq, posY, tableSubTitleBody('A.2 Valores principais de despesas pagas pelo FAR em condenação judicial'), tableSubTitleHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })

    posY = posY + linhaHeigth;
    doc.table(pageConfig.margemEsq, posY, bodyFARjud, headers, { autoSize: false, fontSize: 9, printHeaders: true });
}

function addSubTotalFAR(doc, valor, posY){
    doc.setFontType("bold");
    posY = 541;
    doc.table(pageConfig.margemEsq, posY, tableFooterTitleSomaBody('Subtotal A - Valores a ressarcir ao FAR', valor), tableFooterTitleSomaHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })   
}

function addSubTotalCaixa(doc, valor){
    doc.setFontType("bold");
    posY = 432;
    doc.table(pageConfig.margemEsq, posY, tableFooterTitleSomaBody('Subtotal B - Valores a ressarcir à CAIXA', valor), tableFooterTitleSomaHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })   
}

function addFooterTotal(doc, observacoes, valorTotal){
    var posY = 500
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10)
    doc.text('OBSERVAÇÕES:',pageConfig.margemEsq,posY)
    posY = posY + linhaHeigth;

    doc.setFont("Helvetica", "normal");
    strArr = doc.splitTextToSize(observacoes, 390);
    doc.text(strArr,pageConfig.margemEsq,posY);
    
    
    posY = posY + (strArr.length*linhaHeigth);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(12)
    doc.table(pageConfig.margemEsq, posY, tableFooterTitleSomaBody('TOTAL DESPESAS A RESSARCIR (A+B)', valorTotal), tableFooterTitleSomaHeader(), { autoSize: false, fontSize: 10, printHeaders: false, headerBackgroundColor: "#FF0000" })
}

function addPage(doc, currentPage, totalPages){
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Pág. " + currentPage + " / "  + totalPages, 400, 600, null, null, "right");
}

function calculaPosYFARjud(posY, farAdmLenght){
    if (farAdmLenght >= 30){
        const qtdPags = parseInt(farAdmLenght/30)
        return  pageConfig.margemSup + (linhaHeigth) + ((farAdmLenght-(qtdPags*30))*linhaHeigth) + (3*espacamento);
    }else{
        return  posY + (linhaHeigth) + (farAdmLenght*linhaHeigth) + (3*espacamento);
    }    
}

function makePaginationFAR(bodyFARadm, bodyFARjud, qtdLimiteFarIni, qtdLimiteFarIntermed){
    var qtdPagFar = 1;
    var arrPagsFARadm = [];
    var arrPagsFARjud = [];

    const emptyObj = {
        "Tipo Despesa": '',
        "Competência": '',
        "Data Pgto.": '',
        "Vlr. Principal": '',
        "Fator Correção": '',
        "Vlr. Corrigido":''
    }    

    if ((bodyFARadm.length / qtdLimiteFarIni > 1) || bodyFARjud.length / qtdLimiteFarIni > 1){
        if (bodyFARadm.length > bodyFARjud.length){
            qtdPagFar = parseInt(bodyFARadm.length / qtdLimiteFarIni) + 1
        }else{
            qtdPagFar = parseInt(bodyFARjud.length / qtdLimiteFarIni) + 1
        }

        // Divide os conjuntos em suas respectivas páginas - DESPESAS FAR
        for (var i=0;i<=qtdPagFar-1;i++){
            var paginaFARadm = []
            var paginaFARjud = []
            if (i ==0) {
                paginaFARadm = bodyFARadm.slice(i,qtdLimiteFarIni)
                paginaFARjud = bodyFARjud.slice(i,qtdLimiteFarIni)

                if (paginaFARadm.length < qtdLimiteFarIni){
                    for (var ifarAdm = paginaFARadm.length; ifarAdm <= qtdLimiteFarIni-1; ifarAdm++){
                        paginaFARadm.push(emptyObj);
                    }
                }

                if (paginaFARjud.length < qtdLimiteFarIni){
                    for (var ifarJud = paginaFARjud.length; ifarJud <= qtdLimiteFarIni-1; ifarJud++){
                        paginaFARjud.push(emptyObj);
                    }
                }
            }else{
                var iIni = 0;
                if (i==1){
                    iIni = (i*qtdLimiteFarIni)
                }else{
                    iIni = (i*qtdLimiteFarIni)+(qtdLimiteFarIntermed-qtdLimiteFarIni)
                }

                if (iIni+qtdLimiteFarIntermed > bodyFARadm.length){
                    paginaFARadm = bodyFARadm.slice(iIni) 
                    var limite =0;
                    if (i==0){
                        limite = qtdLimiteFarIni
                    }else{
                        limite = qtdLimiteFarIntermed
                    }
                    for (var iFarAdm = paginaFARadm.length; iFarAdm <= limite-1; iFarAdm++){
                        paginaFARadm.push(emptyObj);
                    }
                }else{
                    paginaFARadm = bodyFARadm.slice(iIni,qtdLimiteFarIntermed+iIni)
                }

                if (iIni+qtdLimiteFarIntermed > bodyFARjud.length){
                    paginaFARjud = bodyFARjud.slice(iIni) 
                    var limite =0;
                    if (i==0){
                        limite = qtdLimiteFarIni
                    }else{
                        limite = qtdLimiteFarIntermed
                    }
                    for (var iFARjud = paginaFARjud.length; iFARjud <= limite-1; iFARjud++){
                        paginaFARjud.push(emptyObj);
                    }
                }else{
                    paginaFARjud = bodyFARjud.slice(iIni,qtdLimiteFarIntermed+iIni)
                }
                
            }
            arrPagsFARadm.push(paginaFARadm)
            arrPagsFARjud.push(paginaFARjud)
        }
    }else{
        for (var iFarAdm = bodyFARadm.length; iFarAdm <= qtdLimiteFarIni-1; iFarAdm++){
            bodyFARadm.push(emptyObj);
        }

        for (var iFARjud = bodyFARjud.length; iFARjud <= qtdLimiteFarIni-1; iFARjud++){
            bodyFARjud.push(emptyObj);
        }

        qtdPagFar = 1;
        arrPagsFARadm = [bodyFARadm];
        arrPagsFARjud = [bodyFARjud];
    }

    return {
        qtdPaginas: qtdPagFar,
        paginacaoADM: arrPagsFARadm,
        paginacaoJUD: arrPagsFARjud
    }
}

function makePaginationCaixa(bodyCaixaAdm, bodyCaixaEncJud, bodyCaixaDespJud, qtdLimiteCaixaIntermed, qtdLimiteCaixaFim){
    debugger;
    var qtdPagCaixa = 1;
    var arrPagsCaixaAdm = [];
    var arrPagsCaixaEncJud = [];
    var arrPagsCaixaDespJud = [];

    const emptyObj = {
        "Tipo Despesa": '',
        "Competência": '',
        "Data Pgto.": '',
        "Vlr. Principal": '',
        "Fator Correção": '',
        "Vlr. Corrigido":''
    }    

    var qtdPagCaixaAdm = parseInt(bodyCaixaAdm.length / qtdLimiteCaixaFim);
    var qtdPagCaixaEncJud = parseInt(bodyCaixaEncJud.length / qtdLimiteCaixaFim);
    var qtdPagCaixaDespJud = parseInt(bodyCaixaDespJud.length / qtdLimiteCaixaFim);

    if (bodyCaixaAdm.length % qtdLimiteCaixaFim != 0){
        qtdPagCaixaAdm=qtdPagCaixaAdm+1;
    }

    if (bodyCaixaEncJud.length % qtdLimiteCaixaFim != 0){
        qtdPagCaixaEncJud=qtdPagCaixaEncJud+1;
    }

    if (bodyCaixaDespJud.length % qtdLimiteCaixaFim != 0){
        qtdPagCaixaAdm=qtdPagCaixaDespJud+1;
    }

    if ((qtdPagCaixaAdm > 1) || qtdPagCaixaEncJud > 1 || qtdPagCaixaDespJud > 1){
        // const arrQtdPags = [qtdPagCaixaAdm, qtdPagCaixaEncJud, qtdPagCaixaDespJud];

        qtdPagCaixa = [qtdPagCaixaAdm, qtdPagCaixaEncJud, qtdPagCaixaDespJud].sort()[2]

        // Divide os conjuntos em suas respectivas páginas - DESPESAS CAIXA
        for (var i=0;i<=qtdPagCaixa-1;i++){
            var paginaCaixaAdm = []
            var paginaCaixaEncJud = []
            var paginaCaixaDespJud = []
            if (i != qtdPagCaixa-1) {   //Não é última página
                paginaCaixaAdm = bodyCaixaAdm.slice(i,qtdLimiteCaixaIntermed)
                paginaCaixaEncJud = bodyCaixaEncJud.slice(i,qtdLimiteCaixaIntermed)
                paginaCaixaDespJud = bodyCaixaDespJud.slice(i,qtdLimiteCaixaIntermed)

                if (paginaCaixaAdm.length < qtdLimiteCaixaIntermed){
                    for (var icaixaAdm = paginaCaixaAdm.length; icaixaAdm <= qtdLimiteCaixaIntermed-1; icaixaAdm++){
                        paginaCaixaAdm.push(emptyObj);
                    }
                }

                if (paginaCaixaEncJud.length < qtdLimiteCaixaIntermed){
                    for (var icaixaEncJud = paginaCaixaEncJud.length; icaixaEncJud <= qtdLimiteCaixaIntermed-1; icaixaEncJud++){
                        paginaCaixaEncJud.push(emptyObj);
                    }
                }

                if (paginaCaixaDespJud.length < qtdLimiteCaixaIntermed){
                    for (var icaixaDespJud = paginaCaixaDespJud.length; icaixaDespJud <= qtdLimiteCaixaIntermed-1; icaixaDespJud++){
                        paginaCaixaDespJud.push(emptyObj);
                    }
                }
            }else{
                var iIni = 0;
                // if (i==1){
                    iIni = (i*qtdLimiteCaixaIntermed)
                // }else{
                //     iIni = (i*qtdLimiteFarIni)+(qtdLimiteFarIntermed-qtdLimiteFarIni)
                // }

                if (iIni+qtdLimiteCaixaFim > bodyCaixaAdm.length){
                    paginaCaixaAdm = bodyCaixaAdm.slice(iIni) 
                    var limite =0;
                    // Preenche com objetos vazios para preencher a tabela
                    if (i==qtdPagCaixa-1){
                        limite = qtdLimiteCaixaFim
                    }else{
                        limite = qtdLimiteCaixaIntermed
                    }
                    for (var icaixaAdm = paginaCaixaAdm.length; icaixaAdm <= limite-1; icaixaAdm++){
                        paginaCaixaAdm.push(emptyObj);
                    }
                }else{
                    paginaCaixaAdm = bodyCaixaAdm.slice(iIni,qtdLimiteCaixaIntermed+iIni)
                }

                if (iIni+qtdLimiteCaixaFim > bodyCaixaEncJud.length){
                    paginaCaixaEncJud = bodyCaixaEncJud.slice(iIni) 
                    var limite =0;
                    // Preenche com objetos vazios para preencher a tabela
                    if (i==qtdPagCaixa-1){
                        limite = qtdLimiteCaixaFim
                    }else{
                        limite = qtdLimiteCaixaIntermed
                    }
                    for (var icaixaEncJud = paginaCaixaEncJud.length; icaixaEncJud <= limite-1; icaixaEncJud++){
                        paginaCaixaEncJud.push(emptyObj);
                    }
                }else{
                    paginaCaixaEncJud = bodyCaixaEncJud.slice(iIni,qtdLimiteCaixaIntermed+iIni)
                }

                if (iIni+qtdLimiteCaixaFim > bodyCaixaDespJud.length){
                    paginaCaixaDespJud = bodyCaixaDespJud.slice(iIni) 
                    var limite =0;
                    // Preenche com objetos vazios para preencher a tabela
                    if (i==qtdPagCaixa-1){
                        limite = qtdLimiteCaixaFim
                    }else{
                        limite = qtdLimiteCaixaIntermed
                    }
                    for (var iCaixaDespJud = paginaCaixaDespJud.length; iCaixaDespJud <= limite-1; iCaixaDespJud++){
                        paginaCaixaDespJud.push(emptyObj);
                    }
                }else{
                    paginaCaixaDespJud = bodyCaixaDespJud.slice(iIni,qtdLimiteCaixaIntermed+iIni)
                }

            }
            arrPagsCaixaAdm.push(paginaCaixaAdm)
            arrPagsCaixaEncJud.push(paginaCaixaEncJud)
            arrPagsCaixaDespJud.push(paginaCaixaDespJud)
        }
    }else{
        qtdPagCaixa = 1;
        arrPagsCaixaAdm = [bodyCaixaAdm];
        arrPagsCaixaEncJud = [bodyCaixaEncJud];
        arrPagsCaixaDespJud = [bodyCaixaDespJud];
    }

    return {
        qtdPaginas: qtdPagCaixa,
        paginacaoADM: arrPagsCaixaAdm,
        paginacaoEncJUD: arrPagsCaixaEncJud,
        paginacaoDespJUD: arrPagsCaixaDespJud
    }
}