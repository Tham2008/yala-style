<template>
  <div class="w-full ">
    <div class="owl-item" :class="{ 'md:w-1/2': containerWidth > 768, 'md:w-full': containerWidth <= 768 }">
      <div class="slider-item">
        <div class="slide--image">
          <a href="/collections/all" title="">
            <picture>
              <img
                :src="imageUrls[currentIndex]"
                alt="Slideshow Image"
                class="w-full transition-opacity duration-300 hover:opacity-100"
              />
            </picture>
          </a>
          <div class="dot-indicators text-center">
            <div
              class="owl-dots"
              @mouseover="showDots = true"
              @mouseleave="showDots = false"
            >
              <button
                role="button"
                class="owl-dot"
                :class="{ 'active': currentIndex === 0 }"
                aria-label="1"
                @click="goToImage(0)"
              >
                <span></span>
              </button>
              <button
                role="button"
                class="owl-dot"
                :class="{ 'active': currentIndex === 1 }"
                aria-label="2"
                @click="goToImage(1)"
              >
                <span></span>
              </button>
              <button
                role="button"
                class="owl-dot"
                :class="{ 'active': currentIndex === 2 }"
                aria-label="3"
                @click="goToImage(2)"
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <div class="navigation-buttons">
          <button @click="previousImage" class="nav-button left opacity-0 hover:opacity-100">
            <i class="fas fa-chevron-left text-slate-950"></i>
          </button>
          <button @click="nextImage" class="nav-button right opacity-0 hover:opacity-100">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrls: [
        "https://theme.hstatic.net/200000301562/1000687964/14/slide_1_img.jpg?v=3265",
        "https://theme.hstatic.net/200000301562/1000687964/14/slide_2_img.jpg?v=3265",
        "https://theme.hstatic.net/200000301562/1000687964/14/slide_3_img.jpg?v=3265",
      ],
      currentIndex: 0,
      showNavigationButtons: false,
      showDots: false,
      dotIndicators: [true, false, false],
    };
  },
  created() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
      }, 5000);
    },
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    },
    goToImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.navigation-buttons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-button {
  background: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
}

.owl-dots {
  position: relative;
  bottom: 30px;
}

.owl-dot {
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  transition: background-color 0.2s ease;
}

.owl-dot.active {
  background-color: #ff0000;
}
</style>
