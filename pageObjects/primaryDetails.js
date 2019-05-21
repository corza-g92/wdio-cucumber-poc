import BasePage from '../pageObjects/basePage'

let personalDetailsSelector = '//div[h2[contains(., "Personal Details")]]';

class PrimaryDetails extends BasePage {
  comparePersonalDetails() {
    super.compare(personalDetailsSelector);
  }
}

export default new PrimaryDetails()