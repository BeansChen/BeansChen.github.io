// 柱状图1
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 制定配置和数据
  var option = {
    color: ["#2f89cf"],
    grid: {
      left: "0%",
      top: "10px",
      right: "%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: {
      // x轴的文字颜色和大小
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12",
      },
      //  x轴样式不显示
      axisLine: {
        show: false,
        // 如果想要设置单独的线条样式
        // lineStyle: {
        //    color: "rgba(255,255,255,.1)",
        //    width: 1,
        //    type: "solid"
      },
      data: [
        "旅游行业",
        "教育培训",
        "游戏行业",
        "医疗行业",
        "电商行业",
        "社交行业",
        "金融行业",
      ],
    },
    yAxis: {
      // y 轴文字标签样式
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12",
      },
      // y轴线条样式
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          // width: 1,
          // type: "solid"
        },
      },
      // y 轴分隔线样式
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        },
      },
    },
    series: [
      {
        name: "直接访问",
        type: "bar",
        // 修改柱子宽度
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
  };
  // 设置配置给对象
  myChart.setOption(option);
  // 图表根据屏幕自适应
  document.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 定时配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff",
        },
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff",
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 柱子设为圆角
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // 此时的color 可以修改柱子的颜色
            color: function (params) {
              // params 传进来的是柱子对象
              // console.log(params);
              // dataIndex 是当前柱子的索引号
              return myColor[params.dataIndex];
            },
          },
        },
        // 图形上的文本标签
        label: {
          normal: {
            show: true,
            // 图形内显示
            position: "inside",
            // 文字的显示格式
            formatter: "{c}%",
          },
        },
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
      },
    ],
  };
  // 设置配置到实例
  myChart.setOption(option);
  // 图表根据屏幕自适应
  document.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 折线图1
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 制定配置和数据
  var option = {
    color: [],
    grid: {},
    legend: {},
    xAxis: {},
    yAxis: {},
    series: [],
  };
  // 设置配置到实例
  // myChart.setOption(option);
  // 添加响应式
  document.addEventListener("resize", function () {
    myChart.resize();
  });
})();
