exports.template = (email, message) => {
  return `<!DOCTYPE html>
  <html>
  <head>
  <title> Mail to ${email}</title>
  </head>
  <body>
  <p> Hello user</p>
  <p>${message}</p>
  </body>
    </html>`;
};
