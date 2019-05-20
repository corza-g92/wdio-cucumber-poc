import Page from './base_page';

const baseUrl = 'https://amptest.xplan.iress.com.au'

class LoginPage extends Page{
  get usernameInput()   { return browser.element('#userid'); }
  get passwordInput()   { return browser.element('#passwd'); }
  get loginButton()   { return browser.element('#btn_login'); }

  login(username, password) {
    this.usernameInput.inputText(username);
    this.passwordInput.inputText(password);
    this.loginButton.waitAndClick();

//  In case of customer not logged out properly, wait for either dashboard url or Error message duplicate login
    browser.waitUntil(function() {
      return (
        (browser.getUrl()) == `${baseUrl}/dashboard/mainhtml` ||
        (browser.getText('#mf-contentinner > div > h2')) ===
          'Duplicated Login'
      );
    }, 5000);

//  If login error, re-enter password and click login
    if ((browser.getUrl()) != `${baseUrl}/dashboard/mainhtml`) {
      this.passwordInput.inputText(password);
      this.loginButton.waitAndClick();
      browser.waitUntil(function() {
        return (browser.getUrl()) == `${baseUrl}/dashboard/mainhtml`;
      }, 5000);
    }
  }
}

export default new LoginPage()