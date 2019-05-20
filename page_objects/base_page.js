let expect = require('chai').expect;

export default class Page {
  compare(locator){
    results = browser.checkElement(locator);
    results.forEach((result, idx)=> expect(result.isExactSameImage, 'Image ' + idx + ' isn\'t the same').to.be.true);
  }
}