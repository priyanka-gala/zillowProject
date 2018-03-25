/* codeExercise :  class which handles tabs logic
* Properties:
*       this.tabs - contains tabs elements indexed by tab id
*       this.tabContent - contains tab content indexed by tab id
*       this.currentTabId - represents currently selected tab id
* Methods:
*       this.init() - initialize this.tabs and this.tabContent and assign click handler to tabs
*       this.manageClickEvents - handles click events on tabs
* */
var codeExercise = (function() {
    function YorkTimesTabs(tabId) {
        this.currentTabId = tabId;
        this.tabs = [];
        this.tabContent = [];
        this.init();
    }

    YorkTimesTabs.prototype.init = function() {
        var self = this;

        $(".new-york-times-tabs li a").each(function() {
            var id = $(this)[0].id,
                content;

            content = $("#" + id + "-content");

            self.tabContent[id] =  $("#" + id + "-content");

            self.tabs[id] = $(this);

            if (id === self.currentTabId) {
                $(self.tabs[id]).addClass("selected");
                $(self.tabContent[id]).addClass("selected");
            }

            $(self.tabs[id]).click(function(e) {
                self.manageClickEvents(e, self);
            });
        });
    };

    YorkTimesTabs.prototype.manageClickEvents = function(e, self) {
        $(this.tabs[this.currentTabId]).removeClass("selected");
        $(this.tabs[e.target.id].addClass("selected"));


        $(this.tabContent[this.currentTabId]).removeClass("selected");
        $(this.tabContent[e.target.id]).addClass("selected");

        this.currentTabId = e.target.id;
    };

    return {
        YorkTimesTabs : YorkTimesTabs
    }


}());

// intantiate codeExercise class and select "real-estate" tab
newYorkTabs = new codeExercise.YorkTimesTabs("real-estate");