import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
  standalone: false
})
export class ProyectsComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  activeImageSrc: string = '';
  activeImageTitle: string = '';
  constructor(
    public analyticsService: AnalyticsService, private modalService: NgbModal
  ) { }

  ngOnInit(): void {


  }

  openModal(content: any, title: string, imageUrl1: string) {
    this.activeImageSrc = imageUrl1;
    console.log(imageUrl1);
    this.activeImageTitle = title;
    //const modalRef = this.modalService.open(content, { size: 'xl', centered: true ,backdrop: false});

    this.modalService.open(content, {
      size: 'xl',
      centered: true,
      backdrop: false,      // keeps dark background
      keyboard: true,
      windowClass: 'lightbox-modal'
    });
  }

}
