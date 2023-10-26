


jQuery(document).ready(function(){

	$ = jQuery;
	
	$('.report-view a[data-toggle="tab"]').on('shown.bs.tab', function(){
		var $active_nav = $(this).data('active-nav');
		
		$('.report-view').find( '.' + $active_nav ).parent().addClass('active');
	  setTimeout( $charts(), 1000);
	});

	$('.primary-nav a').on('click', function(e){
		$('.secondary-nav li').removeClass('active');
	});
	
	$('.secondary-nav a').on('click', function(e){
		$('.primary-nav li').removeClass('active');
	});
	
});







var $charts = function(){

	/* EVOLUCIÓN HORARIA ---------------------------------------------------*/
  $('.chart-evolucion-horaria').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [13.8, 13.2, 12.9, 12.2, 11.7, 11.3, 12.0, 16.0, 18.4, 20.5, 22.9, 26.6, 27.6, 28.9, 29.1, 29.9, 31.0, 28.5, 24.1, 20.8, 17.6, 16.1, 15.6]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  
  
  /* OSCILACIÓN TÉRMICA ---------------------------------------------------*/
  $('.chart-oscilación-termica').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
    	type: 'datetime',
      categories: ['12/11/2014', '19/11/2014', '26/11/2014', '03/12/2014', '10/12/2014'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 15
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
    	{
	    	data: [
					[0, 30.6], [0.2, 28.8], [0.4, 29.1], [0.6, 26.5], [0.8, 30.1], 
					[1, 30.2], [1.2, 30.0], [1.4, 30.0], [1.6, 30.4], [1.8, 32.4], 
					[2, 31.3], [2.2, 30.9], [2.4, 30.1], [2.6, 29.7], [2.8, 34.5], 
					[3, 33.2], [3.2, 32.6], [3.4, 33.8], [3.6, 31.9], [3.8, 31.3], 
					[4, 32.4], [4.2, 31.3], [4.4, 32.4], [4.6, 31.3], [4.8, 30.9]
				],
				marker: { symbol: 'circle'}
			}, 
			{
				data: [
		    	[0, 10.7], [0.2, 10.5], [0.4, 10.0], [0.6, 10.2], [0.8, 8.6], 
		    	[1, 9.3], [1.2, 9.9], [1.4, 9.9], [1.6, 9.9], [1.8, 9.9], 
		    	[2, 9.9], [2.2, 12.9], [2.4, 10.1], [2.6, 10.3], [2.8, 9.8], 
		    	[3, 8.4], [3.2, 10.3], [3.4, 11.2], [3.6, 31.9], [3.8, 8.7], 
		    	[4, 11.0], [4.2, 11.1], [4.4, 10.2], [4.6, 10.6], [4.8, 10.4] 
		    ],
				marker: { symbol: 'circle'}
			},
			{
				data: [
					[0, 19.9], [0.2, 18.6], [0.4, 20.5], [0.6, 19.9], [0.8, 21.5], 
					[1, 22.1], [1.2, 19.0], [1.4, 20.7], [1.6, 19.6], [1.8, 19.8], 
					[2, 19.9], [2.2, 18.9], [2.4, 19.7], [2.6, 21.7], [2.8, 21.4], 
					[3, 20.2], [3.2, 20.7], [3.4, 19.5], [3.6, 19.3], [3.8, 23.1], 
					[4, 21.3], [4.2, 20.6], [4.4, 20.3], [4.6, 20.0], [4.8, 21.0]
		    ],
				marker: { symbol: 'circle'}
			}
		],
    credits:{ enabled: false }
  });
  
  
  
  
  
  
  /* HUMEDAD PROMEDIO ---------------------------------------------------*/
  $('.chart-humedad-promedio').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [22, 23, 19, 20, 17, 13, 12, 14, 15, 11, 12, 11, 12, 13, 13, 10, 10, 9, 9, 11, 8, 10, 11, 11, 10, 11, 16, 19, 16, 13]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  
  
  /* PRECIPITACIÓN DIARA ---------------------------------------------------*/
  $('.chart-daily-precipitation').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
    	categories: ['0'],
      labels: {
        format: '{value}mm'
      },
      tickInterval: 100,
      alternateGridColor: 'rgba(7, 149, 145, 0.15)',
      min: -100,
      max: 100
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [22, 12, -19, 0, -7, 8, 12, 14, 15, 11, 6, 0, 12, 13, -5, 0, -14, -8, -3, 4, 8, 10, 11, 15, 10, -3, 6, 19, 10, 3]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  
  /* PRECIPITACIÓN ACUMULADA ---------------------------------------------------*/
  $('.chart-accumulated-precipitation').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SET', 'OCT', 'NOV', 'DIC'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
    	categories: ['0'],
      title: {
        text: ''
      },
      labels: {
        format: '{value}mm'
      },
      tickInterval: 100,
      alternateGridColor: 'rgba(7, 149, 145, 0.15)',
      min: -100,
      max: 100
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [10, 7, -5, 13, 8, 0, -10, -6, 0, 8, 12, 13]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  /* RADIACIÓN SOLAR ---------------------------------------------------*/
  $('.chart-radiation').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [20, 22, 24, 25, 22, 22, 22, 27, 37, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  
  /* MÁXIMAS DIARIAS ---------------------------------------------------*/
  $('.chart-radiation-daily-max').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [22, 23, 19, 20, 17, 13, 12, 14, 15, 11, 12, 11, 10, 11, 16, 19, 16, 13, 11, 12, 13, 13, 10, 10, 9, 9, 11, 8, 10, 11]}
    ],
    credits:{ enabled: false }
  });





  /* PRESIÓN ATMOSFÉRICA ---------------------------------------------------*/
  $('.chart-pressure').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)',
      min: 720,
      max: 760
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [754, 754, 753, 753, 753, 753, 754, 754, 754, 754, 753, 753, 752, 751, 753, 754, 754, 754, 754, 753, 753, 752, 751, 752]}
    ],
    credits:{ enabled: false }
  });  
  
  
  
  
  
   /* VELOCIDAD MÁXIMA DEL VIENTO ---------------------------------------------------*/
  $('.chart-wind').highcharts({
  	chart: {
			type: 'column',
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}m/s',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      tickInterval: 2,
      min: 0,
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [5.0, 6.0, 6.0, 6.0, 6.0, 6.0, 5.0, 6.0, 5.0, 5.0, 7.0, 6.0, 7.0, 6.0, 6.0, 6.0, 6.0, 7.0, 7.0, 6.0, 7.0, 6.0, 6.0, 6.0, 6.0, 6.0, 6.0, 7.0, 6.0, 7.0]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  /* OSCILACIÓN TÉRMICA - EVOLUCIÓN HORARIA ---------------------------------------------------*/
  $('.chart-thermal-oscillation-hour').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [7.0, 6.2, 7.2, 8.2, 8.4, 7.6, 8.9, 13.7, 17.3, 20.3, 21.7, 22.6, 23.4, 23.5, 23.0, 22.6, 22.1, 21.0, 0, 0, 0, 0, 0, 0]}
    ],
    credits:{ enabled: false }
  });



  
  /* OSCILACIÓN TÉRMICA ---------------------------------------------------*/
  $('.chart-thermal-oscillation').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
    	type: 'datetime',
      categories: ['18/11/2014', '25/11/2014', '02/12/2014', '09/12/2014', '16/12/2014'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 15
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)'
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
    	{
	    	data: [
					[0, 30.6], [0.2, 28.8], [0.4, 29.1], [0.6, 26.5], [0.8, 30.1], 
					[1, 30.2], [1.2, 30.0], [1.4, 30.0], [1.6, 30.4], [1.8, 32.4], 
					[2, 31.3], [2.2, 30.9], [2.4, 30.1], [2.6, 29.7], [2.8, 34.5], 
					[3, 33.2], [3.2, 32.6], [3.4, 33.8], [3.6, 31.9], [3.8, 31.3], 
					[4, 32.4], [4.2, 31.3], [4.4, 32.4], [4.6, 31.3], [4.8, 30.9]
				],
				marker: { symbol: 'circle'}
			}, 
			{
				data: [
		    	[0, 10.7], [0.2, 10.5], [0.4, 10.0], [0.6, 10.2], [0.8, 8.6], 
		    	[1, 9.3], [1.2, 9.9], [1.4, 9.9], [1.6, 9.9], [1.8, 9.9], 
		    	[2, 9.9], [2.2, 12.9], [2.4, 10.1], [2.6, 10.3], [2.8, 9.8], 
		    	[3, 8.4], [3.2, 10.3], [3.4, 11.2], [3.6, 31.9], [3.8, 8.7], 
		    	[4, 11.0], [4.2, 11.1], [4.4, 10.2], [4.6, 10.6], [4.8, 10.4] 
		    ],
				marker: { symbol: 'circle'}
			},
			{
				data: [
					[0, 19.9], [0.2, 18.6], [0.4, 20.5], [0.6, 19.9], [0.8, 21.5], 
					[1, 22.1], [1.2, 19.0], [1.4, 20.7], [1.6, 19.6], [1.8, 19.8], 
					[2, 19.9], [2.2, 18.9], [2.4, 19.7], [2.6, 21.7], [2.8, 21.4], 
					[3, 20.2], [3.2, 20.7], [3.4, 19.5], [3.6, 19.3], [3.8, 23.1], 
					[4, 21.3], [4.2, 20.6], [4.4, 20.3], [4.6, 17.0], [4.8, 21.0]
		    ],
				marker: { symbol: 'circle'}
			}
		],
    credits:{ enabled: false }
  });
  
  
  
  
  
  /* GRADES DAY ---------------------------------------------------*/
  $('.chart-grades-day').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)',
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [694, 699, 705, 710, 716, 722, 728, 733, 739, 745, 751, 757, 764, 770, 778, 785, 792, 798, 805, 812, 818, 823, 830, 836, 841, 847, 853, 859, 865, 865]},
	    {data: [651, 655, 660, 665, 670, 676, 681, 687, 693, 700, 707, 714, 720, 727, 734, 740, 746, 753, 759, 765, 771, 777, 784, 790, 796, 803, 809, 816, 822, 829]}
    ],
    credits:{ enabled: false }
  });  
  
  


	/* GRADES GROUTH ---------------------------------------------------*/
  $('.chart-grades-grouth').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)',
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [694, 699, 705, 710, 716, 722, 728, 733, 739, 745, 751, 757, 764, 770, 778, 785, 792, 798, 805, 812, 818, 823, 830, 836, 841, 847, 853, 859, 865, 865]},
	    {data: [651, 655, 660, 665, 670, 676, 681, 687, 693, 700, 707, 714, 720, 727, 734, 740, 746, 753, 759, 765, 771, 777, 784, 790, 796, 803, 809, 816, 822, 829]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  /* POTENCIAL ---------------------------------------------------*/
  $('.chart-potential').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)',
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [8.24, 7.47, 8.06, 8.34, 7.99, 8.25, 8.55, 8.25, 8.29, 8.24, 8.15, 9.00, 8.67, 9.24, 9.24, 8.80, 9.29, 9.34, 9.15, 9.08, 9.08, 9.35, 8.37, 7.90, 8.54, 8.61, 8.07, 7.97, 8.12, 8.09]}
    ],
    credits:{ enabled: false }
  });
  
  
  
  
  /* DEW POINT ---------------------------------------------------*/
  $('.chart-dew-point').highcharts({
  	chart: {
      animation: {
        duration: 1000
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      labels: {
        distance: 20
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        format: '{value}º',
        distance: 20
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#666'
      }],
      alternateGridColor: 'rgba(7, 149, 145, 0.15)',
    },
    colors: ['#0E7B76', '#28A7CA', '#AC16B3'],
    tooltip: {
    	pointFormat: '{point.y}',
      valueSuffix: 'º',
      borderColor: '#079591'
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 100
    },
    series: [
	    {data: [7.4, 6.1, 7.1, 8.1, 8.4, 7.7, 8.6, 13.0, 17.0, 20.1, 21.5, 22.5, 23.3, 23.5, 23.1, 22.7, 22.2, 21.2, 19.8, 17.2, 14.5, 12.2, 11.3]},
	    {data: [-7.3, -7.1, -7.5, -7.9, -8.5, -7.8, -7.7, -7.0, -7.2, -6.9, -7.4, -7.4, -7.4, -7.2, -8.2, -7.2, -7.7, -7.9, -8.7, -7.2, -5.3, -5.1, -5.5]}
    ],
    credits:{ enabled: false }
  });






  
}; //$charts








						
						
						
						
						
