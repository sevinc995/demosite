$(document).ready(function () {
    $(document).on("keypress", function(e) {
        if (e.which == 13) {
            let url = `https://apidemo-phi.vercel.app/api/news`;
            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();
                console.log(data);
            }
            mynews();
        }
    });
});