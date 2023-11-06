<template>
    <Header></Header>
    <main class="">
      <div class="layout-collections">
	<div class="breadcrumb-shop">
  
	<div class="breadcrumb-list mt-[-1px] bg-[#f5f5f5] px-[8px] py-[15px]">
    <div class="container">
		<ol class="breadcrumb flex text-sm py-[9]" itemscope="" itemtype="http://schema.org/BreadcrumbList">
		
			
			
			<li class="active" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
				<span itemprop="item" content="https://yala-style.myharavan.com/collections/all"><strong itemprop="name">Tất cả sản phẩm</strong></span>
				<meta itemprop="position" content="3">
			</li>
			
			
			
		</ol>
	</div>
</div>
</div>

</div>
<!-- hình ảnh -->
<div class="collection-banner-header">
		<img class=" ls-is-cached lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/collection_banner.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/collection_banner.jpg?v=3265" alt="Products">
	</div>
  <!-- wrapper-mainCollection -->
  <div class="wrapper-mainCollection">
    <!--heading -->
    <div class="collection-heading my-[30px]">
			<div class="container">
				<div class="row">	

          <div style="display: flex; justify-content: space-between;">
            <div style="flex: 8;"> 
               <h1 class="text-3xl  font-bold">
							Tất cả sản phẩm
						</h1>
     </div>
         <div style="flex: 2;"> 
        <div class="collection-sortbyfilter-container">
							<div class="collection-sortby-filter flex">
								
								<!-- <div class="collection-filterby">
									<div class="layered_filter_title boxstyle-mb" data-layered-click="#layered_filter_mobile">
										<p class="title_filter">
											<span class="icon-filter"><svg viewBox="0 0 20 20"><path fill="none" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M12 9v8l-4-4V9L2 3h16z"></path></svg></span>
											<span class="icon-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></span>										
											Bộ lọc 
										</p>
									</div>
								</div> -->
								
								
								<div class="collection-sortby flex-1 w-[50%]">
  <div class="layered_filter relative h-[38px] leading-9 font-semibold pr-[40px] pt-[5px] border border-inherit" @click="toggleDropdown">
    <p class="title_filter flex align-top">
      <span class="icon-filter mr-[6px]">
        <i class="fab fa-sort-alpha-asc" aria-hidden="true"></i>
      </span>
      Sắp xếp
    </p>
  </div>
  <ul class="dropdown" v-if="isDropdownVisible">
    <li><a href="#">Sắp xếp theo tên A-Z</a></li>
    <li><a href="#">Sắp xếp theo tên Z-A</a></li>
    <li><a href="#">Sắp xếp theo giá tăng dần</a></li>
    <li><a href="#">Sắp xếp theo giá giảm dần</a></li>
  </ul>
</div>

</div>
						</div>
  </div>
</div>
					
				</div>
			</div>
	</div>
<!-- filter -->
<div class="collection-filter">
		<div class="container">
			<div class="wrapper_layered_filter">
	<div class="layered_filter container flex">
		<div class="layered_filter_title  uppercase" >
			<p class="title_filter">
				<span class="icon-filter"><svg viewBox="0 0 20 20"><path fill="none" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M12 9v8l-4-4V9L2 3h16z"></path></svg></span>
				Bộ lọc 
			</p>
		</div>
        <div class="layered_filter_group ">
			<div class="row clearfix " >
				<!-- ./filter brand -->
				
				<div class="filter_group flex">
  <div class="filter_group_block">
    <div class="filter_group-subtitle h-[38px] leading-9 font-semibold pr-[40px] pt-[5px] border border-inherit" @mouseover="showBrandDropdown" @mouseleave="hideBrandDropdown">
      <span>Thương hiệu</span>
      <span class="icon-control"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
    </div>

    <ul class="checkbox" v-if="isBrandDropdownVisible">
      <li>
        <input type="checkbox" id="data-brand-p1" value="Khác">
        <label for="data-brand-p1">Khác</label>
      </li>
    </ul>
  </div>

  <div class="filter_group_block">
    <div class="filter_group-subtitle h-[38px] leading-9 font-semibold pr-[40px] pt-[5px] border border-inherit" @mouseover="showPriceDropdown" @mouseleave="hidePriceDropdown">
      <span>Lọc giá</span>
      <span class="icon-control"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
    </div>
    <div class="filter_group-content filter-price">
      <ul class="checkbox-list" v-if="isPriceDropdownVisible">
        <li>
          <input type="checkbox" id="p1" name="cc" data-price="(price:product<=1000000)">
          <label for="p1">
            <span>Dưới</span> 1.000.000₫
          </label>
        </li>
        <!-- Các mục khác ở đây -->
      </ul>
    </div>
  </div>
</div>

		</div>
	</div>
	<!-- <div class="layered_filter_tags">
		
		<div class="filter_tags">			
			Thương hiệu: <b></b>		
			<span class="filter_tags_remove">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
					<path fill="#333" d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z"></path>
				</svg>
			</span>
		</div>
		
			
		<div class="filter_tags">Lọc giá: <b></b>
			<span class="filter_tags_remove">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
					<path fill="#333" d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z"></path>
				</svg>
			</span>
		</div>
			
		
		<div class="filter_tags">Màu sắc: <b></b>
			<span class="filter_tags_remove">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
					<path fill="#333" d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z"></path>
				</svg>
			</span>
		</div>
			
		
		<div class="filter_tags">Kích thước: <b></b>
			<span class="filter_tags_remove">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve">
					<path fill="#333" d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 1 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z"></path>
				</svg>
			</span>
		</div>
			
		<div class="filter_tags filter_tags_remove_all"><span>Xóa hết </span></div>
	</div> -->
</div></div></div>
</div>
  </div>
    </main>
    <Footer></Footer>
</template>
<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
	  isBrandDropdownVisible: false,
      isPriceDropdownVisible: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
	toggleBrandDropdown() {
      this.isBrandDropdownVisible = !this.isBrandDropdownVisible;
    },
    togglePriceDropdown() {
      this.isPriceDropdownVisible = !this.isPriceDropdownVisible;
    }
  },
};

</script>
