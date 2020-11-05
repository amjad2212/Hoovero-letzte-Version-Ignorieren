document.addEventListener('mousemove', function(e) {

      var btn = checkParentsForElement(e.target);
      if (btn != null) {

          if (chrome.runtime == null || chrome.runtime == undefined)
            return;

          chrome.runtime.sendMessage(
            "click buttons on hover",
            function(response) {
              var activated = response;

              if (activated != "true" && activated != true)
                return;
              var classList = btn.getAttribute("class") != undefined ? btn.getAttribute("class").split(/\s+/) : [];
              if (btn.classList.contains('bg-editor-blue')|| btn.classList.contains('bg-editor-orange')) {
                btn.click();
                console.log("This button is cliked:");
                console.log(btn);
                //btn.classList.add("bg-editor-orange");
              }

            }
          );
        }

      });

    function checkParentsForElement(element) {
      var a = element
      while (a) {
        if (a.tagName && a.tagName.toLowerCase() == "button")
          return a;
        a = a.parentNode;
      }

      return null;
    }
