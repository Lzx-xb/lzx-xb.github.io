---
title: economy
icon: edit
date: 2023-04-01
category:
  - economy
tag:
  - economy
---

```mindmap 
root((商品经济理论))
  商品
    条件
      用于交换
      劳动产品
    二重性
      使用价值： 自然属性
      价值： 社会属性（特有属性）
  价值量
    商品价值的大小： 社会必要劳动时间越长，价值量越大
  价值规律
    内容
      价值量的决定性因素： 社会必要劳动时间
      商品交换的依据： 等价交换
    表现形式
      价格围绕价格上下波动
    作用
      “鞭子”：提高生产率
      “棒子”：调节资源配置
      “筛子”：优胜劣汰
  货币
    含义：充当一般等价物的特殊商品
    职能
      价值尺度 —— 标价
      流通手段 —— 一手交钱一手交货
      支付手段 —— 提前或延后支付
      贮藏手段 —— 黄金白银
      世界货币 —— 美元、人民币、欧元、日元、英镑
```

::: echarts 经济思维导图

```json
{
  "tooltip": {
    "trigger": "item",
    "triggerOn": "mousemove"
  },
  "series": [
    {
      "name": "经济",
      "type": "tree",
      "width": "55%",
      "height": "550px",
      "data": [{
        "name": "商品经济理论",
        "children": [
          {
            "name": "商品",
            "children": [
              {
                "name": "条件",
                "children": [
                  {
                    "name": "用于交换"
                  },
                  {
                    "name": "劳动产品"
                  }
                ]
              },
              {
                "name": "二重性",
                "children": [
                  {
                    "name": "使用价值 —— 自然属性"
                  },
                  {
                    "name": "价值 —— 社会属性（特有属性）"
                  }
                ]
              }
            ]
          },
          {
            "name": "价值量",
            "children": [
              {
                "name": "商品价值的大小",
                "children": [
                  {
                    "name": "社会必要劳动时间越长，价值量越大"
                  }
                ]
              }
            ]
          },
          {
            "name": "价值规律",
            "children": [
              {
                "name": "内容",
                "children": [
                  {
                    "name": "价值量的决定因素 —— 社会必要劳动时间"
                  },
                  {
                    "name": "商品交换的依据 —— 等价交换"
                  }
                ]
              },
              {
                "name": "表现形式",
                "children": [
                  {
                    "name": "价格围绕价值上下波动"
                  }
                ]
              },
              {
                "name": "作用",
                "children": [
                  {"name": "“棒子”——调节资源配置"},
                  {"name": "“鞭子”——提高劳动生产率"},
                  {"name": "“筛子”——优胜劣汰"}
                ] 
              }
            ]
          },
          {
            "name": "货币",
            "children": [
              {
                "name": "含义",
                "children": [
                  {"name": "充当一般等价物的特殊商品"}
                ]
              },
              {
                "name": "基本职能",
                "children": [
                  {"name": "价值尺度 —— 标价"},
                  {"name": "流通手段 —— 一手交钱一手交货"},
                  {"name": "支付手段 —— 提前或延后支付"}
                ]
              },
              {
                "name": "其他职能",
                "children": [
                  {"name": "贮藏手段 —— 黄金白银"},
                  {"name": "世界货币 —— 美元、欧元、人民币、日元、英镑"}
                ]
              }
            ]
          }
        ]
      }],
      "symbolSize": 7,
      "edgeShape": "polyline",
      "edgeForkPosition": "50%",
      "initialTreeDepth": 6,
      "lineStyle": {
        "width": 4
      },
      "label": {
        "backgroundColor": "#fff",
        "position": "left",
        "verticalAlign": "middle",
        "align": "right"
      },
      "leaves": {
        "label": {
          "position": "right",
          "verticalAlign": "middle",
          "align": "left"
        }
      },
      "emphasis": {
        "focus": "none"
      },
      "expandAndCollapse": true,
      "animationDuration": 550,
      "animationDurationUpdate": 750
    }
  ]
}
```
:::