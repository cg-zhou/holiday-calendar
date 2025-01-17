class HolidayCalendar {
  constructor(options = {}) {
    this.version = '1.0.5';
    this.cache = new Map();
    this.dataLoader = options.dataLoader || this.defaultDataLoader;
  }

  /**
   * Default data loader that fetches data from CDN
   * @param {string} region - Region code (e.g., 'CN', 'JP')
   * @param {number} year - Year to load
   * @returns {Promise<Object>} Holiday data
   */
  async defaultDataLoader(region, year) {
    const baseUrl = 'https://unpkg.com/holiday-calendar/data';
    const url = `${baseUrl}/${region}/${year}.json`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Failed to load date data for ${region} ${year}: ${error.message}`);
    }
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

    const data = await this.dataLoader(region, year);
    this.cache.set(cacheKey, data);
    return data;
  }

  /**
   * Get dates for specific region and year
   * @param {string} region - Region code (e.g. 'CN', 'JP')
   * @param {number} year - Year (e.g. 2024)
   * @param {Object} [options] - Filter options
   * @param {string} [options.type] - Filter by type
   * @param {string} [options.startDate] - Filter by start date (YYYY-MM-DD)
   * @param {string} [options.endDate] - Filter by end date (YYYY-MM-DD)
   * @returns {Promise<Array>} Filtered dates
   */
  async getHolidays(region, year, options = {}) {
    const data = await this.load(region, year);
    let dates = data.dates;

    if (options.type) {
      dates = dates.filter(h => h.type === options.type);
    }

    if (options.startDate) {
      dates = dates.filter(h => h.date >= options.startDate);
    }

    if (options.endDate) {
      dates = dates.filter(h => h.date <= options.endDate);
    }

    return dates;
  }

  /**
   * Get date info for specific date
   * @param {string} region - Region code (e.g. 'CN', 'JP')
   * @param {string} date - Date string (YYYY-MM-DD)
   * @returns {Promise<Object|null>} Date info or null if not found
   */
  async getDateInfo(region, date) {
    const year = parseInt(date.slice(0, 4));
    const dates = await this.getHolidays(region, year);
    return dates.find(h => h.date === date) || null;
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