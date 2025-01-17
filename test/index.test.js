const assert = require('assert');
const HolidayCalendar = require('../src/index');

// Mock fetch for Node.js environment
global.fetch = async (url) => {
  const mockData = {
    year: 2024,
    region: 'CN',
    dates: [
      {
        date: '2024-01-01',
        name: '元旦',
        name_cn: '元旦',
        name_en: 'New Year\'s Day',
        type: 'public_holiday'
      }
    ]
  };

  return {
    ok: true,
    json: async () => mockData
  };
};

async function runTests() {
  const calendar = new HolidayCalendar();

  try {
    // Test loading holiday data
    console.log('Testing holiday data loading...');
    const cnData = await calendar.load('CN', 2024);
    assert(cnData.year === 2024, 'Year should be 2024');
    assert(cnData.region === 'CN', 'Region should be CN');
    assert(Array.isArray(cnData.dates), 'Dates should be an array');

    // Test getting holidays
    console.log('Testing holiday filtering...');
    const holidays = await calendar.getHolidays('CN', 2024, { type: 'public_holiday' });
    assert(Array.isArray(holidays), 'Filtered holidays should be an array');
    assert(holidays.every(h => h.type === 'public_holiday'), 'All holidays should be public holidays');

    // Test checking specific date
    console.log('Testing specific date check...');
    const newYear = await calendar.isHoliday('CN', '2024-01-01');
    assert(newYear !== null, 'New Year should be a holiday');
    assert(newYear.type === 'public_holiday', 'New Year should be a public holiday');

    console.log('All tests passed!');
  } catch (error) {
    console.error('Tests failed:', error);
    process.exit(1);
  }
}

runTests(); 