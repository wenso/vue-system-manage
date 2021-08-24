<template>
  <svg aria-hidden="true" :height=size :width="size" :class="svgClass">
    <use :xlink:href="className" :fill="color" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props:{
    iconClass:{
      type:String,
      required:true
    },
    className:{
      type:String,
      default:""
    },
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333",
    },
    size: {
      type: Number,
      required: false,
      default: 24,
    }
  },
  computed:{
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className;
      } else {
        return 'svg-icon';
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      };
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
