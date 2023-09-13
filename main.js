document.querySelectorAll('.image-upload').forEach(input => {
    input.addEventListener('change', function () {
        const container = this.parentElement;
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                container.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(this.files[0]);
        } else {
            container.style.backgroundImage = '';
        }
    });
});







