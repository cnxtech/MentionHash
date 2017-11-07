import {Directive, ElementRef, Input, Renderer, SimpleChanges} from "@angular/core";

@Directive({
  selector: '[imageCenterCrop]'
})
export class ImageCenterCropDirective {

  @Input() image: any;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }


  ngOnChanges(changes: SimpleChanges) {

   /* if (this.image) {
      $("div.aspectcorrect").each(function (index, div) {
        let img = $(div).find("img").get(0);
        this.FixImage(true, div, img);
      });
    }*/

  }

  /*RememberOriginalSize(img) {
    if (!img.originalsize) {
      img.originalsize = {width: img.width, height: img.height};
    }
  }


  FixImage(fLetterBox, div, img) {

    this.RememberOriginalSize(img);

    let targetwidth = $(div).width();
    let targetheight = $(div).height();
    let srcwidth = img.originalsize.width;
    let srcheight = img.originalsize.height;
    let result = this.ScaleImage(srcwidth, srcheight, targetwidth, targetheight, fLetterBox);

    img.width = result.width;
    img.height = result.height;
    $(img).css("left", result.targetleft);
    $(img).css("top", result.targettop);
  }

  StretchImage(div, img) {
    this.RememberOriginalSize(img);

    let targetwidth = $(div).width();
    let targetheight = $(div).height();

    img.width = targetwidth;
    img.height = targetheight;
    $(img).css("left", 0);
    $(img).css("top", 0);
  }


  FixImages(fLetterBox) {
    $("div.aspectcorrect").each(function (index, div) {
      let img = $(div).find("img").get(0);
      this.FixImage(fLetterBox, div, img);
    });
  }

  StretchImages() {
    $("div.aspectcorrect").each(function (index, div) {
      let img = $(div).find("img").get(0);
      this.StretchImage(div, img);
    });
  }*/


  // srcwidth/srcheight are the dimensions of the orignal image
  // targetwidth and targetheight are the dimensions of the rendering area
  // fLetterBox implies "add black bars" if true.  If false, the image is "zoomed" (cropped on one dimension) such that it fills the entire target space
  // The result object returned has the following properties:
  //     width: width to scale the image to
  //     height: height to scale the image to
  //     targetleft: position relative to the left edge of the target to center the image (can be negative when fLetterBox is false)
  //     targettop: position relative to the top edge of the target to center the image (can be negative when fLetterBox is false)
  ScaleImage(srcwidth, srcheight, targetwidth, targetheight, fLetterBox) {

    let result = {width: 0, height: 0, targetleft: 0, targettop: 0, fScaleToTargetWidth: true};

    if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
      return result;
    }

    // scale to the target width
    let scaleX1 = targetwidth;
    let scaleY1 = (srcheight * targetwidth) / srcwidth;

    // scale to the target height
    let scaleX2 = (srcwidth * targetheight) / srcheight;
    let scaleY2 = targetheight;

    // now figure out which one we should use
    let fScaleOnWidth = (scaleX2 > targetwidth);
    if (fScaleOnWidth) {
      fScaleOnWidth = fLetterBox;
    }
    else {
      fScaleOnWidth = !fLetterBox;
    }

    if (fScaleOnWidth) {
      result.width = Math.floor(scaleX1);
      result.height = Math.floor(scaleY1);
      result.fScaleToTargetWidth = true;
    }
    else {
      result.width = Math.floor(scaleX2);
      result.height = Math.floor(scaleY2);
      result.fScaleToTargetWidth = false;
    }
    result.targetleft = Math.floor((targetwidth - result.width) / 2);
    result.targettop = Math.floor((targetheight - result.height) / 2);

    return result;
  }

}
