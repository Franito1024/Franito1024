<script>
        var libButton = document.getElementById('lib-button');
        var libIt = function() {
            var storyDiv = document.getElementById("story");
            var nounEl = document.getElementById("noun");
            var adjectiveEl = document.getElementById("adjective");
            var personEl = document.getElementById("person");
            storyDiv.innerHTML = "The" + nounEl.value + "asked the" + adjectiveEl.value + "where to find the lost" + personEl.value + ".";
        };
        libButton.addEventListener('click', libIt);
        
    </script>
