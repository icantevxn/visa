import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faLinkedin,  faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedIn = faLinkedin;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  
  constructor() { }

  ngOnInit(): void {
  }

}
