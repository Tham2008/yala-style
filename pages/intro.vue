<template>

	<div class="container">
	<div class="grid sm:flex">
	  <!-- Nội dung phần chiếm 7 -->
	  <div class="sm:w-2/2 w-full pr-4">
		<div class="listBlogs-content pr-10 ">	
							<div class="heading-pageDetail font-bold text-3xl mt-[20px] mb-[25px]">
								<h1>Giới thiệu</h1>
							</div>
							 
							<div class="content-pageDetail typeList-style ">
							<p class="mb-[10px]">Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. 
								Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ.
								Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</p>
	
								<p class="mb-[10px]">Một vài gợi ý cho nội dung trang Giới thiệu:</p>
	
							<div>
								<ul class="list-disc pt-[5px] ">
									<li><span>Bạn là ai</span><br></li>
									<li><span>Giá trị kinh doanh của bạn là gì</span><br></li>
									<li><span>Địa chỉ cửa hàng</span><br></li>
									<li><span>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</span><br></li>
									<li><span>Bạn kinh doanh ngành hàng online được bao lâu</span><br></li>
									<li><span>Đội ngũ của bạn gồm những ai</span><br></li>
									<li><span>Thông tin liên hệ</span><br></li>
									<li><span>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</span><br></li>
								</ul></div><p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại <a href="{0}/page#/detail/{1}">
									<strong class="text-red-500">đây</strong>
								</a> hoặc thêm những bài viết mới trong phần quản lý <a href="{0}/page#/new">
									<strong class="text-red-500">Trang nội dung</strong></a>.</p>
						</div>
			
						</div>
	  </div>
	  
	  <!-- Nội dung phần chiếm 3 -->
	  <div class="sm:w-1/3 w-full">
		<aside class="sidebar-blogs">
	
	<!-- Menu bai viet -->
	
	 <div class="group-sidebox group-sidebox mt-[30px] relative px-[20px] py-[15px] border border-inherit">
		<div class="sidebox-title ">
				<button
			  class="w-full text-left font-medium text-base py-2 border-b border-gray-300"
			  @click="toggleMenu"
			>
			<h3 class="text-lg font-bold mb-4 relative">Danh mục bài viết
			  <svg
				v-if="isHidden"
				class="h-5 w-5 inline-block ml-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			  >
				<path
				  fill-rule="evenodd"
				  d="M10 14a.75.75 0 01-.53-.22L6 10.47a.75.75 0 011.06-1.06L10 12.94l3.94-3.53a.75.75 0 011.06 1.06l-4.47 4.25a.75.75 0 01-.53.22z"
				></path>
			  </svg>
			  <svg
				v-else
				class="h-5 w-5 inline-block ml-2 transform rotate-180"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			  >
				<path
				  fill-rule="evenodd"
				  d="M10 14a.75.75 0 01-.53-.22L6 10.47a.75.75 0 011.06-1.06L10 12.94l3.94-3.53a.75.75 0 011.06 1.06l-4.47 4.25a.75.75 0 01-.53.22z"
				></path>
			  </svg>
			</h3>
			</button>
			</div>
		<div class="sidebox-content sidebox-content-togged" style="border-top: 1px solid #e7e7e7">
			<ul class="menuList-links"  v-if="!isHidden">
		
				<li class="relative py-[12px] font-medium text-base" style="border-bottom: 1px dashed #e7e7e7"><a href="/" title="Tìm kiếm">
					<span>Tìm kiếm</span></a></li>
	
				<li class="relative py-[12px] font-medium text-base" style="border-bottom: 1px dashed #e7e7e7">
					<a href="/" title="Giới thiệu">Giới thiệu <span class="icon-plus-submenu plus-nClick1"></span></a>
					
				</li>
				
				<li class="relative py-[12px] font-medium text-base" style="border-bottom: 1px dashed #e7e7e7" title="Chính sách đổi trả"><span>Chính sách đổi trả</span></li>
	
				<li class="relative py-[12px] font-medium text-base" style="border-bottom: 1px dashed #e7e7e7"
				 title="Chính sách bảo mật">Chính sách bảo mật <span class="icon-plus-submenu plus-nClick1"></span>
					
				</li> 
				
				<li class="relative py-[12px] font-medium text-base" title="Điều khoản dịch vụ"><span>Điều khoản dịch vụ</span></li>				
				
			</ul>
		</div>
	
	</div>
	
	<div class="group-sidebox-banner mt-[30px]">
		<figure class="groupbanner_image groupbanner-hover"> 
			<a class="groupbanner_image_link" href="/">
				<div class="groupbanner_image_block">
					<picture>
						<source data-srcset="//theme.hstatic.net/200000301562/1000687964/14/page_banner_image.jpg?v=3265" srcset="//theme.hstatic.net/200000301562/1000687964/14/page_banner_image.jpg?v=3265">
						<img class=" lazyloaded" data-src="//theme.hstatic.net/200000301562/1000687964/14/page_banner_image.jpg?v=3265" src="//theme.hstatic.net/200000301562/1000687964/14/page_banner_image.jpg?v=3265" alt="runner">
					</picture>
				</div>						
			</a>		
		</figure>	
	</div>
	</aside>
	  </div>
	</div>
	</div>
	</template>
	<script>
	export default {
		data() {
		  return {
			isHidden: false,
		  };
		},
		methods: {
		  toggleMenu() {
			if (window.innerWidth <= 640) {
			  this.isHidden = !this.isHidden;
			}
		  },
		},
		mounted() {
		  window.addEventListener('resize', this.toggleMenu);
		},
		beforeDestroy() {
		  window.removeEventListener('resize', this.toggleMenu);
		},
	  };
	</script>