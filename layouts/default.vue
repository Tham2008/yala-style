<template>
    <div>

       
            <header class="mainHeader  mainHeader_temp02">
            <div class="topbar bg-[#f5f5f5] text-zinc-500 text-center font-medium text-xs pt-1 pb-2 relative block overflow-hidden">
                <div class="container">

        <ul class="topbar-slideText relative overflow-hidden ">
            <li class="discount txt-none">
                Miễn phí vận chuyển với đơn hàng trên <strong class="font-sans">500k</strong>
                <a href="/" class=" inline-block  font-medium bg-[#f02849] mt-2 ml-2  sm:ml-2 text-white rounded sm:rounded p-2">Xem ngay</a>
            </li>
        </ul>
    </div>
    </div>

<div class="mainHeader-middle">
    

 
  <div class="container">
    <header class="mainHeader mainHeader_temp02">
    <!-- Phần menu dành cho màn hình nhỏ -->
    <div class="md:hidden">
  <div class="flex justify-between items-center p-2">
    <div class="cursor-pointer" @click="showMobileMenu = !showMobileMenu">
      <i class="fa fa-bars text-2xl"></i>
    </div>
    <a class="text-2xl sm:text-3xl font-bold uppercase text-slate-950">Yala Style</a>
    <div class="header-action ml-2 sm:ml-6 md:ml-28 m-3 sm:m-5 flex items-center">
            <!-- Hình đăng nhập -->
            <div class="header-action-item header-action_account mr-2 sm:mr-4">
              <a href="/">
                <img src="/img/user.png" alt="" class="w-5 sm:w-6 md:w-7 lg:w-8">
              </a>
            </div>

            <!-- Hình giỏ hàng -->
            <div class="header-action-item header-action_cart">
              <a href="/">
                <img src="/img/shopping.png" alt="" class="w-5 sm:w-6 md:w-7 lg:w-8">
              </a>
            </div>
          </div>
  </div>
  <!-- Modal menu -->
  <div
  v-show="showMobileMenu"
  class="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-60 items-center justify-center mt-[10px]"
>
    <div class="bg-white rounded-lg p-4 max-w-md relative">
      <button @click="closeMobileMenu" class="absolute top-2 right-2 text-gray-500">
  <i class="fa fa-times text-2xl"></i>
</button>
          <ul>
            <li><NuxtLink to="/">Trang chủ</NuxtLink></li>
            <li class="has-submenu">
              <a @click="showHeaderSubmenu = !showHeaderSubmenu">Header</a>
              <ul v-show="showHeaderSubmenu">
                <li><a title="Kiểu header 01">Kiểu header 01</a></li>
                <li><a title="Kiểu header 02">Kiểu header 02</a></li>
                <li><a title="Kiểu header 03">Kiểu header 03</a></li>
              </ul>
            </li>
            <li><NuxtLink to="/product">Sản phẩm</NuxtLink></li>
            <li class="has-submenu">
              <a @click="showProductSubmenu = !showProductSubmenu">Product Views</a>
              <ul v-show="showProductSubmenu">
                <li><a title="Kiểu hiện thị 01">Kiểu hiện thị 01</a></li>
                <li><a title="Kiểu hiện thị 02">Kiểu hiện thị 02</a></li>
                <li><a title="Kiểu hiện thị 03">Kiểu hiện thị 03</a></li>
              </ul>
            </li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/intro">Giới thiệu</NuxtLink></li>
            <li><NuxtLink to="/contact">Liên hệ</NuxtLink></li>
          </ul>
        </div>

      </div>
    
    </div>

    <!-- Phần menu dành cho màn hình lớn -->
    <div class="hidden md:flex  items-center p-2">
      <a class="text-2xl sm:text-3xl font-bold uppercase text-slate-950 whitespace-nowrap">Yala Style</a>
      <ul id="navbar" class=" menuList-submainmd:flex md:items-center 
      absolute md:relative top-16 left-0 md:top-0 md:left-0 w-full md:w-auto
       md:flex-row md:space-x-3 transition-all pl-9">
        <li class="mx-2 sm:mx-3 my-2 sm:my-3 md:my-0">
          <NuxtLink to="/">Trang chủ</NuxtLink>
        </li>
        <li class="mx-2 sm:mx-3 has-submenu">
          <NuxtLink to="/shop">
            Header
            <i class="fa fa-chevron-down text-xs pl-2" id="chevron-down"></i>
            <ul class="menuList-submain bg-white">
              <li class="py-[8px] ml-4 mr-12">
                <a title="Kiểu header 01">Kiểu header 01</a>
              </li>
              <li class="py-[8px] ml-4 mr-12">
                <a title="Kiểu header 02">Kiểu header 02</a>
              </li>
              <li class="py-[8px] ml-4 mr-12">
                <a title="Kiểu header 03">Kiểu header 03</a>
              </li>
            </ul>
          </NuxtLink>
        </li>
        <li class="mx-2 sm:mx-3">
          <NuxtLink to="/product">Sản phẩm</NuxtLink>
        </li>
        <li class="mx-2 sm:mx-3 has-submenu">
          <NuxtLink to="/product">
            Product Views
            <i class="fa fa-chevron-down text-xs pl-2" id="chevron-down"></i>
            <ul class="menuList-submain bg-white">
              <li class="py-[8px] ml-4 mr-12">
                <a title="Kiểu header 01">Kiểu hiện thị 01</a>
              </li>
              <li class="py-[8px] ml-4 mr-12">
                <a title="Kiểu header 02">Kiểu hiện thị 02</a>
              </li>
              <li class="py-[8px] ml-4 mr-12">
                <a title="Kiểu header 03">Kiểu hiện thị 03</a>
              </li>
            </ul>
          </NuxtLink>
        </li>
        <li class="mx-2 sm:mx-3">
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li class="mx-2 sm:mx-3">
          <NuxtLink to="/intro">Giới thiệu</NuxtLink>
        </li>
        <li class="mx-2 sm:mx-3">
          <NuxtLink to="/contact">Liên hệ</NuxtLink>
        </li>
      </ul>
      <div class="header-action ml-2 sm:ml-6 md:ml-28 m-3 sm:m-5 flex items-center">
            <!-- Hình đăng nhập -->
            <div class="header-action-item header-action_account mr-2 sm:mr-4">
              <a href="/">
                <img src="/img/user.png" alt="" class="w-5 sm:w-6 md:w-7 lg:w-8">
              </a>
            </div>

            <!-- Hình giỏ hàng -->
            <div class="header-action-item header-action_cart">
              <a href="/">
                <img src="/img/shopping.png" alt="" class="w-5 sm:w-6 md:w-7 lg:w-8">
              </a>
            </div>
          </div>
    </div>
  </header>
  </div>
  
    </div>



