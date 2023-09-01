"use client"

const InterviewPage = () => {
    const handleClick = () => {
        const userId = process.env.TELEGRAM_USER_ID;
        const token = process.env.TELEGRAM_TOKEN;
        const message = 'O brave new world';

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${message}`;

        fetch(url)
            .then(res => res.json())
            .then(body => console.log(body))
    }

    return (
        <div>
            <h1>{}</h1>
            <h1>{}</h1>
            <h1>Let's Interview</h1>
            <div>Подготовка к интервью от школы программирования</div>
            <a href="https://letscode-dev.github.io/" target="_blank">Let's Code</a>
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default InterviewPage;
