# holiday-calendar 假期日历

> [English Documentation](README.en.md)

[![npm version](https://img.shields.io/npm/v/holiday-calendar.svg)](https://www.npmjs.com/package/holiday-calendar)
[![GitHub license](https://img.shields.io/github/license/cg-zhou/holiday-calendar.svg)](https://github.com/cg-zhou/holiday-calendar/blob/main/LICENSE)

标准化的节假日数据集（JSON格式），提供各个地区的法定节假日和调休安排信息。

## 示例

查看 [在线示例](https://cg-zhou.github.io/holiday-calendar/examples) 或 [示例代码](/examples)。

## 概述

本仓库集中存储以下数据：
- 📅 法定节假日
- 🏢 调休工作日

## 数据来源

数据来源于各地区官方发布的节假日安排：

- 中国（CN）：
  - [国务院办公厅](http://www.gov.cn)关于节假日安排的通知
  - 更新频率：每年更新，通常在上一年末发布下一年安排

- 日本（JP）：
  - [内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)「国民の祝日」
  - 更新频率：每年更新，通常提前一年发布

## 安装

```bash
npm install holiday-calendar
```

## 数据格式

所有数据以 JSON 格式存储，便于集成：

### 索引文件
位于 `/data/index.json`，包含所有地区的年份范围信息：
``` json
{
  "regions": [
    {
      "name": "CN",
      "startYear": 2002,
      "endYear": 2026
    },
    {
      "name": "JP",
      "startYear": 2000,
      "endYear": 2026
    }
  ]
}
```

### 日期类型
- `public_holiday`: 法定节假日
- `transfer_workday`: 调休工作日（因节假日调整而需要补班的日期）

``` json
{
  "year": 2026,
  "region": "CN",
  "dates": [
    {
      "date": "2026-01-01",
      "name": "元旦",
      "name_cn": "元旦",
      "name_en": "New Year's Day",
      "type": "public_holiday"
    },
    {
      "date": "2026-01-04",
      "name": "元旦补班",
      "name_cn": "元旦补班",
      "name_en": "New Year's Day Workday",
      "type": "transfer_workday"
    }
  ]
}
```

## 使用方法

```javascript
// 导入包
const HolidayCalendar = require('holiday-calendar');

// 创建实例
const calendar = new HolidayCalendar();

// 获取索引信息
calendar.getIndex().then(index => {
  console.log('支持的地区:', index.regions);
});

// 获取某天的日期信息
calendar.getDateInfo('CN', '2026-01-01').then(dateInfo => {
  if (dateInfo) {
    console.log(`${dateInfo.date} 是 ${dateInfo.name_cn}`);
  }
});

// 获取指定年份的所有日期
calendar.getDates('CN', 2026).then(dates => {
  console.log('2026年日期:', dates);
});

// 使用过滤器
calendar.getDates('CN', 2026, {
  type: 'public_holiday',           // 按类型过滤：'public_holiday'(法定节假日) 或 'transfer_workday'(调休工作日)
  startDate: '2026-01-01',         // 按开始日期过滤
  endDate: '2026-12-31'           // 按结束日期过滤
}).then(dates => {
  console.log('过滤后的日期:', dates);
});

// 判断是否为工作日，工作日包括 1）非法定节假日的周一至周五，2）调班的周末
calendar.isWorkday('CN', '2026-01-01').then(isWorkday => {
  console.log('是否为工作日:', isWorkday); // false (元旦节假日)
});

// 判断是否为假期，假期包括 1）法定节假日，2）非调班的周末
calendar.isHoliday('CN', '2026-01-04').then(isHoliday => {
  console.log('是否为假期:', isHoliday); // false (元旦调休工作日)
});
```

## 数据访问

原始 JSON 文件可通过以下方式访问：

1. unpkg：
```
https://unpkg.com/holiday-calendar/data/CN/2026.json
```

2. jsDelivr CDN：
```
https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2026.json
```

### 浏览器 (CDN)
```html
<!-- 开发版本 -->
<script src="https://unpkg.com/holiday-calendar/src/index.js"></script>

<!-- 生产版本（压缩后） -->
<script src="https://unpkg.com/holiday-calendar/src/index.min.js"></script>
```

> **重要提示**：对于中国大陆用户，考虑到 CDN 服务的稳定性，建议将 `data` 目录下的 JSON 数据部署到您自己的服务器上，以确保更可靠的访问体验。

## 链接与文档

- GitHub: [cg-zhou/holiday-calendar](https://github.com/cg-zhou/holiday-calendar)
- Gitee: [cg-zhou/holiday-calendar](https://gitee.com/cg-zhou/holiday-calendar)
- [贡献指南](CONTRIBUTING.md)
- [更新日志](CHANGELOG.md)
- [MIT 许可证](LICENSE)

---

## 免责声明

本项目的节假日数据来源于官方发布，但请注意：

1.  **政策依赖性**：节假日安排依赖于国家政策，没有固定规则，每年可能有所不同。
2.  **潜在变更**：在特殊情况下，官方可能会对已发布的节假日安排进行临时调整或补充，本仓库的数据更新可能存在滞后。

因此，在使用本数据时，请务必结合官方最新发布的信息进行核对，以确保准确性。