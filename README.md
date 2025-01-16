# Saturn

> [中文文档](#saturn-假期日历)

> Saturn represents our love for Saturdays.

Saturn is a repository for managing holiday and calendar data, providing standardized date information for various regions and calendar systems.

📦 Repository Mirrors:
- GitHub: [cg-zhou/Saturn](https://github.com/cg-zhou/Saturn)
- Gitee: [cg-zhou/Saturn](https://gitee.com/cg-zhou/Saturn)

📝 Documentation:
- [Contributing Guidelines](CONTRIBUTING.md)
- [Change Log](CHANGELOG.md)

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
- CN 2024 holidays: `https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/CN/2024.json`
- JP 2024 holidays: `https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/JP/2024.json`

Gitee:
- CN 2024 holidays: `https://gitee.com/cg-zhou/Saturn/raw/main/data/CN/2024.json`
- JP 2024 holidays: `https://gitee.com/cg-zhou/Saturn/raw/main/data/JP/2024.json`

URL Pattern:

GitHub:
```
https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/{region}/{year}.json
```

Gitee:
```
https://gitee.com/cg-zhou/Saturn/raw/main/data/{region}/{year}.json
```

Example:
```bash
# GitHub (Global)
curl https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/CN/2024.json

# Gitee (China)
curl https://gitee.com/cg-zhou/Saturn/raw/main/data/CN/2024.json
```

---

# Saturn 假期日历

> [English Documentation](#saturn)

> Saturn 代表着我们对周六（Saturday）的热爱。

Saturn 是一个用于管理假期和日历数据的仓库，为不同地区和日历系统提供标准化的日期信息。

📦 仓库镜像：
- GitHub（国际）: [cg-zhou/Saturn](https://github.com/cg-zhou/Saturn)
- Gitee（国内）: [cg-zhou/Saturn](https://gitee.com/cg-zhou/Saturn)

📝 文档：
- [贡献指南](CONTRIBUTING.md)
- [更新日志](CHANGELOG.md)

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
- CN 2024 假期数据: `https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/CN/2024.json`
- JP 2024 假期数据: `https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/JP/2024.json`

Gitee（国内）:
- CN 2024 假期数据: `https://gitee.com/cg-zhou/Saturn/raw/main/data/CN/2024.json`
- JP 2024 假期数据: `https://gitee.com/cg-zhou/Saturn/raw/main/data/JP/2024.json`

URL 格式：

GitHub（国际）:
```
https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/{region}/{year}.json
```

Gitee（国内）:
```
https://gitee.com/cg-zhou/Saturn/raw/main/data/{region}/{year}.json
```

示例：
```bash
# GitHub（国际）
curl https://raw.githubusercontent.com/cg-zhou/Saturn/main/data/CN/2024.json

# Gitee（国内）
curl https://gitee.com/cg-zhou/Saturn/raw/main/data/CN/2024.json
```
