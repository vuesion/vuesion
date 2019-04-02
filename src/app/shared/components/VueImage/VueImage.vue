<template>
  <component :is="component" ref="image" />
</template>

<script lang="ts">
export default {
  name: 'VueImage',
  components: {},
  props: {
    native: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  data(): any {
    return {
      observer: null,
    };
  },
  computed: {
    component() {
      return this.native ? 'img' : 'div';
    },
  },
  methods: {
    setImage() {
      if (this.native) {
        this.$refs.image.src = this.src;
      } else {
        this.$refs.image.style.backgroundImage = `url(${this.src})`;
      }
    },
    handleObserver(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > 0) {
          this.setImage();
          this.observer.disconnect();
        }
      });
    },
    createObserver() {
      this.observer = new IntersectionObserver(this.handleObserver, { rootMargin: '0px', threshold: 0.1 });
      this.observer.observe(this.$refs.image);
    },
  },
  mounted() {
    if ((window as any).IntersectionObserver) {
      this.createObserver();
    } else {
      this.setImage();
    }
  },
};
</script>
