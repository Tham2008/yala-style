<template>

        

        <div class="map w-[100%] h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.842949738566!2d105.75038727459496!3d10.029815672521869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08830e54e5f25%3A0xd7d159025caa8609!2zxJAuIE5ndXnhu4VuIFbEg24gTGluaCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1697089835819!5m2!1sen!2s" class="w-[100%] h-[100%]" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
   

    <div class="wrapbox-content-contact">
        <div class="container">	
        <div class="flex flex-col lg:flex-row"> 
                  <div class="w-full pl-10 sm:w-1/3 sm:p-4 ">
    
                    <h2 class="text-3xl  font-bold my-8">Thông tin liên hệ</h2>
                    <ul class="infoList-contact -mx-4">
                        <li class="  w-[100%] pb-5">
                            <span class="w-9 h-9 leading-9  float-left 
                            text-sm text-center border-2 border-gray-300 rounded-[50%]">
                            <i class="fa fa-map-marker"></i></span>
                            <p class="pl-12 mb-1 text-sm ">
                                <strong class="font-bold text-black">Địa chỉ</strong>
                                <br>
                                <a class="text-slate-500">
                                    Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.
                                </a>
                            </p>
                        </li>
                        <li class=" w-[100%] pb-5">
                            <span class="w-9 h-9 leading-9  float-left  text-sm text-center border-2 border-gray-300 rounded-[50%]">
                                <i class="fa fa-envelope"></i>
                        </span>
                            <p class="pl-12 mb-1 text-sm ">
                                <strong class="font-bold text-black">Email</strong>
                                <br>
                                <a class="text-slate-500">
                                hi@haravan.com
                                </a>
                            </p>
                        </li>
                        <li class=" w-[100%] pb-5">
                            <span  class="w-9 h-9 leading-9  float-left 
                            text-sm text-center border-2 border-gray-300 rounded-[50%]">
                            <i class="fa fa-phone"></i>
                        </span>
                            <p class="pl-12 mb-1 text-sm ">
                                <strong class="font-bold text-black">Điện thoại</strong>
                                <br>
                                <a class="text-slate-500"> 1900.636.099</a>
                                
                            </p>
                        </li>
                        <li class=" w-[100%] pb-5">
                            <span  class="w-9 h-9 leading-9  float-left 
                            text-sm text-center border-2 border-gray-300 rounded-[50%]">
                                <i class="fa fa-envelope"></i>
                            </span>
                            <p class="pl-12 mb-1 text-sm ">
                                <strong class="font-bold text-black">Thời gian làm việc</strong>
                                <br>
                                <a class="text-slate-500">
                                    Thứ 2 đến Thứ 6 từ 8h đến 18h;
                                </a>
                               
                                <br> 
                                <a class="text-slate-500">
                                    Thứ 7 và Chủ nhật từ 8h00 đến 17h00
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
           
            <div class="lg:w-2/3 pl-4 sm:p-4"> <!-- Sử dụng w-1/2 để chia 1/2 màn hình -->
                <div class="box-send-contact">
                    <h2 class="text-3xl  font-bold my-8 ">Gửi thắc mắc cho chúng tôi</h2>
                    <p class="text-sm">Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                    <div id="col-left contactFormWrapper">
                        <form accept-charset="UTF-8" action="/contact" class="contact-form" method="post">
    <input name="form_type" type="hidden" value="contact">
    <input name="utf8" type="hidden" value="✓">
    
                                        
                                        <div class="contact-form">
                                            <div class="row">
                                                <div class="grid grid-cols-1">
                                                    <div class="input-group pt-5">
                                                        <input class="form-control " placeholder="Tên của bạn" aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                                <div class="flex">
                                                    <div class=" sm:w-1/2 pr-2">
                                                    <div class="input-group">
                                                        <input  class="form-control " placeholder="Email của bạn" aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                                <div class=" sm:w-1/2 pl-2">
                                                    <div class="input-group">
                                                        <input  class="form-control " placeholder="Số điện thoại của bạn" aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                                </div>
                                        
                                                <div class="grid grid-cols-1">
                                                    <div class="input-group">
                                                        <textarea placeholder="Nội dung" class="form-control" style="height: 100px;"></textarea>
                                                        <div class="sitebox-recaptcha text-sm pt-2 ">
                                                            This site is protected by reCAPTCHA and the Google
                                                            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" class="text-blue-600">Privacy Policy</a> 
                                                            and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" class="text-blue-600">Terms of Service</a> apply.
                                                        </div>	
                                                    </div>
                                                </div>
                                                <div class="col-xs-12">
                                                    <button class="button newsletter-btn text-sm font-bold px-[35px] py-[9px] ml-2 mt-2 md:mt-0 text-white bg-black hover:bg-[#e75656] transition-all uppercase">Gửi cho chúng tôi</button>
                                                </div>
                                            </div>
                                        </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        
            
</template>
      
     