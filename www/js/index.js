 /*
  * This file is part of Foobar.
  *
  * Foobar is free software: you can redistribute it and/or modify
  * it under the terms of the GNU General Public License as published by
  * the Free Software Foundation, either version 3 of the License, or
  * (at your option) any later version.
  *
  * Foobar is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
  */


$( document ).on( "mobileinit", function() {
	$.mobile.loader.prototype.options.text = "loading";
	$.mobile.loader.prototype.options.textVisible = false;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = '<i class="fa fa-pulse fa-spin fa-5x fa-fw margin-bottom"></i>';
});

$( document ).on( "pagecontainerbeforechange", function(event, ui) {
	$( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
});

$( document ).on( "pagecontainerchange", function(event, ui) {
	var toPage = $(ui.toPage).attr('id');
	var prevPage = $(ui.prevPage).attr('id');

	if (toPage === 'mapa') criarMapa();
	if (prevPage === 'mapa') destruirMapa();

	$( 'a[href="#' + toPage + '"]' ).addClass( "ui-btn-active" );

	$( 'a[href="#' + toPage + '"]' ).addClass( "ui-btn-active" );

	if (toPage == "agenda10") {
		populateAgenda(toPage);

		getAgenda (toPage);
	}

});

$(function() {
  $( "[data-role='navbar']" ).navbar();
  $( "[data-role='header']" ).toolbar();
});

function showLoading() {
	$.mobile.loading( "show", {
		text: "foo",
		textVisible: false,
		theme: "a",
		html: '<i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>'
	});
}

function hideLoading() {
	$.mobile.loading( "hide" );
}

function criarMapa () {
	$('#mapa .mapaView').append('<div id="mapaLocal">');

	var localLatLng = L.latLng(-22.9270885,-43.1760295);

	var map = L.map('mapaLocal', {
		zoom: 16,
		center: localLatLng,
		zoomControl: false
	}).setView([-22.9270885,-43.1760295],16);

	L.tileLayer(
		'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy;OSM contributors'
	}).addTo(map);

	L.marker(localLatLng).addTo(map);
}

function destruirMapa() {
	$('#mapa .mapaView').empty();
}

$( "#mpanel" ).trigger( "updatelayout" );
