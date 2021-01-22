import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LocationService } from 'src/app/shared/services/location.service';

@UntilDestroy()
@Component({
  selector: 'zen-home-pricing',
  templateUrl: './home-pricing.component.html',
  styleUrls: ['./home-pricing.component.scss']
})
export class HomePricingComponent implements OnInit {

  public _columns = ['description', 'startup', 'commercial', 'professional', 'enterprise'];
  public _tierDescriptions = [
    { description: "Web Pages", startup: "Up to 5", commercial: "Up to 15", professional: "Up to 30", enterprise: "Up to 30++" },
    { description: "MVP", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "Company Info Site", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "Basic Catalogs", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "Business API", startup: false, commercial: true, professional: true, enterprise: true },
    { description: "E-Commerce", startup: false, commercial: true, professional: true, enterprise: true },
    { description: "Advanced Data Management", startup: false, commercial: false, professional: true, enterprise: true },
    { description: "Basic Reports Generation", startup: false, commercial: false, professional: true, enterprise: true },
    { description: "Advanced Reports Generation", startup: false, commercial: false, professional: false, enterprise: true },
    { description: "Extensive Data Processing", startup: false, commercial: false, professional: false, enterprise: true },
    { description: "Full-featured Application", startup: false, commercial: false, professional: false, enterprise: true }
  ];

  public _authenticationDescriptions = [
    { description: "Email/Password", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "Mobile Number (Optional)", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "Google", basic: false, advanced: false, professional: true, enterprise: true },
    { description: "Second-factor Authentication", basic: false, advanced: false, professional: false, enterprise: true }
  ];

  public _apicolumns = ['description', 'basic', 'advanced', 'professional', 'enterprise'];
  public _apiTierDescriptions = [
    { description: "Microservices", basic: false, advanced: "Up to 3", professional: "Up to 5", enterprise: "Up to 5++" },
    { description: "Monolithic (Optional)", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "MVP", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "Hexagonal Architecture", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "SQL", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "NoSQL", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "Basic CRUD", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "Cron Jobs", basic: false, advanced: false, professional: true, enterprise: true },
    { description: "Data Export/Import", basic: false, advanced: false, professional: true, enterprise: true },
    { description: "Third-party APIs", basic: false, advanced: false, professional: true, enterprise: true },
    { description: "Complex Algorithms", basic: false, advanced: false, professional: false, enterprise: true },
    { description: "Full-featured API", basic: false, advanced: false, professional: false, enterprise: true }
  ];

  public _tierInclusions = [
    { description: "Domain Registration", startup: " 1 year", commercial: " 1 year", professional: " 1 year", enterprise: " 1 year" },
    { description: "Web Hosting", startup: " 1 year", commercial: " 1 year", professional: " 1 year", enterprise: " 1 year" },
    { description: "Business Emails", startup: "Up to 5 accounts", commercial: "Up to 5 accounts", professional: "Up to 10 accounts", enterprise: "Up to 20 accounts" },
    { description: "SSL Certificate (HTTPS)", startup: "1 year (DV)", commercial: "1 year (DV)", professional: "1 year (OV)", enterprise: "1 year (OV)" },
    { description: "Git Repository", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "Improved SEO", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "DDOS Protection", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "Post-development Maintenance", startup: " 2 months", commercial: " 3 months", professional: " 3 months", enterprise: " 6 months" }
  ];

  public _domesticRates: boolean;
  public _pricingTiers = ["Startup", "Commercial", "Pro", "Enterprise"];

  private _rates = {
    fixed: 3000,
    maintenance: 800,
    currency: 'USD'
  };

  private _ratesPH = {
    fixed: 70000,
    maintenance: 20000,
    currency: 'PHP'
  };

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.subscribeToCountry();
    this.locationService.getLocation();
  }

  public getRates() {
    if (this._domesticRates !== undefined) {
      return (this._domesticRates) ? this._ratesPH : this._rates;
    }
  }

  private subscribeToCountry() {
    this.locationService.country
      .pipe(untilDestroyed(this))
      .subscribe(country => {
        this._domesticRates = country && country === "PH";
      });
  }
}
