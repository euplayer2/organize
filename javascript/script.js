function openTab(event, tabId) {
    event.preventDefault();

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    var activeTab = document.getElementById(tabId);
    activeTab.classList.add("active");
    event.currentTarget.classList.add("active");
}