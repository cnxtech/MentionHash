import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges} from "@angular/core";

@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements AfterViewInit,OnChanges {

  //the text that need to be put in the container
  @Input() textReadMore: string;

  //maximum height of the container
  @Input() maxHeight: number = 100;


  //set these to false to get the height of the expended container
  public isCollapsed: boolean = false;
  public isCollapsable: boolean = true;

  constructor(private elementRef: ElementRef,
              private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    console.log(this.elementRef.nativeElement.getElementsByTagName('dynamic-component')[0].innerHTML.length);
    let currentHeight = this.elementRef.nativeElement.getElementsByTagName('dynamic-component')[0].offsetHeight;
    console.log(currentHeight);
    console.log(this.maxHeight);


    //collapsable only if the contents make container exceed the max height
    if (currentHeight > this.maxHeight) {
      this.isCollapsed = true;
      this.isCollapsable = true;
    }

    console.log(this.isCollapsed);
    console.log(this.isCollapsable);

    this.cd.detectChanges();
  }

  ngOnChanges() {

  }

  private toggleView(): void {

  }



}
