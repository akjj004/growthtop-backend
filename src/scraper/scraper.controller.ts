import { Controller } from '@nestjs/common';

import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {
    this.fetchPageData();
  }

  async fetchPageData() {
    this.scraperService.fetchAmazonDepartmentBestsellers('Books');
  }
}