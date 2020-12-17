import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zen-home-pricing',
  templateUrl: './home-pricing.component.html',
  styleUrls: ['./home-pricing.component.scss']
})
export class HomePricingComponent implements OnInit {

  public _pricingTiers = [
    {
      name: "Startup",
      minPrice: 2000,
      maxPrice: 8000,
      currency: "USD",
      details: [
        "Up to 5 web pages",
        "Professional info page",
        "Company profile page",
      ],
      inclusions: [
        "1 year domain",
        "1 year web hosting",
        "1 year SSL certificate",
        "6 months API server hosting",
        "Business emails",
        "SEO Optimization",
        "Cloudflare DDOS Protection",
        "Cloudflare CDN"
      ]
    },
    {
      name: "Commercial",
      minPrice: 6000,
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
        "1 year domain",
        "1 year web hosting",
        "1 year SSL certificate",
        "6 months API server hosting",
        "Business emails",
        "SEO Optimization",
        "Cloudflare DDOS Protection",
        "Cloudflare CDN"
      ]
    },
    {
      name: "Professional",
      minPrice: 12000,
      maxPrice: 25000,
      currency: "USD",
      details: [
        "Up to 30 web pages",
        "Organization management",
        "Company asset management",
        "Large-scale e-Commerce"
      ],
      inclusions: [
        "1 year domain",
        "1 year web hosting",
        "1 year SSL certificate",
        "6 months API server hosting",
        "Business emails",
        "SEO Optimization",
        "Cloudflare DDOS Protection",
        "Cloudflare CDN"
      ]
    },
    {
      name: "Enterprise",
      minPrice: 25000,
      maxPrice: 50000,
      currency: "USD",
      details: [
        "30++ web pages",
        "Complex data management",
        "Complex algorithms",
        "Full-featured applications"
      ],
      inclusions: [
        "1 year domain",
        "1 year web hosting",
        "1 year SSL certificate",
        "6 months API server hosting",
        "Business emails",
        "SEO Optimization",
        "Cloudflare DDOS Protection",
        "Cloudflare CDN"
      ]
    }
  ];

  public _backEndTiers = [
    {
      name: "Basic",
      minPrice: 1500,
      maxPrice: 7000,
      currency: "USD",
      details: [
        "Up to 2 microservices",
        "Unlimited number of APIs",
        "SQL/NoSQL",
        "Basic data queries"
      ],
      inclusions: [
        "1 year hosting",
        "1 year SSL certificate",
        "2 months cloud-server hosting"
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
        "1 year hosting",
        "1 year SSL certificate",
        "3 months cloud-server hosting"
      ]
    },
    {
      name: "Professional",
      minPrice: 12000,
      maxPrice: 40000,
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
        "1 year hosting",
        "1 year SSL certificate",
        "3 months cloud-server hosting"
      ]
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
