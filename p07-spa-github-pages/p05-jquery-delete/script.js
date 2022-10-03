$(document).ready(function(){
    $('.node').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_up = rid[1];
        let mhs = $('#mhs_'+id_up).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`beneran mau dihapus? ${mhs} ?`);
            if(!konfirmasi) return;

            $('#up_'+id_up).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})
