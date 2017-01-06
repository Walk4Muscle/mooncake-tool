module.exports = function ($scope, $timeout, $mdToast, CONST) {
	// fix files update
	$scope.CONST = CONST.APP_NAME;


	//first scetion 
	let chart1 = echarts.init($('#echart1')[0], 'macarons');
	var data1 = [];
	var data2 = [];
	var data3 = [];
	var now = +new Date();
	var oneMin = 60 * 1000;
	var value = Math.random() * 10;
	for (var i = 0; i < 100; i++) {
		data1.push(randomData());
		data2.push(randomData());
		data3.push(randomData());
	}
	let option1 = {
		legend: {
			data: ['MSDN/TN', 'SE', 'Twitter']
		},
		tooltip: {
			trigger: 'axis',
			formatter: function (params) {
				let ret = [];
				for (let i = 0; i < params.length; i++) {
					let param = params[i];
					let date = new Date(param.name);
					ret.push(param.seriesName + '@' + date.toString() + ' : ' + param.value[1]);
				}
				// params = params[0];
				// var date = new Date(params.name);
				// return params.seriesName + '@' + date.toString() + ' : ' + params.value[1];
				return ret.join("<br />");
			},
			axisPointer: {
				animation: false
			}
		},
		yAxis: {
			type: 'value',
			boundaryGap: [0, '100%']
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: true
			}
		},
		series: [{
			name: 'MSDN/TN',
			type: 'line',
			showSymbol: false,
			hoverAnimation: false,
			data: data1
		}, {
			name: 'SE',
			type: 'line',
			showSymbol: false,
			hoverAnimation: false,
			data: data2
		}, {
			name: 'Twitter',
			type: 'line',
			showSymbol: false,
			hoverAnimation: false,
			data: data3
		}]
	}

	$timeout(() => {
		chart1.setOption(option1);
		chart1.resize()
	}, 50);
	setInterval(function () {

		data1.shift();
		data1.push(randomData());
		data2.shift();
		data2.push(randomData());
		data3.shift();
		data3.push(randomData());

		chart1.setOption({
			series: [{
				name: 'MSDN/TN',
				data: data1
			}, {
				name: 'SE',
				data: data2
			}, {
				name: 'Twitter',
				data: data3
			}]
		});
	}, 1000);

	function randomData() {
		now = new Date(+now + oneMin);
		value = Math.random() * 10;
		return {
			name: now.toString(),
			value: [
				now,
				Math.round(value)
			]
		}
	}

	// second section table
	$scope.syncupjobtable = [{
		platform: 'MSDN/TN',
		status: 'Running',
		lastupdatetime: '2016-12-28',
		lastupdatestatus: 'success',
		nextruntime: '2016-12-29'
	},{
		platform: 'Twitter',
		status: 'Running',
		lastupdatetime: '2016-12-28',
		lastupdatestatus: 'success',
		nextruntime: '2016-12-29'
	},{
		platform: 'SE',
		status: 'Running',
		lastupdatetime: '2016-12-28',
		lastupdatestatus: 'success',
		nextruntime: '2016-12-29'
	}];
	
}