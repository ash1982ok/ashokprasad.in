import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectList = {
    "projects": [
      {
        "clientInfo": {
          "clientName": "Confidential",
          "location": "Bangalore, India",
          "duration": "2019-2021 (2 Years)"
        },
        "htmlDescription": {
          "designation": "Working as an UI Architect in Bengaluru, India",
          "listOfAchievement": [
            "<ul>",
            "<li>",
            "- Working on major platform transformation project includes platform",
            "modernization to cloud (GCP,Anthos,Google Analytics, Google Big",
            "Query, Google functions, Google Tag Manager, Zeotap etc)",
            "</li>",
            "<li>",
            "- New frontend architecture using Angular, Angular elements,",
            "GraphQL, Storybooks, Cypress, Nx, Jest, Strapi Headless CMS,",
            "TypeScript",
            "</li>",
            "</ul>"
          ],
          "companyInfo": {
            "companyName": "NTT Data",
            "companyTenure": "from: 2019"
          }
        }
      },
      {
        "clientInfo": {
          "clientName": "Virgin Media",
          "location": "London, UK",
          "duration": "2014-2019 (5 Years)"
        },
        "htmlDescription": {
          "designation": "Worked as Frontend Lead in London, UK.",
          "listOfAchievement": [
            "<ul>",
            "<li>",
            "- Lead 3 development team (AB test and Tag Management, Cable Sales",
            "Platform, Mobile sales Platform)",
            "</li>",
            "<li>",
            "- Lead the team to create AB tests managing different tags using tag",
            "management tool like Tealium, Adobe Launch, Google Tag Manager.",
            "<br />",
            "- Identified issues and provided solutions for any tag management/ab",
            "test issues.",
            "</li>",
            "<li>",
            "- Worked on various modules for mobile/cable sales paltform using",
            "libraries like ReactJs, Angular, Web Components, NodeJs - ExpressJs,",
            "Adobe Experience Manager 6+, Java - Spring Boot, Analytics -",
            "Omniture, Tealium",
            "</li>",
            "</ul>"
          ],
          "companyInfo": {
            "companyName": "Accenture Pvt. Ltd.",
            "companyTenure": "from: 2010 to: 2019"
          }
        }
      }
    ]
  }

  constructor() { }

  getProjectsList(){
    return this.projectList;
  }
}
