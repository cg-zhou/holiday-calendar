# holiday-calendar

> [中文文档](#holiday-calendar-假期日历)

A standardized holiday dataset (in JSON format) providing public holidays and working day adjustments for different regions.

## Installation

```bash
npm install holiday-calendar
```

## Usage

```javascript
// Import the package
const HolidayCalendar = require('holiday-calendar');

// Create an instance
const calendar = new HolidayCalendar();

// Check if a date is a holiday
calendar.isHoliday('CN', '2024-01-01').then(holiday => {
  if (holiday) {
    console.log(`${holiday.date} is ${holiday.name_en}`);
  }
});

// Get all holidays for a specific year
calendar.getHolidays('CN', 2024).then(holidays => {
  console.log('2024 Holidays:', holidays);
});

// Get holidays with filters
calendar.getHolidays('CN', 2024, {
  type: 'public_holiday',           // Filter by type: 'public_holiday' or 'transfer_workday'
  startDate: '2024-01-01',         // Filter by start date
  endDate: '2024-12-31'           // Filter by end date
}).then(holidays => {
  console.log('Filtered holidays:', holidays);
});
```

## Links

- GitHub: [cg-zhou/holiday-calendar](https://github.com/cg-zhou/holiday-calendar)
- Gitee: [cg-zhou/holiday-calendar](https://gitee.com/cg-zhou/holiday-calendar)

📝 Documentation:
- [Contributing Guidelines](CONTRIBUTING.md)
- [Change Log](CHANGELOG.md)

📄 License:
- [MIT License](LICENSE)

🌟 Features:
- Holiday calendars for multiple regions
- Working day configurations

## Overview

This repository serves as a centralized data source for:
- 📅 Public holidays
- 🏢 Working days

## Data Format

All data is stored in JSON format for easy integration:

### Holiday Types
- `public_holiday`: Official public holidays
- `transfer_workday`: Transferred working day, usually a weekend that becomes a workday

``` json
{
  "year": 2025,
  "region": "CN",
  "holidays": [
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

## Data Access

Raw file URLs:

GitHub:
- CN 2024 holidays: [`https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/CN/2024.json`](https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/CN/2024.json)
- JP 2024 holidays: [`https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/JP/2024.json`](https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/JP/2024.json)

jsDelivr CDN:
- CN 2024 holidays: [`https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json`](https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json)
- JP 2024 holidays: [`https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/JP/2024.json`](https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/JP/2024.json)

URL Pattern:

GitHub:
```
https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/{region}/{year}.json
```

jsDelivr CDN:
```
https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/{region}/{year}.json
```

Example:
```bash
# GitHub (Global)
curl https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/CN/2024.json

# jsDelivr CDN (Global, China-friendly)
curl https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json
```

### Browser (CDN)
```html
<!-- Development version -->
<script src="https://unpkg.com/holiday-calendar/src/index.js"></script>

<!-- Production version (minified) -->
<script src="https://unpkg.com/holiday-calendar/src/index.min.js"></script>
```

## Data Access

Raw file URLs:

### unpkg CDN (Official npm CDN)
```
# Latest version - Development
https://unpkg.com/holiday-calendar/data/{region}/{year}.json

# Latest version - Production (minified)
https://unpkg.com/holiday-calendar/data/{region}/{year}.min.json

# Specific version - Development
https://unpkg.com/holiday-calendar@1.0.0/data/{region}/{year}.json

# Specific version - Production (minified)
https://unpkg.com/holiday-calendar@1.0.0/data/{region}/{year}.min.json
```

---

# holiday-calendar 假期日历

> [English Documentation](#holiday-calendar)

标准化的节假日数据集（JSON格式），提供各个地区的法定节假日和调休安排信息。

## 安装

```bash
npm install holiday-calendar
```

## 使用方法

```javascript
// 导入包
const HolidayCalendar = require('holiday-calendar');

// 创建实例
const calendar = new HolidayCalendar();

// 检查某天是否为假期
calendar.isHoliday('CN', '2024-01-01').then(holiday => {
  if (holiday) {
    console.log(`${holiday.date} 是 ${holiday.name_cn}`);
  }
});

// 获取指定年份的所有假期
calendar.getHolidays('CN', 2024).then(holidays => {
  console.log('2024年假期:', holidays);
});

// 使用过滤条件获取假期
calendar.getHolidays('CN', 2024, {
  type: 'public_holiday',           // 按类型过滤：'public_holiday'(法定节假日) 或 'transfer_workday'(调休工作日)
  startDate: '2024-01-01',         // 按开始日期过滤
  endDate: '2024-12-31'           // 按结束日期过滤
}).then(holidays => {
  console.log('过滤后的假期:', holidays);
});
```

## 链接

- GitHub（国际）: [cg-zhou/holiday-calendar](https://github.com/cg-zhou/holiday-calendar)
- Gitee（国内）: [cg-zhou/holiday-calendar](https://gitee.com/cg-zhou/holiday-calendar)

📝 文档：
- [贡献指南](CONTRIBUTING.md)
- [更新日志](CHANGELOG.md)

📄 许可证：
- [MIT 许可证](LICENSE)

🌟 特性：
- 支持多区域的假期日历
- 工作日配置

## 概述

本仓库作为以下数据的集中存储：
- 📅 法定节假日
- 🏢 调休工作日

## 数据格式

所有数据以 JSON 格式存储，便于集成：

### 假期类型
- `public_holiday`: 法定节假日
- `transfer_workday`: 调休工作日（因节假日调整而需要补班的日期）

``` json
{
  "year": 2025,
  "region": "CN",
  "holidays": [
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

## 数据访问

原始文件链接：

GitHub（国际）:
- CN 2024 假期数据: [`https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/CN/2024.json`](https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/CN/2024.json)
- JP 2024 假期数据: [`https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/JP/2024.json`](https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/JP/2024.json)

jsDelivr CDN（国内友好）:
- CN 2024 假期数据: [`https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json`](https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json)
- JP 2024 假期数据: [`https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/JP/2024.json`](https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/JP/2024.json)

URL 格式：

GitHub:
```
https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/{region}/{year}.json
```

jsDelivr CDN:
```
https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/{region}/{year}.json
```

示例：
```bash
# GitHub（国际）
curl https://raw.githubusercontent.com/cg-zhou/holiday-calendar/main/data/CN/2024.json

# jsDelivr CDN（国内友好）
curl https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2024.json
```

### 浏览器 (CDN)
```html
<!-- 开发版本 -->
<script src="https://unpkg.com/holiday-calendar/src/index.js"></script>

<!-- 生产版本（压缩后） -->
<script src="https://unpkg.com/holiday-calendar/src/index.min.js"></script>
```

## 数据访问

原始文件链接：

### unpkg CDN (npm 官方 CDN)
```
# 最新版本 - 开发环境
https://unpkg.com/holiday-calendar/data/{region}/{year}.json

# 最新版本 - 生产环境（压缩后）
https://unpkg.com/holiday-calendar/data/{region}/{year}.min.json

# 指定版本 - 开发环境
https://unpkg.com/holiday-calendar@1.0.0/data/{region}/{year}.json

# 指定版本 - 生产环境（压缩后）
https://unpkg.com/holiday-calendar@1.0.0/data/{region}/{year}.min.json
```
