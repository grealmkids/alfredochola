function contactus() {
  Swal.fire({
    html: `
        <div> <h1>Contact me <button class="btn- btn-danger rounded-5 border-0" onclick="closePopup()"> &times; close
        </button></h1>
       
        
         <div class="my-3 text-center">
          
         <p class="py-3"> <button class="btn  btn-whatsapp border-0" onclick="whatsappUs()">
            <i class="bi bi-whatsapp"></i>  +256 773913902
          </button><br><br>
         
</p>

       
     
        <p class="pb-3">
          <a class="btn btn-primary rounded rounded-5" href="tel:+256 773913902"> <i class="bi bi-phone"></i>  +256 773913902</a>
          </p>
          <p class="pb-3">
           <a class="btn btn-light shadow-2 shadow rounded rounded-5" href="tel:+256 773913902" href="mailto:ochalfie@gmail.com ">
           <i class="bi bi-envelope-fill"></i>  ochalfie@gmail.com</a>
          </p>
          <p>
          Mbalala (Mukono-Uganda)
         </p>
          </div>

        </div>
      `,
    showConfirmButton: false,
    showCancelButton: false,
  });
}

function closePopup() {
  Swal.close();
}

function whatsappUs() {
  window.location.href = "https://wa.me/+256781584927?text=Praise God Alfred! ";
}
