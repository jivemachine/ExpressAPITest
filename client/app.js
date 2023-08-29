$(".driver").click(function (event) {
    $.getJSON('/api/chirps', function (tweet) {
        let count = Object.keys(tweet).length;
        for (let i = 1; i < count; i++) {
            $('.stage').append(`<div class="card" id="${i}" style="width: 18rem;"></div>`);
            $(`#${i}`).append(`<div class="card-body" id="chirpBody${i}"></div>`);
            
            $(`#chirpBody${i}`).append(`<h5 class="card-title" id="chirpUser${i}">User: ` + tweet[i].user + `</h5>`);
            $(`#chirpBody${i}`).append(`<p class="card-text">` + tweet[i].text + `</p>`)
        }
    });
});