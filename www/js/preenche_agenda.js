var agenda = false && localStorage.agenda ? JSON.parse(localStorage.agenda) :
{
	"version": 25,
	"agenda10" : [
		{"salahora": "8:30", "titulo": "Credenciamento", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-plenary-session",
			"descricao": "Plenária",
			"salahora": "9:00",
			"itens": [
				{"salahora": "9:00", "titulo": "Abertura", "info": "Marcus Reis, Vice-Presidente, ESSS"},
				{"salahora": "9:10", "titulo": "Desafios em Projetos de Plataformas de Produção de Petróleo e Gás: Histórico e iniciativas futuras", "info": "Jansen Martins Lopes"},
				{"salahora": "9:40", "titulo": "Simulação e IoT para Indústria de Petróleo e Gás", "info": "Vedanth Srinivasan"}
			]
		},
		{"salahora": "10:10", "titulo": "Coffee-Break", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-plenary-session",
			"descricao": "Plenária",
			"salahora": "10:40",
			"itens": [
				{"salahora": "10:40", "titulo": "Aplicação da Simulação Computacional na Engenharia de Equipamentos Subsea", "info": "Hugo Almeida"},
				{"salahora": "11:10", "titulo": "Software customizado para aplicações especiais em Petróleo e Gás", "info": "Leonardo Paes Rangel"},
				{"salahora": "11:40", "titulo": "CFDOIL - Trajetória e Homenagens", "info": "Clovis R. Maliska"}
			]
		},
		{"salahora": "12:30", "titulo": "Almoço", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-fluidodinamica-1",
			"descricao": "Fluidodinâmica I",
			"salahora": "13:00",
			"itens": [
				{"salahora": "13:00", "titulo": "Simulação de interação fluido-estrutural-acústica do sistema de flare de alta pressão da P58", "info": "Ana Paula Faria e Raphael Bacchi, ESSS e Ricardo Serfaty, PETROBRAS"},
				{"salahora": "13:30", "titulo": "Avaliação da injeção de spray em sistemas de topo de torres de destilação para controlar corrosão", "info": "Guilherme Pimentel de Maria da Silva e Gustavo José Simões, PETROBRAS"},
				{"salahora": "14:00", "titulo": "Utilização de fluidodinâmica computacional (CFD) para estudos de tochas (Flare)", "info": "Daniel Evandro Ludwig, Marcos Antonio Pinto do Amaral, Mauro Cresta de Barros Dolinsky e Renata Dias Ambrósio, PETROBRAS"},
				{"salahora": "14:30", "titulo": "Utilização de CFD em engenharia oceânica", "info": "Daniel Fonseca de Carvalho e Silva, PETROBRAS"},
				{"salahora": "15:00", "titulo": "Avaliação fluidodinâmica do conjunto flare/soprador de ar de uma unidade de processo", "info": "João Victor Barbosa Alves e Paulo Roberto Pagot, PETROBRAS/Radix"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-fluidodinamica-2",
			"descricao": "Fluidodinâmica II",
			"salahora": "13:00",
			"itens": [
				{"salahora": "13:00", "titulo": "Estudo em CFD do desempenho de ejetores", "info": "Michele Pedroso, PETROBRAS"},
				{"salahora": "13:30", "titulo": "Estudo de CFD de sistemas reativos compressíveis", "info": "Eduardo Oliveira, PETROBRAS"},
				{"salahora": "14:00", "titulo": "Avaliação da deposição de partículas em tubulações de uma instalação petroquímica usando CFD", "info": "Carlos Caruso, BRASKEM"},
				{"salahora": "14:30", "titulo": "Simulação fluidodinâmica da injeção de diesel para a preservação de uma flowline preenchida com óleo em águas ultraprofundas", "info": "Gabriel Goes, Queiroz Galvão"},
			    {"salahora": "15:00", "titulo": "Aplicação de fluidodinâmica computacional e sistemas de reatores na avaliação de equipamentos de processo", "info": "Ana Paula Faria, ESSS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-estrutural",
			"descricao": "Estrutural e Multifísica",
			"salahora": "13:00",
			"itens": [
				{"salahora": "13:00", "titulo": "Internet das coisas industrial: Explorando o potencial dos produtos e serviços conectados na indústria de O&G", "info": "Juliano Mologni, ESSS"},
				{"salahora": "13:30", "titulo": "Simulação acústica de silenciadores de um compressor de parafusos", "info": "Leonardo Junqueira Mattana Saturnino e Mateus Louis Vieira, PETROBRAS"},
				{"salahora": "14:00", "titulo": "Determinação da mínima perna de solda requerida em conexões de pequeno diâmetro com niples tipo meia luva", "info": "Hervandil Morosini Sant'Anna, PETROBRAS"},
				{"salahora": "14:30", "titulo": "Inovando no Projeto de Engenharia de Torres com Simulação Multifísica", "info": "Juliano Mologni e Mauricio Pacheco, ESSS e Batista Luz, Leo Snovareski e Ricardo Damian, Jet Towers"},
				{"salahora": "15:00", "titulo": "Absorção de energia de impacto em chapas de aço", "info": "Mario Castro, Technip"}
			]
		},
		{"salahora": "15:30", "titulo": "Coffee-Break", "info": "", "divisao": true},
		{
			"collapsible": true,
			"class": "ui-be-fluidodinamica-1",
			"descricao": "Fluidodinâmica I",
			"salahora": "16:00",
			"itens": [
				{"salahora": "16:00", "titulo": "Desafios tecnológicos e a contribuição de técnicas de simulação fluidodinâmica em projetos de construção de poços", "info": "Thiago Judson, PETROBRAS"},
				{"salahora": "16:30", "titulo": "Análise do escoamento em trocadores WHRU através de fluidodinâmica computacional", "info": "Karolline Ropelato e Raphael Bacchi, ESSS e Francisco Miller e Victor souza, PETROBRAS"},
				{"salahora": "17:00", "titulo": "Simulação de CFD de ciclones de entrada do separador de produção de uma plataforma", "info": "Fabricio Soares da Silva e João Victor Barbosa Alves, PETROBRAS/Radix"},
				{"salahora": "17:30", "titulo": "Análise de combustíveis e sistemas reativos com ANSYS Reaction Workbench e ANSYS Chemkin Pro", "info": "Raphael Bacchi, ESSS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-fluidodinamica-2",
			"descricao": "Fluidodinâmica II",
			"salahora": "16:00",
			"itens": [
				{"salahora": "16:00", "titulo": "Avaliação de falha por corrosão-erosão em linha de hidrocarboneto", "info": "Diogo Dantas Ribeiro, Fernando César Lopes de Oliveira e Franciele Meira Ferreira, PETROBRAS"},
				{"salahora": "16:30", "titulo": "CFD como ferramenta para alocação de detectores de gás: cuidados, desafios e incertezas associadas", "info": "Bruno Barbabela, Bureau Veritas"},
				{"salahora": "17:00", "titulo": "Metodologia baseada em escoamento para análise da operação de bombeio mecânico", "info": "Daniel da Cunha Ribeiro, UFES"},
				{"salahora": "17:30", "titulo": "Simulação fluidodinâmica de um sistema de flare", "info": "Karolline Ropelato e Rodrigo Peralta Muniz Moreira, ESSS e Frederico Catalao de Carvalho, PETROBRAS"}
			]
		},
		{
			"collapsible": true,
			"class": "ui-be-estrutural",
			"descricao": "Estrutural e Multifísica",
			"salahora": "16:00",
			"itens": [
				{"salahora": "16:00", "titulo": "Análise do comportamento de estacas torpedo em solos coesivos", "info": "José Renato, UFRJ"},
				{"salahora": "16:30", "titulo": "Avaliação numérica da passagem de PIG raspador em trechos de circuito teste da Petrobras", "info": "Maurício Rangel Pacheco e Raphael David Aquilino Bacchi, ESSS e Eduardo Teixeira e André Maricato, PETROBRAS"},
				{"salahora": "17:00", "titulo": "Exemplos de FEA para equipamentos submarinos: Comparação da abordagem de tensão local via DNVGL RP C203 / ANSYS ACT para a avaliação das tensões conforme API 17L", "info": "Hugo Almeida, Technip"},
				{"salahora": "17:30", "titulo": "Avaliação de VIV aplicado a equipamentos submarinos com fluidodinâmica computacional", "info": "Bianca Teixeira, ESSS"}
			]
		},
		{"salahora": "18:00", "titulo": "Sorteio e Encerramento", "info": "", "divisao": true}
	]

}
;

function setAgenda () {
	if (localStorage.agenda) {
		agenda = JSON.parse (localStorage.agenda);
	} else {
		localStorage.agenda = JSON.stringify(agenda);
	}
}

function populateAgenda(toPage) {
	$('#' + toPage + ' .ui-be-agenda').empty();
	$('#' + toPage + ' .ui-be-agenda').listview("refresh");

	showLoading();
	
	var lista = agenda[toPage];
	var saida = '';
	var linhaID = 0;

	function populateSub (key, sub) {
		$('<li data-icon="false"><a '+
		( sub.link ? 'href="' + sub.link + '"' : '' ) +
		'><h2>' + sub.titulo + '</h2>' +
		'<p>' + sub.info + '</p>' +
		'<span>' + sub.salahora + '</span>' +
		'</a></li>').appendTo('#' + toPage + ' #item-agenda-' + linhaID);
	}

	function populate (key, linha) {
		if (linha.collapsible)  {
			linhaID ++;

			$('<li class="' + linha.class + ' ui-be-collapsible" data-role="collapsible" data-iconpos="false" data-inset="false">' +
			'<h2>' + linha.descricao + '</h2>' +
			'<ul id="item-agenda-' + linhaID + '" data-role="listview">')
			.appendTo('#' + toPage + ' .ui-be-agenda');

			$.each(linha.itens, populateSub);

		} else {
			$('<li class="' + linha.class + '" data-icon="false"' + (linha.divisao? ' data-role="list-divider"' : '') + '>'+
			'<a ' + ( linha.link ? 'href="' + linha.link + '"' : '' ) + '>' +
			'<h2>' + linha.titulo + '</h2>' +
			'<p>' + linha.info + '</p>' + 
			'<span>' + linha.salahora + '</span>' +
			'</a></li>')
			.appendTo('#' + toPage + ' .ui-be-agenda');
		}
	}
				
	$.each(lista, populate);
		
	hideLoading();

	$('#' + toPage + ' .ui-be-agenda').listview("refresh");

	$('#' + toPage + ' .ui-be-collapsibleset').collapsibleset("refresh");
}

function getAgenda (toPage) {
	function done () {
		populateAgenda(toPage);
	}	

	var urlAgenda = 'http://static.bigeyessolution.com/json/agenda-esc-2016.json';

	$.getJSON(urlAgenda, function (data) {
		if (data.version <= agenda.version) return;

		agenda = data;
		localStorage.agenda = JSON.stringify(data);
	});
}
