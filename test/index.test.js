/* eslint-disable no-console */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const HolidayCalendar = require('../src/index');

/**
 * Test data loader that loads data from local files
 * @param {string} region - Region code
 * @param {number} year - Year
 * @returns {Promise<Object>} Holiday data
 */
async function testDataLoader(region, year) {
  const filePath = path.join(__dirname, '..', 'data', region, `${year}.json`);
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

async function runTests() {
  const calendar = new HolidayCalendar({
    dataLoader: testDataLoader
  });

  try {
    // Test loading data
    console.log('Testing data loading...');
    const cnData = await calendar.load('CN', 2024);
    assert(cnData.year === 2024, 'Year should be 2024');
    assert(cnData.region === 'CN', 'Region should be CN');
    assert(Array.isArray(cnData.dates), 'Dates should be an array');

    // Test getting dates
    console.log('Testing date filtering...');
    const dates = await calendar.getHolidays('CN', 2024, { type: 'public_holiday' });
    assert(Array.isArray(dates), 'Filtered dates should be an array');
    assert(dates.every(h => h.type === 'public_holiday'), 'All dates should be public holidays');

    // Test 2025 specific dates
    console.log('Testing 2025 specific dates...');
    const data2025 = await calendar.load('CN', 2025);
    
    // New Year's Day
    assert(data2025.dates.find(d => d.date === '2025-01-01' && d.type === 'public_holiday'), '2025-01-01 should be public holiday');
    
    // Spring Festival (Chinese New Year)
    const springFestival = [
      ['2025-01-28', 'public_holiday'],
      ['2025-01-29', 'public_holiday'],
      ['2025-01-30', 'public_holiday'],
      ['2025-01-31', 'public_holiday'],
      ['2025-02-01', 'public_holiday'],
      ['2025-02-02', 'public_holiday'],
      ['2025-02-03', 'public_holiday'],
      ['2025-02-04', 'public_holiday'],
      ['2025-01-26', 'transfer_workday'],
      ['2025-02-08', 'transfer_workday']
    ];
    springFestival.forEach(([date, type]) => {
      assert(data2025.dates.find(d => d.date === date && d.type === type), `${date} should be ${type}`);
    });

    // Tomb-Sweeping Day
    const qingming = [
      ['2025-04-04', 'public_holiday'],
      ['2025-04-05', 'public_holiday'],
      ['2025-04-06', 'public_holiday']
    ];
    qingming.forEach(([date, type]) => {
      assert(data2025.dates.find(d => d.date === date && d.type === type), `${date} should be ${type}`);
    });

    // Labor Day
    const laborDay = [
      ['2025-05-01', 'public_holiday'],
      ['2025-05-02', 'public_holiday'],
      ['2025-05-03', 'public_holiday'],
      ['2025-05-04', 'public_holiday'],
      ['2025-05-05', 'public_holiday'],
      ['2025-04-27', 'transfer_workday']
    ];
    laborDay.forEach(([date, type]) => {
      assert(data2025.dates.find(d => d.date === date && d.type === type), `${date} should be ${type}`);
    });

    // Dragon Boat Festival
    const dragonBoat = [
      ['2025-05-31', 'public_holiday'],
      ['2025-06-01', 'public_holiday'],
      ['2025-06-02', 'public_holiday']
    ];
    dragonBoat.forEach(([date, type]) => {
      assert(data2025.dates.find(d => d.date === date && d.type === type), `${date} should be ${type}`);
    });

    // Mid-Autumn Festival & National Day
    const midAutumnNationalDay = [
      ['2025-10-01', 'public_holiday'],
      ['2025-10-02', 'public_holiday'],
      ['2025-10-03', 'public_holiday'],
      ['2025-10-04', 'public_holiday'],
      ['2025-10-05', 'public_holiday'],
      ['2025-10-06', 'public_holiday'],
      ['2025-10-07', 'public_holiday'],
      ['2025-10-08', 'public_holiday'],
      ['2025-09-28', 'transfer_workday'],
      ['2025-10-11', 'transfer_workday']
    ];
    midAutumnNationalDay.forEach(([date, type]) => {
      assert(data2025.dates.find(d => d.date === date && d.type === type), `${date} should be ${type}`);
    });

    console.log('All tests passed!');
  } catch (error) {
    console.error('Tests failed:', error);
    process.exit(1);
  }
}

runTests(); 