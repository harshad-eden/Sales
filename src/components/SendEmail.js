export const sendEmail = () => {
  let html = `
            <h3>Welcome dude</h3>
            <p> Heloooo testing</p>
            `;
  window.Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'ekansh@edencaremedical.com',
    Password: '45DF1875226DCD42F35AC28612C9294FB0A8',
    To: 'harshad@edencaremedical.com',
    From: 'no-reply@edencaremedical.com',
    Subject: 'New Subscriber request',
    Body: html,
  })
    .then((message) => console.log(message))
    .catch((er) => console.log(er));
};
