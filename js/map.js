//定义app实例
var app = new Vue({
    el: '#app',
    data: {
        bottomData: [
            {
                id: 0,
                data: 145,
                obj: {
                    height: '145px'
                }
            }, {
                id: 1,
                data: 55,
                obj: {
                    height: '55px'
                }
            }, {
                id: 2,
                data: 88,
                obj: {
                    height: '88px'
                }
            }, {
                id: 3,
                data: 205,
                obj: {
                    height: '205px'
                }
            }, {
                id: 4,
                data: 145,
                obj: {
                    height: '145px'
                }
            }, {
                id: 5,
                data: 55,
                obj: {
                    height: '55px'
                }
            }, {
                id: 6,
                data: 30,
                obj: {
                    height: '30px'
                }
            }, {
                id: 7,
                data: 230,
                obj: {
                    height: '230px'
                }
            }, {
                id: 8,
                data: 75,
                obj: {
                    height: '75px'
                }
            }, {
                id: 9,
                data: 65,
                obj: {
                    height: '65px'
                }
            }, {
                id: 10,
                data: 30,
                obj: {
                    height: '30px'
                }
            }, {
                id: 11,
                data: 230,
                obj: {
                    height: '230px'
                }
            }
        ]
    }

})

$(document).ready(function () {
    //初始化地图和折线图
    var map = echarts.init(document.getElementById('main'));
    var linechart1 = echarts.init(document.getElementById('myChart'))


    /******
     * 初始化数据
     */


        //启动次数
    var qidongchishu = [{
            "name": "北京",
            "value": 599
        }, {
            "name": "上海",
            "value": 142
        }, {
            "name": "黑龙江",
            "value": 44
        }, {
            "name": "深圳",
            "value": 92
        }, {
            "name": "湖北",
            "value": 810
        }, {
            "name": "四川",
            "value": 453
        }]
    var leijiquezhen = [220, 232, 201, 234, 290, 230, 220] //累计确诊
    var leijizhiyu = [120, 200, 150, 80, 70, 110, 130] //累计治愈
    var leijishiwang = [20, 101, 150, 180, 450, 680, 800]//累计死亡

    //定义中国地图配置
    option1 = {
        // 进行相关配置
        backgroundColor: "#F7FBFE",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
            show: false,
            min: 0,
            max: 1000,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
        },
        geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: false,
			zoom:1.2,
            label: {
                normal: {
                    show: true, // 是否显示对应地名
                    textStyle: {
						fontSize:'12px',
                        color: 'rgba(0,0,0,0.4)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0, 0, 0, 0.2)'
                },
                emphasis: {
                    areaColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo' // 对应上方配置
        },
            {
                name: '启动次数', // 浮动框的标题
                type: 'map',
                geoIndex: 0,
                data: qidongchishu
            }
        ]


    };
	
	
	
	// 折线图
	const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
	option4 = {
	    backgroundColor: '#fff',
	    legend: {
	        icon: 'circle',
			right:'center',
			top:'5%',
			show:true,
	        itemWidth: 6,
	        itemGap: 20,
			data:['累计确诊','累计治愈','累计死亡'],
	        textStyle: {
	            color: '#556677'
	        }
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            label: {
	                show: true,
	                backgroundColor: '#fff',
	                color: '#556677',
	                borderColor: 'rgba(0,0,0,0)',
	                shadowColor: 'rgba(0,0,0,0)',
	                shadowOffsetY: 0
	            },
	            lineStyle: {
	                width: 0
	            }
	        },
	        backgroundColor: '#fff',
	        textStyle: {
	            color: '#5c6c7c'
	        },
	        padding: [10, 10],
	        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
	    },
	    grid: {
	        top: '15%'
	    },
	    xAxis: [{
	        type: 'category',
	        // data: ['北京', '上海', '广州', '深圳', '香港', '澳门', '台湾'],
			data: ['2019-12-25', '2020-1-1', '2020-2-1', '2020-3-1', '2020-4-1', '2020-5-1'],
	        axisLine: {
	            lineStyle: {
	                color: '#DCE2E8'
	            }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            interval: 0,
	            textStyle: {
	                color: '#556677'
	            },
	            margin: 15
	        },
	        axisPointer: {
	            label: {
	                padding: [11, 5, 7],
	                backgroundColor: {
	                    type: 'linear',
	                    x: 0,
	                    y: 0,
	                    x2: 0,
	                    y2: 1,
	                    colorStops: [{
	                        offset: 0,
	                        color: '#fff' // 0% 处的颜色
	                    }, {
	                        offset: 0.9,
	                        color: '#fff' // 0% 处的颜色
	                    }, {
	                        offset: 0.9,
	                        color: '#33c0cd' // 0% 处的颜色
	                    }, {
	                        offset: 1,
	                        color: '#33c0cd' // 100% 处的颜色
	                    }],
	                    global: false // 缺省为 false
	                }
	            }
	        },
	        boundaryGap: false
	    }],
	    yAxis: [{
			name: '中国数据累计',
	        type: 'value',
			nameTextStyle: {
			    color: '#333',
			    fontSize: 12,
			    padding: [0, 0, 2, 50]
			},
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#DCE2E8'
	            }
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#556677'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    }, {
	        type: 'value',
	        position: 'right',
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#556677'
	            },
	            formatter: '{value}'
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#DCE2E8'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    }],
	    series: [{
	            name: '累计确诊',
	            type: 'line',
	            data: [10, 10, 30, 12, 15, 3, 7],
	            symbolSize: 1,
	            symbol: 'circle',
	            smooth: true,
	            yAxisIndex: 0,
	            showSymbol: false,
	            lineStyle: {
	                width: 5,
	                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
	                        offset: 0,
	                        color: '#9effff'
	                    },
	                    {
	                        offset: 1,
	                        color: '#9E87FF'
	                    }
	                ]),
	                shadowColor: 'rgba(158,135,255, 0.3)',
	                shadowBlur: 10,
	                shadowOffsetY: 20
	            },
	            itemStyle: {
	                normal: {
	                    color: colorList[0],
	                    borderColor: colorList[0]
	                }
	            }
	        }, {
	            name: '累计治愈',
	            type: 'line',
	            data: [5, 12, 11, 14, 25, 16, 10],
	            symbolSize: 1,
	            symbol: 'circle',
	            smooth: true,
	            yAxisIndex: 0,
	            showSymbol: false,
	            lineStyle: {
	                width: 5,
	                color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
	                        offset: 0,
	                        color: '#73DD39'
	                    },
	                    {
	                        offset: 1,
	                        color: '#73DDFF'
	                    }
	                ]),
	                shadowColor: 'rgba(115,221,255, 0.3)',
	                shadowBlur: 10,
	                shadowOffsetY: 20
	            },
	            itemStyle: {
	                normal: {
	                    color: colorList[1],
	                    borderColor: colorList[1]
	                }
	            }
	        },
	        {
	            name: '累计死亡',
	            type: 'line',
	            data: [150, 120, 170, 140, 500, 160, 110],
	            symbolSize: 1,
	            yAxisIndex: 1,
	            symbol: 'circle',
	            smooth: true,
	            showSymbol: false,
	            lineStyle: {
	                width: 5,
	                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: '#fe9a'
	                    },
	                    {
	                        offset: 1,
	                        color: '#fe9a8b'
	                    }
	                ]),
	                shadowColor: 'rgba(254,154,139, 0.3)',
	                shadowBlur: 10,
	                shadowOffsetY: 20
	            },
	            itemStyle: {
	                normal: {
	                    color: colorList[2],
	                    borderColor: colorList[2]
	                }
	            }
	        }
	    ]
	};
    //定义事件

    map.on('click', function (param) {

        var options = linechart1.getOption()

        //console.log(options['yAxis'])
        options['series'][0]['data'] = quezhen[param.name]
        options['series'][1]['data'] = zhiyu[param.name]
        options['series'][2]['data'] = shiwang[param.name]
        options['yAxis'][0]['name'] = param.name + '数据累计'
        linechart1.setOption(options)//更新折线图
        //    更新柱状图
        var aa = []

        for (i = 0; i <= 11; i++) {
            aa.push(
                {
                    id: i,
                    data: bottomData[param.name][i],
                    obj: {
                        height: bottomData[param.name][i] + 'px'
                    }
                }
            );

        }


        app.$data.bottomData = aa


    })

    $("#china").on('click', function () {

        $("#main").css("display","block");
        $("#main2").css("display","none");

        map.setOption(option1);
       // linechart1.setOption(option2)
    })

    function xmapdata(country){
        var options = linechart1.getOption()

        //console.log(options['yAxis'])
        options['series'][0]['data'] = quezhen[country]
        options['series'][1]['data'] = zhiyu[country]
        options['series'][2]['data'] = shiwang[country]
        options['yAxis'][0]['name'] = country + '数据累计'
        linechart1.setOption(options)//更新折线图
        //    更新柱状图
        var aa = []

        for (i = 0; i <= 11; i++) {
            aa.push(
                {
                    id: i,
                    data: bottomData[country][i],
                    obj: {
                        height: bottomData[country][i] + 'px'
                    }
                }
            );

        }


        app.$data.bottomData = aa

    }



    $("#usa").on('click', function () {
        $("#main").css("display","none");
        $("#main2").css("display","block");
        $("#main2").html("<img src='./img/usa.png'>")
        xmapdata('美国')
    })
    $("#cad").on('click', function () {
        $("#main").css("display","none");
        $("#main2").css("display","block");
        $("#main2").html("<img src='./img/cad.png'>")
        xmapdata('加拿大')
    })
    $("#sin").on('click', function () {
        $("#main").css("display","none");
        $("#main2").css("display","block");
        $("#main2").html("<img src='./img/sin.png'>")
        xmapdata('新加坡')
    })
    $("#rus").on('click', function () {
        $("#main").css("display","none");
        $("#main2").css("display","block");
        $("#main2").html("<img src='./img/rus.png'>")
        xmapdata('俄罗斯')
    })


    // 使用刚指定的配置项和数据显示图表。


    map.setOption(option1);
    linechart1.setOption(option4)


});



