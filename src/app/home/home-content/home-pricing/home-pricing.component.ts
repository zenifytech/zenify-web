import { Component, OnInit } from '@angular/core';

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
    { description: "Basic Catalogs", startup: false, commercial: true, professional: true, enterprise: true },
    { description: "Business API", startup: false, commercial: true, professional: true, enterprise: true },
    { description: "E-Commerce", startup: false, commercial: true, professional: true, enterprise: true },
    { description: "Third-party APIs", startup: false, commercial: false, professional: true, enterprise: true },
    { description: "Advanced Data Management", startup: false, commercial: false, professional: true, enterprise: true },
    { description: "Basic Reports Generation", startup: false, commercial: false, professional: true, enterprise: true },
    { description: "Complex Algorithms", startup: false, commercial: false, professional: false, enterprise: true },
    { description: "Advanced Reports Generation", startup: false, commercial: false, professional: false, enterprise: true },
    { description: "Extensive Data Processing", startup: false, commercial: false, professional: false, enterprise: true },
    { description: "Full-featured Application", startup: false, commercial: false, professional: false, enterprise: true }
  ]

  public _tierInclusions = [
    { description: "Domain Registration", startup: " 1 year", commercial: " 1 year", professional: " 1 year", enterprise: " 1 year" },
    { description: "Web Hosting", startup: " 1 year", commercial: " 1 year", professional: " 1 year", enterprise: " 1 year" },
    { description: "SSL Certificate (HTTPS)", startup: " 1 year (DV)", commercial: " 1 year (DV)", professional: " 6 months (OV)", enterprise: " 6 months (OV)" },
    { description: "Business Emails", startup: " 5 accounts", commercial: " 5 accounts", professional: " 5 accounts", enterprise: " 5 accounts" },
    { description: "Maintenance", startup: " 2 months", commercial: " 3 months", professional: " 3 months", enterprise: " 6 months" },
    { description: "Git Repository", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "Improved SEO", startup: true, commercial: true, professional: true, enterprise: true },
    { description: "DDOS Protection", startup: true, commercial: true, professional: true, enterprise: true }
  ]

  public _apicolumns = ['description', 'basic', 'advanced', 'professional', 'enterprise'];
  public _apiTierDescriptions = [
    { description: "Monolithic", basic: true, advanced: true, professional: true, enterprise: true },
    { description: "Microservices", basic: "Up to 2", advanced: "Up to 3", professional: "Up to 5", enterprise: "Up to 5++" },
    { description: "MVP", basic: true, advanced: true, professional: true, enterprise: true },
    { description: "Hexagonal Architecture", basic: true, advanced: true, professional: true, enterprise: true },
    { description: "SQL", basic: true, advanced: true, professional: true, enterprise: true },
    { description: "NoSQL", basic: true, advanced: true, professional: true, enterprise: true },
    { description: "Basic CRUD", basic: true, advanced: true, professional: true, enterprise: true },
    { description: "Basic Authentication", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "Batch Jobs", basic: false, advanced: true, professional: true, enterprise: true },
    { description: "Data Export/Import", basic: false, advanced: false, professional: true, enterprise: true },
    { description: "SSO", basic: false, advanced: false, professional: true, enterprise: true },
    { description: "Third-party APIs", basic: false, advanced: false, professional: true, enterprise: true },
    { description: "Complex Algorithms", basic: false, advanced: false, professional: false, enterprise: true },
    { description: "Extensive Data Processing", basic: false, advanced: false, professional: false, enterprise: true },
    { description: "Full-featured API", basic: false, advanced: false, professional: false, enterprise: true }
  ]

  public _apiTierInclusions = [
    { description: "Server Hosting", basic: " 6 months", advanced: " 6 months", professional: " 6 months", enterprise: " 6 months" },
    { description: "SSL Certificate (HTTPS)", basic: " 1 year (DV)", advanced: " 1 year (DV)", professional: " 6 months (OV)", enterprise: " 6 months (OV)" },
    { description: "Git Repository", basic: true, advanced: true, professional: true, enterprise: true },
    { description: "DDOS Protection", basic: true, advanced: true, professional: true, enterprise: true }
  ]

  public _pricingTiers = [
    {
      name: "Startup",
      minPrice: 2000,
      maxPrice: 8000,
      currency: "USD"
    },
    {
      name: "Commercial",
      minPrice: 6000,
      maxPrice: 15000,
      currency: "USD"
    },
    {
      name: "Pro",
      minPrice: 12000,
      maxPrice: 25000,
      currency: "USD"
    },
    {
      name: "Enterprise",
      minPrice: 25000,
      maxPrice: 50000,
      currency: "USD"
    }
  ];

  public _backEndTiers = [
    {
      name: "Basic",
      minPrice: 2000,
      maxPrice: 7000,
      currency: "USD"
    },
    {
      name: "Advanced",
      minPrice: 5000,
      maxPrice: 15000,
      currency: "USD"
    },
    {
      name: "Pro",
      minPrice: 12000,
      maxPrice: 30000,
      currency: "USD"
    },
    {
      name: "Enterprise",
      minPrice: 25000,
      maxPrice: 50000,
      currency: "USD"
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
