interface IMailData {
  email: string;
  subject: string;
  message: string;
}

export const sendMail = async (data: IMailData) => {
  return fetch('/api/mail', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res)
}