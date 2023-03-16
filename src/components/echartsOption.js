import * as echarts from "echarts";


export function energyOption() {
    console.log("option");
    return {
        grid: {
            top: "5%",
            left: "15%",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: (params) => {
                // console.log(params);
                // 自定义 tooltip，这里返回 div 内容随意改造，打印看下 params 拿自己想要的数据
                return `
            <div style="min-width: 100px;border-radius: 5px;">
               ${params[0].axisValueLabel}月
               <div style="display: flex;justify-content: space-between;align-items: center;">
                  <p>
                     <span style="display: inline-block;margin-right:5px;width: 10px;height: 10px;border-radius: 50%;background-color: rgba(42, 130, 228, 1)"></span>
                     纯净水
                  </p>
                  <span>${[params[0].value]}</span>
               </div>
            </div>
         `;
            },
        },
        yAxis: [
            {
                type: "value",
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#1d5477",
                    },
                },
                splitNumber: 4,
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    color: "#fff",
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        xAxis: [
            {
                type: "category",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    margin: 15,
                    textStyle: {
                        color: "#E2E2E2 ",
                        fontSize: 12,
                        align: "center",
                    },
                },
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            },
        ],
        graphic: {
            type: "image",
            left: "15%",
            bottom: "25%",
            z: 1,
            bounding: "raw",
            style: {
                image: "./assets/2d/img/pingxingsibianxing@2x.png",
                width: 300,
                height: 20,
            },
        },
        series: [
            {
                name: "飞行员",
                type: "bar",
                data: [80, 90, 200, 320, 130, 430, 620, 140, 130, 700, 230, 340],
                barWidth: 15,

                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "top",
                            distance: 10,
                            textStyle: {
                                color: "#E2E2E2 ",
                                fontSize: "12",
                            },
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                            {
                                offset: 0,
                                color: "#0980bc",
                            },
                            {
                                offset: 1,
                                color: "#183f7e",
                            },
                        ]),
                        opacity: 0.8,
                    },
                },
            },
            {
                name: "上部圆",
                type: "pictorialBar",
                silent: true,
                symbolSize: [15, 5],
                symbolOffset: [0, -4],
                symbolPosition: "end",
                z: 12,
                color: "#16abca",
                data: [80, 90, 200, 320, 130, 430, 620, 140, 130, 700, 230, 340],
            },
            {
                name: "底部圆",
                type: "pictorialBar",
                silent: true,
                symbolSize: [15, 5],
                symbolOffset: [0, 4],
                z: 12,
                color: "#19448e",
                data: [80, 90, 200, 320, 130, 430, 620, 140, 130, 700, 230, 340],
            },
        ],
    };
}

