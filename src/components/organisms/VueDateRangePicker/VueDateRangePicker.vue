<template>
  <div :class="$style.vueDateRangePicker">
    <vue-date-picker
      id="startDate"
      name="startDate"
      :min-date="minDate"
      :max-date="maxDate"
      :first-day-of-week="firstDayOfWeek"
      :placeholder="placeholderStart"
      :end-date="endDate"
      :current-date="startDate"
      @change="onStartChange"
    />
    <vue-date-picker
      id="endDate"
      name="endDate"
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
    minDate: { type: Date, default: null },
    maxDate: { type: Date, default: null },
    firstDayOfWeek: { type: Number, default: 0 },
    placeholderStart: { type: String, default: '' },
    placeholderEnd: { type: String, default: '' },
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
