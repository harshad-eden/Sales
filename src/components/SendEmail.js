export const sendEmail = (providerName, prevStatus, newStatus) => {
  let html = `
            <h3>Service provider ${providerName} status changed from ${prevStatus} to ${newStatus}</h3>
            `;
  window.Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'ekansh@edencaremedical.com',
    Password: '45DF1875226DCD42F35AC28612C9294FB0A8',
    To: 'harshad@edencaremedical.com',
    From: 'no-reply@edencaremedical.com',
    Subject: 'Status change',
    Body: html,
  })
    .then((message) => console.log(message))
    .catch((er) => console.log(er));
};
