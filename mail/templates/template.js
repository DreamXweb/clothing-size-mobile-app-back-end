module.exports.get = ({type, site_url, data}) => {

    // TODO add colors (shadows) to the email template

    let registration_img = 'https://dreamxweb.com/cardsicle/static/img/ellipses/Group_8182.png';
    let first_text = 'Thank you for registering. <br/> Your registration <strong> link </strong> is <a href=\'' + site_url + '/log-in?registration_code=' + data + '\'>here</a>';
    let second_text = '<p class="text-center" style="text-align: center; margin: 0; padding: 0;">Follow it to start using the <a href=\'' + site_url + '/\'>cardsicles.com</a> service</p>\n' +
        '                              <p class="text-center" style="text-align: center; margin: 0; padding: 0;">Log in into your account using your credentials</p>';

    if (type === 'forgot-password') {
        first_text = 'Your new <strong> password </strong> is ' + data;
        second_text = '<p class="text-center" style="text-align: center; margin: 0; padding: 0;">You can use it to <a href=\'' + site_url + '/log-in/\'>log in</a> to your account</p>\n' +
            '                              <p class="text-center" style="text-align: center; margin: 0; padding: 0;">The password can be changed in your profile settings</p>';
        registration_img = 'https://dreamxweb.com/cardsicle/static/img/ellipses/v2/Group_8207.png';
    }

    return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html lang="en" xmlns="http://www.w3.org/1999/xhtml"><head>\n' +
        '  <title>\n' +
        '  </title>\n' +
        '  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n' +
        '  <meta name="viewport" content="width=device-width">\n' +
        '  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">\n' +
        '  <style type="text/css">body, html {\n' +
        '    margin: 0;\n' +
        '    padding: 0;\n' +
        '    -webkit-font-smoothing: antialiased;\n' +
        '    width: 100% !important;\n' +
        '  }\n' +
        '  table td, table {\n' +
        '  }\n' +
        '  #outlook a {\n' +
        '    padding: 0;\n' +
        '  }\n' +
        '  .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {\n' +
        '    line-height: 100%;\n' +
        '  }\n' +
        '  #main-table {\n' +
        '    max-width: 600px;\n' +
        '  }\n' +
        '  .layer_2 {\n' +
        '    width: 50%;\n' +
        '  }\n' +
        '  #my-dear-circle {\n' +
        '    margin: -229px 0 -14px calc(200% - 550px);\n' +
        '  }\n' +
        '  @media only screen and (max-width: 600px) {\n' +
        '    #main-table {\n' +
        '      max-width: 100%;\n' +
        '    }\n' +
        '    .layer_2 {\n' +
        '      max-width: 100% !important;\n' +
        '      width: 100%;\n' +
        '    }\n' +
        '    #my-dear-circle {\n' +
        '      margin: -229px 0 -14px calc(100% - 250px);\n' +
        '    }\n' +
        '  }\n' +
        '  @media only screen and (max-width: 480px) {\n' +
        '    table, table tr td, table td {\n' +
        '      width: 100% ;\n' +
        '    }\n' +
        '    table tr td {\n' +
        '      width: auto;\n' +
        '    }\n' +
        '    img {\n' +
        '      width: inherit;\n' +
        '    }\n' +
        '  }\n' +
        '  </style>\n' +
        '  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">\n' +
        '</head><body style="padding:0; margin: 0;background: #e4e6ec">\n' +
        '<table style="height: 100%; width: 100%; background-color: #e4e6ec;" align="center" id=\'main-table\'>\n' +
        '  <tbody>\n' +
        '  <tr>\n' +
        '    <td valign="top" id="d-body" style="width: 100%; height: 100%; padding-top: 50px; padding-bottom: 50px; background-color: #e4e6ec;">\n' +
        '      <table style=\'width: 100%\'><tr><td>\n' +
        '        <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%; box-sizing: border-box; width: 100%; margin: 0 auto;">\n' +
        '          <tbody>\n' +
        '          <tr>\n' +
        '            <td class="draw" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style="width: 100%"><tr><td>\n' +
        '                <div class="layer_2" style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table class="ed-content" style="border-collapse: collapse;width:100%" border="0" cellpadding="0" cellspacing="0">\n' +
        '                    <tbody>\n' +
        '                    <tr>\n' +
        '                      <td class="ed-img" valign="top" style="padding: 55px 0 90px 0; box-sizing: border-box; text-align: center; overflow: hidden">\n' +
        '                        <img style="border-width: 0; font-size:12px; border-style: none; max-width: 280px; width: 100%;" width="309" alt="Image" src="' + registration_img + '">\n' +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '            <td class="draw" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style=\'width: 100%\'><tr><td>\n' +
        '                <div class="layer_2" style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table border="0" cellspacing="0" class="ed-content" style="border-collapse: collapse;width:100%">\n' +
        '                    <tbody>\n' +
        '                    <tr>\n' +
        '                      <td valign="top" class="ed-text" style="text-align: left; color: #5f5f5f; font-size: 12px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
        '                        <p class="style1 text-center" style="text-align: center; margin: 0; padding: 0; color: #222222; font-size: 24px;">' + first_text + '</p>\n' +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '            <td class="draw" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style=\'width: 100%\'><tr><td>\n' +
        '                <div class="layer_2" style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table border="0" cellspacing="0" class="ed-content" style="border-collapse: collapse;width:100%">\n' +
        '                    <tbody>\n' +
        '                    <tr>\n' +
        '                      <td valign="top" class="ed-text" style="padding: 30px 0 60px 0; text-align: left; color: #222222; font-size: 16px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
        second_text +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '\n' +
        '          <tr>\n' +
        '            <td class="draw" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style=\'width: 100%\'>\n' +
        '                <tr>\n' +
        '                  <td>\n' +
        '                    <div class="layer_2" style="display: inline-block; vertical-align: top;">\n' +
        '                      <table border="0" cellspacing="0" class="ed-content" style="border-collapse: collapse;width:100%">\n' +
        '                        <tbody>\n' +
        '                        <tr>\n' +
        '                          <td valign="top" class="ed-img" style="padding: 70px 0 40px 0; box-sizing: border-box; text-align: center;">\n' +
        '                            <img src="https://dreamxweb.com/cardsicle/static/img/ellipses/Illustration.png" alt="Image" width="191" style="font-size:12px; border-width: 0; border-style: none; max-width: 191px; width: 100%;">\n' +
        '                          </td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                          <td valign="top" class="ed-text" style="padding-bottom: 40px; text-align: left; color: #222222; font-size: 14px; line-height: 150%; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
        '                            <p class="style3 text-center" style="text-align: center; margin: 0; padding: 0; font-size: 20px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;">\n' +
        '                              <strong>Buy Gift Cards</strong>\n' +
        '                            </p>\n' +
        '                            <p style="margin: 0; padding: 0;">\n' +
        '                              <br>\n' +
        '                            </p>\n' +
        '                            <p class="text-center" style="text-align: center; margin: 0; padding: 0;">\n' +
        '                            </p>\n' +
        '                            <p class="text-center" style="text-align: center; margin: 0; padding: 20px;">Purchase gift cards from dozens of partner retailers and earn points towards future purchases.</p>\n' +
        '                          </td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                          <td valign="top" class="ed-button text-center" style="text-align: center;">\n' +
        '                            <table cellspacing="0" cellpadding="0" style="text-align: center;margin:0 auto;max-width: 216px" align="center">\n' +
        '                              <tbody>\n' +
        '                              <tr>\n' +
        '                                <td align="center" class="text-center" style="cursor: pointer; border-radius: 8px; background: #696969; text-align: center;">\n' +
        '                                  <a style="font-size: 20px; line-height: 24px; padding: 14px; word-break: break-word; color: #ffffff; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: normal; text-decoration: none; display: inline-block;" href=\'' + site_url + '/buy-gift-cards-page\'><span style="color: #ffffff;">Buy Gift Cards</span></a></td>\n' +
        '                              </tr>\n' +
        '                              </tbody>\n' +
        '                            </table>\n' +
        '                          </td>\n' +
        '                        </tr>\n' +
        '                        </tbody>\n' +
        '                      </table>\n' +
        '                    </div>\n' +
        '                    <div class="layer_2" style="display: inline-block; vertical-align: top;">\n' +
        '                      <table border="0" cellspacing="0" class="ed-content" style="border-collapse: collapse;width:100%;">\n' +
        '                        <tbody>\n' +
        '                        <tr>\n' +
        '                          <td valign="top" class="ed-img" style="padding: 70px 0 64px 0; box-sizing: border-box; text-align: center;">\n' +
        '                            <img src="https://dreamxweb.com/cardsicle/static/img/ellipses/Overspending.png" alt="Image" width="219" style="border-width: 0; font-size:12px; border-style: none; width: 219px;">\n' +
        '                          </td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                          <td valign="top" class="ed-text" style="padding-bottom: 40px; text-align: left; color: #222222; font-size: 14px; line-height: 150%; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
        '                            <p class="style3 text-center" style="text-align: center; margin: 0; padding: 0; font-size: 20px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;">\n' +
        '                              <strong>Sell Gift Cards</strong>\n' +
        '                            </p>\n' +
        '                            <p style="margin: 0; padding: 0;">\n' +
        '                              <br>\n' +
        '                            </p>\n' +
        '                            <p class="text-center" style="text-align: center; margin: 0; padding: 0;">\n' +
        '                            </p>\n' +
        '                            <p class="text-center" style="text-align: center; margin: 0 0 20px 0; padding: 20px;">Receive the highest payouts in the industry for your unwanted gift cards.</p>\n' +
        '                          </td>\n' +
        '                        </tr>\n' +
        '                        <tr>\n' +
        '                          <td valign="top" class="ed-button text-center" style="text-align: center;">\n' +
        '                            <table cellspacing="0" cellpadding="0" style="text-align: center;margin:0 auto;max-width: 216px;" align="center">\n' +
        '                              <tbody>\n' +
        '                              <tr>\n' +
        '                                <td align="center" class="text-center" style="cursor: pointer; border-radius: 8px; background: #696969; text-align: center;">\n' +
        '                                  <a style="padding: 14px; font-size: 20px; line-height: 24px; word-break: break-word; color: #ffffff; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: normal; text-decoration: none; display: inline-block;" href=\'' + site_url + '/sell-gift-cards-page\'><span style="color: #ffffff;">Sell Gift Cards</span></a></td>\n' +
        '                              </tr>\n' +
        '                              </tbody>\n' +
        '                            </table>\n' +
        '                          </td>\n' +
        '                        </tr>\n' +
        '                        </tbody>\n' +
        '                      </table>\n' +
        '                    </div>\n' +
        '                  </td>\n' +
        '                </tr>\n' +
        '              </table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '\n' +
        '          <tr>\n' +
        '            <td class="draw" valign="top" align="center" style="background-color: #ffffff; box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style=\'width: 100%\'><tr><td>\n' +
        '                <div class="layer_2" style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table border="0" cellspacing="0" cellpadding="0" class="ed-content" style="border-collapse: collapse;width:100%">\n' +
        '                    <tbody>\n' +
        '                    <tr>\n' +
        '                      <td valign="top" class="ed-img" style="padding: 140px 0 72px 0; box-sizing: border-box; text-align: center;">\n' +
        '                        <img src="https://dreamxweb.com/cardsicle/static/img/ellipses/Group_8194.png" alt="Image" width="303" style="border-width: 0; font-size:12px; border-style: none; max-width: 303px; width: 100%;">\n' +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '\n' +
        '          </tbody>\n' +
        '        </table>\n' +
        '      </td></tr></table>\n' +
        '    </td>\n' +
        '  </tr>\n' +
        '  </tbody>\n' +
        '</table>\n';
}
