<template>
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
      <button @click="showMobileMenu = !showMobileMenu" class="absolute top-2 right-2 text-gray-500">
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
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
