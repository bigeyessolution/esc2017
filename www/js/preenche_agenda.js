var agenda = false && localStorage.agenda ? JSON.parse(localStorage.agenda) :
{
    "version": 11,
    "palestrantes": [
                     {
                     "id": "sameer",
                     "nome": "Sameer Kher",
                     "organizacao": "ANSYS",
                     "especialidade": "Simulation-Based Digital Twins and the Industrial Internet of Things",
                     "descricao": "- Proven and top performing technology leader with 10+ years in R&#38;D management and program management in a fast-paced, global environment.<br>- Strong technical strength and business savvy, augmented by MS and MBA from top ranked schools.<br>- Experienced in developing and leading multi-functional teams.<br>- Broad experience in industry, ranging from developing game-changing innovations to identifying and executing M&#38;As."
                     }
                     ,{
                     "id": "rizzo",
                     "nome": "J. Rizzo Hahn Filho",
                     "organizacao": "ABII",
                     "especialidade": "Putting the Industrial Internet into practice",
                     "descricao": "Graduated in Mechanical Engineering, JosÃ© Rizzo Hahn Filho is founder and CEO of Pollux , a technology company dedicated to increasing the competitiveness of industry. Over the past 25 years, Rizzo has been heatrfully involved with industrial automation advancements in the world and its impacts in business and society. A frequent guest speaker in international events and conferences, Rizzo is also founder of the Industrial Internet Brazilian Association (ABII) and an Endeavor selected entrepreneur. Pollux has been recognized as one of the most innovative tech companies in the country by FINEP and appears in the list of the best 100 technology companies to work for in Brazil according to the Great Place to Work Institute."
                     }
                     ,{
                     "id": "elso",
                     "nome": "Elso Alberti Junior",
                     "organizacao": "Parque Tecnológico S.J. dos Campos",
                     "especialidade": "Challenges of Technology Park of Sao Jose dos Campos for the next decade",
                     "descricao": "Graduated in Aeronautical Engineering in 1980 by the Technological Institute of Aeronautics (ITA) with post-graduation in Business Administration by FGV in 1993. He is currently Technical and Operations Director of São José dos Campos Technology Park, with responsibilities as follows:<br>- The operation and expansion of the Park's infrastructure;<br>- The management of the project office with the preparation and execution of technological projects;<br>- Funding from funding and funding agencies;<br>- Attracting and installing and accompanying companies and technology-based institutions from start-up to large anchor companies;<br>- Structuring and implementation of the Multiuser Laboratories Platform to support R & D projects of companies and institutions linked to the Park.<br>With 38 years of professional experience, he also acted as:<br>- Director of R & D Programs at VSE - Vale Solutions in Energy of the Vale Group;<br>- Director of Projects and Contracts at Wobben Windpower of the Enercon Group;<br>- Industrial and Engineering Director at Avibras Aerospace.<br>He has intense experience in business development and the design and development of new products and systems with state-of-the-art technology for the defense, aeronautical, space and energy sectors."
                     }
                     ,{
                     "id": "rafael",
                     "nome": "Rafael Sartim",
                     "organizacao": "ArcelorMittal Brasil-AmÃ©rica do Sul",
                     "especialidade": "The use of Numerical Simulation in ARCELORMITTAL Group",
                     "descricao": "Atualmente Ã© engenheiro mecÃ¢nico na ArcelorMittal TubarÃ£o, com atuaÃ§Ã£o na Ã¡rea de projetos de VentilaÃ§Ã£o Industrial, TubulaÃ§Ã£o Industrial e cÃ¡lculos termofluidos atravÃ©s da ferramenta de MecÃ¢nica dos Fluidos e Tranferencia de Calor Computacional (CFD). Ã‰ professor efetivo do Departamento de Tecnologia Industrial da Universidade Federal do EspÃ­rito Santo (UFES)."
                     }
                     ],
    "agenda10": [
                 {"salahora": "8:00", "titulo": "REGISTRATION OPEN", "info": "", "divisao": true},
                 {
                 "collapsible": true,
                 "class": "ui-be-workshop-session",
                 "descricao": "ENGINEERING WORKSHOPS",
                 "salahora": "8:30",
                 "itens": [
                           {"salahora": "Lorangerie I - 8:30", "titulo": "Composite Design", "info": "Prof. Airton Nabarrete - ITA e Eduardo AraÃºjo - ESSS"},
                           {"salahora": "Lorangerie II - 8:30", "titulo": "Risk analysis: The effect of small scale geometry in the modelling of accidental gas dispersion using CFD", "info": "Prof. Savio Vianna - Unicamp"},
                           {"salahora": "Malmaison - 8:30", "titulo": "Industry 4.0", "info": "Leonardo Rangel e Juliano Mologni - ESSS"},
                           {"salahora": "Chambord - 8:30", "titulo": "Topology Optimization & Additive Manufacturing", "info": "Luiz Lima - ESSS"}
                           ]
                 },
                 {"salahora": "09:30", "titulo": "COFFEE BREAK", "info": "", "divisao": true},
                 {
                 "collapsible": true,
                 "class": "ui-be-plenary-session",
                 "descricao": "PLENARY SESSIONS",
                 "salahora": "10:00",
                 "itens": [
                           {"salahora": "Versailles - 10:00", "titulo": "Open Session", "info": "Clovis Maliska Jr., ESSS"},
                           {"salahora": "Versailles - 10:10", "titulo": "Simulation-Based Digital Twins and the Industrial Internet of Things", "info": "Sameer Kher, ANSYS", "keynote": "sameer"},
                           {"salahora": "Versailles - 10:40", "titulo": "Challenges of Technology Park of Sao Jose dos Campos for the next decade", "info": "Elso Alberti Junior, Parque TecnolÃ³gico SÃ£o JosÃ© dos Campos", "keynote": ""},
                           {"salahora": "Versailles - 11:10", "titulo": "Putting the Industrial Internet into practice", "info": "J. Rizzo Hahn Filho, ABII", "keynote": "rizzo"},
                           {"salahora": "Versailles - 11:40", "titulo": "The use of Numerical Simulation in ARCELORMITTAL Group", "info": "Rafael Sartim, ArcelorMittal", "keynote": "rafael"}
                           ]
                 },
                 {"salahora": "12:10", "titulo": "LUNCH", "info": "", "divisao": true},
                 {
                 "collapsible": true,
                 "class": "ui-be-pratic-session",
                 "descricao": "Lorangerie I - Structural Mechanics",
                 "salahora": "13:30",
                 "itens": [
                           {"salahora": "13:30", "titulo": "Topology Optimization Analysis in Workbench", "info": ""},
                           {"salahora": "13:50", "titulo": "Workflow and Usability Features in Workbench Mechanical", "info": ""},
                           {"salahora": "14:10", "titulo": "Rigid Body Dynamics Systems with Simplorer Integration", "info": ""}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-pratic-session",
                 "descricao": "Lorangerie II - Fluid Dynamics",
                 "salahora": "13:30",
                 "itens": [
                           {"salahora": "13:30", "titulo": "Co-simulaÃ§Ã£o System and ROM using Simplorer", "info": ""},
                           {"salahora": "13:50", "titulo": "Multiphase Flow", "info": ""},
                           {"salahora": "14:10", "titulo": "Overset Mesh using ANSYS Fluent", "info": ""}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-pratic-session",
                 "descricao": "Malmaison - Electromagnetics",
                 "salahora": "13:30",
                 "itens": [
                           {"salahora": "13:30", "titulo": "Simulation of Antennas on Platform using HFSS SBR+", "info": ""},
                           {"salahora": "13:50", "titulo": "Analysis of the magnetorestriction effect in transformers", "info": ""},
                           {"salahora": "14:10", "titulo": "TDM (Time Decomposition Method)", "info": ""}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-pratic-session",
                 "descricao": "Chambord - DEM &#38; Multiphysics",
                 "salahora": "13:30",
                 "itens": [
                           {"salahora": "13:30", "titulo": "Rocky DEM 4 - New Features", "info": ""},
                           {"salahora": "13:50", "titulo": "Rocky DEM - CFD Coupling", "info": ""},
                           {"salahora": "14:10", "titulo": "Multiphysics AIM", "info": ""}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-technical-session",
                 "descricao": "Lorangerie I - Structural Mechanics",
                 "salahora": "14:30",
                 "itens": [
                           {"salahora": "14:30", "titulo": "Assessment of the API 6AF sealing criterion compared to the one presented in ISO13268-7 standard", "info": "Guilherme Moura, TECHNIP FMC"},
                           {"salahora": "14:50", "titulo": "Implementation of custom material constitutive models in Ansys Mechanical using USERMAT subroutines", "info": "Lucas Breder Teixeira, Magnesita"},
                           {"salahora": "15:10", "titulo": "Spectral fatigue based on randon vibration simulation", "info": "Guilherme Espindola, EMBRACO"},
                           {"salahora": "15:30", "titulo": "Numerical Approach for Node Repositioning and its Benefits for Connecting Rod Structural Evaluation", "info": "Rafael Aguera, THYSSENKRUPP / Luiz Lima, ESSS"},
                           {"salahora": "16:20", "titulo": "Topology Optimization using ANSYS R18 at ZF do Brasil", "info": "Janaina Rodrigues / Sergio Ricardo Scabar, ZF do Brasil"},
                           {"salahora": "16:50", "titulo": "Acoustic noise modeling with excitations of electromagnetic forces on three phase induction motors", "info": "Julio Cesar da Silva, WEG"},
                           {"salahora": "17:00", "titulo": "Structural simulation applied to agricultural equipment", "info": "Ãllex Sander Cappellari / Rafael Kappaun / RÃ³binson JoÃ£o Jabuonski JÃºnior, STARA"},
                           {"salahora": "17:20", "titulo": "Use of aluminum foam to improve crashworthiness in automotive industry", "info": "Guilherme Rossi Reis, Felipe Biondo, MARCOPOLO"},
                           {"salahora": "17:40", "titulo": "Comparison between simplified API Flange models", "info": "Marco Alves, TECHNIP FMC"}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-technical-session",
                 "descricao": "Lorangerie II - Fluid Dynamics",
                 "salahora": "14:30",
                 "itens": [
                           {"salahora": "14:30", "titulo": "Use of dynamic similarity in the development of new hydraulics and their confirmation via Ansys CFX", "info": "Alison Arantes, KSB"},
                           {"salahora": "14:50", "titulo": "Simplified CFD model for the suction process of reciprocating compressor", "info": "Bruno Backes, EMBRACO"},
                           {"salahora": "15:10", "titulo": "Pump Improvement in a sold project", "info": "Ismael Schroer, Higra"},
                           {"salahora": "15:30", "titulo": "Heat Transfer Prediction in Hermetic Reciprocating Compressors", "info": "JÃ´natas Ferreira Lacerda, Tecumseh do Brasil"},
                           {"salahora": "16:20", "titulo": "CFD analysis of orifice plate with mass transfer", "info": "Gustavo SimÃµes, PETROBRAS"},
                           {"salahora": "16:50", "titulo": "Evaluation of a marine propeller using computational fluid dynamics", "info": "Airton PatrÃ­cio de Aquino JÃºnior / Jeferson Ferreira de Oliveira, CPN"},
                           {"salahora": "17:00", "titulo": "CFD analysis of fired furnace and flow induced distributions along pipes", "info": "Eduardo Oliveira, PETROBRAS"},
                           {"salahora": "17:20", "titulo": "Wind and Current Loads Determination on Offshore Rigs near Platforms", "info": "Daniel Fonseca, PETROBRAS"},
                           {"salahora": "17:40", "titulo": "Dense gas dispersion analysis for processing units", "info": "Thiago Felippe Ribeiro, UFRJ/ESSS"}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-technical-session",
                 "descricao": "Malmaison - Structural Mechanics",
                 "salahora": "14:30",
                 "itens": [
                           {"salahora": "14:30", "titulo": "Evaluation of the mechanical behavior of the chassis of a wheel loader", "info": "Bruno Tudeia, ISQ"},
                           {"salahora": "14:50", "titulo": "Thermal bump on plane mirror for IPE beamline monochromator - comparison between internal and side water cooling systems", "info": "Artur Clarindo Pinto, LNLS"},
                           {"salahora": "15:30", "titulo": "Stress and Deformation sAnalysis on high precision mirrors", "info": "Allan Gilmour Anderson Junior, LNLS"},
                           {"salahora": "15:30", "titulo": "Structural analysis of Chimney fixing system in the metal frame", "info": "Nelson Mateus Lorenzoni / JosÃ© Cleber Rodrigues da Silva, YARA"}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-technical-session",
                 "descricao": "Chambord - DEM & Multiphysics",
                 "salahora": "14:30",
                 "itens": [
                           {"salahora": "14:30", "titulo": "Application of Discrete Element Model to the development of agricultural machinery and equipment in the sugar-acohol industry", "info": "Ed Carlos Alves Rocha, CTBE"},
                           {"salahora": "14:50", "titulo": "Analysis of a CaCO3 calciner using one-way coupilng between Ansys Fluent (CFD) and Rocky DEM", "info": "Renata Favalli, DYNAMIS"},
                           {"salahora": "15:10", "titulo": "Railway wagonâ€™s floor structural analysis", "info": "Raidam Pereira Fernandes, VALE"},
                           {"salahora": "15:30", "titulo": "Development of a New FPSO concept", "info": "Anderson Takehiro Oshiro, Petrobras"}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-technical-session",
                 "descricao": "Malmaison - Fluid Dynamics",
                 "salahora": "16:20",
                 "itens": [
                           {"salahora": "16:20", "titulo": "Heat Transfer for Mixing Tanks (Traditional Method vs CFD Technology)", "info": "Alexandre Sampaio de Lima Malagodi, SEMCO"},
                           {"salahora": "16:50", "titulo": "Analysis of a fabric filter using CFD", "info": "Ana Clara Noronha, Arcelor Mittal"},
                           {"salahora": "17:00", "titulo": "Shock between reed valve and piston in FSI simulation of reciprocating compressors", "info": "Eduardo Postingel Falcetti, Tecumseh do Brasil"},
                           {"salahora": "17:20", "titulo": "3D Simulation of a Wind Turbine", "info": "Brenno Martins; Joseph Youssif Saab Junior, Instituto ESSS"},
                           {"salahora": "17:40", "titulo": "CFD analysis of deflagration to detonation phenomena", "info": "Leonardo Faria / Raphael Bacchi, ESSS"}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-technical-session",
                 "descricao": "Chambord - Electromagnetics",
                 "salahora": "16:20",
                 "itens": [
                           {"salahora": "16:20", "titulo": "How to gain prominence in the world market using knowledge and simulation tools", "info": "Marcelo Carneiro De Paiva, Inatel/ICC"},
                           {"salahora": "16:50", "titulo": "The use of HFSS for the development of antennas for 5G networks and radars", "info": "Igor Feliciano da Costa, Inatel"},
                           {"salahora": "17:00", "titulo": "Linear actuator analysis and design for valve application using 2D and 3D FEM", "info": "Thiago Akinaga, EMBRACO"},
                           {"salahora": "17:20", "titulo": "How Simulation-Based Digital Twins and the Industrial Internet of Things Can Improve Product and Process Performance", "info": "Carlo Arguinzoni, ANSYS"},
                           {"salahora": "17:40", "titulo": "Chip Package System Reliability on Drones", "info": "Juliano Mologni, ESSS"}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-technical-discussion",
                 "descricao": "TECHNICAL DISCUSSIONS",
                 "salahora": "18:00",
                 "itens": [
                           {"salahora": "18:00", "titulo": "Technical Discussion Structural Mechanics", "info": "Lorangerie I"},
                           {"salahora": "18:00", "titulo": "Technical Discussion Fluid Dynamics", "info": "Lorangerie II"},
                           {"salahora": "18:00", "titulo": "Technical Discussion Eletromagnetics", "info": "Chambord"}
                           ]
                 },
                 {
                 "collapsible": true,
                 "class": "ui-be-plenary-session",
                 "descricao": "CLOSING SESSION",
                 "salahora": "18:20",
                 "itens": [
                           {"salahora": "Versailles - 18:20", "titulo": "End Session", "info": "Chalenge Winners Announcement"}
                           ]
                 }
                 ]
    
    }

;

function setAgenda() {
    if (localStorage.agenda) {
        agenda = JSON.parse(localStorage.agenda);
    } else {
        localStorage.agenda = JSON.stringify(agenda);
    }
}

function showOneKeynote (keynoteId) {
    function _showOneKeynote (key, keynote) {
        if (keynote.id === keynoteId) {
            populateKeynote(0, keynote);
            return true;
        }
    }
    
    $.each(agenda.palestrantes, _showOneKeynote);
}

function populateKeynotes() {
    $.each(agenda.palestrantes, populateKeynote);
}

function populateKeynote(key,keynoteObj) {
    
    $('<div class="ui-body">' +
        '<img src="img/palestrantes/k_' + keynoteObj.id + '.png">' +
        '<h2>' + keynoteObj.nome + '</h2>' +
        '<h4>' + keynoteObj.organizacao + '</h4>' +
        '<h5><i>' + keynoteObj.especialidade + '</i></h5>' +
        '<p>' + keynoteObj.descricao + '</p></div>'
    ).appendTo('#conteudo-palestrantes');
}

function populateAgenda(toPage) {
    $('#' + toPage + ' .ui-be-agenda').empty();
    $('#' + toPage + ' .ui-be-agenda').listview("refresh");

    showLoading();

    var lista = agenda[toPage];
    var saida = '';
    var linhaID = 0;

    function populateSub(key, sub) {
        $('<li data-icon="false"><a' +
                (sub.link ? ' href="' + sub.link + '"' : '') +
                (sub.keynote ? " onclick=\"toKeynoteID('" + sub.keynote + "')\"" : '') +
                '><h2>' + sub.titulo + '</h2>' +
                '<p>' + sub.info + '</p>' +
                '<span>' + sub.salahora + '</span>' +
                '</a></li>').appendTo('#' + toPage + ' #item-agenda-' + linhaID);
    }

    function populate(key, linha) {
        if (linha.collapsible) {
            linhaID++;

            $('<li class="' + linha.class + ' ui-be-collapsible" data-role="collapsible" data-iconpos="false" data-inset="false">' +
                    '<h2>' + linha.descricao + '</h2>' +
                    '<ul id="item-agenda-' + linhaID + '" data-role="listview">')
                    .appendTo('#' + toPage + ' .ui-be-agenda');

            $.each(linha.itens, populateSub);

        } else {
            $('<li class="' + linha.class + '" data-icon="false"' + (linha.divisao ? ' data-role="list-divider"' : '') + '>' +
                    '<a ' + (linha.link ? 'href="' + linha.link + '"' : '') + '>' +
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

function getAgenda(toPage) {
    function done() {
        populateAgenda(toPage);
    }

    var urlAgenda = 'http://static.bigeyes.solutions/json/agenda.convergence.2017.json';

    $.getJSON(urlAgenda, function (data) {
        if (data.version <= agenda.version)
            return;

        agenda = data;
        localStorage.agenda = JSON.stringify(data);
    });
}

function toKeynoteID(keynoteid) {
    toKeynote = keynoteid;

    $(":mobile-pagecontainer").pagecontainer("change", "#palestrantes");
}
