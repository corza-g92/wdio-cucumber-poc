let expect = require('chai').expect;
let primaryDetailsSelector = 'a=Primary Details';
let iframeSearchResultSelector = 'search_frame';

export default class Page {
  get keyDetailsLink() { return $('a[data-xplan-elem=key_details]'); }
  get primaryDetailsLink() { return $(primaryDetailsSelector); }
  get logoutButton() { return $('a=Logout'); }
  
  open(path) {
    browser.url(path);
  }

  compare(locator){
    let results = browser.checkElement(locator);
    results.forEach((result, idx)=> expect(result.isExactSameImage, 'Image ' + idx + ' isn\'t the same').to.be.true);
  }

  openClient(entityID) {
    this.open(`/factfind/view/${entityID}?role=client&refresh=1`);
  }

  navigateToPrimaryDetails() {
    if (!browser.isVisible(primaryDetailsSelector)) {
      this.keyDetailsLink.waitAndClick();
    }
    this.primaryDetailsLink.waitAndClick();
  }

  logout() {
    this.logoutButton.waitAndClick();
  }
}