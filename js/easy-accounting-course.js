$(document).ready(function(){
               
    
            $('#videoModal1').on('show.bs.modal', function (e) {   
                $("#videoModal1 iframe").attr("src", 'https://www.youtube.com/embed/f0dSeD3q3Ns?autoplay=1&rel=0&showinfo=0');
            });
            
            $('#videoModal1').on('hidden.bs.modal', function (e) {   
                $("#videoModal1 iframe").attr("src", 'https://www.youtube.com/embed/f0dSeD3q3Ns?autoplay=0&rel=0&showinfo=0');
            });
            
            //2do video
            $('#videoModal2').on('show.bs.modal', function (e) {   
                $("#videoModal2 iframe").attr("src", 'https://www.youtube.com/embed/4nTPEaEAx_Q?autoplay=1&rel=0&showinfo=0');
            });
            
            $('#videoModal2').on('hidden.bs.modal', function (e) {   
                $("#videoModal2 iframe").attr("src", 'https://www.youtube.com/embed/4nTPEaEAx_Q?autoplay=0&rel=0&showinfo=0');
            });
    
            //3ro video
            $('#videoModal3').on('show.bs.modal', function (e) {   
                $("#videoModal3 iframe").attr("src", 'https://www.youtube.com/embed/U6PN3F5q-C0?autoplay=1&rel=0&showinfo=0');
            });
            
            $('#videoModal3').on('hidden.bs.modal', function (e) {   
                $("#videoModal3 iframe").attr("src", 'https://www.youtube.com/embed/U6PN3F5q-C0?autoplay=0&rel=0&showinfo=0');
            });
    
            //4to video
            $('#videoModal4').on('show.bs.modal', function (e){
                $("#videoModal4 iframe").attr("src",'https://www.youtube.com/embed/bTJ4-rnkzqk?autoplay=1&rel=0&showinfo=0');
            });
            
            $('#videoModal4').on('hidden.bs.modal', function (e) {   
                $("#videoModal4 iframe").attr("src", 'https://www.youtube.com/embed/bTJ4-rnkzqk?autoplay=0&rel=0&showinfo=0');
            });
    
            //5to video
            $('#videoModal5').on('show.bs.modal', function (e){
                $("#videoModal5 iframe").attr("src", 'https://www.youtube.com/embed/YI5jDEjOq8A?autoplay=1&rel=0&showinfo=0');
            });
    
            $("#videoModal5").on('hidden.bs.modal', function (e) {
                $("#videoModal5 iframe").attr("src", 'https://www.youtube.com/embed/YI5jDEjOq8A?autoplay=0&rel=0&showinfo=0');
            });
    
            //6to video
            $('#videoModal6').on('show.bs.modal', function (e) {
                $("#videoModal6 iframe").attr("src", 'https://www.youtube.com/embed/dziMNOGtabA?autoplay=1&rel=0&showinfo=0');
            });
    
            $("#videoModal6").on('hidden.bs.modal', function (e) {
                $("#videoModal6 iframe").attr("src", 'https://www.youtube.com/embed/dziMNOGtabA?autoplay=0&rel=0&showinfo=0');
            });
    
            });