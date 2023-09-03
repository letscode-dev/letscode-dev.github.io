export const sendTelegramMessage = (message) => {
    const userId = process.env.TELEGRAM_USER_ID;
    const token = process.env.TELEGRAM_TOKEN;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${message}`;

    fetch(url)
        .then(res => res.json())
        .then(body => console.log(body))
}
