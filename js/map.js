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
            roam: true,
            label: {
                normal: {
                    show: true, // 是否显示对应地名
                    textStyle: {
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

    //定义折线地图配置
    option2 = {
        backgroundColor: "#EEEEEE",
        tooltip: { //设置tip提示
            trigger: 'axis'
        },

        legend: { //设置区分（哪条线属于什么）
            data: ['累计确诊', '累计治愈', '累计死亡']
        },
        color: ['#000', 'greed', 'red'], //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: { //设置x轴
            type: 'category',
            boundaryGap: false, //坐标轴两边不留白
            data: ['2019-12-25', '2020-1-1', '2020-2-1', '2020-3-1', '2020-4-1', '2020-5-1'],
            name: '日期', //X轴 name
            nameTextStyle: { //坐标轴名称的文字样式
                color: '#000',
                fontSize: 16,
                padding: [0, 0, 0, 20]
            },
            axisLine: { //坐标轴轴线相关设置。
                lineStyle: {
                    color: '#000',
                }
            }
        },
        yAxis: {
            name: '中国数据累计',
            nameTextStyle: {
                color: '#000',
                fontSize: 16,
                padding: [0, 0, 2, 50]
            },
            axisLine: {
                lineStyle: {
                    color: '#000',
                }
            },
            type: 'value'
        },
        series: [
            {
                name: '累计确诊',
                data: leijiquezhen,
                type: 'line', // 类型为折线图
                lineStyle: { // 线条样式 => 必须使用normal属性
                    normal: {
                        color: '#ccc',
                    }
                },
            },
            {
                name: '累计治愈',
                data: leijizhiyu,
                type: 'line',
                lineStyle: {
                    normal: {
                        color: 'greed',
                    }
                },
            },
            {
                name: '累计死亡',
                data: leijishiwang,
                type: 'line',
                lineStyle: {
                    normal: {
                        color: 'red',
                    }
                },
            }
        ]
    }


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
        linechart1.setOption(option2)
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
    linechart1.setOption(option2)


});



