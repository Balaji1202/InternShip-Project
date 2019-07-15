export var Suggestions = {
    
    settings: {
        dataList: document.getElementById("dataList"),
        arrayList: [],  
        bookInput: document.getElementById("bname"),
        search: document.getElementById("searchButton"),
        bookName: String
    },

    initSuggestion: function() {
        
        Suggestions.settings.bookInput.addEventListener("input", function() {
            Suggestions.displayResultOnSuggestionClick(event);
        });
        
        Suggestions.settings.bookInput.addEventListener("keyup", function(event)
        {
            Suggestions.searchOnEnter(event);
        });
        
        Suggestions.settings.bookInput.addEventListener("focus", function() {
            Suggestions.loadDataList();
        });

        Suggestions.settings.search.addEventListener("click", function() {
            Suggestions.waitToLoadData();
        });
    },

    loadDataList: function() {

        for (i=0; i< BookSearch.myBooks.length; i++ ) {
            nextOption = document.createElement("option");
            if(! Suggestions.settings.arrayList.includes( BookSearch.myBooks[i]["BOOK NAME"]) )
            {
                nextOption.setAttribute('value',BookSearch.myBooks[i]["BOOK NAME"]);
                Suggestions.settings.dataList.appendChild(nextOption); 
                Suggestions.settings.arrayList.push(BookSearch.myBooks[i]["BOOK NAME"]);
            }
        }
    },

    waitToLoadData: function() {
    
        var tableHead = document.getElementById("tableHead");
        tableHead.style.display = "none";

        var beforeSearch = document.getElementById("beforeSearch");
        beforeSearch.style.display = "none";

        BookSearch.settings.divContainer.innerHTML="<img style='margin-left:420px' src='../images/searching.gif' alt='Searching!'>";
        setTimeout(function()
        { 
            BookSearch.createTableFromJSON();
        }, 500)
    },

    searchOnEnter: function(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            Suggestions.settings.search.click();
        }
    },

    displayResultOnSuggestionClick: function()
    {
        Suggestions.settings.bookName = document.getElementById("bname").value;
        if($('#dataList option').filter(function() { return this.value.toUpperCase() === Suggestions.settings.bookName.toUpperCase(); }).length)
        {
            Suggestions.settings.search.click();
        }
    },
};