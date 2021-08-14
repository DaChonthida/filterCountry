import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class SearchBarComponent implements OnInit {
  countryList: any[] = [];
  search: any;
  constructor(public countryService: CountryService) {}

  ngOnInit(): void {
    this.fetchCountryData();
  }

  fetchCountryData() {
    this.countryService.getCountryList().subscribe((data) => {
      this.countryList = data;
    });
  }
}
