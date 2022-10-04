
// TODO check
module.exports.get = ({type, data}) => {

    // TODO add colors (shadows) to the email template

    let content_1 = '                    <tr>\n' +
        '                      <td style="text-align: left; color: rgb(95, 95, 95); font-size: 12px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
        '                        <p style="text-align: center; margin: 0; padding: 0; color: rgb(34, 34, 34); font-size: 24px;">Thank you for registering. <br> Here is your <strong> verification code </strong>:</p>\n' +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    <tr>\n' +
        '                      <td style="text-align: center; color: rgb(95, 95, 95); font-size: 12px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box; padding-top: 15px;">\n' +
        '                        <span style="display: inline-block; width: 72px; height: 57px; border: 2px solid #76C5F2; border-radius: 8px; font-size: 30px; padding-top: 15px; margin-left: 5px; margin-right: 5px;">' + data[0] + '</span>\n' +
        '                        <span style="display: inline-block; width: 72px; height: 57px; border: 2px solid #76C5F2; border-radius: 8px; font-size: 30px; padding-top: 15px; margin-left: 5px; margin-right: 5px;">' + data[1] + '</span>\n' +
        '                        <span style="display: inline-block; width: 72px; height: 57px; border: 2px solid #76C5F2; border-radius: 8px; font-size: 30px; padding-top: 15px; margin-left: 5px; margin-right: 5px;">' + data[2] + '</span>\n' +
        '                        <span style="display: inline-block; width: 72px; height: 57px; border: 2px solid #76C5F2; border-radius: 8px; font-size: 30px; padding-top: 15px; margin-left: 5px; margin-right: 5px;">' + data[3] + '</span>\n' +
        '                      </td>\n' +
        '                    </tr>\n';

    let content_2 =         '                        <p style="text-align: center; margin: 0; padding: 0;">Enter it to start using the Size Math mobile application</p>\n' +
        '                        <p style="text-align: center; margin: 0; padding: 0;">The log in into your account using your credentials</p>\n';


    // TODO check
    if (type === 'forgot-password') {
        content_1 = '                    <tr>\n' +
            '                      <td style="text-align: left; color: rgb(95, 95, 95); font-size: 12px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
            '                        <p style="text-align: center; margin: 0; padding: 0; color: rgb(34, 34, 34); font-size: 24px;">Your new <strong> password </strong> is ' + data + '</p>\n' +
            '                      </td>\n' +
            '                    </tr>\n'

        content_2 = '<p class="text-center" style="text-align: center; margin: 0; padding: 0;">You can use it to log in to your account</p>\n' +
            '                              <p class="text-center" style="text-align: center; margin: 0; padding: 0;">The password can be changed in your profile settings</p>';
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
        '  @media only screen and (max-width: 600px) {\n' +
        '    #main-table {\n' +
        '      max-width: 100%;\n' +
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
        '\n' +
        '      <table style="width: 100%;"><tbody><tr><td>\n' +
        '        <table align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%; box-sizing: border-box; width: 100%; margin: 0 auto;">\n' +
        '          <tbody>\n' +
        '          <tr>\n' +
        '            <td valign="top" align="center" style="background-color: rgb(255, 255, 255); box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style="width: 100%;"><tbody><tr><td>\n' +
        '                <div style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table style="border-collapse: collapse; width: 100%;" border="0" cellpadding="0" cellspacing="0">\n' +
        '                    <tbody>\n' +
        '                    <tr>\n' +
        '                      <td valign="top" style="padding: 55px 0 90px; box-sizing: border-box; text-align: center; overflow: hidden;">\n' +
        '                        <img style="border-width: 0; font-size: 12px; border-style: none; max-width: 280px; width: 100%;" width="309" alt="Image" src="https://firebasestorage.googleapis.com/v0/b/clothingsize-61807.appspot.com/o/Group%207370.png?alt=media&token=9022ebe0-559a-4da9-abaf-166ea9f61f87">\n' +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></tbody></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '            <td valign="top" align="center" style="background-color: rgb(255, 255, 255); box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style="width: 100%;"><tbody><tr><td>\n' +
        '                <div style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table border="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">\n' +
        '                    <tbody>\n' +
        content_1 +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></tbody></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '            <td valign="top" align="center" style="background-color: rgb(255, 255, 255); box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style="width: 100%;"><tbody><tr><td>\n' +
        '                <div style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table border="0" cellspacing="0" style="border-collapse: collapse; width: 100%;">\n' +
        '                    <tbody>\n' +
        '                    <tr>\n' +
        '                      <td valign="top" style="padding: 30px 0 60px; text-align: left; color: rgb(34, 34, 34); font-size: 16px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
        content_2 +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></tbody></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '          <tr>\n' +
        '            <td valign="top" align="center" style="background-color: rgb(255, 255, 255); box-sizing: border-box; font-size: 0; text-align: center;">\n' +
        '              <table style="width: 100%;"><tbody><tr><td>\n' +
        '                <div style="max-width: 100%; display: inline-block; vertical-align: top; width: 100%;">\n' +
        '                  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%;">\n' +
        '                    <tbody>\n' +
        '                    <tr>\n' +
        '                      <td valign="top" style="padding: 140px 0 72px; box-sizing: border-box; text-align: center;">\n' +
        '                        <img src="https://firebasestorage.googleapis.com/v0/b/clothingsize-61807.appspot.com/o/people.png?alt=media&token=cb794a8b-779e-4665-b05a-fbf4618d83e7" alt="Image" width="303" style="border-width: 0; font-size: 12px; border-style: none; max-width: 303px; width: 100%;">\n' +
        '                        <span style="height: 100px; color: black;">Get the right fit the first time, every time!</span>\n' +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    <tr>\n' +
        '                      <td valign="top" style="padding: 30px 0 60px; text-align: left; color: rgb(34, 34, 34); font-size: 16px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">\n' +
        '                        <p style="text-align: center; margin: 0; padding: 0;">Get the right fit the first time, every time!</p>\n' +
        '                      </td>\n' +
        '                    </tr>\n' +
        '                    </tbody>\n' +
        '                  </table>\n' +
        '                </div>\n' +
        '              </td></tr></tbody></table>\n' +
        '            </td>\n' +
        '          </tr>\n' +
        '\n' +
        '          </tbody>\n' +
        '        </table>\n' +
        '      </td></tr></tbody></table>\n' +
        '\n' +
        '    </td>\n' +
        '  </tr>\n' +
        '  </tbody>\n' +
        '</table>';
}
