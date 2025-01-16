# Contributing to Saturn

Thank you for your interest in contributing to Saturn! This document provides guidelines and instructions for contributing.

## How to Contribute

### Adding New Holiday Data

1. Create new JSON file in `data/{region}/{year}.json`
2. Follow the data format:
```json
{
  "year": 2024,
  "region": "CN",
  "holidays": [
    {
      "date": "2024-01-01",
      "name": "元旦",
      "name_cn": "元旦",
      "name_en": "New Year's Day",
      "type": "public_holiday"
    }
  ]
}
```

### Data Sources
- China: Official announcements from [国务院办公厅](http://www.gov.cn)
- Japan: Official calendar from [内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)

### Pull Request Process
1. Fork the repository
2. Create a new branch
3. Add or update holiday data
4. Submit a Pull Request with:
   - Link to official holiday announcement
   - Brief description of changes
   - Screenshot of official announcement (if possible)

## Code Style
- Use 2 spaces for indentation in JSON files
- Sort holidays by date
- Follow existing naming conventions

## Data Validation
Before submitting:
1. Verify all dates match official announcements
2. Ensure JSON is valid
3. Check all required fields are present 