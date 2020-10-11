import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Data, InstagramService } from './instagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: Data[] = [];

  constructor(
    private instaService: InstagramService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `like`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/like.svg')
    );
  }

  ngOnInit(): void {
    this.instaService.getData().subscribe(
      res => this.data = res
    );
  }

  likeDesc(): void {
    this.data.sort((a, b) => a.likes > b.likes ? -1 : 1);
  }

  likeAsc(): void {
    this.data.sort((a, b) => a.likes > b.likes ? 1 : -1);
  }

  DateDesc(): void {
    this.data.sort((a, b) => (new Date(a.timestamp) as any) - (new Date(b.timestamp) as any));
  }

  DateAsc(): void {
    this.data.sort((a, b) => (new Date(b.timestamp) as any) - (new Date(a.timestamp) as any));
  }

}
