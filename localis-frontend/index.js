   document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content has loaded")

    const APIKEY = 'rAOCyzt6QeGeEXkhAbJRpHVniSmq2TfB'
    

      // let reviewURL = "http://localhost:3000/reviews"
      // fetch (reviewURL)
      // .then(resp => resp.json())
      // .then(data => data.forEach(review => {
      //   displayRow(review)}))

      // function displayRow(review){
      //   console.log(review)
      //   const table = document.querySelector("#events")
      //     table.innerHTML += `<a href="#" class="list-group-item">
      //                       <h4 class="list-group-item-heading">${review.user.user_name}</h4>
      //                       <p class="list-group-item-text">${review.description}</p>
      //                       <p class="venue"></p><br>`
      // }

      var page = 0;

      function getEvents(page) {
      
        $('#events-panel').show();
        $('#attraction-panel').hide();
      
        if (page < 0) {
          page = 0;
          return;
        }
        if (page > 0) {
          if (page > getEvents.json.page.totalPages-1) {
            page=0;
            return;
          }
        }
        
        $.ajax({
          type:"GET",
          url:`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKEY}&size=6&city=Atlanta&countryCode=US&stateCode=GA&page=`+page,
          async:true,
          dataType: "json",
          success: function(json) {
                getEvents.json = json;
                showEvents(json);
               },
          error: function(xhr, status, err) {
                console.log(err);
               }
        });
      }
      
      function showEvents(json) {
        var items = $('#events .list-group-item');
        items.hide();
        var events = json._embedded.events;
        var item = items.first();
        for (var i=0;i<events.length;i++) {
          item.children('.list-group-item-heading').text(events[i].name);
          item.children('.list-group-item-text').text(events[i].dates.start.localDate);
          try {
            item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
          } catch (err) {
            console.log(err);
          }
          item.show();
          item.off("click");
          item.click(events[i], function(eventObject) {
            console.log(eventObject.data);
            try {
              getAttraction(eventObject.data._embedded.attractions[0].id);
            } catch (err) {
            console.log(err);
            }
          });
          item=item.next();
        }
      }
      
      $('#prev').click(function() {
        getEvents(--page);
      });
      
      $('#next').click(function() {
        getEvents(++page);
      });
      
      function getAttraction(id) {
        $.ajax({
          type:"GET",
          url:`https://app.ticketmaster.com/discovery/v2/attractions/`+id+`.json?apikey=${APIKEY}`,
          async:true,
          dataType: "json",
          success: function(json) {
                showAttraction(json);
               },
          error: function(xhr, status, err) {
                console.log(err);
               }
        });
      }
      
      function showAttraction(json) {
        $('#events-panel').show();
        $('#attraction-panel').show();
        
        $('#attraction-panel').click(function() {
          getEvents(page);
        });
        
        $('#attraction .list-group-item-heading').first().text(json.name);
        $('#attraction img').first().attr('src',json.images[0].url);
        $('#classification').text(json.classifications[0].segment.name + " - " + json.classifications[0].genre.name + " - " + json.classifications[0].subGenre.name);
      }
      
      getEvents(page);  
  })