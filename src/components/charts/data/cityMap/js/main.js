$(function () {
  // 中国地图
  function chinaMap() {
    let myChart = echarts.init(document.getElementById('chinaMap'));
    option = {
      geo: {
        map: 'china',
        label: {show: true}, //显示省份
        roam: true, //缩放
      },
      series: [], //地图上二开点线特效数组
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  }
  //   省级地图
  function shandongMap() {
    let myChart = echarts.init(document.getElementById('shandongMap'));
    option = {
      geo: {
        map: 'shandong',
        label: {show: true}, //显示省份
        roam: true, //缩放
      },
      series: [], //地图上二开点线特效数组
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  }
  //   市级地图
  function linyiChart() {
    var linyiMapChart = echarts.init(document.getElementById('linyiMap'));
    echarts.registerMap('linyi', linyiMap, {});
    option = {
      series: [
        {
          type: 'map',
          mapType: 'linyi',
          label: {show: true}, //显示省份
          roam: true,
          data: [],
        },
      ],
    };
    linyiMapChart.setOption(option);
    window.addEventListener('resize', function () {
      linyiMapChart.resize();
    });
  }
  //   县级地图
  function yinanChart() {
    let yinanChart = echarts.init(document.getElementById('yinanMap'));
    echarts.registerMap('yinan', yinanMap, {});
    option = {
      series: [
        {
          type: 'map',
          mapType: 'yinan',
          label: {show: true}, //显示省份
          roam: true,
          data: [],
        },
      ],
    };
    yinanChart.setOption(option);
    window.addEventListener('resize', function () {
      yinanChart.resize();
    });
  }

  function zhenChart() {
    var map = new BMapGL.Map('yinanMapChart', {
      enableDblclickZoom: false,
      displayOptions: {
        building: false,
      },
    });
    map.centerAndZoom(new BMapGL.Point(118.455395, 35.547002), 14);
    map.setMapStyleV2({
      styleId: '490ae0113912a55610bd2e63a719fb57',
    });
    map.enableScrollWheelZoom(true);
    // var bd = new BMapGL.Boundary()
    // bd.get('沂南', function (rs) {
    //   var hole = new BMapGL.Polygon(rs.boundaries, {
    //     fillColor: '#389BB7',
    //     strokeColor: '#2C58A6',
    //   })
    //   map.addOverlay(hole)
    //   let point = new BMapGL.Point(118.472357,35.555981)
    //   map.centerAndZoom(point, 17)
    // })

    // bd.get('蒙阴', function (rs) {
    //   var hole = new BMapGL.Polygon(rs.boundaries, {
    //     fillColor: '#0F2135',
    //     strokeColor: '#2C58A6',
    //   })
    //   map.addOverlay(hole)
    //   let point = new BMapGL.Point(117.951412, 35.717755)
    //   map.centerAndZoom(point, 15)
    //   let label = new BMapGL.Label('蒙阴', { position: point })
    //   label.setStyle({ color: '#fff', background: 'transparent', borderColor: 'transparent' })
    //   map.addOverlay(label)
    // })
    // bd.get('平邑', function (rs) {
    //   var hole = new BMapGL.Polygon(rs.boundaries, {
    //     fillColor: '#112063',
    //     strokeColor: '#2C58A6',
    //     // fillOpacity: 0.4
    //   })
    //   map.addOverlay(hole)
    //   let point = new BMapGL.Point(117.639062, 35.512959)
    //   map.centerAndZoom(point, 15)
    //   let label = new BMapGL.Label('平邑', { position: point })
    //   label.setStyle({ color: '#fff', background: 'transparent', borderColor: 'transparent' })
    //   map.addOverlay(label)
    // })
    // bd.get('费县', function (rs) {
    //   var hole = new BMapGL.Polygon(rs.boundaries, {
    //     fillColor: '#102334',
    //     strokeColor: '#2C58A6',
    //     // fillOpacity: 0.4
    //   })
    //   map.addOverlay(hole)
    //   let point = new BMapGL.Point(117.982125, 35.271832)
    //   map.centerAndZoom(point, 15)
    //   let label = new BMapGL.Label('费县', { position: point })
    //   label.setStyle({ color: '#fff', background: 'transparent', borderColor: 'transparent' })
    //   map.addOverlay(label)
    // })
  }
  chinaMap();
  shandongMap();
  linyiChart();
  yinanChart();
  zhenChart();
});
