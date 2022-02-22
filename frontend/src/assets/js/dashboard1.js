function graph() {
    "use strict";
    // Dashboard 1 Morris-chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            Usuarios: 0,
            Sesiones: 0,
            itouch: 0
        }, {
            period: '2011',
            Usuarios: 130,
            Sesiones: 100,
            itouch: 80
        }, {
            period: '2012',
            Usuarios: 80,
            Sesiones: 60,
            itouch: 70
        }, {
            period: '2013',
            Usuarios: 70,
            Sesiones: 200,
            itouch: 140
        }, {
            period: '2014',
            Usuarios: 180,
            Sesiones: 150,
            itouch: 140
        }, {
            period: '2015',
            Usuarios: 105,
            Sesiones: 100,
            itouch: 80
        }, {
            period: '2016',
            Usuarios: 250,
            Sesiones: 150,
            itouch: 200
        }],
        xkey: 'period',
        ykeys: ['Usuarios', 'Sesiones'],
        labels: ['Usuarios', 'Sesiones'],
        pointSize: 0,
        fillOpacity: 0,
        pointStrokeColors: ['#f62d51', '#7460ee', '#009efb'],
        behaveLikeLine: true,
        gridLineColor: '#f6f6f6',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['#009efb', '#7460ee', '#009efb'],
        resize: true
    });
  }
