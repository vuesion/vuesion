<template>
  <div :class="$style.vueDateRangePicker">
    <vue-date-picker
      name="startDate"
      id="startDate"
      :min-date="minDate"
      :max-date="maxDate"
      :first-day-of-week="firstDayOfWeek"
      :placeholder="placeholderStart"
      :end-date="endDate"
      :current-date="startDate"
      @change="onStartChange"
    />
    <vue-date-picker
      name="endDate"
      id="endDate"
      :min-date="minDate"
      :max-date="maxDate"
      :first-day-of-week="firstDayOfWeek"
      :placeholder="placeholderEnd"
      :start-date="startDate"
      :current-date="endDate"
      @change="onEndChange"
    />
  </div>
</template>

<script lang="ts">
import VueDatePicker from '../VueDatePicker/VueDatePicker.vue';

export default {
  name: 'VueDateRangePicker',
  components: {
    VueDatePicker,
  },
  props: {
    minDate: {
      type: Date,
    },
    maxDate: {
      type: Date,
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
    },
    placeholderStart: {
      type: String,
    },
    placeholderEnd: {
      type: String,
    },
  },
  data(): any {
    return {
      startDate: null,
      endDate: null,
    };
  },
  methods: {
    onStartChange(startDate: Date) {
      this.startDate = startDate;

      if (this.endDate && this.endDate.getTime() < this.startDate.getTime()) {
        this.endDate = this.startDate;
      }
    },
    onEndChange(endDate: Date) {
      this.endDate = endDate;
      this.$emit('change', [this.startDate, this.endDate]);
    },
  },
};
</script>

<style lang="scss" module>
.vueDateRangePicker {
}
</style>
