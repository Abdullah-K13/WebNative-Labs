
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;")
});
$(".my-cursor").hover(
    function() {
        $('.cursor').addClass('inview');
    },
    function() {
        $('.cursor').removeClass('inview');
    }
);
