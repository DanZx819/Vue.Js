app.component("product-display", {
  setup() {
    const image = ref("assets/images/t-shirt-blue.png");
    const changeImage = (variantImage) => {
      image.value = variantImage;
    };

    const product_title = "T-Shirt";
    const brand = "Marca";

    const titleWithBrand = computed(() => {
      return product_title + " " + brand;
    });

    const inStock = 0;

    const inStockComputed = computed(() => {
      if (inStock > 10) {
        return "In Stock";
      } else if (inStock <= 10 && inStock > 0) {
        return `Almost of out ${inStock}`;
      } else {
        return "Out of Stock";
      }
    });

    return {
      details: ["50% Cotton", "30% polyester", "20% wool"],
      variants: [
        { id: 1, color: "blue", image: "assets/images/t-shirt-blue.png" },
        { id: 2, color: "green", image: "assets/images/t-shirt-green.png" },
      ],
      changeImage,
      image,
      titleWithBrand,
      inStockComputed,
    };
  },
  template: `<div id="app">
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- Imagem do produto -->
            <img :src="image" alt="img-product" />
          </div>
          <div class="product-info">
            <!-- Info do produto-->
            <h1>{{ titleWithBrand }}</h1>
            <p >{{inStockComputed}}</p>
            

            <ul>
              <li v-for="detail in details">{{detail}}</li>
            </ul>

            <div
              v-for="variant in variants"
              :key="variant.id"
              @click="changeImage(variant.image)"
              class="color-circle"
              :style="{backgroundColor : variant.color}"
            ></div>
            <button
              class="button"
              @click="$emit('add-to-cart')"
              :disabled="inStock < 1"
              :class="{disabledButton: inStock < 1}"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>`,
});
