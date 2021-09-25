$(document).ready(() => {

  $.getJSON("https://raw.githubusercontent.com/prgrmmrthz/gsv3/main/productsList.json", function(data, status){
    //console.debug(data);
    listThat(data.Sheet1);
  });

  function listThat(data){
      console.debug(data);
    $.each(data, (key, value)=>{
        //console.debug(key, value);
        $("#products .encl").append(`
        <div class="col mb-5">
        <div class="card h-100">
        <img
            class="card-img-top"
            src="${value.pic}"
            alt="..."
        />
        <div class="card-body p-4">
            <div class="text-center">
            <h5 class="fw-bolder">${value.name.toUpperCase()}</h5>
            <!-- Product reviews-->
            <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
            </div>
            ₱${Number(value.price).toFixed(2)}
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <a class="btn btn-outline-dark mt-auto" target="_blank" href="${value.link}"
                >Details</a
            >
            </div>
        </div>
        </div>
    </div>
        `);
    });// each
  }//function list that

  $(document).on({
    ajaxStart: function(){
        $("body").addClass("loading");
    },
    ajaxStop: function(){
        $("body").removeClass("loading");
    }
});
});
