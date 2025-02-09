# holiday-calendar 假期日历

> [English Documentation](#holiday-calendar-english)

[![npm version](https://img.shields.io/npm/v/holiday-calendar.svg)](https://www.npmjs.com/package/holiday-calendar)
[![GitHub license](https://img.shields.io/github/license/cg-zhou/holiday-calendar.svg)](https://github.com/cg-zhou/holiday-calendar/blob/main/LICENSE)

标准化的节假日数据集（JSON格式），提供各个地区的法定节假日和调休安排信息。

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

### 日期类型
- `public_holiday`: 法定节假日
- `transfer_workday`: 调休工作日（因节假日调整而需要补班的日期）

``` json
{
  "year": 2025,
  "region": "CN",
  "dates": [
    {
      "date": "2025-01-01",
      "name": "New Year's Day",
      "name_cn": "元旦",
      "name_en": "New Year's Day",
      "type": "public_holiday"
    },
    {
      "date": "2025-01-26",
      "name": "Spring Festival Workday",
      "name_cn": "春节补班",
      "name_en": "Spring Festival Workday",
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

// 获取某天的日期信息
calendar.getDateInfo('CN', '2024-01-01').then(dateInfo => {
  if (dateInfo) {
    console.log(`${dateInfo.date} 是 ${dateInfo.name_cn}`);
  }
});

// 获取指定年份的所有日期
calendar.getDates('CN', 2025).then(dates => {
  console.log('2025年日期:', dates);
});

// 使用过滤器
calendar.getDates('CN', 2025, {
  type: 'public_holiday',           // 按类型过滤：'public_holiday'(法定节假日) 或 'transfer_workday'(调休工作日)
  startDate: '2025-01-01',         // 按开始日期过滤
  endDate: '2025-12-31'           // 按结束日期过滤
}).then(dates => {
  console.log('过滤后的日期:', dates);
});
```

## 数据访问

原始 JSON 文件可通过以下方式访问：

1. unpkg：
```
https://unpkg.com/holiday-calendar/data/CN/2024.json
```

2. jsDelivr CDN：
```
https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json
```

### 浏览器 (CDN)
```html
<!-- 开发版本 -->
<script src="https://unpkg.com/holiday-calendar/src/index.js"></script>

<!-- 生产版本（压缩后） -->
<script src="https://unpkg.com/holiday-calendar/src/index.min.js"></script>
```

## 链接与文档

- GitHub（国际）: [cg-zhou/holiday-calendar](https://github.com/cg-zhou/holiday-calendar)
- [贡献指南](CONTRIBUTING.md)
- [更新日志](CHANGELOG.md)
- [MIT 许可证](LICENSE)

---

# holiday-calendar (English)

> [中文文档](#holiday-calendar-假期日历)

[![npm version](https://img.shields.io/npm/v/holiday-calendar.svg)](https://www.npmjs.com/package/holiday-calendar)
[![GitHub license](https://img.shields.io/github/license/cg-zhou/holiday-calendar.svg)](https://github.com/cg-zhou/holiday-calendar/blob/main/LICENSE)

A standardized holiday dataset (in JSON format) providing public holidays and working day adjustments for different regions.

## Overview

This repository serves as a centralized data source for:
- 📅 Public holidays
- 🏢 Working days

## Data Sources

The data is sourced from official holiday announcements of each region:

- China (CN):
  - Holiday arrangements notice from [General Office of the State Council](http://www.gov.cn)
  - Update frequency: Annually, typically released at the end of the previous year

- Japan (JP):
  - [Cabinet Office](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html) "National Holidays"
  - Update frequency: Annually, typically released one year in advance

## Installation

```bash
npm install holiday-calendar
```

## Data Format

All data is stored in JSON format for easy integration:

### Date Types
- `public_holiday`: Official public holidays
- `transfer_workday`: Transferred working day, usually a weekend that becomes a workday

``` json
{
  "year": 2025,
  "region": "CN",
  "dates": [
    {
      "date": "2025-01-01",
      "name": "New Year's Day",
      "name_cn": "元旦",
      "name_en": "New Year's Day",
      "type": "public_holiday"
    },
    {
      "date": "2025-01-26",
      "name": "Spring Festival Workday",
      "name_cn": "春节补班",
      "name_en": "Spring Festival Workday",
      "type": "transfer_workday"
    }
  ]
}
```

## Usage

```javascript
// Import the package
const HolidayCalendar = require('holiday-calendar');

// Create an instance
const calendar = new HolidayCalendar();

// Get date info for a specific date
calendar.getDateInfo('CN', '2024-01-01').then(dateInfo => {
  if (dateInfo) {
    console.log(`${dateInfo.date} is ${dateInfo.name_en}`);
  }
});

// Get all dates for a specific year
calendar.getDates('CN', 2025).then(dates => {
  console.log('2025 Dates:', dates);
});

// Get dates with filters
calendar.getDates('CN', 2025, {
  type: 'public_holiday',           // Filter by type: 'public_holiday' or 'transfer_workday'
  startDate: '2025-01-01',         // Filter by start date
  endDate: '2025-12-31'           // Filter by end date
}).then(dates => {
  console.log('Filtered dates:', dates);
});
```

## Data Access

Raw JSON files can be accessed via:

1. unpkg:
```
https://unpkg.com/holiday-calendar/data/CN/2024.json
```

2. jsDelivr CDN:
```
https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json
```

### Browser (CDN)
```html
<!-- Development version -->
<script src="https://unpkg.com/holiday-calendar/src/index.js"></script>

<!-- Production version (minified) -->
<script src="https://unpkg.com/holiday-calendar/src/index.min.js"></script>
```

## Links & Documentation

- GitHub: [cg-zhou/holiday-calendar](https://github.com/cg-zhou/holiday-calendar)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Change Log](CHANGELOG.md)
- [MIT License](LICENSE)
