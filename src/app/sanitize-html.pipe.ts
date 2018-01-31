import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {EmojiService} from "angular-emojione";

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer, public emojiService: EmojiService) {
  }

  transform(v: string): SafeHtml {

    let replacedText;
    let replacePattern1;
    let replacePattern2;
    let replacePattern3;
    let replacePattern4;

    let emojiText = this.emojiService.convertText(v);
    replacedText = this.emojiService.unicodeToImage(emojiText);

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText =  this.replaceTxtNotInA(replacedText,replacePattern1,'<a href="$1" target="_blank">$1</a>');//replacedText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = this.replaceTxtNotInA(replacedText,replacePattern2,'$1<a href="http://$2" target="_blank">$2</a>');//replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = this.replaceTxtNotInA(replacedText,replacePattern3,'<a href="mailto:$1">$1</a>');//replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    replacePattern4 = /(^|\W)(#[a-z\d][\w-]*)/gim;
    replacedText = this.replaceTxtNotInA(replacedText,replacePattern4,'$1<a>$2</a>'); //replacedText.replace(replacePattern4, '$1<a>$2</a>');

    // return replacedText;

    return this._sanitizer.bypassSecurityTrustHtml(replacedText);
  }

  /**
   * https://stackoverflow.com/questions/20419989/linkify-clickable-text-urls-but-ignore-those-already-wrapped-in-a-hrefs
   * http://jsfiddle.net/rooseve/4qa5Z/1/
   * @param html
   * @param regex
   * @param replace
   * @returns {string}
   */
  replaceTxtNotInA(html, regex, replace) {
    //just to make the txt parse easily, without (start) or (ends) issue
    html = '>' + html + '<';
    //parse txt between > and < but not follow with</a
    html = html.replace(/>([^<>]+)(?!<\/a)</g, function (match, txt) {
      //now replace the txt
      return '>' + txt.replace(regex, replace) + '<';
    });
    //remove the head > and tail <
    return html.substring(1, html.length - 1);
  }
}
