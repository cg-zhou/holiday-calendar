# holiday-calendar

> [中文文档](README.md)

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

### Index File
Located at `/data/index.json`, contains year ranges for all regions:
``` json
{
  "regions": [
    {
      "name": "CN",
      "startYear": 2002,
      "endYear": 2025
    },
    {
      "name": "JP",
      "startYear": 2000,
      "endYear": 2026
    }
  ]
}
```

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

// Get index information
calendar.getIndex().then(index => {
  console.log('Supported regions:', index.regions);
});

// Get date info for a specific date
calendar.getDateInfo('CN', '2025-01-01').then(dateInfo => {
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

// Check if date is a workday: includes 1) Mon-Fri except public holidays, 2) transfer working weekends
calendar.isWorkday('CN', '2025-01-01').then(isWorkday => {
  console.log('Is workday:', isWorkday); // false (New Year's Day holiday)
});

// Check if date is a holiday: includes 1) public holidays, 2) weekends except transfer workdays
calendar.isHoliday('CN', '2025-01-26').then(isHoliday => {
  console.log('Is holiday:', isHoliday); // false (Spring Festival workday)
});

```

## Data Access

Raw JSON files can be accessed via:

1. unpkg:
```
https://unpkg.com/holiday-calendar/data/CN/2025.json
```

2. jsDelivr CDN:
```
https://gcore.jsdelivr.net/gh/cg-zhou/holiday-calendar@main/data/CN/2025.json
```

### Browser (CDN)
```html
<!-- Development version -->
<script src="https://unpkg.com/holiday-calendar/src/index.js"></script>

<!-- Production version (minified) -->
<script src="https://unpkg.com/holiday-calendar/src/index.min.js"></script>
```

> **Important Note**: For users in mainland China, considering the stability of CDN services, it is recommended to deploy the JSON data from the `data` directory on your own server to ensure a more reliable access experience.

## Links & Documentation

- GitHub: [cg-zhou/holiday-calendar](https://github.com/cg-zhou/holiday-calendar)
- Gitee: [cg-zhou/holiday-calendar](https://gitee.com/cg-zhou/holiday-calendar)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Change Log](CHANGELOG.md)
- [MIT License](LICENSE)

---

## Disclaimer

Holiday data in this project is sourced from official announcements, but please note:

1.  **Policy Dependency**: Holiday arrangements depend on national policies and do not follow fixed rules; they may vary each year.
2.  **Potential Changes**: In special circumstances, official bodies may make temporary adjustments or additions to published holiday schedules, and updates to this repository's data might be delayed.

Therefore, when using this data, please always cross-reference with the latest official announcements to ensure accuracy.