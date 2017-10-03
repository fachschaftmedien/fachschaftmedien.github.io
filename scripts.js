/**
 * created by NasskalteJuni
 */
$(function(){
    function getFSResositories(){
        return $.getJSON('https://api.github.com/users/fachschaftmedien/repos');
    }


    function displayRepositores(repoList){
        $('#repositories').empty();
        repoList.forEach(function(repo){
            $('#repositories').append(createRepoCard(repo));
        });
    }

    function createRepoCard(repo){
        return $(
            '<div class=card> ' +
            '<div class="card-header row">' +
                repo.name.toUpperCase() +
            '</div>' +
            '<div class="card-body row">' +
                repo.description +
            '</div>' +
            '<div class="card-footer row">' +
                '<div class="updated col-xs-12 col-md-6">' +
                    new Date(repo.updated_at).toDateString() +
                '</div>'+
                '<div class="url col-xs-12 col-md-6">' +
                    '<a href="'+repo.html_url+'">zu '+repo.full_name+'</a>'+
                '</div>'+
            '</div>' +
            '</div>');
    }

    function displayError(){
        $('repositories').html('<div class="error err"> Es ist ein Fehler aufgetreten </div>');
    }

    getFSResositories()
        .done(displayRepositores)
        .fail(displayError);

});