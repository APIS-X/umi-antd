## 说明

图表组件根据 Echarts、echarts-for-react 进行二次封装，旨在按需引入，简化使用。
</br>组件在提供默认配置的同时支持 Echarts、echarts-for-react 等标准数据的扩展。已结合业务对接口数据结构做统一转换。
</br>echarts: https://echarts.apache.org/zh/option.html#title
</br>echarts-for-react: https://github.com/hustcc/echarts-for-react

## 结构

```
├── README.md
├── components                        业务相关组件封装
├── bar                               组件-柱状图
│   ├── config.js                     默认配置
│   └── index.js                      组件入口
├── index.js                          Charts主入口
├── line                              组件-线图
│   ├── config.js                     默认配置-bar
│   └── index.js                      组件入口
├── maps                              组件-地图
│   ├── china.json
│   ├── config.js
│   └── index.js
├── pie
│   ├── config.js
│   └── index.js
├── config.js                         组件相关公共配置
├── reactEchart.js                    核心文件，基于 echarts-for-react 的直接封装
├── tree.md
└── utils.js                          公共方法，部分方法可以直接结合业务使用
```

## 参数

- 组件参数

  | 参数    | 类型            | 必填 | 所属组件 | 说明                                            |
  | ------- | --------------- | ---- | -------- | ----------------------------------------------- |
  | data    | Object \| Array | 否   | 公用     | 已和后端约定好的图表数据结构                    |
  | extra   | Object          | 否   | 共用     | 结合 data 进行的扩展字段                        |
  | options | Object          | 否   | 公用     | 组件配置参数，默认不传，结构同 Echarts 标准结构 |

- extra

  ```
  extra: {
    pie_radius: '50%',
    axial_stack: false
    axial_legendType: 'default‘,
    ...
  }
  ```

  | 参数                   | 类型                       | 默认值    | 必填 | 所属组件              | 说明                     |
  | ---------------------- | -------------------------- | --------- | ---- | --------------------- | ------------------------ |
  | color                  | Array                      | \[\]      | 否   |                       | 组件颜色，同 echarts     |
  | pie_radius             | Array \| String            | ’60%‘     | 否   | Pie                   | 定义饼图或者圆环的半径   |
  | axial_stack            | Boolean                    | true      | 否   | Line \| Bar           | 数据是否堆叠，默认堆叠   |
  | axial_legendType       | String                     | 'default' | 否   | 'default' \| 'custom' | 图例是否使用自定义       |
  | axial_lineType         | Array                      |           | 否   | 'solid' \| 'dashed'   | 折线图线条类型           |
  | bar_direction          | String                     |           | 否   | Bar                   | 柱状图是否为横向         |
  | bar_showLabel          | Boolean                    | false     | 否   | Bar                   | 柱状图上面是否显示 label |
  | map_showEffectScatter  | Boolean                    | false     | 否   | Maps                  | 地图是否显示其余打点     |
  | xAxis_intervalDisabled | Boolean                    | false     | 否   | 直角坐标系            | X 轴刻度是否折叠显示     |
  | xAxis_labelFormatter   | 'YY/MM'\|'MM/DD'\|Function |           | 否   | 直角坐标系            | X 轴刻度格式化           |

  **说明：**

  - **参数说明：** data 直接传递后端约定好的数据结构；extra 需结合 data 使用，否则无效；使用组件时也可以将参数拼装好只传 options。
  - **优先级：** 组件的默认 config、data、options 经过相关的合并处理之后得到的最终数据对象将传入 Echarts 进行数据渲染，参数合并过程中的优先级**从低到高**依次为: config 默认配置，data, options；
  - **自定义参数扩展规则：** 组件类型\_参数名称，参数名称尽可能语义化，如果是多个组件共用的，语义化即可；
  - **扩展：** 现有的封装如果不能满足业务需求，可进行自定义参数扩展，如果逻辑过于复杂的，可以将数据直接处理成标准的 Echarts 参数，然后通过 options 参数传递。当然，也可以直接使用 charts/reactEcharts 进行开发；
  - **特殊：** 如果对象同一属性的属性值类型有的为数组，有的为对象，合并时会把对象作为数组的第一项进行合并。

## 使用

目前已封装的组件包括 Pie, Bar, Line, Map，如需其它类型的图标，可继续进行扩展封装。

### Pie:

```
import { Pie } from '@/components/charts';

const data = {
  "desc": "调用总量",
  "type": "pie",
  "unit": "次",
  "total": 20000,
  "value": [
    {
      "desc": "通过",
      "ratio": 33,
      "count": 1000,
    },{
      "desc": "人工审核",
      "ratio": 20,
      "count": 1000,
    },{
      "desc": "拒绝",
      "ratio": 20,
      "count": 1000,
    }
  ]
};

const extra = {};
const options = {};

<Pie data={data} extra={extra} options={options} />
```

### Bar:

```
import { Bar } from '@/components/charts';

const data = [
  {
    "desc": "通过",
    "position": "left",
    "type": "bar",
    "unit": "次",
    "value": [
      {
        "category": "09",
        "count": 100
      },
      {
        "category": "10",
        "count": 20
      },
      {
        "category": "11",
        "count": 50
      },
    ]
  }
];

const extra = {};
const options = {};

<Bar data={data} extra={extra} options={options} />
```

### Line:

```
import { Line } from '@/components/charts';

const data = [
  {
    "desc": "企业信用评估报告",
    "position": "left",
    "type": "line",
    "unit": "次",
    "value": [
      {
        "category": "1月",
        "count": 20,
        "ratio": 10
      },
      {
        "category": "2月",
        "count": 30,
        "ratio": 10
      },
      {
        "category": "3月",
        "count": 50,
        "ratio": 10
      },
      {
        "category": "4月",
        "count": 10,
        "ratio": 10
      }
    ]
  },
  {
    "desc": "企业信用评",
    "position": "left",
    "type": "line",
    "unit": "次",
    "value": [
      {
        "category": "1月",
        "count": 50,
        "ratio": 10
      },
      {
        "category": "2月",
        "count": 20,
        "ratio": 10
      },
      {
        "category": "3月",
        "count": 60,
        "ratio": 10
      },
      {
        "category": "4月",
        "count": 5,
        "ratio": 10
      }
    ]
  }
];

const extra = {};
const options = {};

<Line data={data} extra={extra} options={options} />
```
