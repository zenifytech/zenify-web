import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zen-home-pricing',
  templateUrl: './home-pricing.component.html',
  styleUrls: ['./home-pricing.component.scss']
})
export class HomePricingComponent implements OnInit {

  public _pricingTiers = [
    {
      name: "Professional",
      minPrice: 3000,
      maxPrice: 8500,
      currency: "USD",
      details: [
        "Up to 5 web pages",
        "Professional info page",
        "Company profile page",
      ],
      inclusions: [
        "1 year domain subscription",
        "1 year web hosting",
        "1 year SSL certification"
      ]
    },
    {
      name: "Commercial",
      minPrice: 8000,
      maxPrice: 15000,
      currency: "USD",
      details: [
        "Up to 12 web pages",
        "Basic product catalogs",
        "Service catalogs",
        "Small-scale e-Commerce",
        "Third-party API integrations"
      ],
      inclusions: [
        "1 year domain subscription",
        "1 year web hosting",
        "1 year SSL certification"
      ]
    },
    {
      name: "Large-Scale",
      minPrice: 12000,
      maxPrice: 23000,
      currency: "USD",
      details: [
        "Up to 20 web pages",
        "Organization management",
        "Company asset management",
        "Large-scale e-Commerce"
      ],
      inclusions: [
        "1 year domain subscription",
        "1 year web hosting",
        "1 year SSL certification"
      ]
    },
    {
      name: "Enterprise",
      minPrice: 20000,
      maxPrice: 40000,
      currency: "USD",
      details: [
        "20++ web pages",
        "Complex data management",
        "Complex algorithms",
        "Full-featured applications"
      ],
      inclusions: [
        "1 year domain subscription",
        "1 year web hosting",
        "1 year SSL certification"
      ]
    }
  ];

  public _backEndTiers = [
    {
      name: "Basic",
      minPrice: 2500,
      maxPrice: 7000,
      currency: "USD",
      details: [
        "Up to 2 microservices",
        "Unlimited number of APIs",
        "SQL/NoSQL",
        "Basic data queries"
      ],
      inclusions: [
        "1 year API hosting",
        "1 year SSL certification",
        "2 months auto-scaling costs"
      ]
    },
    {
      name: "Advanced",
      minPrice: 6000,
      maxPrice: 15000,
      currency: "USD",
      details: [
        "Up to 5 microservices",
        "Unlimited number of APIs",
        "SQL/NoSQL",
        "Advanced data queries",
        "Authentication",
        "Authorization",
        "Third-party API integrations"
      ],
      inclusions: [
        "1 year API hosting",
        "1 year SSL certification",
        "3 months auto-scaling costs"
      ]
    },
    {
      name: "Professional",
      minPrice: 10000,
      maxPrice: 25000,
      currency: "USD",
      details: [
        "Up to 10 microservices",
        "Unlimited number of APIs",
        "Complex data queries",
        "Complex algorithms",
        "Complex data processing",
        "Optimizing resources for existing applications"
      ],
      inclusions: [
        "1 year API hosting",
        "1 year SSL certification",
        "3 months auto-scaling costs"
      ]
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
