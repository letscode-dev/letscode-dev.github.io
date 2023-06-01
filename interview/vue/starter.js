
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