</header>	
        
 


 
       
        <div class=" mx-auto">
            <slot/>
        </div>
  
    <section class="footer">
        <footer class="bg-[#120c0c]  ">
        
        <section class="section-footer-gallery mt-[70px]">
       <div class="wraptitle-gallery text-center bg-zinc-100">
    
        <div class="section-heading p-8">			
            <h2 class="text-3xl mb-2 font-bold">Follow us on Instagram</h2>		
            <p>	@instagram	 </p>		
        </div>
    </div>

<div class="gallery">	
    <div class="grid grid-cols-3 sm:flex">
    <div class="gallery-item ">
            <a class="groupbanner-hover" href="//www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <img class=" lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_1_img.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_1_img.jpg?v=3265" alt="instagram">
            </a>
        </div>				
        <div class="gallery-item ">
            <a class="groupbanner-hover" href="//www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <img class=" lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_2_img.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_2_img.jpg?v=3265" alt="instagram">
            </a>
        </div>					
        <div class="gallery-item ">
            <a class="groupbanner-hover" href="//www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <img class=" lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_3_img.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_3_img.jpg?v=3265" alt="instagram">
            </a>
        </div>				
        <div class="gallery-item ">
            <a class="groupbanner-hover" href="//www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <img class=" lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_4_img.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_4_img.jpg?v=3265" alt="instagram">
            </a>
        </div>					
        <div class="gallery-item ">
            <a class="groupbanner-hover" href="//www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <img class=" lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_5_img.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_5_img.jpg?v=3265" alt="instagram">
            </a>
        </div>				
        <div class="gallery-item ">
            <a class="groupbanner-hover" href="//www.instagram.com/instagram/" target="_blank" rel="noreferrer">
                <img class=" lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_6_img.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/gallery_item_6_img.jpg?v=3265" alt="instagram">
            </a>
        </div>	
  <!-- Thêm các gallery items cho ảnh còn lại -->
