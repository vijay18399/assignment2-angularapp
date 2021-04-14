import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  pdfSrc = "https://vijay18399.github.io/Medapati%20Vijay%20Reddy.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
