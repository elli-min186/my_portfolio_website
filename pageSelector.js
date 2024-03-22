// adding event listeners to nav links
// get data with page name attribute
// hide all the sections
// only reveal section that is active
$(document).ready(function() {
    function activeSection (sectionID) {
        $('section').removeClass('active');
        $('#' + sectionID).addClass('active');
        $('.checkbox').prop('checked', false);
        sessionStorage.setItem('section', sectionID); // store the sectionID as a local storage
    }
    $('.nav-link').on('click', function(){
        var pageName = $(this).data('page-name');
        activeSection(pageName);
    });
    $('.homeLogo').on('click', function() {
        activeSection('home'); // Activate the "home" section
    });
    // does not change sections when you reload the websit
    var storedActiveSection = sessionStorage.getItem('section');
    if (storedActiveSection) {
        activeSection(storedActiveSection);
    }
});