</div>
    <div class="footer-expand-collapsed  block pt-10 pb-8">
        <div class="container">
            <div class="row flex " >
                
                <div class=" widget-footer grid grid-cols-2 gap-3 "> 
                    <div>
                        <h4 class="font-bold text-lg pb-4 text-white">Về Runner Mobile</h4>
                
                
                    <div class="flex">
                        <div class="grid grid-cols-2 text-zinc-400 text-sm">
                            <div>
                                <p>Với các giải pháp công nghệ tốt nhất, Haravan là tất cả những gì bạn cần để xây dựng thương hiệu online, thành công trong bán lẻ và marketing đột phá.</p>

                            </div>
                            <div class="pl-6 l">
                                <ul>
                                    <li class="mb-2"><b>Địa chỉ:
                                        
                                    </b> Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.</li>
                                    <li class="mb-2"><b>Điện thoại:</b> 1900.636.099</li>
                                    <li class="mb-2"><b>Email:</b> hi@haravan.com</li>
                                </ul>
                            </div>
                            
                        </div>	
                    </div>
                </div>
                <div class="widget-footer grid grid-cols-2 gap-3  ">
                    <div class="pl-8">
                        <h4 class="font-bold text-lg pb-4 text-white">Hỗ trợ khách hàng</h4>
                    <div class="content-footer text-sm pt-1 pl-4  text-zinc-400 ">				
                        <ul class="footerNav-link list-disc">
                            
                            <li class="item mb-2">
                                <a href="/search" title="Tìm kiếm">Tìm kiếm</a>
                            </li>
                            
                            <li class=" item mb-2">
                                <a href="/pages/about-us" title="Giới thiệu">Giới thiệu</a>
                            </li>
                            
                            <li class="item mb-2">
                                <a href="/pages/chinh-sach-doi-tra" title="Chính sách đổi trả">Chính sách đổi trả</a>
                            </li>
                            
                            <li class="item mb-2">
                                <a href="/pages/chinh-sach-bao-mat" title="Chính sách bảo mật">Chính sách bảo mật</a>
                            </li>
                            
                            <li class="item mb-2">
                                <a href="/pages/dieu-khoan-dich-vu" title="Điều khoản dịch vụ">Điều khoản dịch vụ</a>
                            </li>
                                
                        </ul>			
                    </div>
                    </div>
                    <div class="text-white">	

                    <h4 class="font-bold text-lg pb-4 ">Chăm sóc khách hàng</h4>
                            <div class="content-footer block-collapse">
                      <div class="footerInfo-hline flex ">
                         <div class="box-icon w-8 h-8 fill-zinc-400">
                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px" viewBox="0 0 473.806 473.806" class=""   xml:space="preserve"> <g>
                         <g> 
                            <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path> </g> </g> </svg>
                         </div>
              <div class="box-content grid pl-5">
                <span class="font-bold text-lg">1900.636.099</span>
                  <u>hi@haravan.com</u>000
    </div>
</div>


<h4 class=" font-bold text-lg py-4">Follow Us</h4>

<ul class="footerNav-social w-23 flex  text-zinc-400 text-sm">											
    <li>
        <a class="text-sm w-8 h-8 bg-transparent divide-solid border-2 block mr-2 mb-2 rounded text-center leading-8">
            <i class="fab fa-facebook-f padding: 5px;"></i>
        </a>
    </li>

        <li><a class="text-sm w-8 h-8 bg-transparent divide-solid border-2 block mr-2 mb-2 rounded text-center leading-8" aria-label="Twitter">
            <i class="fab fa-twitter padding: 8px;"></i>
        </a></li>

        <li><a class=" text-sm w-8 h-8 bg-transparent divide-solid border-2 block mr-2 mb-2 rounded text-center leading-8" aria-label="Instagram">
            <i class="fab fa-instagram padding: 8px;"></i>
        </a></li>
    <li><a class="text-sm w-8 h-8 bg-transparent divide-solid border-2 block mr-2 mb-2 rounded text-center leading-8" aria-label="Google Plus">
            <i class="fab fa-google padding: 8px;"></i></a></li>

            <li><a class=" text-sm w-8 h-8 bg-transparent divide-solid border-2 block mr-2 mb-2 rounded text-center leading-8" aria-label="Youtube">
                <i class="fab fa-youtube padding: 8px;"></i></a></li>							</ul>
</div>


</div>
                </div>
            </div>
                
                
    
            </div>
        </div>

    </div>
</div>
</section>
  
  
</footer>
    </section>
</div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      showHeaderSubmenu: false,
      showProductSubmenu: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    toggleHeaderSubmenu() {
      this.showHeaderSubmenu = !this.showHeaderSubmenu;
    },
    toggleProductSubmenu() {
      this.showProductSubmenu = !this.showProductSubmenu;
    },
    closeMobileMenu() {
    this.showMobileMenu = false;
  },
  },
  beforeRouteLeave(to, from, next) {
  this.showMobileMenu = false; // Đảm bảo modal được đóng trước khi chuyển trang
  next();
}
};
</script>







