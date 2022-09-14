function tampilkanSemuaResep() {
       $.getJSON('data/resep.json', function (data) {
         let resep = data.resep;
         $('#daftar-resep').empty();
         $.each(resep, function (i, data) {
           $('#daftar-resep').append(`<div class="col-md-4"><div class="card mb-5"><img src="picture/img/` + data.gambar + `" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Nama Makanan : ` + data.nama + `</h5><p class="card-text">Bahan : ` + data.bahan + `</p><h5 class="card-title">Asal Negara : ` + data.negara + `</h5><div class="text-lg-center"><a href="#" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail Resep</a></div></div></div></div>`)
         });
       });
     }
     tampilkanSemuaResep();
   
     $('.nav-link').on('click', function () {
       $('.nav-link').removeClass('active');
       $(this).addClass('active');
   
       let negara = $(this).html();
       $('h1').html(negara);
   
       if (negara == 'All Resep') {
         tampilkanSemuaResep();
   
         return;
       }
   
       $.getJSON('data/resep.json', function (data) {
         let resep = data.resep;
         let content = '';
         $.each(resep, function (i, data) {
           if (data.negara == negara.toLowerCase()) {
             content += `<div class="col-md-4"><div class="card mb-5"><img src="picture/img/` + data.gambar + `" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Nama Makanan : ` + data.nama + `</h5><p class="card-text">Bahan : ` + data.bahan + `</p><h5 class="card-title">Asal Negara : ` + data.negara + `</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>`;
           }
         });
   
         $('#daftar-resep').html(content);
   
       });
     });

    fetch("data/resep.json")
     .then(response => response.json())
     .then(data => {
      let resep = data.resep;
      let content = '';
        $.each(resep,function (i, data){
          content += `<div><br>Nama Makanan : `+ data.nama + `<br> <br> Bahan : `+ data.bahan + `<br><br>Cara Membuat :` + data.caramembuat +`</div>`;
        });
        $('#exampleModalLabel').html(content);
     });

    
