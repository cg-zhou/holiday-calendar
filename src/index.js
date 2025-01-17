class HolidayCalendar {
  constructor(options = {}) {
    this.version = '1.0.3';
    this.cache = new Map();
    this.baseUrl = options.baseUrl || 'https://unpkg.com/holiday-calendar/data';
  }

  /**
   * Load holiday data for specific region and year
   * @param {string} region - Region code (e.g., 'CN', 'JP')
   * @param {number} year - Year to load
   * @returns {Promise<Object>} Holiday data
   */
  async load(region, year) {
    const cacheKey = `${region}-${year}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const url = `${this.baseUrl}/${region}/${year}.json`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      throw new Error(`Failed to load holiday data for ${region} ${year}: ${error.message}`);
    }
  }

  /**
   * Get holidays for specific region and year
   * @param {string} region - Region code
   * @param {number} year - Year
   * @param {Object} options - Filter options
   * @returns {Promise<Array>} Filtered holidays
   */
  async getHolidays(region, year, options = {}) {
    const data = await this.load(region, year);
    let holidays = data.holidays;

    if (options.type) {
      holidays = holidays.filter(h => h.type === options.type);
    }

    if (options.startDate) {
      holidays = holidays.filter(h => h.date >= options.startDate);
    }

    if (options.endDate) {
      holidays = holidays.filter(h => h.date <= options.endDate);
    }

    return holidays;
  }

  /**
   * Check if a specific date is a holiday
   * @param {string} region - Region code
   * @param {string} date - Date string (YYYY-MM-DD)
   * @returns {Promise<Object|null>} Holiday information if it's a holiday, null otherwise
   */
  async isHoliday(region, date) {
    const year = parseInt(date.split('-')[0]);
    const holidays = await this.getHolidays(region, year);
    return holidays.find(h => h.date === date) || null;
  }
}

// Export as UMD (Universal Module Definition)
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    root.HolidayCalendar = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  return HolidayCalendar;
})); 