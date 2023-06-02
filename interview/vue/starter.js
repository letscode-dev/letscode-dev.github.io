
const ARR_MENU_LINKS = [1, 2, 3];

new Vue({
    el: '#root',
    data: {
        menu: null,
    },
    mounted() {
        this.menu = ARR_MENU_LINKS;
    },
});

const userId = '272620381';
const token = '6205367184:AAHZZF3vpzohA4AlZzQk3vLzEfNZEVq8gfk';
const message = 'O brave new world';

const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${message}`;

const element = document.querySelector('#send');
element.addEventListener('click', action);

function action() {
    console.log('fetch');

    fetch(url)
        .then(res => res.json())
        .then(body => console.log(body))
}
