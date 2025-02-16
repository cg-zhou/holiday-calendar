# Changelog

All notable changes to this project will be documented in this file.

## [1.1.4] - 2024-03-22

### Changed
- Generated index file before minifying JSON files
- Support to test CDN json data

## [1.1.3] - 2024-03-21

### Fixed
- Updated the holiday dates of CN for 2020

## [1.1.2] - 2025-01-18

### Changed
- Updated documentation

## [1.1.1] - 2025-01-18

### Changed
- Updated documentation to reflect API changes

## [1.1.0] - 2025-01-18

### Changed
- **Breaking**: Renamed method `getHolidays` to `getDates` for better API consistency
- Updated data structure: renamed 'holidays' field to 'dates'
- Improved test coverage with specific date assertions
- Added support for custom data loaders

## [1.0.5] - 2025-01-18

### Changed
- Updated data structure: renamed 'holidays' field to 'dates'
- Improved test coverage with specific date assertions

## [1.0.4] - 2025-01-18

### Changed
- Improved documentation with official data sources and links
- Optimized README.md structure and content

## [1.0.3] - 2025-01-17

### Changed
- Updated default baseUrl to use unpkg CDN

## [1.0.2] - 2025-01-17

### Changed
- Updated CN region data format: 'name' field now uses Chinese text (same as name_cn)

## [1.0.1] - 2025-01-17

### Changed
- Optimized package size by adding .min.js and .min.json files
- Updated documentation with CDN examples

## [1.0.0] - 2025-01-16

### Added
- Initial release
- Added GitHub/Gitee mirror repositories 
- Added documentation (README.md, CONTRIBUTING.md)
- Added data format specification
- Added multi-language support (English/Chinese)
- Added China date data for 2002-2025
- Added Japan date data for 2000-2026
- Added jsDelivr CDN support
