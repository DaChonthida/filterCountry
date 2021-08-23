import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core/services/country.service';

@Component({
  selector: 'app-country-list-two',
  templateUrl: './country-list-two.component.html',
  styleUrls: ['./country-list-two.component.scss'],
})
export class CountryListTwoComponent implements OnInit {
  countryList: any[] = [];
  filterList: any[] = [];
  search: any;
  constructor(public countryService: CountryService) {}

  ngOnInit(): void {
    this.fetchCountryData();
  }

  ngDoCheck(): void {
    this.filterList = this.countryList.filter((val: any) =>
      val.name
        .toString()
        .toLowerCase()
        .includes(this.search?.trim().toString().toLowerCase() || '')
    );
  }

  fetchCountryData() {
    this.countryService.getCountryList().subscribe((data) => {
      this.filterList = data;
      this.countryList = data;
    });
  }
}
