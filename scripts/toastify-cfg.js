var options = {
    text: "🎅 🎄🏖 Technical support unavailable Dec 25 - Jan 1",
    duration: 5000,
    close: true,
    callback: function () {
        this.remove();
        Toastify.reposition();
    }
};
var myToast = Toastify(options);
setTimeout(function () {
    myToast.showToast();
}, 1000);